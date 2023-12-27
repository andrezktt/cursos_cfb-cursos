import { contatos } from "./banco_contatos.js";

let contato = {
    getTodosContatos: () => {
        return contatos
    },

    getContato: (indice_contato) => {
        return contatos[indice_contato]
    },

    addContato: (novo_contato, destino_dom) => {
        const b_contatos = {
            nome: novo_contato.nome,
            telefone: novo_contato.telefone,
            email: novo_contato.email,
        }
        contatos.push(b_contatos)
        
        const div = document.createElement("div")
        div.setAttribute("class", "contato")
        const p_nome = document.createElement("p")
        p_nome.innerHTML = `<strong>Nome:</strong> ${novo_contato.nome}`
        const p_telefone = document.createElement("p")
        p_telefone.innerHTML = `<strong>Telefone</strong>: ${novo_contato.telefone}`
        const p_email = document.createElement("p")
        p_email.innerHTML = `<strong>Email:</strong> ${novo_contato.email}`
        div.appendChild(p_nome)
        div.appendChild(p_telefone)
        div.appendChild(p_email)
        destino_dom.appendChild(div)
    },
}

export default contato