const characters = [
  {
    name: '한서린',
    type: 'original',
    typeLabel: 'ORIGINAL',
    subtitle: '원작 주인공 · 만년 F급 헌터',
    description: '25세. 금빛 장발과 청안. 다정하고 정의로우며 타인을 위해 자신을 희생할 정도로 책임감이 강하다. 히든 성장형 F급 직업 「무한」으로 모든 직업의 스킬을 배우고 합성·진화·초월한다.',
    meta: ['25세', '금빛 장발', '청안', '무한', 'F급 → 성장형']
  },
  {
    name: '서유리',
    type: 'original',
    typeLabel: 'ORIGINAL',
    subtitle: 'C급 방패기사 · 한서린의 오랜 친구',
    description: '바깥은 검정, 안쪽은 민트색인 투톤 단발과 회청안. 츤데레 성향에 잔소리가 많고 책임감이 강하다. 한서린이 F급이던 시절부터 함께했으며 전투에서는 방패로 동료를 보호한다.',
    meta: ['C급', '방패기사', '투톤 단발', '회청안', '서린의 친구']
  },
  {
    name: '한서윤',
    type: 'original',
    typeLabel: 'ORIGINAL',
    subtitle: 'S급 랭커 · 「서리검후」',
    description: '한서린의 친언니. 금발 포니테일과 짙은 청안. 오만한 성격의 최상위권 헌터이며 직업은 「서리검후」. 검과 서리 계열의 힘을 사용한다.',
    meta: ['S급', '랭커', '서리검후', '금발 포니테일', '친언니']
  },
  {
    name: '윤하린',
    type: 'reader',
    typeLabel: 'READER',
    subtitle: '원작 3회 완독 · 인간 원작 위키',
    description: '갈색 단발과 연두안. 평소에는 소심하고 낯을 가리지만 좋아하는 웹소설 이야기가 나오면 말이 많아진다. 한서린이 최애이며 공개 연재본의 사건과 설정을 매우 정확하게 기억한다.',
    meta: ['현실 인물', '3회 완독', '한서린 팬', '갈색 단발', '연두안']
  },
  {
    name: '서유나',
    type: 'reader',
    typeLabel: 'READER',
    subtitle: '원작 1회 속독 · 정보 활용형',
    description: '흑발 스트레이트 장발과 금안. 현실적이고 계산적이며 침착하다. 세부 기억은 부족하지만 기억나는 게이트·보상·사건 정보를 빠르게 생존과 성장에 활용한다.',
    meta: ['현실 인물', '1회 속독', '계산적', '흑발 장발', '금안']
  },
  {
    name: '무명',
    type: 'discarded',
    typeLabel: 'DISCARDED',
    subtitle: '첫 번째 폐기 인물 · 다크엘프',
    description: '은빛 장발, 보라안, 회보라 피부와 뾰족한 귀. 차갑고 냉소적이며 비꼬는 말투를 쓴다. 이름과 역할조차 정해지기 전에 폐기되었고, 범위와 한계가 정의되지 않은 그림자 조작 능력을 사용한다.',
    meta: ['다크엘프', '그림자 조작', '이름 없음', '첫 폐기 인물', '첫 게이트 보스']
  },
  {
    name: '카야 사하르',
    type: 'discarded',
    typeLabel: 'DISCARDED',
    subtitle: '알라바스타 왕국 하사신 부대 대장',
    description: '약간 탄 피부, 옅은 모래빛이 섞인 백색 단발과 금안. 자신의 왕국을 없앤 창작자에게 복수심을 품는다. 암살·와이어·은신술을 사용하며 게이트 전체를 폐기된 사막 왕국으로 바꿀 수 있다.',
    meta: ['알라바스타', '하사신', '암살', '와이어', '은신술']
  },
  {
    name: '한시온',
    type: 'discarded',
    typeLabel: 'DISCARDED',
    subtitle: '폐기 중간보스 · 「뇌신」',
    description: '민트색 장발과 청안. 중간보스로 만들었지만 최종보스보다 강해져 폐기되었다. 「뇌신」으로 전류를 자유롭게 다루며 전류화와 생체 전기 신호 간섭이 가능하다.',
    meta: ['뇌신', '전류 조작', '전류화', '뇌폭렬', '전격차단']
  },
  {
    name: '서하랑',
    type: 'discarded',
    typeLabel: 'DISCARDED',
    subtitle: '룬 시스템 폐기 인물 · 「룬의 지배자」',
    description: '주황색 포니테일과 주황안. 모든 룬의 형태·의미·조합을 기억하고 원하는 대상이나 장소에 각인한다. 효과를 제한 없이 중첩할 수 있어 준비 시간이 길수록 강해지는 영역 장악형 인물.',
    meta: ['룬의 지배자', '각인', '무제한 중첩', '영역 장악', '주황안']
  },
  {
    name: '차시연',
    type: 'discarded',
    typeLabel: 'DISCARDED',
    subtitle: '폐기된 최초 주인공 · 「극의」',
    description: '청색 단발과 금안. 한서린보다 먼저 설계된 원래 주인공. 단 하나의 스킬만 사용할 수 있는 대신 그 스킬의 위력과 성장성을 비정상적으로 끌어올리는 「극의」를 보유하며 선택 스킬은 F급 「찌르기」다.',
    meta: ['최초 주인공', '극의', '찌르기[F]', '청색 단발', '마지막 폐기 등장']
  },
  {
    name: '윤시아',
    type: 'reality',
    typeLabel: 'REALITY',
    subtitle: '걸그룹 「드림」의 인기 아이돌',
    description: '핑크색 트윈테일과 핑크안. 발랄하고 약간 엉뚱하며 판타지 소설과 모험을 좋아했다. 직업 「성광의 가희」로 별빛 계열 버프와 음파 계열 공격을 사용한다.',
    meta: ['아이돌', '드림', '성광의 가희', '별빛 버프', '음파 공격']
  },
  {
    name: '이다현',
    type: 'reality',
    typeLabel: 'REALITY',
    subtitle: '성인 회사원 · 「흑염의 후예」',
    description: '보라색 단발과 보라안. 성인이 된 뒤에도 중2병식 언행을 즐기며 왼팔에 붕대를 감고 다녔다. 현실화 후 흑염을 조작하며, 붕대를 풀면 출력 제한이 해제되고 흑염이 거대한 용의 형상을 이룬다.',
    meta: ['회사원', '흑염의 후예', '왼팔 붕대', '흑염', '흑염룡']
  },
  {
    name: '이름 없는 현자',
    type: 'anomaly',
    typeLabel: 'ANOMALY',
    subtitle: '기록조차 되지 않은 최종 존재',
    description: '흑색 장발과 적안의 여성 인간. 단 한 번 머릿속에 떠올랐을 뿐 기록·설정·폐기조차 되지 않은 존재다. 「지식의 저주」로 모든 것을 탐구·분석·기억하며 자유와 미지의 지식을 갈망한다.',
    meta: ['실제 이름 없음', '현자', '지식의 저주', 'SSS급 게이트', 'ERROR']
  }
];

const grid = document.getElementById('characterGrid');
const search = document.getElementById('characterSearch');
const filterButtons = [...document.querySelectorAll('.filter')];
let activeFilter = 'all';

function escapeHtml(text) {
  return text.replace(/[&<>'"]/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
  }[char]));
}

function renderCharacters() {
  const q = (search?.value || '').trim().toLowerCase();
  const visible = characters.filter((character) => {
    const matchesFilter = activeFilter === 'all' || character.type === activeFilter;
    const haystack = [character.name, character.subtitle, character.description, ...character.meta].join(' ').toLowerCase();
    return matchesFilter && (!q || haystack.includes(q));
  });

  grid.innerHTML = visible.map((character, index) => `
    <article class="character-card ${character.type}">
      <div class="character-top">
        <span class="character-type">${escapeHtml(character.typeLabel)}</span>
        <span class="character-number">${String(index + 1).padStart(2, '0')}</span>
      </div>
      <h3>${escapeHtml(character.name)}</h3>
      <div class="character-subtitle">${escapeHtml(character.subtitle)}</div>
      <p class="character-description">${escapeHtml(character.description)}</p>
      <div class="character-meta">
        ${character.meta.map((tag) => `<span>${escapeHtml(tag)}</span>`).join('')}
      </div>
    </article>
  `).join('');

  if (!visible.length) {
    grid.innerHTML = '<div class="character-card anomaly"><h3>검색 결과 없음</h3><p class="character-description">다른 이름, 직업 또는 능력으로 검색해보세요.</p></div>';
  }
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle('active', item === button));
    renderCharacters();
  });
});

search?.addEventListener('input', renderCharacters);
renderCharacters();

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
