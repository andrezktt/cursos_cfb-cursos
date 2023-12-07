const caixa_1 = document.querySelector(`#caixa1`)
const nomeAlbum = document.querySelector("#nomeAlbum")
const btn_selected = document.querySelector(`#btn_selectAlbum`)
const btn_remove = document.querySelector("#btn_removeAlbum")
const btn_addAlbum_antes = document.querySelector("#btn_addAlbum_bef")
const btn_addAlbum_after = document.querySelector("#btn_addAlbum_aft")
const albuns = ["Taylor Swift", "Fearless", "Speak Now", "Red", "1989", "Reputation", "Lover", "Folklore", "Evermore", "Midnights"]

let key = 0

const removeSelected = () => {
    const albumSelected = [...document.querySelectorAll(".album")]
    albumSelected.map((element) => {
        element.classList.remove("selecionado")
    })
}

const albumSelected = () => {
    const albumSelected = [...document.querySelectorAll(".selecionado")]
    return albumSelected[0]
}

const createNewAlbum = (album) => {
    const newElement = document.createElement(`div`)
    newElement.setAttribute(`id`, `c${key}`)
    newElement.setAttribute(`class`, `album a1`)
    newElement.innerHTML = album
    newElement.addEventListener("click", (event) => {
        removeSelected()
        event.target.classList.toggle("selecionado")
    })
    return newElement
}

albuns.map((element) => {
    const newElement = createNewAlbum(element)
    caixa_1.appendChild(newElement)
    key++
})

btn_selected.addEventListener("click", (event) => {
    try {
        alert(`Curso selecionado: ${albumSelected().innerHTML}`)
    } catch {
        alert(`Por favor, selecione um album!`)
    }
})

btn_remove.addEventListener("click", (event) => {
    try {
        albumSelected().remove()
    } catch (error) {
        window.alert("Por favor, selecione alguma das opções abaixo!")
    }
})

btn_addAlbum_antes.addEventListener("click", (event) => {
    try {
        if (nomeAlbum.value != "") {
            const newAlbum = createNewAlbum(nomeAlbum.value)
            caixa_1.insertBefore(newAlbum, albumSelected())
        } else {
            alert("Por favor, insira algum album antes de prosseguir!")
        }
    } catch (error) {
       alert("Por favor, selecione um curso!")
    }
})

btn_addAlbum_after.addEventListener("click", (event) => {
    try {
        if (nomeAlbum.value != "") {
            const newAlbum = createNewAlbum(nomeAlbum.value)
            caixa_1.insertBefore(newAlbum, albumSelected().nextSibling)
        } else {
            alert("Por favor, insira algum album antes de prosseguir!")
        }
    } catch (error) {
        alert("Por favor, selecione um curso!")
    }
})