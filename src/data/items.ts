import { ItemDef, CrossCraftRecipe } from '../types';

export const ITEMS: Record<string, ItemDef> = {
  // ==========================================
  // 1. FORGE GENERATORS (대장간 모루 체인 Lv.1~3)
  // ==========================================
  gen_forge_1: {
    id: 'gen_forge_1',
    name: '금간 철모루',
    category: 'generator_forge',
    level: 1,
    maxLevel: 3,
    nextItemId: 'gen_forge_2',
    energyCost: 1,
    value: 30,
    color: '#f97316',
    description: '클릭하면 에너지를 1 소모하여 대장간 광석과 주괴를 생성합니다. 같은 모루끼리 합쳐 업그레이드하세요!',
    spawnPool: [
      { itemId: 'weapon_1', weight: 82 },
      { itemId: 'weapon_2', weight: 18 },
    ],
    svgIcon: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gf1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#94a3b8"/>
          <stop offset="100%" stop-color="#334155"/>
        </linearGradient>
      </defs>
      <ellipse cx="32" cy="54" rx="22" ry="5" fill="#0f172a" opacity="0.6"/>
      <path d="M14 44 H50 L46 52 H18 Z" fill="#1e293b" stroke="#64748b" stroke-width="1.5"/>
      <path d="M22 30 H42 L45 44 H19 Z" fill="url(#gf1)" stroke="#94a3b8" stroke-width="1.5"/>
      <path d="M8 22 H52 C56 22 58 27 50 30 H16 C10 30 6 26 8 22 Z" fill="url(#gf1)" stroke="#cbd5e1" stroke-width="1.8"/>
      <path d="M30 22 L28 28 L33 32" stroke="#f97316" stroke-width="2" fill="none"/>
      <circle cx="46" cy="16" r="4" fill="#fb923c" opacity="0.85"/>
    </svg>`,
  },
  gen_forge_2: {
    id: 'gen_forge_2',
    name: '단조 강철 모루',
    category: 'generator_forge',
    level: 2,
    maxLevel: 3,
    nextItemId: 'gen_forge_3',
    energyCost: 1,
    value: 75,
    color: '#fb923c',
    description: '단단히 벼려진 강철 모루입니다. 더 높은 확률로 강철 주괴와 수련용 단검을 바로 배출합니다.',
    spawnPool: [
      { itemId: 'weapon_1', weight: 55 },
      { itemId: 'weapon_2', weight: 35 },
      { itemId: 'weapon_3', weight: 10 },
    ],
    svgIcon: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gf2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#e2e8f0"/>
          <stop offset="50%" stop-color="#64748b"/>
          <stop offset="100%" stop-color="#1e293b"/>
        </linearGradient>
      </defs>
      <circle cx="32" cy="34" r="24" fill="#f97316" opacity="0.18"/>
      <path d="M12 45 H52 L48 54 H16 Z" fill="#334155" stroke="#f97316" stroke-width="1.5"/>
      <path d="M20 29 H44 L47 45 H17 Z" fill="url(#gf2)" stroke="#cbd5e1" stroke-width="1.5"/>
      <path d="M6 20 H54 C59 20 59 27 50 29 H14 C8 29 4 24 6 20 Z" fill="url(#gf2)" stroke="#f8fafc" stroke-width="2"/>
      <path d="M26 36 L32 31 L38 36 L32 41 Z" fill="#f97316"/>
    </svg>`,
  },
  gen_forge_3: {
    id: 'gen_forge_3',
    name: '드워프 룬 모루',
    category: 'generator_forge',
    level: 3,
    maxLevel: 3,
    energyCost: 1,
    value: 180,
    color: '#f59e0b',
    description: '전설적인 드워프 대장장이의 룬이 각인된 최고급 모루입니다. 고등급 무기 재료를 대량 배출합니다!',
    spawnPool: [
      { itemId: 'weapon_1', weight: 30 },
      { itemId: 'weapon_2', weight: 45 },
      { itemId: 'weapon_3', weight: 20 },
      { itemId: 'weapon_4', weight: 5 },
    ],
    svgIcon: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gf3" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#fef08a"/>
          <stop offset="50%" stop-color="#f59e0b"/>
          <stop offset="100%" stop-color="#78350f"/>
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="27" fill="#f59e0b" opacity="0.25"/>
      <path d="M10 46 H54 L50 55 H14 Z" fill="#451a03" stroke="#fbbf24" stroke-width="2"/>
      <path d="M18 28 H46 L49 46 H15 Z" fill="url(#gf3)" stroke="#fef08a" stroke-width="1.8"/>
      <path d="M5 18 H56 C61 18 60 26 51 28 H13 C7 28 3 23 5 18 Z" fill="url(#gf3)" stroke="#ffffff" stroke-width="2"/>
      <path d="M28 33 L32 29 L36 33 L32 42 Z" fill="#fffbeb"/>
      <circle cx="20" cy="23" r="2.5" fill="#fef08a"/>
      <circle cx="44" cy="23" r="2.5" fill="#fef08a"/>
    </svg>`,
  },

  // ==========================================
  // 2. ALCHEMY GENERATORS (연금술 증류기 체인 Lv.1~3)
  // ==========================================
  gen_alchemy_1: {
    id: 'gen_alchemy_1',
    name: '약초 바구니',
    category: 'generator_alchemy',
    level: 1,
    maxLevel: 3,
    nextItemId: 'gen_alchemy_2',
    energyCost: 1,
    value: 30,
    color: '#10b981',
    description: '클릭하면 에너지를 1 소모하여 싱싱한 야생 약초와 정제된 수액을 배출합니다.',
    spawnPool: [
      { itemId: 'potion_1', weight: 82 },
      { itemId: 'potion_2', weight: 18 },
    ],
    svgIcon: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="32" cy="54" rx="20" ry="5" fill="#0f172a" opacity="0.6"/>
      <path d="M18 28 C18 12 46 12 46 28" stroke="#a16207" stroke-width="4" fill="none"/>
      <path d="M14 28 C20 20 28 22 30 30 C34 20 44 20 48 28" fill="#10b981" stroke="#34d399" stroke-width="1.5"/>
      <path d="M14 30 H50 L45 50 H19 Z" fill="#ca8a04" stroke="#fef08a" stroke-width="1.5"/>
      <line x1="22" y1="30" x2="24" y2="50" stroke="#854d0e" stroke-width="2"/>
      <line x1="32" y1="30" x2="32" y2="50" stroke="#854d0e" stroke-width="2"/>
      <line x1="42" y1="30" x2="40" y2="50" stroke="#854d0e" stroke-width="2"/>
      <circle cx="25" cy="24" r="3" fill="#f43f5e"/>
      <circle cx="38" cy="23" r="3" fill="#38bdf8"/>
    </svg>`,
  },
  gen_alchemy_2: {
    id: 'gen_alchemy_2',
    name: '구리 증류기',
    category: 'generator_alchemy',
    level: 2,
    maxLevel: 3,
    nextItemId: 'gen_alchemy_3',
    energyCost: 1,
    value: 75,
    color: '#34d399',
    description: '마력 증기를 응축하는 연금술 구리 증류기입니다. 정제된 수액과 회복약을 빠르게 추출합니다.',
    spawnPool: [
      { itemId: 'potion_1', weight: 55 },
      { itemId: 'potion_2', weight: 35 },
      { itemId: 'potion_3', weight: 10 },
    ],
    svgIcon: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="34" r="24" fill="#10b981" opacity="0.18"/>
      <ellipse cx="28" cy="38" rx="14" ry="14" fill="#d97706" stroke="#fde68a" stroke-width="2"/>
      <ellipse cx="28" cy="40" rx="10" ry="8" fill="#10b981"/>
      <path d="M24 24 V16 C24 12 46 12 48 26 L50 38" stroke="#f59e0b" stroke-width="4" fill="none" stroke-linecap="round"/>
      <circle cx="50" cy="44" r="5" fill="#34d399" stroke="#ecfdf5" stroke-width="1.5"/>
      <circle cx="25" cy="38" r="2.5" fill="#a7f3d0"/>
      <circle cx="32" cy="35" r="2" fill="#a7f3d0"/>
    </svg>`,
  },
  gen_alchemy_3: {
    id: 'gen_alchemy_3',
    name: '현자의 연금 가마솥',
    category: 'generator_alchemy',
    level: 3,
    maxLevel: 3,
    energyCost: 1,
    value: 180,
    color: '#059669',
    description: '고대 연금술사의 비전이 깃든 황금 가마솥입니다. 고농축 포션 재료를 아낌없이 뿜어냅니다!',
    spawnPool: [
      { itemId: 'potion_1', weight: 30 },
      { itemId: 'potion_2', weight: 45 },
      { itemId: 'potion_3', weight: 20 },
      { itemId: 'potion_4', weight: 5 },
    ],
    svgIcon: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="34" r="26" fill="#34d399" opacity="0.25"/>
      <path d="M14 26 H50 C54 38 48 52 32 52 C16 52 10 38 14 26 Z" fill="#1e293b" stroke="#fbbf24" stroke-width="2.5"/>
      <ellipse cx="32" cy="26" rx="18" ry="6" fill="#10b981" stroke="#a7f3d0" stroke-width="2"/>
      <circle cx="26" cy="20" r="3.5" fill="#6ee7b7"/>
      <circle cx="36" cy="16" r="4.5" fill="#34d399"/>
      <circle cx="42" cy="22" r="2.5" fill="#a7f3d0"/>
      <path d="M26 38 L32 32 L38 38 L32 44 Z" fill="#fbbf24"/>
    </svg>`,
  },

  // ==========================================
  // 3. ARCANE GENERATORS (비전 성소 체인 Lv.1~3)
  // ==========================================
  gen_arcane_1: {
    id: 'gen_arcane_1',
    name: '불안정한 마력석',
    category: 'generator_arcane',
    level: 1,
    maxLevel: 3,
    nextItemId: 'gen_arcane_2',
    energyCost: 1,
    value: 45,
    color: '#a855f7',
    description: '클릭하면 에너지를 1 소모하여 순수한 마력 가루와 각인된 룬석을 방출합니다.',
    spawnPool: [
      { itemId: 'arcane_1', weight: 80 },
      { itemId: 'arcane_2', weight: 20 },
    ],
    svgIcon: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="22" fill="#a855f7" opacity="0.2"/>
      <polygon points="32,10 46,26 40,52 24,52 18,26" fill="#7e22ce" stroke="#e9d5ff" stroke-width="2"/>
      <polygon points="32,10 40,28 32,48 24,28" fill="#c084fc" opacity="0.7"/>
      <circle cx="16" cy="18" r="2.5" fill="#f0abfc"/>
      <circle cx="48" cy="20" r="3" fill="#e879f9"/>
    </svg>`,
  },
  gen_arcane_2: {
    id: 'gen_arcane_2',
    name: '비전 수정구',
    category: 'generator_arcane',
    level: 2,
    maxLevel: 3,
    nextItemId: 'gen_arcane_3',
    energyCost: 1,
    value: 95,
    color: '#c084fc',
    description: '고대 마법사들이 사용하던 수정구입니다. 각인된 룬석과 마법 스크롤까지 생성합니다.',
    spawnPool: [
      { itemId: 'arcane_1', weight: 52 },
      { itemId: 'arcane_2', weight: 36 },
      { itemId: 'arcane_3', weight: 12 },
    ],
    svgIcon: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="28" r="24" fill="#c084fc" opacity="0.22"/>
      <path d="M20 46 H44 L48 54 H16 Z" fill="#b45309" stroke="#fde047" stroke-width="2"/>
      <circle cx="32" cy="28" r="18" fill="#6b21a8" stroke="#f5d0fe" stroke-width="2.2"/>
      <circle cx="26" cy="22" r="6" fill="#e879f9" opacity="0.65"/>
      <path d="M24 28 L32 20 L40 28 L32 36 Z" fill="#f0abfc"/>
    </svg>`,
  },
  gen_arcane_3: {
    id: 'gen_arcane_3',
    name: '성운의 오벨리스크',
    category: 'generator_arcane',
    level: 3,
    maxLevel: 3,
    energyCost: 1,
    value: 220,
    color: '#e879f9',
    description: '차원의 마력을 끌어오는 성운의 오벨리스크입니다. 고대 비전 유물을 대량으로 소환합니다!',
    spawnPool: [
      { itemId: 'arcane_1', weight: 28 },
      { itemId: 'arcane_2', weight: 44 },
      { itemId: 'arcane_3', weight: 22 },
      { itemId: 'arcane_4', weight: 6 },
    ],
    svgIcon: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="27" fill="#e879f9" opacity="0.26"/>
      <path d="M14 50 H50 L54 56 H10 Z" fill="#3b0764" stroke="#f0abfc" stroke-width="2"/>
      <polygon points="32,6 44,20 42,50 22,50 20,20" fill="#581c87" stroke="#f5d0fe" stroke-width="2"/>
      <polygon points="32,12 38,24 32,44 26,24" fill="#e879f9"/>
      <circle cx="32" cy="26" r="4" fill="#ffffff"/>
    </svg>`,
  },

  // ==========================================
  // 4. WEAPON / FORGE CHAIN (대장간 무기 체인 Lv.1~7)
  // ==========================================
  weapon_1: {
    id: 'weapon_1',
    name: '철광석',
    category: 'weapon',
    level: 1,
    maxLevel: 7,
    nextItemId: 'weapon_2',
    value: 4,
    color: '#94a3b8',
    description: '불순물이 섞인 거친 철광석입니다. 두 개를 합치면 단단한 강철 주괴로 제련됩니다.',
    svgIcon: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <polygon points="16,44 12,28 26,16 46,20 52,38 40,50" fill="#475569" stroke="#cbd5e1" stroke-width="2"/>
      <polygon points="26,16 46,20 36,34 18,30" fill="#64748b"/>
      <circle cx="26" cy="28" r="3" fill="#f97316"/>
      <circle cx="38" cy="36" r="2.5" fill="#fb923c"/>
    </svg>`,
  },
  weapon_2: {
    id: 'weapon_2',
    name: '강철 주괴',
    category: 'weapon',
    level: 2,
    maxLevel: 7,
    nextItemId: 'weapon_3',
    value: 10,
    color: '#cbd5e1',
    description: '용광로에서 정련된 반짝이는 강철 주괴입니다. 무기를 벼리는 기본 재료입니다.',
    svgIcon: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <polygon points="12,38 22,22 52,22 42,38" fill="#e2e8f0" stroke="#f8fafc" stroke-width="2"/>
      <polygon points="12,38 42,38 46,48 10,48" fill="#64748b" stroke="#cbd5e1" stroke-width="2"/>
      <polygon points="42,38 52,22 56,32 46,48" fill="#475569" stroke="#cbd5e1" stroke-width="2"/>
      <line x1="24" y1="28" x2="42" y2="28" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`,
  },
  weapon_3: {
    id: 'weapon_3',
    name: '수련용 단검',
    category: 'weapon',
    level: 3,
    maxLevel: 7,
    nextItemId: 'weapon_4',
    value: 22,
    color: '#38bdf8',
    description: '가볍고 날렵하게 벼려낸 단검입니다. 견습 기사들의 기본 무장입니다.',
    svgIcon: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <polygon points="48,14 40,36 28,24" fill="#e2e8f0" stroke="#f8fafc" stroke-width="2"/>
      <line x1="48" y1="14" x2="34" y2="30" stroke="#38bdf8" stroke-width="2"/>
      <path d="M22 22 L42 42" stroke="#f59e0b" stroke-width="4" stroke-linecap="round"/>
      <path d="M28 36 L16 48" stroke="#78350f" stroke-width="6" stroke-linecap="round"/>
      <circle cx="15" cy="49" r="4" fill="#fbbf24"/>
    </svg>`,
  },
  weapon_4: {
    id: 'weapon_4',
    name: '기사의 장검',
    category: 'weapon',
    level: 4,
    maxLevel: 7,
    nextItemId: 'weapon_5',
    value: 48,
    color: '#60a5fa',
    description: '균형 잡힌 정통 기사단 장검입니다. [🔮교차 연성: 화염의 영약(Lv.5)과 합치면 홍련의 마검 탄생!]',
    svgIcon: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <polygon points="52,10 42,38 26,22" fill="#dbeafe" stroke="#ffffff" stroke-width="2"/>
      <line x1="50" y1="12" x2="30" y2="32" stroke="#3b82f6" stroke-width="2.5"/>
      <path d="M18 22 L42 46" stroke="#fbbf24" stroke-width="5" stroke-linecap="round"/>
      <path d="M26 38 L12 52" stroke="#1e3a8a" stroke-width="6" stroke-linecap="round"/>
      <circle cx="11" cy="53" r="4.5" fill="#f59e0b"/>
    </svg>`,
  },
  weapon_5: {
    id: 'weapon_5',
    name: '미스릴 대검',
    category: 'weapon',
    level: 5,
    maxLevel: 7,
    nextItemId: 'weapon_6',
    value: 105,
    color: '#2dd4bf',
    description: '은빛 미스릴로 주조된 거대한 대검입니다. [🔮교차 연성: 각인된 룬석(Lv.2)과 합치면 뇌전의 룬검 탄생!]',
    svgIcon: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <circle cx="34" cy="30" r="22" fill="#2dd4bf" opacity="0.2"/>
      <polygon points="54,8 46,38 34,42 22,30 26,18" fill="#ccfbf1" stroke="#2dd4bf" stroke-width="2"/>
      <polygon points="54,8 38,34 28,24" fill="#5eead4"/>
      <path d="M16 24 L40 48" stroke="#f59e0b" stroke-width="5.5" stroke-linecap="round"/>
      <path d="M24 40 L10 54" stroke="#0f766e" stroke-width="7" stroke-linecap="round"/>
      <circle cx="28" cy="36" r="3.5" fill="#38bdf8"/>
    </svg>`,
  },
  weapon_6: {
    id: 'weapon_6',
    name: '용비늘 클레이모어',
    category: 'weapon',
    level: 6,
    maxLevel: 7,
    nextItemId: 'weapon_7',
    value: 230,
    color: '#f43f5e',
    description: '고대 화룡의 비늘을 덧대어 단조한 위압적인 양손 클레이모어입니다.',
    svgIcon: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <circle cx="34" cy="30" r="24" fill="#f43f5e" opacity="0.24"/>
      <polygon points="56,6 48,38 36,44 20,28 26,16" fill="#fecdd3" stroke="#f43f5e" stroke-width="2.2"/>
      <polygon points="52,10 38,36 28,26" fill="#e11d48"/>
      <path d="M14 22 L42 50" stroke="#fbbf24" stroke-width="6" stroke-linecap="round"/>
      <path d="M24 40 L10 54" stroke="#881337" stroke-width="7" stroke-linecap="round"/>
      <circle cx="28" cy="36" r="4" fill="#fef08a"/>
    </svg>`,
  },
  weapon_7: {
    id: 'weapon_7',
    name: '천공의 성검',
    category: 'weapon',
    level: 7,
    maxLevel: 7,
    value: 520,
    color: '#facc15',
    description: '대장간 기술의 정점! 태양의 빛과 성스러운 신성이 깃든 최고 등급 전설의 성검입니다.',
    svgIcon: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="27" fill="#facc15" opacity="0.3"/>
      <polygon points="56,6 48,38 36,44 20,28 26,16" fill="#fef9c3" stroke="#f59e0b" stroke-width="2.5"/>
      <line x1="54" y1="8" x2="26" y2="36" stroke="#ffffff" stroke-width="3"/>
      <path d="M12 20 C24 28 36 40 44 52" stroke="#fbbf24" stroke-width="6.5" stroke-linecap="round"/>
      <path d="M24 40 L10 54" stroke="#b45309" stroke-width="7" stroke-linecap="round"/>
      <circle cx="28" cy="36" r="5" fill="#38bdf8" stroke="#ffffff" stroke-width="1.5"/>
    </svg>`,
  },

  // ==========================================
  // 5. POTION / ALCHEMY CHAIN (연금술 포션 체인 Lv.1~7)
  // ==========================================
  potion_1: {
    id: 'potion_1',
    name: '야생 약초',
    category: 'potion',
    level: 1,
    maxLevel: 7,
    nextItemId: 'potion_2',
    value: 4,
    color: '#4ade80',
    description: '은은한 마력을 머금은 푸른 약초 잎사귀입니다. 연금술의 가장 기초적인 재료입니다.',
    svgIcon: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 48 C24 32 36 20 50 14 C46 30 36 42 20 48 Z" fill="#22c55e" stroke="#bbf7d0" stroke-width="2"/>
      <path d="M18 46 C14 32 20 18 32 14 C32 28 26 38 18 46 Z" fill="#16a34a" stroke="#86efac" stroke-width="1.8"/>
      <path d="M16 52 L38 26" stroke="#dcfce7" stroke-width="2" stroke-linecap="round"/>
    </svg>`,
  },
  potion_2: {
    id: 'potion_2',
    name: '정제된 수액',
    category: 'potion',
    level: 2,
    maxLevel: 7,
    nextItemId: 'potion_3',
    value: 10,
    color: '#34d399',
    description: '약초를 짓이겨 불순물을 걸러낸 맑은 초록빛 연금 수액입니다.',
    svgIcon: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <path d="M26 14 H38 V24 L46 44 C48 50 44 54 32 54 C20 54 16 50 18 44 L26 24 Z" fill="#ecfeff" opacity="0.25" stroke="#a7f3d0" stroke-width="2"/>
      <path d="M20 38 H44 L46 45 C47 50 42 52 32 52 C22 52 17 50 18 45 Z" fill="#10b981"/>
      <rect x="27" y="10" width="10" height="5" rx="2" fill="#b45309"/>
    </svg>`,
  },
  potion_3: {
    id: 'potion_3',
    name: '하급 회복약',
    category: 'potion',
    level: 3,
    maxLevel: 7,
    nextItemId: 'potion_4',
    value: 22,
    color: '#fb7185',
    description: '상처를 빠르게 아물게 하는 따뜻한 붉은빛 회복 물약입니다.',
    svgIcon: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="38" r="16" fill="#f43f5e" stroke="#fecdd3" stroke-width="2"/>
      <rect x="27" y="14" width="10" height="10" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="1.5"/>
      <rect x="26" y="10" width="12" height="5" rx="2" fill="#92400e"/>
      <path d="M28 38 H36 M32 34 V42" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
    </svg>`,
  },
  potion_4: {
    id: 'potion_4',
    name: '마나 포션',
    category: 'potion',
    level: 4,
    maxLevel: 7,
    nextItemId: 'potion_5',
    value: 48,
    color: '#38bdf8',
    description: '깊은 바다처럼 푸른 빛이 감도는 고농축 마나 포션입니다.',
    svgIcon: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <polygon points="26,16 38,16 38,24 50,42 44,54 20,54 14,42 26,24" fill="#0284c7" stroke="#bae6fd" stroke-width="2"/>
      <polygon points="20,38 44,38 48,44 42,52 22,52 16,44" fill="#38bdf8"/>
      <rect x="27" y="11" width="10" height="5" rx="2" fill="#f59e0b"/>
      <circle cx="28" cy="44" r="3" fill="#e0f2fe"/>
    </svg>`,
  },
  potion_5: {
    id: 'potion_5',
    name: '화염의 영약',
    category: 'potion',
    level: 5,
    maxLevel: 7,
    nextItemId: 'potion_6',
    value: 105,
    color: '#f97316',
    description: '병 속에서 태양 같은 불꽃이 소용돌이치는 영약입니다. [🔮교차 연성: 기사의 장검(Lv.4)과 합치면 홍련의 마검 탄생!]',
    svgIcon: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="36" r="22" fill="#f97316" opacity="0.22"/>
      <circle cx="32" cy="38" r="16" fill="#ea580c" stroke="#fed7aa" stroke-width="2.2"/>
      <path d="M32 26 C38 34 40 42 32 48 C24 42 26 34 32 26 Z" fill="#fde047"/>
      <rect x="27" y="14" width="10" height="8" fill="#fb923c" stroke="#fed7aa" stroke-width="1.5"/>
      <rect x="25" y="10" width="14" height="5" rx="2" fill="#fbbf24"/>
    </svg>`,
  },
  potion_6: {
    id: 'potion_6',
    name: '불사조의 비약',
    category: 'potion',
    level: 6,
    maxLevel: 7,
    nextItemId: 'potion_7',
    value: 230,
    color: '#f59e0b',
    description: '불사조의 깃털을 녹여 만든 황금빛 생명의 비약입니다. [🔮교차 연성: 고대 마도서(Lv.4)와 합치면 생명의 금서 탄생!]',
    svgIcon: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="34" r="24" fill="#fbbf24" opacity="0.25"/>
      <path d="M12 34 C6 24 14 18 22 28" fill="#f97316" stroke="#fef08a" stroke-width="1.5"/>
      <path d="M52 34 C58 24 50 18 42 28" fill="#f97316" stroke="#fef08a" stroke-width="1.5"/>
      <circle cx="32" cy="38" r="15" fill="#f59e0b" stroke="#fef9c3" stroke-width="2.2"/>
      <polygon points="32,28 36,38 32,46 28,38" fill="#ffffff"/>
      <rect x="26" y="12" width="12" height="10" rx="3" fill="#fef08a" stroke="#d97706" stroke-width="1.5"/>
    </svg>`,
  },
  potion_7: {
    id: 'potion_7',
    name: '현자의 돌',
    category: 'potion',
    level: 7,
    maxLevel: 7,
    value: 520,
    color: '#ef4444',
    description: '모든 연금술사의 궁극적 목표인 완전무결한 진홍빛 현자의 돌입니다! [🔮교차 연성: 정령의 보주(Lv.5)와 합치면 에테르 코어 탄생!]',
    svgIcon: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="27" fill="#ef4444" opacity="0.3"/>
      <circle cx="32" cy="32" r="22" fill="none" stroke="#fca5a5" stroke-width="1.5" stroke-dasharray="4 3"/>
      <polygon points="32,8 50,24 44,52 20,52 14,24" fill="#dc2626" stroke="#fecaca" stroke-width="2.5"/>
      <polygon points="32,14 44,26 32,48 20,26" fill="#f87171"/>
      <circle cx="32" cy="28" r="5" fill="#fef08a"/>
    </svg>`,
  },

  // ==========================================
  // 6. ARCANE / MAGIC CHAIN (비전 마법 체인 Lv.1~7)
  // ==========================================
  arcane_1: {
    id: 'arcane_1',
    name: '마력 가루',
    category: 'arcane',
    level: 1,
    maxLevel: 7,
    nextItemId: 'arcane_2',
    value: 6,
    color: '#c084fc',
    description: '별빛처럼 반짝이는 보라색 비전 마력 가루입니다.',
    svgIcon: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 48 C22 34 42 34 50 48 Z" fill="#9333ea" stroke="#f3e8ff" stroke-width="2"/>
      <circle cx="24" cy="26" r="3" fill="#e879f9"/>
      <circle cx="34" cy="20" r="4" fill="#f0abfc"/>
      <circle cx="42" cy="28" r="2.5" fill="#c084fc"/>
    </svg>`,
  },
  arcane_2: {
    id: 'arcane_2',
    name: '각인된 룬석',
    category: 'arcane',
    level: 2,
    maxLevel: 7,
    nextItemId: 'arcane_3',
    value: 15,
    color: '#a855f7',
    description: '고대 마법 문자가 새겨진 룬석입니다. [🔮교차 연성: 미스릴 대검(Lv.5)과 합치면 뇌전의 룬검 탄생!]',
    svgIcon: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <polygon points="32,10 50,24 44,52 20,52 14,24" fill="#4c1d95" stroke="#d8b4fe" stroke-width="2.2"/>
      <path d="M26 22 L38 22 L26 42 L38 42" stroke="#f0abfc" stroke-width="3" fill="none" stroke-linecap="round"/>
    </svg>`,
  },
  arcane_3: {
    id: 'arcane_3',
    name: '마법 스크롤',
    category: 'arcane',
    level: 3,
    maxLevel: 7,
    nextItemId: 'arcane_4',
    value: 34,
    color: '#e879f9',
    description: '강력한 비전 주문이 적힌 양피지 마법 스크롤입니다.',
    svgIcon: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <rect x="18" y="14" width="28" height="36" rx="4" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
      <rect x="14" y="12" width="36" height="6" rx="3" fill="#d97706"/>
      <rect x="14" y="46" width="36" height="6" rx="3" fill="#d97706"/>
      <path d="M24 26 H40 M24 32 H36 M24 38 H40" stroke="#9333ea" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`,
  },
  arcane_4: {
    id: 'arcane_4',
    name: '고대 마도서',
    category: 'arcane',
    level: 4,
    maxLevel: 7,
    nextItemId: 'arcane_5',
    value: 72,
    color: '#8b5cf6',
    description: '잃어버린 시대의 마법 지식이 봉인된 마도서입니다. [🔮교차 연성: 불사조의 비약(Lv.6)과 합치면 생명의 금서 탄생!]',
    svgIcon: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <rect x="16" y="12" width="32" height="40" rx="4" fill="#581c87" stroke="#f0abfc" stroke-width="2.2"/>
      <line x1="22" y1="12" x2="22" y2="52" stroke="#fbbf24" stroke-width="2"/>
      <polygon points="35,22 41,32 35,42 29,32" fill="#e879f9" stroke="#ffffff" stroke-width="1.5"/>
    </svg>`,
  },
  arcane_5: {
    id: 'arcane_5',
    name: '정령의 보주',
    category: 'arcane',
    level: 5,
    maxLevel: 7,
    nextItemId: 'arcane_6',
    value: 155,
    color: '#38bdf8',
    description: '원소 정령의 순수한 에테르가 응축된 신비한 보주입니다. [🔮교차 연성: 현자의 돌(Lv.7)과 합치면 에테르 코어 탄생!]',
    svgIcon: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="24" fill="#38bdf8" opacity="0.22"/>
      <circle cx="32" cy="32" r="17" fill="#0284c7" stroke="#e0f2fe" stroke-width="2.5"/>
      <ellipse cx="32" cy="32" rx="24" ry="8" fill="none" stroke="#f0abfc" stroke-width="2" transform="rotate(-25 32 32)"/>
      <circle cx="27" cy="27" r="5" fill="#ffffff" opacity="0.8"/>
    </svg>`,
  },
  arcane_6: {
    id: 'arcane_6',
    name: '차원의 왕관',
    category: 'arcane',
    level: 6,
    maxLevel: 7,
    nextItemId: 'arcane_7',
    value: 330,
    color: '#e879f9',
    description: '별들의 궤적을 읽는 대현자의 찬란한 비전 왕관입니다.',
    svgIcon: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <polygon points="10,44 16,20 26,32 32,14 38,32 48,20 54,44" fill="#f59e0b" stroke="#fef08a" stroke-width="2.2"/>
      <circle cx="32" cy="28" r="4" fill="#e879f9"/>
      <circle cx="20" cy="34" r="3" fill="#38bdf8"/>
      <circle cx="44" cy="34" r="3" fill="#38bdf8"/>
    </svg>`,
  },
  arcane_7: {
    id: 'arcane_7',
    name: '대마법사의 지팡이',
    category: 'arcane',
    level: 7,
    maxLevel: 7,
    value: 680,
    color: '#f0abfc',
    description: '비전 체인의 정점! 우주의 마력을 자유자재로 조율하는 전설의 지팡이입니다.',
    svgIcon: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <circle cx="44" cy="20" r="18" fill="#e879f9" opacity="0.3"/>
      <line x1="12" y1="52" x2="42" y2="22" stroke="#fbbf24" stroke-width="5" stroke-linecap="round"/>
      <circle cx="46" cy="18" r="10" fill="#a855f7" stroke="#ffffff" stroke-width="2.2"/>
      <polygon points="46,11 51,18 46,25 41,18" fill="#fef08a"/>
    </svg>`,
  },

  // ==========================================
  // 7. HYBRID CROSS-CRAFT ARTIFACTS (이종 교차 합성 아티팩트 4종)
  // ==========================================
  hybrid_flameblade: {
    id: 'hybrid_flameblade',
    name: '홍련의 마검',
    category: 'hybrid',
    level: 1,
    maxLevel: 1,
    value: 320,
    color: '#f97316',
    description: '[교차 연성 아티팩트] 기사의 장검에 화염의 영약을 불어넣어 완성한 불타오르는 마검입니다!',
    svgIcon: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="26" fill="#f97316" opacity="0.28"/>
      <path d="M22 18 C28 6 44 8 54 8 C52 20 46 34 34 42 Z" fill="#ef4444" stroke="#fde047" stroke-width="2.2"/>
      <polygon points="52,10 38,34 28,24" fill="#fef08a"/>
      <path d="M16 24 L40 48" stroke="#f59e0b" stroke-width="5.5" stroke-linecap="round"/>
      <path d="M24 40 L10 54" stroke="#7c2d12" stroke-width="6.5" stroke-linecap="round"/>
      <circle cx="28" cy="36" r="4.5" fill="#fde047"/>
    </svg>`,
  },
  hybrid_runeblade: {
    id: 'hybrid_runeblade',
    name: '뇌전의 룬검',
    category: 'hybrid',
    level: 1,
    maxLevel: 1,
    value: 360,
    color: '#a855f7',
    description: '[교차 연성 아티팩트] 미스릴 대검에 각인된 룬석을 융합하여 자줏빛 번개가 흐르는 마검입니다!',
    svgIcon: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="26" fill="#a855f7" opacity="0.28"/>
      <polygon points="54,8 46,38 34,42 22,30 26,18" fill="#c084fc" stroke="#f5d0fe" stroke-width="2.2"/>
      <polyline points="50,12 38,22 42,26 30,36" stroke="#fef08a" stroke-width="2.5" fill="none"/>
      <path d="M16 24 L40 48" stroke="#38bdf8" stroke-width="5.5" stroke-linecap="round"/>
      <path d="M24 40 L10 54" stroke="#3b0764" stroke-width="6.5" stroke-linecap="round"/>
    </svg>`,
  },
  hybrid_tome_of_life: {
    id: 'hybrid_tome_of_life',
    name: '생명의 금서',
    category: 'hybrid',
    level: 1,
    maxLevel: 1,
    value: 580,
    color: '#10b981',
    description: '[교차 연성 아티팩트] 고대 마도서를 불사조의 비약으로 각성시켜 영원한 생명력을 품은 신비의 서입니다!',
    svgIcon: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="26" fill="#10b981" opacity="0.28"/>
      <rect x="14" y="12" width="36" height="42" rx="5" fill="#065f46" stroke="#fde047" stroke-width="2.5"/>
      <path d="M32 20 C38 26 38 38 32 44 C26 38 26 26 32 20 Z" fill="#34d399" stroke="#ffffff" stroke-width="1.5"/>
      <circle cx="32" cy="32" r="4" fill="#fef08a"/>
    </svg>`,
  },
  hybrid_aether_core: {
    id: 'hybrid_aether_core',
    name: '에테르 코어',
    category: 'hybrid',
    level: 1,
    maxLevel: 1,
    value: 1200,
    color: '#facc15',
    description: '[최종 교차 연성 아티팩트] 정령의 보주와 현자의 돌이 하나로 융합된 아케인 포지의 심장입니다!',
    svgIcon: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="28" fill="#facc15" opacity="0.32"/>
      <ellipse cx="32" cy="32" rx="26" ry="10" fill="none" stroke="#38bdf8" stroke-width="2.2" transform="rotate(30 32 32)"/>
      <ellipse cx="32" cy="32" rx="26" ry="10" fill="none" stroke="#e879f9" stroke-width="2.2" transform="rotate(-30 32 32)"/>
      <polygon points="32,12 46,32 32,52 18,32" fill="#ef4444" stroke="#fef08a" stroke-width="2.5"/>
      <circle cx="32" cy="32" r="6" fill="#ffffff"/>
    </svg>`,
  },

  // ==========================================
  // 8. ECONOMY CHAINS: GOLD, ENERGY, SUPPLY CHESTS
  // ==========================================
  gold_1: {
    id: 'gold_1',
    name: '고대 동화',
    category: 'gold',
    level: 1,
    maxLevel: 4,
    nextItemId: 'gold_2',
    value: 15,
    color: '#fbbf24',
    description: '더블클릭(또는 즉시 사용)하면 +15 골드를 획득합니다. 합쳐서 쓰면 가치가 대폭 상승합니다!',
    svgIcon: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="16" fill="#d97706" stroke="#fde68a" stroke-width="2.5"/>
      <circle cx="32" cy="32" r="10" fill="#f59e0b"/>
      <text x="32" y="37" text-anchor="middle" fill="#fffbeb" font-size="14" font-weight="bold">G</text>
    </svg>`,
  },
  gold_2: {
    id: 'gold_2',
    name: '은화 더미',
    category: 'gold',
    level: 2,
    maxLevel: 4,
    nextItemId: 'gold_3',
    value: 40,
    color: '#fbbf24',
    description: '사용 시 +40 골드를 획득합니다. 한 단계 더 합치면 묵직한 금화 자루가 됩니다.',
    svgIcon: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="36" r="13" fill="#f59e0b" stroke="#fef08a" stroke-width="2"/>
      <circle cx="40" cy="36" r="13" fill="#d97706" stroke="#fef08a" stroke-width="2"/>
      <circle cx="32" cy="24" r="13" fill="#fbbf24" stroke="#ffffff" stroke-width="2"/>
    </svg>`,
  },
  gold_3: {
    id: 'gold_3',
    name: '금화 자루',
    category: 'gold',
    level: 3,
    maxLevel: 4,
    nextItemId: 'gold_4',
    value: 100,
    color: '#f59e0b',
    description: '사용 시 +100 골드를 획득하는 두둑한 금화 자루입니다.',
    svgIcon: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 24 H42 L48 46 C48 52 40 54 32 54 C24 54 16 52 16 46 Z" fill="#b45309" stroke="#fde047" stroke-width="2.2"/>
      <path d="M24 16 L32 24 L40 16" fill="#d97706" stroke="#fde047" stroke-width="2"/>
      <circle cx="32" cy="39" r="7" fill="#fbbf24"/>
    </svg>`,
  },
  gold_4: {
    id: 'gold_4',
    name: '왕실 보물상자',
    category: 'gold',
    level: 4,
    maxLevel: 4,
    value: 260,
    color: '#facc15',
    description: '골드 체인 최고 등급! 사용 시 즉시 +260 골드를 획득합니다!',
    svgIcon: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="24" width="40" height="28" rx="4" fill="#92400e" stroke="#fef08a" stroke-width="2.5"/>
      <path d="M12 28 H52" stroke="#facc15" stroke-width="4"/>
      <circle cx="32" cy="28" r="5" fill="#fef08a"/>
    </svg>`,
  },

  energy_1: {
    id: 'energy_1',
    name: '작은 마나 방울',
    category: 'energy',
    level: 1,
    maxLevel: 4,
    nextItemId: 'energy_2',
    value: 15,
    color: '#38bdf8',
    description: '더블클릭(또는 즉시 사용)하면 +15 에너지를 회복합니다. 합쳐서 쓰면 회복량이 크게 늘어납니다!',
    svgIcon: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <path d="M32 14 C42 28 46 36 46 42 C46 50 40 54 32 54 C24 54 18 50 18 42 C18 36 22 28 32 14 Z" fill="#0ea5e9" stroke="#bae6fd" stroke-width="2.2"/>
      <circle cx="27" cy="38" r="4" fill="#e0f2fe"/>
    </svg>`,
  },
  energy_2: {
    id: 'energy_2',
    name: '마나 구슬',
    category: 'energy',
    level: 2,
    maxLevel: 4,
    nextItemId: 'energy_3',
    value: 35,
    color: '#38bdf8',
    description: '사용 시 +35 에너지를 즉시 충전합니다.',
    svgIcon: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="18" fill="#0284c7" stroke="#e0f2fe" stroke-width="2.5"/>
      <polygon points="34,18 24,34 32,34 28,46 40,30 32,30" fill="#fef08a"/>
    </svg>`,
  },
  energy_3: {
    id: 'energy_3',
    name: '충전된 마나 결정',
    category: 'energy',
    level: 3,
    maxLevel: 4,
    nextItemId: 'energy_4',
    value: 75,
    color: '#06b6d4',
    description: '사용 시 +75 에너지를 즉시 충전하는 고순도 마나 크리스탈입니다.',
    svgIcon: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <polygon points="32,8 48,26 42,54 22,54 16,26" fill="#0891b2" stroke="#cffafe" stroke-width="2.2"/>
      <polygon points="34,16 24,34 32,34 28,48 40,30 32,30" fill="#fef08a"/>
    </svg>`,
  },
  energy_4: {
    id: 'energy_4',
    name: '무한의 마나 성배',
    category: 'energy',
    level: 4,
    maxLevel: 4,
    value: 100,
    color: '#22d3ee',
    description: '에너지 체인 최고 등급! 사용 시 +100 에너지를 단숨에 회복합니다!',
    svgIcon: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 14 H46 L40 34 C38 40 26 40 24 34 Z" fill="#06b6d4" stroke="#fef08a" stroke-width="2.5"/>
      <path d="M32 38 V50 M22 50 H42" stroke="#fbbf24" stroke-width="4" stroke-linecap="round"/>
      <circle cx="32" cy="24" r="5" fill="#ffffff"/>
    </svg>`,
  },

  chest_supply_1: {
    id: 'chest_supply_1',
    name: '공방 보급 상자',
    category: 'chest',
    level: 1,
    maxLevel: 2,
    nextItemId: 'chest_supply_2',
    charges: 4,
    value: 50,
    color: '#f59e0b',
    description: '클릭하면 생성기 업그레이드 부품(모루/약초바구니/마력석)과 골드·에너지를 배출합니다! (4회 사용 가능, 상자끼리 합치면 고급 상자로 진화)',
    spawnPool: [
      { itemId: 'gen_forge_1', weight: 28 },
      { itemId: 'gen_alchemy_1', weight: 28 },
      { itemId: 'gen_arcane_1', weight: 14 },
      { itemId: 'gold_2', weight: 15 },
      { itemId: 'energy_2', weight: 15 },
    ],
    svgIcon: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <rect x="14" y="22" width="36" height="28" rx="4" fill="#b45309" stroke="#fde047" stroke-width="2.2"/>
      <path d="M14 32 H50" stroke="#fef08a" stroke-width="3"/>
      <rect x="28" y="28" width="8" height="8" rx="2" fill="#facc15"/>
    </svg>`,
  },
  chest_supply_2: {
    id: 'chest_supply_2',
    name: '고급 공방 보급 상자',
    category: 'chest',
    level: 2,
    maxLevel: 2,
    charges: 7,
    value: 120,
    color: '#a855f7',
    description: '화려한 마법 장식이 더해진 고급 보급 상자입니다! 생성기 부품과 고등급 마나·금화를 총 7회 배출합니다.',
    spawnPool: [
      { itemId: 'gen_forge_1', weight: 25 },
      { itemId: 'gen_alchemy_1', weight: 25 },
      { itemId: 'gen_arcane_1', weight: 20 },
      { itemId: 'gold_3', weight: 15 },
      { itemId: 'energy_3', weight: 15 },
    ],
    svgIcon: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="34" r="24" fill="#a855f7" opacity="0.25"/>
      <rect x="12" y="20" width="40" height="30" rx="5" fill="#6b21a8" stroke="#fde047" stroke-width="2.5"/>
      <path d="M12 32 H52" stroke="#facc15" stroke-width="4"/>
      <polygon points="32,25 37,32 32,39 27,32" fill="#38bdf8" stroke="#ffffff" stroke-width="1.5"/>
    </svg>`,
  },
};

export const ITEM_LIST: ItemDef[] = Object.values(ITEMS);

export const CROSS_CRAFT_RECIPES: CrossCraftRecipe[] = [
  {
    id: 'recipe_flameblade',
    ingredientA: 'weapon_4',
    ingredientB: 'potion_5',
    resultItemId: 'hybrid_flameblade',
    name: '🔥 홍련의 마검 연성',
    hint: '기사의 장검(무기 Lv.4) + 화염의 영약(포션 Lv.5)을 보드에서 겹치면 탄생합니다.',
  },
  {
    id: 'recipe_runeblade',
    ingredientA: 'weapon_5',
    ingredientB: 'arcane_2',
    resultItemId: 'hybrid_runeblade',
    name: '⚡ 뇌전의 룬검 연성',
    hint: '미스릴 대검(무기 Lv.5) + 각인된 룬석(비전 Lv.2)을 보드에서 겹치면 탄생합니다.',
  },
  {
    id: 'recipe_tome_of_life',
    ingredientA: 'arcane_4',
    ingredientB: 'potion_6',
    resultItemId: 'hybrid_tome_of_life',
    name: '📜 생명의 금서 연성',
    hint: '고대 마도서(비전 Lv.4) + 불사조의 비약(포션 Lv.6)을 보드에서 겹치면 탄생합니다.',
  },
  {
    id: 'recipe_aether_core',
    ingredientA: 'arcane_5',
    ingredientB: 'potion_7',
    resultItemId: 'hybrid_aether_core',
    name: '👑 에테르 코어 연성',
    hint: '정령의 보주(비전 Lv.5) + 현자의 돌(포션 Lv.7)을 보드에서 겹치면 전설의 코어가 탄생합니다.',
  },
];

export function getItemDef(id: string): ItemDef | undefined {
  return ITEMS[id];
}

export function findCrossCraftRecipe(
  itemA: string,
  itemB: string
): CrossCraftRecipe | undefined {
  return CROSS_CRAFT_RECIPES.find(
    (r) =>
      (r.ingredientA === itemA && r.ingredientB === itemB) ||
      (r.ingredientA === itemB && r.ingredientB === itemA)
  );
}
