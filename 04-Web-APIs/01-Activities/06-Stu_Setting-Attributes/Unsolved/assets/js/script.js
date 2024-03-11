const site1El = document.querySelector('.site1');
const site2El = document.querySelector('.site2');
const site3El = document.querySelector('.site3');
const headings = document.querySelectorAll('h4');

site1El.children[0].textContent = 'Site 1';
site1El.children[1].setAttribute('href', 'https://google.com');
site1El.children[1].children[0].setAttribute(
  'src',
  'assets/images/image_1.jpg'
);
site1El.children[1].children[0].setAttribute('alt', 'man working');
site1El.children[1].children[0].setAttribute('style', 'padding:10px;');

site2El.children[0].textContent = 'Site 2';
site2El.children[1].setAttribute('href', 'https://twitter.com');
site2El.children[1].children[0].setAttribute(
  'src',
  'assets/images/image_2.jpg'
);
site2El.children[1].children[0].setAttribute('alt', 'group brainstorm');
site2El.children[1].children[0].setAttribute('style', 'padding:10px;');

site3El.children[0].textContent = 'Site 3';
site3El.children[1].setAttribute('href', 'https://instagram.com');
site3El.children[1].children[0].setAttribute(
  'src',
  'assets/images/image_3.jpg'
);
site3El.children[1].children[0].setAttribute('alt', 'women working');
site3El.children[1].children[0].setAttribute('style', 'padding:10px;');

// Write Your Code Below

console.log(headings);

for (let i = 0; i < headings.length; i++) {
  headings[i].style.color = 'Blue';
  headings[i].style.fontSize = '30px';
  headings[i].style.fontWeight = 'bold';
  headings[i].style.paddingLeft = '10px';
  headings[i].style.margin = '0';
}
