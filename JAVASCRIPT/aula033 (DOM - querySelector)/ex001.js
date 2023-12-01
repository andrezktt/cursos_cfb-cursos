let divCursos = [...document.getElementsByTagName(`div`)]
let todosCursos = [...document.getElementsByClassName(`curso`)]
let cursosC1 = [...document.getElementsByClassName(`c1`)]
let cursosC2 = [...document.getElementsByClassName(`c2`)]
let cursoEspecial = document.getElementById(`c9`)

let query_div = [document.querySelector(`div`)] // o "querySelector" retorna apenas o PRIMEIRO elemento encontrado do tipo "div"

let query_todasDiv = [...document.querySelectorAll(`div`)] // "querySelectorAll" retorna TODOS os elementos encontrados do tipo "div"

let query_todosCursos = [...document.querySelectorAll(`.curso`)] //  foram extraídos todos os cursos de classe "cursos"
let query_cursosC1 = [...document.querySelectorAll(`.c1`)] //  foram extraídos todos os cursos de classe "c1"
let query_cursosC2 = [...document.querySelectorAll(`.c2`)] //  foram extraídos todos os cursos de classe "c2"
let query_cursoEspecial = document.querySelector(`#c10`) // ao usar o "querySelector" é possível selecionar um elemento específico identificando tanto o seu id quanto a sua classe e até sua tagName

console.log(query_div)
console.log(query_todasDiv) // o console retorna um "NodeList", que é um modelo de HTML collection mais antigo, ou seja, há a necessidade de converter a coleção para um array utilizando o comando "spread" (...)
console.log(query_todosCursos)
console.log(query_cursosC1)
console.log(query_cursosC2)
console.log(query_cursoEspecial.innerHTML)

/* console.log(divCursos)
console.log(todosCursos)
console.log(cursosC1)
console.log(cursosC2)
console.log(cursoEspecial) */

/* cursosC1.map((elem) => { 
    elem.classList.add(`destaque`)
}) */