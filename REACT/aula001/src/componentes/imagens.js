import React from 'react'
import Imagem_1 from './img/imagem_1.png'
import Imagem_2 from './img/imagem_2.png'

export default function Imagens(props) {
    return ( 
        <article className='imagens'>
            <img src = {props.ligado? Imagem_1 : Imagem_2} alt = ''/>
            <button onClick={() => props.setLigado(!props.ligado)}>
                Mudar Imagem
            </button>

        </article>
    )
}