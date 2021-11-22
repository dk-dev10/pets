const progress = document.querySelector('#progress');
const circles = document.querySelectorAll('.circle');

const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');

const circleLength = circles.length - 1;

let active = 0;

disabled();

function disabled() {
  active <= 0
    ? (prevBtn.disabled = true)
    : active >= circleLength
    ? (nextBtn.disabled = true)
    : ((prevBtn.disabled = false), (nextBtn.disabled = false));
}

function progressActive() {
  const betweenCircleWidth = 100 / circleLength;
  progress.style.width = `${betweenCircleWidth * active}%`;

  circles.forEach((item, i) => {
    i <= active
      ? item.classList.add('active')
      : item.classList.remove('active');
  });
}

prevBtn.addEventListener('click', () => {
  active--;
  disabled();
  progressActive();
});

nextBtn.addEventListener('click', () => {
  active++;
  disabled();
  progressActive();
});
