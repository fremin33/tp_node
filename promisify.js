const util = require('util');
const fs = require('fs');

let url = 'http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b1b15e88fa797225412429c1c50c122a1';
let url2 = 'http://samples.openweathermap.org/data/2.5/weather?id=2172797&appid=b6907d289e10d714a6e88b30761fae22';


// On transforme une fonction asynchrone callback en asynchrone en promesse
const readFileWithPromise = util.promisify(fs.readFile);
readFileWithPromise('text.txt', {
    encoding: 'UTF-8',
    flag: 'r'
}).then((result) => {
    console.log(result);
})

const openwithpromise = util.promisify(fs.open);
const readwithpromise = util.promisify(fs.read);
const closewithpromise = util.promisify(fs.close);
openwithpromise('text.txt', 'r').then((fd) => {
    let buffer = Buffer.alloc(1024);
    return readwithpromise(fd, buffer, 0, buffer.length, null).then(({
        buffer
    }) => {
        console.log(buffer.toString('utf-8'));
        return closewithpromise(fd).then(() => { })
    })
}).catch((error) => {
    console.log(error);
})


// Méthode sans indentation 

let p = openwithpromise('text.txt', 'r');
p = p.then((fd) => {
    let buffer = Buffer.alloc(1024);
    return readwithpromise(fd, buffer, 0, buffer.length, null).then((results) => {
        // On crée un nouvelle objet avec les résults et le fd
        return {...results, fd};
    })
});

p = p.then(({BytesRead, buffer, fd}) => {
    console.log('data : ', buffer.toString('UTF-8'));
    return fd;
})

p = p.then((fd) => {
    closewithpromise(fd);
})