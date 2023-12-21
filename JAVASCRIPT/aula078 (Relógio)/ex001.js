const divData = document.querySelector("#div_data")
const divRelogio = document.querySelector("#div_relogio")


const data = new Date()
let dia = data.getDate()
dia = dia < 10 ? "0" + dia : dia
let mes = data.getMonth()
mes = mes < 10 ? "0" + mes : mes
let ano = data.getFullYear()
const dataResumida = dia + " / " + mes + " / " + ano
divData.innerHTML = dataResumida

const relogio = () => {
    const data = new Date()
    let hora = data.getHours()
    hora = hora < 10 ? "0" + hora : hora
    let minutos = data.getMinutes()
    minutos = minutos < 10 ? "0" + minutos : minutos
    let segundos = data.getSeconds()
    segundos = segundos < 10 ? "0" + segundos : segundos

    divRelogio.innerHTML = hora + " : " + minutos + " : " + segundos
}

const intervalo = setInterval(relogio, 1000)
relogio()