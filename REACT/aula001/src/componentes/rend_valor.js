import React from 'react'

export default function RendValor(props) {
    return (
        <article>
            <p>Valor: {props.num}</p>
            <button onClick={() => props.setNum(props.num + 11)}>Rendenizar Valor</button>
        </article>
    )
}