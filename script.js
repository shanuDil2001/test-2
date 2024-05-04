let menu = document.querySelector('#menu-icon');
let navigation_menu = document.querySelector('.navigation_menu');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navigation_menu.classList.toggle('open');
}