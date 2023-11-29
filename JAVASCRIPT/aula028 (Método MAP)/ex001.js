console.log(`EXEMPLO BÁSICO:`)
console.log(``)

let cursos = [`HTML`, `CSS`, `JavaScript`, `React`, `PHP`] // aqui há uma coleção de elementos, já que não foi usado o comando spread (...) para transformá-lo em um array
cursos.map((elementos, indice) => { // O comando "map" é utilizado para percorrer uma coleção inteira, retornando absolutamente todos os elementos. Além disso, utiliza-se dois parâmetros para o comando: o elemento e sua posição no array
    console.log(`Curso: ${elementos} - Posição do Curso: ${indice}`) // Criou-se uma arrow function que executa o comando de mapear/mostrar todos os elementos da coleção
})

console.log(``)
console.log(`EXEMPLO DE RETORNO:`)
console.log(``)

let cursosb = [`HTML`, `CSS`, `JavaScript`, `React`, `PHP`]
let c = cursos.map((elementos, indice) => { // função anônima
    return `<div>${elementos}</div>` //  que retorna apenas quais são os elementos da coleção  formatados para inserção em HTML
})

console.log(c) // necessita de uma chamada já que a função anônima (arrow function) agora tem uma variável que a identifica