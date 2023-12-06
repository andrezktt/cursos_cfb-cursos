const caixa_1 = document.querySelector(`#caixa1`) // criada para conter as divs criadas
const btn_selected = document.querySelector(`#btn_selectAlbum`) // criada para extrair um botão e acioná-lo
const albuns = ["Taylor Swift", "Fearless", "Speak Now", "Red", "1989", "Reputation", "Lover", "Folklore", "Evermore", "Midnights"] // array com os albuns da diva, os elementos kkkkk

albuns.map((element, key) => { // mapeando os elementos do array
    const newElement = document.createElement(`div`) // criando uma div para cada elemento
    newElement.setAttribute(`id`, `c${key + 1}`) // acrescentando um id para cada elemento
    newElement.setAttribute(`class`, `album a1`) // acrescentando uma classe para cada elemento
    newElement.innerHTML = element // criando um conteúdo HTML a partir dos elementos do array

    const comandos = document.createElement(`div`) // criando um elemento, que serve apenas para diagramar o espaço dos radios em CSS
    comandos.setAttribute("class", "comandos") // acrescentando uma classe para os elementos para poder alterálos em CSS

    const radioAlbum = document.createElement(`input`) // criando "inputs" para cada elemento mapeado
    radioAlbum.setAttribute("type", "radio") // acrescentando o tipo de input, nesse caso o "radio" 
    radioAlbum.setAttribute("name", "radio_album") // e é muito importante adicionar um nome único a todos os inputs radio, para que só seja possível selecionar um por vês

    comandos.appendChild(radioAlbum) // adicionando os inputs radio

    newElement.appendChild(comandos) //  adicionando uma div comandos que para cada radio ser configurado visualmente

    caixa_1.appendChild(newElement) // adicionando todos os elementos mapeados para a caixa externa
})

btn_selected.addEventListener("click", (event) => { // adicionando uma escuta para a interação de clicar
    const allRadios = [...document.querySelectorAll("input[type = radio]")] // extraindo/linkando as interações com todos os "radios", o retorno são todos os "radios" disponíveis
    let radioSelected = allRadios.filter((element, key, array) => { 
        return element.checked // filtrando (com o comando "filter") o elemento que encontra-se marcado. o retorno é o unico "radio selecionado" 
    })
    radioSelected = radioSelected[0] // este comando retorna a estrutura do primeiro elemento contido no "radio"
    const albumSelected = radioSelected.parentNode.parentNode.firstChild.textContent // cada "parentNode" faz com que o retorno seja a estrutura que contém a estrutura/elemento selecionado, ou seja, ao utilizar dois "parentNode" retornamos à "div" inicial contida pelo elemento caixa (#caixa1) e aí podemos identificar qual é a primeira estrutura (firstChild) que parte desta "div" que deveria ser o valor do elemento selecionado, mas já que estamos em HTML, ele retorna um "object text" e não o elemento do array, por isso utiizamos o comando "textContent" para extrair seu conteúdo (o valor)
    window.alert(`Você selecionou o album "${albumSelected}"!`) // só criei um alerta utilizando a variavel anterior

    console.log(allRadios)
    console.log(radioSelected)
    console.log(albumSelected)
})