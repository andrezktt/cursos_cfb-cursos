const caixa_1 = document.querySelector(`#caixa1`)
const albuns = [`Taylor Swift`, `Fearless`, `Speak Now`, `Red`, `1989`, `Reputation`, `Lover`, `Folklore`, `Evermore`, `Midnights`]

albuns.map((element, key) => {
    const newElement = document.createElement(`div`)
    newElement.setAttribute(`id`, `c${key + 1}`)
    newElement.setAttribute(`class`, `album a1`)
    newElement.innerHTML = element
    newElement.addEventListener("click", (event) => {
        caixa_1.removeChild(event.target)
    })
    caixa_1.appendChild(newElement)
})