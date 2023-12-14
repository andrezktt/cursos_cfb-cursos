const pessoa = {
    nome: "André",
    sobrenome: "Zicatti",
    idade: 23,
    games: {
        FPS: "Call of Duty",
        História: "The Last of Us",
        RPG: "Baldur's Gate 3",
        Indie: "Tunic"
    }
}

const stringPessoa = '{"nome":"André","sobrenome":"Zicatti","idade":23,"games":{"FPS":"Call of Duty","História":"The Last of Us","RPG":"Baldurs Gate 3","Indie":"Tunic"}}'

const objetoParaString = JSON.stringify(pessoa) // converte objeto para string por via de JSON
const stringParaObjeto = JSON.parse(stringPessoa) // converte string para objeto em JSON

console.log(objetoParaString)
console.log("--------------------")
console.log(stringParaObjeto)