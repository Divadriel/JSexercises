/*
Activité : gestion des contacts
*/
/*
    Commentaires du développeur :
    - j'utilise 3 variables non locales (dont 1 objet), déclarées en haut du
    programme.
    - tout le programme est segmenté en fonctions, qui s'appellent les unes
    les autres.
    - chaque fonction est documentée en-dessus.
    - les noms de variables et de fonctions sont en Anglais (habitude de
    programmation), et respectent les normes de nommage habituelles
    (camelCase, etc).
    - les phrases affichées et les commentaires du code source sont en Français.

 */

/**
 * VARIABLES NON LOCALES
 */
var action = 42;
var contacts = new Array();
var Contact = {
    init: function(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    },
    desc: function(){
        var desc = "Nom : " + this.lastname + ", prénom : " + this.firstname;
        return desc;
    }
}

/**
 * FONCTIONS
 */
/**
 * Initialisation du programme avec deux contacts.
 * @return {none} aucune variable de retour
 */
function initSoftware(){
    var initContact01 = Object.create(Contact);
    initContact01.init("Carole", "Lévisse");
    contacts.push(initContact01);
    var initContact02 = Object.create(Contact);
    initContact02.init("Mélodie", "Nelsonne");
    contacts.push(initContact02);
}
/**
 * Affichage du menu.
 * @return {none} aucune variable de retour
 */
function displayMenu(){
    console.log("\nMenu :\n1 : Lister les contacts\n2 : Ajouter un contact\n0 : Quitter");
}
/**
 * Affichage de la liste des contacts.
 * @param  {Contact} contacts le tableau de contact qui doit être dépilé et affiché
 * @return {none}    aucune variable de retour
 */
function displayAllContacts(contacts){
    console.log("Voici la liste de tous vos contacts :\n");
    contacts.forEach(function(val){
        console.log(val.desc());
    });
}
/**
 * Ajout d'un nouveau contact.
 * @return {none} aucune variable de retour
 */
function addContact(){
    var newLastname = prompt("Nom du nouveau contact : ");
    var newFirstname = prompt("Prénom du nouveau contact : ");
    var newContact = Object.create(Contact);
    newContact.init(newFirstname, newLastname);
    contacts.push(newContact);
    console.log("Le nouveau contact a été ajouté.\n");
}
/**
 * Demande de l'action à effectuer à l'utilisateur.
 * @return {Number} l'action demandée par l'utilisateur
 */
function askUser(){
    displayMenu();
    action = Number(prompt("Choisissez une option : "));
    switch (action) {
        case 1:
            displayAllContacts(contacts);
            break;
        case 2:
            addContact();
            break;
        default:

            break;
    }
    return action;
}
/**
 * Sortie du programme, avec un message d'adieu.
 * @return {none} aucune variable de retour
 */
function endSoftware(){
    console.log("\nA bientôt !\n");
}
/**
 * Lancement du programme.
 * @return {none} aucune variable de retour
 */
function startSoftware(){
    initSoftware();
    while (action != 0) {
        action = askUser();
    }
    endSoftware();
}


/**
 * EXECUTION
 */
startSoftware();



















//
