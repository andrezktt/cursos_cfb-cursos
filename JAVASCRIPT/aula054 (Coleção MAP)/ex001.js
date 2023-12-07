const box = document.querySelector("#box")

// CRIANDO UMA COLEÇÃO DO TIPO "MAP()"
let map = new Map()

// CRIANDO OS ELEMENTOS DA COLEÇÃO. ESTRUTURA = nomeDaColeção.set(indice, valor)
map.set("album", "Midnights")
map.set(10, "Placa de Vídeo")
map.set(1, 400)
map.set("idade", 18)

// comando para deletar um dos elementos da coleção a partir da chave selecionada
map.delete(1)
console.log(map)

// apenas criei duas variáveis, uma para localizar a pesquisa e outra para retornar uma resposta
let pesquisa = "album"
let resposta = ""


if (map.has(pesquisa)){ // condição para averiguar se a chave/indice pesquisado está presente na coleção ou não. para isso utilizo o comando "has()" para procurar a chave dentro da coleção
    resposta = `A chave pesquisada está presente na coleção, com o valor = ${map.get(pesquisa)}!`// o comando "get()" serve para extrair o valor de um elemento a partir de sua chave
} else {
    resposta = `A chave NÃO está presente nesta coleção!`
}

resposta += `<br/> Tamanho da Coleção: ${map.size}` // o comando "size" serve para retornar o tamanho da coleção
box.innerHTML = resposta

// o comando "forEach()" percorre todos os elementos da coleção. é como se utilizassemos o método "map()" ou um (for of)
map.forEach((element, key) => {
    console.log(element, key)
})