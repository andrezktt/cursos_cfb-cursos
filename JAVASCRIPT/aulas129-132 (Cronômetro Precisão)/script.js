const timer = document.querySelector("#timer")
const btn_iniciar = document.querySelector("#btn_iniciar")
const btn_parar = document.querySelector("#btn_parar")
const btn_zerar = document.querySelector("#btn_zerar")
const btn_registrar = document.querySelector("#btn_registrar")
const caixa_registro = document.querySelector("#registroContagem")

let timestampInicial = null
let intervalo = null

const contador = () => {
    const timestampAtual = Date.now()
    let contagemSegundos = (timestampAtual - timestampInicial)/1000
    timer.innerHTML = converter(contagemSegundos)
}

const converter = (contagemSegundos) => {
    let hora = Math.floor(contagemSegundos / 3600)
    let resto = contagemSegundos % 3600
    let minutos = Math.floor(resto / 60)
    let segundos = Math.floor(resto % 60)
    let formatacao = `${hora < 10 ? "0" + hora  : hora} : ${minutos < 10 ? "0" + minutos  : minutos} : ${segundos < 10 ? "0" + segundos  : segundos}`

    return formatacao
}

btn_iniciar.addEventListener("click", (evento) => {
    timestampInicial = Date.now()
    intervalo = setInterval(contador, 1000)
})

btn_parar.addEventListener("click", (evento) => {
    clearInterval(intervalo)
})

btn_zerar.addEventListener("click", (evento) => {
    timestampInicial = Date.now()
    timer.innerHTML = "00 : 00: 00"
    clearInterval(intervalo)
    caixa_registro.innerHTML = ""
})

btn_registrar.addEventListener("click", (evento) => {
    let parcial = `<p class = "parciais">${timer.innerHTML}</p>`
    caixa_registro.innerHTML += parcial
})