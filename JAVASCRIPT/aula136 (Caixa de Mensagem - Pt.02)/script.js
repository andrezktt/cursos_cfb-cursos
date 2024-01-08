const btn_mostrar_mensagem = document.querySelector("#btn_mostrar_mensagem")

const config = {
    titulo: "Teste",
    texto: "Final Fantasy XV",
    cor: "#3b5998"
}

const caixa_mensagem = new Caixa_Mensagem(config)

btn_mostrar_mensagem.addEventListener("click", (evento) => {
    caixa_mensagem.mostrar()
})