const teclasNumeros = [...document.querySelectorAll(".num")]
const teclasOperacoes = [...document.querySelectorAll(".oper")]
const teclaResultado = document.querySelector(".res")
const display = document.querySelector(".display")

console.log(teclasNumeros)
console.log(teclasOperacoes)
console.log(teclaResultado)

teclasNumeros.map((elemento) => {
    elemento.addEventListener("click", (evento) => {
        display.innerHTML += evento.target.innerHTML
    })
})