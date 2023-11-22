let n = [10,20,30,40,50]

/* for(let i = 0; i < n.length; i++) {
    console.log(n[i])
} */

console.log(`Uma maneira simplificada de realizar essa operação seria utilizando o "for in":`) // com o for in eu consigo retornar a posião de cada um dos elementos de uma coleção (indice)

for(i in n) {
    console.log(i)
}

console.log(`Uma maneira ainda mais simplificada seria utilizando o "for of"`) // Com o for of é possível retornar todos os elementos de uma coleção individualmente (valor)

for(i of n) {
    console.log(i)
}