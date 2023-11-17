"use strict"

// TIPOS DE VARIÁVEIS

var nome = `André` // a variável "var" funciona para mais de um bloco

function teste() {
    let nome = `João` // já a variável "let" funciona apenas dentro de um único bloco.

    console.log(`A variável "let" só funciona aqui, olha: ${nome}`)
}

const curso = `JavaScript` // a variável const sinaliza que a variável não será alterada até o fim do programa, ou seja, é uma constante.

// dconst curso = `HTML ` | não é possível atribuir outro valor a uma constante

teste()
console.log(`Eu, ${nome}, estou fazendo o curso de ${curso}!`)