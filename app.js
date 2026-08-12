import "./festival-data.js";
import "./agent-engine.js";

const page = document.body.dataset.page;

function header(active = page) {
  const items = [
    ["home", "index.html", "학술제 소개"],
    ["program", "program.html", "강의 일정"],
    ["venue", "venue.html", "행사장 안내"]
  ];
  return `
  <header id="siteHeader" class="site-header fixed inset-x-0 top-0 z-40 text-white">
    <div class="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
      <a href="index.html" class="flex items-center gap-3" aria-label="제11회 대한민국 약사학술제 홈">
        <span class="brand-mark grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/10 font-display text-xs font-extrabold tracking-wider">KPA</span>
        <span class="leading-tight"><strong class="block text-sm font-bold">대한민국 약사학술제</strong><span class="block text-[10px] tracking-[.17em] opacity-60">KOREA PHARMACISTS ACADEMIC FESTIVAL</span></span>
      </a>
      <nav class="hidden items-center gap-8 md:flex" aria-label="주요 메뉴">
        ${items.map(([id, href, label]) => `<a class="nav-link text-sm font-medium text-white/75 transition hover:text-white" href="${href}" ${active === id ? 'aria-current="page"' : ""}>${label}</a>`).join("")}
        <button data-chat-open class="rounded-full bg-white px-5 py-2.5 text-sm font-bold text-slate-900 transition hover:bg-cyan-100">AX Agent</button>
      </nav>
      <button id="mobileMenuButton" class="mobile-menu-button grid h-11 w-11 place-items-center rounded-full border border-white/20 md:hidden" aria-label="메뉴 열기" aria-expanded="false">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
      </button>
    </div>
    <div id="mobileMenu" class="hidden border-t border-slate-100 bg-white px-5 py-5 text-slate-900 shadow-xl md:hidden">
      ${items.map(([id, href, label]) => `<a class="block rounded-xl px-4 py-3 text-sm font-bold ${active === id ? "bg-blue-50 text-blue-700" : ""}" href="${href}">${label}</a>`).join("")}
      <button data-chat-open class="mt-3 w-full rounded-xl bg-slate-900 px-4 py-3 text-left text-sm font-bold text-white">AX 학술제 Agent 열기</button>
    </div>
  </header>`;
}

function footer() {
  return `<footer class="bg-[#06172a] text-white">
    <div class="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1fr_auto] lg:px-8">
      <div><p class="font-display text-xl font-extrabold">제11회 대한민국 약사학술제</p><p class="mt-2 text-sm text-slate-400">AX 시대, 약사 직능의 새로운 도약</p></div>
      <div class="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400"><a href="program.html" class="hover:text-white">강의 일정</a><a href="venue.html" class="hover:text-white">행사장 안내</a><button data-chat-open class="hover:text-white">AX Agent</button></div>
    </div>
    <div class="border-t border-white/10 px-5 py-5 text-center text-xs text-slate-500">© 2026 Korea Pharmacists Academic Festival. 행사 세부 내용은 추후 업데이트됩니다.</div>
  </footer>`;
}

function chatbot() {
  return `<div class="fixed bottom-5 right-5 z-50">
    <section id="chatPanel" class="chat-panel is-closed absolute bottom-[4.7rem] right-0 flex h-[570px] w-[390px] flex-col overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white shadow-2xl" aria-label="AX 학술제 에이전트" aria-hidden="true">
      <div class="bg-[#071b32] px-5 py-4 text-white"><div class="flex items-center justify-between gap-3"><div class="flex min-w-0 items-center gap-3"><span class="relative grid h-10 w-10 shrink-0 place-items-center rounded-full bg-cyan-400 text-slate-900"><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8V4H8M6 8h12a2 2 0 0 1 2 2v8H4v-8a2 2 0 0 1 2-2Z"/><path d="M9 13h.01M15 13h.01M9 18v2M15 18v2"/></svg><i class="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#071b32] bg-emerald-400"></i></span><div class="min-w-0"><strong class="block truncate text-sm">AX 학술제 Agent</strong><span class="block truncate text-xs text-slate-400">행사 지식을 연결하는 안내 에이전트</span></div></div><div class="flex shrink-0 items-center"><button id="chatCapture" class="grid h-9 w-9 place-items-center rounded-full text-slate-300 transition hover:bg-white/10 hover:text-white" aria-label="대화를 이미지로 저장" title="대화를 이미지로 저장"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.5 4 16 6h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3l1.5-2Z"/><circle cx="12" cy="13" r="3"/></svg></button><button id="chatClose" class="grid h-9 w-9 place-items-center rounded-full text-slate-400 transition hover:bg-white/10 hover:text-white" aria-label="에이전트 닫기">✕</button></div></div></div>
      <div class="flex items-center justify-between border-b border-cyan-100 bg-cyan-50 px-4 py-2.5 text-[11px]"><span class="flex items-center gap-2 font-bold text-cyan-900"><i class="h-2 w-2 rounded-full bg-emerald-500"></i>기본 행사 안내 활성</span><span class="text-cyan-700">웹사이트 등록 정보 연결</span></div>
      <div id="chatMessages" class="flex-1 space-y-3 overflow-y-auto bg-slate-50 p-4" aria-live="polite"><div class="chat-message max-w-[88%] rounded-2xl rounded-tl-sm bg-white p-3 text-sm leading-6 text-slate-700 shadow-sm" data-role="assistant">안녕하세요! 제11회 대한민국 약사학술제 AX Agent입니다. 웹사이트에 등록된 행사 일정, 강사, 강의 내용과 오시는 길을 정확하게 찾아 안내해 드립니다.</div></div>
      <div id="chatSuggestions" class="flex gap-2 overflow-x-auto border-t border-slate-100 bg-white px-4 py-3"><button class="chat-chip whitespace-nowrap rounded-full border border-slate-200 px-3 py-1.5 text-xs font-bold text-slate-600" data-question="행사 시간은?">행사 시간</button><button class="chat-chip whitespace-nowrap rounded-full border border-slate-200 px-3 py-1.5 text-xs font-bold text-slate-600" data-question="강의실은 어디야?">강의실</button><button class="chat-chip whitespace-nowrap rounded-full border border-slate-200 px-3 py-1.5 text-xs font-bold text-slate-600" data-question="지하철로 어떻게 가?">오시는 길</button></div>
      <form id="chatForm" class="flex gap-2 border-t border-slate-100 bg-white p-3"><label class="sr-only" for="chatInput">질문 입력</label><input id="chatInput" class="min-w-0 flex-1 rounded-xl bg-slate-100 px-4 py-3 text-sm outline-none ring-blue-500 focus:ring-2" placeholder="행사 정보를 물어보세요" autocomplete="off"><button class="grid h-11 w-11 place-items-center rounded-xl bg-blue-600 text-white" aria-label="질문 보내기"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg></button></form>
    </section>
    <div id="captureToast" class="pointer-events-none absolute bottom-[4.7rem] right-0 mb-2 w-max translate-y-2 rounded-full bg-slate-950 px-4 py-2 text-xs font-bold text-white opacity-0 shadow-xl transition" role="status">대화 이미지를 저장했습니다</div>
    <button id="chatLauncher" class="relative grid h-14 w-14 place-items-center rounded-full bg-blue-600 text-white shadow-[0_12px_35px_rgba(13,119,232,.4)] transition hover:-translate-y-1 hover:bg-blue-700" aria-label="AX 학술제 에이전트 열기" aria-expanded="false"><span class="absolute -left-20 rounded-full bg-white px-3 py-1.5 text-[11px] font-extrabold text-blue-700 shadow-lg">AX Agent</span><svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z"/><path d="M8 10h.01M12 10h.01M16 10h.01"/></svg></button>
  </div>`;
}
document.querySelector("[data-header]").innerHTML = header();
document.querySelector("[data-footer]").innerHTML = footer();
document.body.insertAdjacentHTML("beforeend", chatbot());

const siteHeader = document.getElementById("siteHeader");
const syncHeader = () => siteHeader.classList.toggle("scrolled", scrollY > 18 || page !== "home");
syncHeader(); addEventListener("scroll", syncHeader, { passive: true });

const menuButton = document.getElementById("mobileMenuButton");
const mobileMenu = document.getElementById("mobileMenu");
menuButton.addEventListener("click", () => { const open = mobileMenu.classList.toggle("hidden") === false; menuButton.setAttribute("aria-expanded", open); });

const panel = document.getElementById("chatPanel");
const launcher = document.getElementById("chatLauncher");
const input = document.getElementById("chatInput");
function setChat(open) { panel.classList.toggle("is-closed", !open); panel.setAttribute("aria-hidden", !open); launcher.setAttribute("aria-expanded", open); if (open) setTimeout(() => input.focus(), 100); }
launcher.addEventListener("click", () => setChat(panel.classList.contains("is-closed")));
document.getElementById("chatClose").addEventListener("click", () => setChat(false));
document.querySelectorAll("[data-chat-open]").forEach(button => button.addEventListener("click", () => setChat(true)));

const answerQuestion = window.FESTIVAL_AGENT.answer;
function addMessage(text, mine = false) { const el = document.createElement("div"); el.className = `chat-message max-w-[88%] whitespace-pre-line rounded-2xl p-3 text-sm leading-6 ${mine ? "ml-auto rounded-tr-sm bg-blue-600 text-white" : "rounded-tl-sm bg-white text-slate-700 shadow-sm"}`; el.dataset.role = mine ? "user" : "assistant"; el.textContent = text; const box = document.getElementById("chatMessages"); box.appendChild(el); box.scrollTop = box.scrollHeight; }
function ask(q) { if (!q.trim()) return; addMessage(q, true); setTimeout(() => addMessage(answerQuestion(q)), 220); }
document.getElementById("chatForm").addEventListener("submit", e => { e.preventDefault(); const q = input.value; input.value = ""; ask(q); });
document.querySelectorAll(".chat-chip").forEach(button => button.addEventListener("click", () => ask(button.dataset.question)));

function roundRect(ctx, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + width, y, x + width, y + height, r); ctx.arcTo(x + width, y + height, x, y + height, r); ctx.arcTo(x, y + height, x, y, r); ctx.arcTo(x, y, x + width, y, r); ctx.closePath();
}
function wrapCanvasText(ctx, text, maxWidth) {
  const lines = []; let line = "";
  for (const character of Array.from(text)) { const next = line + character; if (ctx.measureText(next).width > maxWidth && line) { lines.push(line); line = character; } else { line = next; } }
  if (line) lines.push(line); return lines;
}
async function captureConversation() {
  const messageNodes = [...document.querySelectorAll("#chatMessages .chat-message")];
  const canvas = document.createElement("canvas"); const ctx = canvas.getContext("2d");
  const width = 1080, margin = 64, maxTextWidth = 720, lineHeight = 43;
  ctx.font = '28px "Noto Sans KR", sans-serif';
  const messages = messageNodes.map(node => ({ role: node.dataset.role || "assistant", text: node.textContent.trim(), lines: wrapCanvasText(ctx, node.textContent.trim(), maxTextWidth) }));
  const contentHeight = messages.reduce((sum, message) => sum + Math.max(92, message.lines.length * lineHeight + 54) + 28, 0);
  canvas.width = width; canvas.height = Math.max(900, 270 + contentHeight + 120);
  const bg = ctx.createLinearGradient(0, 0, width, canvas.height); bg.addColorStop(0, "#eef8fb"); bg.addColorStop(1, "#f7fafc"); ctx.fillStyle = bg; ctx.fillRect(0, 0, width, canvas.height);
  const head = ctx.createLinearGradient(0, 0, width, 0); head.addColorStop(0, "#071b32"); head.addColorStop(1, "#0b3656"); ctx.fillStyle = head; ctx.fillRect(0, 0, width, 220);
  ctx.fillStyle = "#48e2dc"; ctx.beginPath(); ctx.arc(90, 78, 26, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = "#ffffff"; ctx.font = '800 38px "Noto Sans KR", sans-serif'; ctx.fillText("제11회 대한민국 약사학술제", 64, 145);
  ctx.fillStyle = "#9eeef0"; ctx.font = '700 22px "Noto Sans KR", sans-serif'; ctx.fillText("AX 학술제 Agent · 대화 기록", 130, 86);
  ctx.fillStyle = "#a9bbca"; ctx.font = '20px "Noto Sans KR", sans-serif'; ctx.fillText("AX 시대, 약사 직능의 새로운 도약", 64, 187);
  let y = 270;
  for (const message of messages) {
    ctx.font = '28px "Noto Sans KR", sans-serif';
    const bubbleWidth = Math.min(824, Math.max(300, Math.max(...message.lines.map(line => ctx.measureText(line).width), 0) + 64));
    const bubbleHeight = Math.max(92, message.lines.length * lineHeight + 54); const x = message.role === "user" ? width - margin - bubbleWidth : margin;
    ctx.fillStyle = message.role === "user" ? "#0d77e8" : "#ffffff"; roundRect(ctx, x, y, bubbleWidth, bubbleHeight, 28); ctx.fill();
    if (message.role !== "user") { ctx.strokeStyle = "#dce8ef"; ctx.lineWidth = 2; roundRect(ctx, x, y, bubbleWidth, bubbleHeight, 28); ctx.stroke(); }
    ctx.fillStyle = message.role === "user" ? "#ffffff" : "#17324d"; message.lines.forEach((line, index) => ctx.fillText(line, x + 32, y + 46 + index * lineHeight)); y += bubbleHeight + 28;
  }
  ctx.fillStyle = "#60758a"; ctx.font = '18px "Noto Sans KR", sans-serif'; ctx.fillText("2026. 11. 29. SUN · 서울 양재 aT센터", margin, canvas.height - 58);
  const blob = await new Promise(resolve => canvas.toBlob(resolve, "image/png")); if (!blob) return;
  const url = URL.createObjectURL(blob); const link = document.createElement("a"); link.href = url; link.download = `제11회-약사학술제-Agent-대화-${new Date().toISOString().slice(0,10)}.png`; document.body.appendChild(link); link.click(); link.remove(); setTimeout(() => URL.revokeObjectURL(url), 1000);
  const toast = document.getElementById("captureToast"); toast.classList.remove("opacity-0", "translate-y-2"); setTimeout(() => toast.classList.add("opacity-0", "translate-y-2"), 2200);
}
document.getElementById("chatCapture").addEventListener("click", captureConversation);

const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => entry.target.classList.toggle("is-visible", entry.isIntersecting)), { threshold: .12 });
document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

// OriginKit Snow Fall adapted for this dependency-free site.
function initHeroSnowfall() {
  const canvas = document.querySelector("[data-snowfall]");
  if (!canvas || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const hero = canvas.closest(".hero");
  const ctx = canvas.getContext("2d");
  if (!hero || !ctx) return;

  const palette = ["#67e8c6", "#38d8e8", "#a8b7ff"];
  const dpr = Math.min(devicePixelRatio || 1, 2);
  let width = 0, height = 0, flakes = [], frame = 0;
  const random = (min, max) => min + Math.random() * (max - min);

  function build() {
    const rect = hero.getBoundingClientRect();
    width = Math.max(1, Math.floor(rect.width));
    height = Math.max(1, Math.floor(rect.height));
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = width < 768 ? 74 : Math.min(175, Math.round(width * .115));
    flakes = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: random(.55, 2.35),
      speed: random(.28, .92),
      drift: random(-.12, .2),
      phase: Math.random() * Math.PI * 2,
      sway: random(.12, .5),
      alpha: random(.24, .78),
      color: palette[Math.floor(Math.random() * palette.length)]
    }));
  }

  function animate(time) {
    ctx.clearRect(0, 0, width, height);
    for (const flake of flakes) {
      flake.y += flake.speed;
      flake.x += flake.drift + Math.sin(time * .0008 + flake.phase) * flake.sway;
      if (flake.y - flake.radius > height) { flake.y = -flake.radius; flake.x = Math.random() * width; }
      if (flake.x < -flake.radius) flake.x = width + flake.radius;
      if (flake.x > width + flake.radius) flake.x = -flake.radius;
      ctx.globalAlpha = flake.alpha;
      ctx.fillStyle = flake.color;
      ctx.beginPath();
      ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    frame = requestAnimationFrame(animate);
  }

  build();
  frame = requestAnimationFrame(animate);
  const observer = new ResizeObserver(build);
  observer.observe(hero);
  document.addEventListener("visibilitychange", () => {
    cancelAnimationFrame(frame);
    if (!document.hidden) frame = requestAnimationFrame(animate);
  });
}
initHeroSnowfall();
function initSloganFireworks() {
  const canvas = document.querySelector("[data-slogan-fireworks]");
  if (!canvas || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const colors = ["#67e8c6", "#38d8e8", "#a8b7ff", "#d7fff7"];
  const dpr = Math.min(devicePixelRatio || 1, 2);
  let width = 1, height = 1, frame = 0, lastTime = performance.now();
  let rockets = [], particles = [], launchQueue = [], nextCycle = lastTime + 500;
  const random = (min, max) => min + Math.random() * (max - min);

  function resize() {
    const rect = canvas.getBoundingClientRect();
    width = Math.max(1, Math.floor(rect.width));
    height = Math.max(1, Math.floor(rect.height));
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    rockets = [];
    particles = [];
  }

  function launch(lane) {
    const mobile = width < 520;
    const mobileRanges = [[.28, .48], [.46, .66], [.62, .82]];
    const desktopRanges = [[.16, .34], [.38, .56], [.58, .76]];
    const [targetMin, targetMax] = (mobile ? mobileRanges : desktopRanges)[lane];
    rockets.push({
      startX: random(width * .04, width * (mobile ? .26 : .18)),
      startY: height + 8,
      targetX: random(width * targetMin, width * targetMax),
      targetY: random(height * .14, height * (mobile ? .54 : .62)),
      duration: random(1.02, 1.35),
      elapsed: 0,
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }

  function explode(x, y, baseColor) {
    const count = width < 520 ? 44 : 72;
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = random(width < 520 ? 70 : 105, width < 520 ? 165 : 240);
      particles.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: random(1.4, 2.05),
        maxLife: 0,
        size: random(1.2, 2.8),
        color: Math.random() < .42 ? baseColor : colors[Math.floor(Math.random() * colors.length)]
      });
      particles[particles.length - 1].maxLife = particles[particles.length - 1].life;
    }
  }

  function drawGlow(x, y, radius, color, alpha) {
    const glow = ctx.createRadialGradient(x, y, 0, x, y, radius * 4);
    glow.addColorStop(0, color);
    glow.addColorStop(.25, color);
    glow.addColorStop(1, "transparent");
    ctx.globalAlpha = alpha;
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(x, y, radius * 4, 0, Math.PI * 2);
    ctx.fill();
  }

  function animate(now) {
    const dt = Math.min((now - lastTime) / 1000, .034);
    lastTime = now;
    ctx.clearRect(0, 0, width, height);
    ctx.globalCompositeOperation = "lighter";

    if (now >= nextCycle) {
      const secondDelay = random(430, 620);
      launchQueue.push(
        { due: now, lane: 0 },
        { due: now + secondDelay, lane: 1 },
        { due: now + secondDelay + random(430, 620), lane: 2 }
      );
      nextCycle = now + random(6000, 7000);
    }
    while (launchQueue.length && now >= launchQueue[0].due) {
      const queued = launchQueue.shift();
      launch(queued.lane);
    }

    rockets = rockets.filter(rocket => {
      rocket.elapsed += dt;
      const progress = Math.min(rocket.elapsed / rocket.duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const x = rocket.startX + (rocket.targetX - rocket.startX) * eased;
      const y = rocket.startY + (rocket.targetY - rocket.startY) * eased;
      drawGlow(x, y, 2.8, rocket.color, .95);
      ctx.globalAlpha = 1;
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.arc(x, y, 1.7, 0, Math.PI * 2);
      ctx.fill();
      if (progress >= 1) {
        explode(x, y, rocket.color);
        return false;
      }
      return true;
    });

    particles = particles.filter(particle => {
      particle.life -= dt;
      if (particle.life <= 0) return false;
      particle.vx *= Math.pow(.985, dt * 60);
      particle.vy = particle.vy * Math.pow(.992, dt * 60) + 52 * dt;
      particle.x += particle.vx * dt;
      particle.y += particle.vy * dt;
      const alpha = Math.pow(particle.life / particle.maxLife, 1.45);
      drawGlow(particle.x, particle.y, particle.size, particle.color, alpha * .72);
      ctx.globalAlpha = alpha;
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, Math.max(.55, particle.size * alpha), 0, Math.PI * 2);
      ctx.fill();
      return true;
    });

    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = "source-over";
    frame = requestAnimationFrame(animate);
  }

  resize();
  const observer = new ResizeObserver(resize);
  observer.observe(canvas);
  frame = requestAnimationFrame(animate);
  document.addEventListener("visibilitychange", () => {
    cancelAnimationFrame(frame);
    if (!document.hidden) {
      lastTime = performance.now();
      frame = requestAnimationFrame(animate);
    }
  });
}
initSloganFireworks();
const applyProgramFilter = filter => {
  const programList = document.getElementById("programList");
  if (programList) programList.dataset.filter = filter;
  document.querySelectorAll("[data-filter]").forEach(button => button.setAttribute("aria-pressed", button.dataset.filter === filter));
  document.querySelectorAll(".program-session-card, .program-track-card").forEach(item => {
    item.classList.toggle("is-hidden", filter !== "all" && item.dataset.room !== filter);
  });
  document.querySelectorAll(".program-hour-group").forEach(group => {
    group.classList.toggle("is-hidden", !group.querySelector(".program-session-card:not(.is-hidden)"));
  });
};

document.querySelectorAll("[data-filter]").forEach(button => button.addEventListener("click", () => applyProgramFilter(button.dataset.filter)));

const programList = document.getElementById("programList");
if (programList) {
  const programData = window.FESTIVAL_DATA;
  const roomOrder = new Map(programData.rooms.map((room, index) => [room.id, index]));
  const orderedSessions = [...programData.sessions].sort((a, b) => a.start.localeCompare(b.start) || roomOrder.get(a.roomId) - roomOrder.get(b.roomId));
  const groupedSessions = orderedSessions.reduce((groups, session) => {
    if (!groups.has(session.start)) groups.set(session.start, []);
    groups.get(session.start).push(session);
    return groups;
  }, new Map());

  programList.innerHTML = [...groupedSessions].map(([start, sessions]) => {
    const cards = sessions.map(session => {
      const room = programData.rooms.find(item => item.id === session.roomId);
      const details = [session.speaker, session.description].filter(Boolean).join(" · ");
      const statusClass = session.status === "확정" ? " is-confirmed" : session.status === "편성안" ? " is-draft" : "";
      const duration = Number(session.end.slice(0, 2)) - Number(session.start.slice(0, 2));
      const durationLabel = duration > 1 ? `${duration}시간 프로그램` : `${session.start}–${session.end}`;
      return `<article class="program-session-card" data-room="${room.id}">
        <div class="program-card-top"><span class="program-room-label ${room.labelClass}">${room.floor} · ${room.name}</span><span class="program-duration">${durationLabel}</span></div>
        <div class="program-session"><h3>${session.title}</h3><p>${details || "세부 내용 등록 예정"}</p></div>
        <span class="program-status${statusClass}">${session.status}</span>
      </article>`;
    }).join("");
    return `<section class="program-hour-group" data-time="${start}">
      <div class="program-time-rail"><span>TIME</span><strong>${start}</strong></div>
      <div class="program-session-grid">${cards}</div>
    </section>`;
  }).join("");

  const trackList = document.getElementById("programTracks");
  if (trackList) trackList.innerHTML = programData.rooms.map(room => `<article class="program-track-card program-track-${room.id}" data-room="${room.id}"><div><span>${room.floor} · ${room.name}</span></div><strong>${room.track}</strong></article>`).join("");
}
