import contato from "./contatos.js"

const lista_contatos = document.querySelector("#lista_contatos")
const btn_gravar  = document.querySelector("#btn_gravar")

btn_gravar.addEventListener("click", (evento) => {
    const f_contato = {
        nome: document.querySelector("#f_nome").value,
        telefone: document.querySelector("#f_telefone").value,
        email: document.querySelector("#f_email").value,
    }
    contato.addContato(f_contato, lista_contatos)
    console.log(contato.getTodosContatos())
})