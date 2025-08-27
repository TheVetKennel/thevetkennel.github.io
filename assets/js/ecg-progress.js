(function () {
  const svg = document.getElementById('ecg-svg');
  if (!svg) return;

  const fillRect = document.getElementById('ecg-fill-rect');
  const bgRect = document.getElementById('ecg-bg-rect');
  const BAR_HEIGHT = 40;

  function sizePattern() {
    const vw = window.innerWidth || document.documentElement.clientWidth;
    bgRect.setAttribute('width', vw);
    bgRect.setAttribute('height', BAR_HEIGHT);
  }

  function onScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || 0;
    const docHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    const winHeight = window.innerHeight || document.documentElement.clientHeight;
    const maxScroll = docHeight - winHeight;
    const pct = maxScroll > 0 ? (scrollTop / maxScroll) : 0;
    const vw = window.innerWidth || document.documentElement.clientWidth;
    fillRect.setAttribute('width', Math.round(vw * pct));
    fillRect.setAttribute('height', BAR_HEIGHT);
  }

  window.addEventListener('resize', () => { sizePattern(); onScroll(); });
  window.addEventListener('scroll', onScroll);

  sizePattern();
  onScroll();
})();
