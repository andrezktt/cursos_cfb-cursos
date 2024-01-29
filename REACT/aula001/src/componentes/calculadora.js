import React, {useState} from 'react'

export default function Calculadora() {
    // STATES =>
    const [valorTela, setValorTela] = useState('')
    const [resultado, setResultado] = useState(0)
    const [acumulador, setAcumulador] = useState(0)
    const [operado, setOperado] = useState(false)

    // COMPONENTES =>
    const Tela = (valor, res) => {
        return (
            <div style={CSSTela}>
                <span style={CSSTelaOperacao}></span>
                <span style={CSSTelaRes}></span>
            </div>
        )
    }

    const Btn = (label, onClick) => {
        return (
            <button style={CSSBtn} onClick = {onClick}>{label}</button>
        )
    }

    // FUNÇÕES =>
    const addDigitoTela = (digito) => {
        if((digito == '+' || digito == '-' || digito == '*' || digito == '/') && operado) {
            console.log('+-*/')
            setOperado(false)
            setValorTela(resultado + digito)
            return
        }
        if(operado) {
            setValorTela(digito)
            setOperado(false)
            return
        }
        const valorDigitadoTela = valorTela + digito
        setValorTela(valorDigitadoTela)
    }

    const limparMemoria = () => {
        setOperado(false)
        setValorTela('')
        setResultado(0)
        setAcumulador(0)
    }

    const operacao = (oper) => {
        if(oper === 'bs') {
            let vTela = valorTela
            vTela = vTela.substring(0, (vTela.length - 1))
            setValorTela(vTela)
            setOperado(false)
            return
        }
        try { 
            const r = eval(valorTela) // CÁLCULO
            setAcumulador(r)
            setResultado(r)
            setOperado(true)
        } catch {
            setResultado('ERRO')
        }
    }

    // ESTILO CSS =>
    const CSSTela = {
        display: 'flex',
        paddingleft: 20,
        paddingRight: 20,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor:'#444',
        flexDirection: 'column',
        width: 260
    }

    const CSSTelaOperacao = {
        fontSize: 25,
        color: '#fff',
        height: 20
    }

    const CSSTelaRes = {
        fontSize:50,
        color: '#fff',
    }

    const CSSBtn = {
        fontSize: 30,
        height: 75,
        width: 75,
        paddin: 20,
        backgroundColor: '#333',   
        color: '#fff',
        borderColor: '#000',
        textAlign: 'center',
        outline: 'none'
    }

    const CSSConteiner = {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        width: 300,
        border: '1px solid #000'
    }

    const CSSBotoes = {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }

    // COMPONENTE PRINCIPAL
    return (
        <article>
            <div style={CSSConteiner}>
                <h3>Calculadora</h3>
                {Tela(valorTela, resultado)}
                <div style={CSSBotoes}>
                    {Btn('AC', limparMemoria)}
                    {Btn('(', () => addDigitoTela('('))}
                    {Btn(')', () => addDigitoTela(')'))}
                </div>
            </div>
        </article>
    )
}