import { Caixa_Mensagem } from "../aula139 (Caixa de Mensagem - Pt.05)/caixa_mensagem.js";

const callback_okay =  () => {

}

const callback_erro =  () => {
    const config =  {
        cor: "#162330",
        tipo: "ok",
        textoss: null,
        comando_sn: null
    }
    Caixa_Mensagem.mostrar(config, "Não foi possível efetuar o login!", "Verifique seus dados e tente novamente!")
}

const config_login = {
    cor: "#162330",
    endpoint: "https://cc6f37fa-0e0b-40f1-8e1d-b05814289169-00-2057uaggygtih.worf.replit.dev/"
}

Login.login(null, callback_erro, config_login); 