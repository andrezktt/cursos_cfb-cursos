const caixa_1 = document.querySelector(`#caixa1`)
const obj1 = document.querySelector(`#obj1`)
const objetos = [...document.querySelectorAll(`.obj`)]

caixa_1.addEventListener(`click`, (event) => {
    console.log(`clicou`)
})

objetos.map((elements) => {
    elements.addEventListener("click", (event) => {
        event.stopPropagation()
    })
})

//console.log(objetos)
