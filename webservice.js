const request = require('request');
const http = require('http');
let url = 'http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b1b15e88fa797225412429c1c50c122a1';
let url2 = 'http://samples.openweathermap.org/data/2.5/weather?id=2172797&appid=b6907d289e10d714a6e88b30761fae22';
http.get(url, (res) => {
    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => {
        rawData += chunk;
    });
    res.on('end', () => {
        try {
            const parsedData = JSON.parse(rawData);
            // console.log(parsedData);
            let {
                main: {
                    temp
                }
            } = parsedData;
            // console.log(temp);
        } catch (e) {
            // console.error(e.message);
        }
    });
});


function fini() {
    console.log('Les deux fonctions ont été exécuté');
}

let done1 = false;;
let done2 = false;

request(url, function (error, response, data) {
    const parsedData2 = JSON.parse(data)
    let {
        main: {
            temp: maTemp2
        }
    } = parsedData2;
    console.log(maTemp2);
    done1 = true;
    if (done2 == true) {
        fini();
    }
});
request(url2, function (error2, response2, data2) {
    const parsedData3 = JSON.parse(data2)
    let {
        main: {
            temp: maTemp3
        }
    } = parsedData3;
    console.log(maTemp3);
    done2 = true;
    if (done1 == true) {
        fini();
    }
})

const async = require('async');
let urls = [
    'http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b1b15e88fa797225412429c1c50c122a1',
    'http://samples.openweathermap.org/data/2.5/weather?id=2172797&appid=b6907d289e10d714a6e88b30761fae22'
]
async.map(urls, (url, callback) => {
    console.log('url=', url);

    // On récupère chaque url et son body
    request(url, (error, response, body) => {
        // console.log('response=', response);
        callback(error, body);
    });
    // On récupère un tableau d'url et leurs body
}, (error, bodies) => {
    console.log("tableau de résultat", bodies);
});
