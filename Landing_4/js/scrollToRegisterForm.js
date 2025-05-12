const scrollLinks = document.querySelectorAll('[data-scroll-link]');
const scrollLinkModal = document.querySelector('[data-scroll-link-modal]');

const burgerModal = document.querySelector('[data-modal-burger]');

const sections = document.querySelectorAll('.section');
const lastSection = sections.length;

scrollLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();

    moveToSection(lastSection);
  });
});

scrollLinkModal.addEventListener('click', event => {
  event.preventDefault();

  burgerModal.classList.add('is-hidden');
  document.body.classList.remove('overflow-hidden');

  moveToSection(lastSection);
});

function moveToSection(sectionIndex) {
  $.fn.fullpage.moveTo(sectionIndex);
}
