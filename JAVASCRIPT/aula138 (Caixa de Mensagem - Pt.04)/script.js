import { Caixa_Mensagem } from "./caixa_mensagem.js"

const btn_mensagem_1 = document.querySelector("#btn_mostrar_mensagem_1")
const btn_mensagem_2 = document.querySelector("#btn_mostrar_mensagem_2")
const btn_mensagem_3 = document.querySelector("#btn_mostrar_mensagem_3")

const config = {
    cor: "#3b5998"
}
Caixa_Mensagem.config(config)

btn_mensagem_1.addEventListener("click", (evento) => {
    Caixa_Mensagem.mostrar("Final Fantasy XV", "Final Fantasy XV é um jogo eletrônico de RPG de ação desenvolvido e publicado pela Square Enix. Ele foi lançado mundialmente no dia 29 de novembro de 2016 para as plataformas PlayStation 4 e Xbox One.")
})
btn_mensagem_2.addEventListener("click", (evento) => {
    Caixa_Mensagem.mostrar("Days Gone", "Days Gone é um jogo eletrônico de ação-aventura e sobrevivência desenvolvido pela Bend Studio e publicado pela Sony Interactive Entertainment. O jogo se passa no Oregon pós-apocalíptico, dois anos após o início de uma pandemia. O ex-fora-da-lei que se tornou um vagabundo, Deacon St.")
})
btn_mensagem_3.addEventListener("click", (evento) => {
    Caixa_Mensagem.mostrar("Resident Evil Village", "Resident Evil: Village, conhecido no Japão como Biohazard: Village é um jogo eletrônico de survival horror desenvolvido e publicado pela Capcom. É a sequência de Resident Evil 7: Biohazard, de 2017, e foi anunciado pela primeira vez no evento de revelação do PlayStation 5 em 11 de junho de 2020.")
})