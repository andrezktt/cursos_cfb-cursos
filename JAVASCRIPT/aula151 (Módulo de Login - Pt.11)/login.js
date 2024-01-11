class Login {
    static matricula = null;
    static senha = null;
    static logado = false;
    static matricula_logado = null;
    static nome_logado = null;
    static acesso_logado = null;
    static estilo_css = null;
    static estilo_fundo = null;
    static callback_okay = null;
    static callback_erro = null;
    static config = {
        cor: null,
        endpoint: "https://cc6f37fa-0e0b-40f1-8e1d-b05814289169-00-2057uaggygtih.worf.replit.dev/"
    }
    static endpoint = "https://cc6f37fa-0e0b-40f1-8e1d-b05814289169-00-2057uaggygtih.worf.replit.dev/";

    // CONFIGURAÇÕES DE ESTILO / CSS
    static login = (callback_okay, callback_erro, config) => {
        this.callback_okay = () => {
            callback_okay()
        }

        this.callback_erro = () => {
            callback_erro()
        }

        this.estilo_fundo_css = 
        "* {border: none;padding: 0px;margin: 0px;box-sizing: border-box;}" +
        
        ".fundo_login { display: flex; justify-content: center; align-items: center; width: 100%; height: 100vh; position: absolute; top: 0px; left: 0px; background-image: url(jigar-panchal-wr3EiLxDrd0-unsplash.jpg); background-size: cover; background-position: center center; background-repeat: no-repeat;}";

        this.estilo_modulo_css = 
        ".caixa_login { display: flex; flex-direction: column;justify-content: center; align-items: center; width: 400px;border-radius: 17px; background: rgba(128, 128, 128, 0.35);backdrop-filter: blur(15px );border: 1px solid rgba(255, 255, 255, 0.15);-webkit-backdrop-filter: blur( 15px );box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);font-family: 'Segoe UI', Tahoma, Geneva, Verdasans-serif;}" +
        
        `.titulo_login {background-color: ${this.config.cor};box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.151);color: #eee;width: 100%;padding: 16px 24px;border-radius: 16px 16px 8px 8px;font-size: large;font-weight: 600;} ` +
        
        ".input_login {display: flex;flex-direction: column;justify-content: flex-start;align-items: flex-start;width: 100%;padding: 16px 24px;}" +
        
        ".input_login label {font-weight: 600;font-size: small;color: #eee;}" +
        
        ".input_login input {color: #eee;background: rgba(0, 0, 0, 0.30);backdrop-filter: blur(10px );border: 1px solid rgba(255, 255, 255, 0.25);margin-top: 8px;margin-bottom: 8px;padding: 8px;border-radius: 6px;}" +
        
        ".campo_login {display: flex;flex-direction: column;width: 100%;}" +
        
        ".botoes_login {display: flex;justify-content: center;align-items: center; width: 100%;padding: 0px 20px 16px 20px;}" +
        
        `.botoes_login button {background-color: ${this.config.cor};box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.15);color: #eee;width: 100%;padding: 10px;margin: 4px;border-radius: 8px;cursor: pointer;}` +
        
        ".botoes_login button:hover {outline: 1px solid #eee; background-color: none;}"
        
        // IMPLEMENTAÇÃO CSS
        const estilo_login = document.createElement("style");
        estilo_login.setAttribute("id", "id_estilo_login")
        estilo_login.setAttribute("rel", "stylesheet");
        estilo_login.setAttribute("type", "text/css");
        estilo_login.innerHTML = this.estilo_fundo_css + this.estilo_modulo_css;
        document.head.appendChild(estilo_login)
        
        // IMPLEMENTAÇÃO HTML

        //fundo
        const fundo_login = document.createElement("div")
        fundo_login.setAttribute("id", "fundo_login")
        fundo_login.setAttribute("class", "fundo_login")
        document.body.prepend(fundo_login)

        //caixa_login
        const caixa_login = document.createElement("div")
        caixa_login.setAttribute("id", "caixa_login")
        caixa_login.setAttribute("class", "caixa_login")
        fundo_login.appendChild(caixa_login)

        //titulo
        const titulo_login = document.createElement("div")
        titulo_login.setAttribute("id", "titulo_login")
        titulo_login.setAttribute("class", "titulo_login")
        titulo_login.innerHTML = "Faça seu Login!"
        caixa_login.appendChild(titulo_login)

        //caixa_input_login
        const input_login = document.createElement("div")
        input_login.setAttribute("id", "input_login")
        input_login.setAttribute("class", "input_login")
        caixa_login.appendChild(input_login)

        //email
        const div_input_email = document.createElement("div")
        div_input_email.setAttribute("class", "campo_login")

        const label_email = document.createElement("label")
        label_email.setAttribute("for", "f_email")
        label_email.innerHTML = "E-mail:"
        div_input_email.appendChild(label_email)

        const input_email = document.createElement("input")
        input_email.setAttribute("type", "text")
        input_email.setAttribute("name", "f_email")
        input_email.setAttribute("id", "f_email")
        input_email.setAttribute("placeholder", "Insira seu Email")
        div_input_email.appendChild(input_email)

        input_login.appendChild(div_input_email)

        //senha
        const div_input_senha = document.createElement("div")
        div_input_senha.setAttribute("class", "campo_login")

        const label_senha = document.createElement("label")
        label_senha.setAttribute("for", "f_senha")
        label_senha.innerHTML = "Senha:"
        div_input_senha.appendChild(label_senha)

        const input_senha = document.createElement("input")
        input_senha.setAttribute("type", "password")
        input_senha.setAttribute("name", "f_senha")
        input_senha.setAttribute("id", "f_senha")
        input_senha.setAttribute("placeholder", "Insira sua Senha")
        div_input_senha.appendChild(input_senha)

        input_login.appendChild(div_input_senha)

        //caixa_botoes
        const botoes_login = document.createElement("div")
        botoes_login.setAttribute("id", "botoes_login")
        botoes_login.setAttribute("class", "botoes_login")
        caixa_login.appendChild(botoes_login)

        //botoes
        const btn_cancelar = document.createElement("button")
        btn_cancelar.setAttribute("id", "btn_cancelar")
        btn_cancelar.innerHTML = "Cancelar"
        btn_cancelar.addEventListener("click", (evento) => {
            this.fechar()
        })
        botoes_login.appendChild(btn_cancelar)

        const btn_login = document.createElement("button")
        btn_login.setAttribute("id", "btn_login")
        btn_login.innerHTML = "Login"
        btn_login.addEventListener("click", (evento) => {
            this.verificar_login()
        })
        botoes_login.appendChild(btn_login)
    }

    static verificar_login = () => {
        let matricula = document.querySelector("#f_email").value;
        let senha = document.querySelector("#f_senha").value;

        const endpoint = `${this.config.endpoint}?matricula=${matricula}&senha=${senha}`
        fetch(endpoint)
        .then(res => res.json())
        .then(res => {
            if(res) {
                sessionStorage.setItem("logado", "true");
                sessionStorage.setItem("matricula_logado", matricula);
                sessionStorage.setItem("nome_logado", res.nome);
                sessionStorage.setItem("acesso_logado", res.nome);
                this.callback_okay();
                this.fechar();
            } else {
                sessionStorage.setItem("logado", "false");
                sessionStorage.setItem("matricula_logado", "");
                sessionStorage.setItem("nome_logado", "");
                sessionStorage.setItem("acesso_logado", "");
                this.callback_erro();
            }
        }) 
    }

    static fechar = () => {
        const caixa_login =  document.querySelector("#caixa_login");
        caixa_login.remove();
        const id_estilo_login = document.getElementById("id_estilo_login");
        id_estilo_login.remove();

        //IMPLEMENTANDO APENAS O FUNDO:
        const estilo_login = document.createElement("style");
        estilo_login.setAttribute("id", "id_estilo_login")
        estilo_login.setAttribute("rel", "stylesheet");
        estilo_login.setAttribute("type", "text/css");
        estilo_login.innerHTML = this.estilo_fundo_css;
        document.head.appendChild(estilo_login)
    }
}