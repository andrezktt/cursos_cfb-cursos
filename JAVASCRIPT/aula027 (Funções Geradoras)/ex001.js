console.log(`PRIMEIRO EXEMPLO:`)
console.log(``)

function* cores() { // o "*" indica que esta é uma função geradora
    yield `Vermelho` // yield define a execução em ordem de chamada
    yield `Verde`
    yield `Azul`
}
let itc = cores() // é necessário realizar uma inicialização da função para que a função se torne uma variável

console.log(itc.next().value) // primeira chamada =  primeira execução
console.log(itc.next().value) // segunda chamada =  segunda execução
console.log(itc.next().value) // terceira chamada =  terceira execução

console.log(``)
console.log(`SEGUNDO EXEMPLO:`)
console.log(``)

function* perguntas() {
    const nome = yield `Qual é o seu nome?` // além de criar uma resposta para a primeira execução também se cria uma variável e abre um parâmetro
    const esporte = yield `Qual é o seu esporte favorito?` // aqui ocorre a mesma coisa porém com a variável "esporte"
    return `Então o seu nome é ${nome}, e seu esporte favorito é ${esporte}?` // vale ressaltar que só ao final de todas as execuções que vai haver um retorno
}

const itp = perguntas() // inicialização da função geradora
console.log(itp.next().value) //  execução primária que executa a função sem dar valor a nenhum parâmetro e sem retorno
console.log(itp.next(`André`).value) // execução secundária que dá valor a um parâmetro mas sem retorno pois não foi a última execução
console.log(itp.next(`volei`).value) //execução secundária que dá valor a um parâmetro e finalmente dá o retorno utilizando as varíaveis e seus parâmetros

console.log(``)
console.log(`TERCEIRO EXEMPLO:`)
console.log(``)

function* contador() {
    let i = 0
    while(true) { // looping da função que faz com que ela seja infinita, ou seja, gere uma sequência de números inninterruptamente
        yield i++
        if (i > 10) { // mas a execução das chamadas, e consequentemente da função só é interrompida graças à esta condição imposta antes do próprio looping de chamadas
            break // o comando específico que interrompe a função caso o número seja maior que 5 é o "break"
        }
    }
}
const itcont = contador() // criação de um iterador responsável por chamar toda a função estabelecida anteriormente
for (let c of itcont) { // este loop executa as chamadas infinitamente, ou seja, não é necessário executar cada chamada pontualmente
    console.log(c) // chamada final que executa toda a função
}