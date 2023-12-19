const teclasNumeros = [...document.querySelectorAll(".num")]
const teclasOperacoes = [...document.querySelectorAll(".oper")]
const teclaResultado = document.querySelector(".res")
const teclaLimpar = document.querySelector("#tecla_limpar")
const display = document.querySelector(".display")

console.log(teclasNumeros)
console.log(teclasOperacoes)
console.log(teclaResultado)

let sinal = false
let decimal = false

teclasNumeros.map((elemento) => {
    elemento.addEventListener("click", (evento) => {
        sinal = false
        if (evento.target.innerHTML == ",") {
            if (!decimal) {
                decimal = true
                if (display.innerHTML == "0") {
                    display.innerHTML = "0,"
                } else {
                    display.innerHTML += evento.target.innerHTML
                }
            }
        } else {
            if (display.innerHTML == "0") {
                display.innerHTML = ""
            }
            display.innerHTML += evento.target.innerHTML
        }
    })
})

teclasOperacoes.map((elemento) => {
    elemento.addEventListener("click", (evento) => {
        if(!sinal) {
            sinal = true
            if (display.innerHTML == "0") {
                display.innerHTML = ""
            }
            if (evento.target.innerHTML == "x") {
                display.innerHTML += "*"
            } else {
                display.innerHTML += evento.target.innerHTML
            }
        }
    })
})

teclaLimpar.addEventListener("click", (evento) => {
    sinal = false
    decimal = false
    display.innerHTML = "0"
})

teclaResultado.addEventListener("click", (evento) => {
    sinal = false
    decimal = false
    const res = eval(display.innerHTML)
    display.innerHTML = res
})