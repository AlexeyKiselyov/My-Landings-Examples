SmoothScroll({
  // Scroll time 400 = 0.4 seconds
  animationTime: 800,
  // Размер шага в пикселях
  stepSize: 75,

  // Additional settings:

  // Acceleration
  accelerationDelta: 30,
  // Maximum acceleration
  accelerationMax: 2,

  // Keyboard support
  keyboardSupport: true,
  // Scroll step with the arrows on the keyboard in pixels
  arrowScroll: 50,

  // Pulse (less tweakable)
  // ratio of "tail" to "acceleration"
  pulseAlgorithm: true,
  pulseScale: 4,
  pulseNormalize: 1,

  // Touchpad support
  touchpadSupport: true,
});
