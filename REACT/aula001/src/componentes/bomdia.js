import React from 'react'

export default function Boa() {
    const valida = () => {
        const hora = new Date().getHours()
        if (hora >= 0 && hora < 12) {
            return <p>Bom dia!</p>
        } else if ( hora >= 12 && hora < 19) {
            return <p>Boa Tarde!</p>
        } else {
            return <p>Boa Noite!</p>
        }
    }
    return (
        <>
        {valida()}
        </>
    )
}