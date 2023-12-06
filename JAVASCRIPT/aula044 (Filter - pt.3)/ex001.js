const caixa_1 = document.querySelector(`#caixa1`)
const btn_selected = document.querySelector(`#btn_selectAlbum`)
const btn_remove = document.querySelector("#btn_removeAlbum")
const albuns = ["Taylor Swift", "Fearless", "Speak Now", "Red", "1989", "Reputation", "Lover", "Folklore", "Evermore", "Midnights"]

albuns.map((element, key) => {
    const newElement = document.createElement(`div`)
    newElement.setAttribute(`id`, `c${key + 1}`)
    newElement.setAttribute(`class`, `album a1`)
    newElement.innerHTML = element

    const comandos = document.createElement(`div`)
    comandos.setAttribute("class", "comandos")

    const radioAlbum = document.createElement(`input`)
    radioAlbum.setAttribute("type", "radio")
    radioAlbum.setAttribute("name", "radio_album")

    comandos.appendChild(radioAlbum)

    newElement.appendChild(comandos)

    caixa_1.appendChild(newElement)
})

const radioSelected = () => { // separei a função de selecionar pois todas as outras funcionalidades/operações utilzzam este método.
    const allRadios = [...document.querySelectorAll("input[type = radio]")]
    const radioSelected = allRadios.filter((element, key, array) => { 
        return element.checked
    })
    return radioSelected[0]
}

btn_selected.addEventListener("click", (event) => {
    const rs = radioSelected()
    if (rs == undefined) {
        window.alert("Por favor, selecione alguma das opções abaixo!")
    } else {
        const albumSelected = rs.parentNode.previousSibling.textContent
        alert(`Album selecionado: "${albumSelected}"`)
    }
})

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