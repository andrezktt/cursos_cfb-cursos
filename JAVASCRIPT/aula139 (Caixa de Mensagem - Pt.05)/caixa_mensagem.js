class Caixa_Mensagem {
    static cor = "#3b5998"
    static body = null
    static div_tela_mensagem = null
    static tipo = null
    static textos = null
    static comando_sn = null

    static mostrar = (config, titulo, texto) => {
        this.body = document.body
        this.titulo = titulo
        this.texto = texto
        this.cor = config.cor
        this.tipo = config.tipo
        this.textos = config.textos
        this.comando_sn = () => {config.comando_sn()}

        const estilo_tela_mensagem = 
        "display: flex;" +
        "justify-content: center;" +
        "align-items: center;" +
        "position: absolute;" +
        "top: 0px;" +
        "left: 0px;" +
        "width: 100%;" +
        "height: 100vh;" +
        "background-color: rgba(0, 0, 0, 0.6);" + 
        "z-index: 999999999999"
        this.div_tela_mensagem = document.createElement("div")
        this.div_tela_mensagem.setAttribute("id", "div_tela_mensagem")
        this.div_tela_mensagem.setAttribute("style", estilo_tela_mensagem)
        this.body.prepend(this.div_tela_mensagem)

        const estilo_caixa_mensagem =
            "font-family: Segoe UI;" +
            "display: flex;" +
            "box-sizing: border-box;" +
            "justify-content: flex-start;" +
            "align-items: flex-start;" +
            "flex-direction: column;" +
            "box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);" +
            "width: 400px;"
        const div_caixa_mensagem = document.createElement("div")
        div_caixa_mensagem.setAttribute("style", estilo_caixa_mensagem)
        this.div_tela_mensagem.appendChild(div_caixa_mensagem)

        const estilo_titulo_mensagem = 
            "display: flex;" +
            "justify-content: flex-start;" +
            "font-weight: 600;" +
            "align-items: center;" +
            "width: 100%;" +
            "background-color:" + this.cor + ";" +
            "color: #fff;" +
            "padding: 10px 20px 10px 20px;" +
            "border-radius: 16px 16px 0px 0px;"
        const titulo_caixa_mensagem = document.createElement("div")
        titulo_caixa_mensagem.setAttribute("style", estilo_titulo_mensagem)
        titulo_caixa_mensagem.innerHTML = this.titulo
        div_caixa_mensagem.appendChild(titulo_caixa_mensagem)

        const estilo_corpo_mensagem = 
            "display: flex;" +
            "justify-content: flex-start;" +
            "font-size: 0.8em;" +
            "align-items: center;" +
            "width: 100%;" +
            "background-color: #eee;" +
            "text-align: justify;" +
            "color: #000;" +
            "padding: 20px;"
        const corpo_caixa_mensagem = document.createElement("div")
        corpo_caixa_mensagem.setAttribute("style", estilo_corpo_mensagem)
        corpo_caixa_mensagem.innerHTML = this.texto
        div_caixa_mensagem.appendChild(corpo_caixa_mensagem)

        const estilo_rodape_mensagem =
            "display: flex;" +
            "justify-content: space-around;" +
            "align-items: center;" +
            "width: 100%;" +
            "background-color: #eee;" +
            "color: #000;" +
            "padding: 10px 20px 10px 20px;" +
            "border-radius: 0px 0px 16px 16px;"
        const rodape_caixa_mensagem = document.createElement("div")
        rodape_caixa_mensagem.setAttribute("style", estilo_rodape_mensagem)
        div_caixa_mensagem.appendChild(rodape_caixa_mensagem)

        const estilo_botao_rodape = 
            "background-color:" + this.cor + ";" +
            "color: #eee;" +
            "width: 100%;" +
            "margin: 4px;" +
            "padding: 8px 32px;" +
            "border: none;" +
            "border-radius: 8px;" +
            "cursor: pointer;"
        if (this.tipo == "ok") {
            const btn_okay = document.createElement("button")
            btn_okay.setAttribute("style", estilo_botao_rodape + "width: 50%;")
            btn_okay.innerHTML = "Confirmar"
            btn_okay.addEventListener("click", (evento) => {
                this.ocultar()
            })
            rodape_caixa_mensagem.appendChild(btn_okay)
        } else if (this.tipo == "sn") {
            const btn_nao = document.createElement("button")
            btn_nao.setAttribute("style", estilo_botao_rodape)
            btn_nao.innerHTML = this.textos[1]
            btn_nao.addEventListener("click", (evento) => {
                this.ocultar()
            })
            rodape_caixa_mensagem.appendChild(btn_nao)

            const btn_sim = document.createElement("button")
            btn_sim.setAttribute("style", estilo_botao_rodape)
            btn_sim.innerHTML = this.textos[0]
            btn_sim.addEventListener("click", (evento) => {
                this.comando_sn()
                this.ocultar()
            })
            rodape_caixa_mensagem.appendChild(btn_sim)
        }
    }

    static ocultar = () => {
        this.div_tela_mensagem.remove()
    }
}
export {Caixa_Mensagem}