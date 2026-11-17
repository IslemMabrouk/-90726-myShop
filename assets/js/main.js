import { ajouterAuPanier, getPanier } from "./services/cartService.js";
import { getAllProducts, getproductByID } from "./services/productService.js";


const btnScroll = document.querySelector('.scroll-top');
console.log(btnScroll);
if (btnScroll) {
    btnScroll.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })
};

async function afficherProduits() {
    const container = document.querySelector(".products-container");
    console.log(container);

    // Appel au service
    try {
        const produits = await getAllProducts();

        if (container) {
            // Création de l'élement article
            produits.forEach((produit) => {
                const article = document.createElement("article"); //<article></article>
                // Ajouter class ="product-card" dans l'élement article
                article.classList.add("product-card"); //<article class="product-card"></article>

                article.innerHTML = `
        <h3 class ="titreH3">${produit.nom}</h3>
        <img src=${produit.imgURL} alt=${produit.nom}>
        <p>${produit.description}</p>
        <p class="prix">Prix : ${produit.prix} £</p>
        <button type="button">Ajouter au panier</button>
        `;

                // Evenement du click
                const btn = article.querySelector("button");

                btn.addEventListener("click", async function () {
                    try {
                        await ajouterAuPanier(produit.id);
                        alert("Produit ajouté au panier!")
                    } catch (error) {
                        console.log(error);
                        alert("Erreur lors de l'ajout au panier")
                    }
                });

                container.appendChild(article);
            });

        }
    } catch (error) {
        console.log("Erreur lors de la récupération des produits : ", error);
        alert("Erreur de récupération des produits");

    }
}

async function afficherpanier() {
    const panierBody = document.getElementById("panier-body");
    console.log(panierBody);

    if (!panierBody) return;

    try {
        // récupération du panier
        const panier = await getPanier();
        console.log(panier);

        for (const elt of panier) {

            // récupérer le produit correspond à son id
            const produit = await getproductByID(elt.produitID);
            console.log(produit);

            const tr = document.createElement("tr");

            tr.innerHTML = `
                 <td>${elt.produitID}</td>
                 <td>${produit.nom}</td>
                 <td>${produit.prix}</td>
                 <td>${elt.quantite}</td>
                 <td>20</td>
                 <td>
                     <button type="button">Supprimer</button>
                 </td>
            `;

            panierBody.appendChild(tr);
        }


        const trSomme = document.createElement("tr");

        trSomme.innerHTML = `
            <td colspan="4">Total</td>
            <td>10</td>
            <td>
                <button type="button">Commander</button>
            </td>
        `;

        panierBody.appendChild(trSomme);



    } catch (error) {

    }

}

afficherProduits();
afficherpanier();