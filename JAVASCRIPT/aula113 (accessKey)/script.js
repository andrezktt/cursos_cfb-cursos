const quadr_1 = document.getElementById("q1")
const quadr_2 = document.getElementById("q2")
const posX = document.getElementById("posx")
const posY = document.getElementById("posy")
const largura = document.getElementById("largura")
const altura = document.getElementById("altura")

// AS TECLAS DE ATALHO NÃO FUNCIONAM NO FIREFOX!!!
quadr_1.accessKey = "b"
quadr_2.accessKey = "n"

console.log(`Quadrado 1: ${quadr_1.accessKey}`)
console.log(`Quadrado 2: ${quadr_2.accessKey}`)

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