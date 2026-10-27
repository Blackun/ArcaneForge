export interface MonsterDef {
  id: string;
  name: string;
  title: string;
  zoneId: string;
  level: number;
  maxHp: number;
  weaknessCategories: ('weapon' | 'potion' | 'arcane' | 'hybrid')[];
  recommendedItemIds: string[];
  rewardGold: number;
  rewardEnergy: number;
  rewardItemId?: string;
  lore: string;
  introLine: { speaker: string; role: 'lia' | 'torg'; text: string };
  defeatDialogue: { speaker: string; role: 'lia' | 'torg'; text: string }[];
  svgArt: string;
}

export const MONSTERS: MonsterDef[] = [
  {
    id: 'mob_cinder_slime',
    name: '잿더미 용암 슬라임',
    title: '제1장 · 대장간 화로 침식 괴수',
    zoneId: 'zone_forge',
    level: 1,
    maxHp: 50,
    weaknessCategories: ['weapon', 'potion'],
    recommendedItemIds: ['weapon_2', 'weapon_3', 'potion_2'],
    rewardGold: 120,
    rewardEnergy: 30,
    rewardItemId: 'chest_supply_1',
    lore:
      '10년 전 검은 일식의 잔류 마력과 식어버린 화로의 쇳물 찌꺼기가 엉켜 탄생한 용암 괴수입니다. 드워프 화로의 통풍구를 틀어막아 대장간의 온기를 가로막고 있습니다.',
    introLine: {
      speaker: '드워프 대장장이 토르그',
      role: 'torg',
      text: '크르르... 저 끈적한 잿더미 괴물이 내 소중한 화로 불길을 처먹고 있잖아! 모루에서 벼려낸 단검이나 정제된 수액을 던져 핵을 박살 내버려라!',
    },
    defeatDialogue: [
      {
        speaker: '드워프 대장장이 토르그',
        role: 'torg',
        text: '하하하! 통쾌한 일격이다! 슬라임이 삼키고 있던 고대 대장간 보급 상자가 튀어나왔군!',
      },
      {
        speaker: '견습 연금술사 리아',
        role: 'lia',
        text: '화로 통풍구가 뻥 뚫렸어요! 이제 대장간 불꽃이 온실 쪽으로 힘차게 흐르기 시작해요!',
      },
    ],
    svgArt: `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="slimeBody" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stop-color="#FB923C"/>
          <stop offset="55%" stop-color="#DC2626"/>
          <stop offset="100%" stop-color="#450A0A"/>
        </radialGradient>
        <radialGradient id="slimeCore" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#FEF08A"/>
          <stop offset="70%" stop-color="#F97316"/>
          <stop offset="100%" stop-color="#991B1B" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <ellipse cx="60" cy="104" rx="44" ry="8" fill="#000" opacity="0.45"/>
      <path d="M18 86C14 66 26 32 60 28C94 32 106 66 102 86C98 100 84 104 60 104C36 104 22 100 18 86Z" fill="url(#slimeBody)" stroke="#F97316" stroke-width="2.5"/>
      <path d="M26 94C32 86 42 98 52 92C62 86 72 98 82 90C88 86 96 94 98 96" stroke="#FDE047" stroke-width="2.5" stroke-linecap="round" opacity="0.75"/>
      <circle cx="60" cy="64" r="22" fill="url(#slimeCore)"/>
      <polygon points="44,28 50,14 58,28" fill="#7F1D1D" stroke="#F97316" stroke-width="1.5"/>
      <polygon points="64,28 72,12 78,30" fill="#7F1D1D" stroke="#F97316" stroke-width="1.5"/>
      <ellipse cx="44" cy="58" rx="7" ry="9" fill="#18181B"/>
      <ellipse cx="76" cy="58" rx="7" ry="9" fill="#18181B"/>
      <circle cx="44" cy="56" r="3.5" fill="#FEF08A"/>
      <circle cx="76" cy="56" r="3.5" fill="#FEF08A"/>
      <path d="M36 46L52 52" stroke="#FEF08A" stroke-width="3" stroke-linecap="round"/>
      <path d="M84 46L68 52" stroke="#FEF08A" stroke-width="3" stroke-linecap="round"/>
      <path d="M42 78Q60 68 78 78Q68 90 52 88Z" fill="#450A0A" stroke="#FDE047" stroke-width="2"/>
      <circle cx="28" cy="44" r="4" fill="#FB923C"/>
      <circle cx="94" cy="48" r="5" fill="#F97316"/>
      <circle cx="88" cy="30" r="3" fill="#FDE047"/>
    </svg>`,
  },
  {
    id: 'mob_thorn_mandragora',
    name: '맹독 가시 만드라고라',
    title: '제2장 · 연금술 온실 변이 식물',
    zoneId: 'zone_alchemy',
    level: 2,
    maxHp: 120,
    weaknessCategories: ['potion', 'weapon'],
    recommendedItemIds: ['potion_3', 'potion_4', 'weapon_4'],
    rewardGold: 240,
    rewardEnergy: 45,
    rewardItemId: 'gen_arcane_1',
    lore:
      '비취빛 연금술 온실의 깨진 천장으로 스며든 심연의 독기를 빨아들이며 거대하게 변이한 식충 만드라고라입니다. 세계수 묘목의 마나 수액을 독점하며 뿌리 밑의 비전 유물을 휘감고 있습니다.',
    introLine: {
      speaker: '견습 연금술사 리아',
      role: 'lia',
      text: '꺄악! 온실 한가운데의 만드라고라가 심연의 독기에 오염되어 폭주하고 있어요! 정화 물약(치유의 물약·마나 정수)을 뿌리거나 날카로운 장검으로 가시 덩굴을 베어내야 해요!',
    },
    defeatDialogue: [
      {
        speaker: '견습 연금술사 리아',
        role: 'lia',
        text: '휴우... 정화 물약 덕분에 만드라고라의 독기가 맑은 마나 이슬로 정화되었어요!',
      },
      {
        speaker: '드워프 대장장이 토르그',
        role: 'torg',
        text: '오호라! 녀석의 뿌리 밑에서 보랏빛 〈마력 깃든 고철〉이 나왔ぞ! 이걸 합치면 비전 보석함 생성기를 만들 수 있겠다!',
      },
    ],
    svgArt: `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="mandraHead" cx="50%" cy="45%" r="50%">
          <stop offset="0%" stop-color="#A855F7"/>
          <stop offset="65%" stop-color="#4C1D95"/>
          <stop offset="100%" stop-color="#1E1B4B"/>
        </radialGradient>
        <linearGradient id="vineGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#22C55E"/>
          <stop offset="100%" stop-color="#14532D"/>
        </linearGradient>
      </defs>
      <ellipse cx="60" cy="106" rx="42" ry="7" fill="#000" opacity="0.45"/>
      <path d="M22 96Q10 74 28 60Q18 82 38 92" stroke="url(#vineGrad)" stroke-width="7" stroke-linecap="round" fill="none"/>
      <path d="M98 96Q110 74 92 60Q102 82 82 92" stroke="url(#vineGrad)" stroke-width="7" stroke-linecap="round" fill="none"/>
      <path d="M42 102L50 74L70 74L78 102Z" fill="#78350F" stroke="#4ADE80" stroke-width="2"/>
      <path d="M36 32C42 12 58 10 60 26C62 10 78 12 84 32" fill="#16A34A" stroke="#86EFAC" stroke-width="2"/>
      <circle cx="60" cy="56" r="28" fill="url(#mandraHead)" stroke="#C084FC" stroke-width="2.5"/>
      <polygon points="36,52 48,48 44,58" fill="#4ADE80"/>
      <polygon points="84,52 72,48 76,58" fill="#4ADE80"/>
      <path d="M38 66Q60 84 82 66Q60 58 38 66Z" fill="#090D16" stroke="#F472B6" stroke-width="2"/>
      <polygon points="46,66 50,74 54,66" fill="#F8FAFC"/>
      <polygon points="58,67 62,76 66,67" fill="#F8FAFC"/>
      <polygon points="68,66 72,74 76,66" fill="#F8FAFC"/>
      <circle cx="24" cy="40" r="4" fill="#A855F7" opacity="0.8"/>
      <circle cx="96" cy="44" r="5" fill="#4ADE80" opacity="0.8"/>
    </svg>`,
  },
  {
    id: 'mob_rune_golem',
    name: '타락한 고대 룬 골렘',
    title: '제3장 · 고대 제단 수호 거신병',
    zoneId: 'zone_altar',
    level: 3,
    maxHp: 250,
    weaknessCategories: ['hybrid', 'arcane', 'weapon'],
    recommendedItemIds: ['hybrid_flameblade', 'hybrid_runeblade', 'arcane_3'],
    rewardGold: 450,
    rewardEnergy: 60,
    rewardItemId: 'chest_supply_2',
    lore:
      '본래 고대 룬 제단을 지키던 수호 거신병이었으나, 검은 일식의 충격으로 룬 회로가 뒤틀려 침입자를 무차별 공격하고 있습니다. 일반 무기로는 두꺼운 암석 장갑을 뚫기 어려우며, 이종 교차 연성 마검이나 룬 마법이 특효입니다.',
    introLine: {
      speaker: '드워프 대장장이 토르그',
      role: 'torg',
      text: '크악! 제단 수호 골렘의 룬 핵이 폭주하고 있다! 평범한 무기로는 흠집도 안 나! 기사의 장검과 화염 영약을 교차 연성한 〈홍련의 마검〉이나 〈뇌전의 룬검〉으로 룬 핵을 단숨에 베어라!',
    },
    defeatDialogue: [
      {
        speaker: '드워프 대장장이 토르그',
        role: 'torg',
        text: '보았느냐! 교차 연성 아티팩트의 일격에 저 단단한 룬 골렘의 외피가 단숨에 갈라졌다!',
      },
      {
        speaker: '견습 연금술사 리아',
        role: 'lia',
        text: '골렘의 흉부에서 오염되지 않은 순수한 제단 보급품과 고대 비전 서고의 열쇠가 나왔어요!',
      },
    ],
    svgArt: `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="golemArmor" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#64748B"/>
          <stop offset="50%" stop-color="#334155"/>
          <stop offset="100%" stop-color="#0F172A"/>
        </linearGradient>
      </defs>
      <ellipse cx="60" cy="108" rx="46" ry="7" fill="#000" opacity="0.5"/>
      <polygon points="26,42 46,24 74,24 94,42 88,92 32,92" fill="url(#golemArmor)" stroke="#38BDF8" stroke-width="2.5"/>
      <polygon points="12,48 28,38 32,78 16,84" fill="#1E293B" stroke="#818CF8" stroke-width="2"/>
      <polygon points="108,48 92,38 88,78 104,84" fill="#1E293B" stroke="#818CF8" stroke-width="2"/>
      <polygon points="44,18 76,18 82,36 38,36" fill="#0F172A" stroke="#38BDF8" stroke-width="2"/>
      <rect x="46" y="25" width="28" height="6" rx="3" fill="#F43F5E"/>
      <polygon points="60,46 74,62 60,78 46,62" fill="#090D16" stroke="#38BDF8" stroke-width="2.5"/>
      <circle cx="60" cy="62" r="8" fill="#38BDF8"/>
      <path d="M36 48L48 56M84 48L72 56M42 84L52 72M78 84L68 72" stroke="#38BDF8" stroke-width="2.5" stroke-linecap="round"/>
      <polygon points="36,92 54,92 50,106 32,106" fill="#334155" stroke="#64748B" stroke-width="2"/>
      <polygon points="66,92 84,92 88,106 70,106" fill="#334155" stroke="#64748B" stroke-width="2"/>
    </svg>`,
  },
  {
    id: 'mob_shadow_wraith',
    name: '심연의 금서 망령',
    title: '제4장 · 비전 서고의 기억 포식자',
    zoneId: 'zone_library',
    level: 4,
    maxHp: 420,
    weaknessCategories: ['arcane', 'hybrid', 'potion'],
    recommendedItemIds: ['hybrid_tome_of_life', 'arcane_4', 'potion_6'],
    rewardGold: 750,
    rewardEnergy: 80,
    rewardItemId: 'chest_supply_2',
    lore:
      '봉인된 고대 비전 서고에 스며든 심연의 그림자가 금서의 지식들을 집어삼키며 형상화된 고위 망령입니다. 대현자 엘드리치가 남긴 홀로그램 기록을 지우려 하고 있으며, 생명의 금서와 고위 비전 마법에 극도로 약합니다.',
    introLine: {
      speaker: '견습 연금술사 리아',
      role: 'lia',
      text: '스승님의 홀로그램 기록을 저 그림자 망령이 집어삼키려 하고 있어요! 고대 마도서와 불사조의 비약을 교차 연성한 〈생명의 금서〉나 고위 비전 마법으로 정화해 주세요!',
    },
    defeatDialogue: [
      {
        speaker: '견습 연금술사 리아',
        role: 'lia',
        text: '찬란한 생명의 빛이 망령의 그림자를 완전히 걷어냈어요! 스승님의 마지막 차원 좌표가 선명하게 떠올랐어요!',
      },
      {
        speaker: '드워프 대장장이 토르그',
        role: 'torg',
        text: '좋아! 이제 에테르 천공 성소로 향하는 마지막 봉인문이 열렸다!',
      },
    ],
    svgArt: `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="wraithCloak" cx="50%" cy="35%" r="60%">
          <stop offset="0%" stop-color="#6D28D9"/>
          <stop offset="60%" stop-color="#1E1B4B"/>
          <stop offset="100%" stop-color="#020617"/>
        </radialGradient>
      </defs>
      <ellipse cx="60" cy="108" rx="38" ry="6" fill="#6D28D9" opacity="0.35"/>
      <path d="M30 98C22 76 24 38 60 16C96 38 98 76 90 98L76 86L60 102L44 86L30 98Z" fill="url(#wraithCloak)" stroke="#A855F7" stroke-width="2.5"/>
      <circle cx="60" cy="46" r="16" fill="#020617" stroke="#C084FC" stroke-width="2"/>
      <polygon points="48,44 56,48 48,50" fill="#38BDF8"/>
      <polygon points="72,44 64,48 72,50" fill="#38BDF8"/>
      <path d="M40 70L60 62L80 70L80 86L60 78L40 86Z" fill="#FEF3C7" stroke="#F59E0B" stroke-width="2"/>
      <path d="M60 62V78" stroke="#B45309" stroke-width="2"/>
      <circle cx="24" cy="52" r="5" fill="#C084FC" opacity="0.85"/>
      <circle cx="96" cy="52" r="5" fill="#38BDF8" opacity="0.85"/>
      <path d="M50 14L60 6L70 14" stroke="#FDE047" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`,
  },
  {
    id: 'mob_eclipse_dragon',
    name: '검은 일식의 에테르 드래곤',
    title: '최종장 · 차원의 균열 지배자',
    zoneId: 'zone_sanctum',
    level: 5,
    maxHp: 800,
    weaknessCategories: ['hybrid', 'weapon', 'arcane'],
    recommendedItemIds: ['hybrid_aether_core', 'weapon_7', 'arcane_7'],
    rewardGold: 2000,
    rewardEnergy: 120,
    rewardItemId: 'chest_supply_2',
    lore:
      '10년 전 아케인 포지를 추락시켰던 「검은 일식」의 본체이자 차원의 균열을 가로막고 있는 심연의 에테르 드래곤입니다. 대현자 엘드리치를 구출하고 공방을 하늘로 띄우기 위해 반드시 넘어서야 할 최후의 시련입니다.',
    introLine: {
      speaker: '드워프 대장장이 토르그',
      role: 'torg',
      text: '드디어 본모습을 드러냈구나, 검은 일식의 망령 녀석! 리아, 우리의 모든 기술이 집약된 〈에테르 코어〉와 〈용살자의 신검〉, 〈아케인 왕관〉으로 저 사악한 용의 심장을 꿰뚫어버리자!',
    },
    defeatDialogue: [
      {
        speaker: '견습 연금술사 리아',
        role: 'lia',
        text: '해냈어요!! 에테르 드래곤의 어둠이 정화되며 찬란한 별빛 마력으로 환원되고 있어요!',
      },
      {
        speaker: '드워프 대장장이 토르그',
        role: 'torg',
        text: '크하하하! 차원의 문이 활짝 열렸다! 엘드리치 영감, 이제 그만 밖으로 나오라고!',
      },
    ],
    svgArt: `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="dragonAura" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stop-color="#F43F5E" stop-opacity="0.65"/>
          <stop offset="55%" stop-color="#7E22CE" stop-opacity="0.35"/>
          <stop offset="100%" stop-color="#090D16" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="dragonScale" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#312E81"/>
          <stop offset="50%" stop-color="#1E1B4B"/>
          <stop offset="100%" stop-color="#090D16"/>
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="54" fill="url(#dragonAura)"/>
      <path d="M8 30L38 48L24 72L6 64L16 48Z" fill="url(#dragonScale)" stroke="#F43F5E" stroke-width="2"/>
      <path d="M112 30L82 48L96 72L114 64L104 48Z" fill="url(#dragonScale)" stroke="#F43F5E" stroke-width="2"/>
      <polygon points="42,14 52,32 40,34" fill="#F59E0B" stroke="#FEF08A" stroke-width="1.5"/>
      <polygon points="78,14 68,32 80,34" fill="#F59E0B" stroke="#FEF08A" stroke-width="1.5"/>
      <polygon points="36,46 60,28 84,46 76,96 44,96" fill="url(#dragonScale)" stroke="#C084FC" stroke-width="2.5"/>
      <circle cx="60" cy="70" r="13" fill="#090D16" stroke="#F59E0B" stroke-width="2.5"/>
      <polygon points="60,59 69,70 60,81 51,70" fill="#F43F5E"/>
      <polygon points="46,44 56,48 48,52" fill="#FEF08A"/>
      <polygon points="74,44 64,48 72,52" fill="#FEF08A"/>
      <path d="M46 88L60 98L74 88" stroke="#38BDF8" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`,
  },
];

const BASE_DAMAGE_BY_LEVEL: Record<number, number> = {
  1: 12,
  2: 25,
  3: 50,
  4: 95,
  5: 170,
  6: 300,
  7: 520,
};

const HYBRID_BASE_DAMAGE: Record<string, number> = {
  hybrid_flameblade: 240,
  hybrid_runeblade: 310,
  hybrid_tome_of_life: 390,
  hybrid_aether_core: 500,
};

export function calculateItemDamage(
  itemDef: { id: string; category: string; level: number },
  monster: MonsterDef
): { damage: number; isWeakness: boolean; isSignature: boolean; flavorText: string } {
  const validCategories = ['weapon', 'potion', 'arcane', 'hybrid'];
  if (!validCategories.includes(itemDef.category)) {
    return {
      damage: 0,
      isWeakness: false,
      isSignature: false,
      flavorText: '공격에 사용할 수 없는 아이템입니다.',
    };
  }

  let baseDamage =
    itemDef.category === 'hybrid'
      ? HYBRID_BASE_DAMAGE[itemDef.id] ?? 300
      : BASE_DAMAGE_BY_LEVEL[itemDef.level] ?? Math.round(12 * Math.pow(1.85, itemDef.level - 1));

  const isSignature = monster.recommendedItemIds.includes(itemDef.id);
  const isWeakness = monster.weaknessCategories.includes(
    itemDef.category as 'weapon' | 'potion' | 'arcane' | 'hybrid'
  );

  let multiplier = 1;
  let flavorText = '⚔️ 일반 마법 타격!';

  if (isSignature) {
    multiplier = 2.0;
    flavorText = '🔥 전설 특효 일격!';
  } else if (isWeakness) {
    multiplier = 1.5;
    flavorText = '⚡ 약점 속성 타격!';
  }

  const damage = Math.round(baseDamage * multiplier);

  return {
    damage,
    isWeakness,
    isSignature,
    flavorText,
  };
}
