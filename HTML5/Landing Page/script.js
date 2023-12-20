const itensAnimados = document.querySelectorAll("[data-anima]")
const classAnimacao = "animacao"

function scrollAnimacao() {
    const topoPagina = window.scrollY + ((window,innerHeight*3)/4); /* 3/4 */
    itensAnimados.forEach(function(elemento) {
        if(topoPagina > elemento.offsetTop) {
            elemento.classlist.add(classAnimacao)
        } else {
            elemento.classList.remove(classAnimacao)
        }
    })
}

if (itensAnimados.lenght) {
    window.addEventListener("scroll", function() {
        scrollAnimacao()
    })
}