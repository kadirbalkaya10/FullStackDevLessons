const body = document.body;
const h1El = document.createElement('h1');
const infoEl = document.createElement('div');
const imgEl = document.createElement('img');
const kittenEl = document.createElement('div');
const nameEl = document.createElement('div');
const favoriteEl = document.createElement('div');
// Create ordered list element
const listEl = document.createElement('ol');
// Create ordered list items
// const li1 = document.createElement('li');
// const li2 = document.createElement('li');
// const li3 = document.createElement('li');
// const li4 = document.createElement('li');

h1El.textContent = 'Welcome to my page';
kittenEl.textContent = 'This is my kitten 🐱.';
nameEl.textContent = 'His name is Jax.';
favoriteEl.textContent = 'My favorite foods are:';

body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
// Append ordered list
favoriteEl.appendChild(listEl);

h1El.setAttribute('style', 'margin:auto; width:50%; text-align:center;');
infoEl.setAttribute('style', 'margin:auto; width:50%; text-align:center;');
imgEl.setAttribute('src', 'http://placekitten.com/200/300');
nameEl.setAttribute('style', 'font-size:25px; text-align:center;');
kittenEl.setAttribute('style', 'font-size:25px; text-align:center;');
favoriteEl.setAttribute('style', 'font-size:20px;');

// TODO: Add ordered list items containing four favorite foods

const favoriteFood = ['Apple', 'Pizza', 'Dumplings', 'Cupcakes'];
const listItem = document.createElement('li');

for (let i = 0; i < favoriteFood.length; i++) {
  listItem.textContent = favoriteFood[i];

  setRandomBackgroundColor(listItem);
  listEl.appendChild(listItem);

  listEl.setAttribute(
    'style',
    'color: #eee ;',
    'padding: 5px ;',
    'margin-left: 35px ;'
  );
}

function setRandomBackgroundColor(listItem) {
  const element = document.querySelector(listItem);

  if (element) {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    const backgroundColor = `rgb(${red}, ${green}, ${blue})`;

    element.style.backgroundColor = backgroundColor;
  } else {
    console.error(`Element with ID "${listItem}" not found.`);
  }
}
