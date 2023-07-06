let menu = document.querySelector('#menu-icon');
let navigatie = document.querySelector('.navigatie');

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navigatie.classList.toggle('open')
}