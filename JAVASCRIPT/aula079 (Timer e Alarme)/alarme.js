const divData = document.querySelector("#div_data")
const divRelogio = document.querySelector("#div_relogio")
const btnLigar = document.querySelector("#btn_ligar")
const btnParar = document.querySelector("#btn_parar")
const tempoAlarme = document.querySelector("#tempo_alarme")
const horaAlarme = document.querySelector("#hora_alarme")
const timer = document.querySelector("#timer")

const somAlarme = new Audio("alarme.mp3")
somAlarme.loop = -1

let atualTimestamp = null
let alarmeTimestamp = null
let alarmeLigado = false
let alarmeTocando = false

btnLigar.addEventListener("click", (evento) => {
    atualTimestamp = Date.now()
    alarmeTimestamp = atualTimestamp + (tempoAlarme.value * 60000)
    alarmeLigado = true

    const dataAlarme = new Date(alarmeTimestamp)

    let hora = dataAlarme.getHours()
    hora = hora < 10 ? "0" + hora : hora
    let minutos = dataAlarme.getMinutes()
    minutos = minutos < 10 ? "0" + minutos : minutos
    let segundos = dataAlarme.getSeconds()
    segundos = segundos < 10 ? "0" + segundos : segundos

    horaAlarme.innerHTML = `Programado: <p>${hora}h ${minutos}min ${segundos}seg <p/>`
})

btnParar.addEventListener("click", (evento) => {
    alarmeLigado = false
    alarmeTocando = false
    horaAlarme.innerHTML = `Alarme (minutos): `
    tempoAlarme.value = 0
    timer.classList.remove("alarme")
    somAlarme.pause();
    somAlarme.currentTime = 0;
})

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

    if (alarmeLigado && !alarmeTocando) {
        if (data.getTime() >= alarmeTimestamp) {
            alarmeTocando = true
            somAlarme.play()
            timer.classList.add("alarme")
        }
    }
}

const intervalo = setInterval(relogio, 1000)
relogio()