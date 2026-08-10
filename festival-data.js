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
    { id: "world", floor: "3F", name: "세계로룸", track: "AX 시대, 확장되는 약사의 임상적 역할", labelClass: "room-label-world" },
    { id: "creation1", floor: "4F", name: "창조룸 Ⅰ", aliases: ["창조룸 1", "창조룸1"], track: "AI를 이해하고 활용하는 약사, 변화하는 약국", labelClass: "room-label-creation1" },
    { id: "creation2", floor: "4F", name: "창조룸 Ⅱ", aliases: ["창조룸 2", "창조룸2"], track: "세부 프로그램 추후 공개", labelClass: "room-label-creation2" }
  ],
  sessions: [
    { id: "1000-world", roomId: "world", start: "10:00", end: "12:00", title: "개회 및 논문 포스터 발표", speaker: "세부 구성 추후 공개", description: "개회식과 논문 포스터 발표", category: ["개회", "포스터"], status: "편성안" },
    { id: "1200-world", roomId: "world", start: "12:00", end: "13:00", title: "AI가 바꾸는 의료환경과 미래 약사의 역할", speaker: "강사 추후 공개", description: "", category: ["AI", "미래약사"], status: "편성안" },
    { id: "1300-world", roomId: "world", start: "13:00", end: "14:00", title: "통합약물관리와 미래 약사의 임상적 역할", speaker: "강사 추후 공개", description: "", category: ["통합약물관리", "임상"], status: "편성안" },
    { id: "1400-world", roomId: "world", start: "14:00", end: "15:00", title: "심혈관질환 최신 가이드라인과 약사의 임상 중재", speaker: "강사 추후 공개", description: "", category: ["심혈관질환", "가이드라인", "임상중재"], status: "편성안" },
    { id: "1500-world", roomId: "world", start: "15:00", end: "16:00", title: "비만치료의 새로운 패러다임: GLP-1 치료제와 약사의 역할", speaker: "강사 추후 공개", description: "", category: ["비만치료", "GLP-1"], status: "편성안" },
    { id: "1600-world", roomId: "world", start: "16:00", end: "17:00", title: "백신과 예방약료: 지역사회 약사 역할의 확장", speaker: "강사 추후 공개", description: "", category: ["백신", "예방약료", "지역사회"], status: "편성안" },
    { id: "1000-creation1", roomId: "creation1", start: "10:00", end: "11:00", title: "약사를 위한 생성형 AI 리터러시", speaker: "강사 추후 공개", description: "", category: ["생성형AI", "AI리터러시"], status: "편성안" },
    { id: "1100-creation1", roomId: "creation1", start: "11:00", end: "12:00", title: "AI 의료정보의 오류와 환각: 검증자로서의 약사", speaker: "강사 추후 공개", description: "", category: ["의료정보", "AI환각", "검증"], status: "편성안" },
    { id: "1200-creation1", roomId: "creation1", start: "12:00", end: "13:00", title: "AI로 바꾸는 약국 운영과 경영 혁신", speaker: "강사 추후 공개", description: "", category: ["AI", "약국운영", "경영혁신"], status: "편성안" },
    { id: "1300-creation1", roomId: "creation1", start: "13:00", end: "14:00", title: "특강 1", speaker: "강사 및 주제 추후 공개", description: "", category: ["특강"], status: "편성안" },
    { id: "1400-creation1", roomId: "creation1", start: "14:00", end: "15:00", title: "특강 2", speaker: "강사 및 주제 추후 공개", description: "", category: ["특강"], status: "편성안" },
    { id: "1500-creation1", roomId: "creation1", start: "15:00", end: "16:00", title: "추가 프로그램", speaker: "세부 내용 추후 공개", description: "", category: ["추가프로그램"], status: "편성안" },
    { id: "1600-creation1", roomId: "creation1", start: "16:00", end: "17:00", title: "약국 실무에 바로 적용하는 생성형 AI 활용 및 시연", speaker: "강사 추후 공개", description: "", category: ["생성형AI", "약국실무", "시연"], status: "편성안" }
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