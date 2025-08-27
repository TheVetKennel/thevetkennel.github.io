(function () {
  const svg = document.getElementById('ecg-svg');
  if (!svg) return;

  const pattern = document.getElementById('ecgPattern');
  const img = document.getElementById('ecgImage');
  const fillRect = document.getElementById('ecg-fill-rect');
  const bgRect = document.getElementById('ecg-bg-rect');

  const BAR_HEIGHT = 40;
  const REPEATS = 10;

  function sizePattern() {
    const vw = window.innerWidth;
    const tileWidth = Math.max(40, Math.round(vw / REPEATS));

    // Pattern size
    pattern.setAttribute('width', tileWidth);
    pattern.setAttribute('height', BAR_HEIGHT);

    // Stretch the ECG image
    img.setAttribute('width', tileWidth);
    img.setAttribute('height', BAR_HEIGHT);

    // Background bar width
    bgRect.setAttribute('width', vw);
    bgRect.setAttribute('height', BAR_HEIGHT);
  }

  function onScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    const maxScroll = docHeight - winHeight;
    const pct = maxScroll > 0 ? (scrollTop / maxScroll) : 0;

    const vw = window.innerWidth;
    fillRect.setAttribute('width', Math.round(pct * vw));
    fillRect.setAttribute('height', BAR_HEIGHT);
  }

  window.addEventListener('resize', () => { sizePattern(); onScroll(); }, { passive: true });
  window.addEventListener('scroll', onScroll, { passive: true });

  sizePattern();
  onScroll();
})();
