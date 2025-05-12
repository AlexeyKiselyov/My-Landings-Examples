import { translations } from './translationData.js';

const langList = document.querySelector('.header__lang-list');
const langSelectorElmts = document.querySelectorAll('[data-lang-selector]');

// Switch Language in Header

function toggleActiveLang() {
  langSelectorElmts.forEach(elmt => {
    elmt.classList.toggle('active');
  });
}

langList.addEventListener('click', () => {
  toggleActiveLang();
});

langSelectorElmts.forEach(item => {
  item.addEventListener('click', function (event) {
    event.preventDefault();

    const newLanguage = this.getAttribute('data-lang-selector');
    switchLanguage(newLanguage);

    langList.removeChild(item);
    langList.insertBefore(item, langList.firstChild);
  });
});

document.addEventListener('click', function (event) {
  if (!langList.contains(event.target)) {
    langSelectorElmts.forEach(elmt => {
      elmt.classList.remove('active');
    });
  }
});

// Switch Language Logic

function switchLanguage(language) {
  const content = translations[language];

  // Hero Section
  document.querySelector('.hero-title-line1-tr').textContent = content.heroTitle.line1;
  document.querySelector('.hero-title-line2-tr').textContent = content.heroTitle.line2;
  document.querySelector('.hero-title-line3-tr').textContent = content.heroTitle.line3;
  document.querySelector('.hero-descr-tr').textContent = content.heroDesc;

  // Calculator Section
  document.querySelector('.calculator-location__text-tr').textContent =
    content.calculatorLocationText;
  document.querySelector('.slider-distance__lable-tr').textContent = content.sliderDistanceLable;
  document.querySelector('.slider-age__label-tr').textContent = content.sliderAgeLabel;
  document.querySelector('.find-partner-button-tr').textContent = content.findPartnerButton;

  // About Section
  document.querySelector('.about-title-tr').textContent = content.aboutTitle;
  document.querySelector('.about-item__title-1-tr').textContent = content.aboutItemTitle1;
  document.querySelector('.about-item__descr-1-tr').textContent = content.aboutItemDescr1;
  document.querySelector('.about-item__title-2-tr').textContent = content.aboutItemTitle2;
  document.querySelector('.about-item__descr-2-tr').textContent = content.aboutItemDescr2;
  document.querySelector('.about-item__title-3-tr').textContent = content.aboutItemTitle3;
  document.querySelector('.about-item__descr-3-tr').textContent = content.aboutItemDescr3;
  document.querySelector('.about-item__title-4-tr').textContent = content.aboutItemTitle4;
  document.querySelector('.about-item__descr-4-tr').textContent = content.aboutItemDescr4;

  // Users Section
  document.querySelector('.users-title-tr').textContent = content.usersTitle;
  document.querySelector('.users-descr-tr').textContent = content.usersDescr;
  document.querySelectorAll('.users-item__status-tr').forEach(item => {
    item.textContent = content.usersItemStatus;
  });
  document.querySelector('.users__register-text-tr').textContent = content.usersRegisterText;
  document.querySelectorAll('.get-started__button-tr').forEach(item => {
    item.textContent = content.getStartedButton;
  });

  // Cities Section
  document.querySelector('.cities-title-tr').textContent = content.citiesTitle;
  document.querySelector('.cities-descr-tr').textContent = content.citiesDescr;
  document.querySelector('.cities-item__location1-tr').textContent = content.citiesItemLocation1;
  document.querySelector('.cities-details-1-tr').textContent = content.citiesDetails1;
  document.querySelector('.cities-item__location2-tr').textContent = content.citiesItemLocation2;
  document.querySelector('.cities-details-2-tr').textContent = content.citiesDetails2;
  document.querySelector('.cities-item__location3-tr').textContent = content.citiesItemLocation3;
  document.querySelector('.cities-details-3-tr').textContent = content.citiesDetails3;
  document.querySelector('.cities-item__location4-tr').textContent = content.citiesItemLocation4;
  document.querySelector('.cities-details-4-tr').textContent = content.citiesDetails4;
  document.querySelector('.cities-item__location5-tr').textContent = content.citiesItemLocation5;
  document.querySelector('.cities-details-5-tr').textContent = content.citiesDetails5;
  document.querySelector('.cities-item__location6-tr').textContent = content.citiesItemLocation6;
  document.querySelector('.cities-details-6-tr').textContent = content.citiesDetails6;
  document.querySelector('.cities-item__location7-tr').textContent = content.citiesItemLocation7;
  document.querySelector('.cities-details-7-tr').textContent = content.citiesDetails7;
  document.querySelector('.cities-item__location8-tr').textContent = content.citiesItemLocation8;
  document.querySelector('.cities-details-8-tr').textContent = content.citiesDetails8;
  document.querySelectorAll('.cities-item__button-tr').forEach(button => {
    button.textContent = content.citiesItemButton;
  });

  // Statistics Section
  document.querySelector('.statistics-item__users-tr').textContent = content.statisticsItemUsers;
  document.querySelector('.statistics-item__couples-tr').textContent =
    content.statisticsItemCouples;
  document.querySelector('.statistics-item__active-members-tr').textContent =
    content.statisticsItemActiveMember;
  document.querySelector('.statistics-item__new-members-tr').textContent =
    content.statisticsItemNewMembers;

  // Story Section
  document.querySelector('.story-title-tr').textContent = content.storyTitle;
  document.querySelector('.story-descr-tr').textContent = content.storyDescr;
  document.querySelector('.story__register-text-tr').textContent = content.storyRegisterText;

  // Feedbacks Section
  document.querySelector('.feedbacks-title-tr').textContent = content.feedbacksTitle;
  document.querySelector('.feedbacks-item__user1-location-tr').textContent =
    content.feedbacksItemUser1Location;
  document.querySelector('.feedbacks-item__feedback1-tr').textContent =
    content.feedbacksItemFeedback1;
  document.querySelector('.feedbacks-item__user2-location-tr').textContent =
    content.feedbacksItemUser2Location;
  document.querySelector('.feedbacks-item__feedback2-tr').textContent =
    content.feedbacksItemFeedback2;
  document.querySelector('.feedbacks-item__user3-location-tr').textContent =
    content.feedbacksItemUser3Location;
  document.querySelector('.feedbacks-item__feedback3-tr').textContent =
    content.feedbacksItemFeedback3;

  // Find Match Section
  document.querySelector('.find-match-title-line1-tr').textContent = content.findMatchTitle.line1;
  document.querySelector('.find-match-title-line2-tr').textContent = content.findMatchTitle.line2;
  document.querySelector('.find-match__descr-tr').textContent = content.findMatchDescr;

  // Footer
  document.querySelector('.footer-private-policy-tr').textContent = content.footerPrivatePolicy;
  document.querySelector('.footer-terms-tr').textContent = content.footerTerms;
  document.querySelector('.footer-unsubscribe-tr').textContent = content.footerUnsubscribe;
  document.querySelector('.footer-copyright-tr').textContent = content.footerCopyright;

  // Modal Register
  document.querySelector('.modal-register__text-tr').textContent = content.modalRegisterText;
  document.querySelector('.email-label-tr').textContent = content.modalEmailLabel;
  document.getElementById('email').placeholder = content.modalEmailPlaceholder;
  document.querySelector('.password-label-tr').textContent = content.modalPasswordLabel;
  document.getElementById('password').placeholder = content.modalPasswordPlaceholder;

  // Modal Users
  document.querySelector('.modal-users-title-line1-tr').textContent = content.modalUsersTitle.line1;
  document.querySelector('.modal-users-title-line2-tr').textContent = content.modalUsersTitle.line2;

  // Modal Find Partner
  document.querySelector('.modal-find-partner-title-tr').textContent =
    content.modalFindPartnerTitle;
}

// Get and set language first time

const defaultLanguage = navigator.language.slice(0, 2);

const supportedLanguages = ['en', 'nl', 'de', 'fr'];
const initialLanguage = supportedLanguages.includes(defaultLanguage) ? defaultLanguage : 'en';

switchLanguage(initialLanguage);

// Set language icon in header first time

const firstLangElmt = langList.querySelector(`[data-lang-selector=${initialLanguage}]`);

if (firstLangElmt) {
  langList.insertBefore(firstLangElmt, langList.firstChild);
}
