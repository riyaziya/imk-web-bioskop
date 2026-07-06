

(function () {
  const track = document.getElementById('tayangTrack');
  const cards = Array.from(track.children);
  const prevBtn = document.getElementById('tayangPrev');
  const nextBtn = document.getElementById('tayangNext');

  const VISIBLE = 4;   
  const STEP = 1;    
  let index = 0;

  function update() {
    const gap = parseFloat(
      getComputedStyle(track.parentElement.parentElement).getPropertyValue('--tayang-gap')
    );
    const cardWidth = cards[0].getBoundingClientRect().width;
    const offset = index * (cardWidth + gap);
    track.style.transform = `translateX(-${offset}px)`;
  }

  function goTo(i) {
    const max = Math.max(0, cards.length - VISIBLE);
    index = Math.max(0, Math.min(i, max));
    update();
  }

  prevBtn.addEventListener('click', () => goTo(index - STEP));
  nextBtn.addEventListener('click', () => goTo(index + STEP));
  window.addEventListener('resize', update);

  update();
})();