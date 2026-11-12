const API_URL = "http://localhost:3000/produits";

// fonction pour ajouter un produit
async function ajouterProduitAPI(produitObj){

    const reponse = await fetch(API_URL, {
        // Action
        method: "POST",

        headers: {
            "content-Type": "application/json"
        },

        body: JSON.stringify(produitObj)
    });

    if (!reponse.ok) {
        throw new Error("Erreur lors de l'ajout du produit");
    }

    return await reponse.json();
}