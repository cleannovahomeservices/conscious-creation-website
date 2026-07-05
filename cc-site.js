/* ════════════════════════════════════════════════════════════════
   CONSCIOUS CREATION — shared behaviour (cc-site.js)
   1) Top bar gains a background once the page is scrolled.
      Inner pages carry class "solid" on the topbar so the bar is
      legible from first paint (no transparent hero behind it).
   2) Staggered reveal-on-scroll for every .reveal element.
   ════════════════════════════════════════════════════════════════ */

// top bar background on scroll
const tb = document.getElementById('topbar');
if (tb && !tb.classList.contains('solid')) {
  window.addEventListener('scroll', () => {
    tb.classList.toggle('scrolled', window.scrollY > 40);
  });
}

// staggered reveal on scroll
const obs = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      const sibs = [...e.target.parentElement.children].filter(c => c.classList.contains('reveal'));
      const idx = sibs.indexOf(e.target);
      e.target.style.transitionDelay = (idx * 0.08) + 's';
      e.target.classList.add('in');
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
