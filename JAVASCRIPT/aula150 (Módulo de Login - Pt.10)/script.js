import { Login } from "./login.js";
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

Login.login(callback_okay, callback_erro); 