let result = 0;

// process = Objet Node
// arg = propriété de process qui return un tableau des valeurs passé en paramètre
process.argv.forEach((value, index) => {
    // On récupère les élements à partir de l'index 2
    if (index > 1) {
        // On converti les strings en integer et on les additionnes
        result += parseInt(value);
    }
});
console.log(`Méthode 1 - La somme est ${result}`);

// filter return un tableau des éléments qui sont un integer
let tab = process.argv.filter((value) => {
    return !isNaN(parseInt(value))
})
// On utilise reduce pour ajouter la somme au compteur
let result2 = tab.reduce((compteur, value) => {
    return compteur += parseInt(value)
}, 0);
console.log(`Méthode 2 - La somme est ${result2}`);