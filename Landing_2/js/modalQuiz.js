const refs = {
  openModalQuizBtns: document.querySelectorAll('[data-modal-quiz-open]'),
  closeModalQuizBtns: document.querySelectorAll('[data-modal-quiz-close]'),
  modalQuiz: document.querySelector('[data-modal-quiz]'),

  firstQuizSection: document.querySelector('.quiz-wrapper.step-1-1'),
  quizSections: document.querySelectorAll('[data-step]'),

  quizAnswerBtns: document.querySelectorAll('[data-quiz-answer-btn]'),

  nextStepButtons: document.querySelectorAll('[data-next-step-btn]'),
  // prevStepButtons: document.querySelectorAll('[data-prev-step-btn]'),

  quizQuestionCheckDescriptions: document.querySelectorAll('.quiz-question__description-chose'),

  finalQuestionStepBtn: document.querySelector('[data-final-question-btn]'),
  refLoader: document.querySelector('.backdrop-loader'),

  formQuizSection: document.querySelector('[data-step-form]'),
};

// ======= Open-Close Quiz =========

refs.openModalQuizBtns.forEach(button => {
  button.addEventListener('click', () => {
    toggleModalQuiz();

    scrollToBottom(refs.firstQuizSection);
  });
});

refs.closeModalQuizBtns.forEach(button => {
  button.addEventListener('click', () => {
    toggleModalQuiz();

    quizReset();
  });
});

function toggleModalQuiz() {
  refs.modalQuiz.classList.toggle('is-hidden');

  document.body.classList.toggle('overflow-hidden');
}

function quizReset() {
  setTimeout(() => {
    refs.quizSections.forEach(quizSection => {
      quizSection.style.display = 'none';
    });

    refs.firstQuizSection.style.display = 'flex';

    refs.quizAnswerBtns.forEach(answerBtn => {
      answerBtn.classList.remove('active');
    });

    refs.quizQuestionCheckDescriptions.forEach(checkingInfo => {
      checkingInfo.classList.remove('active');
    });
  }, 1000);
}

// ======= Add active class in check answer button =========

refs.quizAnswerBtns.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('active');
  });
});

// ======= Steps handler =========

refs.nextStepButtons.forEach(button => {
  button.addEventListener('click', () => {
    var currentSection = button.closest('[data-step]');
    var nextSection = currentSection.nextElementSibling;

    // ------ Checking if there is at least one answer ---------

    var quizWrapper = button.previousElementSibling;

    if (quizWrapper && quizWrapper.classList.contains('quiz-answers__wrapper')) {
      const activeButton = quizWrapper.querySelector('.quiz-button.active');

      if (!activeButton) {
        refs.quizQuestionCheckDescriptions.forEach(checkingInfo => {
          checkingInfo.classList.add('active');
        });

        return;
      } else {
        refs.quizQuestionCheckDescriptions.forEach(checkingInfo => {
          checkingInfo.classList.remove('active');
        });
      }
    }

    // ----- Next Step -----

    if (nextSection === refs.formQuizSection) {
      currentSection.style.display = 'none';
      refs.formQuizSection.style.display = 'block';

      scrollToBottom(refs.formQuizSection);
    } else if (nextSection) {
      currentSection.style.display = 'none';
      nextSection.style.display = 'flex';

      scrollToBottom(nextSection);
    }
  });
});

// ======= Loader Handler =========

refs.finalQuestionStepBtn.addEventListener('click', () => {
  refs.refLoader.classList.remove('is-hidd');

  setTimeout(() => {
    var currentSection = refs.finalQuestionStepBtn.closest('[data-step]');
    var nextSection = currentSection.nextElementSibling;

    if (nextSection) {
      currentSection.style.display = 'none';
      nextSection.style.display = 'block';
      refs.refLoader.classList.add('is-hidd');

      scrollToBottom(nextSection, 3000);
    }
  }, 3000);
});

// Scroll to bottom

function scrollToBottom(section, delay = 2000) {
  setTimeout(() => {
    section.scrollTo({
      top: section.scrollHeight,
      behavior: 'smooth',
    });
  }, delay);
}

// If need prev step handler =>

// refs.prevStepButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     var currentSection = button.closest('[data-step]');
//     var prevSection = currentSection.previousElementSibling;

//     if (prevSection) {
//       currentSection.style.display = 'none';
//       prevSection.style.display = 'flex';

//       scrollToBottom(prevSection);
//     }
//   });
// });
