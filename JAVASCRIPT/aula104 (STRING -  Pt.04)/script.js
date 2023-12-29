let nome = new String("Andre Zicatti Leite")

console.log(nome.startsWith("Andre")) // verifica se a STRING começa com determinado termo

console.log(nome.endsWith("Leite")) // verifica se a STRING termina com determinado termo

console.log(nome.includes("Silva")) // verifica ceto termo está incluso na STRING

console.log(nome.repeat(3)) // repete a STRING algumas vezes
console.log(nome.valueOf()) // mas não altera o valor primitivo dela

console.log(nome.charCodeAt(0)) // codigo do caractere
console.log(nome.charCodeAt(1)) // codigo do caractere
console.log(nome.charCodeAt(2)) // codigo do caractere
console.log(nome.charCodeAt(3)) // codigo do caractere
console.log(nome.charCodeAt(4)) // codigo do caractere

console.log(String.fromCodePoint(65, 110, 100, 114, 101)) // recontroe os caracteres a partir do código de cada um deles

let nome_ts = "Andre"
console.log(`Nome: ${nome_ts}`) // template strings