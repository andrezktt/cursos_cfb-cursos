const palco = document.querySelector("#palco")
const txtQuantidade = document.querySelector("#txt_quantidade")
const btnAdicionar = document.querySelector("#btn_adicionar")
const btnRemover = document.querySelector("#btn_remover")
const numeroObjetos = document.querySelector("#numero_objetos")

let larguraPalco = palco.offsetWidth
let alturaPalco = palco.offsetHeight
let bolinhas = []
let numeroBolinhas = 0

class Bola {
    constructor(arrayBolinhas, palco) {
        this.tamanho = Math.floor(Math.random()*15) + 10
        this.red = Math.floor(Math.random()*255)
        this.green = Math.floor(Math.random()*255)
        this.blue = Math.floor(Math.random()*255)
        this.posicaoX = Math.floor(Math.random()*(larguraPalco - this.tamanho))
        this.posicaoY = Math.floor(Math.random()*(alturaPalco - this.tamanho))
        this.velocidadeX = Math.floor(Math.random()*2) + 0.5
        this.velocidadeY = Math.floor(Math.random()*2) + 0.5
        this.direcaoX = (Math.random()*10) > 5 ? 1 : -1
        this.direcaoY = (Math.random()*10) > 5 ? 1 : -1   
        this.palco = palco // local
        this.arrayBolinhas = arrayBolinhas // elementos
        this.id = Date.now() + "_" + Math.floor(Math.random()*1000000000000) // id para cada elemento
        this.desenhar() // execução da função desenhar()
        this.controle = setInterval(this.controlar, 10) 
        this.eu = document.getElementById(this.id) 
        numeroBolinhas++
        numeroObjetos.innerHTML = numeroBolinhas
    }

    minhaPosicao =  () => {
        return this.arrayBolinhas.indexOf(this)
    }

    remover = () => {
        clearInterval(this.controle)
        bolinhas = bolinhas.filter((elemento) => {
            if (elemento.id != this.id) {
                return elemento
            }
        })
        this.eu.remove()
        numeroBolinhas--
        numeroObjetos.innerHTML = numeroBolinhas
    }

    desenhar = () => {
        const div = document.createElement("div")
        div.setAttribute("id", this.id)
        div.setAttribute("class", "bola")
        div.setAttribute("style", `left: ${this.posicaoX}px; top: ${this.posicaoY}px; width: ${this.tamanho}px; height: ${this.tamanho}px; background-color: rgb(${this.red}, ${this.green}, ${this.blue})`)
        this.palco.appendChild(div)
    }

    colisaoBordas = () => {
        if (this.posicaoX + this.tamanho >= larguraPalco) {
            this.direcaoX = -1
        } else if (this.posicaoX <= 0) {
            this.direcaoX = 1
        }
        if (this.posicaoY + this.tamanho >= alturaPalco) {
            this.direcaoY = -1
        } else if (this.posicaoY <= 0) {
            this.direcaoY = 1
        }
    }

    controlar = () => {
        this.colisaoBordas()
        this.posicaoX += this.direcaoX * this.velocidadeX
        this.posicaoY += this.direcaoY * this.velocidadeY
        this.eu.setAttribute("style", `left: ${this.posicaoX}px; top: ${this.posicaoY}px; width: ${this.tamanho}px; height: ${this.tamanho}px; background-color: rgb(${this.red}, ${this.green}, ${this.blue})`)
        if ((this.posicaoX > larguraPalco) || (this.posicaoY > alturaPalco)) {
            this.remover()
        }
    }
}

window.addEventListener("resize", (evento) => {
    let larguraPalco = palco.offsetWidth
    let alturaPalco = palco.offsetHeight
})

btnAdicionar.addEventListener("click", (evento) => {
    const quantidade = txtQuantidade.value
    for (let i = 0; i < quantidade;  i++) {
        bolinhas.push(new Bola(bolinhas, palco))
    }
})

btnRemover.addEventListener("click", (evento) => {
    bolinhas.map((elemento) => {
        elemento.remover()
    }) 
})