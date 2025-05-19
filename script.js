const noBtn = document.getElementById('noBtn');

noBtn.addEventListener('mouseenter', () => {
  const container = document.querySelector('.btn-container');
  const maxX = container.clientWidth - noBtn.offsetWidth;
  const maxY = container.clientHeight - noBtn.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
});
