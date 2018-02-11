// print process.argv
let result = 0;
// 
process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
    if (index > 1 ) {
        result += parseInt(val);
    }
});
console.log(`La somme est ${result}`);

let val = process.argv.filter((val, index) => !isNaN(parseInt(val)));
console.log(val);
let resultat = val.reduce((acc, elt)=> {
    return acc+parseInt(elt);
}, 0);
console.log(resultat);
