const tipoMilitar = document.querySelector("#f_tipoMilitar")
const tipoNormal = document.querySelector("#f_tipoNormal")
const blindagem = document.querySelector("#f_blindagem")
const municao = document.querySelector("#f_municao")
const carros = document.querySelector(".carros")
const addCarro = document.querySelector("#btn_add")
const modelo = document.querySelector("#f_nome")
const portas = document.querySelector("#f_portas")

let arrayCarros = []

const removerCarro = (quem) => {
    arrayCarros = arrayCarros.filter((element) => {
        return element.nome != quem
    })
}

tipoMilitar.addEventListener("click", (evento) => {
    modelo.value = ""
    portas.value = ""
    blindagem.value = ""
    municao.value = ""
    blindagem.removeAttribute("disabled")
    municao.removeAttribute("disabled")
})

tipoNormal.addEventListener("click", (evento) => {
    blindagem.value = ""
    municao.value = ""
    blindagem.setAttribute("disabled", "disabled")
    municao.setAttribute("disabled", "disabled")
})

const exibicaoCarros = () => {
    carros.innerHTML = ""
    arrayCarros.map((c) => {
        const div = document.createElement("div")
        const btn = document.createElement("button")
        btn.addEventListener("click", (evento) => {
            quemRemover = evento.target.parentNode.dataset.nome
            removerCarro(quemRemover)
            exibicaoCarros()
        })
        div.setAttribute("class", "carro")
        div.setAttribute("data-nome", c.nome)
        div.innerHTML = `<strong>Modelo:</strong> ${c.nome} <br/>`
        div.innerHTML += `<strong>Portas:</strong> ${c.portas} <br/>`
        div.innerHTML += `<strong>Cor:</strong> ${c.cor} <br/>`
        div.innerHTML += `<strong>Blindagem:</strong> ${c.blindagem} <br/>`
        div.innerHTML += `<strong>Munição:</strong> ${c.municao} <br/>`
        btn.innerHTML = "Remover"
        div.appendChild(btn)
        carros.appendChild(div)
    })
}

addCarro.addEventListener("click", (event) => {
    if(tipoNormal.checked) {
        const c = new Carro(modelo.value, portas.value)
        arrayCarros.push(c)
    } else {
        const c = new Militar(modelo.value, portas.value, blindagem.value, municao.value)
        arrayCarros.push(c)
    }
    exibicaoCarros()
})

class Carro { 
    constructor(nome, portas) {
        this.nome = nome
        this.portas = portas
        this.vel = 0
        this.ligado = false
        this.cor = undefined
    }

    ligar = function() {
        this.ligado = true
    }

    desligar = function() {
        this.ligado = false
    }

    setCor = function(cor) {
        this.cor = cor
    }
}


class Militar extends Carro {
    constructor(nome, portas, blindagem, municao) {
        super(nome, portas)
        this.blindagem = blindagem
        this.municao = municao
    }
    atirar = function() {
        if(this.municao > 0) {
            this.municao--
        }
    }
}

class Utilitario extends Carro {
    constructor(nome, portas, lugares) {
        super(nome, portas)
        this.lugares = lugares
    }
}