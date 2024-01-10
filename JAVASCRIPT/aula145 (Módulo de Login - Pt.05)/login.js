class Login {
    static logado = false;
    static matricula = null;
    static nome = null;
    static acesso = null;
    static estilo_css = null;
    static endpoint = "https://cc6f37fa-0e0b-40f1-8e1d-b05814289169-00-2057uaggygtih.worf.replit.dev/";

    static login = (matricula, senha) => {
        this.endpoint += `?matricula=${matricula}&senha=${senha}`
        this.estilo_css = 
        "* {border: none;padding: 0px;margin: 0px;box-sizing: border-box;}" +
        
        ".login { display: flex; justify-content: center; align-items: center; width: 100%; height: 100vh; position: absolute; top: 0px; left: 0px; background-image: url(jigar-panchal-wr3EiLxDrd0-unsplash.jpg); background-size: cover; background-position: center center; background-repeat: no-repeat;}" +
        
        ".caixa_login { display: flex; flex-direction: column;justify-content: center; align-items: center; width: 400px;border-radius: 17px; background: rgba(128, 128, 128, 0.35);backdrop-filter: blur(15px );border: 1px solid rgba(255, 255, 255, 0.15);-webkit-backdrop-filter: blur( 15px );box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);font-family: 'Segoe UI', Tahoma, Geneva, Verdasans-serif;}" +
        
        ".titulo_login {background-color: #162330;box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.151);color: #eee;width: 100%;padding: 16px 24px;border-radius: 16px 16px 8px 8px;font-size: large;font-weight: 600;} " +
        
        ".input_login {display: flex;flex-direction: column;justify-content: flex-start;align-items: flex-start;width: 100%;padding: 16px 24px;}" +
        
        ".input_login label {font-weight: 600;font-size: small;color: #eee;}" +
        
        ".input_login input {color: #eee;background: rgba(0, 0, 0, 0.30);backdrop-filter: blur(10px );border: 1px solid rgba(255, 255, 255, 0.25);margin-top: 8px;margin-bottom: 8px;padding: 8px;border-radius: 6px;}" +
        
        ".campo_login {display: flex;flex-direction: column;width: 100%;}" +
        
        ".botoes_login {display: flex;justify-content: center;align-items: center;color: #024059;width: 100%;padding: 0px 20px 16px 20px;}" +
        
        ".botoes_login button {background-color: #162330;box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.15);color: #eee;width: 100%;padding: 10px;margin: 4px;border-radius: 8px;cursor: pointer;}" +
        
        ".botoes_login button:hover {background-color: #23374b;}"
        
        const estilo_login = document.createElement("style");
        estilo_login.setAttribute("id", "id_estilo_login")
        estilo_login.setAttribute("rel", "stylesheet");
        estilo_login.setAttribute("type", "text/css");
        estilo_login.innerHTML = this.estilo_css;
        document.head.appendChild(estilo_login)
        
        /* fetch(this.endpoint)
        .then(res => res.json())
        .then(res => {
            if(res) {
                this.logado = true;
                this.matricula = matricula
                this.nome = res.nome
                this.acesso = res.acesso
                console.log(res)
            } else {
                console.log("Usuário não encontrado!")
            }
        })  */
    }
}

export {Login};