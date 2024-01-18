import React, {useState} from 'react'

export default function Avaliar() {
    const [game, setGame] = useState('')
    const [nota, setNota] = useState('')

    return (
        <article>
            <label>Selecione seu Jogo Favorito:</label>
                <select value={'game'} onChange={(elemento) => setGame(elemento.target.value)}>
                    <option value={'FFI'}>Final Fantasy I</option>
                    <option value={'FFII'}>Final Fantasy II</option>
                    <option value={'FFIII'}>Final Fantasy III</option>
                    <option value={'FFIV'}>Final Fantasy IV</option>
                    <option value={'FFV'}>Final Fantasy V</option>
                    <option value={'FFVI'}>Final Fantasy VI</option>
                    <option value={'FFVII'}>Final Fantasy VII</option>
                    <option value={'FFVIII'}>Final Fantasy VIII</option>
                    <option value={'FFIX'}>Final Fantasy IX</option>
                    <option value={'FFX'}>Final Fantasy X</option>
                    <option value={'FFXI'}>Final Fantasy XI</option>
                    <option value={'FFXII'}>Final Fantasy XII</option>
                    <option value={'FFXIII'}>Final Fantasy XIII</option>
                    <option value={'FFXIV'}>Final Fantasy XIV</option>
                    <option value={'FFXV'}>Final Fantasy XV</option>
                    <option value={'FFXVI'}>Final Fantasy XVI</option>
                </select>
            <p className='gameSelect'>Game Selecionado: {game}</p>
            <label>Recomende este game a uma pessoa:</label>
            <input type='text' name='f_rec' value={nota} onChange={(elemento) => setNota(elemento.target.value)}></input>
            <p className='gameNote'>Sua recomendação: <br/>{nota}</p>
        </article>
    )
}