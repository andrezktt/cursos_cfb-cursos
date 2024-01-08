class Caixa_Mensagem {
    titulo = null
    texto = null
    cor = null
    body = null
    div_msg = null

    constructor(config) {
        this.titulo = config.titulo
        this.texto = config.texto
        this.cor = config.cor
        this.body = document.body
    }

    mostrar = () => {
        console.log(this.texto)
    }

    ocultar = () => {
        
    }
}