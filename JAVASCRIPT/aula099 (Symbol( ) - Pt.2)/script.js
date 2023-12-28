class Jogador {
    constructor(nome) {
        this.nome = nome
        this.id = Symbol()
    }
}

let jogadores = [new Jogador("p1"), new Jogador("p2"), new Jogador("p3"), new Jogador("p4"), new Jogador("p1"), new Jogador("p3")]

let symbols = []

let s_jogadores = jogadores.filter((p) => {
    return p.nome == "p1"
})

symbols = s_jogadores.map((j) =>{
    return j.id
})

console.log(jogadores) // todos os elementos do array
console.log(s_jogadores) // elementos com o nome "p1"
console.log(symbols) // identiicadores (Symbol()) dos elementos com o nome "p1"