const API_URL = "http://localhost:3000/panier";

//Ajouter un produit au panier
export async function ajouterAuPanier(produitId){
    return await axios.post(API_URL, {
        produitID:produitId,
        quantite:1
    });
}

// Récupérer le panier
export async function getPanier(){
    const reponse = await axios.get(API_URL);
    return reponse.data;
}