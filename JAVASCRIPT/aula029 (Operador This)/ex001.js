console.log(`EXEMPLO BÁSICO`)
console.log(``)

function aluno(nome, nota) {
    this.nome = nome // O comando "this" permite relacionar uma variável a um parâmetro criado para a função, ou seja, o parâmetro se torna também uma variável graças a este comando
    this.nota = nota

    this.dados_anonimo = function() { // quando usa-se uma função anônima, não é possível utilizar as variáveis que estão fora da função, mas isso não é culpa propriamente da função, mas sim do comando de atraso "setTimeout"
        setTimeout(function(){ // este comando consegue definir um atraso de execução para a função ou para um comando
            console.log(this.nome)
            console.log(this.nota)
        }), 2000 // Tempo em milisegundo para executar a função
    }

    this.dados_arrow = function() { // já em uma arrow function, o "setTimeout" não interfere nas variáveis criadas anteriormente, ou seja, é possível utilizar as varíaveis tranquilamente em sua execução
        setTimeout(() => {
            console.log(this.nome)
            console.log(this.nota)
        }), 2000
    }
}

const aln1 = new aluno(`André`, 10)
aln1.dados_anonimo()
aln1.dados_arrow()
