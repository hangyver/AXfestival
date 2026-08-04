(function () {
  const festival = window.FESTIVAL_DATA;
  const normalize = value => String(value || "").toLowerCase().replaceAll("Ⅰ", "1").replaceAll("Ⅱ", "2").replace(/[^0-9a-z가-힣]/g, "");
  const registered = () => festival.sessions.filter(session => session.status !== "편성 중");
  const roomFor = session => festival.rooms.find(room => room.id === session.roomId);
  const formatSession = session => {
    const room = roomFor(session);
    const description = session.description ? ` ${session.description}` : "";
    return `${session.start}–${session.end}, ${room.floor} ${room.name}: ‘${session.title}’ (${session.speaker}).${description}`;
  };
  function requestedTime(question) {
    const colon = question.match(/(오전|오후)?\s*(\d{1,2}):(\d{2})/);
    const hourWord = question.match(/(오전|오후)?\s*(\d{1,2})\s*시/);
    const match = colon || hourWord;
    if (!match) return null;
    const period = match[1] || "";
    let hour = Number(match[2]);
    const minute = colon ? Number(match[3]) : 0;
    if (period === "오후" && hour < 12) hour += 12;
    if (!period && hour >= 1 && hour <= 6) hour += 12;
    return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
  }
  function requestedRoom(question) {
    const q = normalize(question);
    return festival.rooms.find(room => [room.name, ...(room.aliases || [])].some(name => q.includes(normalize(name)))) || null;
  }
  function findSessionMatches(question) {
    const normalizedQuestion = normalize(question);
    const stopWords = ["강의", "강사", "일정", "시간", "내용", "알려줘", "누구", "어디", "뭐야", "무엇", "하는", "설명", "세션"];
    const tokens = question.split(/[\s,?!.]+/).map(normalize).filter(token => token.length >= 2 && !stopWords.includes(token));
    return registered().filter(session => {
      const searchable = normalize([session.title, session.speaker, session.description, ...(session.category || [])].join(" "));
      return tokens.some(token => searchable.includes(token)) || searchable.includes(normalizedQuestion);
    });
  }
  function answer(question) {
    const q = normalize(question);
    const time = requestedTime(question);
    const room = requestedRoom(question);
    const confirmed = registered();

    if (/슬로건/.test(question) || (/학술제|행사/.test(question) && /주제/.test(question))) return `올해의 슬로건은 ‘${festival.event.slogan}’입니다.`;
    if (/날짜|언제|행사시간|몇시부터|몇시까지/.test(q)) return `학술제는 ${festival.event.dateLabel}, 오전 ${festival.event.startTime}부터 오후 6시까지 진행됩니다.`;
    if (/지하철|전철|역|출구|가는길|오시는길/.test(q)) return `${festival.venue.subway}를 이용하세요. ${festival.venue.walk}이며 주소는 ${festival.venue.address}입니다.`;
    if (/주차/.test(q)) return festival.venue.parking;
    if (/장소|주소|어디서|행사장/.test(q) && !room) return `행사 장소는 ${festival.venue.name}(${festival.venue.address})입니다. 3층 세계로룸과 4층 창조룸 Ⅰ·Ⅱ를 사용합니다.`;

    if (time) {
      let sessions = festival.sessions.filter(session => session.start === time);
      if (room) sessions = sessions.filter(session => session.roomId === room.id);
      const ready = sessions.filter(session => session.status !== "편성 중");
      if (ready.length) return `${time} 강의 안내입니다.\n${ready.map(formatSession).join("\n")}`;
      return `${time}${room ? ` ${room.name}` : ""} 강의는 아직 세부 정보가 등록되지 않았습니다. 등록되는 즉시 이 에이전트에서도 안내됩니다.`;
    }
    if (room && !/강의|일정|시간|프로그램|세션/.test(q)) return `${room.name}은 ${room.floor}에 있습니다.`;
    if (room) {
      const sessions = confirmed.filter(session => session.roomId === room.id);
      if (sessions.length) return `${room.floor} ${room.name}의 등록된 강의입니다.\n${sessions.map(formatSession).join("\n")}`;
      return `${room.floor} ${room.name}의 강의 세부 정보는 아직 등록되지 않았습니다.`;
    }

    const matches = findSessionMatches(question);
    if (matches.length) return `등록된 강의에서 찾은 내용입니다.\n${matches.slice(0, 5).map(formatSession).join("\n")}`;
    if (/강의실|룸|교실|몇층/.test(q)) return `강의실은 총 3곳입니다. ${festival.rooms.map(item => `${item.floor} ${item.name}`).join(", ")}입니다.`;
    if (/강사|강의|프로그램|일정|시간표/.test(q)) {
      if (confirmed.length) return `현재 ${confirmed.length}개 강의가 등록되어 있습니다. 시간이나 강의실, 강사명, 강의 제목으로 질문해 주세요.`;
      return "강사와 강의 주제는 현재 편성 중입니다. 확정 내용을 강의 일정에 등록하면 이 에이전트가 자동으로 찾아 안내합니다.";
    }
    return "웹사이트에 등록된 내용에서 답을 찾지 못했습니다. 행사 시간, 강의 일정, 강사명, 강의실 또는 오시는 길을 질문해 주세요.";
  }
  window.FESTIVAL_AGENT = { answer };
})();
