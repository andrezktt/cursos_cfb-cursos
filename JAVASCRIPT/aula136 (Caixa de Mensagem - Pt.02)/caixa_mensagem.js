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
        const estilo_tela_mensagem = 
        "display: flex;" +
        "justify-content: center;" +
        "align-items: center;" +
        "position: absolute;" +
        "top: 0px;" +
        "left: 0px;" +
        "width: 100vw;" +
        "height: 100vh;" +
        "background-color: rgba(0, 0, 0, 0.6);"
        this.div_tela_mensagem = document.createElement("div")
        this.div_tela_mensagem.setAttribute("id", "div_tela_mensagem")
        this.div_tela_mensagem.setAttribute("style", estilo_tela_mensagem)
        this.body.prepend(this.div_tela_mensagem)

        const estilo_caixa_mensagem = 
        "background-color: #8b9dc3;" +
        "display: flex;" +
        "justify-content: flex-start;" +
        "align-items: flex-start;" +
        "flex-direction: column;" +
        "width: 300px;"
        const div_caixa_mensagem = document.createElement("div")
        div_caixa_mensagem.setAttribute("style", estilo_caixa_mensagem)
        this.div_tela_mensagem.appendChild(div_caixa_mensagem)

        const estilo_titulo_mensagem = 
        "display: flex;" +
        "justify-content: flex-start;" +
        "align-items: center;" +
        "width: 100%;" +
        "background-color:" + this.cor + ";" +
        "color: #fff;" +
        "padding: 5px;" +
        "border-radius: 5px 5px 0px 0px;"
        const titulo_caixa_mensagem = document.createElement("div")
        titulo_caixa_mensagem.setAttribute("style", estilo_titulo_mensagem)
        titulo_caixa_mensagem.innerHTML = this.titulo
        div_caixa_mensagem.appendChild(titulo_caixa_mensagem)
    }

    ocultar = () => {
        
    }
}