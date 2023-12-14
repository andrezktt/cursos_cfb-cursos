class CarroPadrao {
    constructor() {
        if (this.constructor === CarroPadrao) {
            throw new TypeError("Esta classe não pode ser estanciada!")
        }
        this.rodas = 4
        this.portas = 4
        this.estado = false
    }
}

class Carro extends CarroPadrao {
    constructor(tipo, turboLevel) {
        super()
        this.turbo = new Turbo(turboLevel)
        if (tipo == 1) {
            this.velMax = 120
            this.nome = "Utilitário"
        } else if (tipo == 2) {
            this.velMax = 160
            this.nome = "Urbano"
        } else if (tipo == 3) {
            this.velMax = 200
            this.nome = "Esportivo"
        }
        this.velMax += this.turbo.potencia
    }
    info() {
        console.log(this.nome)
        console.log(this.velMax)
        console.log(this.turbo.potencia)
        console.log(this.rodas)
        console.log(this.portas)
        console.log((this.estado ? "Ligado" : "Desligado"))
        console.log("---------------")
    }
}

class Turbo {
    constructor(level) {
        if (level == 0) {
            this.potencia = 0
        } else if (level == 1) {
            this.potencia = 50
        } else if (level == 2) {
            this.potencia = 75
        } else if (level == 3) {
            this.potencia = 100
        }
    }
}

class CarroEspecial extends Carro {
    constructor(turboLevel) {
        super(4, turboLevel)
        this.nome = "Especial"
        this.velMax = 300 + this.turbo.potencia
    }
    info() {
        console.log(`Nome: ${this.nome}`)
        console.log(`Velocidade: ${this.velMax}`)
        console.log(`Turbo: ${this.turbo.potencia}`)
        console.log("---------------")
    }
}

const c1 = new Carro(1, 0)
const c2 = new Carro(2, 3)
const c3 = new Carro(3, 2)
const c4 = new CarroEspecial(3)
/* const c5 = new CarroPadrao() */

c1.info()
c2.info()
c3.info()
c4.info()