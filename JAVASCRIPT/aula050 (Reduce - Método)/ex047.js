const array = document.querySelector("#array")
const btn_reduzir = document.querySelector("#btn_reduzir")
const resultado = document.querySelector('#resultado')

const arrayElements = [1, 2, 3, 4, 5]
array.innerHTML = arrayElements

let previous = []
let current = []
let dobro = []

btn_reduzir.addEventListener("click", (event) => {
    dobro.push(arrayElements[0]*2)
    resultado.innerHTML = arrayElements.reduce((previousElement, element, key) => {
        current.push(element)
        previous.push(previousElement)
        dobro.push(element*2)
        return element + previousElement
    })
    resultado.innerHTML += `<br/> Valor anterior: ${previous} <br/> Valor Atual: ${current} <br/> Dobro: ${dobro}`
})

// O método reduce cria uma redução, ou seja, a partir de uma condição/operação estabelecida o método seleciona e filtra o array gerando um resultado desejado (no exemplo acima foi gerada uma soma com todos os elementos do array)

