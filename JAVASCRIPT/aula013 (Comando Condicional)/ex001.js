let n = 30

if (n >= 10) {
    console.log(`O número ${n} é maior que 10!`)
    if (n >= 50) { // condição aninhada
        console.log(`E também é maior que 50!`)
    } else {
        console.log(`E é menor que 50`)
    }
} else if (n >= 5) {
    console.log(`O número ${n} está entre 5 e 10!`)
} else {
    console.log(`O número ${n} é menor que 5!`)
}

console.log(`Acabou o programa.`)