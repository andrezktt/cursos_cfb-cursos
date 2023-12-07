const array = document.querySelector("#array")
const btn_verificar = document.querySelector("#btn_verificar")
const resultado = document.querySelector('#resultado')

const arrayElements = [21, 25, 19, 20, 26, 18, 22]
array.innerHTML = arrayElements

btn_verificar.addEventListener("click", (event) => {
    const ret = arrayElements.every((element, key) => {
        if (element < 18) {
            resultado.innerHTML = `Verifique o elemento da posição nº${key + 1} e tente novamente!`
        }
        return element >= 18
    })
    if (ret) {
        resultado.innerHTML = `Tudo nos Conformes!`
    }
})