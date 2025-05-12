const storySwiper = new Swiper('.storySwiper', {
  spaceBetween: 20,
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const feedbacksSwiper = new Swiper('.feedbacksSwiper', {
  spaceBetween: 17,
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const storyGallerySwiper = new Swiper('.storyGallerySwiper', {
  slidesPerView: '1',
  spaceBetween: 5,
  autoHeight: true,
});

// Story Gallery Slides Handler

const nextButton = document.querySelectorAll('.story-gallery__next-slide');
const prevButton = document.querySelectorAll('.story-gallery__prew-slide');

nextButton.forEach(button => {
  button.addEventListener('click', () => {
    storyGallerySwiper.slideNext();
  });
});

prevButton.forEach(button => {
  button.addEventListener('click', () => {
    storyGallerySwiper.slidePrev();
  });
});

// Open Story Gallery and set current slide

const main = document.getElementById('main');
const storyGallerySection = document.querySelector('.story-gallery__section');
const storyItemBtns = document.querySelectorAll('.story-item__button');

storyItemBtns.forEach(button => {
  button.addEventListener('click', () => {
    const slideIndex = parseInt(button.getAttribute('data-story-slide'));
    storyGallerySwiper.slideTo(slideIndex);

    storyGallerySection.style.display = 'block';

    setTimeout(() => {
      main.style.display = 'none';

      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }, 200);
  });
});
