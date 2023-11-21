/* 
SEM UTILIZAR O OPERADOR TERNÁRIO

let n = 17
let res = n % 2

if (res == 0) {
    console.log(`${n} é Par!`)
} else {
    console.log(`${n} é Ímpar!`)
} 
*/

// UTILIZANDO O OPERADOR TERNARIO

let n = 17
res = (!(n % 2) ? "Par" : "Ímpar") // foi preciso negar a condição para inverte-la e gerar o resultado oposto -> par = true = 1 e impar = false = 0
console.log(res)

// 0 = false
// 1 = true

/* 
USO DO OPERADOR TERNÁRIO:
teste lógico ? se verdadeiro : se falso 
*/