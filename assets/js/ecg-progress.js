(function () {
  const svg = document.getElementById('ecg-svg');
  if (!svg) return;
  const pattern = document.getElementById('ecgPattern');
  const img = document.getElementById('ecgImage');
  const bgRect = document.getElementById('ecg-bg-rect');
  const fillRect = document.getElementById('ecg-fill-rect');

  const BAR_HEIGHT = 40;
  const REPEATS = 10;

function sizePattern() {
  const vw = window.innerWidth || document.documentElement.clientWidth;
  const tileWidth = Math.max(40, Math.round(vw / REPEATS));
  const tileHeight = BAR_HEIGHT;

  pattern.setAttribute('width', tileWidth);
  pattern.setAttribute('height', tileHeight);

  img.setAttribute('width', tileWidth);
  img.setAttribute('height', tileHeight);

  // ✅ size the solid background
  solidBg.setAttribute('width', vw);
  solidBg.setAttribute('height', BAR_HEIGHT);

  // ✅ optional: if keeping bg-rect
  // bgRect.setAttribute('width', vw);
  // bgRect.setAttribute('height', BAR_HEIGHT);
}

  function onScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || 0;
    const docHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    const winHeight = window.innerHeight || document.documentElement.clientHeight;
    const maxScroll = docHeight - winHeight;
    const pct = maxScroll > 0 ? (scrollTop / maxScroll) : 0;

    const vw = window.innerWidth || document.documentElement.clientWidth;
    fillRect.setAttribute('width', pct * vw);
    fillRect.setAttribute('height', BAR_HEIGHT);
  }

  window.addEventListener('resize', () => { sizePattern(); onScroll(); }, { passive: true });
  window.addEventListener('scroll', onScroll, { passive: true });

  sizePattern();
  onScroll();
})();
