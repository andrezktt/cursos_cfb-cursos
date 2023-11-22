let n = 10

while(n < 10) {
    console.log(`Contagem em ${n}`)
} // aqui não há a execução do comando já que o teste lógico foi executado primeiro.

console.log(``)

do {
    console.log(`Contagem em ${n}`)
} while(n < 10) // aqui houve uma execução apenas já que o teste lógico só foi executado depois da primeira iteração