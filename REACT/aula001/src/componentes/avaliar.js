import React, {useState} from 'react'
import Nota from './notas'
import Resultado from './resultado'

export default function Avaliar() {
    const [notas, setNotas] = useState({'nota_1':'0', 'nota_2':'0', 'nota_3':'0', 'nota_4':'0'})
    const handleSetNotas = (elemento) => {
        if (elemento.target.getAttribute('name') == 'nota_1') {
            setNotas({'nota_1':elemento.target.value, 'nota_2':notas.nota_2, 'nota_3':notas.nota_3, 'nota_4':notas.nota_4})
        } else if (elemento.target.getAttribute('name') == 'nota_2') {
            setNotas({'nota_1':notas.nota_1, 'nota_2':elemento.target.value, 'nota_3':notas.nota_3, 'nota_4':notas.nota_4})
        } else if (elemento.target.getAttribute('name') == 'nota_3') {
            setNotas({'nota_1':notas.nota_1, 'nota_2':notas.nota_2, 'nota_3':elemento.target.value, 'nota_4':notas.nota_4})
        } else {
            setNotas({'nota_1':notas.nota_1, 'nota_2':notas.nota_2, 'nota_3':notas.nota_3, 'nota_4':elemento.target.value})
        }
    }
    return (
        <article>
            <Nota num ={1} nome = {'nota_1'} nota = {notas.nota_1} setNota = {handleSetNotas}/>
            <Nota num ={2} nome = {'nota_2'} nota = {notas.nota_2} setNota = {handleSetNotas}/>
            <Nota num ={3} nome = {'nota_3'} nota = {notas.nota_3} setNota = {handleSetNotas}/>
            <Nota num ={4} nome = {'nota_4'} nota = {notas.nota_4} setNota = {handleSetNotas}/>
            <Resultado somaNotas = {parseFloat(notas.nota_1) + parseFloat(notas.nota_2) + parseFloat(notas.nota_3) + parseFloat(notas.nota_4)}/>
        </article>
    )
}