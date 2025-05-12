document.addEventListener('DOMContentLoaded', () => {
  const refs = {
    openModalRegisterBtns: document.querySelectorAll('[data-modal-register-open]'),

    openChatModalBtns: document.querySelectorAll('[data-modal-chat]'),
    openlikeModalBtns: document.querySelectorAll('[data-modal-like]'),

    closeModalBtn: document.querySelector('[data-modal-close]'),
    closeModalRegisterBtn: document.querySelector('[data-modal-register-close]'),

    closeModalOpenRegisterBtn: document.querySelector('[data-close-modal-open-register]'),

    modalWindow: document.querySelector('[data-modal]'),
    modalWindowRegister: document.querySelector('[data-modal-register]'),

    textModal: document.querySelector('.modal-window__text'),
  };

  // Open Chat and Like Modals

  function toggleModalVisibility() {
    refs.modalWindow.classList.toggle('is-hidden');
    document.body.classList.toggle('overflow-hidden');
  }

  function openModal(element, text) {
    element.addEventListener('click', function () {
      setTimeout(() => {
        refs.textModal.textContent = text;
        toggleModalVisibility();
      }, 1500);
    });
  }

  refs.openChatModalBtns.forEach(button => {
    openModal(button, '登録後に会話を始められます');
  });

  refs.openlikeModalBtns.forEach(button => {
    openModal(button, '登録後に女の子に「いいね」を送りましょう');
  });

  refs.closeModalBtn.addEventListener('click', function () {
    toggleModalVisibility();
  });

  refs.closeModalOpenRegisterBtn.addEventListener('click', function () {
    toggleModalVisibility();

    setTimeout(() => {
      toggleModalRegisterVisibility();
    }, 500);
  });

  refs.modalWindow.addEventListener('click', event => {
    if (event.target === refs.modalWindow) {
      toggleModalVisibility();
    }
  });

  // Open Register Modal

  function toggleModalRegisterVisibility() {
    refs.modalWindowRegister.classList.toggle('is-hidden');
    document.body.classList.toggle('overflow-hidden');
  }

  refs.openModalRegisterBtns.forEach(button => {
    button.addEventListener('click', function () {
      toggleModalRegisterVisibility();
    });
  });

  refs.closeModalRegisterBtn.addEventListener('click', function () {
    toggleModalRegisterVisibility();
  });

  refs.modalWindowRegister.addEventListener('click', event => {
    if (event.target === refs.modalWindowRegister) {
      toggleModalRegisterVisibility();
    }
  });
});
