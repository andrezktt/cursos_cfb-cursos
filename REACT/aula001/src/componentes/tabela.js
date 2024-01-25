import React, {useState} from 'react'

const jogos = [
    {jogo: 'Overwatch', categoria: 'FPS'},
    {jogo: 'Battefield 2042', categoria: 'FPS'},
    {jogo: 'Resident Evil 4', categoria: 'Survival Horror'},
    {jogo: 'Alan Wake 2', categoria: 'Survival Horror'},
    {jogo: 'Tears of The Kingdom', categoria: 'Aventura'},
    {jogo: 'Marvel Spider-Man 2', categoria: 'Aventura'},
    {jogo: 'Baldurs Gate 3', categoria: 'RPG'},
    {jogo: 'Final Fantasy XVI', categoria: 'RPG'},
    {jogo: 'Super Mario Wonder', categoria: 'Plataforma'},
    {jogo: 'Metroid Prime Remastered', categoria: 'Plataforma'},
]

const linhas = (cat) => {
    const li = []
    jogos.map((jogo) => {
        if (jogo.categoria.toUpperCase() == cat.toUpperCase() || cat == '') {
            li.push(
                <tr>
                    <td>{jogo.jogo}</td>
                    <td>{jogo.categoria}</td>
                </tr>
            )
        }
    })
    return li
}

const tabelaJogos = (categoria) => {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Jogo</th>
                        <th>Categoria</th>
                    </tr>
                </thead>
                <tbody>
                    {linhas(categoria)}
                </tbody>
            </table>
        )
}

const pesquisaCat = (categoria, setCategoria) => {
    return (
        <div>
            <input type='text' value={categoria} onChange={(elemento) => setCategoria(elemento.target.value)} placeholder='Digite uma Categoria'/>
        </div>
    )
}

export default function Tabela() {
    const [categoria, setCategoria] = useState('')
    return (
        <article>
            {pesquisaCat(categoria, setCategoria)}
            {/* <br/> */}
            {tabelaJogos(categoria)}
        </article>
    )
}