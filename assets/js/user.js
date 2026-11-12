class Utilisateur {
    constructor(nomUtilisateur, emailUtilisateur, mdpUtilisateur, genreUtilisateur, interetsUtilisateur, paysUtilisateur){
        this.nom = nomUtilisateur;
        this.email = emailUtilisateur;
        this.mdp = mdpUtilisateur;
        this.genre = genreUtilisateur;
        this.interets = interetsUtilisateur;
        this.pays = paysUtilisateur;
    }
}

function sIsncrire() {
    const inscriptionForm = document.getElementById("inscription-form");
    console.log(inscriptionForm);
    if (!inscriptionForm) return; //Arreter l'execution de la fonction si il ne trouve pas le formulaire

    inscriptionForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // 1.Récupérer les valeurs
        let nom = document.getElementById('nom').value;
        let email = document.getElementById('email').value;
        let mdp = document.getElementById('pwd').value;
        let genre = document.querySelector('input[name=genre]:checked').value;
        // Récupérer valeur du checkbox
        let interets = [];
        let interetsChecked = document.querySelectorAll('input[name=interets]:checked');
        console.log(interetsChecked);
        for (let i = 0; i < interetsChecked.length; i++) {
            interets.push(interetsChecked[i].value);
        };
        
        console.log(interets);
        let pays = document.getElementById('pays').value;
        console.log(nom, email, mdp, genre, interets, pays);
        
        // 2.Regrouper les valeurs dans un objet
        let utilisateur = new Utilisateur(nom, email, mdp, genre, interets, pays);

        // 3.Sauvegarder dans LS
        const utilsateurs = JSON.parse(localStorage.getItem("listeUtilisateur")) || [];
        utilsateurs.push(utilisateur);
        localStorage.setItem("listeUtilisateur" , JSON.stringify(utilsateurs));

        inscriptionForm.reset();
        alert("compte crée avecv succés!");
    })


}

function seConnecter() {
    const connexionForm = document.getElementById("connexion-form");
    if (!connexionForm) return;

    connexionForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // 1.Récupérer les valeurs
        let emailCnx = document.getElementById("email").value;
        let mdpCnx = document.getElementById("password").value;

        // 2.Récupérer la liste des utilisateurs
        const utilisateurs = JSON.parse(localStorage.getItem("listeUtilisateur")) || [];

        // Rerchercher l'utilisaterun dns LS
        for (let i = 0; i < utilisateurs.length; i++) {
            if (utilisateurs[i].email === emailCnx  && utilisateurs[i].mdp === mdpCnx) {
                window.location.href = "../index.html";
                return;
            }
        };
        alert("Email ou Mot de passe incorrect!");

        // Recherhce avec find
        // const utilisateurConnecte = utilisateurs.find((utilisateur)=>{
        //     return utilisateur.email === emailCnx && utilisateur.mdp === mdpCnx;
        // });

        // if(utilisateurConnecte) {
            // redirection
            // window.location.href = "../index.html";
        // } else {
            // msg d'erreur
            //  alert("Email ou Mot de passe incorrect!");
        // }   


    })
}



sIsncrire();
seConnecter();