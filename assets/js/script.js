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


// let note = 16;

// if (note >= 16) {
//     alert("Trés bien!");
// } else if (note >= 10) {
//     alert("Admis !");
// } else {
//     alert("Non admis");
// }

// selon/switch
// let jour = Number(prompt("Donne le nombre du jour :"));
// switch (jour) {
//     case 1:
//         console.log("Début de semaine");
//         break;
//     case 2:
//         console.log("2ème jour de la semaine");
//         break;
//     default:
//         console.log("Jour invalide");
//         break;
// }


//EX1.2
//Demander le prix d'un article
// let prix = Number(prompt("Saisis le prix de l'article :"));

// let prixTTC=0;
// if (prix < 100) {
    // prixTTC = prix *1.2;   // prix + (prix*20/100)
// } else {
//     prixTTC = prix * 1.05;
// }

// console.log("Le prix TTc est : ", prixTTC);



// let note = prompt("donne ta note entre 0 et 20") //=> 16
 
// if (note >= 0 && note<=20) {  // 0<note<20
// switch(true){
//   case note>=16:
//   console.log("très bien")
//   break;
 
//   case note>=14:
//   console.log("bien")
//   break;
 
//   case note>=12 :
//   console.log("assez bien")
//   break;
 
//   case note<=10:
//   console.log("passable")
//   break;
 
//   case note<=10:
//   console.log("insuffisant")
//   break;
// }
// } else {
//     console.log("La note doit etre entre 0 et 20");
    
// }
 

// age =20;

// if (age >= 18) {
//     console.log("Majeur");
// } else {
//     console.log("Mineur");
// }

//Condition Ternaire
// let resultat = age >= 18 ? "Majeur" : "Mineur";
// console.log(resultat);



//i=1 => i=2 ..... i=6
// for (let i = 1; i <= 5; i++) {  //i++ == (i=i+1)
//     console.log("Bonjour");
// }

//Afficher les nombres de 1 à 10
// for (let i = 1; i <=10 ; i++) {
    // console.log(i);
// }

//Afficher les nombres pairs de 2 à 10
// for (let i = 2; i <= 10; i+=2) { //i+=2 == (i=i+2)
    // console.log(i);
// }

//Compter à rebours (5 4 3 2 1)
// for (let i = 5; i>=1 ; i--) {  //i-- == (i=i-1)
    // console.log(i);
// }


//TP3 EX1
// let somme =0;
// for (let i = 1; i <=10 ; i++) {
    // somme = 0 +1=1  => i=2 => somme =1+2=3 => i=3 => somme =3 +3=6.....i=10
    // somme = somme+i;
    // somme+=i;
// }

// console.log("La somme des nombres de 1 à 10 est : ",somme);

//TP3 EX2
// let n = Number(prompt("Donner un nombre pour calculer sa factorielle : "));
// let factorielle=1;
// for (let i = 1; i <= n; i++) {
    // factorielle =factorielle *i;  //i=1 :1*1=1 ; i=2 : 1*2=2; i=3 : 2*3=6
//     factorielle*=i;
// }

// console.log("La factorielle de ",n, " est : ", factorielle);


//TP3 EX3
// for (let i = 1; i <=30; i++) {
//     if (i%5 ===0 && i%3 ===0) {
//         console.log("FizzBuzz");
//     } else if (i%3===0) {
//         console.log("Fizz");
//     } else if (i%5===0){
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }


// let i =1;
// while (i<=5) {
//     console.log(i);
//     i++;
// }


let nombre = 20;

console.log("tester while :");
while (nombre<5) {
    console.log("Bonjour");
}

console.log("Tester do .. while :");
do {
    console.log("Bonjour");
} while (nombre<5);


//Demander le mdp à l'utilisateur
let password ="";
while (password != "1234") {
    password = prompt("Entrer votre mot de passe");
}

do {
    password = prompt("Entrer votre mot de passe");
} while (password != "1234");
