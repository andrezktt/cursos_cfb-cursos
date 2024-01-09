const head = document.head
const body = document.body

// BODY
const estilo_body = 
    "border: none;" +
    "margin: 0px;" +
    "padding: 0px;" +
    'box-sizing: border-box;'
body.setAttribute("style", estilo_body)

// CABEÇALHO
const estilo_header = 
    "display: flex;" +
    "flex-direction: row;" +
    "justify-content: space-between;" +
    "background-color: #3b5998;" +
    "color: #fff;" +
    "padding: 10px 10px 4px 10px;" +
    "border-radius: 0px 0px 5px 5px;" +
    "box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);"
const header = document.createElement("div")
header.setAttribute("id", "header")
header.setAttribute("style", estilo_header)
body.prepend(header)

// LOGOTIPO
const estilo_logo = 
    "display: flex;" +
    "align-items: center;" +
    "cursor: pointer;"
const estilo_logo_img = 
    "width: 100px"
const logo =
    "<div id = 'logo' style ='" + estilo_logo + "'>" +
        "<a href='https://www.amazon.com.br/'><img src = 'logo.png' title = 'amazon' style ='" + estilo_logo_img + "'/>" + "</a>" +
    "</div>"
header.innerHTML += logo

// LOGIN
const estilo_login = 
    "display: flex;" +
    "flex-direction: column;"
const estilo_login_input = 
    "margin-bottom: 4px;" +
    "width: 200px;" +
    'padding: 2px 4px;' +
    'border-radius: 4px;'
const login = 
    "<div id ='login' class = 'login' style = '" + estilo_login + "'>" +
        "<input type='email' name='f_email' id='f_email' placeholder = 'Email' style = '" + estilo_login_input + "'>" +
        "<input type='password' name='f_senha' id='f_senha' placeholder = 'Senha' style = '" + estilo_login_input + "'>" +
    "</div>"
header.innerHTML += login