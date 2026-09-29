// 학술제 정보의 단일 원본입니다.
// 강의가 확정되면 sessions의 title, speaker, description, category, status를 수정하세요.
const FESTIVAL_DATA = {
  event: {
    title: "제11회 대한민국 약사학술제",
    slogan: "AX 시대, 약사 직능의 새로운 도약",
    date: "2026-11-29",
    dateLabel: "2026년 11월 29일 일요일",
    startTime: "10:00",
    endTime: "17:00"
  },
  venue: {
    name: "서울 양재 aT센터",
    address: "서울특별시 서초구 강남대로 27",
    subway: "신분당선 양재시민의숲역(매헌) 4번 출구",
    walk: "4번 출구에서 도보 약 2분",
    parking: "aT센터 주차장을 이용할 수 있으나 행사일에는 혼잡할 수 있어 대중교통 이용을 권장합니다. 주차 지원 여부는 추후 공지됩니다."
  },
  rooms: [
    { id: "world", floor: "3F", name: "세계로룸", track: "AI를 이해하고 활용하는 약사, 변화하는 약국", labelClass: "room-label-world" },
    { id: "creation1", floor: "4F", name: "창조룸 Ⅰ", aliases: ["창조룸 1", "창조룸1"], track: "AX 시대, 확장되는 약사의 임상적 역할", labelClass: "room-label-creation1" },
    { id: "creation2", floor: "4F", name: "창조룸 Ⅱ", aliases: ["창조룸 2", "창조룸2"], track: "유관기관 참여 프로그램", labelClass: "room-label-creation2" }
  ],
  sessions: [
    { id: "1000-world", roomId: "world", start: "10:00", end: "11:00", title: "AI로 바꾸는 약국 운영과 경영 혁신", speaker: "이지환 강사 (카이스트 경영대학 교수)", description: "소비자 행동분석", category: ["AI", "약국운영", "경영혁신", "소비자행동"], status: "편성안" },
    { id: "1100-world", roomId: "world", start: "11:00", end: "12:00", title: "AI가 바꾸는 의료환경과 미래 약사의 역할", speaker: "김명규 강사 (대약 학술위원, 이화여대 약대 교수)", description: "", category: ["AI", "의료환경", "미래약사"], status: "편성안" },
    { id: "1200-world", roomId: "world", start: "12:00", end: "13:00", title: "AI 의료정보의 오류와 환각: 검증자로서의 약사", speaker: "이윤표 강사 (대약 정보통신이사, 홍보이사)", description: "", category: ["의료정보", "AI환각", "검증"], status: "편성안" },
    { id: "1300-world", roomId: "world", start: "13:00", end: "14:00", title: "특강 1 · AI가 먼저 답하는 시대, 환자 곁의 정보는 어떻게 달라지는가?", speaker: "김준화 강사 (카카오헬스케어 상무이사)", description: "", category: ["특강", "AI", "환자정보"], status: "편성안" },
    { id: "1400-world", roomId: "world", start: "14:00", end: "15:00", title: "특강 2 · 인공지능의 뿌리 신약개발, 인공지능에 대한 오해", speaker: "곽재식 강사 (숭실사이버대 환경안전공학과 교수)", description: "", category: ["특강", "인공지능", "신약개발"], status: "편성안" },
    { id: "1500-world", roomId: "world", start: "15:00", end: "16:00", title: "치매환자 관리의 최신 동향과 약사의 역할", speaker: "김희진 강사 (한양대 교수)", description: "", category: ["치매", "환자관리", "약사역할"], status: "편성안" },
    { id: "1600-world", roomId: "world", start: "16:00", end: "17:00", title: "비만치료의 새로운 패러다임: GLP-1 치료제와 약사의 역할", speaker: "최어진 강사 (대약 학술위원, 경희대 약대 교수)", description: "", category: ["비만치료", "GLP-1"], status: "편성안" },
    { id: "1000-creation1", roomId: "creation1", start: "10:00", end: "11:00", title: "개회 및 논문 포스터 발표", speaker: "", description: "개회식과 논문 포스터 발표", category: ["개회", "포스터"], status: "편성안" },
    { id: "1100-creation1", roomId: "creation1", start: "11:00", end: "12:00", title: "개회 및 논문 포스터 발표 (계속)", speaker: "", description: "개회식과 논문 포스터 발표 계속", category: ["개회", "포스터"], status: "편성안" },
    { id: "1200-creation1", roomId: "creation1", start: "12:00", end: "13:00", title: "약사를 위한 생성형 AI 리터러시", speaker: "한창호 강사 (대약 학술이사)", description: "", category: ["생성형AI", "AI리터러시"], status: "편성안" },
    { id: "1300-creation1", roomId: "creation1", start: "13:00", end: "14:00", title: "AI 시대, 변화에 적응하는 약사: 심리적 회복탄력성과 성장", speaker: "유영서 강사", description: "", category: ["AI", "회복탄력성", "성장"], status: "편성안" },
    { id: "1400-creation1", roomId: "creation1", start: "14:00", end: "15:00", title: "심혈관질환 최신 가이드라인과 약사의 임상 중재", speaker: "이정 강사 (성균관대 약대 교수)", description: "", category: ["심혈관질환", "가이드라인", "임상중재"], status: "편성안" },
    { id: "1500-creation1", roomId: "creation1", start: "15:00", end: "16:00", title: "통합약물관리와 미래약사의 임상적 역할", speaker: "이주연 강사 (대약 학술위원, 서울대 약대 교수)", description: "", category: ["통합약물관리", "임상"], status: "편성안" },
    { id: "1600-creation1", roomId: "creation1", start: "16:00", end: "17:00", title: "백신과 예방약료: 지역사회 약사 역할의 확장", speaker: "박태은 강사 (우석대 약대 교수)", description: "", category: ["백신", "예방약료", "지역사회"], status: "편성안" },
    { id: "1000-creation2", roomId: "creation2", start: "10:00", end: "11:00", title: "희귀필수의약품센터: 희귀필수의약품센터의 이해 / 긴급도입 의약품 공급 개관", speaker: "김도형 기획본부장 · 김기영 관리본부장", description: "", category: ["희귀의약품", "필수의약품", "긴급도입"], status: "편성안" },
    { id: "1100-creation2", roomId: "creation2", start: "11:00", end: "12:00", title: "약국에서 만나는 일반의약품 안전 문제: 상호작용과 부작용 사례", speaker: "이정민 강사 (대약 환자안전약물관리원 지역의약품안전센터 실장)", description: "", category: ["일반의약품", "환자안전", "상호작용", "부작용"], status: "편성안" },
    { id: "1200-creation2", roomId: "creation2", start: "12:00", end: "13:00", title: "통합약물관리 전문약사 제도", speaker: "정병욱 강사 (대약 전문약사관리원장)", description: "", category: ["통합약물관리", "전문약사"], status: "편성안" },
    { id: "1300-creation2", roomId: "creation2", start: "13:00", end: "14:00", title: "증상별 한약제제 선택과 상담", speaker: "김연홍 약사", description: "약국기본세팅 15종", category: ["한약제제", "복약상담"], status: "편성안" },
    { id: "1400-creation2", roomId: "creation2", start: "14:00", end: "15:00", title: "체중관리의 한약적 접근과 상담", speaker: "배현 약사", description: "", category: ["체중관리", "한약", "상담"], status: "편성안" },
    { id: "1500-creation2", roomId: "creation2", start: "15:00", end: "16:00", title: "약국 실무에 바로 적용하는 생성형 AI 활용 및 시연", speaker: "미래약사위원회", description: "", category: ["생성형AI", "약국실무", "시연"], status: "편성안" },
    { id: "1600-creation2", roomId: "creation2", start: "16:00", end: "17:00", title: "약국 실무에 바로 적용하는 생성형 AI 활용 및 시연 (계속)", speaker: "미래약사위원회", description: "생성형 AI 활용 및 시연 계속", category: ["생성형AI", "약국실무", "시연"], status: "편성안" }
  ]
};

const sessionTimes = Array.from({ length: 7 }, (_, index) => ({
  start: `${String(10 + index).padStart(2, "0")}:00`,
  end: `${String(11 + index).padStart(2, "0")}:00`
}));

for (const time of sessionTimes) {
  for (const room of FESTIVAL_DATA.rooms) {
    const id = `${time.start.replace(":", "")}-${room.id}`;
    const covered = FESTIVAL_DATA.sessions.some(session => session.roomId === room.id && session.start <= time.start && session.end > time.start);
    if (!covered) {
      FESTIVAL_DATA.sessions.push({
        id,
        roomId: room.id,
        start: time.start,
        end: time.end,
        title: "강의 주제 추후 공개",
        speaker: "강사 섭외 중",
        description: "",
        category: [],
        status: "편성 중"
      });
    }
  }
}

window.FESTIVAL_DATA = FESTIVAL_DATA;
