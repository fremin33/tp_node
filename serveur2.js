const http = require('http');
const util = require('util');
const fs = require('fs');

const server = http.createServer((request, response) => {
    response.writeHead(200, 'Vous etes connecté', { 'Content-type': 'html/plain'});
    fs.open('text.txt', 'r', (error, fd) => {
        if (error) {
            response.writeHead(404, "Problème", { 'Content-type': 'html/plain' });
            response.write(error);
            response.end();
            return;
        }
        let buffer = new Buffer(1024);
        fs.read(fd, buffer, 0, buffer.length, null, (err, bytesRead, data) => {
            response.writeHead(200, "Connecté", { 'Content-type': 'html/plain' } );
            response.write()
        })
    })
}).listen(8000, '127.0.0.1')