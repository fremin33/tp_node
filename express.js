const express = require('express');
const compression = require('compression');
const responseTime = require('response-time')
const app = express();
app.use(compression());
app.use(responseTime());

app.get('/addition', (request, response) => {
    // Méthode de destructuration
    let { v1, v2 } = request.query
    result = parseInt(v1) + parseInt(v2)
    response.send(`Le résultat est ${result}`)
})
app.get('/soustraction', (request, response) => {
    // Méthode de destructuration 
    let { v1: value1, v2: value2 } = request.query
    result = parseInt(value1) - parseInt(value2)
    response.send(`Le résultat est ${result}`)
})

app.listen(8080);
