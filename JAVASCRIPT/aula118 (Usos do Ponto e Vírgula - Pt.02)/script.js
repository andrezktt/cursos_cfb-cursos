// PRIMEIRA SITUAÇÃO = opcional mas gera resultados diferentes
let i = null
for(i = 0; i < 10; i++);
console.log(i) 

// SEGUNDA SITUAÇÃO = separação de sentenças
let j = null; j = 0

// TERCERIA SITUAÇÃO = antes de linhas que comecem com [] ou ()
let n1 = [1, 2]
let n2 = [3, 4];
[n1, n2].map(v => console.log(v))

// QUARTA SITUAÇÃO = em casos de desestruturação
let numeros = [10, 20, 30, 40];
[n1, n2, n3, n4] = numeros
console.log(n1)
console.log(n2)
console.log(n3)
console.log(n4)

// Desestruturação a partir de objetos (não está relacionado à esta aula)
let num = {
    a1: 10,
    a2: 20,
    a3: 30,
    a4: 40
}
let {a1, a2, a3, a4} = num
console.log(a1)
console.log(a2)
console.log(a3)
console.log(a4)
