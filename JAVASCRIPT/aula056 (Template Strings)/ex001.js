const box = document.querySelector("#box")

const album = "Mr Morales & The Big Steppers"
const autor = "Kendrick Lamar"
// const frase =  album + "é o melhor album do" + autor
const frase = `${album} é o melhor album do ${autor}!`

box.innerHTML = frase