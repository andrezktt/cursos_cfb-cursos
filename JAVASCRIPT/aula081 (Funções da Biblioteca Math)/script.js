const olhos = [...document.querySelectorAll(".olho")]

let mouseX = 0
let mouseY = 0

window.addEventListener("mousemove", (evento) => {
    mouseX = evento.clientX
    mouseY = evento.clientY

    const rotacao = (Math.atan2(mouseY, mouseX) * 180) / Math.PI

    olhos.map((elemento) => {
        elemento.style.transform = "rotate("+rotacao+"deg)"
    })
})