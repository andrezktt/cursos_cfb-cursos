/*
OPERADORES LÓGICOS:
&& >> and / e
|| >> or / ou
! >> not / não 
*/

let n1 = 10
let n2 = 5
let n3 = 15
let n4 = 2

console.log((n1 > n2) && (n1 > n3)) // a segunda sentença é falsa então toda a condição também é falsa
console.log((n1 > n2) || (n1 > n3)) // mesmo a segunda sentença sendo falsa a condição continua sendo verdadeira
console.log(!(n1 > n4)) // mesmo a condição sendo verdadeira o operador de negação inverte o resultado da condição