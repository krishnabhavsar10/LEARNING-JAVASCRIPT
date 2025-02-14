const body = document.querySelector('body');
const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
    // console.log(e);
    // console.log(e.target.id);
    body.style.backgroundColor = e.target.id
  });
});