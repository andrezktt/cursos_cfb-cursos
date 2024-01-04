const temperatura = document.querySelector("#temperatura")
const volume = document.querySelector("#volume")
const pressao = document.querySelector("#pressao")
const btn_fetch = document.querySelector("#btn_fetch")

const obterDados = () => {
    const endpoint = "https://5b27f434-351d-42f7-8b84-e33e0a68cc30-00-q7nxsjqxxg2l.kirk.replit.dev/"
    fetch(endpoint)

    .then(res => res.json())
    .then(dados => {
        console.log(dados)
        temperatura.innerHTML = `<strong>Temperatura:</strong> ${dados.temperatura}°C`
        volume.innerHTML = `<strong>Volume:</strong> ${dados.volume}m<sup>3</sup>`
        pressao.innerHTML = `<strong>Pressão:</strong> ${dados.temperatura}Pa`
    })
}

// setInterval(obterDados, 1000)

let dados = {
    nome: "André",
    idade: 23,
    altura: 180
}

const gravarDados = () => {
    const endpoint = ""
    fetch(endpoint, {
        method: "POST",
        body: JSON.stringify(dados)
    })
    .then(res => res.json())
    .then(retorno => {
        console.log(retorno)
    })
}

btn_fetch.addEventListener("click", (evento) => {
    gravarDados()
})
