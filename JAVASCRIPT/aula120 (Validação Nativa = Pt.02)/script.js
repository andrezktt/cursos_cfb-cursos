const nome = document.querySelector("#f_nome")
const nota = document.querySelector("#f_nota")
const caixa_mensagem = document.querySelector("#f_mensagem")

document.querySelector("#btn_validar").addEventListener("click", (evento) => {
    let mensagem = null
    if(nota.validity.valueMissing) {
        mensagem = "Por favor, insira seu nome e nota nos campos acima."
    } else if(nota.validity.rangeOverflow) {
        mensagem = "Nossa, você é mesmo um gênio! Mas, por favor, insira uma nota válida."
    } else if(nota.validity.rangeUnderflow) {
        mensagem = "Credo, não se menospreze tanto assim! Mas, por favor, insira uma nota válida."
    }
    caixa_mensagem.innerHTML = mensagem
    evento.preventDefault()
})