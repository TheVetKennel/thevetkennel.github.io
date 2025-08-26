(function () {
  const svg = document.getElementById('ecg-svg');
  if (!svg) return;
  const pattern = document.getElementById('ecgPattern');
  const img = document.getElementById('ecgImage');
  const fillRect = document.getElementById('ecg-fill-rect');
  const bgRect = document.getElementById('ecg-bg-rect');

  const BAR_HEIGHT = 40;      // Keep in sync with CSS
  const REPEATS = 10;         // ~how many tiles across the viewport

  function sizePattern() {
    const vw = window.innerWidth || document.documentElement.clientWidth;
    const tileWidth = Math.max(40, Math.round(vw / REPEATS)); // target width
    const tileHeight = BAR_HEIGHT;

    // Set pattern size
    pattern.setAttribute('width', tileWidth);
    pattern.setAttribute('height', tileHeight);

    // Stretch the source image to exactly fill the tile
    img.setAttribute('width', tileWidth);
    img.setAttribute('height', tileHeight);

    // Full-width background rect
    bgRect.setAttribute('width', vw);
    bgRect.setAttribute('height', BAR_HEIGHT);
  }

  function onScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const docHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    const winHeight = window.innerHeight || document.documentElement.clientHeight;
    const maxScroll = docHeight - winHeight;
    const pct = maxScroll > 0 ? (scrollTop / maxScroll) : 0;

    const vw = window.innerWidth || document.documentElement.clientWidth;

    // Fill proportional to scroll percentage
    fillRect.setAttribute('width', pct * vw);
    fillRect.setAttribute('height', BAR_HEIGHT);
  }

  window.addEventListener('resize', () => { sizePattern(); onScroll(); }, { passive: true });
  window.addEventListener('scroll', onScroll, { passive: true });

  sizePattern();
  onScroll();
})();
