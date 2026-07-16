// ===== Typing Effect =====
const phrases = [
  "AI Engineer & Software Engineer",
  "MS CS Student @ University of Alabama",
  "Graduate Research Assistant @ NOAA",
  "Building Multi-Agent AI Systems",
  "6+ Years Shipping Production Systems"
];
let phraseIdx = 0, charIdx = 0, deleting = false;
const typedEl = document.getElementById("typedText");

function typeLoop() {
  if (!typedEl) return;
  const current = phrases[phraseIdx];
  typedEl.textContent = current.substring(0, charIdx);

  if (!deleting) {
    charIdx++;
    if (charIdx > current.length) { deleting = true; setTimeout(typeLoop, 1800); return; }
    setTimeout(typeLoop, 60);
  } else {
    charIdx--;
    if (charIdx < 0) { deleting = false; phraseIdx = (phraseIdx + 1) % phrases.length; setTimeout(typeLoop, 400); return; }
    setTimeout(typeLoop, 30);
  }
}
typeLoop();

// ===== Particle Canvas =====
const canvas = document.getElementById("heroCanvas");
if (canvas) {
  const ctx = canvas.getContext("2d");
  let particles = [];
  const colors = ["rgba(124,58,237,0.3)", "rgba(236,72,153,0.25)", "rgba(6,182,212,0.25)", "rgba(249,115,22,0.2)"];

  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  function spawnParticles() {
    particles = [];
    const count = Math.min(50, Math.floor(canvas.width / 20));
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 3 + 1,
        dx: (Math.random() - 0.5) * 0.4,
        dy: (Math.random() - 0.5) * 0.4,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
  }
  spawnParticles();

  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.dx; p.y += p.dy;
      if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
    });
    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(124,58,237,${0.06 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(drawParticles);
  }
  drawParticles();
}

// ===== Scroll Reveal (Intersection Observer) =====
const revealEls = document.querySelectorAll(".reveal");
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add("visible"), i * 80);
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => revealObs.observe(el));

// ===== Skill Circles Animation =====
const circleObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const pct = Number(entry.target.dataset.pct || 0);
      const ring = entry.target.querySelector(".circle__ring");
      if (ring) ring.style.setProperty("--pct", pct);
      circleObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll(".circle").forEach(c => circleObs.observe(c));

// ===== Skill Bars Animation =====
const barObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const w = entry.target.dataset.width;
      if (w) entry.target.style.width = w + "%";
      barObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll(".bar__fill").forEach(b => barObs.observe(b));

// ===== Nav Scroll Effects =====
const navbar = document.getElementById("navbar");
const sections = [...document.querySelectorAll("section[id]")];
const navAs = [...document.querySelectorAll(".nav__links a")];

function onScroll() {
  // Nav shadow
  if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 20);

  // Active section highlight
  const pos = window.scrollY + 140;
  let current = sections[0]?.id;
  sections.forEach(sec => { if (pos >= sec.offsetTop) current = sec.id; });
  navAs.forEach(a => a.classList.toggle("active", a.getAttribute("href") === `#${current}`));

  // Back to top visibility
  const toTop = document.getElementById("toTop");
  if (toTop) toTop.classList.toggle("visible", window.scrollY > 400);
}
window.addEventListener("scroll", onScroll);
onScroll();

// ===== Back to Top =====
document.getElementById("toTop")?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// ===== Mobile Nav =====
const toggle = document.getElementById("navToggle");
const mobileNav = document.getElementById("mobileNav");
const mobileClose = document.getElementById("mobileNavClose");

toggle?.addEventListener("click", () => mobileNav?.classList.add("open"));
mobileClose?.addEventListener("click", () => mobileNav?.classList.remove("open"));
mobileNav?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => mobileNav.classList.remove("open"));
});
