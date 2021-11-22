const body = document.body;

const slides = document.querySelectorAll('.slide');
const lftBtn = document.querySelector('#left');
const rgtBtn = document.querySelector('#right');

const sldLngt = slides.length - 1;

let activeSlide = 0;
active();
bodyBgImg();

function active() {
  slides.forEach((item, i) => item.classList.remove('active'));
  slides[activeSlide].classList.add('active');
}

function bodyBgImg() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

rgtBtn.addEventListener('click', () => {
  activeSlide++;
  if (activeSlide > sldLngt) {
    activeSlide = 0;
  }

  active();
  bodyBgImg();
});

lftBtn.addEventListener('click', () => {
  activeSlide--;
  if (activeSlide < 0) {
    activeSlide = sldLngt;
  }

  active();
  bodyBgImg();
});
