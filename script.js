// Mobile nav toggle
const toggle = document.getElementById('navToggle');
const links = document.querySelector('.nav__links');
toggle?.addEventListener('click', () => {
  links.style.display = links.style.display === 'block' ? '' : 'block';
});

// Back-to-top
const toTop = document.getElementById('toTop');
toTop?.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

// Circular skill meters
document.querySelectorAll('.circle').forEach(c => {
  const pct = Number(c.dataset.pct || 0);
  c.style.setProperty('--pct', pct);
});

// Highlight active nav on scroll
const sections = [...document.querySelectorAll('section[id]')];
const navAs = [...document.querySelectorAll('.nav__links a')];

function setActive() {
  const pos = window.scrollY + 120;
  let current = sections[0]?.id;
  sections.forEach(sec => {
    if (pos >= sec.offsetTop) current = sec.id;
  });
  navAs.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${current}`));
}
window.addEventListener('scroll', setActive);
setActive();
