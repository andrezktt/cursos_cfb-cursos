import React, {useState} from 'react'

const tabelaIMC = () => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Classificação</th>
                    <th>IMC</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Abaixo do Peso</td>
                    <td>Abaixo de 18,5</td>
                </tr>
                <tr>
                    <td>Peso Normal</td>
                    <td>Entre 18,5 e 24,9</td>
                </tr>
                <tr>
                    <td>Sobrepeso</td>
                    <td>Entre 25 e 29,9</td>
                </tr>
                <tr>
                    <td>Obesidade Grau I</td>
                    <td>Entre 30 e 34,9</td>
                </tr>
                <tr>
                    <td>Obesidade Grau II</td>
                    <td>Entre 35 e 39,9</td>
                </tr>
                <tr>
                    <td>Obesidade Grau III</td>
                    <td>Maior que 40</td>
                </tr>
            </tbody>
        </table>
    )
}

const form_peso = (peso, setPeso) => {
    return(
        <div>
            <label>Insira o seu Peso:</label>
            <input type='text' value={peso} onChange={(elemento) => {setPeso(elemento.target.value)}} />
        </div>
    )
}

const form_altura = (altura, setAltura) => {
    return(
        <div>
            <label>Insira a sua Altura:</label>
            <input type='text' value={altura} onChange={(elemento) => {setAltura(elemento.target.value)}} />
        </div>
    )
}

const calcular = (peso, altura, setResultado) => {
    const calculo = () => {
        setResultado(peso / (altura * altura))
    }
    return(
        <div>
            <button onClick={calculo}>Calcular</button>
        </div>
    )
}

const fresultado = (resultado) => {
    return(
        <div>
            <p>Resultado: {resultado.toFixed(1)}</p>
        </div>
    )
}

export default function IMC() {
    const [peso, setPeso] = useState(0)
    const [altura, setAltura] = useState(0)
    const [resultado, setResultado] = useState(0)

    return (
        <article>
            <h3>Calculadora de IMC</h3>
            {form_peso(peso, setPeso)}
            {form_altura(altura, setAltura)}
            {calcular(peso, altura, setResultado)}
            {fresultado(resultado)}
            {tabelaIMC()}
        </article>
    )
}