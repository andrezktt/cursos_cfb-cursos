const http = require('http');

http.createServer((require, response) => {
    response.writeHead(200, {
        'Content-Type' : 'text/plain'
    });
    response.write("CFB Cursos\nCurso de Node.js");
    response.end();
}) .listen(1337);