const array = document.querySelector("#array")
const txt_pesquisar = document.querySelector("#txt_pesquisar")
const btn_pesquisar = document.querySelector("#btn_pesquisar")
const resultado = document.querySelector("#resultado")

const arrayElements = [273, 8, 24, 109, 13, 6, 58]
array.innerHTML = arrayElements

btn_pesquisar.addEventListener("click", (event) => {
    
    arrayElements.find((element, key) => {
        if (element == txt_pesquisar.value) {
            resultado.innerHTML = `Valor "${element}" encontrado na posição ${key}!`
            return element
        } else {
            resultado.innerHTML = `Valor não encontrado!`
        }
    })
})