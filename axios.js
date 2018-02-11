const axios = require('axios');

let url = 'http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b1b15e88fa797225412429c1c50c122a1';
let url2 = 'http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b1b15e88fa797225412429c1c50c122a1';

// // Utilisation des promesses
// // Make a request for a user with a given ID
let promesse = axios.get(url);
let promesse2 = axios.get(url2);

// // On récupère le résultat chaque then return une promesses
promesse = promesse.then((result) => {
    console.log("resultat 1 : ", result.data);
    promesse2 = promesse2.then((result2) => {
        console.log('resultat 2 : ', result2.data);
        return promesse2.data;
    })
    return promesse2;
})
promesse = promesse.then((result) => {
    console.log(result.data);
})
promesse = promesse.catch((error) => {
    console.log('Toute les erreurs : ', error);
})

//  Deuxième syntax

let promesse3 = axios.get(url);
let promesse4 = axios.get(url2);
promesse3.then((result) => {
    console.log(result);
    promesse4.then((result) => {
        console.log(result);

    })
}).catch((error) => {
    console.log(error);
})


// 2 promesses en même temps
let allPromises = Promise.all([promesse3, promesse4]);

// Première méthodes
allPromises.then((results) => {
    console.log('resultat 1 : ', results[0], 'resultat 2 : ', results[1])
})

// Second méthodes
allPromises =
    allPromises.then(([{
        data: data1
    }, {
        data: data2
    }]) => {
        console.log('resultat 3 : ', data1, 'resultat 4 : ', data2)
    })


allPromises =
    allPromises.catch((errors) => {
        console.log('resultats 1 : ', errors[0], 'resultat 2 : ', errors[1]);
    })

    