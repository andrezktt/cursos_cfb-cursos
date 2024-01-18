import React from 'react'

export default function RendValor(props) {
    return (
        <article>
            <p>Nota: {props.num}</p>
            <button onClick={() => props.setNum(props.num + 10)}>Rendenizar Valor</button>
        </article>
    )
}