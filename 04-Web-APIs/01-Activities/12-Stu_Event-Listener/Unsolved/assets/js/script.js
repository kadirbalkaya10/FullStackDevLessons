//Dependencies
const incrementEl = document.querySelector('#increment');
const decrementEl = document.querySelector('#decrement');
const countEl = document.querySelector('#count');

//DATA
let count = 0;

//FUNCTIONS

function setCounterText() {
  countEl.textContent = count;
}

function incrementCount() {
  count++;
  countEl.textContent = count;
}

function decrementCount() {
  count--;
  if (count < 0) {
    count = 0;
  }

  countEl.textContent = count;
}

//User interactions

// TODO: Add event listener to increment button

incrementEl.addEventListener('click', incrementCount);

// TODO: Add event listener to decrement button

decrementEl.addEventListener('click', decrementCount);
