const quadr_1 = document.getElementById("q1")
const quadr_2 = document.getElementById("q2")
const posX = document.getElementById("posx")
const posY = document.getElementById("posy")
const largura = document.getElementById("largura")
const altura = document.getElementById("altura")

const info = (elemento) => {
    let DOMRect = elemento.getBoundingClientRect()
    posX.innerHTML = `Posição X: ${parseInt(DOMRect.x)}`
    posY.innerHTML = `Posição Y: ${parseInt(DOMRect.y)}`
    largura.innerHTML = `Largura: ${DOMRect.width}`
    altura.innerHTML = `Altura: ${DOMRect.height}`
}

quadr_1.addEventListener("click", (evento) => {
    info(evento.target)
})

quadr_2.addEventListener("click", (evento) => {
    info(evento.target)
})