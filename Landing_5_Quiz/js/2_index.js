// =============== Get Quiz Answers ===============

const quizAnswerBtns = document.querySelectorAll('[data-quiz-answer]');
const quizSkipBtns = document.querySelectorAll('[data-skip]');
const quizEndBtns = document.querySelectorAll('[data-quiz-end]');

export let quizAnswers = '';

const quizAnswersObj = {};

function catchQuizAnswers() {
  quizAnswerBtns.forEach(button => {
    const quizAnswer = button.getAttribute('data-quiz-answer');
    const [step, value] = quizAnswer.split('-');

    if (button.classList.contains('active')) {
      if (quizAnswersObj[step]) {
        quizAnswersObj[step] += `,${value}`;
      } else {
        quizAnswersObj[step] = value;
      }
    } else if (!quizAnswersObj[step]) {
      quizAnswersObj[step] = '';
    }
  });
}

function convertingQuizAnwersObjectToString() {
  quizAnswers = Object.keys(quizAnswersObj)
    .sort((a, b) => a - b)
    .map(key => encodeURIComponent(quizAnswersObj[key]))
    .join(':');
}

quizSkipBtns.forEach(function (button) {
  button.addEventListener('click', function () {
    const stepElement = this.closest('[data-step]');
    const stepNumber = stepElement.getAttribute('data-step');

    quizAnswersObj[stepNumber] = 'skip';
  });
});

quizEndBtns.forEach(button => {
  button.addEventListener('click', () => {
    catchQuizAnswers();
    convertingQuizAnwersObjectToString();

    button.disabled = true;
  });
});

// =============== Steps handler ================

let skipClickCounter = 0;

$('[data-next-step]').click(function () {
  const $currentSection = $(this).closest('[data-step]');
  const $nextSection = $currentSection.next('[data-step]');

  // Checking if this button is a skip button
  if ($(this).attr('data-skip')) {
    skipClickCounter += 1;

    $(this).prop('disabled', true);
  }

  // Exit the quiz if the skip button is pressed a second time
  if (skipClickCounter >= 2) {
    $('.backdrop').removeClass('is-hidden');

    setTimeout(function () {
      $currentSection.fadeOut(400, function () {
        $('[data-step-final]')
          .css('display', 'flex')
          .hide()
          .fadeIn(400, function () {
            $('.backdrop').addClass('is-hidden');
          });
      });
    }, 1000);

    catchQuizAnswers();

    convertingQuizAnwersObjectToString();

    $(this).prop('disabled', true);

    return;
  }

  $currentSection.fadeOut(400, function () {
    $nextSection.css('display', 'flex').hide().fadeIn(400);
  });
});

//============ Quiz answers handler =============

$('[data-quiz-answer]').on('click', function () {
  const $quizList = $(this).closest('.step__quiz-list');
  $quizList.find('[data-quiz-answer]').removeClass('active');
  $(this).addClass('active');
});
