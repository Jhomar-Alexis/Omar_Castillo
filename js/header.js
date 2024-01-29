const navToggle = document.querySelector('.nav__toggle');
const navMenu = document.querySelector('.nav__menu');
const navLink = document.querySelectorAll('.menu__link');

(navToggle).addEventListener('click', () =>{
    navMenu.classList.toggle('nav--visible');
})

function linkAction(){
    navMenu.classList.remove('nav--visible');
}

(navLink).forEach(n => n.addEventListener('click', linkAction));