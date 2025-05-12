document.addEventListener('DOMContentLoaded', () => {
  const refs = {
    chatBtns: document.querySelectorAll('.users-item__chat'),
    likeBtns: document.querySelectorAll('.users-item__like'),
  };

  function addAnimationClass(element) {
    element.addEventListener('click', () => {
      element.classList.add('animate');

      setTimeout(() => {
        element.classList.remove('animate');
      }, 2000);
    });
  }

  refs.chatBtns.forEach(button => {
    addAnimationClass(button);
  });

  refs.likeBtns.forEach(button => {
    addAnimationClass(button);
  });
});
