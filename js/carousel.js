document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  if (!track) return;

  const slides = track.querySelectorAll('img');
  const dotsContainer = document.querySelector('.carousel-dots');
  let current = 0;

  // Crear dots
  slides.forEach((_, i) => {
    const btn = document.createElement('button');
    btn.setAttribute('aria-label', `Slide ${i + 1}`);
    if (i === 0) btn.classList.add('active');
    btn.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(btn);
  });

  function goTo(index) {
    current = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dotsContainer.querySelectorAll('button').forEach((b, i) =>
      b.classList.toggle('active', i === current)
    );
  }

  document.querySelector('.carousel-btn.prev').addEventListener('click', () => goTo(current - 1));
  document.querySelector('.carousel-btn.next').addEventListener('click', () => goTo(current + 1));

  // Auto-avance cada 4s
  setInterval(() => goTo(current + 1), 4000);
});
