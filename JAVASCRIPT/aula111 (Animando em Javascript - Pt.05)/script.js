const carro = document.querySelector("#carro")
const btn_play = document.querySelector("#btn_play")
const btn_parar = document.querySelector("#btn_parar")

const inicial = () => {
    carro.style.position = "relative"
    carro.style.left = "0px"
    carro.style.width = "100px"
    carro.style.height = "50px"
    tamanho_carro = parseInt(carro.style.width)
    tamanho_maximo = window.innerWidth - tamanho_carro
}

let anima = null
let tamanho_maximo = null
let tamanho_carro = null
let direcao = 0

const mover = () => {
    if (parseInt(carro.style.left) >= tamanho_maximo) {
        direcao = -1
    } else if (parseInt(carro.style.left) <= 0) {
        direcao = 1
    } 
    carro.style.left = parseInt(carro.style.left) + (10*direcao) + "px"
    anima = setTimeout(mover, 0)
}

btn_play.addEventListener("click", (evento) => {
    mover()
})

btn_parar.addEventListener("click", (evento) => {
    clearTimeout(anima)
})

/* window.onload = inicial */
window.addEventListener("load", inicial())

window.addEventListener("resize", (evento) => {
    let tamanho_maximo = window.innerWidth - parseInt(carro.style.width)
})

window.addEventListener("keydown", (evento) => {
    if (evento.code === "ArrowUp") {
        carro.style.width = parseInt(carro.style.width) + 10 + "px"
        carro.style.height = parseInt(carro.style.height) + 10 + "px"
    }
    if (evento.code === "ArrowDown") {
        carro.style.width = parseInt(carro.style.width) - 10 + "px"
        carro.style.height = parseInt(carro.style.height) - 10 + "px"
    }
    tamanho_carro = parseInt(carro.style.width)
    tamanho_maximo.innerWidth - tamanho_carro
})