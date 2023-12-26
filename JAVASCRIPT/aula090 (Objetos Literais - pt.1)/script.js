const objetos = document.querySelector("#objetos")

const computador = {
    cpu: "i9",
    ram: "64gb",
    ssd: "4tb",
    info: function() {
        console.log(`CPU: ${this.cpu}`)
        console.log(`RAM: ${this.ram}`)
        console.log(`SSD: ${this.ssd}`)
    }
}
computador["monitor"] = "22pol"
computador.placaDeVideo = "RTX 4060 Ti"

console.log(computador.ram)
console.log(computador["placaDeVideo"])

const computadores  =  [
    {
        cpu: "i9",
        ram: "64gb",
        ssd: "4tb"
    },
    {
        cpu: "i7",
        ram: "32gb",
        ssd: "2tb"
    },
    {
        cpu: "i5",
        ram: "16gb",
        ssd: "1tb"
    },
]

computadores.map((elemento) => {
    const div = document.createElement("div")
    div.innerHTML = `<p> CPU: ${elemento.cpu} </p>`
    div.innerHTML += `<p> RAM: ${elemento.ram} </p>`
    div.innerHTML += `<p> SSD: ${elemento.ssd} </p>`
    div.setAttribute("class", "computadores")
    objetos.appendChild(div)
})

/* computador.info()
console.log(computadores)
objetos.innerHTML = JSON.stringify(computadores) */