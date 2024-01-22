import React, {useState} from 'react'

export default function Cadastrar() {
    const [nome, setNome] = useState()
    const armazenar = (chave, valor) => {
        localStorage.setItem(chave, valor)
    }
    const consultar = (chave) => {
        alert(`O email cadastrado foi: ${localStorage.getItem(chave)}`)
    }
    const apagar = (chave) => {
        localStorage.removeItem(chave)
    }
    return (
        <article>
            <h3>Receba nossa Newsletter:</h3>
            <label>Seu Email:</label>
            <input type='text' value={nome} onChange={(elemento) => setNome(elemento.target.value)} placeholder='Insira o seu email'></input>
            <button onClick={() => armazenar('local_nome', nome)}>Cadastrar</button>
            <button onClick={() => consultar('local_nome')}>Conferir</button>
            <button onClick={() => apagar('local_nome')}>Remover</button>
        </article>
    )
}