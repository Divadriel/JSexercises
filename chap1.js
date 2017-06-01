/**
 * FUNCTIONS
 */

function presentation(nom, age){
    console.log(nom+"\n"+String(age));
}
//presentation("David", 24);

function calcSixTrois(){
    console.log("Opération avec 6 et 3 : \n");
    console.log("6 + 3 = "+String(6+3)+"\n");
    console.log("6 - 3 = "+String(6-3)+"\n");
    console.log("6 * 3 = "+String(6*3)+"\n");
    console.log("6 / 3 = "+String(6/3)+"\n");
}
//calcSixTrois();

function bonjour(){
    var prenom = prompt("Entrez votre prénom : ");
    var nom = prompt("Entrez votre nom : ");
    alert("Bonjour "+prenom+" "+nom);
}
//bonjour();

function calcTVA(taux){
    var prix = Number(prompt("Veuillez entrer un prix HT : "));
    console.log(String(prix+prix*(taux/100)));
}
//calcTVA(19.6);

function celsiusToFahrenheit(){
    var celsius = Number(prompt("Entrez une température en Celsius : "));
    console.log(String(celsius*(9/5)+32));
}
//celsiusToFahrenheit();

function inv2Numbers(nb1, nb2){
    console.log("NB1 : "+nb1+" et NB2 : "+nb2);
    var temp = nb1;
    nb1 = nb2;
    nb2 = temp;
    console.log("NB1 : "+nb1+" et NB2 : "+nb2);
}
//inv2Numbers(21, 42);

function tourManege(nbTour){
    for (var i = 0; i < nbTour; i++) {
        console.log("C'est le tour numéro "+i);
    }
}
//tourManege(10);

function oddEven(){
    var nb = Number(prompt("Entrez un nombre :"));
    for (var i = 0+nb; i < 10+nb; i++) {
        if(i%2 === 0){
            console.log(i + " est pair");
        }
        else{
            console.log(i + " est impair");
        }
    }
}
//oddEven();

function saisie(){
    var nb = 101;
    while ((nb > 100) || (nb < 50)) {
        nb = Number(prompt("Entrez un nombre inférieur ou égal à 100"));
    }
    console.log(nb);
}
//saisie();

function multipl(){
    var nb = 42;
    while ((nb<2) || (nb>9)) {
        nb = Number(prompt("Entrez un nombre entier entre 2 et 9 : "));
    }
    console.log("Voici la table de multiplication de "+nb);
    for (var i = 1; i <= 10; i++) {
        console.log(nb+" x "+i+" = "+(nb*i));
    }
}
//multipl();

function ouiNon(){
    var txt = "toto";
    while ((txt !== "Oui") && (txt !== "Non") && (txt !== "oui") && (txt !== "non")) {
        txt = String(prompt("Entrez du texte : "));
    }
}
//ouiNon();

function fizzBuzz(){
    for (var i = 1; i <= 100; i++) {
        if ((i % 5 === 0) && (i % 3 === 0)) {
            console.log('FizzBuzz');
        }
        else if(i % 3 === 0){
            console.log("Fizz");
        }
        else if (i % 5 === 0) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
}
//fizzBuzz();

function countVowels(word){
    var vowels = "aeiouyàêëéèîôûïöü";
    var a = 0;
    for (var i = 0; i < word.length; i++) {
        var n = vowels.indexOf(word[i]);
        if(n != -1){
            a++;
        }
    }
    return a;
}

function wordReversion(word){
    var reversed = "";
    for(var i = word.length-1; i >= 0; i--){
        reversed += word[i];
    }
    return reversed;
}

function checkPalindrome(word){
    var reversed = wordReversion(word).toLowerCase();
    word = word.toLowerCase();
    if(reversed === word){
        return "C'est un palindrome.";
    }
    else {
        return "Ce n'est pas un palindrome.";
    }
}

function convertLetterToLeet(letter){
    switch (letter.toLowerCase()) {
        case "a":
        case "à":
            return "4";
            break;
        case "b":
            return "8";
            break;
        case "e":
        case "é":
        case "è":
        case "ê":
        case "ë":
            return "3";
            break;
        case "i":
        case "î":
        case "ï":
            return "1";
            break;
        case "o":
        case "ô":
        case "ö":
            return "0";
            break;
        case "s":
            return "5";
            break;
        case "t":
            return "7";
            break;
        default:
            return letter;
            break;
    }
}

function convertWordToLeet(word){
    var leetWord = "";
    for(var i = 0; i < word.length; i++){
        leetWord += convertLetterToLeet(word[i]);
    }
    return leetWord;
}

function wordDetails(){
    var word = String(prompt("Entrez un mot : "));
    console.log("Le mot "+word+" contient "+word.length+" caractère(s).\n");
    console.log("Il s'écrit en MAJ "+word.toUpperCase()+".\n");
    console.log("Il s'écrit en MIN "+word.toLowerCase()+".\n");
    console.log("Il contient "+countVowels(word)+" voyelle(s).\n");
    console.log("Il s'écrit à l'envers "+wordReversion(word)+".\n");
    console.log(checkPalindrome(word)+"\n");
    console.log("Sa version leet est "+convertWordToLeet(word)+".\n");

}
//wordDetails();

var perso = {
    nom: "Aurora",
    sante: 150,
    force: 25,
    xp: 0,

    desc: function(){
        var desc = this.nom + " a " + this.sante + " points de vie et " + this.force + " en force. Il a " + this.xp + " points d'XP.";
        return desc;
    }
};


function adventure01(perso){
    console.log(perso.desc());
    console.log(perso.nom + " est atteint par une flèche !");
    perso.sante -= 20;
    perso.xp += 10;
    console.log(perso.nom + " trouve un bracelet de force !");
    perso.force += 10;
    perso.xp += 5;
    console.log(perso.desc());
}
//adventure01(perso);

var Chien = {
    init: function(nom, race, taille){
        this.nom = nom;
        this.race = race;
        this.taille = taille;
    },
    aboyer: function(){
        return "Grrr ! Grrr !";
    }
};


function adventure02(){
    var crokdur = Object.create(Chien);
    crokdur.init("Crokdur", "mâtin de Naples", 75);
    console.log(crokdur.nom + " est un " + crokdur.race + " mesurant " + crokdur.taille + " cm");
    console.log("Tiens, un chat ! " + crokdur.nom + " aboie : " + crokdur.aboyer());

    var pupuce = Object.create(Chien);
    pupuce.init("Pupuce", "bichon", 22);
    console.log(pupuce.nom + " est un " + pupuce.race + " mesurant " + pupuce.taille + " cm");
    console.log("Tiens, un chat ! " + pupuce.nom + " aboie : " + pupuce.aboyer());
}
//adventure02();

function circleMod(){
    var r = Number(prompt("Entrez le rayon d'un cercle : "));

    var cercle = {
        rayon: r,
        perimetre: function(){
            var peri = 2 * Math.PI * this.rayon;
            return peri;
        },
        aire: function(){
            var aire = Math.PI * this.rayon * this.rayon;
            return aire;
        }
    }

    console.log("Son périmètre vaut : "+cercle.perimetre());
    console.log("Son aire vaut : "+cercle.aire());
}
//circleMod();

var compte = {
    titulaire: "Alex",
    solde: 0,
    crediter: function(money){
        this.solde += money;
    },
    debiter: function(money){
        this.solde -= money;
    },
    decrire: function(){
        var desc = "Titulaire : "+this.titulaire+", solde : "+this.solde+" euros.";
        return desc;
    }
}

function adventure03(compte){
    console.log(compte.decrire());
    compte.crediter(200);
    compte.debiter(150);
    console.log(compte.decrire());
}
//adventure03(compte);

var Personnage = {
    initPerso: function(nom, sante, force){
        this.nom = nom;
        this.sante = sante;
        this.force = force;
        this.xp = 0;
    }
};

var Joueur = Object.create(Personnage);
Joueur.initJoueur = function(nom, sante, force){
    this.initPerso(nom, sante, force);
    this.xp = 0;
};
Joueur.desc = function(){
    var desc = this.nom + " a " + this.sante + " points de vie et " + this.force + " en force et " + this.xp + " points d'XP.";
    return desc;
}

var Adversaire = Object.create(Personnage);
Adversaire.initAdversaire = function(nom, sante, force, race, valeur){
    this.initPerso(nom, sante, force);
    this.race = race;
    this.valeur = valeur;
};

function adventure04(){
    var joueur1 = Object.create(Joueur);
    joueur1.initJoueur("Aurora", 150, 25);

    var joueur2 = Object.create(Joueur);
    joueur2.initJoueur("Glacius", 130, 30);

    console.log(joueur1.desc());
    console.log(joueur2.desc());

    var monstre = Object.create(Adversaire);
    monstre.initAdversaire("ZogZog", 40, 20, "orc", 10);

    console.log("Un monstre arrive ! C'est un "+ monstre.race +" nommé "+ monstre.nom);
}
//adventure04();

function mousquetaires(){
    var mousqs = ["Athos", "Portos", "Aramis"];
    for(var i = 0; i < mousqs.length; i++){
        console.log(mousqs[i]);
    }
    mousqs.push("D'Artagnan");
    console.log("ils sont un de plus !");
    mousqs.forEach(function(mousq){
        console.log(mousq);
    });
}
//mousquetaires();

function somme(){
    var valeurs = [11, 3, 7, 2, 9, 10];
    var sum = 0;
    valeurs.forEach(function(val){
        sum += val;
    });
    console.log("La somme des éléments vaut : "+sum);
}
//somme();

function findMax(){
    var valeurs = [11, 3, 7, 2, 9, 10];
    var max = 0;
    valeurs.forEach(function(val){
        if(val>max){
            max = val;
        }
    });
    console.log("la valeur max est : "+max);
}
//findMax();

function mots(){
    var motCourant = 'toto';
    var mots = new Array();
    while(motCourant != 'stop'){
        motCourant = prompt("Ecrivez un mot. Tapez 'stop' pour stopper le programme. A vous !");
        if(motCourant == "stop"){
            mots.forEach(function (val){
                console.log(val);
            });
        }
        else{
            mots.push(motCourant);
        }
    }
}
//mots();

function helloWorld(){
    console.log("Hello World!");
}


















//
