class Login {
    static logado = false;
    static matricula = null;
    static nome = null;
    static acesso = null;
    static endpoint = "https://cc6f37fa-0e0b-40f1-8e1d-b05814289169-00-2057uaggygtih.worf.replit.dev/";

    static login = (matricula, senha) => {
        this.endpoint += `?matricula=${matricula}&senha=${senha}`
        fetch(this.endpoint)
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
        })
    }
}

export {Login};