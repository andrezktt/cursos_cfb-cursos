import React, {useState} from 'react'
import BasicInfo from './basico'
/* import Personagens from './personagens' */
import RendValor from './rend_valor'
import Imagens from './imagens'
import Log from './log'
import TextColor from './textcolor'
/* import TodosGames from './todosgames' */
import Recomendar from './recomendacao'
import Avaliar from './avaliar'
import Cadastro from './cadastro'
/* import Carro from './carro' */
import Tabela from './tabela'
import IMC from './imc'

export default function Body() {
    const [num, setNum] = useState(0)
    const [ligado, setLigado] = useState(false)
    const [log, setLog] = useState(true)
  
    return (
      <main>
        <section className='info'>
          <TextColor/>
          <Imagens ligado = {ligado} setLigado = {setLigado}/>
          <BasicInfo/>
          {/* <Personagens/> */}
          <RendValor num = {num} setNum = {setNum}/>
          <Recomendar/>
        </section>
        <section>
          <Avaliar/>
          {/* <TodosGames/> */}
          <IMC/>
        </section>
        <section>
          <Log log = {log} setLog = {setLog}/>
          <Cadastro/>
          {/* <Carro fator = {10}/> */}
          <Tabela/>
        </section>
      </main>
    )
  }