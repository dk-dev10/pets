const textEl = document.querySelector('#text');
const speedEl = document.querySelector('#speed');

const text = 'Subscribe';

let ind = 1;
let speed = 300 / speedEl.value;

writeText();

speedEl.addEventListener('input', (e) => {
  speed = 300 / e.target.value;
});

function writeText() {
  textEl.innerText = text.slice(0, ind);

  ind++;

  if (ind > text.length) {
    ind = 1;
  }
  setTimeout(writeText, speed);
}
