const url = document.querySelector("#url")
const botaoUrl = document.querySelector("#btn_url")

botaoUrl.addEventListener("click", (evento) => {
    // window.location = "https://thecodingtrain.com/"
    // window.location.replace("https://thecodingtrain.com/")
    // window.location.assign("https://thecodingtrain.com/")
    // window.location.reload()
    // window.history.back()
    // window.history.forward()
    // console.log(window.history.length)
    // window.history.go(1)
    window.location = url.value
})