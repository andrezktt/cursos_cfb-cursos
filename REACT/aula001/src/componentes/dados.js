import React from 'react'

export default function Dados(props) {
    return (
        <section>
            <p><strong>Jogo:</strong> {props.jogo()}</p>
            <p><strong>Plataforma:</strong> {props.plataforma}</p>
            <p><strong>Produtora:</strong> {props.produtora}</p>
        </section>
    )
}