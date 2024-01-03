const nome = document.querySelector("#f_nome")
const nota = document.querySelector("#f_nota")
const caixa_mensagem = document.querySelector("#f_mensagem")

document.querySelector("#btn_validar").addEventListener("click", (evento) => {
    let mensagem = null

    if(!nota.checkValidity()) {
        mensagem = `<strong>Atenção:</strong> ${nota.validationMessage}`
    }
    caixa_mensagem.innerHTML = mensagem
    evento.preventDefault()
})