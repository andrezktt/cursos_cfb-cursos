const caixa_1 = document.querySelector(`#caixa1`) // extração do elemento com id = caixa1
const caixa_2 =  document.querySelector(`#caixa2`) // extração do elemento com id = caixa2
const btn_copiar = document.querySelector(`#btn_copiar`) // extração do botão
const objetos = [...document.querySelectorAll(`.obj`)] // extração e conversão de todos os elementos de classe = obj

objetos.map((elements) => { // mapeando individualmente todos os elementos extraídos
    elements.addEventListener(`click`, (events) => { // adição de uma escuta para a interação "click "
        const elements = events.target // link entre o elemento do array e o alvo da interação
        elements.classList.toggle(`destaque`) // graças ao comando "toggle" é possível adicionar ou remover (ativar ou desativar ) a classe desejada, com base na interação
    })
})

btn_copiar.addEventListener(`click`, () => { // adicionando uma operação pra o botão "trasnsferir"
    const destaque = [...document.querySelectorAll(`.destaque`)] // extraindo e convertendo todos os elementos que passaram ater a classe "destaque" após a operação anterior
    destaque.map((elements) => { // mapeando os elementos novamente
            caixa_2.appendChild(elements) // adicionando todos os elementos mapeados ao objeto/elemento "caixa_2" (= #caixa2)
    })
})

// vale ressaltar que o termo que defini como "elements" não é uma variável, só é realmente um parâmetro da função "map". nesse caso deu para perceber isso pois o mesmo "element" foi usado para duas operações de mapeamento diferentes. 

// ou seja, "elements" não é uma variável, mas sim um parâmetro que funciona dentro da função "map"
