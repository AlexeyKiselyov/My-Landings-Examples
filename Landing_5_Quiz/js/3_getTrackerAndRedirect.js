import { quizAnswers } from './2_index.js';

const domen = 'https://www.pyometrack.com/click?bemobdata=';
const trackerName = 'bemobdata';

const redirectElementId = 'redirect-button';
const emailInputElementID = 'email';

const redirectLinkIfNotTrackerData = 'https://google.com';

// Getting the tracker parameter from the URL
const params = new URLSearchParams(window.location.search);
const bemobdata = params.get(trackerName);

const redirectElement = document.getElementById(redirectElementId);

if (redirectElement) {
  redirectElement.addEventListener('click', function (event) {
    event.preventDefault();

    if (!bemobdata) {
      redirect(redirectLinkIfNotTrackerData);
      return;
    }

    const encodedData = encodeURIComponent(bemobdata);

    const clickUrl = domen + encodedData;

    const userEmail = document.getElementById(emailInputElementID);

    const redirectUrl = userEmail
      ? `${clickUrl}&el=${encodeURIComponent(userEmail.value)}&s5=${quizAnswers}`
      : `${clickUrl}&s5=${quizAnswers}`;

    redirect(redirectUrl);
  });
} else {
  console.error(`Element with id "${redirectElementId}" not found.`);
}

function redirect(url) {
  window.location.href = url;
}
