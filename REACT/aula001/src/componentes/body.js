import React from 'react'
import Dados from './dados'

export default function Body() {
    const jogo = () => {
        return "Final Fantasy VII Remake"
    }
    const pltf = "Plastation 4, Playstation 5 e PC"
    const prod = "Square Enix"
    const somar = (n1, n2) => {
        return n1 + n2
    }
  
    return (
      <section>
        <h3>Personagens:</h3>
        <p>Cloud</p>
        <p>Barret</p>
        <p>Aerith</p>
        <p>Tifa</p>
        <Dados 
        jogo = {jogo}
        plataforma = {pltf} 
        produtora = {prod} 
        somar = {somar}/>
      </section>
    )
  }