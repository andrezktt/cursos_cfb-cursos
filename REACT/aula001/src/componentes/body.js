import React, {useState} from 'react'
import BasicInfo from './basico'
import Personagens from './personagens'
import RendValor from './rend_valor'
import Imagens from './imagens'
import Log from './log'
import TextColor from './textcolor'
import TodosGames from './todosgames'
import AvalGames from './avaliacao'

export default function Body() {
    const [num, setNum] = useState(0)
    const [ligado, setLigado] = useState(false)
    const [log, setLog] = useState(true)
  
    return (
      <main>
        <section className='info'>
          <BasicInfo/>
          <Personagens/>
          <RendValor num = {num} setNum = {setNum}/>
          <Imagens ligado = {ligado} setLigado = {setLigado}/>
          <Log log = {log} setLog = {setLog}/>
        </section>
        <section>
          <TextColor/>
          <TodosGames/>
          <AvalGames/>
        </section>
      </main>
    )
  }