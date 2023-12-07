const caixa_1 = document.querySelector(`#caixa1`)
const nomeAlbum = document.querySelector("#nomeAlbum")
const btn_selected = document.querySelector(`#btn_selectAlbum`)
const btn_remove = document.querySelector("#btn_removeAlbum")
const btn_addAlbum_antes = document.querySelector("#btn_addAlbum_bef")
const btn_addAlbum_after = document.querySelector("#btn_addAlbum_aft")
const albuns = ["Taylor Swift", "Fearless", "Speak Now", "Red", "1989", "Reputation", "Lover", "Folklore", "Evermore", "Midnights"]

// PADRÃO/ROTINA DE CRIAÇÃO DE ELEMENTOS
let key = 0 // o indice foi criado fora da função, para poder ser executada em outras funções também

const createNewAlbum = (album) => {
    const newElement = document.createElement(`div`)
    newElement.setAttribute(`id`, `c${key + 1}`)
    newElement.setAttribute(`class`, `album a1`)
    newElement.innerHTML = album

    const comandos = document.createElement(`div`)
    comandos.setAttribute("class", "comandos")

    const radioAlbum = document.createElement(`input`)
    radioAlbum.setAttribute("type", "radio")
    radioAlbum.setAttribute("name", "radio_album")

    comandos.appendChild(radioAlbum)

    newElement.appendChild(comandos)

    return newElement
}
 // MAPEAMENTO DOS ELEMENTOS DO ARRAY
albuns.map((element) => {
    const newElement = createNewAlbum(element)
    caixa_1.appendChild(newElement)
    key++
})

// IDENTIFICAÇÃO DA OPÇÃO MARCADA
const radioSelected = () => {
    const allRadios = [...document.querySelectorAll("input[type = radio]")]
    const radioSelected = allRadios.filter((element) => { 
        return element.checked
    })
    return radioSelected[0]
}

// BOTÃO DE IDENTIFICAÇÃO
btn_selected.addEventListener("click", (event) => {
    const rs = radioSelected()
    if (rs == undefined) {
        window.alert("Por favor, selecione alguma das opções abaixo!")
    } else {
        const albumSelected = rs.parentNode.previousSibling.textContent
        alert(`Album selecionado: "${albumSelected}"`)
    }
})

// BOTÃO DE REMOÇÃO
btn_remove.addEventListener("click", (event) => {
    const rs = radioSelected()
    try {
        const albumSelected = rs.parentNode.parentNode
        console.log(albumSelected)
        albumSelected.remove()
    } catch (error) {
        window.alert("Por favor, selecione alguma das opções abaixo!")
    }
})


btn_addAlbum_antes.addEventListener("click", (event) => {
    const rs = radioSelected()
    try {
        if (nomeAlbum.value == "") {
            alert("Por favor, insira algum album antes de prosseguir!")
        } else { 
            const albumSelected = rs.parentNode.parentNode
            const newAlbum = createNewAlbum(nomeAlbum.value)
            caixa_1.insertBefore(newAlbum, albumSelectedddd)
        }
    } catch (error) {
       alert("Por favor, selecione um curso!")
    }
})

btn_addAlbum_after.addEventListener("click", (event) => {
    const rs = radioSelected()
    try {
        if (nomeAlbum.value != "") {
            const albumSelected = rs.parentNode.parentNode
            const newAlbum = createNewAlbum(nomeAlbum.value)
            caixa_1.insertBefore(newAlbum, albumSelected.nextSibling)
        } else {
            alert("Por favor, insira algum album antes de prosseguir!")
        }
    } catch (error) {
        alert("Por favor, selecione um curso!")
    }
})