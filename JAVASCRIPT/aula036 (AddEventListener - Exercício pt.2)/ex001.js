const caixa_1 = document.querySelector(`#caixa1`)
const caixa_2 =  document.querySelector(`#caixa2`)
const btn_copiar = document.querySelector(`#btn_copiar`)
const objetos = [...document.querySelectorAll(`.obj`)]

objetos.map((elements) => {
    elements.addEventListener(`click`, (events) => {
        // console.log(elements)
        const elements = events.target
        elements.classList.toggle(`destaque`)
    })
}) // tudo igual à aula anterior

btn_copiar.addEventListener(`click`, () => {
    const destaque = [...document.querySelectorAll(`.destaque`)]
    const s_destaque = [...document.querySelectorAll(`.obj:not(.destaque)`)] // além de extrair os elementos que apresentam a classe "destaque" épossível extrair os elementos que não possuem a mesma classe, ou seja, todos os outros elementos restantes. por isso o comando excluí a classe destaque mas especifica que ela
    destaque.map((elements) => { // mapeamento dos elementos "DESTACADOS"
            caixa_2.appendChild(elements) // adição dos elementos "destaque" ao elemento "caixa_2" (= #caixa2)
    })
    s_destaque.map((elements) => { // mapeamento dos elementos "NÃO DESTACADOS" (s_destaque) que apresentam a classe "obj"
            caixa_1.appendChild(elements) // adição dos elementos mapeados para o elemento "caixa_1" (= #caixa1)
    })
})