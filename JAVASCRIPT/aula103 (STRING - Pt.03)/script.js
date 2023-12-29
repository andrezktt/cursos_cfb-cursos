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

let sobrenome = nome.slice(6, 13) // recorta uma certa parte da STRING
console.log(sobrenome)

let array_nome = nome.split(" ") // divide a STRING em partes trasformando-a em um array de STRINGS
console.log(array_nome)

let parte_1 = nome.substring(0, 5) // recorta uma parte da STRING a partir do posição do primeiro caractere e o posterior ao último (já que não acrescenta oúlimo caractere ao recorte)
console.log(parte_1)

let parte_2 = nome.substr(6, 13) // função obsoleta, mas que recorta a STRING a partir da posição do caractere inicial e a quantidade de caracteres que serão recortados
console.log(parte_2)

console.log(nome.toLocaleUpperCase()) // transforma todos os caracteres em maiúsculos
console.log(nome.toUpperCase()) // transforma todos os caracteres em maiúsculos

nome = nome.toUpperCase() 
console.log(nome.toLocaleLowerCase()) // transforma todos os caracteres em minúsculos
console.log(nome.toLowerCase()) // transforma todos os caracteres em minúsculos

nome = new String("Andre Zicatti Leite") // "resetando" para a STRING inicial

console.log(nome)
console.log(nome.valueOf()) // extraí o valor primitivo da STRING

let num = 10
console.log(typeof(num)) 
num = num.toString() // transforma o tipo elemento para uma STRING
console.log(typeof(num))