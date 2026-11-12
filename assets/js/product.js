class Produit {
    constructor(nomProduit, descriptionProduit, prixProduit, imgURLProduit){
        this.nom = nomProduit;
        this.description = descriptionProduit;
        this.prix = prixProduit,
        this.imgURL = imgURLProduit;
    }
}
// Fonction pour ajouter un produit
function ajouterProduit() {
    const form = document.getElementById('formProduct');

    if (form) {
        form.addEventListener("submit", async function (event) {
        event.preventDefault(); //Annuler le rechargement automatique de la page

        // 1.Récupérer les valeurs du formulaire
        let var1 = document.getElementById('nom').value;
        let var2 = document.getElementById('descirption').value;
        let var3 = document.getElementById('prix').value;
        let var4 =document.getElementById('imgURL').value;

        // 2.Regrouper les valeurs du formulaire dans un objet
        let produit = new Produit(var1, var2, var3, var4);
        // constructor(var1="Prod1", "description du produit 1", 20, "img"){
        //     this.nom = "Prod1";
        //     this.description = "description du produit 1";
        //     this.prix = 20,
        //     this.imgURL = "img";
        // }
        
        // 3.Sauvegarder dans localstorage
        // const produits = JSON.parse(localStorage.getItem("listeProduits")) || [];
        // produits.push(produit);
        // localStorage.setItem("listeProduits", JSON.stringify(produits));

        // Appel du service
        try {
            const nouveauProduit = await ajouterProduitAPI(produit);
            console.log(nouveauProduit);

            form.reset();
            alert("Produit ajouté !");
            
        } catch (error) {
            console.log(error);
            alert("Erreur lors de l'ajout du produit !")
        }

    })
    }
}

ajouterProduit();
