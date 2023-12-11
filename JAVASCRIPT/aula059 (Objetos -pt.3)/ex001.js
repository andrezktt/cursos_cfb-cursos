class Pessoa {  // criando uma classe para os elementos que serão construídos.
    constructor(pnome, pidade) { // parâmetros dos elementos que seràos construídos
        this.nome = pnome // link entre o parâmetro e uma variável
        this.idade = pidade // link entre o parâmetro e uma variável
    }
    getNome() { // comando para extrair o primeiro parâmetro
        return this.nome // retorna q primeira variável
    }

    getIdade() { // comando para extrair o segundo parâmetro
        return this.idade // retorna a segunda variável
    }

    setNome(nome) { // cria ou altera o valor do primeiro parâmetro
        this.nome = nome // altera o valor tanto para o parâmetro quanto para a variável
    }

    setIdade(idade) { // cria ou altera o valor do segundo parâmetro
        this.idade = idade // iguala o valor do parâmetro a variável que foi criada
    }

    info() { // informações passadas no console
        console.log(`Nome: ${this.nome}`)
        console.log(`Idade: ${this.idade}`)
        console.log("----------")
    }
}

let pessoas = [] // criação de um array para os resultados / informações obtidas

const btn_add = document.querySelector("#btn_adicionar") // puxando o botão em HTML
const res = document.querySelector(".res") // puxando a caixa de respostas do HTML

const addPessoa = () => { // criando a função para adicionar pessoas ao array e depois à caixa resposta
    pessoas.map((p) => { // mapeando os elementos do array
        const novaPessoa = document.createElement("div") // criando um espaço / uma div para cada um dos elementos (pessoas)
        novaPessoa.setAttribute("class", "pessoa") // criando uma classe para editar em CSS 
        novaPessoa.innerHTML = `Nome: ${p.getNome()} <br/> Idade: ${p.getIdade()}` // configurando como as novas pessoas (as informações devem ser dispostas)
        res.appendChild(novaPessoa) // adicionando os elementos à caixa de respostas
    })
}

btn_add.addEventListener("click", (evento) => { // adicionando um evento ao clicar no botão adicionar
    res.innerHTML = "" // iniciando com a caixa vazia
    
    const nome = document.querySelector("#f_nome") // obtendo os resultados do input "nome"
    const idade = document.querySelector("#f_idade") // obtendo os resultados do input "idade"

    const p = new Pessoa(nome.value, idade.value) // adicionando os valores obtidos à classe "Pessoa"
    pessoas.push(p) // inserindo os valores no array "pessoas"
    nome.value = "" // limpando o campo de "nome"
    idade.value = "" // limpando o campo de "idade"
    nome.focus() 
 
    addPessoa() // executando a função anterior, que configura e adiciona novas pessoas à caixa de respostas
})