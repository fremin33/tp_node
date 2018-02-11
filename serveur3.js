const http = require('http');
const fs = require('fs');
const url = require('url');

// On créer un serveur
http.createServer((request, response) => {
    response.writeHead(200, 'Bienvenue', {
        'Content-type': 'text/html; charset=utf-8'
    });
    // On stock le get de l'url dans une variable sous forme d'objet
    let query = url.parse(request.url, true)
    // localhost?v1=8&v2=14
    // On affiche du texte sur la page quand le serveur est pret
    console.log(query);

    // Gère le cas de flavicon si il ne trouve pas le flavicon
    if (request.url === '/favicon.ico') {
        response.writeHead(200, { 'Content-Type': 'image/x-icon' });
        response.end();
        return;
    }

    switch (query.pathname) {
        case '/addition':
            result = parseInt(query.query.v1) + parseInt(query.query.v2)
            response.write('Résult : ' + result)
            break;
        case '/soustraction':
            result = parseInt(query.query.v1) - parseInt(query.query.v2)
            response.write('Résult : ' + result)
            break;
        case '/' :
            response.write('Choisir de faire une addition ou soustraction')
            break;
    }

    response.end();
}).listen(8080, '127.0.0.1');