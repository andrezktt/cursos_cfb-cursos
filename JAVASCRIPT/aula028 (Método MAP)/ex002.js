let colecao = document.getElementsByTagName(`div`) // para formar a coleção foi necessário pegar os elementos do html 
colecao = [...colecao] // os elementos extraídos do html não são iteráveis, então foi necessário espalha-los em um array
colecao.map((elementos, indice) => { // cria-se uma arrow function (que não é necessário chamá-la)
    console.log(elementos.innerHTML) // aqui mostramos no console do navegador o conteúdo html dos elementos do array, se quisessemos mostrar o conteúdo completo do array bastava retirar o ".innetHTML"
    elementos.innerHTML = `Curso JavaScript` // graças ao mapeamento dos elementos é possível alterá-los
})