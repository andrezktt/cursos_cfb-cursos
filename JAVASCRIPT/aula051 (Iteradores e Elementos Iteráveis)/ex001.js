const valores = [10, 25, 14, 5, 7]
const iterValores = valores[Symbol.iterator]()

console.log(valores)
console.log(iterValores.next())
console.log(iterValores.next())
console.log(iterValores.next())
console.log(iterValores.next())
console.log(iterValores.next())
console.log(iterValores.next())

console.log("")

const text = "Vivian"
const iterText = text[Symbol.iterator]()

console.log(text)
console.log(iterText.next())
console.log(iterText.next())
console.log(iterText.next())
console.log(iterText.next())
console.log(iterText.next())
console.log(iterText.next())
console.log(iterText.next())

// O ITERADOR REALIZA A OPERAÇÇAO AUTOMÁTICA DE PULAR PARA O PRÓXIMO ELEMENTO E IDENTIFICAR SE OS ELEMENTOS JÁ ACABARAM OU NÃO.

// Ou seja, os elementos iteráveis são importantes poix executam essas operações básicas de verificação de maneira automática. Mas também podemos criar um iterador específico dependendo do caso.