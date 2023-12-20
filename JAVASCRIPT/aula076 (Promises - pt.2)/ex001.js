const numero = document.querySelector("#numero")
const botaoPromessa = document.querySelector("#btn_promessa")

botaoPromessa.addEventListener("click", (evento) => {
    numero.innerHTML = "Processando..."
    promessa()
    /* .then((retorno) => {
        numero.innerHTML = retorno
        numero.classList.remove("erro")
        numero.classList.add("ok")
    })
    
    .catch((retorno) => {
        numero.innerHTML = retorno
        numero.classList.add("erro")
        numero.classList.remove("ok")
    }) */
})

const promessa = () => {
    let p = new Promise((resolve, reject) => {
        let resultado = false
        let tempo = 3000
        setTimeout(() => {
            if(resultado) {
                resolve("Deu tudo certo")
                numero.innerHTML = "Deu tudo certo"
                numero.classList.remove("erro")
                numero.classList.add("ok")
            } else {
                reject("Deu tudo errado")
                numero.innerHTML = "Deu tudo errado"
                numero.classList.add("erro")
                numero.classList.remove("ok")
            }
        }, tempo)
    })
    return p
}

numero.innerHTML = "Esperando..."

// let resultado = false
// let tempo = 3000

// setTimeout(() => {
//     resultado = true
// }, tempo)

// if (resultado) {
//     numero.innerHTML = "Deu tudo certo"
//     numero.classList.remove("erro")
//     numero.classList.add("ok")
// } else {
//     numero.innerHTML = "Deu tudo errado"
//     numero.classList.add("erro")
//     numero.classList.remove("ok")
// }
