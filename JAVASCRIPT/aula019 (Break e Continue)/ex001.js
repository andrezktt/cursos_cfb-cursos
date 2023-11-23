let n = 0 
let max = 1000

while(n <= max) {
    console.log(`Estamos em ${n}`)
    if (n >= 10) {
        break // o break interrompe completamente as iterações do loop, ou seja, passa direto para o próximo comando após o loop
    }
    n++
}

console.log(``)

let pares = 0

for(let i = 0; i <= max; i++) {
    if (i % 2 != 0) {
        continue // o comando continue interrompe apenas a iteração atual, ou seja, ele permanece dentro do loop
    }
    pares++
}

console.log(`Quantidade de números pares: ${pares}`)
console.log("Fim do Programa")