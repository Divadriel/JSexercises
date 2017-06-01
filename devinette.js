/*
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

// nombre maximal de tentatives
var nbTentatives = 6;
// on lance le jeu
var essai = Number(prompt("Devinez le nombre !"));

// while à 2 conditions : essai infructueux, ou vérification du nombre d'essais max
while((essai !== solution) && (nbTentatives > 0)){
    // tests sur l'essai en cours
    if (essai > solution) {
        console.log(essai + " est trop grand");
    }
    else if (essai < solution) {
        console.log(essai + " est trop petit");
    }
    // une tentative de moins
    nbTentatives--;
    // nouvel essai
    essai = Number(prompt("Essayez à nouveau !"));
}

// tests condition de sortie du while : solution trouvée
if(essai === solution){
    console.log("Bravo ! Vous avez gagné ! La solution est bien " + essai);
}
// ou pas
else{
    console.log("Dommage... La solution était " + solution);
}
console.log("Fin du jeu. A bientôt !");
// FIN PROGRAMME




//
