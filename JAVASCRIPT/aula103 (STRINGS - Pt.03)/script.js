let nome = new String("Andre Zicatti Leite") // STRING
let nome_2 = new String("Andre Zicatti Leite") // STRING
let idade = new String(" (23 anos)") //STRING

console.log(nome) // STRING completa
console.log(typeof(nome)) // tipo da STRING

console.log(nome.charAt(0)) // caractere na posição "0"
console.log(nome.charAt(4)) // caractere na posição "4"

console.log(nome.charCodeAt(0)) // código do caractere na posição "0"

console.log(nome.concat(idade)) // STRING "nome" concatenada com a STRING "idade"

console.log(nome.indexOf("e")) // índice do primeiro caractere "e"

console.log(nome.lastIndexOf("e")) // índice do último caractere "e"

console.log(nome.localeCompare(nome_2)) // comparação da quantidade de caracteres das STRINGS

console.log(nome.replace("Leite", "Lupi")) // substituição de elementos

console.log(nome.search("Zicatti")) // busca pela primeira aparição do termo dentro da STRING

let sobrenome = nome.slice(6, 13)
console.log(sobrenome)

let array_nome = nome.split(" ")
console.log(array_nome)