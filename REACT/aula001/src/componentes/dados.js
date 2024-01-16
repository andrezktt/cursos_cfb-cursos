import React from 'react'

export default function Dados(props) {
    let n1 = 10
    let n2 = 15
    return (
        <section>
            <p>Jogo: {props.jogo()}</p>
            <p>Plataforma: {props.plataforma}</p>
            <p>Produtora: {props.produtora}</p>
            <p>Somar: {`A soma de ${n1} com ${n2} é igual a ${props.somar(n1, n2)}`}</p>
        </section>
    )
}