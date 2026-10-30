// Déclaration des variables
let nom ="Islem";
let age = 32;

console.log(nom);
console.log(age);


let score = 10;
score=15;

console.log(score);

const PI =3.14;
// PI = 3.14159;  //INTERDIT (modifier la valeur d'une constante)

console.log(PI);

// La concaténation des chaines de caractères
let prenom = "Islem";
nom = "Ben Mabrouk";

let nomComplet = prenom + " " + nom;
console.log(nomComplet);

// let test = "Je suis " + prenom + " " + nom;
let test = `Je suis ${prenom} ${nom}`;
console.log(test);
console.log("J'ai ", age, " ans");

let name = "islem";
let msg = name;
console.log(msg);

// window.name = "Mon site"
console.log(window.name);


// EX3
// let prenomUtilisateur = prompt("Quel est ton prénom?");
//Affichage
// console.log(prenomUtilisateur);
// alert("Bonjour " + prenomUtilisateur + "!");

// EX5
// let choix = confirm("Voulez-vous continuer !");
// console.log(choix); //True si OK, False si Annuler

// SI .... Alors...Sinon
// let ageUtilsateur = prompt("Donner ton age"); //Number() : convertire chaine en nombre

// console.log(typeof ageUtilsateur); //type of donne type du variable

// if (ageUtilsateur === 18) {  // "18" === 18 => comaprer : valeur et type
//     console.log("Majeur");
// } else {
//     console.log("Mineur");
// }


// EX4
// let nombre = prompt("Saisis un nombre : ");
// console.log(nombre + 2);

// if (nombre % 2 === 0) {
//     console.log("Nombre pair");
// } else {
//     console.log("Nombre impair");
// }


// selon/switch
let jour = Number(prompt("Donne le nombre du jour :"));
switch (jour) {
    case 1:
        console.log("Début de semaine");
        break;
    case 2:
        console.log("2ème jour de la semaine");
        break;
    default:
        console.log("Jour invalide");
        break;
}


