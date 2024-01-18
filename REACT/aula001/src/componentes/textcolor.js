import React, {useState} from 'react'

export default function TextColor() {
    const [cor, setCor] = useState(1)
    const cor_1 = {color: '#6AA695'}
    const cor_2 = {color: '#F2786D'}
    const cor_3 = {color: '#4D736F'}

    const retCor = (c) => {
        if (c == 1) {
            return cor_1
        } else if (c == 2) {
            return cor_2
        } else {
            return cor_3
        }
    }

    const mudarCor = () => {
        setCor(cor + 1)
        if (cor > 2) {
            setCor(1)
        }
    }

    return (
        <article>
            <h1 style={retCor(cor)}>Conheça a Saga Final Fantasy!</h1>
            <button onClick={() => mudarCor()}>Mudar Cor</button>
        </article>
    )
}