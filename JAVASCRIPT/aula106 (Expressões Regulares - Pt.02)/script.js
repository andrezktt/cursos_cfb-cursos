let nome = new String("Andre Zicatti Leite 1946")
let email = 'andrezicatti@gmail.com'
let numeros = "1, 10, 100, 1000"

console.log(nome)

console.log(nome.match(/[a-m | 0-9]/ig))

// METACARACTERES 
console.log(nome.match(/\d/ig)) // números
console.log(nome.match(/\s/ig)) // espaços
console.log(nome.match(/\bZ/ig)) // caracteres

// QUANTIFICADORES
console.log(numeros)
console.log(numeros.match(/10/ig))
console.log(numeros.match(/10+/ig))
console.log(numeros.match(/10*/ig))
console.log(numeros.match(/10?/ig))
