const darkhome = document.querySelector('.slider');
const home = document.querySelector('body');
const curriculumCv = document.querySelector('.cv-vitae');
const saludo1 = document.querySelector('.saludo1');
const saludo2 = document.querySelector('.saludo2');
const saludo3 = document.querySelector('.saludo__nombre');
const aboutBefore = document.querySelector('.about .titleBefore');
const porftfoliBefore = document.querySelector('.portfolio .titleBefore');

darkhome.addEventListener('click', () =>{
    home.classList.toggle('dark-home')
    saludo1.classList.toggle('dark-presentacion')
    saludo2.classList.toggle('dark-presentacion')
    saludo3.classList.toggle('dark-presentacion')
    curriculumCv.classList.toggle('dark-cv')
    aboutBefore.classList.toggle('dark-before')
    porftfoliBefore.classList.toggle('dark-before')
});