const API_URL = "http://localhost:3000/produits";

// fonction pour ajouter un produit
// export async function ajouterProduitAPI(produitObj){

//     const reponse = await fetch(API_URL, {
//         // Action
//         method: "POST",

//         headers: {
//             "Content-Type": "application/json"
//         },

//         body: JSON.stringify(produitObj)
//     });

//     if (!reponse.ok) {
//         throw new Error("Erreur lors de l'ajout du produit");
//     }

//     return await reponse.json();
// }

export async function ajouterProduitAPI(produitObj) {
    const reponse = await axios.post(API_URL, produitObj);
    return reponse.data;
}