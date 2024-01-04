const f_texto = document.querySelector("#f_texto")
const p_texto = document.querySelector("#p_texto")
const btn_texto = document.querySelector("#btn_texto")

btn_texto.addEventListener("click", (evento) => {

})

let num = 10
let altura = 180 + "cm"

localStorage.setItem("numero", num)
localStorage.setItem("nome", "André")
localStorage.setItem("idade", "23 anos")
localStorage.setItem("altura", altura)
// p_texto.innerHTML = localStorage.length
alert(localStorage.getItem("altura"))
alert(localStorage.getItem(localStorage.key(2)))
localStorage.clear()

sessionStorage.setItem("numero", num)
sessionStorage.setItem("nome", "André") 
sessionStorage.setItem("idade", "23 anos")
sessionStorage.setItem("altura", altura)