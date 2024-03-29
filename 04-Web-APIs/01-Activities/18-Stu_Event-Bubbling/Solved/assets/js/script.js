//  Selects carousel element
const carousel = document.querySelector('.carouselbox');

// Selects buttons using their parent carousel element
const next = carousel.querySelector('.next');
const prev = carousel.querySelector('.prev');
let index = 0;
let currentImage;

const images = [
  'https://picsum.photos/id/10/300/200',
  'https://picsum.photos/id/20/300/201',
  'https://picsum.photos/id/30/300/202',
  'https://picsum.photos/id/47/300/203',
];

carousel.style.backgroundImage = "url('https://picsum.photos/id/10/300/200')";

function navigate(direction) {
  index = index + direction;
  if (index < 0) {
    index = images.length - 1;
  } else if (index > images.length - 1) {
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = `url('${currentImage}')`;
}

// Clicking on image opens a new window containing the image
carousel.addEventListener('click', function () {
  window.location.href = images[index];
});

// Clicking on next button displays next image in carousel
next.addEventListener('click', function (event) {
  // Stops event from bubbling up and new window opening
  event.stopPropagation();

  navigate(1);
});

// Clicking previous displays previous image in carousel
prev.addEventListener('click', function (event) {
  // Event bubbling would occur and a new window would open if we did not include the following line of code.
  event.stopPropagation();

  navigate(-1);
});

navigate(0);
