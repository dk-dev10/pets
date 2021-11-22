const counters = document.querySelectorAll('.counter');

counters.forEach((item) => {
  item.textContent = 0;

  const updateCounter = () => {
    const target = +item.getAttribute('data-target');
    const c = +item.textContent;

    const inc = target / 200;

    if (c < target) {
      item.textContent = `${Math.ceil(c + inc)}`;
      setTimeout(updateCounter, 5);
    } else {
      item.textContent = target;
    }
  };

  updateCounter();
});
