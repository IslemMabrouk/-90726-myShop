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

// Fonction pour ajouter des produits
export async function ajouterProduitAPI(produitObj) {
    const reponse = await axios.post(API_URL, produitObj);
    return reponse.data;
}

// Récupérer les produits
export async function getAllProducts() {
    const reponse = await axios.get(API_URL);
    return reponse.data;
}

// Récupérer un produit par son id
export async function getproductByID(id) {
    const reponse = await axios.get(`${API_URL}/${id}`);   //http://localhost:3000/produits/deRY1DWPAG4
    return reponse.data;
}