const btnSomar = document.querySelector("#btnSomar")
const btnSubtrair = document.querySelector("#btnSubtrair")
const btnMultiplicar = document.querySelector("#btnMultiplicar")
const btnDividir = document.querySelector("#btnDividir")
const res = document.querySelector("#res")

const operation = [
    () => {
        const valores = [document.querySelector('#valor_1').value, document.querySelector('#valor_2').value]
        res.value = Number(valores[0]) + Number(valores[1])
    },
    () => {
        const valores = [document.querySelector('#valor_1').value, document.querySelector('#valor_2').value]
        res.value = Number(valores[0]) - Number(valores[1])
    },
    () => {
        const valores = [document.querySelector('#valor_1').value, document.querySelector('#valor_2').value]
        res.value = Number(valores[0]) * Number(valores[1])
    },
    () => {
        const valores = [document.querySelector('#valor_1').value, document.querySelector('#valor_2').value]
        res.value = Number(valores[0]) / Number(valores[1])
    }
]

btnSomar.addEventListener("click", operation[0])
btnSubtrair.addEventListener("click", operation[1])
btnMultiplicar.addEventListener("click", operation[2])
btnDividir.addEventListener("click", operation[3])