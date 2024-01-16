import React from 'react'
import Logo from './img/FF7R.png'

export default function Header() {
    return (
        <header className='header'>
            <img src = {Logo} alt = 'Log Final Fntasy VII Remake'/>
            <h2>Saiba mais sobre o mundo <br/> de Final Fantasy VII Remake!</h2>
        </header>
    )
}