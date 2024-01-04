const endpoint = "https://5b27f434-351d-42f7-8b84-e33e0a68cc30-00-q7nxsjqxxg2l.kirk.replit.dev/" // essa variável apenas associa o "caminho" de uma API à uma variável
fetch(endpoint) // o comando FETCH é o responsável por extrair / consumir a própria API

.then(res => res.json()) // o then serve para referenciar e comandar apenas os elementos da própria API, e aqui ee transforma a resposta da API (res) em um objeto JSON
.then(dados => { // "dados" é apenas uma variável que foi criada para armazenar a resposta da API (res), e essa variável origina também uma função
    console.log(dados) // mostrando que os dados são objetos, graças a conversão da resposta para um JSON
})
