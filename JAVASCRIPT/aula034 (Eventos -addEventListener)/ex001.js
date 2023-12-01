const cursos = [...document.querySelectorAll(`.curso`)] // primeiro é necessário extrair os elementos utilizando o método à sua escolha(eu escolhi o "querySelector" por ser mais "moderno") e convertê-los para array

cursos.map((element) => { // para operar os elementos é necessário mapeá-los para criar uma função à ser executada logo em seguida
    element.addEventListener(`click`,(evento) => { // aqui aprendemos um novo comando, que é o "addEventListener"  que é um identificador "automático" de interações com a página HTML. Ou seja, ele identifica se o elemento foi clicado, arrastado, ou as mil outras interações que foram realizadas no site (mas é necessário identificar nos () qual foi a interação que foi realizada e logo após a função que será executada caso a interação seja feita.)
        console.log(evento.target) // o comando "target" aqui só serve para retornar exatamente qual é o objeto (alvo) com o qual houve interação
        const element = evento.target // relacionamos cada um dos elementos do mapeamento com seu respectivo objeto de interação
        element.classList.add(`destaque`) // e adicionamos a clase "destaque" para cada um dos objetos/elementos com os quais houve a interação "click"
    })
})