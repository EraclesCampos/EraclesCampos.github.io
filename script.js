const imagen_eracles = document.getElementById('foto-eracles');
const texto_eracles = document.getElementById('texto-eracles');
const clickme = document.getElementById('clickme');
const containerClickme = document.getElementById('container-clickme');
const header = document.getElementById('header');
const barras = document.querySelector('.tres-barras');
let movido = false;
let header_oculto = true; // Cambiado a true para ocultar por defecto en pantallas pequeñas

// Funcion para mover la foto y el texto
containerClickme.addEventListener('click', function () {
    if (!movido) {
        if(window.innerWidth < 930){
            imagen_eracles.style.transform = 'translateY(200px) scale(.5)';
            containerClickme.style.transform = 'translateY(200px) scale(.5)';
            texto_eracles.classList.add('texto-visible');
            texto_eracles.style.right = '0';    
        }
        else{
            imagen_eracles.style.transform = 'translateX(-200px)';
            containerClickme.style.transform = 'translateX(-200px)';
            texto_eracles.classList.add('texto-visible');
            texto_eracles.style.right = '0';  
        }
       
    } else {
        imagen_eracles.style.removeProperty('transform');
        containerClickme.style.removeProperty('transform');
        texto_eracles.style.right = '150px';
        texto_eracles.classList.remove('texto-visible');
    }

    movido = !movido;
});

// funcion para ocultar el header
barras.addEventListener('click', function (e) {
    e.stopPropagation(); // Prevenir que el evento se propague al document
    if (!header_oculto) {
        header.style.transform = 'translateX(-40vw)';
    } else {
        header.style.transform = 'translateX(0)';
    }

    header_oculto = !header_oculto;
});

// Verificar si el ancho de la pantalla es el correcto para ocultar el header cuando se hacen clics fuera del header
document.addEventListener('click', function (e) {
    if (window.innerWidth < 576) {
        const clickfuera = barras.contains(e.target) || header.contains(e.target);

        if (!clickfuera) {
            header.style.transform = 'translateX(-40vw)';
            header_oculto = true;
        }
    }
});

// funcion para el hover de la imagen
containerClickme.addEventListener('mouseover', function () {
    clickme.style.opacity = '1';
    imagen_eracles.style.filter = 'brightness(50%)';
});
containerClickme.addEventListener('mouseout', function () {
    clickme.style.opacity = '0';
    imagen_eracles.style.removeProperty('filter');
});

// funcion para mostrar el boton de barras y ajustar la visibilidad del header según el tamaño de la pantalla
window.addEventListener('resize', function () {
    if (window.innerWidth < 576) {
        barras.classList.remove('hidden');
        if (header_oculto) {
            header.style.transform = 'translateX(-40vw)';
        }
    } else {
        barras.classList.add('hidden');
        header.style.removeProperty('transform');
        header_oculto = false; // No ocultar el header en pantallas grandes
    }
});
