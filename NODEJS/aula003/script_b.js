const http = require("http");
const url = require('url');
const porta = 3000;
const host = "127.0.0.1";

const servidor = http.createServer((require, response) => {
    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.write(require.url);
    const param = url.parse(require.url, true).query
    response.write('<br/>' + param.nome)
    response.write('<br/>' + param.idade)
    response.end();
})

servidor.listen(porta, host, () => {
    console.log("Servidor Ativo")
})