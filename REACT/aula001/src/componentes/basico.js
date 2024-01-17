import React from 'react'
import Dados from './dados'

export default function BasicInfo() {
    const jogo = () => {
        return "Final Fantasy VII Remake"
    }
    const pltf = "Plastation 4, Playstation 5 e PC"
    const prod = "Square Enix"
    return (
    <article className='basicInfo'>
            <h3>Sobre o Game:</h3>
            <Dados
            jogo = {jogo}
            plataforma = {pltf}
            produtora = {prod}/>
          </article>
    )
}