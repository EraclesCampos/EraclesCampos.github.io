const imagen_eracles = document.getElementById('foto-eracles')
const texto_eracles = document.getElementById('texto-eracles')
const clickme = document.getElementById('clickme')
const containerClickme = document.getElementById('container-clickme')
const header = document.getElementById('header')
const barras = document.querySelector('.tres-barras')
let movido = false
let header_oculto = false

// Funcion para mover la foto y el texto
containerClickme.addEventListener('click', function () {
    if (!movido) {
        imagen_eracles.style.transform = 'translateX(-200px)'
        containerClickme.style.transform = 'translateX(-200px)'
        texto_eracles.classList.add('texto-visible')
        texto_eracles.style.right = '0'
    } else {
        imagen_eracles.style.removeProperty('transform')
        containerClickme.style.removeProperty('transform')
        texto_eracles.style.right = '150px'
        texto_eracles.classList.remove('texto-visible')
    }

    movido = !movido
})
// funcion para ocultar el header
barras.addEventListener('click', function () {
    if (!header_oculto) {
        header.style.transform = 'translateX(0)'
    } else {
        header.style.transform = 'translateX(-40vw)'
    }

    header_oculto = !header_oculto
})
// Verificar si el ancho de la pantalla es el correcto para ocultar el header cuando se hacen clicks 
// fuera del header
if (window.innerWidth < 576) {
    document.addEventListener('click', function (e) {
        const clickfuera = barras.contains(e.target) || header.contains(e.target);

        if (!clickfuera) {
            header.style.transform = 'translateX(-40vw)';
        }
    })
}
// funcion para el hover de la imagen
containerClickme.addEventListener('mouseover', function () {
    clickme.style.opacity = '1'
    imagen_eracles.style.filter = 'brightness(50%)'
})
containerClickme.addEventListener('mouseout', function () {
    clickme.style.opacity = '0'
    imagen_eracles.style.removeProperty('filter')
})
// funcion para mostrar el boton de barras 
window.addEventListener('resize', function () {
    if (window.innerWidth < 576) {
        barras.classList.remove('hidden')
    }
    else barras.classList.add('hidden'); header.style.removeProperty('transform')
})

