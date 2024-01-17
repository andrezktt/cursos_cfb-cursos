import React from 'react'
import Logo from './img/FF7R.png'
import Relogio from './relogio'
import BomDia from './bomdia'

export default function Header() {
    return (
        <header className='header'>
            <img src = {Logo} alt = 'Log Final Fntasy VII Remake'/>
            <Relogio/>
            <BomDia/>
        </header>
    )
}