const nome = Symbol("nome")
const numero = Symbol("numero")
const cor = Symbol("cor")

const Jogador = {
    [nome]: "player_1",
    [numero]: "11",
    [cor]: "verde"
}

for (p in Jogador) {
    console.log(p)
}

console.log(Jogador)

console.log("----------")

console.log(Jogador.nome) // variavel "escondida" pela propriedade "Symbol()"
console.log(Jogador.numero) // variavel "escondida" pela propriedade "Symbol()"
console.log(Jogador.cor) // variavel "escondida" pela propriedade "Symbol()"

console.log("----------")

console.log(Jogador[nome])
console.log(Jogador[numero])
console.log(Jogador[cor])