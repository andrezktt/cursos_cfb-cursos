import React from 'react'

export default class ClasseBase extends React.Component {
    constructor(props) {
        //AUTORIZAÇÃO PARA O USO DE PROPS
        super(props)

        //USO DE STATE DENTRO DE CLASSES
        this.state = {
            nome: this.props.nomeAluno,
            idade: 23,
            ativo: true
        }
        this.status = this.props.status

        //FUNÇÃO BIND (BINDAGEM)
        let ad = ativarDesativar.bind(this)

        // INSTRUÇÕES DO CONSTRUTOR ...
    }

    //FUNÇÃO DE MANIPULAÇÃO DE STATE
    ativarDesativar() {
        this.setState(
            state => ({
                ativo = !state.ativo
            })
        )
    }

    render() {
        return (
            <article>
                {/* ATIVAÇAO COM A FUNÇÃO BIND */}
                <button onClick={this.ad}>Ativar Desativar</button>
                {/* ATIVAÇAO COM A FUNÇÃO TRADICIONAL */}
                <button onClick={() => this.ativarDesativar}>Ativar Desativar</button>
            </article>
        )
    }

    componentDidMount() {
        console.log('O componente foi criado')
    }

    componentDidUpdate() {
        console.log('O componente foi atualizado')
    }

    componentWillUnmount() {
        console.log('O componente foi removido')
    }
}