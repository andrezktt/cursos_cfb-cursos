const c1 = document.getElementById(`c1`)
const c2 = document.getElementById(`c2`)
const c3 = document.getElementById(`c3`)
const c4 = document.getElementById(`c4`)
const c5 = document.getElementById(`c5`)
const c6 = document.getElementById(`c6`)

const arrayElementos = [c1, c2, c3, c4, c5, c6] // quando capturados pela tag "getElementById" os elementos juntos formam um array

let colecaoHTML = document.getElementsByTagName(`div`)

console.log(arrayElementos) // quando capturados pelo comando "getElementById" os elementos formam um array
console.log(colecaoHTML) // Quando capturados pelo comando "getElementByTagName" os elemetos formam uma coleção HTML

colecaoHTML = [...colecaoHTML]
console.log(colecaoHTML) // utilizando o comando "spread" é possível converter uma coleção HTML para um array, possibilitando assim a utilização de diversos outros comandos e operações

colecaoHTML.map((elementos) => { 
    console.log(elementos)
}) // graças a essa converão é possível utilizar o comando "map" (que só funciona em arrays)