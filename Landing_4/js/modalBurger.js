const refs = {
  openModalBurgerBtns: document.querySelectorAll('[data-modal-burger-open]'),
  closeModalBurgerBtns: document.querySelectorAll('[data-modal-burger-close]'),
  modalBurger: document.querySelector('[data-modal-burger]'),
};

// Modal Burger
refs.openModalBurgerBtns.forEach(button => {
  button.addEventListener('click', () => {
    toggleModalBurger();
  });
});

refs.closeModalBurgerBtns.forEach(button => {
  button.addEventListener('click', () => {
    toggleModalBurger();
  });
});

function toggleModalBurger() {
  refs.modalBurger.classList.toggle('is-hidden');

  document.body.classList.toggle('overflow-hidden');
}

document.addEventListener('DOMContentLoaded', function () {
  const backdropBurger = document.querySelector('.backdrop-burger');

  backdropBurger.addEventListener('click', function (event) {
    if (event.target === this) {
      toggleModalBurger();
    }
  });
});
