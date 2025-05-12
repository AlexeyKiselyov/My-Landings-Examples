document.addEventListener('DOMContentLoaded', () => {
  const refs = {
    openModalProfileBtn: document.querySelector('[data-modal-profile-open]'),

    closeModalProfileBtn: document.querySelector('[data-modal-profile-close]'),

    modalWindowProfile: document.querySelector('[data-modal-profile]'),
  };

  // Open Profile Modal

  function toggleModalProfileVisibility() {
    refs.modalWindowProfile.classList.toggle('is-hidden');
    document.body.classList.toggle('overflow-hidden');
  }

  refs.openModalProfileBtn.addEventListener('click', function () {
    toggleModalProfileVisibility();
  });

  refs.closeModalProfileBtn.addEventListener('click', function () {
    toggleModalProfileVisibility();
  });

  refs.modalWindowProfile.addEventListener('click', event => {
    if (event.target === refs.modalWindowProfile) {
      toggleModalProfileVisibility();
    }
  });
});
