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
        let interetsCheked = document.querySelectorAll('input[name=interets]:checked');
        console.log(interetsCheked);
        for (let i = 0; i < interetsCheked.length; i++) {
            interets.push(interetsCheked[i].value);
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

sIsncrire();