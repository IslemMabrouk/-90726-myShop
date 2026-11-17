// 1.Création de la classe

class Utilisateur {

    // 2.Définir les attributs
    constructor (nom, prenom, email, mdp,adresse){
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.#mdp = mdp;
        this.adresse =adresse;
    }

    // Rendre un attribut privé en JS
    #mdp;

    // 3.Définition des méthodes
    afficherInformations(){
        console.log("Nom : ",this.nom);
        console.log("Prénom : ",this.prenom);
        console.log("Email : ",this.email); 
    }

    consulterProduits(){
        console.log("Voici la liste des produits disponibles.");
        
    }

    // Méthode pou récupérer le mdp
    getMdp(){
        return this.#mdp;
    }

    vérifierMdp(mdpSaisi){
        if (this.#mdp != mdpSaisi) {
            console.log("Mot de passe incorrect !");
            
        }
    }
    
}

// 4.création d'un objet à partir de la classe
const utilisateur1 = new Utilisateur("Islem", "Ben Mabrouk", "islemabrouk@gmail.com", "123456", "Tunisie");

// 5. Appel des méthodes
utilisateur1.afficherInformations();
utilisateur1.consulterProduits();

console.log(utilisateur1.nom);
// console.log(utilisateur1.#mdp);

// Acces indirect à l'attribut mdp privé
console.log(utilisateur1.getMdp());


// Héritage
class Admin extends Utilisateur {

    afficherDashboard(){
        console.log("Dashboard affiché!");
        
    }

}

const admin1 = new Admin("admin", "test", "admin@gmaikl.com", "admin123", "france");
admin1.afficherInformations();