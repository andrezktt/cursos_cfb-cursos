import React from 'react'

export default function TodosGames() {
    const games = [
        {nome: "Final Fantasy I", plataforma: 'NES', ano: '1987'},
        {nome: "Final Fantasy II", plataforma: 'PS', ano: '1988'},
        {nome: "Final Fantasy III", plataforma: 'Nintendo DS', ano: '1990'},
        {nome: "Final Fantasy IV", plataforma: 'SNES', ano: '1991'},
        {nome: "Final Fantasy V", plataforma: 'PS', ano: '1992'},
        {nome: "Final Fantasy VI", plataforma: 'SNES', ano: '1994'},
        {nome: "Final Fantasy VII", plataforma: 'PS', ano: '1997'},
        {nome: "Final Fantasy VIII", plataforma: 'PS1', ano: '1999'},
        {nome: "Final Fantasy IX", plataforma: 'PS1', ano: '2000'},
        {nome: "Final Fantasy X", plataforma: 'PS2', ano: '2001'},
        {nome: "Final Fantasy XI", plataforma: 'PS2', ano: '2002'},
        {nome: "Final Fantasy XII", plataforma: 'PS2', ano: '2006'},
        {nome: "Final Fantasy XIII", plataforma: 'PS3 e Xbox 360', ano: '2009'},
        {nome: "Final Fantasy XIV", plataforma: 'PC e PS3', ano: '2013'},
        {nome: "Final Fantasy XV", plataforma: 'PS4 e Xbox One', ano: '2016'},
        {nome: "Final Fantasy XVI", plataforma: 'PS5 ', ano: '2023'}
    ]

    const listaGames = games.map((elemento, indice) => 
        <li key = {indice}>{elemento.ano} - {elemento.nome} - {elemento.plataforma}</li>
    )
    return (
        <article>
            <ul>
                {listaGames}
            </ul>
        </article>
    )
}