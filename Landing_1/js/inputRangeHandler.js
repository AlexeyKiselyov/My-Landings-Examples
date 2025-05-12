document.addEventListener('DOMContentLoaded', function () {
  /* Input Distance Handler */

  const rangeInput = document.getElementById('js-distance-range');
  const valueDisplay = document.getElementById('js-distance-value-display');

  function updateValueDisplay() {
    valueDisplay.textContent = `${rangeInput.value}km`;
  }

  rangeInput.addEventListener('input', updateValueDisplay);
  updateValueDisplay();

  /* Input Distance Handler Modal */

  const rangeInputModal = document.getElementById('js-distance-range-modal');
  const valueDisplayModal = document.getElementById('js-distance-value-display-modal');

  function updateValueDisplayModal() {
    valueDisplayModal.textContent = `${rangeInputModal.value}km`;
  }

  rangeInputModal.addEventListener('input', updateValueDisplayModal);
  updateValueDisplayModal();

  /* Input Age  Handler*/

  const minInput = document.getElementById('js-age-range-min');
  const maxInput = document.getElementById('js-age-range-max');
  const display = document.getElementById('js-age-range-value-display');

  function updateDisplay() {
    const minValue = parseInt(minInput.value);
    const maxValue = parseInt(maxInput.value);

    if (minValue > maxValue) {
      const temp = minInput.value;
      minInput.value = maxInput.value;
      maxInput.value = temp;
    }

    display.textContent = `${minValue}-${maxValue}`;

    updateSliderBackground(minValue, maxValue);
  }

  function updateSliderBackground(min, max) {
    const minPercent = (min / 80) * 100;
    const maxPercent = (max / 80) * 100;

    const backgroundStyle = `linear-gradient(to right, #8f8f8f 0%, #8f8f8f ${minPercent}%, #f6a114 ${minPercent}%, #f6a114 ${maxPercent}%, #8f8f8f ${maxPercent}%, #8f8f8f 100%)`;

    minInput.style.background = backgroundStyle;
    maxInput.style.background = backgroundStyle;
  }

  minInput.addEventListener('input', updateDisplay);
  maxInput.addEventListener('input', updateDisplay);

  updateDisplay();

  /* Input Age  Handler Modal*/

  const minInputModal = document.getElementById('js-age-range-min-modal');
  const maxInputModal = document.getElementById('js-age-range-max-modal');
  const displayModal = document.getElementById('js-age-range-value-display-modal');

  function updateDisplayModal() {
    const minValue = parseInt(minInputModal.value);
    const maxValue = parseInt(maxInputModal.value);

    if (minValue > maxValue) {
      const temp = minInputModal.value;
      minInputModal.value = maxInputModal.value;
      maxInputModal.value = temp;
    }

    displayModal.textContent = `${minValue}-${maxValue}`;

    updateSliderBackgroundModal(minValue, maxValue);
  }

  function updateSliderBackgroundModal(min, max) {
    const minPercent = (min / 80) * 100;
    const maxPercent = (max / 80) * 100;

    const backgroundStyle = `linear-gradient(to right, #8f8f8f 0%, #8f8f8f ${minPercent}%, #f6a114 ${minPercent}%, #f6a114 ${maxPercent}%, #8f8f8f ${maxPercent}%, #8f8f8f 100%)`;

    minInputModal.style.background = backgroundStyle;
    maxInputModal.style.background = backgroundStyle;
  }

  minInputModal.addEventListener('input', updateDisplayModal);
  maxInputModal.addEventListener('input', updateDisplayModal);

  updateDisplayModal();
});
