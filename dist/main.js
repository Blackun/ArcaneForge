
import {
  ITEMS,
  ITEM_LIST,
  CROSS_CRAFT_RECIPES,
  getItemDef,
  findCrossCraftRecipe,
} from './data/items.js';
import { WORKSHOP_ZONES, QUESTS } from './data/quests.js';
import { soundSystem } from './systems/audio.js';
import { ParticleSystem } from './systems/particles.js';
import { renderZoneSceneSvg, renderPortraitSvg } from './views/worldmap.js';
import {
  STORY_CHAPTERS,
  STORY_IMAGES,
  CHARACTER_PORTRAITS,
  getCharacterPortrait,
  COMPANION_CHATTER,
  StoryChapter,
} from './data/story.js';
import { MONSTERS, MonsterDef, calculateItemDamage } from './data/monsters.js';

const STORAGE_KEY = 'arcane_forge_save_v1';
const MONSTER_STORAGE_KEY = 'arcane_forge_monsters_v1';
const PROLOGUE_SEEN_KEY = 'arcane_forge_prologue_seen_v1';
const ENERGY_REGEN_MS = 4000; // Fast web-friendly regen: +1 energy every 4 seconds

                                                 
                 
                                   
                                         

class ArcaneForgeGame {
          state           ;
          activeView             = 'board';
          selectedSource                    = null;
          draggingSource                    = null;
          dragGhostEl                     = null;
          particles                 ;
          comboCount = 0;
          lastMergeTime = 0;
          companionSpeaker                 = 'lia';

  // Modals
          showCodexModal = false;
          activeStoryCutscene   
                          
                      
                               
           = null;
          claimedStoryChoiceIds           = [];
          activeDialogue   
                       
                     
                    
                          
                         
           = null;
          discoveryToast                 = null;
          toastTimeout                = null;
          monsterHpMap                         = {};
          defeatedMonsterIds           = [];
          monsterHitShake = false;
          bgmStartedOnce = false;

  constructor() {
    this.state = this.loadState();
    this.loadMonsterState();
    // Auto-open Prologue Cutscene on first play so the user immediately experiences the story & artwork
    try {
      if (!localStorage.getItem(PROLOGUE_SEEN_KEY)) {
        this.activeStoryCutscene = {
          chapter: STORY_CHAPTERS[0],
          lineIndex: 0,
        };
      }
    } catch {
      // ignore storage errors
    }
    this.initDOM();
    this.startLoops();
    if (this.activeStoryCutscene) {
      const firstLine = this.activeStoryCutscene.chapter.lines[0];
      if (firstLine) {
        window.setTimeout(() => {
          soundSystem.speakNarration(firstLine.text, firstLine.role);
        }, 400);
      }
    }
  }

          loadMonsterState()       {
    try {
      const raw = localStorage.getItem(MONSTER_STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === 'object') {
          this.monsterHpMap = parsed.hpMap ?? {};
          this.defeatedMonsterIds = Array.isArray(parsed.defeated) ? parsed.defeated : [];
        }
      }
    } catch {
      // ignore
    }
    for (const m of MONSTERS) {
      if (this.monsterHpMap[m.id] === undefined) {
        this.monsterHpMap[m.id] = m.maxHp;
      }
    }
  }

          saveMonsterState()       {
    try {
      localStorage.setItem(
        MONSTER_STORAGE_KEY,
        JSON.stringify({
          hpMap: this.monsterHpMap,
          defeated: this.defeatedMonsterIds,
        })
      );
    } catch {
      // ignore
    }
  }

          getCurrentMonster()             {
    // Pick the first undefeated monster, or the monster matching the active quest's zone
    for (const m of MONSTERS) {
      if (!this.defeatedMonsterIds.includes(m.id)) {
        if ((this.monsterHpMap[m.id] ?? m.maxHp) <= 0) {
          this.monsterHpMap[m.id] = m.maxHp;
        }
        return m;
      }
    }
    // All defeated -> allow repeatable boss battle with the final Eclipse Dragon!
    const finalBoss = MONSTERS[MONSTERS.length - 1];
    if ((this.monsterHpMap[finalBoss.id] ?? 0) <= 0) {
      this.monsterHpMap[finalBoss.id] = finalBoss.maxHp;
    }
    return finalBoss;
  }

         attackMonsterWithSource(source            )          {
    const cellItem = this.getItemAt(source);
    if (!cellItem) return false;
    const def = getItemDef(cellItem.itemId);
    if (!def) return false;

    const monster = this.getCurrentMonster();
    const combat = calculateItemDamage(def, monster);
    if (combat.damage <= 0) {
      const pos = this.getCellCenter(source);
      soundSystem.playError();
      this.particles?.spawnFloatingText(
        pos.x,
        pos.y - 12,
        '무기·포션·비전·아티팩트만 공격 가능합니다!',
        'normal'
      );
      return false;
    }

    // Consume the item used for the attack
    this.setItemAt(source, null);
    if (
      this.selectedSource &&
      this.selectedSource.type === source.type &&
      this.selectedSource.index === source.index
    ) {
      this.selectedSource = null;
    }

    const arenaEl = document.querySelector('[data-monster-target]')                      ;
    const rect = arenaEl?.getBoundingClientRect();
    const hitX = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
    const hitY = rect ? rect.top + rect.height / 2 : 220;

    const isCrit = combat.isSignature || combat.isWeakness;
    soundSystem.playMonsterHit(def.category, isCrit);
    this.particles?.burstCombatHit(hitX, hitY, def.category, isCrit);
    this.particles?.spawnFloatingText(
      hitX,
      hitY - 18,
      `⚔️ -${combat.damage} HP! (${combat.flavorText})`,
      combat.isSignature ? 'critical' : combat.isWeakness ? 'cross' : 'normal'
    );

    const prevHp = this.monsterHpMap[monster.id] ?? monster.maxHp;
    const nextHp = Math.max(0, prevHp - combat.damage);
    this.monsterHpMap[monster.id] = nextHp;
    this.monsterHitShake = true;
    window.setTimeout(() => {
      this.monsterHitShake = false;
      const card = document.querySelector('.monster-card');
      card?.classList.remove('hit-shake');
    }, 450);

    if (nextHp <= 0) {
      // Monster defeated!
      if (!this.defeatedMonsterIds.includes(monster.id)) {
        this.defeatedMonsterIds.push(monster.id);
      }
      this.state.gold += monster.rewardGold;
      this.state.energy = Math.min(
        this.state.maxEnergy + 100,
        this.state.energy + monster.rewardEnergy
      );

      if (monster.rewardItemId) {
        const emptyIdx = this.findEmptyGridIndex(24);
        const rDef = getItemDef(monster.rewardItemId);
        if (emptyIdx !== -1 && rDef) {
          this.state.grid[emptyIdx] = {
            uid: this.makeUid(),
            itemId: rDef.id,
            chargesLeft: rDef.charges,
          };
          this.registerDiscovery(rDef.id);
        }
      }

      soundSystem.playMonsterDefeat();
      this.particles?.burstRestore(hitX, hitY);
      this.particles?.spawnFloatingText(
        hitX,
        hitY - 42,
        `🏆 ${monster.name} 토벌 완료! +${monster.rewardGold}G & +${monster.rewardEnergy}⚡`,
        'gold'
      );

      this.activeDialogue = {
        questTitle: `⚔️ ${monster.name} 토벌 성공!`,
        zoneName: monster.title,
        zoneId: monster.zoneId,
        lines: monster.defeatDialogue,
        currentIndex: 0,
      };
      const firstDefeatLine = monster.defeatDialogue[0];
      if (firstDefeatLine) {
        soundSystem.speakNarration(firstDefeatLine.text, firstDefeatLine.role);
      }
    }

    this.saveMonsterState();
    this.saveState();
    this.render();
    return true;
  }

          createInitialState()            {
    const grid                          = Array(49).fill(null);

    // Place starter generators and materials on the 7x7 board
    const place = (idx        , itemId        , chargesLeft         ) => {
      grid[idx] = {
        uid: `item_${Date.now()}_${idx}_${Math.random().toString(36).slice(2, 6)}`,
        itemId,
        chargesLeft,
      };
    };

    // Row 0-1: starter generators in comfortable spots
    place(16, 'gen_forge_1');     // Forge Anvil Lv.1
    place(18, 'gen_alchemy_1');   // Herb Basket Lv.1
    place(24, 'weapon_1');        // Iron Ore
    place(25, 'weapon_1');        // Iron Ore (ready to merge!)
    place(26, 'potion_1');        // Wild Herb
    place(27, 'potion_1');        // Wild Herb (ready to merge!)
    place(31, 'weapon_2');        // Steel Ingot
    place(33, 'potion_2');        // Refined Sap
    place(10, 'chest_supply_1', 4); // Starter supply chest

    return {
      energy: 100,
      maxEnergy: 100,
      lastEnergyTick: Date.now(),
      gold: 120,
      gems: 25,
      grid,
      inventory: Array(5).fill(null),
      inventoryMaxSlots: 5,
      completedQuestIds: [],
      zoneProgress: {
        zone_forge: 0,
        zone_alchemy: 0,
        zone_altar: 0,
        zone_library: 0,
        zone_sanctum: 0,
      },
      discoveredItemIds: [
        'gen_forge_1',
        'gen_alchemy_1',
        'weapon_1',
        'weapon_2',
        'potion_1',
        'potion_2',
        'chest_supply_1',
      ],
      claimedDiscoveryIds: [],
      discoveredRecipeIds: [],
      totalMerges: 0,
      soundEnabled: true,
    };
  }

          loadState()            {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw)             ;
        if (parsed && Array.isArray(parsed.grid) && parsed.grid.length === 49) {
          soundSystem.setEnabled(parsed.soundEnabled ?? true);
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Failed to load state from localStorage, resetting:', e);
    }
    return this.createInitialState();
  }

          saveState()       {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
    } catch (e) {
      console.warn('Failed to save state:', e);
    }
  }

          makeUid()         {
    return `uid_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
  }

          initDOM()       {
    const canvas = document.getElementById('particle-canvas')                     ;
    if (canvas) {
      this.particles = new ParticleSystem(canvas);
    }
    this.setupGlobalPointerEvents();
    this.render();
  }

          startLoops()       {
    window.setInterval(() => {
      if (this.state.energy < this.state.maxEnergy) {
        const now = Date.now();
        const elapsed = now - this.state.lastEnergyTick;
        if (elapsed >= ENERGY_REGEN_MS) {
          const gained = Math.floor(elapsed / ENERGY_REGEN_MS);
          this.state.energy = Math.min(this.state.maxEnergy, this.state.energy + gained);
          this.state.lastEnergyTick = now;
          this.saveState();
          this.updateTopBarDOM();
        }
      } else {
        this.state.lastEnergyTick = Date.now();
      }
    }, 1000);
  }

          updateTopBarDOM()       {
    const energyText = document.getElementById('energy-val');
    if (energyText) {
      energyText.textContent = `${this.state.energy}/${this.state.maxEnergy}`;
    }
    const goldText = document.getElementById('gold-val');
    if (goldText) {
      goldText.textContent = `${this.state.gold.toLocaleString()}`;
    }
  }

          getItemAt(source            )                      {
    if (source.type === 'grid') {
      return this.state.grid[source.index] ?? null;
    }
    return this.state.inventory[source.index] ?? null;
  }

          setItemAt(source            , item                     )       {
    if (source.type === 'grid') {
      this.state.grid[source.index] = item;
    } else {
      this.state.inventory[source.index] = item;
    }
  }

          findEmptyGridIndex(nearIndex         )         {
    const emptyIndices           = [];
    this.state.grid.forEach((cell, i) => {
      if (!cell) emptyIndices.push(i);
    });
    if (emptyIndices.length === 0) return -1;
    if (nearIndex === undefined) {
      return emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
    }
    const r0 = Math.floor(nearIndex / 7);
    const c0 = nearIndex % 7;
    emptyIndices.sort((a, b) => {
      const da = Math.hypot(Math.floor(a / 7) - r0, (a % 7) - c0);
      const db = Math.hypot(Math.floor(b / 7) - r0, (b % 7) - c0);
      return da - db;
    });
    return emptyIndices[0];
  }

          registerDiscovery(itemId        , x         , y         )       {
    if (!this.state.discoveredItemIds.includes(itemId)) {
      this.state.discoveredItemIds.push(itemId);
      const def = getItemDef(itemId);
      if (def) {
        this.discoveryToast = def;
        if (this.toastTimeout) window.clearTimeout(this.toastTimeout);
        this.toastTimeout = window.setTimeout(() => {
          this.discoveryToast = null;
          this.render();
        }, 3500);
        if (x !== undefined && y !== undefined) {
          this.particles?.spawnFloatingText(x, y - 28, `NEW! ${def.name}`, 'discovery');
        }
      }
    }
  }

          getCellCenter(source            )                           {
    const selector =
      source.type === 'grid'
        ? `[data-grid-index="${source.index}"]`
        : `[data-inv-index="${source.index}"]`;
    const el = document.querySelector(selector)                      ;
    if (el) {
      const rect = el.getBoundingClientRect();
      return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
    }
    return { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  }

          handleCellTap(source            )       {
    const cellItem = this.getItemAt(source);
    if (!cellItem) {
      // If an item was selected, move it to this empty slot!
      if (this.selectedSource) {
        this.executeMoveOrMerge(this.selectedSource, source);
        this.selectedSource = null;
        this.render();
      }
      return;
    }

    const def = getItemDef(cellItem.itemId);
    if (!def) return;

    // Check if tapping the already-selected item triggers activation (Generator, Chest, Gold, Energy)
    const isSameSelection =
      this.selectedSource &&
      this.selectedSource.type === source.type &&
      this.selectedSource.index === source.index;

    if (source.type === 'grid') {
      // Generators spawn immediately on tap (or select + spawn)
      if (
        def.category === 'generator_forge' ||
        def.category === 'generator_alchemy' ||
        def.category === 'generator_arcane'
      ) {
        this.selectedSource = source;
        this.activateGenerator(source.index, def);
        return;
      }

      // Supply Chest spawns on tap
      if (def.category === 'chest') {
        this.selectedSource = source;
        this.activateChest(source.index, cellItem, def);
        return;
      }

      // Consumable Gold or Energy: collect on tap if already selected (double-tap)
      if (isSameSelection && (def.category === 'gold' || def.category === 'energy')) {
        this.consumeItem(source);
        return;
      }
    }

    // If another cell was selected, check if tapping this cell should merge/cross-craft
    if (this.selectedSource && !isSameSelection) {
      const fromItem = this.getItemAt(this.selectedSource);
      if (fromItem) {
        const canSameMerge =
          fromItem.itemId === cellItem.itemId && !!getItemDef(fromItem.itemId)?.nextItemId;
        const canCross = !!findCrossCraftRecipe(fromItem.itemId, cellItem.itemId);
        if (canSameMerge || canCross) {
          this.executeMoveOrMerge(this.selectedSource, source);
          this.selectedSource = source;
          this.render();
          return;
        }
      }
    }

    this.selectedSource = source;
    this.render();
  }

          activateGenerator(gridIndex        , def         )       {
    const cost = def.energyCost ?? 1;
    const origin = this.getCellCenter({ type: 'grid', index: gridIndex });

    if (this.state.energy < cost) {
      soundSystem.playError();
      this.particles?.spawnFloatingText(origin.x, origin.y - 10, '⚡ 에너지 부족!', 'energy');
      this.render();
      return;
    }

    const targetIndex = this.findEmptyGridIndex(gridIndex);
    if (targetIndex === -1) {
      soundSystem.playError();
      this.particles?.spawnFloatingText(origin.x, origin.y - 10, '보드가 꽉 찼습니다!', 'normal');
      this.render();
      return;
    }

    const pool = def.spawnPool ?? [];
    if (pool.length === 0) return;

    const totalWeight = pool.reduce((acc, p) => acc + p.weight, 0);
    let roll = Math.random() * totalWeight;
    let chosenId = pool[0].itemId;
    for (const entry of pool) {
      roll -= entry.weight;
      if (roll <= 0) {
        chosenId = entry.itemId;
        break;
      }
    }

    this.state.energy -= cost;
    const spawnedDef = getItemDef(chosenId);
    this.state.grid[targetIndex] = {
      uid: this.makeUid(),
      itemId: chosenId,
      chargesLeft: spawnedDef?.charges,
    };

    soundSystem.playSpawn(def.category);
    const targetPos = this.getCellCenter({ type: 'grid', index: targetIndex });
    this.particles?.burstSpawn(targetPos.x, targetPos.y, spawnedDef?.color ?? '#fbbf24');
    this.registerDiscovery(chosenId, targetPos.x, targetPos.y);

    this.saveState();
    this.render();
  }

          activateChest(gridIndex        , cellItem              , def         )       {
    const origin = this.getCellCenter({ type: 'grid', index: gridIndex });
    const targetIndex = this.findEmptyGridIndex(gridIndex);
    if (targetIndex === -1) {
      soundSystem.playError();
      this.particles?.spawnFloatingText(origin.x, origin.y - 10, '빈 칸이 필요합니다!', 'normal');
      return;
    }

    const pool = def.spawnPool ?? [
      { itemId: 'gen_forge_1', weight: 30 },
      { itemId: 'gen_alchemy_1', weight: 30 },
      { itemId: 'gold_2', weight: 25 },
      { itemId: 'energy_2', weight: 15 },
    ];
    const totalWeight = pool.reduce((acc, p) => acc + p.weight, 0);
    let roll = Math.random() * totalWeight;
    let chosenId = pool[0].itemId;
    for (const entry of pool) {
      roll -= entry.weight;
      if (roll <= 0) {
        chosenId = entry.itemId;
        break;
      }
    }

    const spawnedDef = getItemDef(chosenId);
    this.state.grid[targetIndex] = {
      uid: this.makeUid(),
      itemId: chosenId,
      chargesLeft: spawnedDef?.charges,
    };

    const remaining = (cellItem.chargesLeft ?? def.charges ?? 4) - 1;
    if (remaining <= 0) {
      this.state.grid[gridIndex] = null;
      if (this.selectedSource?.type === 'grid' && this.selectedSource.index === gridIndex) {
        this.selectedSource = null;
      }
    } else {
      cellItem.chargesLeft = remaining;
    }

    soundSystem.playCollect('chest');
    const targetPos = this.getCellCenter({ type: 'grid', index: targetIndex });
    this.particles?.burstSpawn(targetPos.x, targetPos.y, spawnedDef?.color ?? '#f59e0b');
    this.registerDiscovery(chosenId, targetPos.x, targetPos.y);

    this.saveState();
    this.render();
  }

         consumeItem(source            )       {
    const cellItem = this.getItemAt(source);
    if (!cellItem) return;
    const def = getItemDef(cellItem.itemId);
    if (!def) return;

    const pos = this.getCellCenter(source);
    if (def.category === 'gold') {
      const amount = def.value ?? 15;
      this.state.gold += amount;
      soundSystem.playCollect('gold');
      this.particles?.burstMerge(pos.x, pos.y, '#fbbf24', false);
      this.particles?.spawnFloatingText(pos.x, pos.y - 12, `+${amount} G`, 'gold');
      this.setItemAt(source, null);
    } else if (def.category === 'energy') {
      const amount = def.value ?? 15;
      this.state.energy = Math.min(this.state.maxEnergy + 100, this.state.energy + amount);
      soundSystem.playCollect('energy');
      this.particles?.burstMerge(pos.x, pos.y, '#38bdf8', false);
      this.particles?.spawnFloatingText(pos.x, pos.y - 12, `+${amount} ⚡`, 'energy');
      this.setItemAt(source, null);
    }

    if (
      this.selectedSource &&
      this.selectedSource.type === source.type &&
      this.selectedSource.index === source.index
    ) {
      this.selectedSource = null;
    }
    this.saveState();
    this.render();
  }

         sellSelectedItem()       {
    if (!this.selectedSource) return;
    const cellItem = this.getItemAt(this.selectedSource);
    if (!cellItem) return;
    const def = getItemDef(cellItem.itemId);
    if (!def) return;

    // Prevent selling the last generator of a type
    if (def.category.startsWith('generator_')) {
      const countSameGen =
        this.state.grid.filter((c) => c && getItemDef(c.itemId)?.category === def.category)
          .length +
        this.state.inventory.filter((c) => c && getItemDef(c.itemId)?.category === def.category)
          .length;
      if (countSameGen <= 1) {
        const pos = this.getCellCenter(this.selectedSource);
        soundSystem.playError();
        this.particles?.spawnFloatingText(pos.x, pos.y, '유일한 생성기는 판매할 수 없습니다!', 'normal');
        return;
      }
    }

    const sellPrice = def.value ?? Math.max(2, def.level * 5);
    const pos = this.getCellCenter(this.selectedSource);
    this.state.gold += sellPrice;
    this.setItemAt(this.selectedSource, null);
    this.selectedSource = null;

    soundSystem.playCollect('gold');
    this.particles?.spawnFloatingText(pos.x, pos.y - 10, `판매 +${sellPrice} G`, 'gold');
    this.saveState();
    this.render();
  }

          executeMoveOrMerge(from            , to            )       {
    if (from.type === to.type && from.index === to.index) return;

    const itemA = this.getItemAt(from);
    if (!itemA) return;
    const itemB = this.getItemAt(to);

    // 1. Empty destination -> simply move
    if (!itemB) {
      this.setItemAt(to, itemA);
      this.setItemAt(from, null);
      this.selectedSource = to;
      this.saveState();
      return;
    }

    const defA = getItemDef(itemA.itemId);
    const defB = getItemDef(itemB.itemId);
    if (!defA || !defB) return;

    // 2. Identical item merge (only on grid or into grid)
    if (itemA.itemId === itemB.itemId && defA.nextItemId) {
      let resultId = defA.nextItemId;
      let isCritical = false;

      // 8% Critical Merge (+2 tiers) for production chains if next tier also has a nextItemId
      const nextDef = getItemDef(resultId);
      const isProduction =
        defA.category === 'weapon' || defA.category === 'potion' || defA.category === 'arcane';
      if (isProduction && nextDef?.nextItemId && Math.random() < 0.08) {
        resultId = nextDef.nextItemId;
        isCritical = true;
      }

      const finalDef = getItemDef(resultId);
      this.setItemAt(from, null);
      this.setItemAt(to, {
        uid: this.makeUid(),
        itemId: resultId,
        chargesLeft: finalDef?.charges,
      });

      this.state.totalMerges += 1;
      const now = Date.now();
      if (now - this.lastMergeTime < 3000) {
        this.comboCount = Math.min(8, this.comboCount + 1);
      } else {
        this.comboCount = 1;
      }
      this.lastMergeTime = now;

      const pos = this.getCellCenter(to);
      if (isCritical) {
        soundSystem.playCritical();
        this.particles?.burstMerge(pos.x, pos.y, '#facc15', true);
        this.particles?.spawnFloatingText(pos.x, pos.y - 16, '⚡ CRITICAL +2! ⚡', 'critical');
      } else {
        soundSystem.playMerge(finalDef?.level ?? 2, this.comboCount);
        this.particles?.burstMerge(pos.x, pos.y, finalDef?.color ?? '#34d399', false);
        if (this.comboCount >= 2) {
          this.particles?.spawnFloatingText(
            pos.x,
            pos.y - 12,
            `${this.comboCount}x COMBO!`,
            'normal'
          );
        }
      }

      // 15% Lucky Bonus Drop in an adjacent empty cell (when merging on grid)
      if (to.type === 'grid' && Math.random() < 0.15) {
        const bonusIdx = this.findEmptyGridIndex(to.index);
        if (bonusIdx !== -1) {
          const bonusItemId = Math.random() < 0.55 ? 'energy_1' : 'gold_1';
          this.state.grid[bonusIdx] = {
            uid: this.makeUid(),
            itemId: bonusItemId,
          };
          const bPos = this.getCellCenter({ type: 'grid', index: bonusIdx });
          this.particles?.burstSpawn(bPos.x, bPos.y, '#38bdf8');
          this.particles?.spawnFloatingText(bPos.x, bPos.y - 10, '🍀 LUCKY DROP!', 'energy');
          this.registerDiscovery(bonusItemId);
        }
      }

      this.registerDiscovery(resultId, pos.x, pos.y);
      this.selectedSource = to;
      this.saveState();
      return;
    }

    // 3. Cross-Crafting Recipe check!
    const recipe = findCrossCraftRecipe(itemA.itemId, itemB.itemId);
    if (recipe) {
      const resultDef = getItemDef(recipe.resultItemId);
      this.setItemAt(from, null);
      this.setItemAt(to, {
        uid: this.makeUid(),
        itemId: recipe.resultItemId,
      });

      this.state.totalMerges += 1;
      if (!this.state.discoveredRecipeIds.includes(recipe.id)) {
        this.state.discoveredRecipeIds.push(recipe.id);
      }

      const pos = this.getCellCenter(to);
      soundSystem.playCrossCraft();
      this.particles?.burstCrossCraft(pos.x, pos.y);
      this.particles?.spawnFloatingText(
        pos.x,
        pos.y - 18,
        `🔮 교차 연성! ${resultDef?.name ?? recipe.name}`,
        'cross'
      );
      this.registerDiscovery(recipe.resultItemId, pos.x, pos.y);
      this.selectedSource = to;
      this.saveState();
      return;
    }

    // 4. Otherwise swap the two items!
    this.setItemAt(from, itemB);
    this.setItemAt(to, itemA);
    this.selectedSource = to;
    this.saveState();
  }

          getActiveQuests()             {
    const active             = [];
    for (const zone of WORKSHOP_ZONES) {
      const completedStep = this.state.zoneProgress[zone.id] ?? 0;
      if (completedStep < zone.maxSteps) {
        const nextQuest = QUESTS.find(
          (q) => q.zoneId === zone.id && q.stepIndex === completedStep + 1
        );
        if (nextQuest) active.push(nextQuest);
      }
    }
    return active.slice(0, 2); // Show up to 2 active quests at once
  }

          canFulfillQuest(quest          )          {
    for (const req of quest.requiredItems) {
      const countOnBoard = this.state.grid.filter((c) => c && c.itemId === req.itemId).length;
      if (countOnBoard < req.count) return false;
    }
    return true;
  }

         fulfillQuest(questId        )       {
    const quest = QUESTS.find((q) => q.id === questId);
    if (!quest || !this.canFulfillQuest(quest)) return;

    // Deduct required items from the grid
    for (const req of quest.requiredItems) {
      let needed = req.count;
      for (let i = 0; i < this.state.grid.length && needed > 0; i++) {
        if (this.state.grid[i]?.itemId === req.itemId) {
          this.state.grid[i] = null;
          needed--;
        }
      }
    }

    // Grant rewards
    this.state.gold += quest.rewardGold;
    if (quest.rewardEnergy) {
      this.state.energy = Math.min(this.state.maxEnergy + 100, this.state.energy + quest.rewardEnergy);
    }

    if (quest.rewardItemIds) {
      for (const rewardId of quest.rewardItemIds) {
        const emptyIdx = this.findEmptyGridIndex(24);
        const rDef = getItemDef(rewardId);
        if (emptyIdx !== -1) {
          this.state.grid[emptyIdx] = {
            uid: this.makeUid(),
            itemId: rewardId,
            chargesLeft: rDef?.charges,
          };
          this.registerDiscovery(rewardId);
        } else {
          // Put in inventory if space available
          const invIdx = this.state.inventory.findIndex((s) => s === null);
          if (invIdx !== -1) {
            this.state.inventory[invIdx] = {
              uid: this.makeUid(),
              itemId: rewardId,
              chargesLeft: rDef?.charges,
            };
            this.registerDiscovery(rewardId);
          }
        }
      }
    }

    this.state.completedQuestIds.push(quest.id);
    this.state.zoneProgress[quest.zoneId] = Math.max(
      this.state.zoneProgress[quest.zoneId] ?? 0,
      quest.stepIndex
    );

    soundSystem.playZoneRestore();
    this.particles?.burstRestore(window.innerWidth / 2, window.innerHeight / 3);

    const zone = WORKSHOP_ZONES.find((z) => z.id === quest.zoneId);
    if (quest.dialogue && quest.dialogue.length > 0) {
      this.activeDialogue = {
        questTitle: quest.title,
        zoneName: zone?.name ?? '마법 공방',
        zoneId: quest.zoneId,
        lines: quest.dialogue,
        currentIndex: 0,
      };
    }

    this.saveState();
    this.render();
  }

          expandInventory()       {
    const cost = 150;
    if (this.state.gold < cost || this.state.inventoryMaxSlots >= 10) {
      soundSystem.playError();
      return;
    }
    this.state.gold -= cost;
    this.state.inventoryMaxSlots += 1;
    this.state.inventory.push(null);
    soundSystem.playCollect('gold');
    this.saveState();
    this.render();
  }

          claimDiscoveryReward(itemId        )       {
    if (
      !this.state.discoveredItemIds.includes(itemId) ||
      this.state.claimedDiscoveryIds.includes(itemId)
    ) {
      return;
    }
    this.state.claimedDiscoveryIds.push(itemId);
    const def = getItemDef(itemId);
    const rewardGold = (def?.level ?? 1) * 20;
    const rewardEnergy = 10;
    this.state.gold += rewardGold;
    this.state.energy = Math.min(this.state.maxEnergy + 100, this.state.energy + rewardEnergy);
    soundSystem.playCollect('gold');
    this.particles?.spawnFloatingText(
      window.innerWidth / 2,
      window.innerHeight / 2,
      `도감 보상 +${rewardGold}G & +${rewardEnergy}⚡`,
      'gold'
    );
    this.saveState();
    this.render();
  }

  // Developer Cheat Actions
          runCheat(action                                                            )       {
    if (action === 'energy') {
      this.state.energy += 100;
      soundSystem.playCollect('energy');
      this.particles?.spawnFloatingText(window.innerWidth / 2, 80, '+100 ⚡ 충전 완료!', 'energy');
    } else if (action === 'gold') {
      this.state.gold += 500;
      soundSystem.playCollect('gold');
      this.particles?.spawnFloatingText(window.innerWidth / 2, 80, '+500 G 지급 완료!', 'gold');
    } else if (action === 'chest') {
      const idx = this.findEmptyGridIndex(24);
      if (idx !== -1) {
        const chestDef = getItemDef('chest_supply_2') ?? getItemDef('chest_supply_1');
        const cId = chestDef?.id ?? 'chest_supply_1';
        this.state.grid[idx] = {
          uid: this.makeUid(),
          itemId: cId,
          chargesLeft: chestDef?.charges ?? 6,
        };
        this.registerDiscovery(cId);
        soundSystem.playCollect('chest');
      }
    } else if (action === 'weapon') {
      const monster = this.getCurrentMonster();
      const idx = this.findEmptyGridIndex(24);
      if (idx !== -1) {
        const recId = monster.recommendedItemIds[0] ?? 'hybrid_flameblade';
        const sigDef = getItemDef(recId) ?? getItemDef('hybrid_flameblade');
        const itemId = sigDef?.id ?? 'weapon_3';
        this.state.grid[idx] = {
          uid: this.makeUid(),
          itemId,
        };
        this.registerDiscovery(itemId);
        soundSystem.playCrossCraft();
        this.particles?.spawnFloatingText(
          window.innerWidth / 2,
          110,
          `⚔️ 보스 약점 특효 [${sigDef?.name ?? '마법 무기'}] 소환! 몬스터에게 드래그하세요!`,
          'critical'
        );
      }
    } else if (action === 'quest') {
      // Spawn required items for the first active quest onto the board!
      const active = this.getActiveQuests()[0];
      if (active) {
        for (const req of active.requiredItems) {
          const current = this.state.grid.filter((c) => c?.itemId === req.itemId).length;
          const missing = Math.max(0, req.count - current);
          for (let i = 0; i < missing; i++) {
            const emptyIdx = this.findEmptyGridIndex(24);
            if (emptyIdx !== -1) {
              this.state.grid[emptyIdx] = {
                uid: this.makeUid(),
                itemId: req.itemId,
              };
              this.registerDiscovery(req.itemId);
            }
          }
        }
        soundSystem.playQuestComplete();
        this.particles?.spawnFloatingText(
          window.innerWidth / 2,
          120,
          '✨ 퀘스트 재료 즉시 소환!',
          'discovery'
        );
      }
    } else if (action === 'reset') {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(MONSTER_STORAGE_KEY);
      this.state = this.createInitialState();
      this.defeatedMonsterIds = [];
      this.monsterHpMap = {};
      this.loadMonsterState();
      this.selectedSource = null;
      this.activeDialogue = null;
    }
    this.saveState();
    this.render();
  }

          setupGlobalPointerEvents()       {
    let startX = 0;
    let startY = 0;
    let pendingSource                    = null;
    let isDraggingNow = false;

    const parseSourceFromElement = (el                    )                    => {
      if (!el) return null;
      const cellEl = el.closest('[data-grid-index], [data-inv-index]')                      ;
      if (!cellEl) return null;
      if (cellEl.dataset.gridIndex !== undefined) {
        return { type: 'grid', index: Number(cellEl.dataset.gridIndex) };
      }
      if (cellEl.dataset.invIndex !== undefined) {
        return { type: 'inventory', index: Number(cellEl.dataset.invIndex) };
      }
      return null;
    };

    window.addEventListener('pointerdown', (e              ) => {
      if (!this.bgmStartedOnce && this.state.soundEnabled) {
        this.bgmStartedOnce = true;
        soundSystem.startBgm(this.activeStoryCutscene ? 'story' : 'workshop');
      }
      if (e.button !== 0 && e.pointerType === 'mouse') return;
      const target = e.target                      ;
      const source = parseSourceFromElement(target);
      if (!source) return;

      const item = this.getItemAt(source);
      startX = e.clientX;
      startY = e.clientY;
      pendingSource = source;
      isDraggingNow = false;

      if (!item) return;
    });

    window.addEventListener('pointermove', (e              ) => {
      if (!pendingSource) return;
      const item = this.getItemAt(pendingSource);
      if (!item) return;

      const dist = Math.hypot(e.clientX - startX, e.clientY - startY);
      if (!isDraggingNow && dist > 7) {
        isDraggingNow = true;
        this.draggingSource = pendingSource;
        this.createDragGhost(item.itemId, e.clientX, e.clientY);
        this.applyDragHighlights(pendingSource);
      }

      if (isDraggingNow && this.dragGhostEl) {
        this.dragGhostEl.style.left = `${e.clientX}px`;
        this.dragGhostEl.style.top = `${e.clientY}px`;
      }
    });

    window.addEventListener('pointerup', (e              ) => {
      if (!pendingSource) return;

      if (isDraggingNow && this.draggingSource) {
        this.removeDragGhost();
        const dropEl = document.elementFromPoint(e.clientX, e.clientY)                      ;
        const monsterTarget = dropEl?.closest('[data-monster-target]')                      ;
        if (monsterTarget) {
          this.attackMonsterWithSource(this.draggingSource);
          this.draggingSource = null;
          pendingSource = null;
          isDraggingNow = false;
          return;
        }
        const dropTarget = parseSourceFromElement(dropEl);
        if (dropTarget) {
          this.executeMoveOrMerge(this.draggingSource, dropTarget);
        }
        this.draggingSource = null;
        pendingSource = null;
        isDraggingNow = false;
        this.render();
        return;
      }

      // It was a tap/click!
      const tapped = pendingSource;
      pendingSource = null;
      isDraggingNow = false;
      this.handleCellTap(tapped);
    });
  }

          createDragGhost(itemId        , x        , y        )       {
    this.removeDragGhost();
    const def = getItemDef(itemId);
    if (!def) return;
    const ghost = document.createElement('div');
    ghost.className = 'drag-ghost';
    ghost.innerHTML = def.svgIcon;
    ghost.style.left = `${x}px`;
    ghost.style.top = `${y}px`;
    document.body.appendChild(ghost);
    this.dragGhostEl = ghost;
  }

          removeDragGhost()       {
    if (this.dragGhostEl) {
      this.dragGhostEl.remove();
      this.dragGhostEl = null;
    }
  }

          applyDragHighlights(from            )       {
    const dragItem = this.getItemAt(from);
    if (!dragItem) return;
    const dragDef = getItemDef(dragItem.itemId);
    if (!dragDef) return;

    // Highlight monster battle card if item can deal combat damage
    const monster = this.getCurrentMonster();
    const combat = calculateItemDamage(dragDef, monster);
    if (combat.damage > 0) {
      const monsterCard = document.querySelector('[data-monster-target]');
      monsterCard?.classList.add('highlight-attack-target');
    }

    const cells = document.querySelectorAll('[data-grid-index]');
    cells.forEach((cell) => {
      const el = cell               ;
      const idx = Number(el.dataset.gridIndex);
      if (from.type === 'grid' && from.index === idx) {
        el.classList.add('dragging-origin');
        return;
      }
      const targetItem = this.state.grid[idx];
      if (!targetItem) return;

      if (targetItem.itemId === dragItem.itemId && dragDef.nextItemId) {
        el.classList.add('highlight-merge');
      } else if (findCrossCraftRecipe(dragItem.itemId, targetItem.itemId)) {
        el.classList.add('highlight-crosscraft');
      }
    });
  }

          getTotalRestorationProgress()                                                        {
    let completed = 0;
    let total = 0;
    for (const z of WORKSHOP_ZONES) {
      completed += this.state.zoneProgress[z.id] ?? 0;
      total += z.maxSteps;
    }
    const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
    return { completed, total, percent };
  }

         render()       {
    const app = document.getElementById('app');
    if (!app) return;

    const restoration = this.getTotalRestorationProgress();
    const unclaimedCount = this.state.discoveredItemIds.filter(
      (id) => !this.state.claimedDiscoveryIds.includes(id)
    ).length;

    app.innerHTML = `
      <!-- Top Header Bar -->
      <header class="top-bar">
        <div class="brand-title">
          <span class="brand-icon">⚒️</span>
          <div>
            <h1>ARCANE FORGE</h1>
            <span class="brand-sub">마법 공방 복구기 · 복구율 ${restoration.percent}%</span>
          </div>
        </div>

        <div class="resource-group">
          <div class="resource-pill energy-pill" title="4초마다 1씩 자동 회복됩니다">
            <span class="res-icon">⚡</span>
            <span id="energy-val" class="res-val">${this.state.energy}/${this.state.maxEnergy}</span>
          </div>
          <div class="resource-pill gold-pill">
            <span class="res-icon">🪙</span>
            <span id="gold-val" class="res-val">${this.state.gold.toLocaleString()}</span>
          </div>
          <div class="resource-pill star-pill">
            <span class="res-icon">⭐</span>
            <span class="res-val">${restoration.completed}/${restoration.total}</span>
          </div>
        </div>

        <nav class="nav-tabs">
          <button class="nav-tab ${this.activeView === 'board' ? 'active' : ''}" data-action="view-board">
            🧩 머지 공방
          </button>
          <button class="nav-tab ${this.activeView === 'worldmap' ? 'active' : ''}" data-action="view-worldmap">
            🏰 마법 공방 월드맵
          </button>
          <button class="nav-tab ${this.activeView === 'story' ? 'active' : ''}" data-action="view-story">
            📜 스토리 극장
          </button>
          <button class="nav-tab codex-btn" data-action="open-codex">
            📖 도감 (${this.state.discoveredItemIds.length}/${ITEM_LIST.length})
            ${unclaimedCount > 0 ? `<span class="badge-dot">${unclaimedCount}</span>` : ''}
          </button>
          <button class="bgm-active-pill ${soundSystem.isBgmPlaying() ? '' : 'muted'}" data-action="toggle-bgm" title="배경음악(BGM) 켜기/끄기">
            ${soundSystem.isBgmPlaying() ? '🎵 BGM ON' : '🎵 BGM 시작'}
          </button>
          <button class="vn-voice-btn ${soundSystem.isVoiceEnabled() ? 'active' : ''}" data-action="toggle-voice" title="한국어 음성 나레이션 켜기/끄기">
            ${soundSystem.isVoiceEnabled() ? '🗣️ 나레이션 ON' : '🗣️ 나레이션 OFF'}
          </button>
          <button class="nav-tab icon-btn" data-action="toggle-sound" title="효과음 켜기/끄기">
            ${this.state.soundEnabled ? '🔊' : '🔇'}
          </button>
        </nav>
      </header>

      <!-- Developer / Test Cheat Toolbar -->
      <div class="cheat-toolbar">
        <span class="cheat-label">🛠️ 테스트 치트:</span>
        <button class="cheat-btn" data-cheat="energy">⚡ +100 에너지</button>
        <button class="cheat-btn" data-cheat="gold">🪙 +500 골드</button>
        <button class="cheat-btn" data-cheat="chest">🎁 보급상자 소환</button>
        <button class="cheat-btn" data-cheat="weapon">⚔️ 보스 특효 무기 소환</button>
        <button class="cheat-btn" data-cheat="quest">✨ 현재 퀘스트 재료 소환</button>
        <button class="cheat-btn" data-play-chapter="prologue">🎬 프롤로그 스토리</button>
        <button class="cheat-btn danger" data-cheat="reset">🔄 초기화</button>
      </div>

      ${this.discoveryToast ? this.renderDiscoveryToast(this.discoveryToast) : ''}

      <!-- Main View Content -->
      <main class="main-stage">
        ${
          this.activeView === 'board'
            ? this.renderBoardView()
            : this.activeView === 'worldmap'
            ? this.renderWorldMapView()
            : this.renderStoryTheaterView()
        }
      </main>

      ${this.showCodexModal ? this.renderCodexModal() : ''}
      ${this.activeDialogue ? this.renderDialogueModal() : ''}
      ${this.activeStoryCutscene ? this.renderStoryCutsceneModal() : ''}
    `;

    this.bindEvents(app);
  }

          renderDiscoveryToast(def         )         {
    return `
      <div class="discovery-toast">
        <div class="toast-icon">${def.svgIcon}</div>
        <div class="toast-body">
          <span class="toast-tag">✨ NEW DISCOVERY!</span>
          <strong>${def.name} (Lv.${def.level})</strong>
        </div>
      </div>
    `;
  }

          renderMonsterArenaPanel()         {
    const monster = this.getCurrentMonster();
    const hp = this.monsterHpMap[monster.id] ?? monster.maxHp;
    const hpPercent = Math.max(0, Math.min(100, Math.round((hp / monster.maxHp) * 100)));
    const recNames = monster.recommendedItemIds
      .map((id) => getItemDef(id)?.name)
      .filter(Boolean)
      .join(', ');
    const defeatedCount = this.defeatedMonsterIds.length;

    const categoryBadgeMap                                                 = {
      weapon: { label: '⚔️ 대장간 무기 약점 (1.5배)', cls: 'weak-weapon' },
      potion: { label: '🧪 연금술 포션 약점 (1.5배)', cls: 'weak-potion' },
      arcane: { label: '🔮 비전 마도구 약점 (1.5배)', cls: 'weak-arcane' },
      hybrid: { label: '✨ 교차 연성 아티팩트 약점 (1.5배)', cls: 'weak-arcane' },
    };

    return `
      <section class="monster-arena-panel">
        <div class="monster-card ${this.monsterHitShake ? 'hit-shake' : ''}" data-monster-target="${monster.id}" title="머지한 칼·포션·비전 마도구·교차 아티팩트를 이 몬스터 위로 드래그하여 공격하세요!">
          <div class="monster-art-box">
            ${monster.svgArt}
          </div>
          <div class="monster-info-box">
            <div class="monster-title-row">
              <span class="monster-boss-badge">👾 침입 몬스터 (${Math.min(defeatedCount + 1, MONSTERS.length)}/${MONSTERS.length})</span>
              <strong class="monster-name">${monster.name} · ${monster.title}</strong>
            </div>
            <div class="monster-hp-row">
              <div class="monster-hp-bar">
                <div class="monster-hp-fill" style="width: ${hpPercent}%"></div>
              </div>
              <span class="monster-hp-text">❤️ ${hp} / ${monster.maxHp} HP (${hpPercent}%)</span>
            </div>
            <div class="monster-weakness-badges">
              ${monster.weaknessCategories
                .map((cat) => {
                  const info = categoryBadgeMap[cat] ?? { label: cat, cls: '' };
                  return `<span class="monster-weakness-badge ${info.cls}">${info.label}</span>`;
                })
                .join('')}
              ${
                recNames
                  ? `<span class="monster-weakness-badge">💥 특효 무기(2배): <strong>${recNames}</strong></span>`
                  : ''
              }
            </div>
          </div>
          <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 6px; z-index: 2;">
            <div class="monster-drop-hint">
              ⚔️ 칼·마법·포션을 드래그해 공격!
            </div>
            <div style="display: flex; gap: 6px; align-items: center;">
              <span style="font-size: 0.7rem; color: #cbd5e1;">처치 보상: 🪙+${monster.rewardGold} ⚡+${monster.rewardEnergy} 🎁보급상자</span>
              <button class="vn-voice-btn" data-action="monster-lore" title="몬스터 출현 스토리 대사 보기">💬 보스 대사</button>
            </div>
          </div>
        </div>
      </section>
    `;
  }

          renderBoardView()         {
    const activeQuests = this.getActiveQuests();
    const selectedItem = this.selectedSource ? this.getItemAt(this.selectedSource) : null;
    const selectedDef = selectedItem ? getItemDef(selectedItem.itemId) : null;
    const currentMonster = this.getCurrentMonster();
    const selectedCombat = selectedDef
      ? calculateItemDamage(selectedDef, currentMonster)
      : { damage: 0, isWeakness: false, isSignature: false, flavorText: '' };

    // Check if the selected item participates in any Cross-Craft recipe
    const crossCraftHint = selectedDef
      ? CROSS_CRAFT_RECIPES.find(
          (r) => r.ingredientA === selectedDef.id || r.ingredientB === selectedDef.id
        )
      : undefined;

    return `
      <div class="board-view-layout">
        ${this.renderStoryCompanionBanner()}
        ${this.renderMonsterArenaPanel()}
        <!-- Active Restoration Quests Banner -->
        <section class="quest-banner">
          ${
            activeQuests.length === 0
              ? `<div class="quest-all-done">👑 축하합니다! 마법 공방의 모든 구역을 완벽히 복구했습니다!</div>`
              : activeQuests
                  .map((q) => {
                    const zone = WORKSHOP_ZONES.find((z) => z.id === q.zoneId);
                    const ready = this.canFulfillQuest(q);
                    return `
                      <div class="quest-card ${ready ? 'quest-ready' : ''}">
                        <div class="quest-info">
                          <span class="quest-zone-tag">${zone?.icon ?? '🏰'} ${zone?.name ?? ''} (${q.stepIndex}/${zone?.maxSteps ?? 3}단계)</span>
                          <h3 class="quest-title">${q.title}</h3>
                          <div class="quest-reqs">
                            ${q.requiredItems
                              .map((req) => {
                                const rDef = getItemDef(req.itemId);
                                const have = this.state.grid.filter(
                                  (c) => c?.itemId === req.itemId
                                ).length;
                                const isMet = have >= req.count;
                                return `
                                  <div class="quest-req-item ${isMet ? 'ready' : ''}" title="${rDef?.name ?? req.itemId}">
                                    <div class="req-icon">${rDef?.svgIcon ?? ''}</div>
                                    <div class="req-meta">
                                      <span class="req-name">${rDef?.name ?? req.itemId}</span>
                                      <span class="req-count">${have}/${req.count}</span>
                                    </div>
                                  </div>
                                `;
                              })
                              .join('')}
                          </div>
                        </div>
                        <div class="quest-actions">
                          <div class="quest-rewards">
                            <span>🪙 +${q.rewardGold}</span>
                            ${q.rewardItemIds?.length ? `<span>🎁 보급상자</span>` : ''}
                          </div>
                          <button class="btn-deliver ${ready ? 'ready' : ''}" data-deliver-quest="${q.id}" ${
                            ready ? '' : 'disabled'
                          }>
                            ${ready ? '🔨 납품 및 복구!' : '재료 준비 중'}
                          </button>
                        </div>
                      </div>
                    `;
                  })
                  .join('')
          }
        </section>

        <!-- 7x7 Merge Grid -->
        <section class="board-wrapper">
          <div class="board-grid">
            ${this.state.grid
              .map((cell, idx) => {
                const def = cell ? getItemDef(cell.itemId) : undefined;
                const isSelected =
                  this.selectedSource?.type === 'grid' && this.selectedSource.index === idx;
                const isGen = def?.category.startsWith('generator_');
                const isChest = def?.category === 'chest';
                const isConsumable = def?.category === 'gold' || def?.category === 'energy';

                return `
                  <div class="grid-cell ${cell ? 'occupied' : 'empty'} ${
                    isSelected ? 'selected' : ''
                  } ${isGen ? 'cell-generator' : ''} ${
                    def?.category === 'hybrid' ? 'cell-hybrid' : ''
                  }" data-grid-index="${idx}">
                    ${
                      cell && def
                        ? `
                          <div class="tile-item" style="--item-color: ${def.color}">
                            <div class="tile-svg">${def.svgIcon}</div>
                            <span class="tile-level">Lv.${def.level}</span>
                            ${isGen ? `<span class="tile-gen-badge" title="클릭하여 재료 생성">⚡</span>` : ''}
                            ${
                              isChest
                                ? `<span class="tile-charge-badge">🎁x${
                                    cell.chargesLeft ?? def.charges ?? 1
                                  }</span>`
                                : ''
                            }
                            ${
                              isConsumable
                                ? `<span class="tile-value-badge">${
                                    def.category === 'gold' ? `+${def.value}G` : `+${def.value}⚡`
                                  }</span>`
                                : ''
                            }
                          </div>
                        `
                        : ''
                    }
                  </div>
                `;
              })
              .join('')}
          </div>
        </section>

        <!-- Bottom Inspector & Storage Inventory -->
        <section class="bottom-panel">
          <div class="item-inspector">
            ${
              selectedDef
                ? `
                  <div class="inspector-left">
                    <div class="inspector-icon">${selectedDef.svgIcon}</div>
                    <div class="inspector-text">
                      <div class="inspector-title-row">
                        <strong>${selectedDef.name}</strong>
                        <span class="inspector-badge">Lv.${selectedDef.level}/${selectedDef.maxLevel}</span>
                        ${
                          crossCraftHint
                            ? `<span class="inspector-cross-tag">🔮 교차 연성 재료</span>`
                            : ''
                        }
                      </div>
                      <p>${selectedDef.description}</p>
                    </div>
                  </div>
                  <div class="inspector-actions">
                    ${
                      selectedCombat.damage > 0
                        ? `<button class="btn-action use-btn" data-action="attack-selected" title="${selectedCombat.flavorText}">⚔️ 몬스터 공격 (-${selectedCombat.damage} HP)</button>`
                        : ''
                    }
                    ${
                      selectedDef.category === 'gold' || selectedDef.category === 'energy'
                        ? `<button class="btn-action use-btn" data-action="consume-selected">✨ 즉시 사용</button>`
                        : ''
                    }
                    <button class="btn-action sell-btn" data-action="sell-selected">
                      🪙 판매 (+${selectedDef.value ?? Math.max(2, selectedDef.level * 5)}G)
                    </button>
                  </div>
                `
                : `
                  <div class="inspector-placeholder">
                    💡 <strong>조작 팁:</strong> ⚡모루/약초바구니를 클릭해 재료를 생성하고, 머지한 <strong>⚔️칼·🧪포션·🔮마도구·✨교차 아티팩트</strong>를 상단 <strong>👾침입 몬스터</strong>에게 드래그(또는 공격 버튼 클릭)하여 처치하고 스토리를 진행하세요!
                  </div>
                `
            }
          </div>

          <div class="inventory-section">
            <div class="inventory-header">
              <span>🎒 보관함 창고 (드래그하여 보관/꺼내기)</span>
              ${
                this.state.inventoryMaxSlots < 10
                  ? `<button class="inventory-expand-btn" data-action="expand-inventory">➕ 슬롯 확장 (150G)</button>`
                  : `<span class="inv-max-tag">최대 확장 완료</span>`
              }
            </div>
            <div class="inventory-bar">
              ${this.state.inventory
                .map((cell, idx) => {
                  const def = cell ? getItemDef(cell.itemId) : undefined;
                  const isSelected =
                    this.selectedSource?.type === 'inventory' && this.selectedSource.index === idx;
                  return `
                    <div class="inventory-slot ${cell ? 'occupied' : 'empty'} ${
                      isSelected ? 'selected' : ''
                    }" data-inv-index="${idx}">
                      ${
                        cell && def
                          ? `
                            <div class="tile-item">
                              <div class="tile-svg">${def.svgIcon}</div>
                              <span class="tile-level">Lv.${def.level}</span>
                            </div>
                          `
                          : `<span class="slot-empty-label">빈 슬롯</span>`
                      }
                    </div>
                  `;
                })
                .join('')}
            </div>
          </div>
        </section>
      </div>
    `;
  }

          renderWorldMapView()         {
    const restoration = this.getTotalRestorationProgress();
    return `
      <div class="worldmap-view">
        <div class="worldmap-header">
          <div>
            <h2>🏰 아케인 포지 마법 공방 복구 현황</h2>
            <p>퀘스트를 완수해 폐허가 된 5대 마법 공방 구역을 전성기의 모습으로 되돌리세요!</p>
          </div>
          <div class="worldmap-progress-box">
            <span>전체 공방 복구율: <strong>${restoration.percent}%</strong> (${restoration.completed}/${restoration.total} 단계)</span>
            <div class="progress-track">
              <div class="progress-fill" style="width: ${restoration.percent}%"></div>
            </div>
          </div>
        </div>

        <div class="zone-grid">
          ${WORKSHOP_ZONES.map((zone) => {
            const step = this.state.zoneProgress[zone.id] ?? 0;
            const isRestored = step >= zone.maxSteps;
            const nextQuest = QUESTS.find(
              (q) => q.zoneId === zone.id && q.stepIndex === step + 1
            );
            const lastCompletedQuest = QUESTS.find(
              (q) => q.zoneId === zone.id && q.stepIndex === Math.max(1, step)
            );
            return `
              <div class="zone-card ${isRestored ? 'restored' : step > 0 ? 'in-progress' : 'ruined'}">
                <div class="zone-scene">
                  ${renderZoneSceneSvg(zone.id, step, zone.maxSteps)}
                  <div class="zone-status-badge">
                    ${
                      isRestored
                        ? '✨ 완전 복구 완료!'
                        : step === 0
                        ? '🏚️ 폐허 상태'
                        : `🔨 복구 진행 중 (${step}/${zone.maxSteps})`
                    }
                  </div>
                </div>
                <div class="zone-body">
                  <div class="zone-title-row">
                    <h3>${zone.icon} ${zone.name}</h3>
                    <div class="zone-steps">
                      ${Array.from({ length: zone.maxSteps })
                        .map((_, i) => `<span class="step-star ${i < step ? 'filled' : ''}">★</span>`)
                        .join('')}
                    </div>
                  </div>
                  <p class="zone-desc">${zone.description}</p>
                  ${
                    nextQuest
                      ? `
                        <div class="zone-next-quest">
                          <span>📜 다음 복구 과제: <strong>${nextQuest.title}</strong></span>
                          <button class="btn-go-board" data-action="view-board">머지 보드에서 제작하기 →</button>
                        </div>
                      `
                      : `
                        <div class="zone-complete-banner">
                          <span>👑 모든 시설이 찬란하게 가동 중입니다!</span>
                          ${
                            lastCompletedQuest
                              ? `<button class="btn-replay-story" data-replay-quest="${lastCompletedQuest.id}">💬 스토리 다시 보기</button>`
                              : ''
                          }
                        </div>
                      `
                  }
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

          renderCodexModal()         {
    return `
      <div class="modal-backdrop" data-action="close-codex">
        <div class="modal-card codex-modal" onclick="event.stopPropagation()">
          <div class="modal-header">
            <div>
              <h2>📖 마법 공방 아이템 & 교차 연성 도감</h2>
              <p>새로운 아이템을 최초 발견할 때마다 도감 보상을 수령할 수 있습니다!</p>
            </div>
            <button class="modal-close-btn" data-action="close-codex">✕</button>
          </div>

          <div class="codex-section">
            <h3>🔮 4대 이종 교차 연성 비전서 (보드 위에서 서로 다른 두 아이템을 드래그해 합성)</h3>
            <div class="recipe-grid">
              ${CROSS_CRAFT_RECIPES.map((r) => {
                const itemA = getItemDef(r.ingredientA);
                const itemB = getItemDef(r.ingredientB);
                const result = getItemDef(r.resultItemId);
                const discovered = this.state.discoveredItemIds.includes(r.resultItemId);
                return `
                  <div class="recipe-card ${discovered ? 'discovered' : ''}">
                    <div class="recipe-formula">
                      <div class="recipe-ing" title="${itemA?.name ?? ''}">
                        <div class="ing-svg">${itemA?.svgIcon ?? ''}</div>
                        <span>${itemA?.name ?? ''}</span>
                      </div>
                      <span class="recipe-plus">+</span>
                      <div class="recipe-ing" title="${itemB?.name ?? ''}">
                        <div class="ing-svg">${itemB?.svgIcon ?? ''}</div>
                        <span>${itemB?.name ?? ''}</span>
                      </div>
                      <span class="recipe-equals">=</span>
                      <div class="recipe-result">
                        <div class="res-svg">${result?.svgIcon ?? ''}</div>
                        <strong>${result?.name ?? r.name}</strong>
                      </div>
                    </div>
                    <p class="recipe-hint">${r.hint}</p>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <div class="codex-section">
            <h3>✨ 전체 아이템 컬렉션 (${this.state.discoveredItemIds.length} / ${ITEM_LIST.length})</h3>
            <div class="codex-grid">
              ${ITEM_LIST.map((item) => {
                const isDiscovered = this.state.discoveredItemIds.includes(item.id);
                const isClaimed = this.state.claimedDiscoveryIds.includes(item.id);
                const canClaim = isDiscovered && !isClaimed;
                return `
                  <div class="codex-item ${isDiscovered ? 'discovered' : 'undiscovered'} ${
                    canClaim ? 'claimable' : ''
                  }" data-claim-item="${canClaim ? item.id : ''}">
                    <div class="codex-icon">${item.svgIcon}</div>
                    <div class="codex-name">${isDiscovered ? item.name : '???'}</div>
                    <span class="codex-lv">Lv.${item.level}</span>
                    ${
                      canClaim
                        ? `<button class="claim-btn">보상 수령!</button>`
                        : isClaimed
                        ? `<span class="claimed-tag">✓ 수령됨</span>`
                        : ''
                    }
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  }

          getCurrentChapter()               {
    const activeQuest = this.getActiveQuests()[0];
    if (activeQuest) {
      const found = STORY_CHAPTERS.find((c) => c.zoneId === activeQuest.zoneId);
      if (found) return found;
    }
    return STORY_CHAPTERS[1] ?? STORY_CHAPTERS[0];
  }

          getPortraitHtml(
    role                                                          ,
    altText         
  )         {
    if (role === 'narrator') {
      return renderPortraitSvg('narrator');
    }
    const src = getCharacterPortrait(role);
    const fallbackSvg = encodeURIComponent(renderPortraitSvg(role));
    return `<img src="${src}" alt="${altText ?? role}" onerror="this.onerror=null; this.parentElement.innerHTML=decodeURIComponent('${fallbackSvg}');" />`;
  }

          renderStoryCompanionBanner()         {
    const chapter = this.getCurrentChapter();
    const activeZoneId = chapter.zoneId ?? 'zone_forge';
    const chatter =
      COMPANION_CHATTER.find((c) => c.zoneId === activeZoneId) ?? COMPANION_CHATTER[0];
    const speakerRole = this.companionSpeaker;
    const speakerName =
      speakerRole === 'lia' ? '견습 연금술사 리아' : '드워프 대장장이 토르그';
    const quote = speakerRole === 'lia' ? chatter.liaQuote : chatter.torgQuote;
    const thumbSrc = STORY_IMAGES[chapter.imageKey];

    return `
      <section class="story-companion-banner">
        <div class="story-banner-thumb" data-play-chapter="${chapter.id}" title="클릭하여 현재 챕터 스토리 & 일러스트 보기">
          <img src="${thumbSrc}" alt="${chapter.title}" />
          <span class="story-thumb-badge">🎬 ${chapter.chapterNumber}</span>
        </div>
        <div class="story-companion-body" data-action="toggle-companion-speaker" title="클릭하면 리아/토르그의 대화가 바뀝니다">
          <div class="companion-avatar">
            ${this.getPortraitHtml(speakerRole, speakerName)}
          </div>
          <div class="companion-speech">
            <div class="companion-chapter-row">
              <span class="companion-chapter-tag">${chapter.chapterNumber} · ${chapter.title}</span>
              <span class="companion-speaker-name">${speakerName}</span>
              <span class="companion-switch-hint">(클릭해 대화 전환 💬)</span>
            </div>
            <p class="companion-quote">"${quote}"</p>
          </div>
        </div>
        <div class="story-companion-actions">
          <button class="btn-story-play" data-play-chapter="${chapter.id}">
            🎬 챕터 스토리 보기
          </button>
          <button class="btn-story-theater" data-action="view-story">
            📜 전체 스토리 극장
          </button>
        </div>
      </section>
    `;
  }

          renderStoryTheaterView()         {
    return `
      <div class="story-theater-view">
        <div class="theater-hero-card">
          <div class="theater-hero-art">
            <img src="${STORY_IMAGES.prologue}" alt="Arcane Forge Prologue" />
          </div>
          <div class="theater-hero-content">
            <span class="vn-chapter-badge">ARCANE FORGE CHRONICLES · 공식 스토리북</span>
            <h2>📜 잿더미가 된 천공의 공방과 사라진 대현자</h2>
            <p>
              10년 전 「검은 일식」의 밤, 에테르 폭주로 무너져 내린 왕국 최고의 마법 대장간 <strong>아케인 포지</strong>.
              사라진 대현자 엘드리치의 마지막 제자 <strong>리아</strong>와 외눈박이 드워프 장인 <strong>토르그</strong>가
              강철과 연금술을 융합하는 금지된 비기 <strong>〈이종 교차 연성〉</strong>으로 5대 공방을 되살려 나갑니다.
            </p>
            <div class="theater-cast-row">
              <div class="cast-mini-card">
                <img src="${CHARACTER_PORTRAITS.lia}" alt="리아" />
                <div>
                  <strong>리아 (Lia)</strong>
                  <span>대현자의 마지막 제자 · 연금술사</span>
                </div>
              </div>
              <div class="cast-mini-card">
                <img src="${CHARACTER_PORTRAITS.torg}" alt="토르그" />
                <div>
                  <strong>토르그 (Torg)</strong>
                  <span>전설의 룬 대장장이 · 화로의 수호자</span>
                </div>
              </div>
            </div>
            <div style="margin-top: 8px; display: flex; gap: 10px; flex-wrap: wrap;">
              <button class="btn-story-play" data-play-chapter="prologue">
                🎬 오프닝 프롤로그 컷신 재생
              </button>
              <button class="btn-story-theater" data-action="view-board">
                🧩 머지 공방으로 돌아가기
              </button>
            </div>
          </div>
        </div>

        <div class="chapter-gallery-grid">
          ${STORY_CHAPTERS.map((ch) => {
            const zoneProgress = ch.zoneId ? this.state.zoneProgress[ch.zoneId] ?? 0 : 3;
            return `
              <article class="chapter-card">
                <div class="chapter-art-wrap">
                  <img src="${STORY_IMAGES[ch.imageKey]}" alt="${ch.title}" />
                  <span class="chapter-num-pill">${ch.chapterNumber}</span>
                </div>
                <div class="chapter-card-body">
                  <span class="chapter-subtitle">${ch.subtitle}</span>
                  <h3>${ch.title}</h3>
                  <p class="chapter-summary">${ch.summary}</p>
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 8px;">
                    <span style="font-size: 0.72rem; color: #fbbf24; font-weight: 700;">
                      ${ch.zoneId ? `복구 진행도: ${zoneProgress}/3 단계` : '🌟 오프닝 메인 스토리'}
                    </span>
                    <button class="btn-story-play" data-play-chapter="${ch.id}">
                      🎬 스토리 감상
                    </button>
                  </div>
                </div>
              </article>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

          renderStoryCutsceneModal()         {
    if (!this.activeStoryCutscene) return '';
    const { chapter, lineIndex, selectedChoice } = this.activeStoryCutscene;
    const line = chapter.lines[lineIndex];
    if (!line) return '';
    const isLast = lineIndex >= chapter.lines.length - 1;
    const artSrc = STORY_IMAGES[line.imageKey ?? chapter.imageKey];
    const isNarrator = line.role === 'narrator';
    const choiceData = chapter.choice;
    const chosenEntry =
      selectedChoice === 'A'
        ? choiceData?.optionA
        : selectedChoice === 'B'
        ? choiceData?.optionB
        : undefined;

    return `
      <div class="modal-backdrop dialogue-backdrop">
        <div class="modal-card vn-cutscene-modal" onclick="event.stopPropagation()">
          <div class="vn-artwork-stage">
            <img class="vn-scene-img" src="${artSrc}" alt="${chapter.title}" />
            <div class="vn-artwork-overlay">
              <div class="vn-top-bar">
                <div>
                  <span class="vn-chapter-badge">${chapter.chapterNumber} · STORY CUTSCENE</span>
                  <h3 class="vn-chapter-title">${chapter.title}</h3>
                </div>
                <div class="vn-audio-controls">
                  <button class="bgm-active-pill ${soundSystem.isBgmPlaying() ? '' : 'muted'}" data-action="toggle-bgm">
                    ${soundSystem.isBgmPlaying() ? '🎵 BGM ON' : '🎵 BGM 켜기'}
                  </button>
                  <button class="vn-voice-btn ${soundSystem.isVoiceEnabled() ? 'active' : ''}" data-action="toggle-voice">
                    ${soundSystem.isVoiceEnabled() ? '🗣️ 나레이션 ON' : '🗣️ 나레이션 OFF'}
                  </button>
                  <button class="vn-voice-btn" data-action="replay-voice" title="현재 대사 음성 다시 듣기">
                    🔊 대사 듣기
                  </button>
                  <button class="vn-skip-btn" data-action="close-story-cutscene">
                    스토리 닫기 ✕
                  </button>
                </div>
              </div>
              <div style="font-size: 0.78rem; color: #e9d5ff; font-weight: 600;">
                ${chapter.subtitle}
              </div>
            </div>
          </div>

          <div class="vn-dialogue-stage">
            <div class="vn-dialogue-row ${isNarrator ? 'narrator-mode' : ''}">
              <div class="vn-portrait-frame">
                ${this.getPortraitHtml(line.role, line.speaker)}
              </div>
              <div class="vn-text-box">
                <div class="vn-speaker-header">
                  <span class="vn-speaker-tag">${
                    isNarrator ? '📜 아케인 연대기 기록관' : line.speaker
                  }</span>
                  ${
                    line.emotion
                      ? `<span class="vn-emotion-tag">${line.emotion}</span>`
                      : ''
                  }
                </div>
                <p class="vn-line-text">${isNarrator ? line.text : `"${line.text}"`}</p>
              </div>
            </div>

            ${
              isLast && choiceData
                ? `
                  <div class="vn-choice-box">
                    <div class="vn-choice-prompt">✨ ${choiceData.prompt}</div>
                    <div class="vn-choice-buttons">
                      <button class="vn-choice-btn ${selectedChoice === 'A' ? 'selected' : ''}" data-story-choice="A">
                        ${choiceData.optionA.label}
                      </button>
                      <button class="vn-choice-btn ${selectedChoice === 'B' ? 'selected' : ''}" data-story-choice="B">
                        ${choiceData.optionB.label}
                      </button>
                    </div>
                    ${
                      chosenEntry
                        ? `
                          <div class="vn-choice-reply">
                            <p style="margin: 0 0 4px 0;">💬 ${chosenEntry.reply}</p>
                            <strong style="color: #fbbf24; font-size: 0.76rem;">🎁 ${chosenEntry.rewardText}</strong>
                          </div>
                        `
                        : ''
                    }
                  </div>
                `
                : ''
            }

            <div class="vn-footer-bar">
              <div class="vn-dots">
                ${chapter.lines
                  .map(
                    (_, idx) =>
                      `<span class="vn-dot ${idx === lineIndex ? 'active' : ''}"></span>`
                  )
                  .join('')}
              </div>
              <div style="display: flex; gap: 8px;">
                ${
                  lineIndex > 0
                    ? `<button class="vn-skip-btn" data-action="prev-story-line">◀ 이전</button>`
                    : ''
                }
                <button class="btn-next-dialogue" data-action="next-story-line">
                  ${isLast ? '✨ 공방으로 입장하기' : `다음 대화 (${lineIndex + 1}/${chapter.lines.length}) ▶`}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

          renderDialogueModal()         {
    if (!this.activeDialogue) return '';
    const line = this.activeDialogue.lines[this.activeDialogue.currentIndex];
    if (!line) return '';
    const isLast = this.activeDialogue.currentIndex >= this.activeDialogue.lines.length - 1;
    const matchedChapter =
      STORY_CHAPTERS.find((c) => c.zoneId === this.activeDialogue?.zoneId) ??
      this.getCurrentChapter();
    const artSrc = STORY_IMAGES[matchedChapter.imageKey];

    return `
      <div class="modal-backdrop dialogue-backdrop">
        <div class="modal-card vn-cutscene-modal" onclick="event.stopPropagation()">
          <div class="vn-artwork-stage">
            <img class="vn-scene-img" src="${artSrc}" alt="${this.activeDialogue.zoneName}" />
            <div class="vn-artwork-overlay">
              <div class="vn-top-bar">
                <div>
                  <span class="vn-chapter-badge">🏰 ${this.activeDialogue.zoneName}</span>
                  <h3 class="vn-chapter-title">${this.activeDialogue.questTitle}</h3>
                </div>
                <div class="vn-audio-controls">
                  <button class="bgm-active-pill ${soundSystem.isBgmPlaying() ? '' : 'muted'}" data-action="toggle-bgm">
                    ${soundSystem.isBgmPlaying() ? '🎵 BGM ON' : '🎵 BGM 켜기'}
                  </button>
                  <button class="vn-voice-btn ${soundSystem.isVoiceEnabled() ? 'active' : ''}" data-action="toggle-voice">
                    ${soundSystem.isVoiceEnabled() ? '🗣️ 나레이션 ON' : '🗣️ 나레이션 OFF'}
                  </button>
                  <button class="vn-voice-btn" data-action="replay-voice">
                    🔊 대사 듣기
                  </button>
                  <button class="vn-skip-btn" data-action="next-dialogue">
                    건너뛰기 ⏭
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="vn-dialogue-stage">
            <div class="vn-dialogue-row">
              <div class="vn-portrait-frame">
                ${this.getPortraitHtml(line.role, line.speaker)}
              </div>
              <div class="vn-text-box">
                <div class="vn-speaker-header">
                  <span class="vn-speaker-tag">${line.speaker}</span>
                  <span class="vn-emotion-tag">스토리 대화</span>
                </div>
                <p class="vn-line-text">"${line.text}"</p>
              </div>
            </div>

            <div class="vn-footer-bar">
              <span class="step-counter">${this.activeDialogue.currentIndex + 1} / ${
                this.activeDialogue.lines.length
              }</span>
              <button class="btn-next-dialogue" data-action="next-dialogue">
                ${isLast ? '✨ 공방으로 돌아가기' : '다음 대화 ▶'}
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

          markPrologueSeen()       {
    try {
      localStorage.setItem(PROLOGUE_SEEN_KEY, '1');
    } catch {
      // ignore
    }
  }

          bindEvents(root             )       {
    root.querySelectorAll('[data-action]').forEach((el) => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        const action = (el               ).dataset.action;
        if (action === 'view-board') {
          this.activeView = 'board';
          soundSystem.setBgmTheme('workshop');
          this.render();
        } else if (action === 'view-worldmap') {
          this.activeView = 'worldmap';
          soundSystem.setBgmTheme('workshop');
          this.render();
        } else if (action === 'view-story') {
          this.activeView = 'story';
          soundSystem.setBgmTheme('story');
          this.render();
        } else if (action === 'toggle-companion-speaker') {
          this.companionSpeaker = this.companionSpeaker === 'lia' ? 'torg' : 'lia';
          soundSystem.playDialogueBlip(this.companionSpeaker);
          const chapter = this.getCurrentChapter();
          const chatter =
            COMPANION_CHATTER.find((c) => c.zoneId === (chapter.zoneId ?? 'zone_forge')) ??
            COMPANION_CHATTER[0];
          const quote = this.companionSpeaker === 'lia' ? chatter.liaQuote : chatter.torgQuote;
          soundSystem.speakNarration(quote, this.companionSpeaker);
          this.render();
        } else if (action === 'open-codex') {
          this.showCodexModal = true;
          this.render();
        } else if (action === 'close-codex') {
          this.showCodexModal = false;
          this.render();
        } else if (action === 'toggle-bgm') {
          this.bgmStartedOnce = true;
          soundSystem.toggleBgm();
          this.render();
        } else if (action === 'toggle-voice') {
          const enabled = soundSystem.toggleVoice();
          if (enabled) {
            if (this.activeStoryCutscene) {
              const cur =
                this.activeStoryCutscene.chapter.lines[this.activeStoryCutscene.lineIndex];
              if (cur) soundSystem.speakNarration(cur.text, cur.role);
            } else if (this.activeDialogue) {
              const cur = this.activeDialogue.lines[this.activeDialogue.currentIndex];
              if (cur) soundSystem.speakNarration(cur.text, cur.role);
            }
          }
          this.render();
        } else if (action === 'replay-voice') {
          if (!soundSystem.isVoiceEnabled()) {
            soundSystem.toggleVoice();
          }
          if (this.activeStoryCutscene) {
            const cur =
              this.activeStoryCutscene.chapter.lines[this.activeStoryCutscene.lineIndex];
            if (cur) soundSystem.speakNarration(cur.text, cur.role);
          } else if (this.activeDialogue) {
            const cur = this.activeDialogue.lines[this.activeDialogue.currentIndex];
            if (cur) soundSystem.speakNarration(cur.text, cur.role);
          }
          this.render();
        } else if (action === 'toggle-sound') {
          this.state.soundEnabled = !this.state.soundEnabled;
          soundSystem.setEnabled(this.state.soundEnabled);
          this.saveState();
          this.render();
        } else if (action === 'attack-selected' && this.selectedSource) {
          this.attackMonsterWithSource(this.selectedSource);
        } else if (action === 'monster-lore') {
          const monster = this.getCurrentMonster();
          this.activeDialogue = {
            questTitle: `👾 ${monster.name} 출현!`,
            zoneName: monster.title,
            zoneId: monster.zoneId,
            lines: [monster.introLine],
            currentIndex: 0,
          };
          soundSystem.setBgmTheme('battle');
          const firstLine = monster.introLine;
          if (firstLine) soundSystem.speakNarration(firstLine.text, firstLine.role);
          this.render();
        } else if (action === 'consume-selected' && this.selectedSource) {
          this.consumeItem(this.selectedSource);
        } else if (action === 'sell-selected') {
          this.sellSelectedItem();
        } else if (action === 'expand-inventory') {
          this.expandInventory();
        } else if (action === 'next-dialogue' && this.activeDialogue) {
          if (this.activeDialogue.currentIndex < this.activeDialogue.lines.length - 1) {
            this.activeDialogue.currentIndex += 1;
            const nextLine = this.activeDialogue.lines[this.activeDialogue.currentIndex];
            if (nextLine) {
              soundSystem.playDialogueBlip(nextLine.role);
              soundSystem.speakNarration(nextLine.text, nextLine.role);
            }
          } else {
            soundSystem.stopNarration();
            soundSystem.setBgmTheme('workshop');
            this.activeDialogue = null;
          }
          this.render();
        } else if (action === 'next-story-line' && this.activeStoryCutscene) {
          if (
            this.activeStoryCutscene.lineIndex <
            this.activeStoryCutscene.chapter.lines.length - 1
          ) {
            this.activeStoryCutscene.lineIndex += 1;
            const nextLine =
              this.activeStoryCutscene.chapter.lines[this.activeStoryCutscene.lineIndex];
            if (nextLine) {
              soundSystem.playDialogueBlip(nextLine.role);
              soundSystem.speakNarration(nextLine.text, nextLine.role);
            }
          } else {
            if (this.activeStoryCutscene.chapter.id === 'prologue') {
              this.markPrologueSeen();
            }
            soundSystem.stopNarration();
            soundSystem.setBgmTheme('workshop');
            this.activeStoryCutscene = null;
          }
          this.render();
        } else if (action === 'prev-story-line' && this.activeStoryCutscene) {
          this.activeStoryCutscene.lineIndex = Math.max(
            0,
            this.activeStoryCutscene.lineIndex - 1
          );
          const prevLine =
            this.activeStoryCutscene.chapter.lines[this.activeStoryCutscene.lineIndex];
          if (prevLine) {
            soundSystem.playDialogueBlip(prevLine.role);
            soundSystem.speakNarration(prevLine.text, prevLine.role);
          }
          this.render();
        } else if (action === 'close-story-cutscene') {
          if (this.activeStoryCutscene?.chapter.id === 'prologue') {
            this.markPrologueSeen();
          }
          soundSystem.stopNarration();
          soundSystem.setBgmTheme('workshop');
          this.activeStoryCutscene = null;
          this.render();
        }
      });
    });

    root.querySelectorAll('[data-play-chapter]').forEach((el) => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        const chId = (el               ).dataset.playChapter;
        const found = STORY_CHAPTERS.find((c) => c.id === chId);
        if (found) {
          this.activeStoryCutscene = {
            chapter: found,
            lineIndex: 0,
          };
          soundSystem.setBgmTheme('story');
          soundSystem.playStoryOpen();
          const firstLine = found.lines[0];
          if (firstLine) {
            soundSystem.speakNarration(firstLine.text, firstLine.role);
          }
          this.particles?.burstStoryMagic(window.innerWidth / 2, window.innerHeight / 3);
          this.render();
        }
      });
    });

    root.querySelectorAll('[data-story-choice]').forEach((el) => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        const opt = (el               ).dataset.storyChoice             ;
        if (this.activeStoryCutscene && (opt === 'A' || opt === 'B')) {
          this.activeStoryCutscene.selectedChoice = opt;
          soundSystem.playChoiceSelect();
          const choiceObj =
            opt === 'A'
              ? this.activeStoryCutscene.chapter.choice?.optionA
              : this.activeStoryCutscene.chapter.choice?.optionB;
          if (choiceObj) {
            soundSystem.speakNarration(choiceObj.reply, 'lia');
          }
          this.particles?.burstStoryMagic(window.innerWidth / 2, window.innerHeight / 2);
          const chId = this.activeStoryCutscene.chapter.id;
          if (!this.claimedStoryChoiceIds.includes(chId)) {
            this.claimedStoryChoiceIds.push(chId);
            this.state.energy = Math.min(this.state.maxEnergy + 100, this.state.energy + 15);
            this.state.gold += 30;
            this.particles?.spawnFloatingText(
              window.innerWidth / 2,
              window.innerHeight / 2 - 40,
              '✨ 스토리 선택 보상 +15⚡ & +30G!',
              'discovery'
            );
            this.saveState();
          }
          this.render();
        }
      });
    });

    root.querySelectorAll('[data-deliver-quest]').forEach((el) => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        const qId = (el               ).dataset.deliverQuest;
        if (qId) this.fulfillQuest(qId);
      });
    });

    root.querySelectorAll('[data-replay-quest]').forEach((el) => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        const qId = (el               ).dataset.replayQuest;
        const q = QUESTS.find((item) => item.id === qId);
        const zone = WORKSHOP_ZONES.find((z) => z.id === q?.zoneId);
        if (q && q.dialogue.length > 0) {
          this.activeDialogue = {
            questTitle: q.title,
            zoneName: zone?.name ?? '마법 공방',
            zoneId: q.zoneId,
            lines: q.dialogue,
            currentIndex: 0,
          };
          soundSystem.setBgmTheme('story');
          const firstLine = q.dialogue[0];
          if (firstLine) soundSystem.speakNarration(firstLine.text, firstLine.role);
          this.render();
        }
      });
    });

    root.querySelectorAll('[data-claim-item]').forEach((el) => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        const itemId = (el               ).dataset.claimItem;
        if (itemId) this.claimDiscoveryReward(itemId);
      });
    });

    root.querySelectorAll('[data-cheat]').forEach((el) => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        const cheat = (el               ).dataset.cheat   
                    
                  
                   
                    
                   
                   ;
        if (cheat) this.runCheat(cheat);
      });
    });
  }
}

window.addEventListener('DOMContentLoaded', () => {
  new ArcaneForgeGame();
});
