import React from 'react'

export default function Log(props) {
    const msgLogin = () => {
        return 'Login Realizado!'
    }
    const msgLogoff= () => {
        return 'Faca o seu Login!'
    }
    return (
        <article>
            <p style={{textAlign: 'center'}}>
                {props.log ? msgLogin() : msgLogoff()}
            </p>
            <button onClick={() => props.setLog(!props.log)}>
                {props.log ? 'Sair da conta' : "Login"}
            </button>
        </article>
    )
}