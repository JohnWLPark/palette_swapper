const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');
const colors = ['blue', 'green', 'red', 'yellow', 'orange', 'purple', 'grey'];

bodyBcg.addEventListener('click', changeColor);

function changeColor() {
    let random = Math.floor(Math.random() * colors.length);
    bodyBcg.style.background = colors[random];
}