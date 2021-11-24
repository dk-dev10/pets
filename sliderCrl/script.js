const imgs = document.getElementById('imgs');
const img = document.querySelectorAll('#imgs img');

const btnLeft = document.getElementById('left');
const btnRight = document.getElementById('right');

let pos = 0;

let interval = setInterval(run, 2000);

btnLeft.addEventListener('click', () => {
  pos--;

  rstInt();
  sldPs();
});

btnRight.addEventListener('click', () => {
  pos++;

  rstInt();
  sldPs();
});

function sldPs() {
  pos > img.length - 1 ? (pos = 0) : pos < 0 ? (pos = img.length - 1) : pos;

  imgs.style.transform = `translateX(${-pos * 500}px)`;
}

function run() {
  pos++;
  sldPs();
}

function rstInt() {
  clearInterval(interval);
  interval = setInterval(run, 3000);
}
