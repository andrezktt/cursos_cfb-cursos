const longitude = document.querySelector("#long")
const latitude = document.querySelector("#lati")

if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(mostrarLocalizacao, erroLocalizacao)
} else {
    console.log("Geolocalização não suportada!")
}

function mostrarLocalizacao(pos) {
    // console.log(pos)
    longitude.innerHTML = `Longitude: ${pos.coords.longitude}`
    latitude.innerHTML = `Latitude: ${pos.coords.latitude}`
}

function erroLocalizacao() {
    console.log("Erro ao tentar obter a sua localização.")
}