let todosCursos = [...document.getElementsByClassName(`curso`)] // já que é possível inseir mais de uma classe para um mesmo elemento, foi possível montar diferentes grupos, sendo este um grupo geral
let cursosC1 = [...document.getElementsByClassName(`c1`)] // este um grupo para os 6 primeiros elementos
let cursosC2 = [...document.getElementsByClassName(`c2`)] //  e este um grupo para os 6 últimos elementos
let cursoEspecial = document.getElementsByClassName(`curso`)[7] // posso também selecionar um elemento específico com base em seu índice (posição) no array

console.log(todosCursos) // mostrando todos os elementos utilizando a classe "cursos"
console.log(cursosC1) // mostrando os 6 primeiros com a classe "c1"
console.log(cursosC2) // mostrando os 6 últimos com a classe "c2"
console.log(cursoEspecial.innerHTML) // mostrando apenas o conteúdo HTML de um elemento específico, determinado na criação da variável "cursoEspecial"

cursosC1.map((elem) => { 
    elem.classList.add(`destaque`)
}) // aqui foi possível mapear e alterar os elementos utilizando sua classe