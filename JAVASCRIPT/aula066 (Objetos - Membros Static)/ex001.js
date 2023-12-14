class npc {
    static alerta = false // setando um atributo do tipo "static"
    constructor(energia) { // setando um construtor para todas as futuras estâncias
        this.energia = energia // atributo para as futuras estâncias
    }
    info = function() { // função para todas as estâncias mostragem os seus atributos
        console.log(`Energia: ${this.energia}`)
        console.log(`Alerta: ${(npc.alerta ? "Ligado" : "Desligado")}`)
        console.log(`---------------------------`)
    }
    static alertar = function() { // função estática que executa o atributo para TODOS os objetos estânciados
        npc.alerta = true
    }
}

const npc1 = new npc(100) // estânciando novos objetos
const npc2 = new npc(100) // ...
const npc3 = new npc(100) // ...

npc.alertar() // executando a função estática (observe que ela se refere a classe toda e não a apenas um objeto)
npc.alerta = false // alterando apenas o valor do atributo "static" definido na classe como um todo (todos os objetos estnânciados serão alterados)

npc1.info() // informações do primeiro objeto
npc2.info() // ...
npc3.info() // ...

// o comando static define atributos e funções para todos os objetos a serem criados posteriormente, ou seja, se você cria um atributo "static" ele vai funcionar para todos os futuro objetos. ele passa a ser um atributo da pr;opria classe e n;ao de cada uma das estâncias.