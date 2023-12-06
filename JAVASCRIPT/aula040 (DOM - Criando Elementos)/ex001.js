const caixa_1 = document.querySelector(`#caixa1`)
const albuns = [`Taylor Swift`, `Fearless`, `Speak Now`, `Red`, `1989`, `Reputation`, `Lover`, `Folklore`, `Evermore`, `Midnights`] // criei um array do zero, então não precisei utilizar o comando "spread" (que transforma um HTML collection em array)

albuns.map((element, key) => { // mapeando TODOS os elementos do array que criei
    const newElement = document.createElement(`div`) // para cada elemento do array eu crio um elemento HTML correspondente (nesse caso uma div), graças ao comando "createElement()" 
    newElement.setAttribute(`id`, `c${key + 1}`) // e com o comando "setAttribute("atributo", "valor")" é possível adicionar atributos para os elementos em HTML, como um id, uma class, ou outro atributo qualquer
    newElement.setAttribute(`class`, `album a1`) // adicionei outro atributo "class" para cada um dos elementos
    newElement.innerHTML = element // e para cada um dos elementos eu criei um conteúdo HTML utilizando os valores do próprio array
    caixa_1.appendChild(newElement) // para adicionar tudo que foi feito até então é necessário anexar estes filhos à um elemento HTML já existente, no caso, o elemento "#caixa1"
})