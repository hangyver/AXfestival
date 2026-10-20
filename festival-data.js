// 학술제 정보의 단일 원본입니다.
// 강의가 확정되면 sessions의 title, speaker, description, category, status를 수정하세요.
const aiPharmacyWorkshop = {
  timeLabel: "15:00–17:00 연속 프로그램",
  organizer: "미래약사위원회 주관",
  sections: [
    { title: "AI 우수 활용사례 발표" },
    {
      title: "AI 약국 실전 세션",
      subtitle: "ChatGPT로 약국 마케팅 가격텍 만들기",
      activities: [
        { title: "메타 프롬프팅으로 가격텍 제작 프롬프트 작성하기", speaker: "김정현 강사 (대한약사회 미래약사위원)" },
        { title: "스킬 제작 및 가격텍 PDF 제작", speaker: "한현지 강사 (대한약사회 미래약사위원)" }
      ]
    }
  ]
};

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
    { id: "creation2", floor: "4F", name: "창조룸 Ⅱ", aliases: ["창조룸 2", "창조룸2"], track: "전문약료와 AI 약국 실전", labelClass: "room-label-creation2" }
  ],
  sessions: [
    { id: "1000-world", roomId: "world", start: "10:00", end: "11:00", title: "AI 시대의 경영 패러다임과 헬스케어 운영 혁신", speaker: "이지환 강사 (카이스트 경영공학부 교수)", description: "", category: ["AI", "경영 패러다임", "헬스케어", "운영 혁신"], status: "편성안" },
    { id: "1100-world", roomId: "world", start: "11:00", end: "12:00", title: "AI가 바꾸는 의료환경과 미래 약사의 역할", speaker: "김명규 강사 (이화여대 약학대학 교수)", description: "", category: ["AI", "의료환경", "미래약사"], status: "편성안" },
    { id: "1200-world", roomId: "world", start: "12:00", end: "13:00", title: "AI 에이전트: 답하는 AI에서 일하는 AI", speaker: "이윤표 강사 (대한약사회 정보통신이사·홍보이사)", description: "", category: ["AI 에이전트", "AI", "약사 직능"], status: "편성안" },
    { id: "1300-world", roomId: "world", start: "13:00", end: "14:00", title: "특강 1 · AI가 먼저 답하는 시대, 환자 곁의 정보는 어떻게 달라지는가?", speaker: "김준화 강사 (카카오헬스케어 상무이사)", description: "", category: ["특강", "AI", "환자정보"], status: "편성안" },
    { id: "1400-world", roomId: "world", start: "14:00", end: "15:00", title: "특강 2 · 인공지능에 대한 오해", speaker: "곽재식 강사 (숭실사이버대 환경안전공학과 교수)", description: "", category: ["특강", "인공지능", "오해"], status: "편성안" },
    { id: "1500-world", roomId: "world", start: "15:00", end: "16:00", title: "치매 환자 관리의 최신 동향과 약사의 역할", speaker: "김희진 강사 (한양대 의과대학 신경과 교수)", description: "치매전문약의 관리와 알츠하이머 신규치료제 소개", category: ["치매", "환자관리", "약사역할", "알츠하이머", "신규치료제"], status: "편성안" },
    { id: "1600-world", roomId: "world", start: "16:00", end: "17:00", title: "비만치료의 새로운 패러다임: GLP-1 치료제와 약사의 역할", speaker: "최어진 강사 (경희대 약학대학 교수)", description: "", category: ["비만치료", "GLP-1"], status: "편성안" },
    { id: "1000-creation1", roomId: "creation1", start: "10:00", end: "11:00", title: "개회식", speaker: "", description: "", category: ["개회"], status: "편성안" },
    { id: "1100-creation1", roomId: "creation1", start: "11:00", end: "12:00", title: "AI 활용사례 / 포스터 / 논문 수상작 발표", speaker: "", description: "", category: ["AI 활용사례", "포스터", "논문 수상작"], status: "편성안" },
    { id: "1200-creation1", roomId: "creation1", start: "12:00", end: "13:00", title: "AI, 하는 만큼 보인다", speaker: "한창호 강사 (대한약사회 학술이사)", description: "", category: ["AI"], status: "편성안" },
    { id: "1300-creation1", roomId: "creation1", start: "13:00", end: "14:00", title: "지친 약사들을 위한 스트레스 관리 안내서", speaker: "유영서 강사 (사람과생각 정신건강의학과의원 대표원장)", description: "", category: ["약사", "스트레스", "스트레스 관리"], status: "편성안" },
    { id: "1400-creation1", roomId: "creation1", start: "14:00", end: "15:00", title: "고혈압 최신 가이드라인과 약사의 임상 중재", speaker: "이정 강사 (성균관대 약학대학 교수)", description: "", category: ["고혈압", "가이드라인", "임상중재"], status: "편성안" },
    { id: "1500-creation1", roomId: "creation1", start: "15:00", end: "16:00", title: "통합약물관리와 미래 약사의 임상적 역할", speaker: "이주연 강사 (서울대 약학대학 교수)", description: "", category: ["통합약물관리", "임상"], status: "편성안" },
    { id: "1600-creation1", roomId: "creation1", start: "16:00", end: "17:00", title: "백신과 예방약료: 지역사회 약사 역할의 확장", speaker: "박태은 강사 (우석대 약학대학 교수)", description: "", category: ["백신", "예방약료", "지역사회"], status: "편성안" },
    { id: "1000-creation2", roomId: "creation2", start: "10:00", end: "11:00", title: "희귀필수의약품센터: 희귀필수의약품센터의 이해 / 긴급도입 의약품 공급 개관", speaker: "최승미 희귀본부장 · 김기영 관리본부장", description: "", category: ["희귀의약품", "필수의약품", "긴급도입"], status: "편성안" },
    { id: "1100-creation2", roomId: "creation2", start: "11:00", end: "12:00", title: "일반의약품 이상사례 보고 현황 및 임상적 활용", speaker: "이정민 강사 (대한약사회 환자안전약물관리원 지역의약품안전센터 실장)", description: "", category: ["일반의약품", "이상사례", "임상적 활용"], status: "편성안" },
    { id: "1200-creation2", roomId: "creation2", start: "12:00", end: "13:00", title: "통합약물관리 전문약사제도에 대한 이해", speaker: "정병욱 강사 (대한약사회 전문약사관리원장)", description: "", category: ["통합약물관리", "전문약사제도"], status: "편성안" },
    { id: "1300-creation2", roomId: "creation2", start: "13:00", end: "14:00", title: "증상별 한약제제 선택과 상담", speaker: "김연홍 강사 (경기도약사회 한약위원장)", description: "약국기본세팅 15종", category: ["한약제제", "복약상담"], status: "편성안" },
    { id: "1400-creation2", roomId: "creation2", start: "14:00", end: "15:00", title: "체중 관리의 한방 원리와 한약제제 활용 전략", speaker: "배현 강사 (팜클래스 한방 전문강사)", description: "", category: ["체중 관리", "한방", "한약제제"], status: "편성안" },
    { id: "1500-creation2", roomId: "creation2", start: "15:00", end: "16:00", title: "AI 우수 활용사례 공유 및 AI 약국 실전 세션", speaker: "", description: "", feature: aiPharmacyWorkshop, category: ["AI", "활용사례", "약국 실전", "ChatGPT", "가격텍", "김정현", "한현지"], status: "편성안" },
    { id: "1600-creation2", roomId: "creation2", start: "16:00", end: "17:00", title: "AI 우수 활용사례 공유 및 AI 약국 실전 세션 (계속)", speaker: "", description: "", feature: aiPharmacyWorkshop, category: ["AI", "활용사례", "약국 실전", "ChatGPT", "가격텍", "김정현", "한현지"], status: "편성안" }
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
