const http = require('http');
const util = require('util');
const fs = require('fs');
const url = require('url');

// Créer un serveur avec node js et afficher du text sur la page
const server = http.createServer((request, response) => {
    response.writeHead(200, "SUPER VOUS ETES CONNECTE", { 'Content-type': 'text/html; charset=utf-8'});
    let query = url.parse(request.url, true).query
    const openwithpromise = util.promisify(fs.open);
    const readwithpromise = util.promisify(fs.read);
    const closewithpromise = util.promisify(fs.close);
    openwithpromise('text.txt', 'r').then((fd) => {
        let buffer = Buffer.alloc(1024);
        return readwithpromise(fd, buffer, 0, buffer.length, null).then(({buffer}) => {
            // response.write(buffer.toString('utf-8'));
            response.write(query);
            console.log(buffer.toString('utf-8'));
            response.end("La fin");
            return closewithpromise(fd).then(() => {})
        })
    }).catch((error) => {
        console.log(error);
    })

})
server.listen(8080, '127.0.0.1');
