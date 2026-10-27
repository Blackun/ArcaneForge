/* Arcane Forge: Merge & Restore - Auto-generated Browser Bundle */
(function () {
  "use strict";

  // --- Module: data/items.js ---
const ITEMS                          = {
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
const ITEM_LIST            = Object.values(ITEMS);
const CROSS_CRAFT_RECIPES                     = [
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
function getItemDef(id        )                      {
  return ITEMS[id];
}
function findCrossCraftRecipe(
  itemA        ,
  itemB        
)                               {
  return CROSS_CRAFT_RECIPES.find(
    (r) =>
      (r.ingredientA === itemA && r.ingredientB === itemB) ||
      (r.ingredientA === itemB && r.ingredientB === itemA)
  );
}


  // --- Module: data/quests.js ---
const WORKSHOP_ZONES                    = [
  {
    id: 'zone_forge',
    name: '화염의 대장간',
    subtitle: '제1구역 · 드워프 용광로와 모루',
    description: '잿더미 속에 파묻힌 고대 드워프 화덕에 다시 불을 지피고, 강철과 마검을 벼려내는 대장간을 복구합니다.',
    maxSteps: 3,
    icon: '🔥',
  },
  {
    id: 'zone_alchemy',
    name: '비취빛 연금실',
    subtitle: '제2구역 · 약초 온실과 증류 실험대',
    description: '깨진 플라스크를 정리하고 신비한 약초와 영약을 정제하는 연금술 연구실을 재건합니다.',
    maxSteps: 3,
    icon: '⚗️',
  },
  {
    id: 'zone_altar',
    name: '고대 룬 제단',
    subtitle: '제3구역 · 비전 공명석과 마력 회로',
    description: '공방 지하의 마력 지맥과 연결된 룬 제단을 정화하여 뇌전과 비전의 힘을 제어합니다.',
    maxSteps: 3,
    icon: '🔮',
  },
  {
    id: 'zone_library',
    name: '별빛 마도서고',
    subtitle: '제4구역 · 금지된 서가와 천구의',
    description: '불타버린 고대 마법 문서들을 복원하고 스스로 숨 쉬는 금서들을 서가에 안치합니다.',
    maxSteps: 3,
    icon: '📜',
  },
  {
    id: 'zone_sanctum',
    name: '천공의 아케인 성소',
    subtitle: '제5구역 · 에테르 코어와 천공 첨탑',
    description: '대장간·연금술·비전 마법의 정수를 하나로 모아 공방 최상층의 아케인 성소를 완전 각성시킵니다.',
    maxSteps: 3,
    icon: '👑',
  },
];
const QUESTS             = [
  // ============================================================================
  // 제1구역: 화염의 대장간 (zone_forge, Step 1~3)
  // ============================================================================
  {
    id: 'quest_forge_1',
    zoneId: 'zone_forge',
    stepIndex: 1,
    title: '꺼져버린 불씨 되살리기',
    description: '무너진 화덕의 철제 격자를 보수하기 위해 강철 주괴와 정제된 수액을 준비하세요.',
    requiredItems: [
      { itemId: 'weapon_2', count: 1 },
      { itemId: 'potion_2', count: 1 },
    ],
    rewardGold: 45,
    rewardEnergy: 15,
    rewardItemIds: ['chest_supply_1'],
    dialogue: [
      {
        speaker: '토르그 (드워프 대장장이)',
        role: 'blacksmith',
        text: '쿨럭쿨럭! 세상에, 전설적인 아케인 공방이 이렇게 먼지 구덩이가 되어 있을 줄이야. 내 수염이 다 회색이 됐잖나!',
      },
      {
        speaker: '리아 (견습 연금술사)',
        role: 'alchemist',
        text: '토르그 어르신, 수염은 원래 회색이셨잖아요! 우선 저 금간 철모루와 약초 바구니에서 기초 재료를 꺼내 화덕부터 고쳐봐요.',
      },
      {
        speaker: '토르그 (드워프 대장장이)',
        role: 'blacksmith',
        text: '하하, 이 녀석 말은 잘하는군! 똑같은 철광석 두 개를 합치면 단단한 강철 주괴가 된다네. 어서 손풀기 삼아 만들어 보자고!',
      },
    ],
  },
  {
    id: 'quest_forge_2',
    zoneId: 'zone_forge',
    stepIndex: 2,
    title: '풀무와 모루 받침대 보강',
    description: '화덕의 열기를 견딜 수 있도록 수련용 단검과 하급 회복약을 납품하여 대장간 설비를 정비하세요.',
    requiredItems: [
      { itemId: 'weapon_3', count: 1 },
      { itemId: 'potion_3', count: 1 },
    ],
    rewardGold: 75,
    rewardEnergy: 20,
    rewardItemIds: ['chest_supply_1'],
    dialogue: [
      {
        speaker: '토르그 (드워프 대장장이)',
        role: 'blacksmith',
        text: '오오! 화덕에 다시 불길이 도니 살 것 같구먼! 하지만 진짜 명품을 벼리려면 담금질 수조와 모루 받침대를 더 보강해야 해.',
      },
      {
        speaker: '리아 (견습 연금술사)',
        role: 'alchemist',
        text: '열기가 꽤 뜨거워요! 화상을 입지 않도록 제가 붉은 하급 회복약도 함께 준비해 둘게요.',
      },
    ],
  },
  {
    id: 'quest_forge_3',
    zoneId: 'zone_forge',
    stepIndex: 3,
    title: '홍련의 불꽃으로 깨어나는 화덕',
    description: '기사의 장검(Lv.4)에 화염의 영약(Lv.5)을 교차 합성하여 [홍련의 마검]을 연성하고 화덕 중앙에 꽂으세요!',
    requiredItems: [
      { itemId: 'hybrid_flameblade', count: 1 },
    ],
    rewardGold: 160,
    rewardEnergy: 35,
    rewardItemIds: ['chest_supply_1', 'gen_forge_1'],
    dialogue: [
      {
        speaker: '토르그 (드워프 대장장이)',
        role: 'blacksmith',
        text: '드디어 화염의 대장간 마지막 단계다! 고대 드워프 화덕의 심장을 깨우려면 평범한 무기로는 어림도 없지.',
      },
      {
        speaker: '리아 (견습 연금술사)',
        role: 'alchemist',
        text: '공방 일지에 적혀 있어요! [기사의 장검] 위에 제 연금술로 빚은 [화염의 영약]을 직접 드래그해서 합치면... 전설의 [홍련의 마검]이 탄생한대요!',
      },
      {
        speaker: '토르그 (드워프 대장장이)',
        role: 'blacksmith',
        text: '검과 포션의 이종 교차 합성이라니, 가슴이 뛰는군! 홍련의 마검을 완성해 대장간을 완전히 부활시키자고!',
      },
    ],
  },

  // ============================================================================
  // 제2구역: 비취빛 연금실 (zone_alchemy, Step 1~3)
  // ============================================================================
  {
    id: 'quest_alchemy_1',
    zoneId: 'zone_alchemy',
    stepIndex: 1,
    title: '깨진 증류관과 약초 선반 정리',
    description: '연금실의 기초 배관을 수리하고 시약통을 채우기 위해 하급 회복약과 수련용 단검을 준비하세요.',
    requiredItems: [
      { itemId: 'potion_3', count: 1 },
      { itemId: 'weapon_3', count: 1 },
    ],
    rewardGold: 65,
    rewardEnergy: 20,
    rewardItemIds: ['chest_supply_1'],
    dialogue: [
      {
        speaker: '리아 (견습 연금술사)',
        role: 'alchemist',
        text: '대장간이 따뜻해지니까 바로 옆 온실의 약초들도 기운을 차렸어요! 이제 제 공간인 비취빛 연금실을 복구할 차례예요.',
      },
      {
        speaker: '토르그 (드워프 대장장이)',
        role: 'blacksmith',
        text: '엉킨 덩굴을 베어낼 예리한 단검 하나랑, 시약 기준점이 될 회복약을 준비하면 금방 깨끗해지겠어.',
      },
    ],
  },
  {
    id: 'quest_alchemy_2',
    zoneId: 'zone_alchemy',
    stepIndex: 2,
    title: '마력 응축 플라스크 가동 (비전 해금)',
    description: '고순도 마나 포션과 기사의 장검을 바쳐 연금실의 마력 응축기를 가동하고 [불안정한 마력석]을 해금하세요!',
    requiredItems: [
      { itemId: 'potion_4', count: 1 },
      { itemId: 'weapon_4', count: 1 },
    ],
    rewardGold: 110,
    rewardEnergy: 30,
    rewardItemIds: ['gen_arcane_1', 'chest_supply_1'],
    dialogue: [
      {
        speaker: '리아 (견습 연금술사)',
        role: 'alchemist',
        text: '어르신, 저기 연금실 안쪽 벽면이 푸른빛으로 공명하고 있어요! 마나 포션의 파동이 봉인된 비전 성소 생성기를 깨우고 있나 봐요!',
      },
      {
        speaker: '토르그 (드워프 대장장이)',
        role: 'blacksmith',
        text: '허허, 기사의 장검으로 봉인 자물쇠를 내려치고 마나 포션을 부으니 보랏빛 [불안정한 마력석]이 모습을 드러냈군! 이제 비전 마법 재료도 다룰 수 있겠어!',
      },
    ],
  },
  {
    id: 'quest_alchemy_3',
    zoneId: 'zone_alchemy',
    stepIndex: 3,
    title: '불멸의 향기가 흐르는 연금실',
    description: '화염의 영약과 마법 스크롤을 완성하여 비취빛 연금실의 모든 증류 가마를 완벽히 복원하세요.',
    requiredItems: [
      { itemId: 'potion_5', count: 1 },
      { itemId: 'arcane_3', count: 1 },
    ],
    rewardGold: 150,
    rewardEnergy: 30,
    rewardItemIds: ['chest_supply_1', 'gen_alchemy_1'],
    dialogue: [
      {
        speaker: '리아 (견습 연금술사)',
        role: 'alchemist',
        text: '새로 얻은 마력석에서 나온 마력 가루와 룬석을 합치니 신비로운 마법 스크롤이 되었어요!',
      },
      {
        speaker: '토르그 (드워프 대장장이)',
        role: 'blacksmith',
        text: '화염의 영약과 마법 스크롤로 자동 온도 조절 술식을 걸어두니 연금실이 왕실 연구소 부럽지 않구먼!',
      },
    ],
  },

  // ============================================================================
  // 제3구역: 고대 룬 제단 (zone_altar, Step 1~3)
  // ============================================================================
  {
    id: 'quest_altar_1',
    zoneId: 'zone_altar',
    stepIndex: 1,
    title: '제단 기둥의 룬 각인 복원',
    description: '마법 스크롤과 기사의 장검으로 고대 룬 제단의 무너진 결계 기둥을 바로 세우세요.',
    requiredItems: [
      { itemId: 'arcane_3', count: 1 },
      { itemId: 'weapon_4', count: 1 },
    ],
    rewardGold: 120,
    rewardEnergy: 25,
    rewardItemIds: ['chest_supply_1'],
    dialogue: [
      {
        speaker: '리아 (견습 연금술사)',
        role: 'alchemist',
        text: '제3구역인 고대 룬 제단이에요. 바닥에 새겨진 마법진이 끊어져서 마력이 이리저리 튀고 있어요.',
      },
      {
        speaker: '토르그 (드워프 대장장이)',
        role: 'blacksmith',
        text: '전도체 역할을 할 기사의 장검을 네 귀퉁이에 박고 마법 스크롤로 회로를 이어주면 안정될 거다!',
      },
    ],
  },
  {
    id: 'quest_altar_2',
    zoneId: 'zone_altar',
    stepIndex: 2,
    title: '폭주하는 지맥 진정시키기',
    description: '고대 마도서와 마나 포션을 사용해 제단 아래에서 솟구치는 에테르 지맥을 안정화하세요.',
    requiredItems: [
      { itemId: 'arcane_4', count: 1 },
      { itemId: 'potion_4', count: 1 },
    ],
    rewardGold: 165,
    rewardEnergy: 30,
    rewardItemIds: ['chest_supply_1', 'gen_arcane_1'],
    dialogue: [
      {
        speaker: '리아 (견습 연금술사)',
        role: 'alchemist',
        text: '마법 스크롤 두 개를 합쳐서 [고대 마도서]를 복원했어요! 여기에 지맥을 진정시키는 고대 주문이 적혀 있어요.',
      },
      {
        speaker: '토르그 (드워프 대장장이)',
        role: 'blacksmith',
        text: '좋아, 제단이 푸른 빛을 되찾고 있어! 이제 제단 중앙에 꽂을 진정한 뇌전의 매개체만 있으면 된다네.',
      },
    ],
  },
  {
    id: 'quest_altar_3',
    zoneId: 'zone_altar',
    stepIndex: 3,
    title: '번개를 부르는 뇌전의 룬검',
    description: '미스릴 대검(Lv.5)과 각인된 룬석(Lv.2)을 교차 합성하여 [뇌전의 룬검]을 완성하고 룬 제단을 각성시키세요!',
    requiredItems: [
      { itemId: 'hybrid_runeblade', count: 1 },
    ],
    rewardGold: 240,
    rewardEnergy: 45,
    rewardItemIds: ['chest_supply_2'],
    dialogue: [
      {
        speaker: '토르그 (드워프 대장장이)',
        role: 'blacksmith',
        text: '내가 벼려낸 은빛 [미스릴 대검]의 홈을 보라고! 저기에 비전 성소에서 나온 [각인된 룬석]을 딱 끼워 넣으면...',
      },
      {
        speaker: '리아 (견습 연금술사)',
        role: 'alchemist',
        text: '와아! 미스릴 검신 전체에 푸른 번개가 흐르는 [뇌전의 룬검]이 탄생했어요! 제단 중앙에 꽂으니 온 공방에 활력이 넘쳐요!',
      },
    ],
  },

  // ============================================================================
  // 제4구역: 별빛 마도서고 (zone_library, Step 1~3)
  // ============================================================================
  {
    id: 'quest_library_1',
    zoneId: 'zone_library',
    stepIndex: 1,
    title: '천구의 태엽과 황금 서가 수리',
    description: '미스릴 대검과 고대 마도서를 납품하여 별빛 마도서고의 무너진 서가와 천구의를 수리하세요.',
    requiredItems: [
      { itemId: 'weapon_5', count: 1 },
      { itemId: 'arcane_4', count: 1 },
    ],
    rewardGold: 190,
    rewardEnergy: 35,
    rewardItemIds: ['chest_supply_1'],
    dialogue: [
      {
        speaker: '리아 (견습 연금술사)',
        role: 'alchemist',
        text: '여긴 대마법사님들이 지식을 보관하던 별빛 마도서고예요. 천장의 천구의가 멈춰서 별빛이 들어오지 않고 있어요.',
      },
      {
        speaker: '토르그 (드워프 대장장이)',
        role: 'blacksmith',
        text: '미스릴 합금으로 천구의 중심축을 다시 깎아 끼우면 삐걱거림 없이 스무스하게 돌아갈 거다!',
      },
    ],
  },
  {
    id: 'quest_library_2',
    zoneId: 'zone_library',
    stepIndex: 2,
    title: '정령의 등불 밝히기',
    description: '정령의 보주와 화염의 영약으로 서고 곳곳의 마법 샹들리에를 밝히세요.',
    requiredItems: [
      { itemId: 'arcane_5', count: 1 },
      { itemId: 'potion_5', count: 1 },
    ],
    rewardGold: 230,
    rewardEnergy: 40,
    rewardItemIds: ['chest_supply_1', 'gen_alchemy_1'],
    dialogue: [
      {
        speaker: '리아 (견습 연금술사)',
        role: 'alchemist',
        text: '고대 마도서 두 권이 공명하더니 영롱한 [정령의 보주]가 나타났어요! 서고 천장에 띄워두니 은하수처럼 아름다워요.',
      },
      {
        speaker: '토르그 (드워프 대장장이)',
        role: 'blacksmith',
        text: '하지만 서고 가장 깊은 곳의 핵심 금서가 아직 재로 남아 있군. 저걸 되살릴 비책이 있나, 리아?',
      },
    ],
  },
  {
    id: 'quest_library_3',
    zoneId: 'zone_library',
    stepIndex: 3,
    title: '살아 숨 쉬는 생명의 금서',
    description: '고대 마도서(Lv.4)에 불사조의 비약(Lv.6)을 교차 합성하여 [생명의 금서]를 복원하고 마도서고를 완성하세요!',
    requiredItems: [
      { itemId: 'hybrid_tome_of_life', count: 1 },
    ],
    rewardGold: 340,
    rewardEnergy: 55,
    rewardItemIds: ['chest_supply_2'],
    dialogue: [
      {
        speaker: '리아 (견습 연금술사)',
        role: 'alchemist',
        text: '불사조의 깃털로 달여낸 [불사조의 비약]을 [고대 마도서] 위에 조심스럽게 적셔주면... 책장 스스로 생명을 얻어 복원될 거예요!',
      },
      {
        speaker: '토르그 (드워프 대장장이)',
        role: 'blacksmith',
        text: '오오, 세상에! 책 표지에서 황금빛 새싹과 룬 문자가 피어나고 있어! [생명의 금서]가 깨어나니 서고 전체가 지혜의 빛으로 가득 차는구먼!',
      },
    ],
  },

  // ============================================================================
  // 제5구역: 천공의 아케인 성소 (zone_sanctum, Step 1~3)
  // ============================================================================
  {
    id: 'quest_sanctum_1',
    zoneId: 'zone_sanctum',
    stepIndex: 1,
    title: '천공의 부유석 기둥 재건',
    description: '용비늘 클레이모어와 차원의 왕관을 봉헌하여 아케인 성소의 부유석 기둥을 하늘로 띄우세요.',
    requiredItems: [
      { itemId: 'weapon_6', count: 1 },
      { itemId: 'arcane_6', count: 1 },
    ],
    rewardGold: 360,
    rewardEnergy: 50,
    rewardItemIds: ['chest_supply_2'],
    dialogue: [
      {
        speaker: '토르그 (드워프 대장장이)',
        role: 'blacksmith',
        text: '드디어 마지막 구역, 천공의 아케인 성소다! 공방 꼭대기의 부유석을 띄우려면 용비늘 클레이모어의 압도적인 화력과 차원의 왕관이 필요해!',
      },
      {
        speaker: '리아 (견습 연금술사)',
        role: 'alchemist',
        text: '성소의 기둥들이 구름 위로 떠오르고 있어요! 이제 조금만 더 힘을 내면 아케인 포지의 전성기가 되살아나요!',
      },
    ],
  },
  {
    id: 'quest_sanctum_2',
    zoneId: 'zone_sanctum',
    stepIndex: 2,
    title: '삼위일체의 신화 유물 봉헌',
    description: '천공의 성검(Lv.7)과 대마법사의 지팡이(Lv.7)를 완성하여 성소 좌우의 수호자 석상에 장착하세요!',
    requiredItems: [
      { itemId: 'weapon_7', count: 1 },
      { itemId: 'arcane_7', count: 1 },
    ],
    rewardGold: 520,
    rewardEnergy: 70,
    rewardItemIds: ['chest_supply_2'],
    dialogue: [
      {
        speaker: '토르그 (드워프 대장장이)',
        role: 'blacksmith',
        text: '내 평생의 걸작인 [천공의 성검]을 완성했다! 태양조차 부끄러워할 광채로군!',
      },
      {
        speaker: '리아 (견습 연금술사)',
        role: 'alchemist',
        text: '비전 체인의 정점인 [대마법사의 지팡이]도 완성되었어요! 이제 마지막으로 성소 중앙의 영구 기관만 깨우면 돼요!',
      },
    ],
  },
  {
    id: 'quest_sanctum_3',
    zoneId: 'zone_sanctum',
    stepIndex: 3,
    title: '창조의 심장, 에테르 코어 각성',
    description: '정령의 보주(Lv.5)와 현자의 돌(Lv.7)을 교차 합성하여 궁극의 아티팩트 [에테르 코어]를 연성하고 공방을 완전 복구하세요!',
    requiredItems: [
      { itemId: 'hybrid_aether_core', count: 1 },
    ],
    rewardGold: 1000,
    rewardEnergy: 100,
    rewardItemIds: ['chest_supply_2', 'gold_4'],
    dialogue: [
      {
        speaker: '리아 (견습 연금술사)',
        role: 'alchemist',
        text: '연금술의 궁극적 결정체인 [현자의 돌]과 비전 마력의 핵인 [정령의 보주]를 하나로 융합했어요... 보아하니 이것이 바로 전설의 [에테르 코어]예요!',
      },
      {
        speaker: '토르그 (드워프 대장장이)',
        role: 'blacksmith',
        text: '브라보!! 에테르 코어가 성소 중앙에 자리 잡자 공방의 5대 구역 모두가 황금빛 마력으로 공명하고 있어! 자네와 리아 덕분에 전설의 아케인 포지가 완벽히 부활했다네!',
      },
    ],
  },
];


  // --- Module: data/story.js ---
const STORY_IMAGES                                                                      = {
  prologue: './assets/story/prologue_ruins.png',
  chapter12: './assets/story/chapter12_workshop.png',
  chapter3: './assets/story/chapter3_altar.png',
  chapter45: './assets/story/chapter45_sanctum.png',
};
const CHARACTER_PORTRAITS         
                                                           
        
  = {
  lia: './assets/story/char_lia.png',
  alchemist: './assets/story/char_lia.png',
  torg: './assets/story/char_torg.png',
  blacksmith: './assets/story/char_torg.png',
  narrator: './assets/story/prologue_ruins.png',
};
function getCharacterPortrait(role        )         {
  if (role === 'torg' || role === 'blacksmith') {
    return CHARACTER_PORTRAITS.torg;
  }
  if (role === 'lia' || role === 'alchemist') {
    return CHARACTER_PORTRAITS.lia;
  }
  return CHARACTER_PORTRAITS.narrator;
}
const STORY_CHAPTERS                 = [
  {
    id: 'prologue',
    chapterNumber: 'PROLOGUE',
    title: '검은 일식과 식어버린 모루',
    subtitle: '10년 만에 돌아온 천공의 마법 공방 아케인 포지',
    imageKey: 'prologue',
    unlockRequirementText: '게임 시작 시 자동 해금',
    summary:
      '10년 전 대재앙 「검은 일식」으로 하루아침에 잿더미가 된 왕국 최고의 마법 대장간 아케인 포지. 사라진 대현자 엘드리치의 마지막 제자 리아는 스승의 반쪽짜리 비전 노트를 품고 폐허로 돌아온다.',
    lines: [
      {
        speaker: '내레이션',
        role: 'narrator',
        imageKey: 'prologue',
        text: '10년 전, 하늘을 가린 「검은 일식」의 밤. 왕국을 수호하던 천공의 마법 공방 〈아케인 포지〉는 금지된 에테르 폭주와 함께 무너져 내렸고, 대현자 엘드리치는 흔적도 없이 자취를 감추었다.',
      },
      {
        speaker: '견습 연금술사 리아',
        role: 'lia',
        emotion: '가쁜 숨을 몰아쉬며',
        imageKey: 'prologue',
        text: '하아... 드디어 도착했어. 여기가 스승님이 평생을 바치셨던 아케인 포지... 지붕은 무너지고 별빛 마력만 차가운 먼지처럼 떠다니고 있잖아.',
      },
      {
        speaker: '드워프 대장장이 토르그',
        role: 'torg',
        emotion: '어둠 속에서 망치를 짚고 일어서며',
        imageKey: 'prologue',
        text: '...누구냐. 이 잿더미에 발을 들이는 겁 없는 애송이가. 어라? 네 목에 걸린 그 비취빛 플라스크와 황동 고글은... 설마 엘드리치 영감의 꼬마 제자 리아냐?!',
      },
      {
        speaker: '견습 연금술사 리아',
        role: 'lia',
        emotion: '반가움에 눈시울이 붉어지며',
        imageKey: 'prologue',
        text: '토르그 아저씨! 살아계셨군요! 10년 동안 혼자서 이 차갑게 식어버린 화로와 폐허를 지키고 계셨던 거예요?',
      },
      {
        speaker: '드워프 대장장이 토르그',
        role: 'torg',
        emotion: '투박한 손으로 수염을 쓸어내리며',
        imageKey: 'prologue',
        text: '흥, 내 룬 망치가 녹슬까 봐 심심해서 남아있었을 뿐이다! 그보다 네 손에 들린 그 낡은 양피지는 뭐냐? 스승 놈이 남긴 유품이라도 찾은 게냐?',
      },
      {
        speaker: '견습 연금술사 리아',
        role: 'lia',
        emotion: '결의에 찬 눈빛으로',
        imageKey: 'prologue',
        text: '스승님의 마지막 연구 일지예요! 스승님은 돌아가시지 않았어요. 공방 최심부 「에테르 천공 성소」 너머 차원의 틈에 스스로를 봉인하신 거예요!',
      },
      {
        speaker: '내레이션',
        role: 'narrator',
        imageKey: 'prologue',
        text: '리아가 펼친 비전 노트의 페이지 위로 희미한 청록색 룬 문자가 떠올랐다. 끊어진 5대 마법 지맥을 잇고 공방의 심장을 재가동하라는 대현자의 설계도였다.',
      },
      {
        speaker: '드워프 대장장이 토르그',
        role: 'torg',
        emotion: '외눈 안대 너머로 불꽃이 번뜩이며',
        imageKey: 'prologue',
        text: '하하하! 가슴이 다시 뛰는구먼! 좋아, 내 강철 대장간 기술과 네 녀석의 연금술을 합치는 「이종 교차 연성」으로 이 공방을 다시 하늘로 띄워보자고!',
      },
    ],
    choice: {
      prompt: '폐허가 된 아케인 포지의 첫 복구 작업을 앞두고, 당신은 어떤 다짐을 건네시겠습니까?',
      optionA: {
        label: '🔥 "토르그 아저씨, 먼저 대장간의 뜨거운 불꽃부터 되살려요!"',
        reply: '토르그: "크하하! 역시 내 마음에 쏙 드는 대답이다! 모루를 두드려 강철 주괴부터 뽑아내자고!"',
        rewardText: '강철의 의지 발동 · 대장간 사기 충만',
      },
      optionB: {
        label: '🧪 "스승님의 비전 노트를 분석해 마나 지맥부터 안정시켜요!"',
        reply: '리아: "좋아요! 약초 바구니에서 이슬과 수액을 모아 정밀하게 마력 회로를 복원해 볼게요!"',
        rewardText: '연금술사의 통찰 발동 · 마나 공명 상승',
      },
    },
  },
  {
    id: 'chapter_1',
    chapterNumber: 'CHAPTER I',
    title: '잠든 불꽃의 대장간을 깨우다',
    subtitle: '차가운 강철에 다시 숨결을 불어넣는 첫걸음',
    zoneId: 'zone_forge',
    imageKey: 'chapter12',
    unlockRequirementText: '게임 시작 시 열람 가능 · 잠든 불꽃의 대장간 복구 스토리',
    summary:
      '오랜 세월 얼어붙어 있던 드워프 화로에 정제된 수액과 강철 주괴를 투입해 불씨를 되살리는 이야기. 토르그의 망치 소리가 다시 공방에 울려 퍼진다.',
    lines: [
      {
        speaker: '내레이션',
        role: 'narrator',
        imageKey: 'chapter12',
        text: '거미줄과 녹슨 철광석으로 뒤덮였던 제1구역 〈잠든 불꽃의 대장간〉. 리아와 토르그는 가장 먼저 공방의 심장인 드워프 화로에 불을 지피기로 한다.',
      },
      {
        speaker: '드워프 대장장이 토르그',
        role: 'torg',
        emotion: '화로 속 묵은 재를 거칠게 털어내며',
        imageKey: 'chapter12',
        text: '잘 들어라, 리아. 일반 장작으로는 이 고대 화로를 절대 못 깨운다. 모루에서 벼려낸 「강철 주괴」로 내벽을 보강하고, 네 약초 바구니에서 추출한 「정제된 수액」을 부어야 해!',
      },
      {
        speaker: '견습 연금술사 리아',
        role: 'lia',
        emotion: '플라스크를 흔들며 미소 짓고',
        imageKey: 'chapter12',
        text: '맡겨만 주세요! 같은 재료 두 개를 합치면 불순물이 사라지고 점점 더 순도 높은 금속과 영약이 연성되니까요. 자, 수액을 화로 중심부에 붓겠습니다!',
      },
      {
        speaker: '내레이션',
        role: 'narrator',
        imageKey: 'chapter12',
        text: '치이이익―! 비취빛 수액이 차가운 화로 바닥의 고대 화염 룬에 닿는 순간, 황금빛 스파크가 튀며 10년간 잠들어 있던 마법 불길이 맹렬하게 타올랐다!',
      },
      {
        speaker: '드워프 대장장이 토르그',
        role: 'torg',
        emotion: '달궈진 모루를 망치로 힘차게 내려치며',
        imageKey: 'chapter12',
        text: '오오! 이 열기야말로 진짜 아케인 포지의 숨결이지! 쇳물이 노래하고 있잖아! 이제 무뎌진 단검부터 기사의 장검, 미스릴 대검까지 마음껏 벼려낼 수 있겠어!',
      },
      {
        speaker: '견습 연금술사 리아',
        role: 'lia',
        emotion: '이마의 땀을 닦으며 환호하고',
        imageKey: 'chapter12',
        text: '대장간 화로가 깨어나니까 바닥의 지맥 도관을 따라 따뜻한 마력이 흐르기 시작했어요! 옆 구역인 연금술 온실의 얼음도 녹아내리고 있어요!',
      },
      {
        speaker: '드워프 대장장이 토르그',
        role: 'torg',
        emotion: '호탕하게 웃으며 엄지를 치켜세우고',
        imageKey: 'chapter12',
        text: '첫 단추를 아주 멋지게 끼웠군! 하지만 자만하진 마라, 앞으로 복구해야 할 공방 시설과 무기고가 산더미처럼 남아있으니까 말이다!',
      },
    ],
    choice: {
      prompt: '다시 타오른 드워프 화로의 첫 불꽃으로 어떤 작업을 먼저 기념하시겠습니까?',
      optionA: {
        label: '⚒️ "전설적인 기사의 장검을 벼려 무기고를 채운다"',
        reply: '토르그: "하하! 대장장이의 피가 끓어오르는군! 강철이 달궈졌을 때 단숨에 명검을 뽑아내 보자고!"',
        rewardText: '드워프 장인의 축복 · 무기 단조 숙련도 증가',
      },
      optionB: {
        label: '🔥 "화로의 열기를 온실 파이프로 연결해 약초들을 깨운다"',
        reply: '리아: "현명해요! 이 따뜻한 지열이라면 얼어붙은 신비의 마나초들도 금방 새싹을 틔울 거예요!"',
        rewardText: '생명력의 온기 · 온실 마나 순환 가속',
      },
    },
  },
  {
    id: 'chapter_2',
    chapterNumber: 'CHAPTER II',
    title: '비취빛 연금술 온실의 비밀',
    subtitle: '시들지 않는 생명의 마나초와 맑은 마나 정수',
    zoneId: 'zone_alchemy',
    imageKey: 'chapter12',
    unlockRequirementText: '비취빛 연금술 온실 복구 진행 중',
    summary:
      '깨진 유리 천장 사이로 스며든 별빛 아래, 시들어버린 신비한 약초들을 마나 물약으로 소생시키고 고대 연금술 증류기를 재가동하는 리아의 이야기.',
    lines: [
      {
        speaker: '내레이션',
        role: 'narrator',
        imageKey: 'chapter12',
        text: '대장간의 훈훈한 열기가 지맥을 타고 전해지자, 서리로 뒤덮여 있던 제2구역 〈비취빛 연금술 온실〉의 거대한 덩굴들이 조금씩 꿈틀거리기 시작했다.',
      },
      {
        speaker: '견습 연금술사 리아',
        role: 'lia',
        emotion: '추억에 잠긴 따뜻한 눈빛으로',
        imageKey: 'chapter12',
        text: '어릴 때 스승님 몰래 이 온실에서 야광 포자 버섯을 따다가 플라스크를 통째로 터뜨린 적이 있어요. 그때 스승님은 혼내지 않고 오히려 새로운 화염 영약 레시피를 찾아내셨죠.',
      },
      {
        speaker: '드워프 대장장이 토르그',
        role: 'torg',
        emotion: '껄껄 웃으며 손사래를 치고',
        imageKey: 'chapter12',
        text: '기억나고말고! 그날 온실 유리 지붕이 반쪽이나 날아가서, 내가 사흘 밤낮으로 미스릴 프레임을 다시 짜 맞추느라 허리가 끊어지는 줄 알았지!',
      },
      {
        speaker: '견습 연금술사 리아',
        role: 'lia',
        emotion: '정성스럽게 황금 증류기를 조립하며',
        imageKey: 'chapter12',
        text: '헤헤, 그땐 정말 죄송했어요! 하지만 이제는 실수하지 않아요. 「치유의 물약」과 「맑은 마나 정수」를 정밀하게 배합해서 시든 세계수 묘목에 생명을 불어넣을게요.',
      },
      {
        speaker: '내레이션',
        role: 'narrator',
        imageKey: 'chapter12',
        text: '복원된 황금 증류기에서 영롱한 에메랄드빛 안개가 뿜어져 나오자, 온실 가득 은은한 별빛 꽃봉오리가 피어나며 신비로운 향기가 공방 전체를 감쌌다.',
      },
      {
        speaker: '드워프 대장장이 토르그',
        role: 'torg',
        emotion: '온실 구석에서 빛나는 광석을 발견하며',
        imageKey: 'chapter12',
        text: '오호라! 묘목 뿌리 밑에 묻혀 있던 「마력 깃든 고철」과 「룬 원석」들이 마나 안개를 머금고 깨어나고 있어! 이제 3번째 생성기인 비전 보석함도 만들 수 있겠구나!',
      },
      {
        speaker: '견습 연금술사 리아',
        role: 'lia',
        emotion: '두 손을 모으고 반짝이는 눈으로',
        imageKey: 'chapter12',
        text: '봐요, 토르그 아저씨! 온실 한가운데에서 전설 속의 「화염의 영약」과 「불사조의 비약」을 연성할 수 있는 고대 연금진이 완전히 복원되었어요!',
      },
    ],
    choice: {
      prompt: '만개한 비취빛 연금술 온실에서 피어난 신비한 마나 허브를 어떻게 활용하시겠습니까?',
      optionA: {
        label: '🌿 "고농축 화염의 영약으로 정제해 무기에 마력을 부여한다"',
        reply: '리아: "좋은 생각이에요! 순도 높은 화염 영약은 차가운 강철을 마검으로 바꿀 핵심 촉매가 될 거예요!"',
        rewardText: '홍련의 촉매 준비 완료 · 교차 연성 효율 상승',
      },
      optionB: {
        label: '✨ "뿌리 밑에 잠든 비전 룬 원석에 마나 이슬을 적신다"',
        reply: '토르그: "크으, 안목이 대단하군! 마나를 머금은 룬 원석이 영롱한 보랏빛 파동을 뿜어내고 있다!"',
        rewardText: '비전 공명 각성 · 고대 룬석 활성도 증가',
      },
    },
  },
  {
    id: 'chapter_3',
    chapterNumber: 'CHAPTER III',
    title: '금지된 비기: 이종 교차 연성',
    subtitle: '강철의 검과 연금술의 영약이 하나로 융합되는 순간',
    zoneId: 'zone_altar',
    imageKey: 'chapter3',
    unlockRequirementText: '고대 룬 제단 및 교차 연성 해금 스토리',
    summary:
      '단순히 같은 물건을 합치는 것을 넘어, 서로 다른 체인의 아이템을 보드 위에서 직접 교차 합성해 전설의 아티팩트 〈홍련의 마검〉과 〈뇌전의 룬검〉을 탄생시킨다.',
    lines: [
      {
        speaker: '내레이션',
        role: 'narrator',
        imageKey: 'chapter3',
        text: '공방 중앙에 자리한 제3구역 〈고대 룬 제단〉이 웅장한 보랏빛 파동을 뿜어낸다. 대장간의 무기와 연금술의 비약, 그리고 비전 룬석이 서로 공명하기 시작했다!',
      },
      {
        speaker: '드워프 대장장이 토르그',
        role: 'torg',
        emotion: '경외심에 찬 목소리로 제단을 가리키며',
        imageKey: 'chapter3',
        text: '보라색 마법진이 떠오르는 걸 봐라, 리아! 똑같은 재료만 합치는 건 평범한 장인들의 방식이지. 우리 아케인 포지의 진정한 비기는 바로 「이종 교차 연성」이다!',
      },
      {
        speaker: '견습 연금술사 리아',
        role: 'lia',
        emotion: '비전 노트의 비밀 도식을 펼쳐 보이며',
        imageKey: 'chapter3',
        text: '노트에도 적혀 있어요! 보드 위에서 「기사의 장검(Lv.4)」과 「화염의 영약(Lv.5)」을 서로 포개어 놓으면... 서로 다른 두 속성이 융합 반응을 일으킨다고 해요!',
      },
      {
        speaker: '내레이션',
        role: 'narrator',
        imageKey: 'chapter3',
        text: '콰아아앙―! 제단 위에서 강철 검신이 진홍빛 영약을 남김없이 집어삼키자, 꺼지지 않는 불꽃이 검날을 휘감으며 전설의 아티팩트 〈홍련의 마검〉이 강림했다!',
      },
      {
        speaker: '드워프 대장장이 토르그',
        role: 'torg',
        emotion: '전율하며 수염을 부르르 떨고',
        imageKey: 'chapter3',
        text: '이 압도적인 마력 파동을 봐라! 게다가 「미스릴 대검(Lv.5)」에 「각인된 룬석(Lv.2)」을 교차 연성하면 창공의 벼락을 부르는 〈뇌전의 룬검〉까지 탄생한다!',
      },
      {
        speaker: '견습 연금술사 리아',
        role: 'lia',
        emotion: '감탄하며 제단 너머의 거대한 문턱을 바라보고',
        imageKey: 'chapter3',
        text: '이래서 아케인 포지가 왕국 유일의 신화 공방이라 불렸던 거군요! 두 자루의 마검이 뿜어내는 에너지가 제4구역인 〈비전 마도서 서고〉의 결계를 녹이고 있어요!',
      },
    ],
    choice: {
      prompt: '고대 룬 제단에서 깨어난 두 가지 전설의 교차 연성 마검 중 어느 힘에 먼저 공명하시겠습니까?',
      optionA: {
        label: '🗡️ "꺼지지 않는 불꽃을 품은 〈홍련의 마검〉을 치켜든다"',
        reply: '토르그: "타오르는 불꽃이 어둠의 결계를 단숨에 베어 넘기는구나! 역시 마검의 정석은 화염이지!"',
        rewardText: '홍련의 각인 · 화염 연성 아티팩트 공명',
      },
      optionB: {
        label: '⚡ "푸른 벼락이 휘감기는 〈뇌전의 룬검〉을 제단에 꽂는다"',
        reply: '리아: "쩌릿한 룬의 뇌전이 제단 전체의 마력 회로를 순식간에 충전시켰어요! 정말 놀라워요!"',
        rewardText: '뇌전의 각인 · 비전 룬 아티팩트 공명',
      },
    },
  },
  {
    id: 'chapter_4',
    chapterNumber: 'CHAPTER IV',
    title: '봉인된 고대 비전 서고',
    subtitle: '별빛 성좌와 생명의 금서가 가리키는 차원의 좌표',
    zoneId: 'zone_library',
    imageKey: 'chapter45',
    unlockRequirementText: '비전 마도서 서고 복구 스토리',
    summary:
      '고대 마도서(Lv.4)와 불사조의 비약(Lv.6)을 교차 연성해 탄생한 〈생명의 금서〉가 서고의 천문의를 회전시키며 스승 엘드리치가 남긴 마지막 메시지를 비춘다.',
    lines: [
      {
        speaker: '내레이션',
        role: 'narrator',
        imageKey: 'chapter45',
        text: '제4구역 〈비전 마도서 서고〉의 봉인이 풀리자, 수천 권의 마도서가 공중에 떠오르며 황금빛 성좌를 그린다. 서고 중앙의 천문의가 장엄한 소리를 내며 회전하기 시작했다.',
      },
      {
        speaker: '견습 연금술사 리아',
        role: 'lia',
        emotion: '고대 마도서와 불사조의 비약을 융합하며',
        imageKey: 'chapter45',
        text: '스승님의 암호를 해독하려면 「고대 마도서(Lv.4)」에 생명의 극치인 「불사조의 비약(Lv.6)」을 교차 연성해야 해요. 깨어나라, 〈생명의 금서〉여!',
      },
      {
        speaker: '내레이션',
        role: 'narrator',
        imageKey: 'chapter45',
        text: '찬란한 불사조의 날개 문양이 새겨진 〈생명의 금서〉가 스스로 책장을 넘기더니, 허공에 대현자 엘드리치의 홀로그램 기억 영상을 투사했다.',
      },
      {
        speaker: '견습 연금술사 리아',
        role: 'lia',
        emotion: '떨리는 손으로 빛의 홀로그램을 어루만지며',
        imageKey: 'chapter45',
        text: '“사랑하는 제자 리아야, 그리고 나의 오랜 벗 토르그여. 10년 전 검은 일식은 실험 실패가 아니었다. 공방의 에테르 핵을 삼키려던 심연의 그림자를 막기 위해, 내가 스스로 성소와 함께 차원을 봉인한 것이다...”',
      },
      {
        speaker: '드워프 대장장이 토르그',
        role: 'torg',
        emotion: '주먹을 불끈 쥐고 눈시울을 붉히며',
        imageKey: 'chapter45',
        text: '이 미련한 영감탱이... 세상 사람들에게 폭주 사고의 원흉으로 손가락질받으면서도, 혼자서 차원의 틈을 막아내고 있었던 거냐!',
      },
      {
        speaker: '견습 연금술사 리아',
        role: 'lia',
        emotion: '눈물을 닦고 단호한 목소리로',
        imageKey: 'chapter45',
        text: '스승님의 메시지는 아직 끝나지 않았어요! “만약 너희가 이종 교차 연성의 극의에 도달해 〈에테르 코어〉를 완성한다면, 심연의 그림자를 정화하고 성소의 문을 열 수 있을 것이다.”',
      },
      {
        speaker: '드워프 대장장이 토르그',
        role: 'torg',
        emotion: '전투적으로 망치를 고쳐 쥐며',
        imageKey: 'chapter45',
        text: '들었지, 리아?! 망설일 시간 없다! 마지막 제5구역 〈에테르 천공 성소〉로 진격해 그 영감탱이를 구출해 내자고!',
      },
    ],
    choice: {
      prompt: '대현자 엘드리치가 남긴 10년 전의 진실을 마주한 지금, 어떤 결의를 다지시겠습니까?',
      optionA: {
        label: '📖 "생명의 금서에 기록된 궁극의 연성식을 완벽히 해독한다"',
        reply: '리아: "스승님이 남기신 지혜가 제 머릿속으로 흘러들어와요! 〈에테르 코어〉의 설계도가 완벽히 보입니다!"',
        rewardText: '대현자의 지혜 계승 · 천공 성소 해독 완료',
      },
      optionB: {
        label: '🛡️ "심연의 침식을 정화할 최강의 마검과 보주를 준비한다"',
        reply: '토르그: "그래! 어떤 어둠이 기다리고 있든, 우리 둘이 만든 신화급 아티팩트 앞에서는 한 줌 재가 될 뿐이다!"',
        rewardText: '수호자의 결의 · 성소 정화 출력 극대화',
      },
    },
  },
  {
    id: 'chapter_5',
    chapterNumber: 'FINAL CHAPTER',
    title: '에테르 천공 성소의 부활',
    subtitle: '정령의 보주와 현자의 돌이 빚어낸 기적, 에테르 코어',
    zoneId: 'zone_sanctum',
    imageKey: 'chapter45',
    unlockRequirementText: '에테르 천공 성소 최종 복구 스토리',
    summary:
      '연금술의 극치인 〈현자의 돌〉과 비전의 결정체 〈정령의 보주〉를 교차 연성하여 탄생한 〈에테르 코어〉. 마침내 아케인 포지 전체가 창공으로 다시 떠오른다!',
    lines: [
      {
        speaker: '내레이션',
        role: 'narrator',
        imageKey: 'chapter45',
        text: '마침내 당도한 제5구역 〈에테르 천공 성소〉. 부서진 부유석 제단 너머로 일렁이는 차원의 균열이 보이고, 그 안에서 스승 엘드리치의 미약한 마력 신호가 깜빡이고 있었다.',
      },
      {
        speaker: '견습 연금술사 리아',
        role: 'lia',
        emotion: '현자의 돌과 정령의 보주를 두 손에 높이 들고',
        imageKey: 'chapter45',
        text: '연금술의 정점인 「현자의 돌(Lv.7)」과 비전 마법의 결정체 「정령의 보주(Lv.5)」... 이 두 가지를 하나로 교차 연성하면 창조의 심장 〈에테르 코어〉가 완성돼요!',
      },
      {
        speaker: '드워프 대장장이 토르그',
        role: 'torg',
        emotion: '미스릴 대검으로 제단의 중력 제어 링을 고정하며',
        imageKey: 'chapter45',
        text: '내가 미스릴 대검과 용살자의 신검으로 성소의 지맥 회로를 꽉 붙들어 매고 있으마! 리아, 네 모든 마력을 담아 코어를 융합해라!',
      },
      {
        speaker: '내레이션',
        role: 'narrator',
        imageKey: 'chapter45',
        text: '눈부신 청록색과 황금색 빛기둥이 천공 성소의 첨탑을 꿰뚫고 하늘로 치솟았다! 〈에테르 코어〉가 맥동하자 거대한 중력 제어 링이 회전하며 아케인 포지 전체가 구름 위로 찬란하게 부상한다!',
      },
      {
        speaker: '견습 연금술사 리아',
        role: 'lia',
        emotion: '벅찬 감동의 눈물을 흘리며',
        imageKey: 'chapter45',
        text: '해냈어요, 토르그 아저씨! 〈에테르 코어〉의 빛이 검은 일식의 그림자를 완전히 정화했어요! 저기 열리는 차원문 너머로... 스승님의 실루엣이 걸어 나오고 계세요!',
      },
      {
        speaker: '드워프 대장장이 토르그',
        role: 'torg',
        emotion: '환하게 웃으며 망치를 하늘 높이 치켜들고',
        imageKey: 'chapter45',
        text: '하하하하! 보아라, 왕국 사람들이여! 전설의 마법 공방 〈아케인 포지〉가 10년 만에 하늘로 돌아왔다! 이제부터 너는 견습생이 아니라 이 공방의 진정한 마스터 연금술사다, 리아!',
      },
    ],
    choice: {
      prompt: '천공으로 다시 떠오른 아케인 포지의 중심에서, 〈에테르 코어〉의 첫 출력 파동을 어디로 향하게 하시겠습니까?',
      optionA: {
        label: '🌌 "차원문을 활짝 열어 대현자 엘드리치를 맞이한다"',
        reply: '리아: "스승님!! 10년 동안 정말 그리웠어요! 이제 저희가 스승님의 공방을 완벽히 되살려냈어요!"',
        rewardText: '차원의 귀환 달성 · 에필로그 스토리 해금',
      },
      optionB: {
        label: '☀️ "왕국의 하늘 전체에 아케인 포지의 부활을 알리는 빛을 쏜다"',
        reply: '토르그: "크하하! 온 왕국이 저 찬란한 황금빛 오로라를 올려다보며 우리 공방의 귀환을 축복하고 있다!"',
        rewardText: '천공의 영광 달성 · 전설의 마스터 공방 칭호',
      },
    },
  },
  {
    id: 'epilogue',
    chapterNumber: 'EPILOGUE',
    title: '대현자 엘드리치의 귀환과 천공의 출항',
    subtitle: '구름 위를 항해하는 마법 요새, 새로운 신화의 시작',
    imageKey: 'chapter45',
    unlockRequirementText: '에테르 천공 성소 복구 완료 시 해금되는 대단원 에필로그',
    summary:
      '차원의 틈에서 무사히 귀환한 대현자 엘드리치와 감격의 재회를 나눈 리아와 토르그. 하늘로 떠오른 아케인 포지는 이제 왕국을 넘어 별들의 바다로 새로운 항해를 시작한다.',
    lines: [
      {
        speaker: '내레이션',
        role: 'narrator',
        imageKey: 'chapter45',
        text: '찬란하게 회전하는 〈에테르 코어〉의 중심부에서 빛의 계단이 내려오고, 별빛 로브를 두른 대현자 엘드리치가 인자한 미소와 함께 모습을 드러냈다.',
      },
      {
        speaker: '견습 연금술사 리아',
        role: 'lia',
        emotion: '스승의 품에 달려가 안기며 울먹이고',
        imageKey: 'chapter45',
        text: '스승님...! 정말로 살아계셨군요! 반쪽짜리 비전 노트를 들고 이 폐허에 왔을 때만 해도... 다시는 스승님 목소리를 못 들을까 봐 얼마나 두려웠는지 몰라요.',
      },
      {
        speaker: '드워프 대장장이 토르그',
        role: 'torg',
        emotion: '팔짱을 끼고 퉁명스럽게 코끝을 찡긋하며',
        imageKey: 'chapter45',
        text: '흥, 10년 동안 공방 집세도 안 내고 차원 너머에 숨어있던 영감탱이 치고는 아주 멀쩡하구먼! 이 꼬마 녀석이 아니었으면 평생 미아로 남을 뻔했다고!',
      },
      {
        speaker: '내레이션',
        role: 'narrator',
        imageKey: 'chapter45',
        text: '대현자 엘드리치는 토르그의 단단한 어깨를 두드리고, 몰라보게 성장한 리아의 손에 자신의 황금 지팡이와 마스터 공방장의 문장을 넘겨주었다.',
      },
      {
        speaker: '견습 연금술사 리아',
        role: 'lia',
        emotion: '가슴 벅찬 표정으로 마스터 문장을 바라보며',
        imageKey: 'chapter45',
        text: '“강철과 연금술, 그리고 비전을 하나로 잇는 자만이 진정한 창조에 닿는다.” 스승님이 늘 하시던 말씀의 의미를 이제야 온전히 깨달았어요!',
      },
      {
        speaker: '드워프 대장장이 토르그',
        role: 'torg',
        emotion: '천공 갑판 너머로 펼쳐진 구름 바다를 가리키며',
        imageKey: 'chapter45',
        text: '자, 신파극은 여기까지다! 아케인 포지의 부유 엔진이 최대 출력으로 가동됐다! 이제 왕국 수도는 물론이고 대륙 끝의 고대 유적까지 공방째로 날아갈 수 있다고!',
      },
      {
        speaker: '견습 연금술사 리아',
        role: 'lia',
        emotion: '찬란한 아침 햇살 속에서 활짝 미소 지으며',
        imageKey: 'chapter45',
        text: '함께해 주셔서 정말 고마워요! 우리의 연성과 모험은 여기서 끝이 아니에요. 저 끝없는 창공 너머로, 새로운 전설의 아티팩트를 찾아 출항해요!',
      },
    ],
    choice: {
      prompt: '천공의 마법 요새로 거듭난 〈아케인 포지〉의 다음 항해 목적지를 어디로 정하시겠습니까?',
      optionA: {
        label: '🌠 "별똥별이 떨어지는 고대 천공 유적으로 출항한다!"',
        reply: '리아: "별빛 광석과 신비한 천상의 영약 재료들이 우릴 기다리고 있어요! 전속력으로 출발해요!"',
        rewardText: '천공의 개척자 · 아케인 포지 대단원 완결!',
      },
      optionB: {
        label: '🏰 "왕국 수도 상공으로 금의환향해 성대한 축제를 연다!"',
        reply: '토르그: "크하하! 왕국 최고의 맥주와 훈장을 쓸어 담으러 가자고! 아케인 포지여, 영원하라!"',
        rewardText: '왕국의 구원자 · 아케인 포지 대단원 완결!',
      },
    },
  },
];
const COMPANION_CHATTER   
                 
                   
                    
    = [
  {
    zoneId: 'zone_forge',
    liaQuote: '모루(⚡)와 약초 바구니(⚡)를 눌러 재료를 꺼내고, 같은 재료끼리 드래그해서 순도 높은 금속과 수액으로 합쳐보세요!',
    torgQuote: '10년간 식어있던 내 대장간 화로부터 깨워야 한다! 강철 주괴와 정제된 수액을 연성해 상단 [납품 및 복구] 버튼을 눌러라!',
  },
  {
    zoneId: 'zone_alchemy',
    liaQuote: '대장간의 온기 덕분에 비취빛 온실이 녹고 있어요! 치유의 물약과 맑은 마나 정수로 시든 세계수 묘목을 살려내요!',
    torgQuote: '온실 뿌리 밑에서 발견한 마력 고철과 룬 원석을 합치면 비전 보석함이 깨어난다! 상자 보상도 놓치지 말고 챙겨라!',
  },
  {
    zoneId: 'zone_altar',
    liaQuote: '보라색 마법진이 일렁이는 서로 다른 체인의 아이템을 포개면 신화 속 「이종 교차 아티팩트」가 탄생해요!',
    torgQuote: '기사의 장검(Lv.4)에 화염의 영약(Lv.5)을 부어 〈홍련의 마검〉을, 미스릴 대검(Lv.5)에 각인된 룬석(Lv.2)을 합쳐 〈뇌전의 룬검〉을 벼려내라!',
  },
  {
    zoneId: 'zone_library',
    liaQuote: '고대 마도서(Lv.4)와 불사조의 비약(Lv.6)을 교차 연성하면 스승님의 진실이 담긴 〈생명의 금서〉가 깨어나요!',
    torgQuote: '엘드리치 영감이 남긴 차원의 좌표가 코앞이다! 서고의 천문의를 복구하고 마지막 성소로 진격하자!',
  },
  {
    zoneId: 'zone_sanctum',
    liaQuote: '정령의 보주(Lv.5)와 현자의 돌(Lv.7)을 하나로 융합해 창조의 심장 〈에테르 코어〉를 완성하고 스승님을 구출해요!',
    torgQuote: '우리 손으로 아케인 포지를 구름 위로 다시 띄워 올렸다! [스토리 극장]에서 대단원 에필로그와 선택지 이벤트를 감상해라!',
  },
];


  // --- Module: data/monsters.js ---
const MONSTERS               = [
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

const BASE_DAMAGE_BY_LEVEL                         = {
  1: 12,
  2: 25,
  3: 50,
  4: 95,
  5: 170,
  6: 300,
  7: 520,
};

const HYBRID_BASE_DAMAGE                         = {
  hybrid_flameblade: 240,
  hybrid_runeblade: 310,
  hybrid_tome_of_life: 390,
  hybrid_aether_core: 500,
};
function calculateItemDamage(
  itemDef                                                 ,
  monster            
)                                                                                    {
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
    itemDef.category                                             
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


  // --- Module: systems/audio.js ---
class SoundSystem {
          ctx                      = null;
          enabled          = true;
          masterGain                  = null;
          bgmGain                  = null;
          bgmPlaying          = false;
          bgmTheme           = 'workshop';
          bgmTimer                = null;
          bgmStep         = 0;
          voiceEnabled          = true;
          speechQueueTimers           = [];
          cachedVoices                         = [];

  constructor() {
    // AudioContext will be lazily initialized on first user interaction
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.refreshVoices();
      window.speechSynthesis.onvoiceschanged = () => {
        this.refreshVoices();
      };
    }
  }

          refreshVoices()       {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    const list = window.speechSynthesis.getVoices();
    if (list && list.length > 0) {
      this.cachedVoices = list;
    }
  }

          ensureContext()                      {
    if (!this.enabled) return null;

    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window                                                          ).webkitAudioContext;
      if (!AudioCtx) return null;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = 0.38;
      this.masterGain.connect(this.ctx.destination);

      this.bgmGain = this.ctx.createGain();
      this.bgmGain.gain.value = 0.24;
      this.bgmGain.connect(this.masterGain);
    }

    if (this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {
        // Ignore resume errors before user gesture
      });
    }

    return this.ctx;
  }

         setEnabled(enabled         )       {
    this.enabled = enabled;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(enabled ? 0.38 : 0, this.ctx.currentTime, 0.02);
    }
    if (!enabled) {
      this.stopNarration();
    }
  }

         isEnabled()          {
    return this.enabled;
  }

          playTone(
    freq        ,
    type                ,
    startTime        ,
    duration        ,
    peakGain         = 0.35,
    endFreq         
  )       {
    const ctx = this.ensureContext();
    if (!ctx || !this.masterGain) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(Math.max(20, freq), startTime);
    if (endFreq !== undefined) {
      osc.frequency.exponentialRampToValueAtTime(Math.max(20, endFreq), startTime + duration);
    }

    gain.gain.setValueAtTime(0.0001, startTime);
    gain.gain.linearRampToValueAtTime(peakGain, startTime + Math.min(0.015, duration * 0.25));
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(startTime);
    osc.stop(startTime + duration + 0.02);
  }

          playNoiseBurst(
    startTime        ,
    duration        ,
    filterFreq        ,
    peakGain         = 0.25,
    q         = 3
  )       {
    const ctx = this.ensureContext();
    if (!ctx || !this.masterGain) return;

    const bufferSize = Math.max(1, Math.floor(ctx.sampleRate * duration));
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(filterFreq, startTime);
    filter.Q.setValueAtTime(q, startTime);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(peakGain, startTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    noise.start(startTime);
    noise.stop(startTime + duration + 0.01);
  }

  /**
   * 대장간 생성기는 묵직한 금속 모루 타격음,
   * 연금술은 청량한 물방울/기포음,
   * 비전은 신비로운 크리스탈 차임음,
   * 상자는 나무/보석 열리는 소리
   */
         playSpawn(category              )       {
    const ctx = this.ensureContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    if (category === 'generator_forge' || category === 'weapon') {
      // Heavy metallic anvil strike + bright overtone ping + spark noise
      this.playTone(135, 'triangle', now, 0.14, 0.55, 58);
      this.playTone(880, 'square', now, 0.09, 0.22, 620);
      this.playTone(1760, 'sine', now + 0.005, 0.18, 0.25, 1320);
      this.playNoiseBurst(now, 0.06, 2600, 0.3, 4);
    } else if (category === 'generator_alchemy' || category === 'potion') {
      // Refreshing potion bubble / water droplet bloop
      this.playTone(320, 'sine', now, 0.09, 0.4, 780);
      this.playTone(540, 'sine', now + 0.055, 0.11, 0.32, 1180);
      this.playTone(820, 'triangle', now + 0.1, 0.08, 0.18, 1420);
    } else if (category === 'generator_arcane' || category === 'arcane' || category === 'hybrid') {
      // Mystical crystal chime
      const notes = [1046.5, 1318.5, 1567.98, 2093.0];
      notes.forEach((f, idx) => {
        this.playTone(f, 'sine', now + idx * 0.028, 0.24, 0.22, f * 1.01);
        this.playTone(f * 1.5, 'triangle', now + idx * 0.028, 0.15, 0.08);
      });
    } else if (category === 'chest') {
      // Wooden creak + gem sparkle
      this.playTone(190, 'sawtooth', now, 0.08, 0.25, 260);
      this.playNoiseBurst(now, 0.05, 900, 0.2, 2);
      this.playTone(987.77, 'sine', now + 0.05, 0.16, 0.28);
      this.playTone(1318.5, 'sine', now + 0.09, 0.22, 0.3);
    } else {
      // Default light pop
      this.playTone(440, 'sine', now, 0.08, 0.3, 660);
    }
  }

  /**
   * 아이템 레벨과 연속 머지 콤보에 따라 피치(음계)가 경쾌하게 상승하는 마법 합성음
   */
         playMerge(level        , comboCount         = 1)       {
    const ctx = this.ensureContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    // Major pentatonic / Lydian intervals in semitones
    const scaleSemitones = [0, 2, 4, 7, 9, 11, 12, 14, 16, 19, 21, 24];
    const stepIndex = Math.min(
      scaleSemitones.length - 1,
      Math.max(0, (level - 1) + Math.min(5, Math.max(0, comboCount - 1)))
    );
    const semitoneOffset = scaleSemitones[stepIndex];
    const baseFreq = 330 * Math.pow(2, semitoneOffset / 12);

    // Pop impact + ascending harmonic triad + shimmer
    this.playTone(baseFreq * 0.5, 'triangle', now, 0.12, 0.35, baseFreq);
    this.playTone(baseFreq, 'sine', now + 0.015, 0.22, 0.4, baseFreq * 1.02);
    this.playTone(baseFreq * 1.25, 'triangle', now + 0.055, 0.24, 0.32);
    this.playTone(baseFreq * 1.5, 'sine', now + 0.095, 0.30, 0.36);

    if (comboCount >= 2) {
      // Extra high octave sparkle for combos
      this.playTone(baseFreq * 2, 'sine', now + 0.13, 0.32, 0.28, baseFreq * 2.05);
    }
  }

  /**
   * 이종 교차 합성 성공 시 보라색 비전 마법진이 발동하는 듯한 웅장하고 신비로운 다중 화음 아르페지오
   */
         playCrossCraft()       {
    const ctx = this.ensureContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    // Deep arcane bass swell
    this.playTone(110, 'sawtooth', now, 0.65, 0.28, 220);
    this.playTone(220, 'triangle', now + 0.04, 0.6, 0.32, 440);

    // Mystical Lydian dominant / arcane arpeggio (A - C# - E - G# - B - D# - E - A)
    const arpeggio = [440, 554.37, 659.25, 830.61, 987.77, 1244.51, 1318.51, 1760];
    arpeggio.forEach((freq, i) => {
      const start = now + i * 0.055;
      this.playTone(freq, 'sine', start, 0.42, 0.26, freq * 1.015);
      this.playTone(freq * 0.5, 'triangle', start, 0.35, 0.16);
    });

    // Shimmering release burst
    this.playNoiseBurst(now + 0.15, 0.35, 3200, 0.18, 2.5);
  }

  /**
   * 크리티컬 머지(+2레벨 점프) 또는 행운 드랍 시 짜릿한 금빛 팡파르 사운드
   */
         playCritical()       {
    const ctx = this.ensureContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    // Bright golden brass/bell fanfare: C6 -> E6 -> G6 -> C7 with rich harmonics
    const notes = [
      { freq: 587.33, delay: 0.0, dur: 0.12 },
      { freq: 783.99, delay: 0.06, dur: 0.12 },
      { freq: 987.77, delay: 0.12, dur: 0.14 },
      { freq: 1174.66, delay: 0.18, dur: 0.45 },
      { freq: 1567.98, delay: 0.24, dur: 0.50 },
    ];

    notes.forEach((n) => {
      this.playTone(n.freq, 'triangle', now + n.delay, n.dur, 0.36);
      this.playTone(n.freq * 2, 'sine', now + n.delay + 0.01, n.dur * 0.85, 0.2);
    });

    this.playNoiseBurst(now + 0.18, 0.22, 4200, 0.22, 3);
  }

  /**
   * 골드 동전 짤랑거리는 소리, 마나 에너지 충전 화음, 상자 획득음
   */
         playCollect(type                             )       {
    const ctx = this.ensureContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    if (type === 'gold') {
      // Crisp metallic coin clink (B5 -> E6 + high ring)
      this.playTone(987.77, 'sine', now, 0.11, 0.34);
      this.playTone(1318.51, 'sine', now + 0.065, 0.28, 0.38);
      this.playTone(2637.02, 'triangle', now + 0.065, 0.2, 0.16);
    } else if (type === 'energy') {
      // Rising mana surge chord
      this.playTone(349.23, 'sine', now, 0.25, 0.3, 698.46);
      this.playTone(523.25, 'triangle', now + 0.05, 0.28, 0.28, 1046.5);
      this.playTone(880, 'sine', now + 0.1, 0.32, 0.26, 1396.91);
    } else {
      // Chest collect / open chime
      this.playTone(523.25, 'triangle', now, 0.14, 0.32);
      this.playTone(659.25, 'triangle', now + 0.07, 0.16, 0.32);
      this.playTone(783.99, 'sine', now + 0.14, 0.28, 0.36);
    }
  }

  /**
   * 퀘스트 납품 성공 팡파르
   */
         playQuestComplete()       {
    const ctx = this.ensureContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    // Uplifting quest completion melody (G4 - B4 - D5 - G5 + harmony)
    const seq = [
      { f: 392.0, t: 0.0, d: 0.12 },
      { f: 493.88, t: 0.09, d: 0.12 },
      { f: 587.33, t: 0.18, d: 0.14 },
      { f: 783.99, t: 0.28, d: 0.48 },
    ];
    seq.forEach((s) => {
      this.playTone(s.f, 'triangle', now + s.t, s.d, 0.35);
      this.playTone(s.f * 1.5, 'sine', now + s.t + 0.01, s.d * 0.9, 0.18);
    });
  }

  /**
   * 마법 공방 건물 복구 완료 시 장엄한 오케스트라풍 신스 브라스 화음
   */
         playZoneRestore()       {
    const ctx = this.ensureContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    // Majestic orchestral synth brass progression: C major -> G major -> A minor -> F#m/D -> C major grand finale
    const chords = [
      { freqs: [261.63, 329.63, 392.0, 523.25], start: 0.0, dur: 0.26 },
      { freqs: [293.66, 369.99, 440.0, 587.33], start: 0.22, dur: 0.26 },
      { freqs: [329.63, 415.3, 493.88, 659.25], start: 0.44, dur: 0.28 },
      { freqs: [261.63, 392.0, 523.25, 659.25, 783.99, 1046.5], start: 0.68, dur: 0.85 },
    ];

    chords.forEach((chord) => {
      chord.freqs.forEach((f, idx) => {
        this.playTone(f, idx % 2 === 0 ? 'sawtooth' : 'triangle', now + chord.start, chord.dur, 0.16, f * 1.004);
        this.playTone(f, 'sine', now + chord.start, chord.dur * 1.1, 0.18);
      });
    });

    // Celebratory firework pop noise
    this.playNoiseBurst(now + 0.68, 0.4, 2400, 0.22, 1.8);
  }

  /**
   * 에너지 부족 또는 빈 칸 없음 알림음
   */
         playError()       {
    const ctx = this.ensureContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    // Low descending buzz
    this.playTone(210, 'sawtooth', now, 0.11, 0.28, 165);
    this.playTone(160, 'sawtooth', now + 0.09, 0.16, 0.3, 115);
  }

  /**
   * 양피지 책장이 넘어가며 신비로운 하프/차임 화음이 퍼지는 스토리 컷신 시작 효과음
   */
         playStoryOpen()       {
    const ctx = this.ensureContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    // Soft parchment page turn rustle (filtered noise sweep)
    this.playNoiseBurst(now, 0.14, 1400, 0.18, 2.2);
    this.playNoiseBurst(now + 0.04, 0.18, 2200, 0.14, 1.8);

    // Mystical harp / chime glissando (F#4 -> A4 -> C#5 -> E5 -> F#5 -> A5 -> C#6)
    const harpNotes = [369.99, 440.0, 554.37, 659.25, 739.99, 880.0, 1108.73];
    harpNotes.forEach((freq, idx) => {
      const start = now + 0.05 + idx * 0.055;
      this.playTone(freq, 'sine', start, 0.55, 0.2, freq * 1.003);
      this.playTone(freq * 2, 'triangle', start + 0.01, 0.35, 0.08);
    });
  }

  /**
   * 대사 넘김/타이핑 효과음
   * - lia / alchemist: 맑고 높은 크리스탈 벨 톤
   * - torg / blacksmith: 묵직하고 따뜻한 중저음 금속 공명 톤
   * - narrator: 잔잔한 고대 마법 차임 톤
   */
         playDialogueBlip(
    role                                                          
  )       {
    const ctx = this.ensureContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    // Slight pitch variation for natural dialogue cadence
    const jitter = 0.96 + Math.random() * 0.08;

    if (role === 'lia' || role === 'alchemist') {
      const base = 880 * jitter;
      this.playTone(base, 'sine', now, 0.09, 0.22, base * 1.12);
      this.playTone(base * 1.5, 'triangle', now + 0.015, 0.08, 0.12);
    } else if (role === 'torg' || role === 'blacksmith') {
      const base = 220 * jitter;
      this.playTone(base, 'triangle', now, 0.11, 0.28, base * 0.92);
      this.playTone(base * 2, 'sine', now + 0.01, 0.09, 0.14, base * 1.85);
    } else {
      const base = 523.25 * jitter;
      this.playTone(base, 'sine', now, 0.12, 0.18, base * 1.04);
      this.playTone(base * 1.25, 'sine', now + 0.02, 0.11, 0.1);
    }
  }

  /**
   * 스토리 선택지를 골랐을 때 경쾌하게 울리는 마법 공명 효과음
   */
         playChoiceSelect()       {
    const ctx = this.ensureContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    // Crisp magical confirmation resonance (D5 -> F#5 -> A5 -> D6)
    const chord = [
      { f: 587.33, delay: 0.0, dur: 0.18 },
      { f: 739.99, delay: 0.045, dur: 0.22 },
      { f: 880.0, delay: 0.09, dur: 0.28 },
      { f: 1174.66, delay: 0.135, dur: 0.42 },
    ];

    chord.forEach((n) => {
      this.playTone(n.f, 'sine', now + n.delay, n.dur, 0.26, n.f * 1.01);
      this.playTone(n.f * 1.5, 'triangle', now + n.delay + 0.01, n.dur * 0.75, 0.11);
    });

    this.playNoiseBurst(now + 0.08, 0.16, 3400, 0.12, 3);
  }

  // ============================================================================
  // 1. 프로시저럴 판타지 배경음악(BGM) 시퀀서
  // ============================================================================

          playBgmTone(
    freq        ,
    type                ,
    startTime        ,
    duration        ,
    peakGain         = 0.16
  )       {
    const ctx = this.ensureContext();
    if (!ctx || !this.bgmGain) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(Math.max(20, freq), startTime);

    gain.gain.setValueAtTime(0.0001, startTime);
    gain.gain.linearRampToValueAtTime(peakGain, startTime + Math.min(0.06, duration * 0.25));
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    osc.connect(gain);
    gain.connect(this.bgmGain);

    osc.start(startTime);
    osc.stop(startTime + duration + 0.03);
  }

          scheduleBgmStep()       {
    if (!this.bgmPlaying || !this.enabled) return;
    const ctx = this.ensureContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const step = this.bgmStep++;

    if (this.bgmTheme === 'workshop') {
      // 평화롭고 신비로운 공방 루프 (D Dorian / Lydian harp arpeggio + warm pad)
      const bassRoots = [146.83, 174.61, 196.0, 164.81]; // D3, F3, G3, E3
      const arpeggios = [
        [293.66, 349.23, 440.0, 523.25, 587.33, 523.25, 440.0, 349.23],
        [349.23, 440.0, 523.25, 659.25, 698.46, 659.25, 523.25, 440.0],
        [392.0, 493.88, 587.33, 659.25, 783.99, 659.25, 587.33, 493.88],
        [329.63, 392.0, 493.88, 587.33, 659.25, 587.33, 493.88, 392.0],
      ];

      const bar = Math.floor(step / 8) % bassRoots.length;
      const beat = step % 8;

      if (beat === 0 || beat === 4) {
        const bass = bassRoots[bar];
        this.playBgmTone(bass, 'triangle', now, 1.5, 0.14);
        this.playBgmTone(bass * 1.5, 'sine', now + 0.02, 1.3, 0.09);
      }

      const note = arpeggios[bar][beat];
      this.playBgmTone(note, 'sine', now, 0.62, 0.14);
      this.playBgmTone(note * 2, 'triangle', now + 0.015, 0.38, 0.045);
    } else if (this.bgmTheme === 'story') {
      // 감성적인 오르골/하프 서사 루프 (F#m -> D -> A -> E)
      const bassRoots = [185.0, 146.83, 220.0, 164.81]; // F#3, D3, A3, E3
      const melodies = [
        [739.99, 659.25, 554.37, 659.25, 880.0, 739.99, 659.25, 554.37],
        [587.33, 659.25, 739.99, 880.0, 739.99, 659.25, 587.33, 440.0],
        [554.37, 659.25, 880.0, 987.77, 880.0, 739.99, 659.25, 554.37],
        [659.25, 739.99, 830.61, 987.77, 830.61, 739.99, 659.25, 493.88],
      ];

      const bar = Math.floor(step / 8) % bassRoots.length;
      const beat = step % 8;

      if (beat === 0) {
        const bass = bassRoots[bar];
        this.playBgmTone(bass, 'sine', now, 2.8, 0.16);
        this.playBgmTone(bass * 1.5, 'triangle', now + 0.04, 2.4, 0.08);
      }

      const mel = melodies[bar][beat];
      this.playBgmTone(mel, 'sine', now, 0.78, 0.15);
      this.playBgmTone(mel * 2, 'sine', now + 0.02, 0.45, 0.05);
    } else {
      // 박진감 넘치는 마수 토벌 루프 ('battle' - A minor driving rhythm)
      const bassLine = [110.0, 110.0, 130.81, 146.83, 110.0, 110.0, 164.81, 146.83];
      const leadLine = [440.0, 523.25, 659.25, 587.33, 659.25, 783.99, 659.25, 523.25];
      const idx = step % 8;

      const bass = bassLine[idx];
      this.playBgmTone(bass, 'sawtooth', now, 0.24, 0.12);
      this.playBgmTone(bass * 2, 'triangle', now, 0.22, 0.1);

      const lead = leadLine[(step + Math.floor(step / 8)) % leadLine.length];
      this.playBgmTone(lead, 'triangle', now + 0.01, 0.26, 0.14);
      if (idx % 2 === 0) {
        this.playBgmTone(lead * 1.5, 'sine', now + 0.02, 0.2, 0.07);
      }
    }
  }

          getBgmIntervalMs()         {
    if (this.bgmTheme === 'battle') return 260;
    if (this.bgmTheme === 'story') return 460;
    return 400;
  }

         startBgm(theme           )       {
    if (theme) {
      this.bgmTheme = theme;
    }
    this.bgmPlaying = true;
    this.ensureContext();

    if (this.bgmTimer !== null) {
      window.clearInterval(this.bgmTimer);
      this.bgmTimer = null;
    }

    this.scheduleBgmStep();
    this.bgmTimer = window.setInterval(() => {
      this.scheduleBgmStep();
    }, this.getBgmIntervalMs());
  }

         stopBgm()       {
    this.bgmPlaying = false;
    if (this.bgmTimer !== null) {
      window.clearInterval(this.bgmTimer);
      this.bgmTimer = null;
    }
  }

         toggleBgm()          {
    if (this.bgmPlaying) {
      this.stopBgm();
    } else {
      this.startBgm(this.bgmTheme);
    }
    return this.bgmPlaying;
  }

         isBgmPlaying()          {
    return this.bgmPlaying;
  }

         setBgmTheme(theme          )       {
    const changed = this.bgmTheme !== theme;
    this.bgmTheme = theme;
    if (changed) {
      this.bgmStep = 0;
      if (this.bgmPlaying) {
        this.startBgm(theme);
      }
    }
  }

  // ============================================================================
  // 2. 한국어 음성 나레이션 & 캐릭터 보이스 더빙 (자연스러운 Neural/Yuna 음성 선택 엔진)
  // ============================================================================

  /**
   * macOS/브라우저 기본 목록 앞쪽에 알파벳순으로 정렬되어 있는
   * 구형 포먼트 기계음(Eddy, Flo, Grandma, Grandpa, Reed, Rocko, Sandy, Shelley 등)을 완전히 배제하고,
   * 신경망(Neural / Natural / Online / Google 한국의) 및 고품질 성우 음성(Yuna, Sora, Siri 등)만 선별합니다.
   */
          selectBestKoreanVoice(role                             )                              {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return null;
    const allVoices =
      this.cachedVoices.length > 0 ? this.cachedVoices : window.speechSynthesis.getVoices();

    const koVoices = allVoices.filter((v) => {
      const lang = v.lang.toLowerCase();
      return lang.includes('ko') || lang.includes('kr') || v.name.includes('한국');
    });

    if (koVoices.length === 0) return null;

    // 1990년대 구형 Eloquence 기계음 블랙리스트 (알파벳순이라 koVoices[0]이 Eddy가 되는 문제 방지!)
    const roboticBlacklist = [
      'eddy',
      'flo',
      'grandma',
      'grandpa',
      'reed',
      'rocko',
      'sandy',
      'shelley',
      'albert',
      'bad news',
      'bahh',
      'bells',
      'boing',
      'bubbles',
      'cellos',
      'good news',
      'jester',
      'junior',
      'kathy',
      'organ',
      'ralph',
      'superstar',
      'trinoids',
      'whisper',
      'wobble',
      'zarvox',
    ];

    const naturalVoices = koVoices.filter((v) => {
      const lower = v.name.toLowerCase();
      return !roboticBlacklist.some((bad) => lower.includes(bad));
    });

    const pool = naturalVoices.length > 0 ? naturalVoices : koVoices;

    // 1순위: Microsoft Edge / 클라우드 Neural 성우 (역할별 성별/톤 매칭)
    if (role === 'torg') {
      const maleNeural = pool.find((v) => {
        const n = v.name.toLowerCase();
        return n.includes('injoon') || n.includes('bongjin') || n.includes('gookmin') || n.includes('minsu');
      });
      if (maleNeural) return maleNeural;
    } else if (role === 'lia') {
      const femaleNeural = pool.find((v) => {
        const n = v.name.toLowerCase();
        return n.includes('sunhi') || n.includes('jiyeon') || n.includes('yuna') || n.includes('유나');
      });
      if (femaleNeural && (femaleNeural.name.toLowerCase().includes('natural') || femaleNeural.name.toLowerCase().includes('online'))) {
        return femaleNeural;
      }
    }

    // 2순위: Natural / Neural / Online 클라우드 신경망 음성
    const cloudNeural = pool.find((v) => {
      const n = v.name.toLowerCase();
      return n.includes('natural') || n.includes('neural') || n.includes('online') || n.includes('premium') || n.includes('enhanced');
    });
    if (cloudNeural) return cloudNeural;

    // 3순위: Chrome 내장 Google 한국의 (클라우드 신경망 TTS)
    const googleKo = pool.find((v) => {
      const n = v.name.toLowerCase();
      return n.includes('google') || !v.localService;
    });
    if (googleKo) return googleKo;

    // 4순위: Apple macOS 고품질 한국어 성우 (Yuna / 유나 / Sora / Siri)
    const appleYuna = pool.find((v) => {
      const n = v.name.toLowerCase();
      return n.includes('yuna') || n.includes('유나') || n.includes('sora') || n.includes('소라') || n.includes('siri');
    });
    if (appleYuna) return appleYuna;

    return pool[0];
  }

  /**
   * 특수 기호·괄호·말줄임표를 자연스러운 호흡 단위로 정제하고 문장별로 분리합니다.
   */
          prepareNaturalSentences(rawText        )           {
    const normalized = rawText
      .replace(/["“”'‘’「」『』〈〉《》【】〔〕]/g, '')
      .replace(/\([^)]*\)/g, '') // 괄호 안 부연 설명은 음성에서 생략하여 더 자연스럽게 읽음
      .replace(/…+/g, ', ')
      .replace(/\.{2,}/g, ', ')
      .replace(/—|–/g, ', ')
      .replace(/!+/g, '!')
      .replace(/\?+/g, '?')
      .replace(/\s+/g, ' ')
      .trim();

    if (!normalized) return [];

    // 문장 부호(., !, ?) 뒤 공백을 기준으로 자연스럽게 호흡 분리
    const chunks = normalized
      .split(/(?<=[.!?])\s+/)
      .map((s) => s.trim())
      .filter((s) => s.length > 0);

    return chunks.length > 0 ? chunks : [normalized];
  }

         getActiveVoiceName()         {
    const v = this.selectBestKoreanVoice('lia');
    return v ? v.name : '기본 한국어 성우';
  }

         speakNarration(
    text        ,
    rawRole                                                          
  )       {
    if (!this.voiceEnabled || !this.enabled) return;
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    const role                              =
      rawRole === 'alchemist' ? 'lia' : rawRole === 'blacksmith' ? 'torg' : rawRole;

    this.stopNarration();

    const speakNow = () => {
      try {
        const sentences = this.prepareNaturalSentences(text);
        if (sentences.length === 0) return;

        const bestVoice = this.selectBestKoreanVoice(role);
        const isGoogleOrCloud = bestVoice
          ? bestVoice.name.toLowerCase().includes('google') ||
            bestVoice.name.toLowerCase().includes('natural') ||
            !bestVoice.localService
          : false;

        sentences.forEach((sentence, idx) => {
          const utterance = new SpeechSynthesisUtterance(sentence);
          utterance.lang = 'ko-KR';
          if (bestVoice) {
            utterance.voice = bestVoice;
          }

          // 중요: 피치(pitch)를 과도하게 비틀면(예: 0.72, 1.25) 브라우저가 기계적인 보코더 변조를 걸어버립니다.
          // 자연스러운 육성 억양을 유지하도록 0.94 ~ 1.05 범위의 미세한 톤 차이만 부여합니다.
          if (role === 'lia') {
            utterance.pitch = isGoogleOrCloud ? 1.03 : 1.05;
            utterance.rate = 1.02;
            utterance.volume = 1.0;
          } else if (role === 'torg') {
            utterance.pitch = isGoogleOrCloud ? 0.95 : 0.93;
            utterance.rate = 0.95;
            utterance.volume = 1.0;
          } else {
            // 내레이터: 가장 자연스러운 원음 피치(1.0)와 차분한 호흡 속도
            utterance.pitch = 1.0;
            utterance.rate = 0.97;
            utterance.volume = 0.98;
          }

          // 첫 문장 시작 후 이어지는 문장들이 자연스럽게 큐에 들어가도록 발화
          if (idx === 0) {
            window.speechSynthesis.speak(utterance);
          } else {
            const timer = window.setTimeout(() => {
              if (this.voiceEnabled && this.enabled) {
                window.speechSynthesis.speak(utterance);
              }
            }, idx * 40);
            this.speechQueueTimers.push(timer);
          }
        });
      } catch {
        // Ignore browser TTS errors
      }
    };

    // 브라우저 첫 로드 직후 성우 목록(Google 한국의 등)이 아직 비동기 로딩 중이면 잠깐 대기 후 발화
    const currentVoices = window.speechSynthesis.getVoices();
    if (currentVoices.length === 0) {
      let fired = false;
      const onReady = () => {
        if (fired) return;
        fired = true;
        this.refreshVoices();
        speakNow();
      };
      window.speechSynthesis.addEventListener('voiceschanged', onReady, { once: true });
      const fallbackTimer = window.setTimeout(onReady, 220);
      this.speechQueueTimers.push(fallbackTimer);
    } else {
      this.cachedVoices = currentVoices;
      speakNow();
    }
  }

         stopNarration()       {
    for (const t of this.speechQueueTimers) {
      window.clearTimeout(t);
    }
    this.speechQueueTimers = [];
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch {
        // Ignore errors
      }
    }
  }

         toggleVoice()          {
    this.voiceEnabled = !this.voiceEnabled;
    if (!this.voiceEnabled) {
      this.stopNarration();
    }
    return this.voiceEnabled;
  }

         isVoiceEnabled()          {
    return this.voiceEnabled;
  }

  // ============================================================================
  // 3. 몬스터 전투 효과음 (참격 / 포션 폭발 / 마법 뇌격 / 토벌 완료 팡파레)
  // ============================================================================

  /**
   * 몬스터 타격 효과음:
   * - weapon: 날카로운 검 참격음 + 금속 타격 공명
   * - potion: 연금술 플라스크 파열음 + 화염/산성 폭발음
   * - arcane / hybrid: 강렬한 마법 뇌격음 + 마나 충격파
   */
         playMonsterHit(category        , isCritical         )       {
    const ctx = this.ensureContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    if (category === 'weapon' || category === 'generator_forge') {
      // Sword slash whoosh + metallic blade impact
      this.playNoiseBurst(now, 0.09, 3200, 0.35, 2.2);
      this.playTone(180, 'sawtooth', now, 0.14, 0.48, 55);
      this.playTone(920, 'triangle', now + 0.01, 0.16, 0.32, 1480);
      this.playTone(1840, 'sine', now + 0.02, 0.22, 0.24, 1120);
    } else if (category === 'potion' || category === 'generator_alchemy') {
      // Glass shatter + alchemical blast + bubbling sizzle
      this.playTone(145, 'sine', now, 0.26, 0.5, 42);
      this.playNoiseBurst(now, 0.22, 1100, 0.38, 1.4);
      this.playTone(680, 'triangle', now + 0.03, 0.12, 0.26, 1240);
      this.playTone(960, 'sine', now + 0.08, 0.14, 0.22, 1560);
    } else {
      // Arcane / hybrid thunderbolt discharge
      this.playNoiseBurst(now, 0.18, 2800, 0.34, 1.8);
      this.playTone(660, 'sawtooth', now, 0.16, 0.34, 140);
      this.playTone(1320, 'triangle', now + 0.02, 0.22, 0.3, 440);
      this.playTone(880, 'sine', now + 0.05, 0.28, 0.28, 1760);
    }

    if (isCritical) {
      // Extra golden critical burst overlay
      this.playTone(1174.66, 'triangle', now + 0.04, 0.24, 0.34, 1567.98);
      this.playTone(1567.98, 'sine', now + 0.08, 0.32, 0.32, 2093.0);
      this.playNoiseBurst(now + 0.04, 0.16, 4400, 0.24, 2.6);
    }
  }

  /**
   * 몬스터 토벌 완료 시 웅장한 승리 팡파레
   */
         playMonsterDefeat()       {
    const ctx = this.ensureContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    // Monster dissolve rumble
    this.playTone(130, 'sawtooth', now, 0.32, 0.35, 45);
    this.playNoiseBurst(now, 0.25, 800, 0.28, 1.5);

    // Heroic victory fanfare (A4 -> C#5 -> E5 -> A5 -> C#6 -> A5/E6 grand chord)
    const fanfare = [
      { f: 440.0, t: 0.08, d: 0.12 },
      { f: 554.37, t: 0.18, d: 0.12 },
      { f: 659.25, t: 0.28, d: 0.14 },
      { f: 880.0, t: 0.40, d: 0.55 },
      { f: 1108.73, t: 0.46, d: 0.52 },
      { f: 1318.51, t: 0.52, d: 0.60 },
    ];

    fanfare.forEach((n) => {
      this.playTone(n.f, 'triangle', now + n.t, n.d, 0.32, n.f * 1.005);
      this.playTone(n.f * 0.5, 'sawtooth', now + n.t, n.d * 0.9, 0.14);
      this.playTone(n.f * 2, 'sine', now + n.t + 0.01, n.d * 0.8, 0.14);
    });
  }
}
const soundSystem = new SoundSystem();


  // --- Module: systems/particles.js ---
class ParticleSystem {
          canvas                   ;
          ctx                          ;
          particles             = [];
          rings                  = [];
          floatingTexts                     = [];
          rafId                = null;
          lastTime         = performance.now();
          dpr         = 1;
          shakeTimer                = null;

  constructor(canvas                   ) {
    this.canvas = canvas;
    const context = canvas.getContext('2d');
    if (!context) {
      throw new Error('Failed to initialize 2D context for ParticleSystem');
    }
    this.ctx = context;

    this.resize();
    window.addEventListener('resize', () => this.resize());

    this.lastTime = performance.now();
    this.loop(this.lastTime);
  }

         resize()       {
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.canvas.width = Math.floor(width * this.dpr);
    this.canvas.height = Math.floor(height * this.dpr);
    this.canvas.style.width = `${width}px`;
    this.canvas.style.height = `${height}px`;
    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
  }

  /**
   * 아이템 스폰 시 가벼운 빛 입자 효과
   */
         burstSpawn(x        , y        , color         = '#f59e0b')       {
    const count = 12;
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.4;
      const speed = 45 + Math.random() * 85;
      this.particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 20,
        size: 3 + Math.random() * 3.5,
        color: i % 3 === 0 ? '#ffffff' : color,
        alpha: 1,
        life: 0,
        maxLife: 0.35 + Math.random() * 0.2,
        gravity: 90,
        drag: 0.94,
        shape: i % 2 === 0 ? 'star' : 'circle',
        rotation: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 6,
      });
    }

    this.rings.push({
      x,
      y,
      radius: 6,
      maxRadius: 34,
      color,
      lineWidth: 2.5,
      life: 0,
      maxLife: 0.28,
    });
  }

  /**
   * 머지 시 방사형 마법 입자 + 별 모양 스파클 + 충격파 링(Shockwave ring) 연출
   * (크리티컬일 경우 황금빛 입자 2배 및 화면 흔들림 연동)
   */
         burstMerge(x        , y        , color         = '#38bdf8', isCritical          = false)       {
    const baseCount = isCritical ? 44 : 24;
    const palette = isCritical
      ? ['#fde047', '#f59e0b', '#ffffff', color, '#fbbf24']
      : [color, '#ffffff', '#fde047', color];

    for (let i = 0; i < baseCount; i++) {
      const angle = (Math.PI * 2 * i) / baseCount + (Math.random() - 0.5) * 0.35;
      const speed = (isCritical ? 90 : 65) + Math.random() * (isCritical ? 190 : 130);
      const chosenColor = palette[i % palette.length];
      const shapes                      = ['star', 'diamond', 'circle', 'spark'];

      this.particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - (isCritical ? 35 : 15),
        size: (isCritical ? 5 : 4) + Math.random() * (isCritical ? 5.5 : 4),
        color: chosenColor,
        alpha: 1,
        life: 0,
        maxLife: 0.48 + Math.random() * 0.32,
        gravity: 140,
        drag: 0.93,
        shape: shapes[i % shapes.length],
        rotation: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 9,
        trail: i % 2 === 0 ? [{ x, y }] : undefined,
      });
    }

    // Primary shockwave ring
    this.rings.push({
      x,
      y,
      radius: 8,
      maxRadius: isCritical ? 82 : 54,
      color: isCritical ? '#fde047' : color,
      lineWidth: isCritical ? 4.5 : 3,
      life: 0,
      maxLife: isCritical ? 0.46 : 0.35,
    });

    if (isCritical) {
      // Secondary golden outer shockwave + screen shake
      this.rings.push({
        x,
        y,
        radius: 4,
        maxRadius: 110,
        color: '#f59e0b',
        lineWidth: 3,
        life: 0,
        maxLife: 0.55,
      });
      this.triggerScreenShake(7);
    }
  }

  /**
   * 보라색/자홍색/황금색 나선형 마법진 입자 폭발 및 확장 링 연출
   */
         burstCrossCraft(x        , y        )       {
    const palette = ['#c084fc', '#e879f9', '#f472b6', '#fde047', '#38bdf8', '#ffffff'];
    const count = 52;

    for (let i = 0; i < count; i++) {
      const spiralAngle = (Math.PI * 2 * i) / 13 + i * 0.12;
      const speed = 75 + (i / count) * 185 + Math.random() * 40;
      const color = palette[i % palette.length];

      this.particles.push({
        x: x + Math.cos(spiralAngle) * 8,
        y: y + Math.sin(spiralAngle) * 8,
        vx: Math.cos(spiralAngle) * speed - Math.sin(spiralAngle) * 45,
        vy: Math.sin(spiralAngle) * speed + Math.cos(spiralAngle) * 45,
        size: 4.5 + Math.random() * 5,
        color,
        alpha: 1,
        life: 0,
        maxLife: 0.65 + Math.random() * 0.35,
        gravity: 40,
        drag: 0.94,
        shape: i % 2 === 0 ? 'star' : 'diamond',
        rotation: spiralAngle,
        vRot: (Math.random() - 0.5) * 10,
        trail: [{ x, y }],
      });
    }

    // Twin arcane expanding rings
    this.rings.push({
      x,
      y,
      radius: 10,
      maxRadius: 96,
      color: '#c084fc',
      lineWidth: 4.5,
      life: 0,
      maxLife: 0.52,
    });
    this.rings.push({
      x,
      y,
      radius: 5,
      maxRadius: 130,
      color: '#fde047',
      lineWidth: 3,
      life: 0,
      maxLife: 0.65,
    });

    this.triggerScreenShake(8);
  }

  /**
   * 공방 복구 시 화려한 축포 파티클
   */
         burstRestore(x        , y        )       {
    const palette = ['#fde047', '#f59e0b', '#34d399', '#38bdf8', '#c084fc', '#fb7185', '#ffffff'];
    const count = 68;

    for (let i = 0; i < count; i++) {
      const angle = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 1.5;
      const speed = 95 + Math.random() * 240;
      const color = palette[i % palette.length];

      this.particles.push({
        x: x + (Math.random() - 0.5) * 36,
        y: y + (Math.random() - 0.5) * 16,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 50,
        size: 5 + Math.random() * 5.5,
        color,
        alpha: 1,
        life: 0,
        maxLife: 0.8 + Math.random() * 0.55,
        gravity: 210,
        drag: 0.95,
        shape: i % 3 === 0 ? 'star' : i % 3 === 1 ? 'diamond' : 'spark',
        rotation: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 11,
        trail: i % 2 === 0 ? [{ x, y }] : undefined,
      });
    }

    this.rings.push({
      x,
      y,
      radius: 12,
      maxRadius: 145,
      color: '#fde047',
      lineWidth: 5,
      life: 0,
      maxLife: 0.65,
    });

    this.triggerScreenShake(9);
  }

  /**
   * 스토리 컷신/선택지 보상 연출용:
   * 황금빛 별모양(star)과 보랏빛 룬 파편(rune), 상승하는 마법 불씨(ember)가 아름답게 퍼져 나가는 파티클 효과
   */
         burstStoryMagic(x        , y        )       {
    const starColors = ['#fde047', '#fbbf24', '#fef08a', '#ffffff'];
    const runeColors = ['#c084fc', '#a855f7', '#e879f9', '#d8b4fe'];
    const emberColors = ['#f59e0b', '#fb923c', '#fde047', '#f472b6'];

    // 1. Golden Star burst & Violet Rune shards radiating outward
    const burstCount = 36;
    for (let i = 0; i < burstCount; i++) {
      const isStar = i % 2 === 0;
      const angle = (Math.PI * 2 * i) / burstCount + (Math.random() - 0.5) * 0.3;
      const speed = 60 + Math.random() * 145;
      const color = isStar
        ? starColors[i % starColors.length]
        : runeColors[i % runeColors.length];

      this.particles.push({
        x: x + (Math.random() - 0.5) * 20,
        y: y + (Math.random() - 0.5) * 14,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 25,
        size: isStar ? 5 + Math.random() * 4.5 : 5.5 + Math.random() * 4,
        color,
        alpha: 1,
        life: 0,
        maxLife: 0.75 + Math.random() * 0.45,
        gravity: isStar ? 55 : 30,
        drag: 0.94,
        shape: isStar ? 'star' : 'rune',
        rotation: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 7,
        trail: isStar ? [{ x, y }] : undefined,
      });
    }

    // 2. Rising Magical Embers floating upward gracefully
    const emberCount = 24;
    for (let i = 0; i < emberCount; i++) {
      const spreadX = (Math.random() - 0.5) * 160;
      const spreadY = (Math.random() - 0.5) * 40;
      const color = emberColors[i % emberColors.length];

      this.particles.push({
        x: x + spreadX,
        y: y + spreadY,
        vx: (Math.random() - 0.5) * 45,
        vy: -(55 + Math.random() * 95),
        size: 3.5 + Math.random() * 3.5,
        color,
        alpha: 1,
        life: 0,
        maxLife: 0.9 + Math.random() * 0.55,
        gravity: -40, // Buoyant upward drift
        drag: 0.97,
        shape: 'ember',
        rotation: -Math.PI / 2 + (Math.random() - 0.5) * 0.5,
        vRot: (Math.random() - 0.5) * 3,
        trail: [{ x: x + spreadX, y: y + spreadY }],
      });
    }

    // Dual mystical shockwave rings (Gold + Arcane Violet)
    this.rings.push({
      x,
      y,
      radius: 10,
      maxRadius: 115,
      color: '#fde047',
      lineWidth: 3.5,
      life: 0,
      maxLife: 0.55,
    });
    this.rings.push({
      x,
      y,
      radius: 6,
      maxRadius: 150,
      color: '#c084fc',
      lineWidth: 2.5,
      life: 0,
      maxLife: 0.72,
    });
  }

  /**
   * 무기/마법/포션으로 몬스터를 타격했을 때 검기 슬래시/화염/마법 입자와 충격파가 터지는 전투 이펙트
   */
         burstCombatHit(x        , y        , category        , isCritical         )       {
    const isWeapon = category === 'weapon' || category === 'generator_forge';
    const isPotion = category === 'potion' || category === 'generator_alchemy';

    const palette = isWeapon
      ? ['#f97316', '#fbbf24', '#ef4444', '#ffffff', '#fde047']
      : isPotion
      ? ['#34d399', '#10b981', '#a7f3d0', '#fde047', '#38bdf8']
      : ['#c084fc', '#e879f9', '#38bdf8', '#fde047', '#ffffff'];

    const primaryColor = isCritical ? '#fde047' : palette[0];
    const count = isCritical ? 48 : 30;

    // If weapon or critical, spawn dramatic crescent sword slash arcs
    if (isWeapon || isCritical) {
      const slashCount = isCritical ? 3 : 2;
      for (let s = 0; s < slashCount; s++) {
        const slashAngle = -Math.PI / 4 + (s - 0.5) * 1.1 + (Math.random() - 0.5) * 0.3;
        this.particles.push({
          x: x + (Math.random() - 0.5) * 12,
          y: y + (Math.random() - 0.5) * 12,
          vx: Math.cos(slashAngle) * 35,
          vy: Math.sin(slashAngle) * 35,
          size: (isCritical ? 22 : 16) + s * 3,
          color: s === 0 && isCritical ? '#fde047' : '#ffffff',
          alpha: 1,
          life: 0,
          maxLife: 0.28 + s * 0.05,
          gravity: 0,
          drag: 0.9,
          shape: 'slash',
          rotation: slashAngle,
          vRot: (s % 2 === 0 ? 1 : -1) * 2.5,
        });
      }
    }

    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.4;
      const speed = (isCritical ? 95 : 70) + Math.random() * (isCritical ? 210 : 150);
      const color = palette[i % palette.length];

      let shape                    = 'spark';
      if (isWeapon) {
        shape = i % 3 === 0 ? 'spark' : i % 3 === 1 ? 'ember' : 'star';
      } else if (isPotion) {
        shape = i % 3 === 0 ? 'ember' : i % 3 === 1 ? 'circle' : 'diamond';
      } else {
        shape = i % 3 === 0 ? 'rune' : i % 3 === 1 ? 'star' : 'diamond';
      }

      this.particles.push({
        x: x + (Math.random() - 0.5) * 16,
        y: y + (Math.random() - 0.5) * 16,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - (isPotion ? 40 : 20),
        size: (isCritical ? 5.5 : 4.2) + Math.random() * 4.5,
        color,
        alpha: 1,
        life: 0,
        maxLife: 0.45 + Math.random() * 0.35,
        gravity: isPotion ? -30 : 130,
        drag: 0.93,
        shape,
        rotation: angle,
        vRot: (Math.random() - 0.5) * 10,
        trail: i % 2 === 0 ? [{ x, y }] : undefined,
      });
    }

    // Combat impact shockwave rings
    this.rings.push({
      x,
      y,
      radius: 8,
      maxRadius: isCritical ? 105 : 72,
      color: primaryColor,
      lineWidth: isCritical ? 5 : 3.5,
      life: 0,
      maxLife: isCritical ? 0.45 : 0.34,
    });

    if (isCritical) {
      this.rings.push({
        x,
        y,
        radius: 4,
        maxRadius: 135,
        color: '#ef4444',
        lineWidth: 3,
        life: 0,
        maxLife: 0.55,
      });
    }

    this.triggerScreenShake(isCritical ? 10 : 6);
  }

  /**
   * 위로 떠오르며 페이드아웃되는 세련된 플로팅 텍스트 렌더링
   */
         spawnFloatingText(
    x        ,
    y        ,
    text        ,
    style                    = 'normal'
  )       {
    // Slight horizontal jitter so stacked texts remain readable
    const jitterX = (Math.random() - 0.5) * 18;
    const isBig = style === 'critical' || style === 'cross' || style === 'discovery';

    this.floatingTexts.push({
      x: x + jitterX,
      y: y - 10,
      vx: (Math.random() - 0.5) * 14,
      vy: isBig ? -72 : -56,
      text,
      style,
      life: 0,
      maxLife: isBig ? 1.25 : 0.95,
      scale: isBig ? 1.25 : 1.0,
    });
  }

  /**
   * `.game-shell` 또는 `document.body`에 짧은 타격감 흔들림 효과 부여
   */
         triggerScreenShake(intensity         = 6)       {
    const target = (document.querySelector('.game-shell')               ) || document.body;
    if (!target) return;

    if (this.shakeTimer !== null) {
      window.clearTimeout(this.shakeTimer);
    }

    const start = performance.now();
    const duration = 240;

    const stepShake = (now        ) => {
      const elapsed = now - start;
      if (elapsed >= duration) {
        target.style.transform = '';
        return;
      }
      const progress = 1 - elapsed / duration;
      const offset = intensity * progress;
      const dx = (Math.random() * 2 - 1) * offset;
      const dy = (Math.random() * 2 - 1) * offset;
      target.style.transform = `translate3d(${dx.toFixed(1)}px, ${dy.toFixed(1)}px, 0)`;
      requestAnimationFrame(stepShake);
    };

    requestAnimationFrame(stepShake);
    this.shakeTimer = window.setTimeout(() => {
      target.style.transform = '';
      this.shakeTimer = null;
    }, duration + 20);
  }

          loop = (now        )       => {
    const dt = Math.min(0.05, Math.max(0.001, (now - this.lastTime) / 1000));
    this.lastTime = now;

    this.updateAndRender(dt);
    this.rafId = requestAnimationFrame(this.loop);
  };

          updateAndRender(dt        )       {
    const ctx = this.ctx;
    const width = window.innerWidth;
    const height = window.innerHeight;

    ctx.clearRect(0, 0, width, height);

    // 1. Update & Draw Shockwave Rings
    for (let i = this.rings.length - 1; i >= 0; i--) {
      const r = this.rings[i];
      r.life += dt;
      if (r.life >= r.maxLife) {
        this.rings.splice(i, 1);
        continue;
      }

      const t = r.life / r.maxLife;
      const easeOut = 1 - Math.pow(1 - t, 3);
      const currentRadius = r.radius + (r.maxRadius - r.radius) * easeOut;
      const alpha = Math.max(0, 1 - t);

      ctx.save();
      ctx.beginPath();
      ctx.arc(r.x, r.y, currentRadius, 0, Math.PI * 2);
      ctx.strokeStyle = r.color;
      ctx.globalAlpha = alpha * 0.85;
      ctx.lineWidth = Math.max(0.5, r.lineWidth * (1 - t * 0.7));
      ctx.shadowColor = r.color;
      ctx.shadowBlur = 10;
      ctx.stroke();
      ctx.restore();
    }

    // 2. Update & Draw Particles
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.life += dt;
      if (p.life >= p.maxLife) {
        this.particles.splice(i, 1);
        continue;
      }

      const t = p.life / p.maxLife;
      p.vx *= Math.pow(p.drag, dt * 60);
      p.vy *= Math.pow(p.drag, dt * 60);
      p.vy += p.gravity * dt;
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.rotation += p.vRot * dt;
      p.alpha = Math.max(0, 1 - Math.pow(t, 1.5));

      if (p.trail) {
        p.trail.push({ x: p.x, y: p.y });
        if (p.trail.length > 5) {
          p.trail.shift();
        }
      }

      ctx.save();
      ctx.globalAlpha = p.alpha;

      // Draw subtle starlight trail if present
      if (p.trail && p.trail.length > 1) {
        ctx.beginPath();
        ctx.moveTo(p.trail[0].x, p.trail[0].y);
        for (let k = 1; k < p.trail.length; k++) {
          ctx.lineTo(p.trail[k].x, p.trail[k].y);
        }
        ctx.strokeStyle = p.color;
        ctx.lineWidth = Math.max(1, p.size * 0.45 * (1 - t));
        ctx.globalAlpha = p.alpha * 0.45;
        ctx.stroke();
        ctx.globalAlpha = p.alpha;
      }

      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.fillStyle = p.color;
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 8;

      const sz = Math.max(0.5, p.size * (1 - t * 0.4));

      if (p.shape === 'star') {
        this.drawStar(ctx, 0, 0, 4, sz * 1.25, sz * 0.45);
      } else if (p.shape === 'slash') {
        // Crescent sword slash arc
        ctx.beginPath();
        ctx.arc(0, 0, sz * 1.4, -Math.PI * 0.42, Math.PI * 0.42, false);
        ctx.quadraticCurveTo(sz * 0.55, 0, Math.cos(-Math.PI * 0.42) * sz * 1.4, Math.sin(-Math.PI * 0.42) * sz * 1.4);
        ctx.closePath();
        ctx.fill();
      } else if (p.shape === 'rune') {
        // Mystical arcane rune shard (hollow crystal polygon + inner glyph line)
        ctx.beginPath();
        ctx.moveTo(0, -sz * 1.35);
        ctx.lineTo(sz * 0.95, -sz * 0.35);
        ctx.lineTo(sz * 0.65, sz * 1.15);
        ctx.lineTo(-sz * 0.65, sz * 1.15);
        ctx.lineTo(-sz * 0.95, -sz * 0.35);
        ctx.closePath();
        ctx.strokeStyle = p.color;
        ctx.lineWidth = Math.max(1.2, sz * 0.28);
        ctx.stroke();
        ctx.globalAlpha = p.alpha * 0.45;
        ctx.fill();
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.moveTo(0, -sz * 0.75);
        ctx.lineTo(0, sz * 0.65);
        ctx.stroke();
      } else if (p.shape === 'ember') {
        // Rising glowing ember droplet
        ctx.beginPath();
        ctx.moveTo(sz * 1.3, 0);
        ctx.quadraticCurveTo(0, sz * 0.7, -sz * 1.1, 0);
        ctx.quadraticCurveTo(0, -sz * 0.7, sz * 1.3, 0);
        ctx.closePath();
        ctx.fill();
      } else if (p.shape === 'diamond') {
        ctx.beginPath();
        ctx.moveTo(0, -sz * 1.2);
        ctx.lineTo(sz * 0.85, 0);
        ctx.lineTo(0, sz * 1.2);
        ctx.lineTo(-sz * 0.85, 0);
        ctx.closePath();
        ctx.fill();
      } else if (p.shape === 'spark') {
        ctx.beginPath();
        ctx.ellipse(0, 0, sz * 1.5, sz * 0.38, 0, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.beginPath();
        ctx.arc(0, 0, sz * 0.75, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    }

    // 3. Update & Draw Floating Texts
    for (let i = this.floatingTexts.length - 1; i >= 0; i--) {
      const ft = this.floatingTexts[i];
      ft.life += dt;
      if (ft.life >= ft.maxLife) {
        this.floatingTexts.splice(i, 1);
        continue;
      }

      const t = ft.life / ft.maxLife;
      ft.x += ft.vx * dt;
      ft.y += ft.vy * dt;
      ft.vy *= Math.pow(0.92, dt * 60);

      // Elastic pop-in scale in the first 18% of lifetime
      let popScale = ft.scale;
      if (t < 0.18) {
        const p = t / 0.18;
        popScale = ft.scale * (0.6 + 0.55 * Math.sin(p * Math.PI * 0.85));
      }

      const alpha = t < 0.7 ? 1 : Math.max(0, 1 - (t - 0.7) / 0.3);

      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.translate(ft.x, ft.y);
      ctx.scale(popScale, popScale);

      const { fill, stroke, glow, fontSize } = this.getStyleColors(ft.style);
      ctx.font = `900 ${fontSize}px 'Pretendard', 'Segoe UI', system-ui, sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      ctx.shadowColor = glow;
      ctx.shadowBlur = 12;
      ctx.lineWidth = 4;
      ctx.strokeStyle = stroke;
      ctx.strokeText(ft.text, 0, 0);

      ctx.fillStyle = fill;
      ctx.fillText(ft.text, 0, 0);

      ctx.restore();
    }
  }

          drawStar(
    ctx                          ,
    cx        ,
    cy        ,
    spikes        ,
    outerRadius        ,
    innerRadius        
  )       {
    let rot = (Math.PI / 2) * 3;
    const step = Math.PI / spikes;

    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius);
    for (let i = 0; i < spikes; i++) {
      ctx.lineTo(cx + Math.cos(rot) * outerRadius, cy + Math.sin(rot) * outerRadius);
      rot += step;
      ctx.lineTo(cx + Math.cos(rot) * innerRadius, cy + Math.sin(rot) * innerRadius);
      rot += step;
    }
    ctx.lineTo(cx, cy - outerRadius);
    ctx.closePath();
    ctx.fill();
  }

          getStyleColors(style                   )   
                 
                   
                 
                     
    {
    switch (style) {
      case 'critical':
        return {
          fill: '#fde047',
          stroke: '#78350f',
          glow: '#f59e0b',
          fontSize: 20,
        };
      case 'cross':
        return {
          fill: '#f0abfc',
          stroke: '#4a044e',
          glow: '#c084fc',
          fontSize: 20,
        };
      case 'gold':
        return {
          fill: '#fbbf24',
          stroke: '#451a03',
          glow: '#f59e0b',
          fontSize: 17,
        };
      case 'energy':
        return {
          fill: '#38bdf8',
          stroke: '#082f49',
          glow: '#0ea5e9',
          fontSize: 17,
        };
      case 'discovery':
        return {
          fill: '#6ee7b7',
          stroke: '#064e3b',
          glow: '#10b981',
          fontSize: 19,
        };
      default:
        return {
          fill: '#f8fafc',
          stroke: '#0f172a',
          glow: '#64748b',
          fontSize: 16,
        };
    }
  }
}


  // --- Module: views/worldmap.js ---
/**
 * World Map Zone Scene & Character Portrait SVG Renderer
 * Renders dynamic multi-stage restoration scenes (viewBox="0 0 320 180")
 * and character portraits (viewBox="0 0 80 80") for Arcane Forge: Merge & Restore.
 */
function renderZoneSceneSvg(
  zoneId        ,
  completedSteps        ,
  maxSteps        
)         {
  const stage = Math.max(0, Math.min(completedSteps, maxSteps));

  switch (zoneId) {
    case 'zone_forge':
      return renderForgeScene(stage);
    case 'zone_alchemy':
      return renderAlchemyScene(stage);
    case 'zone_altar':
      return renderAltarScene(stage);
    case 'zone_library':
      return renderLibraryScene(stage);
    case 'zone_sanctum':
      return renderSanctumScene(stage);
    default:
      return renderForgeScene(stage);
  }
}

function renderCobwebsAndCracks(stage        )         {
  if (stage >= 2) return '';
  const opacity = stage === 0 ? '0.65' : '0.28';
  return `
    <g opacity="${opacity}" stroke="#64748b" stroke-width="1" fill="none">
      <!-- Top-left cobweb -->
      <path d="M0,0 L48,0 M0,0 L42,26 M0,0 L24,44 M0,0 L0,50"/>
      <path d="M16,0 Q14,12 0,16 M30,0 Q26,20 0,32 M42,0 Q34,28 0,46"/>
      <!-- Top-right cobweb -->
      <path d="M320,0 L275,0 M320,0 L282,28 M320,0 L298,44"/>
      <path d="M300,0 Q302,14 320,18 M286,0 Q290,22 320,34"/>
      <!-- Floor cracks & rubble -->
      <path d="M40,155 L58,148 L70,156 L84,151" stroke="#334155" stroke-width="1.5"/>
      <path d="M235,158 L250,149 L268,154" stroke="#334155" stroke-width="1.5"/>
      ${
        stage === 0
          ? `<polygon points="32,162 46,149 58,162" fill="#334155" stroke="none"/>
             <polygon points="255,164 268,150 282,164" fill="#334155" stroke="none"/>
             <circle cx="63" cy="160" r="4" fill="#475569" stroke="none"/>`
          : ''
      }
    </g>
  `;
}

function renderMasterworkAura(color1        , color2        )         {
  return `
    <g class="scene-master-aura">
      <circle cx="160" cy="90" r="76" fill="none" stroke="${color1}" stroke-width="1.2" stroke-dasharray="6 4" opacity="0.55">
        <animateTransform attributeName="transform" type="rotate" from="0 160 90" to="360 160 90" dur="18s" repeatCount="indefinite"/>
      </circle>
      <circle cx="160" cy="90" r="64" fill="none" stroke="${color2}" stroke-width="1" stroke-dasharray="3 6" opacity="0.45">
        <animateTransform attributeName="transform" type="rotate" from="360 160 90" to="0 160 90" dur="12s" repeatCount="indefinite"/>
      </circle>
      <!-- Floating sparkles -->
      <circle cx="70" cy="45" r="2" fill="#fde68a">
        <animate attributeName="opacity" values="0.2;1;0.2" dur="2.4s" repeatCount="indefinite"/>
      </circle>
      <circle cx="252" cy="40" r="2.2" fill="#fde68a">
        <animate attributeName="opacity" values="1;0.2;1" dur="2.8s" repeatCount="indefinite"/>
      </circle>
      <circle cx="110" cy="28" r="1.6" fill="${color1}">
        <animate attributeName="opacity" values="0.3;0.95;0.3" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="215" cy="26" r="1.8" fill="${color2}">
        <animate attributeName="opacity" values="0.9;0.2;0.9" dur="2.2s" repeatCount="indefinite"/>
      </circle>
    </g>
  `;
}

/**
 * 1. 드워프 화로 대장간 (zone_forge)
 */
function renderForgeScene(stage        )         {
  const bgTop = stage === 0 ? '#11131a' : stage === 1 ? '#1c1417' : stage === 2 ? '#291513' : '#3b170e';
  const bgBottom = stage === 0 ? '#1e2230' : stage === 1 ? '#2d1e22' : stage === 2 ? '#451f16' : '#5c2310';
  const furnaceGlow = stage === 0 ? '#1e293b' : stage === 1 ? '#ea580c' : stage === 2 ? '#f97316' : '#facc15';

  return `
    <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" class="zone-scene-svg stage-${stage}">
      <defs>
        <linearGradient id="forgeBg_${stage}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="${bgTop}"/>
          <stop offset="100%" stop-color="${bgBottom}"/>
        </linearGradient>
        <radialGradient id="forgeFire_${stage}" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#fef08a" stop-opacity="${stage > 0 ? 0.95 : 0}"/>
          <stop offset="50%" stop-color="${furnaceGlow}" stop-opacity="${stage > 0 ? 0.75 : 0.1}"/>
          <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
        </radialGradient>
      </defs>

      <!-- Background & Stone Wall -->
      <rect width="320" height="180" fill="url(#forgeBg_${stage})"/>
      <rect x="0" y="142" width="320" height="38" fill="#181824"/>
      <line x1="0" y1="142" x2="320" y2="142" stroke="${stage === 3 ? '#f59e0b' : '#334155'}" stroke-width="2"/>

      <!-- Ambient Fire Glow -->
      ${stage > 0 ? `<circle cx="160" cy="95" r="${55 + stage * 22}" fill="url(#forgeFire_${stage})"/>` : ''}
      ${stage === 3 ? renderMasterworkAura('#f59e0b', '#fbbf24') : ''}

      <!-- Left Weapon Rack -->
      <g transform="translate(26, 68)">
        <rect x="0" y="0" width="44" height="74" rx="3" fill="#27273a" stroke="#475569" stroke-width="1.5"/>
        <line x1="4" y1="24" x2="40" y2="24" stroke="#64748b" stroke-width="2"/>
        <line x1="4" y1="50" x2="40" y2="50" stroke="#64748b" stroke-width="2"/>
        ${
          stage >= 2
            ? `<path d="M14,8 L14,64 M10,18 L18,18" stroke="#e2e8f0" stroke-width="2.5" stroke-linecap="round"/>
               <path d="M30,10 L30,64 M25,20 L35,20" stroke="${stage === 3 ? '#facc15' : '#94a3b8'}" stroke-width="2.5" stroke-linecap="round"/>`
            : `<path d="M16,38 L22,66" stroke="#64748b" stroke-width="2"/>`
        }
      </g>

      <!-- Right Bellows / Lava Pipe -->
      <g transform="translate(242, 62)">
        <rect x="14" y="0" width="22" height="80" fill="#27273a" stroke="#475569" stroke-width="1.5"/>
        ${
          stage >= 2
            ? `<rect x="20" y="6" width="10" height="68" fill="${stage === 3 ? '#facc15' : '#f97316'}" opacity="0.85">
                 <animate attributeName="opacity" values="0.6;1;0.6" dur="1.8s" repeatCount="indefinite"/>
               </rect>`
            : ''
        }
      </g>

      <!-- Center Dwarven Stone Furnace -->
      <g transform="translate(105, 22)">
        <!-- Chimney & Arch -->
        <path d="M18,120 L26,10 L84,10 L92,120 Z" fill="#262936" stroke="${stage === 3 ? '#f59e0b' : '#475569'}" stroke-width="2"/>
        <!-- Dwarven Runes on Furnace Arch -->
        ${
          stage >= 2
            ? `<text x="55" y="34" text-anchor="middle" fill="${stage === 3 ? '#fef08a' : '#fb923c'}" font-size="11" font-family="serif" letter-spacing="3">ᚦ ᚱ ᚷ</text>`
            : `<path d="M38,18 L52,38 L46,52" stroke="#0f172a" stroke-width="2" fill="none"/>`
        }
        <!-- Furnace Hearth Opening -->
        <path d="M32,120 L32,68 A23,23 0 0,1 78,68 L78,120 Z" fill="#0f131d" stroke="${stage >= 1 ? '#ea580c' : '#334155'}" stroke-width="2"/>

        <!-- Fire inside Hearth -->
        ${
          stage === 0
            ? `<ellipse cx="55" cy="112" rx="16" ry="5" fill="#334155"/>`
            : `<g>
                 <path d="M36,118 Q44,75 55,68 Q66,75 74,118 Z" fill="#ea580c" opacity="0.9">
                   <animate attributeName="d" values="M36,118 Q44,75 55,68 Q66,75 74,118 Z;M36,118 Q48,62 55,58 Q62,62 74,118 Z;M36,118 Q44,75 55,68 Q66,75 74,118 Z" dur="1.4s" repeatCount="indefinite"/>
                 </path>
                 <path d="M43,118 Q50,86 55,78 Q60,86 67,118 Z" fill="#facc15">
                   <animate attributeName=" opacity" values="0.75;1;0.75" dur="0.9s" repeatCount="indefinite"/>
                 </path>
               </g>`
        }
      </g>

      <!-- Foreground Anvil -->
      <g transform="translate(128, 122)">
        ${
          stage === 0
            ? `<!-- Tilted broken anvil -->
               <g transform="rotate(14 32 20)">
                 <path d="M12,26 L52,26 L46,14 L18,14 Z" fill="#475569"/>
                 <path d="M6,6 L42,6 L40,14 L12,14 Z" fill="#64748b"/>
               </g>`
            : `<!-- Restored Anvil -->
               <path d="M12,30 L52,30 L46,16 L18,16 Z" fill="#334155" stroke="#64748b" stroke-width="1"/>
               <path d="M2,6 L58,6 L50,16 L14,16 Z" fill="${stage === 3 ? '#e2e8f0' : '#94a3b8'}" stroke="${stage === 3 ? '#f59e0b' : '#cbd5e1'}" stroke-width="1.5"/>
               ${
                 stage === 3
                   ? `<!-- Glowing Masterwork Sword on Anvil -->
                      <line x1="12" y1="3" x2="52" y2="3" stroke="#fef08a" stroke-width="3" stroke-linecap="round">
                        <animate attributeName="opacity" values="0.7;1;0.7" dur="1.2s" repeatCount="indefinite"/>
                      </line>`
                   : ''
               }`
        }
      </g>

      ${renderCobwebsAndCracks(stage)}
    </svg>
  `;
}

/**
 * 2. 연금술 증류 탑 (zone_alchemy)
 */
function renderAlchemyScene(stage        )         {
  const bgTop = stage === 0 ? '#0f161e' : stage === 1 ? '#0e2229' : stage === 2 ? '#0c2e36' : '#09383e';
  const bgBottom = stage === 0 ? '#18212d' : stage === 1 ? '#16333b' : stage === 2 ? '#13484c' : '#115e59';
  const liquidColor = stage === 0 ? '#334155' : stage === 1 ? '#10b981' : stage === 2 ? '#06b6d4' : '#34d399';

  return `
    <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" class="zone-scene-svg stage-${stage}">
      <defs>
        <linearGradient id="alchBg_${stage}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="${bgTop}"/>
          <stop offset="100%" stop-color="${bgBottom}"/>
        </linearGradient>
        <radialGradient id="alchGlow_${stage}" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="${liquidColor}" stop-opacity="${stage > 0 ? 0.55 : 0}"/>
          <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
        </radialGradient>
      </defs>

      <rect width="320" height="180" fill="url(#alchBg_${stage})"/>
      <rect x="0" y="142" width="320" height="38" fill="#131c26"/>
      <line x1="0" y1="142" x2="320" y2="142" stroke="${stage === 3 ? '#34d399' : '#334155'}" stroke-width="2"/>

      ${stage > 0 ? `<circle cx="160" cy="92" r="${60 + stage * 20}" fill="url(#alchGlow_${stage})"/>` : ''}
      ${stage === 3 ? renderMasterworkAura('#34d399', '#a855f7') : ''}

      <!-- Left Herb & Potion Shelf -->
      <g transform="translate(22, 42)">
        <rect x="0" y="0" width="54" height="100" rx="3" fill="#1e293b" stroke="#475569" stroke-width="1.5"/>
        <line x1="4" y1="32" x2="50" y2="32" stroke="#475569" stroke-width="2"/>
        <line x1="4" y1="66" x2="50" y2="66" stroke="#475569" stroke-width="2"/>
        ${
          stage >= 1
            ? `<circle cx="18" cy="22" r="7" fill="#ec4899" opacity="0.85"/>
               <circle cx="36" cy="22" r="7" fill="#38bdf8" opacity="0.85"/>`
            : ''
        }
        ${
          stage >= 2
            ? `<rect x="12" y="46" width="12" height="18" rx="3" fill="#a855f7"/>
               <rect x="30" y="44" width="12" height="20" rx="3" fill="#10b981"/>`
            : ''
        }
      </g>

      <!-- Connecting Copper & Glass Tubes -->
      ${
        stage >= 2
          ? `<path d="M160,42 C195,42 200,82 232,82" fill="none" stroke="${stage === 3 ? '#fbbf24' : '#d97706'}" stroke-width="4"/>
             <path d="M160,42 C195,42 200,82 232,82" fill="none" stroke="#6ee7b7" stroke-width="1.5" stroke-dasharray="4 4">
               <animate attributeName="stroke-dashoffset" from="16" to="0" dur="1s" repeatCount="indefinite"/>
             </path>`
          : ''
      }

      <!-- Center Grand Alchemical Alembic & Cauldron -->
      <g transform="translate(115, 28)">
        <!-- Brass Stand -->
        <line x1="20" y1="114" x2="32" y2="76" stroke="#b45309" stroke-width="3"/>
        <line x1="70" y1="114" x2="58" y2="76" stroke="#b45309" stroke-width="3"/>
        <ellipse cx="45" cy="76" rx="24" ry="6" fill="none" stroke="#d97706" stroke-width="2.5"/>

        <!-- Glass Flask Body -->
        <circle cx="45" cy="60" r="28" fill="#0f172a" stroke="${stage === 3 ? '#fde68a' : '#94a3b8'}" stroke-width="2"/>
        <rect x="38" y="14" width="14" height="22" fill="#0f172a" stroke="${stage === 3 ? '#fde68a' : '#94a3b8'}" stroke-width="2"/>

        ${
          stage === 0
            ? `<!-- Cracked empty flask -->
               <path d="M30,48 L46,60 L38,74 L56,80" stroke="#64748b" stroke-width="1.5" fill="none"/>`
            : `<!-- Bubbling Emerald/Elixir Liquid -->
               <path d="M20,65 Q45,57 70,65 A26,26 0 0,1 20,65 Z" fill="${liquidColor}" opacity="0.9">
                 <animate attributeName="d" values="M20,65 Q35,59 45,65 Q55,71 70,65 A26,26 0 0,1 20,65 Z;M20,65 Q35,71 45,65 Q55,59 70,65 A26,26 0 0,1 20,65 Z;M20,65 Q35,59 45,65 Q55,71 70,65 A26,26 0 0,1 20,65 Z" dur="2.2s" repeatCount="indefinite"/>
               </path>
               <circle cx="38" cy="70" r="3" fill="#a7f3d0">
                 <animate attributeName="cy" values="74;52" dur="1.5s" repeatCount="indefinite"/>
                 <animate attributeName="opacity" values="0.9;0" dur="1.5s" repeatCount="indefinite"/>
               </circle>
               <circle cx="52" cy="74" r="2.5" fill="#a7f3d0">
                 <animate attributeName="cy" values="76;50" dur="1.9s" repeatCount="indefinite"/>
                 <animate attributeName="opacity" values="0.9;0" dur="1.9s" repeatCount="indefinite"/>
               </circle>
               <!-- Burner flame under flask -->
               <path d="M38,108 Q45,90 52,108 Z" fill="#38bdf8">
                 <animate attributeName="opacity" values="0.6;1;0.6" dur="0.8s" repeatCount="indefinite"/>
               </path>`
        }
      </g>

      <!-- Right Condensation Receiver Spire -->
      <g transform="translate(222, 68)">
        <rect x="8" y="54" width="36" height="20" rx="2" fill="#334155" stroke="#64748b"/>
        <ellipse cx="26" cy="34" rx="18" ry="22" fill="#0f172a" stroke="${stage >= 2 ? '#38bdf8' : '#475569'}" stroke-width="2"/>
        ${
          stage >= 2
            ? `<ellipse cx="26" cy="40" rx="14" ry="12" fill="${stage === 3 ? '#c084fc' : '#06b6d4'}" opacity="0.85"/>`
            : ''
        }
      </g>

      ${renderCobwebsAndCracks(stage)}
    </svg>
  `;
}

/**
 * 3. 마법 부여 제단 (zone_altar)
 */
function renderAltarScene(stage        )         {
  const bgTop = stage === 0 ? '#13111c' : stage === 1 ? '#1e1633' : stage === 2 ? '#2b194d' : '#3b1d6e';
  const bgBottom = stage === 0 ? '#1c1926' : stage === 1 ? '#2a1f47' : stage === 2 ? '#3f2269' : '#581c87';
  const runeColor = stage === 0 ? '#475569' : stage === 1 ? '#818cf8' : stage === 2 ? '#c084fc' : '#f472b6';

  return `
    <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" class="zone-scene-svg stage-${stage}">
      <defs>
        <linearGradient id="altarBg_${stage}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="${bgTop}"/>
          <stop offset="100%" stop-color="${bgBottom}"/>
        </linearGradient>
        <radialGradient id="altarGlow_${stage}" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="${runeColor}" stop-opacity="${stage > 0 ? 0.65 : 0}"/>
          <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
        </radialGradient>
      </defs>

      <rect width="320" height="180" fill="url(#altarBg_${stage})"/>
      <rect x="0" y="142" width="320" height="38" fill="#161224"/>
      <line x1="0" y1="142" x2="320" y2="142" stroke="${stage === 3 ? '#e879f9' : '#334155'}" stroke-width="2"/>

      ${stage > 0 ? `<circle cx="160" cy="86" r="${62 + stage * 22}" fill="url(#altarGlow_${stage})"/>` : ''}
      ${stage === 3 ? renderMasterworkAura('#e879f9', '#38bdf8') : ''}

      <!-- Left & Right Rune Obelisks -->
      <g transform="translate(42, 48)">
        <polygon points="16,0 30,18 30,94 2,94 2,18" fill="#262138" stroke="${stage >= 1 ? runeColor : '#475569'}" stroke-width="1.5"/>
        ${
          stage >= 1
            ? `<text x="16" y="56" text-anchor="middle" fill="${runeColor}" font-size="14">ᛟ</text>`
            : ''
        }
      </g>
      <g transform="translate(246, 48)">
        <polygon points="16,0 30,18 30,94 2,94 2,18" fill="#262138" stroke="${stage >= 2 ? runeColor : '#475569'}" stroke-width="1.5"/>
        ${
          stage >= 2
            ? `<text x="16" y="56" text-anchor="middle" fill="${runeColor}" font-size="14">ᛉ</text>`
            : ''
        }
      </g>

      <!-- Center Stepped Pedestal -->
      <g transform="translate(106, 114)">
        <rect x="0" y="18" width="108" height="10" rx="2" fill="#2e2640" stroke="#64748b"/>
        <rect x="14" y="8" width="80" height="10" rx="2" fill="#3b3154" stroke="#64748b"/>
        <rect x="28" y="0" width="52" height="8" rx="2" fill="#4c3d6e" stroke="${stage >= 1 ? runeColor : '#64748b'}"/>
      </g>

      <!-- Floating Crystal & Arcane Magic Circle -->
      ${
        stage === 0
          ? `<!-- Shattered crystal shards on altar -->
             <polygon points="145,114 156,98 165,114" fill="#475569"/>
             <polygon points="164,114 174,102 180,114" fill="#64748b"/>`
          : `<g>
               <!-- Magic Circle behind crystal -->
               <circle cx="160" cy="70" r="34" fill="none" stroke="${runeColor}" stroke-width="1.5" stroke-dasharray="5 3" opacity="0.8">
                 <animateTransform attributeName="transform" type="rotate" from="0 160 70" to="360 160 70" dur="10s" repeatCount="indefinite"/>
               </circle>
               <!-- Levitating Mana Crystal -->
               <g>
                 <animateTransform attributeName="transform" type="translate" values="0,-4;0,4;0,-4" dur="2.6s" repeatCount="indefinite"/>
                 <polygon points="160,34 178,68 160,102 142,68" fill="${stage === 3 ? '#f0abfc' : '#a855f7'}" stroke="#ffffff" stroke-width="1.5"/>
                 <polygon points="160,34 178,68 160,74" fill="#e879f9" opacity="0.65"/>
               </g>
               ${
                 stage >= 2
                   ? `<!-- Energy Beams from Obelisks to Crystal -->
                      <line x1="58" y1="68" x2="142" y2="68" stroke="${runeColor}" stroke-width="2" stroke-dasharray="4 4" opacity="0.75">
                        <animate attributeName="stroke-dashoffset" from="16" to="0" dur="0.9s" repeatCount="indefinite"/>
                      </line>
                      <line x1="262" y1="68" x2="178" y2="68" stroke="${runeColor}" stroke-width="2" stroke-dasharray="4 4" opacity="0.75">
                        <animate attributeName="stroke-dashoffset" from="0" to="16" dur="0.9s" repeatCount="indefinite"/>
                      </line>`
                   : ''
               }
             </g>`
      }

      ${renderCobwebsAndCracks(stage)}
    </svg>
  `;
}

/**
 * 4. 고대 비전 서고 (zone_library)
 */
function renderLibraryScene(stage        )         {
  const bgTop = stage === 0 ? '#111520' : stage === 1 ? '#141d30' : stage === 2 ? '#172542' : '#1e2952';
  const bgBottom = stage === 0 ? '#1b2030' : stage === 1 ? '#1e2b45' : stage === 2 ? '#233863' : '#2e4482';
  const goldAccent = stage === 0 ? '#475569' : stage === 1 ? '#ca8a04' : stage === 2 ? '#eab308' : '#fef08a';

  return `
    <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" class="zone-scene-svg stage-${stage}">
      <defs>
        <linearGradient id="libBg_${stage}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="${bgTop}"/>
          <stop offset="100%" stop-color="${bgBottom}"/>
        </linearGradient>
      </defs>

      <rect width="320" height="180" fill="url(#libBg_${stage})"/>
      <rect x="0" y="142" width="320" height="38" fill="#141824"/>
      <line x1="0" y1="142" x2="320" y2="142" stroke="${stage === 3 ? '#facc15' : '#334155'}" stroke-width="2"/>

      ${stage === 3 ? renderMasterworkAura('#facc15', '#60a5fa') : ''}

      <!-- Left & Right Tall Arched Bookshelves -->
      <g transform="translate(20, 26)">
        <rect x="0" y="0" width="68" height="116" rx="4" fill="#1e1b2e" stroke="${goldAccent}" stroke-width="1.5"/>
        <line x1="4" y1="38" x2="64" y2="38" stroke="#475569" stroke-width="2"/>
        <line x1="4" y1="76" x2="64" y2="76" stroke="#475569" stroke-width="2"/>
        ${
          stage >= 1
            ? `<!-- Row of ancient tomes -->
               <rect x="10" y="16" width="8" height="20" fill="#ef4444"/>
               <rect x="20" y="14" width="9" height="22" fill="#3b82f6"/>
               <rect x="31" y="17" width="8" height="19" fill="#10b981"/>
               <rect x="42" y="15" width="10" height="21" fill="#a855f7"/>
               <rect x="12" y="54" width="9" height="20" fill="#f59e0b"/>
               <rect x="23" y="52" width="10" height="22" fill="#ec4899"/>
               <rect x="35" y="55" width="9" height="19" fill="#06b6d4"/>`
            : `<rect x="14" y="28" width="16" height="8" transform="rotate(-20 14 28)" fill="#475569"/>`
        }
      </g>

      <g transform="translate(232, 26)">
        <rect x="0" y="0" width="68" height="116" rx="4" fill="#1e1b2e" stroke="${goldAccent}" stroke-width="1.5"/>
        <line x1="4" y1="38" x2="64" y2="38" stroke="#475569" stroke-width="2"/>
        <line x1="4" y1="76" x2="64" y2="76" stroke="#475569" stroke-width="2"/>
        ${
          stage >= 2
            ? `<rect x="12" y="15" width="9" height="21" fill="#8b5cf6"/>
               <rect x="23" y="14" width="8" height="22" fill="#eab308"/>
               <rect x="33" y="16" width="10" height="20" fill="#14b8a6"/>
               <rect x="14" y="53" width="10" height="21" fill="#f97316"/>
               <rect x="26" y="54" width="9" height="20" fill="#6366f1"/>
               <rect x="38" y="52" width="10" height="22" fill="#ec4899"/>`
            : ''
        }
      </g>

      <!-- Center Celestial Armillary Sphere & Lectern -->
      <g transform="translate(160, 82)">
        <!-- Brass Rings of Armillary Sphere -->
        <circle cx="0" cy="-10" r="32" fill="none" stroke="${goldAccent}" stroke-width="2"/>
        <ellipse cx="0" cy="-10" rx="32" ry="12" fill="none" stroke="${goldAccent}" stroke-width="1.5" transform="rotate(28 0 -10)"/>
        <ellipse cx="0" cy="-10" rx="32" ry="12" fill="none" stroke="${goldAccent}" stroke-width="1.5" transform="rotate(-28 0 -10)"/>
        <circle cx="0" cy="-10" r="8" fill="${stage >= 2 ? '#38bdf8' : '#475569'}">
          ${stage >= 2 ? `<animate attributeName="r" values="7;10;7" dur="2s" repeatCount="indefinite"/>` : ''}
        </circle>

        <!-- Lectern Stand -->
        <path d="M-16,60 L-6,24 L6,24 L16,60 Z" fill="#334155" stroke="${goldAccent}" stroke-width="1.5"/>

        <!-- Floating Open Grimoire on Lectern -->
        ${
          stage >= 1
            ? `<g transform="translate(0, 14)">
                 <animateTransform attributeName="transform" type="translate" values="0,12;0,16;0,12" dur="2.4s" repeatCount="indefinite"/>
                 <path d="M-22,0 Q-11,-6 0,0 Q11,-6 22,0 L22,12 Q11,6 0,12 Q-11,6 -22,12 Z" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
                 <line x1="0" y1="0" x2="0" y2="12" stroke="#b45309" stroke-width="1.5"/>
               </g>`
            : ''
        }
      </g>

      ${renderCobwebsAndCracks(stage)}
    </svg>
  `;
}

/**
 * 5. 천공의 에테르 성소 (zone_sanctum)
 */
function renderSanctumScene(stage        )         {
  const bgTop = stage === 0 ? '#0c101d' : stage === 1 ? '#131c38' : stage === 2 ? '#1d2856' : '#261c69';
  const bgBottom = stage === 0 ? '#161d2f' : stage === 1 ? '#1e2c54' : stage === 2 ? '#312e81' : '#4c1d95';
  const aetherColor = stage === 0 ? '#475569' : stage === 1 ? '#38bdf8' : stage === 2 ? '#818cf8' : '#fde047';

  return `
    <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" class="zone-scene-svg stage-${stage}">
      <defs>
        <linearGradient id="sancBg_${stage}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="${bgTop}"/>
          <stop offset="100%" stop-color="${bgBottom}"/>
        </linearGradient>
        <radialGradient id="sancCore_${stage}" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="${stage > 0 ? 0.95 : 0.1}"/>
          <stop offset="45%" stop-color="${aetherColor}" stop-opacity="${stage > 0 ? 0.7 : 0}"/>
          <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
        </radialGradient>
      </defs>

      <rect width="320" height="180" fill="url(#sancBg_${stage})"/>

      <!-- Starfield background -->
      <circle cx="45" cy="30" r="1.2" fill="#e2e8f0" opacity="0.7"/>
      <circle cx="95" cy="22" r="1.5" fill="#e2e8f0" opacity="0.5"/>
      <circle cx="230" cy="25" r="1.4" fill="#e2e8f0" opacity="0.8"/>
      <circle cx="280" cy="42" r="1.2" fill="#e2e8f0" opacity="0.6"/>

      <rect x="0" y="142" width="320" height="38" fill="#0f172a"/>
      <line x1="0" y1="142" x2="320" y2="142" stroke="${stage === 3 ? '#fde047' : '#334155'}" stroke-width="2"/>

      <!-- Sanctum Core Radiance -->
      <circle cx="160" cy="82" r="${52 + stage * 28}" fill="url(#sancCore_${stage})"/>
      ${stage === 3 ? renderMasterworkAura('#fde047', '#38bdf8') : ''}

      <!-- Left & Right Celestial Pillars -->
      <g transform="translate(34, 32)">
        <rect x="0" y="0" width="22" height="110" fill="#1e293b" stroke="${aetherColor}" stroke-width="1.5"/>
        <rect x="-4" y="0" width="30" height="8" fill="#334155"/>
        <rect x="-4" y="102" width="30" height="8" fill="#334155"/>
      </g>
      <g transform="translate(264, 32)">
        <rect x="0" y="0" width="22" height="110" fill="#1e293b" stroke="${aetherColor}" stroke-width="1.5"/>
        <rect x="-4" y="0" width="30" height="8" fill="#334155"/>
        <rect x="-4" y="102" width="30" height="8" fill="#334155"/>
      </g>

      <!-- Center Astral Heart Engine -->
      <g transform="translate(160, 82)">
        ${
          stage === 0
            ? `<!-- Dormant broken rings -->
               <circle cx="0" cy="0" r="36" fill="none" stroke="#334155" stroke-width="3" stroke-dasharray="28 14"/>
               <circle cx="0" cy="0" r="14" fill="#1e293b" stroke="#475569" stroke-width="2"/>`
            : `<g>
                 <!-- Outer Gyro Ring -->
                 <circle cx="0" cy="0" r="46" fill="none" stroke="${aetherColor}" stroke-width="2.5" stroke-dasharray="22 8">
                   <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="14s" repeatCount="indefinite"/>
                 </circle>
                 <!-- Inner Gyro Ring -->
                 <circle cx="0" cy="0" r="32" fill="none" stroke="#c084fc" stroke-width="2" stroke-dasharray="14 6">
                   <animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="9s" repeatCount="indefinite"/>
                 </circle>
                 <!-- Pulsing Aether Star Core -->
                 <polygon points="0,-22 6,-6 22,0 6,6 0,22 -6,6 -22,0 -6,-6" fill="#ffffff">
                   <animateTransform attributeName="transform" type="scale" values="0.9;1.15;0.9" dur="1.8s" repeatCount="indefinite"/>
                 </polygon>
                 <circle cx="0" cy="0" r="10" fill="${aetherColor}"/>
               </g>`
        }
      </g>

      ${renderCobwebsAndCracks(stage)}
    </svg>
  `;
}

/**
 * Renders 80x80 SVG portrait for dialogue modal speakers:
 * - 'lia' | 'alchemist': Apprentice Alchemist Lia (리아)
 * - 'torg' | 'blacksmith': Dwarf Blacksmith Torg (토르그)
 * - 'narrator': Archmage Eldritch's Hologram & Arcane Grimoire Crest (대현자 엘드리치의 기록/내레이션)
 */
function renderPortraitSvg(
  role                                                          
)         {
  if (role === 'lia' || role === 'alchemist') {
    return `
      <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" class="portrait-svg portrait-alchemist">
        <defs>
          <linearGradient id="liaBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#2e1065"/>
            <stop offset="100%" stop-color="#0f172a"/>
          </linearGradient>
        </defs>
        <circle cx="40" cy="40" r="38" fill="url(#liaBg)" stroke="#a855f7" stroke-width="2.5"/>
        <!-- Cloak / Shoulders -->
        <path d="M14,72 Q40,56 66,72" fill="#4c1d95" stroke="#c084fc" stroke-width="1.5"/>
        <circle cx="40" cy="64" r="4" fill="#34d399" stroke="#fef08a" stroke-width="1.2"/>
        <!-- Silver-Lavender Hair Back -->
        <path d="M22,34 Q16,54 24,64 L56,64 Q64,54 58,34 Z" fill="#ddd6fe"/>
        <!-- Face -->
        <circle cx="40" cy="44" r="14" fill="#fde68a"/>
        <!-- Expressive Emerald Eyes & Smile -->
        <circle cx="35" cy="44" r="2.2" fill="#059669"/>
        <circle cx="45" cy="44" r="2.2" fill="#059669"/>
        <circle cx="34.3" cy="43.3" r="0.8" fill="#ffffff"/>
        <circle cx="44.3" cy="43.3" r="0.8" fill="#ffffff"/>
        <path d="M36,50 Q40,53 44,50" fill="none" stroke="#b45309" stroke-width="1.5" stroke-linecap="round"/>
        <!-- Alchemist Goggles on Hat Brim -->
        <path d="M12,30 Q40,22 68,30 L56,24 L40,6 L24,24 Z" fill="#581c87" stroke="#c084fc" stroke-width="1.5"/>
        <circle cx="33" cy="25" r="5" fill="#38bdf8" stroke="#fbbf24" stroke-width="2"/>
        <circle cx="47" cy="25" r="5" fill="#34d399" stroke="#fbbf24" stroke-width="2"/>
        <line x1="38" y1="25" x2="42" y2="25" stroke="#fbbf24" stroke-width="2"/>
      </svg>
    `;
  }

  if (role === 'narrator') {
    return `
      <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" class="portrait-svg portrait-narrator">
        <defs>
          <radialGradient id="eldritchBg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#1e1b4b"/>
            <stop offset="65%" stop-color="#0f172a"/>
            <stop offset="100%" stop-color="#090714"/>
          </radialGradient>
          <linearGradient id="grimoireGold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#fef08a"/>
            <stop offset="100%" stop-color="#d97706"/>
          </linearGradient>
        </defs>
        <circle cx="40" cy="40" r="38" fill="url(#eldritchBg)" stroke="url(#grimoireGold)" stroke-width="2.5"/>
        <!-- Rotating Arcane Astrolabe Ring -->
        <circle cx="40" cy="40" r="31" fill="none" stroke="#38bdf8" stroke-width="1.2" stroke-dasharray="5 3" opacity="0.75">
          <animateTransform attributeName="transform" type="rotate" from="0 40 40" to="360 40 40" dur="16s" repeatCount="indefinite"/>
        </circle>
        <circle cx="40" cy="40" r="25" fill="none" stroke="#c084fc" stroke-width="1" stroke-dasharray="3 4" opacity="0.65">
          <animateTransform attributeName="transform" type="rotate" from="360 40 40" to="0 40 40" dur="11s" repeatCount="indefinite"/>
        </circle>
        <!-- Holographic Star Crest -->
        <polygon points="40,14 45,29 60,34 45,39 40,54 35,39 20,34 35,29" fill="#38bdf8" opacity="0.35">
          <animate attributeName="opacity" values="0.25;0.65;0.25" dur="2.4s" repeatCount="indefinite"/>
        </polygon>
        <circle cx="40" cy="34" r="6" fill="#fef08a" stroke="#38bdf8" stroke-width="1.5"/>
        <!-- Floating Ancient Grimoire at Base -->
        <path d="M20,54 Q30,48 40,54 Q50,48 60,54 L60,64 Q50,58 40,64 Q30,58 20,64 Z" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.6"/>
        <line x1="40" y1="53" x2="40" y2="64" stroke="#b45309" stroke-width="1.8"/>
        <!-- Floating Runes -->
        <text x="24" y="28" fill="#fde68a" font-size="8" font-family="serif" opacity="0.85">ᛟ</text>
        <text x="52" y="28" fill="#c084fc" font-size="8" font-family="serif" opacity="0.85">ᛉ</text>
      </svg>
    `;
  }

  return `
    <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" class="portrait-svg portrait-blacksmith">
      <defs>
        <linearGradient id="torgBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#451a03"/>
          <stop offset="100%" stop-color="#0f172a"/>
        </linearGradient>
      </defs>
      <circle cx="40" cy="40" r="38" fill="url(#torgBg)" stroke="#f59e0b" stroke-width="2.5"/>
      <!-- Heavy Iron Pauldrons -->
      <path d="M10,72 Q40,54 70,72" fill="#334155" stroke="#94a3b8" stroke-width="2"/>
      <!-- Face -->
      <circle cx="40" cy="40" r="14" fill="#fdba74"/>
      <!-- Bushy Eyebrows & Fierce Eyes -->
      <line x1="29" y1="35" x2="37" y2="37" stroke="#dc2626" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="51" y1="35" x2="43" y2="37" stroke="#dc2626" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="34" cy="39" r="2" fill="#1e293b"/>
      <circle cx="46" cy="39" r="2" fill="#1e293b"/>
      <!-- Magnificent Braided Fiery Red Beard -->
      <path d="M24,42 Q22,66 40,74 Q58,66 56,42 Q48,47 40,47 Q32,47 24,42 Z" fill="#ea580c" stroke="#9a3412" stroke-width="1.5"/>
      <rect x="36" y="62" width="8" height="4" rx="1" fill="#facc15"/>
      <!-- Dwarven Horned Iron Helm -->
      <path d="M22,31 A18,16 0 0,1 58,31 Z" fill="#64748b" stroke="#cbd5e1" stroke-width="1.5"/>
      <path d="M22,28 Q12,20 16,12 Q22,20 26,24" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1.2"/>
      <path d="M58,28 Q68,20 64,12 Q58,20 54,24" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1.2"/>
      <rect x="38" y="18" width="4" height="14" fill="#f59e0b"/>
    </svg>
  `;
}


  // --- Module: main.js ---







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

})();
