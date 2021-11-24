const contents = document.querySelectorAll('.content');
const list = document.querySelectorAll('li');

list.forEach((li, i) => {
  li.addEventListener('click', () => {

    list.forEach(el => el.classList.remove('active'))
    contents.forEach(el => el.classList.remove('show'))

    li.classList.add('active');
    contents[i].classList.add('show');
  });
});
