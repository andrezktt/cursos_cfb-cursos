import React from 'react'
import Globais from './globais'

export default function Info() {
    return (
        <article>
            <h3>Meus Favoritos:</h3>
            <p>Jogo: {Globais.favorito}</p>
            <p>Lançamento: {Globais.ano}</p>
        </article>
    )
}