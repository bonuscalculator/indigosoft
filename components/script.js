/* Scroll progress + header state */
const progressBar = document.getElementById('progressBar');
const header = document.getElementById('siteHeader');
function onScroll(){
  const h = document.documentElement;
  const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
  progressBar.style.width = scrolled + '%';
  header.classList.toggle('is-scrolled', h.scrollTop > 8);
}
document.addEventListener('scroll', onScroll, { passive:true });
onScroll();

/* Mobile nav toggle */
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
navToggle.addEventListener('click', () => {
  const open = mainNav.classList.toggle('is-open');
  navToggle.classList.toggle('is-open', open);
  navToggle.setAttribute('aria-expanded', open);
});
mainNav.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    mainNav.classList.remove('is-open');
    navToggle.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', false);
  });
});

/* Industry tabs */
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');
tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => { b.classList.remove('is-active'); b.setAttribute('aria-selected','false'); });
    tabPanels.forEach(p => p.classList.remove('is-active'));
    btn.classList.add('is-active');
    btn.setAttribute('aria-selected','true');
    document.getElementById('panel-' + btn.dataset.tab).classList.add('is-active');
  });
});

/* FAQ accordion */
document.querySelectorAll('.acc-trigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const item = trigger.closest('.acc-item');
    const isOpen = item.classList.contains('is-open');
    document.querySelectorAll('.acc-item').forEach(i => {
      i.classList.remove('is-open');
      i.querySelector('.acc-trigger').setAttribute('aria-expanded','false');
    });
    if (!isOpen){
      item.classList.add('is-open');
      trigger.setAttribute('aria-expanded','true');
    }
  });
});

/* Count-up stats, triggered once when visible */
const counters = document.querySelectorAll('[data-count]');
let counted = false;
function runCounters(){
  if (counted) return;
  counted = true;
  counters.forEach(el => {
    const target = parseInt(el.dataset.count, 10);
    const duration = 1200;
    const start = performance.now();
    function tick(now){
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}
const heroStats = document.querySelector('.hero-stats');
if (heroStats){
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) runCounters(); });
  }, { threshold: 0.4 });
  io.observe(heroStats);
}
