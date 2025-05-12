document.addEventListener('DOMContentLoaded', () => {
  const refs = {
    modalWindowRegister: document.querySelector('[data-modal-register]'),
    openModalRegisterBtns: document.querySelectorAll('[data-modal-register-open]'),
    closeModalRegisterBtn: document.querySelector('[data-modal-register-close]'),

    usersBtns: document.querySelectorAll('[data-users-button]'),
    modalWindowUsers: document.querySelector('[data-modal-users]'),
    closeUserModalBtn: document.querySelector('[data-modal-users-close]'),
    closeUsersModalOpenRegisterBtn: document.querySelector(
      '[data-close-modal-users-open-register]'
    ),
    girlNameModal: document.querySelector('.modal-users-girl-name'),

    openModalFindPartnerBtn: document.querySelector('[data-modal-find-partner-open]'),
    modalUsersModalTitle: document.querySelector('.modal-register__text.users'),
    modalFindPartnerTitle: document.querySelector('.modal-register__text.find-partner'),

    modalWindowFindMatch: document.querySelector('[data-modal-find-match]'),
    openModalFindMatchBtns: document.querySelectorAll('[data-modal-find-match-open]'),
    closeFindMatchModalOpenFindPartnerBtn: document.querySelector(
      '[data-close-modal-find-match-open-find-partner]'
    ),
    closeModalFindMatchBtn: document.querySelector('[data-modal-find-match-close]'),
    cityNameModalFindMatch: document.querySelector('.calculator-modal__city-name'),
    cityDescrModalFindMatch: document.querySelector('.calculator-modal__location-descr'),

    loader: document.querySelector('[data-loader]'),
  };

  // Open Find Match Modal

  function toggleModalFindMatchVisibility() {
    refs.modalWindowFindMatch.classList.toggle('is-hidden');
    document.body.classList.toggle('overflow-hidden');
  }

  function openFindMatchModal(element) {
    element.addEventListener('click', function () {
      const currentCityName = element
        .closest('.cities-item__text-wrapper')
        .querySelector('[data-city-name]').textContent;

      const currentCityDetails = element
        .closest('.cities-item__text-wrapper')
        .querySelector('.cities-details').textContent;

      setTimeout(() => {
        refs.cityNameModalFindMatch.textContent = currentCityName;
        refs.cityDescrModalFindMatch.textContent = currentCityDetails;

        toggleModalFindMatchVisibility();
      }, 1000);
    });
  }

  refs.openModalFindMatchBtns.forEach(button => {
    addAnimationClass(button);
    openFindMatchModal(button);
  });

  refs.closeFindMatchModalOpenFindPartnerBtn.addEventListener('click', function () {
    toggleModalFindMatchVisibility();

    toggleLoaderVisibility();

    showFindPartnerModalTitle();

    setTimeout(() => {
      toggleLoaderVisibility();

      toggleModalUsersVisibility();
    }, 2000);
  });

  refs.closeModalFindMatchBtn.addEventListener('click', function () {
    toggleModalFindMatchVisibility();
  });

  refs.modalWindowFindMatch.addEventListener('click', event => {
    if (event.target === refs.modalWindowFindMatch) {
      toggleModalFindMatchVisibility();
    }
  });

  // Open User Modal

  function showUsersModalTitle() {
    setTimeout(() => {
      refs.modalUsersModalTitle.style.display = 'inline-block';
      refs.modalFindPartnerTitle.style.display = 'none';
    }, 500);
  }

  function showFindPartnerModalTitle() {
    refs.modalUsersModalTitle.style.display = 'none';
    refs.modalFindPartnerTitle.style.display = 'inline-block';
  }

  function addAnimationClass(element) {
    element.addEventListener('click', () => {
      element.classList.add('animate');

      setTimeout(() => {
        element.classList.remove('animate');
      }, 2000);
    });
  }

  function toggleModalUsersVisibility() {
    refs.modalWindowUsers.classList.toggle('is-hidden');
    document.body.classList.toggle('overflow-hidden');
  }

  function openUserModal(element) {
    element.addEventListener('click', function () {
      const currentItem = element.closest('.users-item');
      const currentGirlName = currentItem.getAttribute('data-girl-name');

      setTimeout(() => {
        refs.girlNameModal.textContent = currentGirlName;
        toggleModalUsersVisibility();
      }, 1000);
    });
  }

  refs.usersBtns.forEach(button => {
    addAnimationClass(button);
    openUserModal(button);
  });

  refs.closeUserModalBtn.addEventListener('click', function () {
    toggleModalUsersVisibility();

    showUsersModalTitle();
  });

  refs.closeUsersModalOpenRegisterBtn.addEventListener('click', function () {
    toggleModalUsersVisibility();

    setTimeout(() => {
      toggleModalRegisterVisibility();
    }, 500);

    showUsersModalTitle();
  });

  refs.modalWindowUsers.addEventListener('click', event => {
    if (event.target === refs.modalWindowUsers) {
      toggleModalUsersVisibility();

      showUsersModalTitle();
    }
  });

  // Open Find Partner Modal

  refs.openModalFindPartnerBtn.addEventListener('click', () => {
    toggleLoaderVisibility();

    showFindPartnerModalTitle();

    setTimeout(() => {
      toggleLoaderVisibility();

      toggleModalUsersVisibility();
    }, 2000);
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

  // Toggle Loader Visibility

  function toggleLoaderVisibility() {
    refs.loader.classList.toggle('is-hidden');
    document.body.classList.toggle('overflow-hidden');
  }
});
