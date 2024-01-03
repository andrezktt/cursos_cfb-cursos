let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90,]
let [a, b, c, ...d] = numeros

console.log(a)
console.log(b)
console.log(c)
console.log(d)

let objeto = {nome: "André", idade: "23 anos", altura: "180cm"}
let {nome, idade} = objeto
console.log(nome)
console.log(idade)

const cores = () => {
    return ["verde", "vemelho", "azul", "lilás"]
}
let [c1, c2, , c3] = cores()
console.log(c1)
console.log(c2)
console.log(c3)

let texto = "O rato roeu a roupa do rei de roma"
let [...t] = texto.split(" ")
console.log(t)