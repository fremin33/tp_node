const fs = require('fs');

// Synchrone méthode
// Return le texte une fois la méthode fini
let texte = fs.readFileSync('text.txt', 'UTF-8');
// console.log(texte);


// Asynchrone méthode 
// Exécute une fonction après une fois qu'il a fini de lire le fichier
fs.readFile('text.txt', {
    encoding: 'UTF-8',
    flag: 'r'
}, (err, data) => {
    if (err) {
        console.log('Erreur détecté : ' + err);
    } else {
        // console.log(data);
    }
});

fs.readFile('text.txt, ')


fs.open('text.txt', 'r', (err, fd) => {
    let content = Buffer.alloc(0);
    function f() {
        let buffer = Buffer.alloc(5);
        fs.read(fd, buffer, 0, buffer.length, null, (err, bytesRead, data) => {
            if (bytesRead == buffer.length) {
                content = Buffer.concat([content, data]);
                f();
                return;
            }
            if (err) {
                console.log(err);
                return;
            }
            fs.close(fd, (err) => {
                if (err) {
                    console.log(err);
                    return;
                }
            })
            data = data.slice(0, bytesRead);
            content = Buffer.concat([content, data]);
            console.log(content.toString('UTF-8'));
        })
    }
})

// ----------------------------------------------------------------------------


