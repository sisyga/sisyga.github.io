// Theme toggle, simulation playback, navigation and visitor-statistics events.
const themeBtn = document.getElementById('themeToggle');
const syncTheme = () => {
  const dark = document.documentElement.getAttribute('data-theme') === 'dark';
  themeBtn.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
};
syncTheme();
themeBtn.addEventListener('click', () => {
  const dark = document.documentElement.getAttribute('data-theme') === 'dark';
  if (dark) document.documentElement.removeAttribute('data-theme');
  else document.documentElement.setAttribute('data-theme', 'dark');
  try { localStorage.setItem('syga-theme', dark ? 'light' : 'dark'); } catch (e) {}
  syncTheme();
});
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  let saved = null;
  try { saved = localStorage.getItem('syga-theme'); } catch (err) {}
  if (saved) return;
  if (e.matches) document.documentElement.setAttribute('data-theme', 'dark');
  else document.documentElement.removeAttribute('data-theme');
  syncTheme();
});

const sim = document.getElementById('heroSim');
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
if (sim) {
  const playButton = document.getElementById('simToggle');
  sim.controls = false;
  playButton.hidden = false;
  let userPaused = false;
  sim.addEventListener('loadedmetadata', () => { if (sim.duration > 4) sim.currentTime = 4; }, { once: true });
  const syncPlayback = () => { playButton.textContent = sim.paused ? 'Play simulation' : 'Pause simulation'; };
  playButton.addEventListener('click', () => {
    if (sim.paused) { userPaused = false; sim.play().catch(syncPlayback); }
    else { userPaused = true; sim.pause(); }
  });
  sim.addEventListener('play', syncPlayback);
  sim.addEventListener('pause', syncPlayback);
  sim.addEventListener('error', () => {
    playButton.hidden = true;
    document.getElementById('simError').hidden = false;
  });
  motionPreference.addEventListener('change', () => {
    if (motionPreference.matches) { userPaused = true; sim.pause(); }
  });
  // Start when first visible; scrolling must not interrupt playback.
  const visibility = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !document.hidden) {
      if (!motionPreference.matches && !userPaused) sim.play().catch(syncPlayback);
      visibility.disconnect();
    }
  }, { threshold: 0 });
  visibility.observe(sim);
  let resumeOnReturn = false;
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      resumeOnReturn = !sim.paused;
      sim.pause();
    } else if (resumeOnReturn) {
      resumeOnReturn = false;
      if (!userPaused && !motionPreference.matches) sim.play().catch(syncPlayback);
    }
  });
  syncPlayback();
}

const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
navToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('#navLinks a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open'); navToggle.setAttribute('aria-expanded', 'false');
}));
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && nav.classList.contains('open')) { nav.classList.remove('open'); navToggle.setAttribute('aria-expanded', 'false'); navToggle.focus(); }
});
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 12);
onScroll(); window.addEventListener('scroll', onScroll, { passive: true });

// Analytics (GoatCounter, cookie-free; see privacy.html). count.js loads
// asynchronously, so events wait briefly for it and are dropped if it never
// arrives (blocked, offline, or a local preview, which it does not count).
const countEvent = (path, title, tries = 0) => {
  const gc = window.goatcounter;
  if (gc && gc.count) gc.count({ path, title: title || path, event: true });
  else if (tries < 20) setTimeout(() => countEvent(path, title, tries + 1), 500);
};
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href]');
  if (!a) return;
  const href = a.getAttribute('href');
  if (href.endsWith('simon-syga-cv.pdf')) countEvent('download-cv', 'CV (PDF)');
  else if (href.startsWith('mailto:')) countEvent('contact-email', 'Email link');
  else if (href.startsWith('https://tud.qucosa.de/api/')) countEvent('download-thesis', 'PhD thesis (PDF)');
  else if (href.startsWith('https://tud.qucosa.de/')) countEvent('paper: PhD thesis', 'PhD thesis (Qucosa)');
  else if (href.startsWith('https://doi.org/10.5281/')) countEvent('code: ' + href.replace('https://doi.org/10.5281/', ''), a.textContent.trim());
  else if (/^https:\/\/(doi\.org|arxiv\.org)\//.test(href)) countEvent('paper: ' + href.replace(/^https:\/\/(doi\.org\/)?/, ''), a.textContent.trim());
  else if (/^https:\/\/github\.com\//.test(href)) countEvent('code: ' + href.replace('https://github.com/', ''), a.textContent.trim());
});
// Count each section once per visit when it reaches the upper 60% of the
// screen (a fraction-visible threshold would never fire for sections taller
// than the screen): a cookie-free indication of how far people read.
const seen = new IntersectionObserver(entries => entries.forEach(entry => {
  if (!entry.isIntersecting) return;
  seen.unobserve(entry.target);
  countEvent('section: ' + entry.target.id, 'Viewed section ' + entry.target.id);
}), { rootMargin: '0px 0px -40% 0px' });
document.querySelectorAll('main section[id]:not(#hero):not(#recognition)').forEach(sec => seen.observe(sec));
