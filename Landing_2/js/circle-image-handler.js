// script.js
window.addEventListener('scroll', () => {
  const circle = document.querySelector('.image-circle');
  const rect = circle.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;

  if (rect.top < windowHeight && rect.bottom > 0 && windowWidth > 1300) {
    const visibleRatio = Math.min(1, ((windowHeight - rect.top) / windowHeight) * 1.5);

    const newWidth = 850 + (1330 - 850) * visibleRatio;
    const newBorderRadius = 425 + (568 - 425) * visibleRatio;

    circle.style.width = `${newWidth}px`;
    circle.style.borderRadius = `${newBorderRadius}px`;
  } else if (
    rect.top < windowHeight &&
    rect.bottom > 0 &&
    windowWidth < 1300 &&
    windowWidth > 800
  ) {
    const visibleRatio = Math.min(1, ((windowHeight - rect.top) / windowHeight) * 1.5);

    const newWidth = 500 + (700 - 500) * visibleRatio;
    const newBorderRadius = 325 + (425 - 325) * visibleRatio;

    circle.style.width = `${newWidth}px`;
    circle.style.borderRadius = `${newBorderRadius}px`;
  } else if (rect.top < windowHeight && rect.bottom > 0 && windowWidth < 800) {
    const visibleRatio = Math.min(1, ((windowHeight - rect.top) / windowHeight) * 1.5);

    const newWidth = 248 + (374 - 248) * visibleRatio;
    const newBorderRadius = 150 + (200 - 150) * visibleRatio;

    circle.style.width = `${newWidth}px`;
    circle.style.borderRadius = `${newBorderRadius}px`;
  }
});
