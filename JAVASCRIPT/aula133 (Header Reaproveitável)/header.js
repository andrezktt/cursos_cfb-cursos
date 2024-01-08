const head = document.head
const body = document.body

const estilo = "<link rel = 'stylesheet' type = 'text/css' href = 'header.css'/>"
head.innerHTML += estilo

const header = document.createElement("div")
header.setAttribute("id", "header")
header.setAttribute("class", "header")
body.prepend(header)

const logo =
    "<div id = 'logo' class = 'logo'>" +
        "<a href='https://www.amazon.com.br/'><img src = 'logo.png' title = 'amazon'/></a>" +
    "</div>"
header.innerHTML += logo

const login = 
    "<div id ='login' class = 'login'>" +
        "<input type='email' name='f_email' id='f_email' placeholder = 'Email'>" +
        "<input type='password' name='f_senha' id='f_senha' placeholder = 'Senha'>" +
    "</div>"
header.innerHTML += login