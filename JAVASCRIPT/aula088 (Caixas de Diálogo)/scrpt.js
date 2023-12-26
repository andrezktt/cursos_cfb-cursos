const btn_alerta = document.getElementById("btn_alerta")
const btn_confirmar = document.getElementById("btn_confirmar")
const btn_prompt = document.getElementById("btn_prompt")

btn_alerta.addEventListener("click", (evento) => {
     alert("Olá, como você está?")
})

btn_confirmar.addEventListener("click", (evento) => {
    const retorno = confirm("Você aceita receber emails com novos produtos personalizados?")
    if (retorno) {
        console.log("Botão OK pressionado!")
    } else {
        console.log("Botão CANCELAR pressionado!")
    }
})

btn_prompt .addEventListener("click", (evento) => {
    const nome = prompt("Digite seu nome:", "Digite seu nome aqui!")
    if (nome == null) {
        console.log("Botão CANCELAR pressionado!")
    } else {
        console.log("Nome digitado: " + nome)
    }
})