(function () {
  const svg = document.getElementById('ecg-svg');
  if (!svg) return;

  const fillRect = document.getElementById('ecg-fill-rect');
  const solidBg = document.getElementById('ecg-solid-bg');

  const BAR_HEIGHT = 40;

  function sizePattern() {
    const vw = window.innerWidth || document.documentElement.clientWidth;

    // cream background always full width
    solidBg.setAttribute('width', vw);
    solidBg.setAttribute('height', BAR_HEIGHT);
  }

  function onScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    const maxScroll = docHeight - winHeight;

    // clamp between 0–1
    const pct = maxScroll > 0 ? Math.min(scrollTop / maxScroll, 1) : 0;

    const vw = window.innerWidth;

    // grow ECG fill rect → pattern tiles automatically
    fillRect.setAttribute('width', pct * vw);
    fillRect.setAttribute('height', BAR_HEIGHT);

    // DEBUG (can remove later)
    console.log("page:", window.location.pathname, "pct:", pct);
  }

  window.addEventListener('resize', () => { sizePattern(); onScroll(); }, { passive: true });
  window.addEventListener('scroll', onScroll, { passive: true });

  sizePattern();
  onScroll();
})();
