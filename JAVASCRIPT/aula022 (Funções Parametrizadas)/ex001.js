console.log(`MANEIRA SIMPLIFICADA`)
const padrao = 0 // declaração de uma constante padrão para que os parâmetros não fiquem vazios e deem erro

function soma(n1=padrao, n2=padrao) { // também é possível declarar os parâmetros como iguais a zero
    return n1+n2
}
console.log(soma(17, 20)) // os valores só substituem os parâmetros originais quando são declarados na chamada

console.log(`MANEIRA DIDÁTICA:`) // segue a mesma linha de raciocínio da função anterior, mas coloca os comandos de uma maneira mais semânticamente "correta"
const padrao2 = 0

function soma(n1 = padrao, n2 = padrao) {
    let res
    res = n1+n2
    return res
}
let resultado = soma(12, 55)
console.log(resultado) 


console.log(`EXERCÍCIO`) // é possível criar uma constante de adição para uma variável, a partir de uma função e seus parâmetros
function add(n) {
    return valor + n
}

let valor = 0
console.log(valor)

valor = add(10)
console.log(valor)

valor = add(7)
console.log(valor)


