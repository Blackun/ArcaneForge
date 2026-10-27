import fs from 'node:fs';
import path from 'node:path';
import { stripTypeScriptTypes } from 'node:module';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const srcDir = path.join(rootDir, 'src');
const distDir = path.join(rootDir, 'dist');

function getAllTsFiles(dir, fileList = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      getAllTsFiles(fullPath, fileList);
    } else if (entry.isFile() && entry.name.endsWith('.ts')) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

console.log('🔨 [1/3] TypeScript 모듈 트랜스파일 및 브라우저 번들 빌드 시작...');
const tsFiles = getAllTsFiles(srcDir);

for (const tsFile of tsFiles) {
  const relPath = path.relative(srcDir, tsFile);
  const outPath = path.join(distDir, relPath.replace(/\.ts$/, '.js'));
  fs.mkdirSync(path.dirname(outPath), { recursive: true });

  let rawCode = fs.readFileSync(tsFile, 'utf8');
  // Remove CSS import for pure ES module / bundle execution
  rawCode = rawCode.replace(/^\s*import\s+['"]\.\/style\.css['"];?\s*$/m, '');
  // Remove imports from types.ts since types.ts contains only TypeScript interfaces/types
  rawCode = rawCode.replace(/^\s*import\s+\{[\s\S]*?\}\s+from\s+['"](?:\.\.?\/)+types['"];?\s*$/gm, '');

  let jsCode = stripTypeScriptTypes(rawCode, { mode: 'strip' });

  // Append .js extension to relative imports for native ES Modules
  jsCode = jsCode.replace(
    /(from\s+['"])(\.\.?\/[^'"]+)(['"])/g,
    (match, prefix, spec, suffix) => {
      if (spec.endsWith('.js') || spec.endsWith('.css')) return match;
      return `${prefix}${spec}.js${suffix}`;
    }
  );

  fs.writeFileSync(outPath, jsCode, 'utf8');
  console.log(`  ✓ Compiled: src/${relPath} -> dist/${relPath.replace(/\.ts$/, '.js')}`);
}

// Create a single self-contained IIFE bundle (dist/bundle.js) so index.html works both via HTTP server and direct file:// open!
const bundleOrder = [
  'data/items.js',
  'data/quests.js',
  'data/story.js',
  'data/monsters.js',
  'systems/audio.js',
  'systems/particles.js',
  'views/worldmap.js',
  'main.js',
];

let bundleParts = [
  '/* Arcane Forge: Merge & Restore - Auto-generated Browser Bundle */',
  '(function () {',
  '  "use strict";',
];

for (const modRel of bundleOrder) {
  const modPath = path.join(distDir, modRel);
  let code = fs.readFileSync(modPath, 'utf8');
  // Strip import statements
  code = code.replace(/^\s*import\s+[\s\S]*?from\s+['"][^'"]+['"];?\s*$/gm, '');
  // Strip export keywords
  code = code.replace(/^\s*export\s+(const|let|var|function|class)\s+/gm, '$1 ');
  code = code.replace(/^\s*export\s+\{[\s\S]*?\};?\s*$/gm, '');
  bundleParts.push(`\n  // --- Module: ${modRel} ---\n` + code);
}

bundleParts.push('})();\n');
const bundlePath = path.join(distDir, 'bundle.js');
fs.writeFileSync(bundlePath, bundleParts.join('\n'), 'utf8');
console.log(`  ✓ Bundled: dist/bundle.js (${(fs.statSync(bundlePath).size / 1024).toFixed(1)} KB)`);

// Update cache-busting query string in index.html so browsers never serve stale bundle.js
const indexHtmlPath = path.join(rootDir, 'index.html');
if (fs.existsSync(indexHtmlPath)) {
  const buildVer = Date.now();
  let html = fs.readFileSync(indexHtmlPath, 'utf8');
  html = html.replace(/\.\/dist\/bundle\.js(\?v=\d+)?/g, `./dist/bundle.js?v=${buildVer}`);
  html = html.replace(/\.\/src\/style\.css(\?v=\d+)?/g, `./src/style.css?v=${buildVer}`);
  fs.writeFileSync(indexHtmlPath, html, 'utf8');
  console.log(`  ✓ Cache-busted index.html (?v=${buildVer})`);
}

console.log('\n🧪 [2/3] 게임 데이터·교차 연성·퀘스트·SVG 월드맵 무결성 자동 검증 실행...');

const itemsMod = await import(path.join(distDir, 'data/items.js'));
const questsMod = await import(path.join(distDir, 'data/quests.js'));
const worldmapMod = await import(path.join(distDir, 'views/worldmap.js'));

const { ITEMS, ITEM_LIST, CROSS_CRAFT_RECIPES, getItemDef, findCrossCraftRecipe } = itemsMod;
const { WORKSHOP_ZONES, QUESTS } = questsMod;
const { renderZoneSceneSvg, renderPortraitSvg } = worldmapMod;

let errors = 0;
function assert(cond, msg) {
  if (!cond) {
    console.error(`  ❌ ASSERTION FAILED: ${msg}`);
    errors++;
  }
}

// 1. Check item count & SVG icons
console.log(`  • 등록된 총 아이템 수: ${ITEM_LIST.length}종`);
assert(ITEM_LIST.length >= 40, `Expected at least 40 items, got ${ITEM_LIST.length}`);

for (const item of ITEM_LIST) {
  assert(item.id && item.name && item.svgIcon.includes('<svg'), `Invalid item or SVG: ${item.id}`);
  if (item.nextItemId) {
    assert(!!getItemDef(item.nextItemId), `Missing nextItemId ${item.nextItemId} for ${item.id}`);
  }
  if (item.spawnPool) {
    for (const entry of item.spawnPool) {
      assert(!!getItemDef(entry.itemId), `Missing spawnPool itemId ${entry.itemId} in ${item.id}`);
    }
  }
}

// 2. Check Cross-Crafting Recipes (both directions A+B and B+A)
console.log(`  • 등록된 이종 교차 연성(Cross-Crafting) 레시피: ${CROSS_CRAFT_RECIPES.length}종`);
assert(CROSS_CRAFT_RECIPES.length === 4, 'Expected 4 cross-craft recipes');
for (const r of CROSS_CRAFT_RECIPES) {
  const forward = findCrossCraftRecipe(r.ingredientA, r.ingredientB);
  const reverse = findCrossCraftRecipe(r.ingredientB, r.ingredientA);
  assert(forward && forward.id === r.id, `Forward cross-craft failed for ${r.id}`);
  assert(reverse && reverse.id === r.id, `Reverse cross-craft failed for ${r.id}`);
  const resultDef = getItemDef(r.resultItemId);
  assert(resultDef && resultDef.category === 'hybrid', `Invalid hybrid result item for ${r.id}`);
  console.log(`    ✓ ${getItemDef(r.ingredientA).name} + ${getItemDef(r.ingredientB).name} => ${resultDef.name}`);
}

// 3. Check Workshop Zones & 15 Quests
console.log(`  • 마법 공방 복구 구역: ${WORKSHOP_ZONES.length}개 구역 / 총 ${QUESTS.length}단계 복구 퀘스트`);
assert(WORKSHOP_ZONES.length === 5, 'Expected 5 workshop zones');
assert(QUESTS.length === 15, 'Expected 15 quests');

for (const q of QUESTS) {
  assert(q.requiredItems.length > 0, `Quest ${q.id} has no requiredItems`);
  for (const req of q.requiredItems) {
    assert(!!getItemDef(req.itemId), `Quest ${q.id} requires unknown item ${req.itemId}`);
  }
  if (q.rewardItemIds) {
    for (const rew of q.rewardItemIds) {
      assert(!!getItemDef(rew), `Quest ${q.id} rewards unknown item ${rew}`);
    }
  }
  assert(Array.isArray(q.dialogue) && q.dialogue.length >= 2, `Quest ${q.id} missing dialogue`);
}

// 4. Check SVG Worldmap scenes & Character Portraits
for (const z of WORKSHOP_ZONES) {
  for (let step = 0; step <= z.maxSteps; step++) {
    const svg = renderZoneSceneSvg(z.id, step, z.maxSteps);
    assert(svg && svg.includes('<svg'), `Missing zone SVG for ${z.id} step ${step}`);
  }
}
assert(renderPortraitSvg('lia').includes('<svg'), 'Missing Lia portrait SVG');
assert(renderPortraitSvg('torg').includes('<svg'), 'Missing Torg portrait SVG');
assert(renderPortraitSvg('alchemist').includes('<svg'), 'Missing Alchemist portrait SVG');
assert(renderPortraitSvg('blacksmith').includes('<svg'), 'Missing Blacksmith portrait SVG');
assert(renderPortraitSvg('narrator').includes('<svg'), 'Missing Narrator portrait SVG');

// 4.5 Check Story Images & Character Portraits on Disk
const storyMod = await import(path.join(distDir, 'data/story.js'));
const { STORY_CHAPTERS, STORY_IMAGES, CHARACTER_PORTRAITS, getCharacterPortrait } = storyMod;
for (const [key, relUrl] of Object.entries(STORY_IMAGES)) {
  const fullImgPath = path.join(rootDir, relUrl.replace(/^\.\//, ''));
  assert(fs.existsSync(fullImgPath), `Missing story image file on disk for ${key}: ${relUrl}`);
}
for (const [roleKey, relUrl] of Object.entries(CHARACTER_PORTRAITS)) {
  const fullImgPath = path.join(rootDir, relUrl.replace(/^\.\//, ''));
  assert(fs.existsSync(fullImgPath), `Missing portrait image file on disk for role ${roleKey}: ${relUrl}`);
}
for (const q of QUESTS) {
  for (const line of q.dialogue) {
    const portraitUrl = CHARACTER_PORTRAITS[line.role];
    const resolvedUrl = getCharacterPortrait(line.role);
    assert(!!portraitUrl && !!resolvedUrl, `Unmapped dialogue role "${line.role}" in quest ${q.id}`);
    const fullImgPath = path.join(rootDir, portraitUrl.replace(/^\.\//, ''));
    assert(fs.existsSync(fullImgPath), `Missing quest dialogue portrait file for role "${line.role}"`);
  }
}
for (const ch of STORY_CHAPTERS) {
  for (const line of ch.lines) {
    const portraitUrl = CHARACTER_PORTRAITS[line.role];
    assert(!!portraitUrl, `Unmapped story role "${line.role}" in chapter ${ch.id}`);
  }
}

// 5. Check Monsters & Combat Damage System
const monstersMod = await import(path.join(distDir, 'data/monsters.js'));
const { MONSTERS, calculateItemDamage } = monstersMod;
console.log(`  • 등록된 보스 몬스터: ${MONSTERS.length}종`);
assert(MONSTERS.length === 5, `Expected 5 monsters, got ${MONSTERS.length}`);
for (const m of MONSTERS) {
  assert(m.id && m.name && m.svgArt.includes('<svg'), `Invalid monster SVG: ${m.id}`);
  assert(m.maxHp > 0, `Invalid maxHp for ${m.id}`);
  const sigId = m.recommendedItemIds[0];
  const sigDef = getItemDef(sigId);
  assert(!!sigDef, `Unknown recommendedItemId ${sigId} for monster ${m.id}`);
  const sigCombat = calculateItemDamage(sigDef, m);
  assert(sigCombat.damage > 0 && sigCombat.isSignature, `Signature combat failed for ${m.id}`);
  console.log(`    ✓ ${m.name} (HP ${m.maxHp}) — 특효 약점: ${sigDef.name} (데미지 ${sigCombat.damage})`);
}

if (errors > 0) {
  console.error(`\n❌ 총 ${errors}개의 검증 오류가 발견되었습니다.`);
  process.exit(1);
}
console.log('  ✅ 모든 아이템 체인(44종), 교차 연성(4종), 복구 퀘스트(15종), 보스 몬스터 전투(5종), 월드맵 SVG 검증 100% 통과!');
