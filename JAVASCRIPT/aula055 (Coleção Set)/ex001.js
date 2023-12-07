const box = document.querySelector("#box")

let albuns = new Set(["Taylor Swift", "Fearless", "Speak Now", "Red", "1989", "Reputation", "Lover", "Folklore", "Evermore", "Midnights"]) // a diferença de uma coleção "Set()" para a coleção "Map()" ou até um array normal, é que nela NÃO HÁ A POSSIBILIDADE DE REPETIR ELEMENTOS

albuns.add("Midnights") // adicionando elementos com "add"
albuns.add("Karma")
albuns.add("Speak Now")
albuns.add("Fearless")

albuns.delete("Karma") // comando de deletar algum elemento pelo seu próprio valor

// albuns.clear() --> este comando serve para LIMPAR TODA A COLEÇÃO

console.log(albuns)

albuns.forEach((element) => { // passando por toda a coleção, novamente utilizando o comando "forEach()"
    box.innerHTML += `${element}<br/>`
})

// MOSTRANDO QUE TAMBÉM É POSSÍVEL UTILIZAR O FOR OF:
// for(let a of albuns){
//     box.innerHTML += `${a}<br/>`
// }