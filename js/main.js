/* =========================================================
   SANGAM 2027 — site interactions
   ========================================================= */

// ---------- Track data (from Tracks.docx / brochure) ----------
const TRACKS = [
  {
    title: "Reimagining Institutions, Markets and Economic Transformation for Viksit Bharat",
    covers: ["Macroeconomics and Microeconomics", "Institutional Economics", "Development Economics", "Indian Economy and Economic Reforms", "International Trade and Globalisation", "Economic Policy and Structural Transformation", "Labour and Employment Economics", "Rural and Urban Economy", "Industry and Manufacturing Policy", "MSMEs and Economic Development", "Regional and Inclusive Growth", "India's Global Economic Position"]
  },
  {
    title: "Finance, Investment and Financial Systems for an Inclusive and Resilient Economy",
    covers: ["Corporate Finance and Financial Management", "Banking and Financial Institutions", "Financial Markets and Investment", "Portfolio and Risk Management", "Behavioural Finance", "Household Finance and Financial Well-being", "Financial Inclusion", "FinTech and Digital Finance", "Sustainable Finance and Green Finance", "Insurance and Actuarial Studies", "Accounting and Financial Reporting", "Corporate Taxation and Financial Policy", "Capital Markets and Financial Regulation"]
  },
  {
    title: "Innovation, Entrepreneurship and Business Transformation in the New Economy",
    covers: ["Entrepreneurship and Start-up Ecosystems", "Innovation Management", "Strategic Management", "Corporate Strategy", "Business Model Innovation", "MSMEs and Family Businesses", "Social Entrepreneurship", "Digital Entrepreneurship", "International Business", "Competitiveness and Productivity", "Technology-based Entrepreneurship", "Industry 4.0", "New Business Models", "Business Resilience and Transformation"]
  },
  {
    title: "Marketing, Consumer Behaviour and the Future of Digital Business",
    covers: ["Strategic Marketing", "Consumer Behaviour", "Consumer Psychology", "Digital Marketing", "Social Media and Influencer Marketing", "Brand Management", "Retail and E-Commerce", "Services Marketing", "Marketing Analytics", "Customer Experience and Engagement", "Advertising and Communication", "Sustainable and Responsible Marketing", "Rural and Inclusive Marketing", "AI in Marketing", "Emerging Marketing Technologies"]
  },
  {
    title: "People, Employment and Workplace Dynamics. Human Capital, Organizational Behaviour and the Future of Work",
    desc: "This track explores the behavioural, technological, institutional and employment-related dimensions of managing people, fostering inclusive workplaces and building sustainable employment relationships.",
    listHead: "Key research areas",
    covers: ["Human Resource Management and Human Capital Management", "HR Analytics, People Analytics and Evidence-Based HRM", "Technology in Human Capital Management: AI, HR Information Systems and Digital HR", "Organizational Behaviour, workplace psychology and employee attitudes", "Workplace ostracism, social exclusion, incivility and employee well-being", "Workplace spirituality, meaningful work and employee flourishing", "Diversity, Equity, Inclusion and Belonging (DEIB)", "Green HRM, sustainable HRM and environmentally responsible employee behaviour", "Industrial Relations, Trade Unions and Collective Bargaining", "Labour Legislation, Employment Regulation and Labour Market Institutions", "Labour codes, employment relations and the future of labour regulation", "Employee engagement, organizational justice, psychological safety and employee voice", "Talent management, employee experience, retention and workforce planning", "Gig work, platform employment, decent work and emerging employment arrangements"]
  },
  {
    title: "Strategy and Transformation, Strategic Management for Sustainable Competitiveness",
    desc: "Strategic Management and Organizational Transformation for Sustainable Competitiveness. This track examines how organizations develop strategies, respond to technological and institutional change, build adaptive capabilities and pursue sustainable competitiveness in a dynamic global economy.",
    listHead: "Key research areas",
    covers: ["Corporate strategy, competitive advantage and strategic decision-making", "Strategic leadership and executive management", "Organizational change, development and transformation", "Innovation strategy, entrepreneurship and business model renewal", "Sustainability strategy, ESG and responsible enterprise", "Digital transformation, AI and data-driven strategic management", "Organizational resilience, strategic agility and dynamic capabilities", "Technology-enabled organizational design and transformation", "Organizational learning, knowledge management and innovation capabilities", "Sustainable growth and enterprise competitiveness in emerging economies", "Strategic responses to changing labour markets and employment institutions"]
  },
  {
    title: "AI, Digital Transformation and Data-Driven Management across Management and Social Sciences",
    desc: "This track welcomes interdisciplinary research examining the role of artificial intelligence, digital technologies and data-driven approaches in transforming management practices, organizations, public institutions and society. It encourages contributions from management, economics, commerce, sociology, political science, public administration, psychology, communication and other social science disciplines, alongside technology-oriented research with relevant managerial or societal implications.",
    covers: ["Artificial Intelligence and Generative AI", "Machine Learning and Intelligent Systems", "Data Science, Business Analytics and Social Science Analytics", "Digital Transformation in Business, Government and Society", "Digital Platforms and Ecosystems", "Business Intelligence and Data-Driven Decision-Making", "Information Systems and Technology Adoption", "AI-Driven Decision-Making in Management and Public Policy", "Automation, Robotics and the Future of Work", "Blockchain and Emerging Technologies", "Industry 4.0 and Smart Manufacturing", "Human–AI Collaboration and Human–Technology Interaction", "AI Ethics, Responsible AI and Algorithmic Bias", "Cybersecurity, Data Privacy and Digital Risk", "Technology Management and Digital Innovation", "Digital Governance and E-Governance", "Digital Inequality, Inclusion and the Digital Divide", "Technology, Human Behaviour and Social Change", "Digital Economy, Employment and Platform-Based Work", "AI Applications in Education, Healthcare and Public Services"]
  },
  {
    title: "Governance, Public Policy and Inclusive Development for Viksit Bharat",
    covers: ["Corporate Governance", "Public Governance and Administration", "Public Policy", "Regulatory Frameworks", "Economic and Business Policy", "Government–Business Relations", "E-Governance and Digital Governance", "Public Finance", "Institutional Reforms", "Policy Innovation", "Social Protection and Welfare", "Inclusive Growth", "Gender and Social Inclusion", "Rural and Regional Development", "Public–Private Partnerships", "Policy for Viksit Bharat @2047"]
  },
  {
    title: "Sustainability, Climate Action and Responsible Business for a Resilient Future",
    covers: ["Sustainability Management", "Environmental, Social and Governance (ESG)", "Climate Change and Climate Risk", "Sustainable Finance", "Green Finance", "Circular Economy", "Sustainable Supply Chains", "Green Innovation", "Renewable Energy and Energy Transition", "Sustainable Consumption", "Corporate Social Responsibility", "Responsible Business", "Climate Governance", "Environmental Economics", "Carbon Markets and Carbon Accounting", "Low-Emission Development", "Climate Resilience", "Sustainable Development"]
  }
];

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const pad = n => String(n).padStart(2, "0");

// ---------- Header shadow, back-to-top ----------
// (the active nav link is set per page in the HTML)
const header = $("#header");
const toTop = $("#toTop");

function onScroll() {
  const y = window.scrollY;
  header.classList.toggle("scrolled", y > 10);
  toTop.classList.toggle("show", y > 600);
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// ---------- Mobile nav ----------
const burger = $("#burger");
const nav = $("#nav");
function closeNav() {
  nav.classList.remove("open");
  burger.classList.remove("open");
  burger.setAttribute("aria-expanded", "false");
}
burger.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  burger.classList.toggle("open", open);
  burger.setAttribute("aria-expanded", String(open));
});
$$(".has-drop > a").forEach(a => {
  a.addEventListener("click", e => {
    if (window.innerWidth <= 1260) {
      e.preventDefault();
      a.parentElement.classList.toggle("open");
    }
  });
});
$$(".nav a").forEach(a => {
  a.addEventListener("click", () => {
    if (!a.parentElement.classList.contains("has-drop")) closeNav();
  });
});

// ---------- Hero slider (home page) ----------
if ($(".hero")) {
const slides = $$(".slide");
const dotsWrap = $("#dots");
let slideIdx = 0, slideTimer;
slides.forEach((_, i) => {
  const b = document.createElement("button");
  b.setAttribute("aria-label", "Go to slide " + (i + 1));
  b.addEventListener("click", () => { goSlide(i); restartSlider(); });
  dotsWrap.appendChild(b);
});
const dots = $$("button", dotsWrap);
function goSlide(i) {
  slideIdx = (i + slides.length) % slides.length;
  slides.forEach((s, k) => s.classList.toggle("active", k === slideIdx));
  dots.forEach((d, k) => d.classList.toggle("active", k === slideIdx));
}
function restartSlider() {
  clearInterval(slideTimer);
  slideTimer = setInterval(() => goSlide(slideIdx + 1), 6000);
}
$(".slide-ctrl.prev").addEventListener("click", () => { goSlide(slideIdx - 1); restartSlider(); });
$(".slide-ctrl.next").addEventListener("click", () => { goSlide(slideIdx + 1); restartSlider(); });
goSlide(0);
restartSlider();
}

// ---------- Academic partners carousel (home page) ----------
// Duplicate the logo list once; the CSS animation scrolls by exactly half the track.
const hpTrack = $("#hpTrack");
if (hpTrack) {
  [...hpTrack.children].forEach(li => {
    const copy = li.cloneNode(true);
    copy.setAttribute("aria-hidden", "true");
    $$("a", copy).forEach(a => a.tabIndex = -1);
    hpTrack.appendChild(copy);
  });
}

// ---------- Countdown (6 Feb 2027, 09:00 IST) ----------
if ($("#countdown")) {
const target = new Date("2027-02-06T09:00:00+05:30").getTime();
function tick() {
  let diff = Math.max(0, target - Date.now());
  const d = Math.floor(diff / 864e5); diff -= d * 864e5;
  const h = Math.floor(diff / 36e5); diff -= h * 36e5;
  const m = Math.floor(diff / 6e4); diff -= m * 6e4;
  const s = Math.floor(diff / 1e3);
  $("#cd-days").textContent = pad(d);
  $("#cd-hours").textContent = pad(h);
  $("#cd-mins").textContent = pad(m);
  $("#cd-secs").textContent = pad(s);
}
tick();
setInterval(tick, 1000);
}

// ---------- Timeline: mark past dates ----------
const today = new Date(); today.setHours(0, 0, 0, 0);
$$(".tl-item").forEach(item => {
  const d = new Date(item.dataset.date + "T23:59:59+05:30");
  if (d < today && !item.classList.contains("highlight")) item.classList.add("past");
});

// ---------- Tracks grid + modal (tracks page) ----------
const grid = $("#tracksGrid");
const modal = $("#trackModal");
let lastFocus = null;
function closeModal() {
  if (!modal || !modal.classList.contains("open")) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (lastFocus) lastFocus.focus();
}
if (grid && modal) {
TRACKS.forEach((t, i) => {
  const card = document.createElement("button");
  card.className = "track reveal";
  card.type = "button";
  card.innerHTML = `
    <span class="track-num">${pad(i + 1)}</span>
    <span class="track-label">Track ${pad(i + 1)}</span>
    <h3>${t.title}</h3>
    <span class="track-more">View research areas →</span>`;
  card.addEventListener("click", () => openTrack(i));
  grid.appendChild(card);
});

function openTrack(i) {
  const t = TRACKS[i];
  $("#modalNum").textContent = "Track " + pad(i + 1);
  $("#modalTitle").textContent = t.title;
  $("#modalDesc").textContent = t.desc || "";
  $("#modalListHead").textContent = t.listHead || "Covers";
  $("#modalList").innerHTML = t.covers.map(c => `<li>${c}</li>`).join("");
  lastFocus = document.activeElement;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  $(".modal-close", modal).focus();
}
$(".modal-close", modal).addEventListener("click", closeModal);
modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
// open a track directly via tracks.html#track-3
const m = location.hash.match(/^#track-(\d)$/);
if (m && TRACKS[m[1] - 1]) openTrack(m[1] - 1);
}

// ---------- Gallery lightbox (gallery page) ----------
const gItems = $$("#galleryGrid .g-item");
const lb = $("#lightbox");
const lbImg = $("#lbImg");
let lbIdx = 0;
function closeLb() {
  if (!lb || !lb.classList.contains("open")) return;
  lb.classList.remove("open");
  lb.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
if (lb) {
function showLb(i) {
  lbIdx = (i + gItems.length) % gItems.length;
  lbImg.src = gItems[lbIdx].getAttribute("href");
  lbImg.alt = $("img", gItems[lbIdx]).alt;
}
gItems.forEach((a, i) => a.addEventListener("click", e => {
  e.preventDefault();
  showLb(i);
  lb.classList.add("open");
  lb.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}));
$(".lb-close").addEventListener("click", closeLb);
$(".lb-prev").addEventListener("click", () => showLb(lbIdx - 1));
$(".lb-next").addEventListener("click", () => showLb(lbIdx + 1));
lb.addEventListener("click", e => { if (e.target === lb) closeLb(); });
}

document.addEventListener("keydown", e => {
  if (e.key === "Escape") { closeModal(); closeLb(); closeNav(); }
  if (lb && lb.classList.contains("open")) {
    if (e.key === "ArrowLeft") showLb(lbIdx - 1);
    if (e.key === "ArrowRight") showLb(lbIdx + 1);
  }
});

// ---------- Copy bank details ----------
const toast = $("#toast");
$$(".copyable").forEach(el => el.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(el.dataset.copy);
    toast.textContent = "Copied: " + el.dataset.copy;
  } catch {
    toast.textContent = el.dataset.copy;
  }
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1800);
}));

// ---------- Reveal on scroll + stat counters ----------
const io = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (!en.isIntersecting) return;
    en.target.classList.add("visible");
    $$("[data-count]", en.target).forEach(countUp);
    io.unobserve(en.target);
  });
}, { threshold: 0.12 });
$$(".reveal").forEach(el => io.observe(el));

function countUp(el) {
  const end = +el.dataset.count;
  const dur = 1500;
  const start = performance.now();
  (function step(now) {
    const p = Math.min(1, (now - start) / dur);
    el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(step);
  })(start);
}
