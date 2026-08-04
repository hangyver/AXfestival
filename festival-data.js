// 학술제 정보의 단일 원본입니다.
// 강의가 확정되면 sessions의 title, speaker, description, category, status만 수정하세요.
const FESTIVAL_DATA = {
  event: {
    title: "제11회 대한민국 약사학술제",
    slogan: "AX 시대, 약사 직능의 새로운 도약",
    date: "2026-11-29",
    dateLabel: "2026년 11월 29일 일요일",
    startTime: "10:00",
    endTime: "18:00"
  },
  venue: {
    name: "서울 양재 aT센터",
    address: "서울특별시 서초구 강남대로 27",
    subway: "신분당선 양재시민의숲역(매헌) 4번 출구",
    walk: "4번 출구에서 도보 약 2분",
    parking: "aT센터 주차장을 이용할 수 있으나 행사일에는 혼잡할 수 있어 대중교통 이용을 권장합니다. 주차 지원 여부는 추후 공지됩니다."
  },
  rooms: [
    { id: "world", floor: "3F", name: "세계로룸", labelClass: "room-label-world" },
    { id: "creation1", floor: "4F", name: "창조룸 Ⅰ", aliases: ["창조룸 1", "창조룸1"], labelClass: "room-label-creation1" },
    { id: "creation2", floor: "4F", name: "창조룸 Ⅱ", aliases: ["창조룸 2", "창조룸2"], labelClass: "room-label-creation2" }
  ],
  sessions: []
};

const sessionTimes = Array.from({ length: 8 }, (_, index) => ({
  start: `${String(10 + index).padStart(2, "0")}:00`,
  end: `${String(11 + index).padStart(2, "0")}:00`
}));

// 같은 id의 강의를 sessions에 먼저 등록하면 등록 내용이 우선됩니다.
for (const time of sessionTimes) {
  for (const room of FESTIVAL_DATA.rooms) {
    const id = `${time.start.replace(":", "")}-${room.id}`;
    if (!FESTIVAL_DATA.sessions.some(session => session.id === id)) {
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
