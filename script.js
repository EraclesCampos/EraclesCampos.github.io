const imagen_eracles = document.getElementById('foto-eracles');
const texto_eracles = document.getElementById('texto-eracles');
const clickme = document.getElementById('clickme');
const containerClickme = document.getElementById('container-clickme');
const header = document.getElementById('header');
const barras = document.querySelector('.tres-barras');
let movido = false;
let header_oculto = true;


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

// Verificar si el ancho de la pantalla es el correcto para ocultar el header cuando se hacen clicks fuera del header
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

// --Efecto de scroll--
const elements = document.querySelectorAll('.animate');

    const checkVisibility = () => {
        const windowHeight = window.innerHeight;
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - 200) { 
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    };

window.addEventListener('scroll', checkVisibility);
checkVisibility();


// --Navbar--
const links = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

function handleIntersection(entries) {
    console.log(entries)
    entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        const link = document.querySelector(`.nav-link[href="#${id}"]`);
         
        if (entry.isIntersecting) {
            links.forEach(link => link.classList.remove('focused'));
            if (link) link.classList.add('focused');
        }
    });
}

// Configurar IntersectionObserver
const observer = new IntersectionObserver(handleIntersection, {
    root: null, 
    rootMargin: '0px',
    threshold: 0.5 
});

// Observar cada sección
sections.forEach(section => {
    observer.observe(section);
});

// // Actualizar coordenadas
// const coordenadas = document.querySelector('.coordenadas');

// function actualizarCoordenadas() {
//     const coordenadasX = window.scrollX;
//     const coordenadasY = window.scrollY;
//     coordenadas.innerHTML = `X = <b>${coordenadasX}</b><br>Y = <b>${coordenadasY}</b>`;
// }

// actualizarCoordenadas();
// window.addEventListener('scroll', actualizarCoordenadas);
