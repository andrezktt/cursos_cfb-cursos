const temperatura = document.querySelector("#span_temperatura")
const volume = document.querySelector("#span_volume")
const pressao = document.querySelector("#span_pressao")

let dados = {
    data_temperatura: 0,
    data_volume:0,
    data_pressao: 0,

    set valores(val) {
        this.data_temperatura = val.temperatura
        this.data_volume = val.volume
        this.data_pressao = val.pressao

        temperatura.innerHTML = val.temperatura
        volume.innerHTML = val.volume
        pressao.innerHTML = val.pressao
    },

    get valores() {
        return [this.data_temperatura, this.data_volume, this.data_pressao]
    }
}

let intervalo = setInterval(buscar_dados = () => {
    const endpoint = "https://5b27f434-351d-42f7-8b84-e33e0a68cc30-00-q7nxsjqxxg2l.kirk.replit.dev/"
    fetch(endpoint)
    .then(res => res.json())
    .then(res => {
        res = dados.valores
    })
} ,1000)

console.log(dados.valores)