const container = document.querySelector('.container');
const boxex = document.getElementsByClassName('box');

container.addEventListener('click', function (event) {
  const element = event.target;

  // TODO: Complete function

  if (element.matches('div')) {
    const state = element.getAttribute('data-state');
    console.log(state);
    const number = element.getAttribute('data-number');
    console.log(number);
    if (state === 'hidden') {
      element.dataset.state = 'visible';
      element.textContent = number;
    } else {
      element.dataset.state = 'hidden';
      element.textContent = '';
    }
    console.log(state);
  }
});
