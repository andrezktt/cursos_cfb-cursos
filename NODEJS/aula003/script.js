const http = require("http");
const porta = 3000;
const host = "127.0.0.1";

const servidor = http.createServer((require, response) => {
    response.writeHead(200, {'Content-Type' : 'text/html'});
    if (require.url == '/') {
        response.write('<h2>Seja Bem Vindo(a)!</h2>');
    } else if (require.url == '/album') {
        response.write('<h2>Selecione seu album Favorito</h2><p>Taylor Swift</p><p>Folklore</p><p>Speak Now</p><p>Red</p><p>1989</p><p>Reputation</p><p>Lover</p><p>Folklore</p><p>Evermore</p><p>Midnights</p>');
    } else if (require.url == '/album/lover') {
        response.write('<h2>Estas sao as musicas presentes neste album:</h2>');
    }
    response.end();
})

servidor.listen(porta, host, () => {
    console.log("Servidor Ativo")
})