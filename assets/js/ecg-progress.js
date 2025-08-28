(function () {
  console.log("✅ ecg-progress.js loaded");

  const svg = document.getElementById('ecg-svg');
  console.log("svg found?", svg);

  if (!svg) return;

  const fillRect = document.getElementById('ecg-fill-rect');
  const solidBg = document.getElementById('ecg-solid-bg');
  console.log("fillRect found?", fillRect);
  console.log("solidBg found?", solidBg);

  const BAR_HEIGHT = 40;

  function sizePattern() {
    const vw = window.innerWidth || document.documentElement.clientWidth;
    solidBg.setAttribute('width', vw);
    solidBg.setAttribute('height', BAR_HEIGHT);
  }

  function onScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    const maxScroll = docHeight - winHeight;
    const pct = maxScroll > 0 ? Math.min(scrollTop / maxScroll, 1) : 0;

    const vw = window.innerWidth;

    fillRect.setAttribute('width', pct * vw);
    fillRect.setAttribute('height', BAR_HEIGHT);

    console.log("scrolling", { pct, width: pct * vw });
  }

  window.addEventListener('resize', () => { sizePattern(); onScroll(); }, { passive: true });
  window.addEventListener('scroll', onScroll, { passive: true });

  sizePattern();
  onScroll();
})();
