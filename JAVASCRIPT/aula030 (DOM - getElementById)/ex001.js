let c1 = document.getElementById(`c1`) // o comando "getElementById" captura os objetos em HTML e os transforma em variáveis para serem manipuladas em JavaScript
let c2 = document.getElementById(`c2`)
let c3 = document.getElementById(`c3`)
let c4 = document.getElementById(`c4`)
let c5 = document.getElementById(`c5`)
let c6 = document.getElementById(`c6`)

/* c1.innerHTML = `Curso JavaScript`
console.log(c1.id)
console.log(c1.innerHTML) */

const arrayElementos= [c1, c2, c3, c4, c5, c6] // transformação dos elementos capturados em um array

/* for(i of arrayElementos) {
    i.innerHTML = `Alteração de elementos utilizando "for of"!`
} */

arrayElementos.map((elemento) => { // utiliza-se o comando map para percorrer e manipular TODOS os elementos capturados e presentes no array
    console.log(elemento.innerHTML)
    elemento.innerHTML = `Carlinhos Brown`
})

