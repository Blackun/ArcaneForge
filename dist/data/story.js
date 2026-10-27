
                                 
                  
                                    
                   
               
                                                                 
 

                               
             
                        
                
                   
                  
                                
                                                                
                  
                          
            
                   
                                                                  
                                                                  
    
 

export const STORY_IMAGES                                                                      = {
  prologue: './assets/story/prologue_ruins.png',
  chapter12: './assets/story/chapter12_workshop.png',
  chapter3: './assets/story/chapter3_altar.png',
  chapter45: './assets/story/chapter45_sanctum.png',
};

export const CHARACTER_PORTRAITS         
                                                           
        
  = {
  lia: './assets/story/char_lia.png',
  alchemist: './assets/story/char_lia.png',
  torg: './assets/story/char_torg.png',
  blacksmith: './assets/story/char_torg.png',
  narrator: './assets/story/prologue_ruins.png',
};

export function getCharacterPortrait(role        )         {
  if (role === 'torg' || role === 'blacksmith') {
    return CHARACTER_PORTRAITS.torg;
  }
  if (role === 'lia' || role === 'alchemist') {
    return CHARACTER_PORTRAITS.lia;
  }
  return CHARACTER_PORTRAITS.narrator;
}

export const STORY_CHAPTERS                 = [
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

export const COMPANION_CHATTER   
                 
                   
                    
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
