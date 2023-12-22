const palco = document.querySelector("#palco")
const txtQuantidade = document.querySelector("#txt_quantidade")
const btnAdicionar = document.querySelector("#btn_adicionar")
const btnRemover = document.querySelector("#btn_remover")
const numeroObjetos = document.querySelector("#numero_objetos")

let larguraPalco = palco.offsetWidth
let alturaPalco = palco.offsetHeight
let bolinhas = []
let numeroBolinhas = 0