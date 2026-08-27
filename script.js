const characters = [
  {
    name: "한서린",
    category: "original",
    type: "원작 인물",
    badge: "주인공",
    sub: "25세 · 만년 F급 헌터",
    description: "금빛 장발과 청안. 다정하고 정의로우며 희생적인 성격. 히든 성장형 F급 직업 「무한」으로 모든 직업의 스킬을 배우고 합성·진화·초월할 수 있다.",
    tags: ["무한", "성장형", "한서윤의 동생"]
  },
  {
    name: "서유리",
    category: "original",
    type: "원작 인물",
    badge: "C급",
    sub: "방패기사 · 한서린의 오랜 친구",
    description: "바깥은 검정, 안쪽은 민트색인 투톤 단발과 회청안. 츤데레에 잔소리가 많지만 책임감이 강하며, 전투에서는 방패로 동료를 보호한다.",
    tags: ["방패기사", "츤데레", "오랜 친구"]
  },
  {
    name: "한서윤",
    category: "original",
    type: "원작 인물",
    badge: "S급",
    sub: "랭커 헌터 · 한서린의 친언니",
    description: "금발 포니테일과 짙은 청안. 오만한 성격의 최상위권 헌터. 직업 「서리검후」로 검과 서리 계열의 힘을 사용한다.",
    tags: ["서리검후", "S급 랭커", "친언니"]
  },
  {
    name: "윤하린",
    category: "reader",
    type: "원작 독자",
    badge: "3회 완독",
    sub: "현실 인물 · 한서린 최애",
    description: "갈색 단발과 연두안. 평소 소심하고 낯을 가리지만 원작 이야기가 나오면 말이 많아진다. 공개 연재본의 세부 설정을 매우 정확하게 기억한다.",
    tags: ["웹소설 덕후", "인간 위키", "한서린 팬"]
  },
  {
    name: "서유나",
    category: "reader",
    type: "원작 독자",
    badge: "1회 속독",
    sub: "현실 인물 · 정보 활용형",
    description: "흑발 스트레이트 장발과 금안. 현실적이고 계산적이며 침착하다. 원작의 게이트·보상·사건 정보를 기억나는 범위에서 빠르게 생존과 성장에 활용한다.",
    tags: ["현실적", "계산적", "정보 활용"]
  },
  {
    name: "무명",
    category: "discarded",
    type: "폐기 인물",
    badge: "첫 등장",
    sub: "다크엘프 · 그림자 조작",
    description: "은빛 장발, 보라안, 회보라색 피부. 차갑고 냉소적이며 비꼬는 말투를 쓴다. 이름과 역할조차 정해지기 전에 폐기됐고, 현실화 후 시스템이 「무명」이라는 이름을 부여했다.",
    tags: ["다크엘프", "그림자 조작", "첫 폐기 인물"]
  },
  {
    name: "카야 사하르",
    category: "discarded",
    type: "폐기 인물",
    badge: "하사신 대장",
    sub: "알라바스타 사막 왕국",
    description: "약간 탄 피부, 옅은 모래빛이 섞인 백색 단발과 금안. 암살·와이어·은신술을 사용하며, 자신과 왕국을 없앤 {{user}}에게 강한 복수심을 품는다.",
    tags: ["암살", "은신", "게이트 변형"]
  },
  {
    name: "한시온",
    category: "discarded",
    type: "폐기 인물",
    badge: "중간보스",
    sub: "고유 능력 「뇌신」",
    description: "민트색 장발과 청안. 전류 조작·전류화·생체 전기 간섭을 사용한다. 중간보스로 만들었지만 최종보스보다 강해져 폐기됐고, {{user}}를 자신을 감당하지 못한 작가로 본다.",
    tags: ["뇌신", "전류화", "밸런스 붕괴"]
  },
  {
    name: "서하랑",
    category: "discarded",
    type: "폐기 인물",
    badge: "룬 사용자",
    sub: "고유 능력 「룬의 지배자」",
    description: "주황색 포니테일과 주황안. 모든 룬의 형태·의미·조합을 기억하고 원하는 곳에 각인한다. 룬 효과는 제한 없이 중첩할 수 있어 준비 시간이 길수록 강해진다.",
    tags: ["룬", "무제한 중첩", "영역 장악"]
  },
  {
    name: "차시연",
    category: "discarded",
    type: "폐기 인물",
    badge: "최초 주인공",
    sub: "고유 능력 「극의」",
    description: "청색 단발과 금안. 하나의 스킬만 사용할 수 있는 대신 그 스킬을 비정상적으로 성장시키는 「극의」의 소유자. F급 「찌르기」를 선택했으나 전투가 단조로워져 주인공 자리에서 폐기됐다.",
    tags: ["극의", "찌르기", "원래 주인공"]
  },
  {
    name: "윤시아",
    category: "reality",
    type: "현실 인물",
    badge: "아이돌",
    sub: "걸그룹 「드림」의 최고 인기 멤버",
    description: "핑크색 트윈테일과 핑크안. 발랄하고 약간 엉뚱하며 판타지 소설과 모험을 좋아했다. 직업 「성광의 가희」로 별빛 계열 버프와 음파 계열 공격을 사용한다.",
    tags: ["성광의 가희", "별빛", "음파"]
  },
  {
    name: "이다현",
    category: "reality",
    type: "현실 인물",
    badge: "회사원",
    sub: "직업 「흑염의 후예」",
    description: "보라색 단발과 보라안. 성인이 된 뒤에도 중2병식 언행을 즐기며 왼팔에 붕대를 감고 다닌다. 붕대를 풀면 흑염의 출력 제한이 해제되고 흑염이 거대한 용의 형상을 이룬다.",
    tags: ["흑염", "왼팔 붕대", "흑염룡"]
  },
  {
    name: "이름 없는 현자",
    category: "hidden",
    type: "최종 존재",
    badge: "이름 없음",
    sub: "현자 · 「지식의 저주」",
    description: "흑색 장발과 적안. {{user}}가 잠들기 직전 단 한 번 상상했을 뿐 기록하거나 폐기한 적조차 없는 존재. 모든 것을 탐구·분석·기억하며 자유와 세계 밖의 미지의 지식을 갈망한다.",
    tags: ["지식의 저주", "SSS급 게이트", "ERROR"]
  }
];

const grid = document.getElementById("characterGrid");
const buttons = document.querySelectorAll(".filter");

function renderCharacters(filter = "all") {
  const visible = filter === "all"
    ? characters
    : characters.filter(character => character.category === filter);

  grid.innerHTML = visible.map(character => `
    <article class="character-card">
      <div class="card-top">
        <span class="card-type">${character.type}</span>
        <span class="card-badge">${character.badge}</span>
      </div>
      <h3>${character.name}</h3>
      <p class="card-sub">${character.sub}</p>
      <p class="card-description">${character.description}</p>
      <div class="card-tags">
        ${character.tags.map(tag => `<span>${tag}</span>`).join("")}
      </div>
    </article>
  `).join("");
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    buttons.forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    renderCharacters(button.dataset.filter);
  });
});

renderCharacters();
