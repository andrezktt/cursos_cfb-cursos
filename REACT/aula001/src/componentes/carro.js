import React from 'react'

class Carro extends React.Component {
    constructor(props) {
    super(props)
    this.modelo = 'HRV'
    this.state = {
        ligado: false,
        velAtual: 0
        }
    }

    ligarDesligar() {
        //this.state.ligado = true --> NÃO FUNCIONA!
        //this.setState({ligado:!this.state.ligado})
        this.setState(
            (state) => (
                {ligado: !state.ligado}
            )
        )
    }

    acelerar() {
        this.setState(
            (state, props) => (
                {velAtual: state.velAtual + this.props.fator}
            )
        )
    }

    render() {
        return(
            <article>
                <h3>Meu Carro</h3>
                <p>Modelo: {this.modelo}</p>
                <p>Situação: {this.state.ligado ? 'Ligado' : 'Desligado'}</p>
                <p>Velocidade Atual: {this.state.velAtual}</p>
                <button onClick={() => this.ligarDesligar()}>{this.state.ligado ? 'Desligar' : 'Ligar'}</button>
                <button onClick={() => this.acelerar()}>Acelerar</button>
            </article>
        )
    }
} export default Carro