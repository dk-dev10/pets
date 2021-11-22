// const faqs = document.querySelectorAll('.faq');

// faqs.forEach((faq) => {
//   faq.querySelector('.faq-toggle').addEventListener('click', () => {
//     faq.classList.toggle('active');
//   });
// });

const tgls = document.querySelectorAll('.faq-toggle');

tgls.forEach((tgl) => {
  tgl.addEventListener('click', () => {
    tgl.parentNode.classList.toggle('active');
  });
});
