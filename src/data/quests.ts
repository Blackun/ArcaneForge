import { QuestDef, WorkshopZoneDef } from '../types';

export const WORKSHOP_ZONES: WorkshopZoneDef[] = [
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

export const QUESTS: QuestDef[] = [
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
