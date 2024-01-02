const carro = document.querySelector("#carro")
const btn_esquerda = document.querySelector("#btn_esquerda")
const btn_direita = document.querySelector("#btn_direita")
const btn_parar = document.querySelector("#btn_parar")

const inicial = () => {
    carro.style.position = "relative"
    carro.style.left = "0px"
    carro.style.width = "100px"
    tamanho_maximo = window.innerWidth - parseInt(carro.style.width)
}

let anima = null
let tamanho_maximo = null

const mover = (direcao) => {
    if (direcao > 0) {
        if (parseInt(carro.style.left) <= tamanho_maximo) {
            carro.style.left = parseInt(carro.style.left) + (10*direcao) + "px"
            anima = setTimeout(mover, 0, direcao)
        } else {
            clearTimeout(anima)
        }
    } else if (direcao < 0) {
        if (parseInt(carro.style.left) >= 0) {
            carro.style.left = parseInt(carro.style.left) + (10*direcao) + "px"
            anima = setTimeout(mover, 0, direcao)
        }  else {
            clearTimeout(anima)
        }
    }
    console.log(tamanho_maximo)
}

btn_esquerda.addEventListener("click", (evento) => {
    clearTimeout(anima)
    mover(-1)
})

btn_direita.addEventListener("click", (evento) => {
    clearTimeout(anima)
    mover(1)
})

btn_parar.addEventListener("click", (evento) => {
    clearTimeout(anima)
})

/* window.onload = inicial */
window.addEventListener("load", inicial())
window.addEventListener("resize", (evento) => {
    let tamanho_maximo = window.innerWidth - parseInt(carro.style.width)
})