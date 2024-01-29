const porcentajeContenedor = document.querySelector(' .especial');
const porcentaje = document.querySelectorAll('.porcentaje');
const spanPorcentaje = document.querySelectorAll('.about__lenguajes .span-porcentaje');

const cargarPorcentaje = (entrada, observador) => {
    entrada.forEach((entrada) => {
        if(entrada.isIntersecting){
            porcentaje.forEach((e) => {
                e.classList.add('rellenar-porcentaje')
            });
            spanPorcentaje.forEach((e) => {
                e.classList.add('span-porcentaje-visible');
            });
        }else{
                /* porcentaje.forEach((e) => {
                    e.classList.remove('rellenar-porcentaje')
                })
                spanPorcentaje.forEach((e) => {
                    e.classList.remove('span-porcentaje-visible');
                }); */
        }
    });
}
const observador = new IntersectionObserver(cargarPorcentaje,{
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 1.0,
});

observador.observe(porcentajeContenedor);