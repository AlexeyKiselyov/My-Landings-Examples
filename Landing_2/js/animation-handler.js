function updateAOSAttribute() {
  const firstImageCard = document.querySelector('.experience__first-image');
  const secondImageCard = document.querySelector('.experience__second-image');
  const thirdImageCard = document.querySelector('.experience__third-image');

  const screenWidth = window.innerWidth;

  if ((screenWidth >= 800 && screenWidth <= 1336) || screenWidth <= 732) {
    firstImageCard.setAttribute('data-aos', 'fade-down');
    secondImageCard.setAttribute('data-aos', 'fade-down');
    thirdImageCard.setAttribute('data-aos', 'fade-down');
  } else {
    firstImageCard.setAttribute('data-aos', 'fade-left');
    secondImageCard.setAttribute('data-aos', 'fade-right');
    thirdImageCard.setAttribute('data-aos', 'fade-left');
  }
}

window.addEventListener('resize', updateAOSAttribute);
document.addEventListener('DOMContentLoaded', updateAOSAttribute);
