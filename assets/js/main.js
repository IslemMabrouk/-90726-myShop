const btnScroll =document.querySelector('.scroll-top');
console.log(btnScroll);
if (btnScroll) {
    btnScroll.addEventListener("click", function () {
        window.scrollTo({
            top:0,
            behavior: "smooth"
        })
    })
};

function afficherProduits() {
    const container = document.querySelector(".products-container");
    console.log(container);

        // Afficher un seul produit
        // let productName = "chemise";
    // let productPrice = 20;
    // let productdescription = "aaaaa";

    // let produit1 = {
    //     nom:"Veste Femme",
    //     description:"description produit1",
    //     prix:20,
    //     imgURL: "assets/images/veste-femme.webp"
    // };

    // Injecter contenu HTML 
    // container.innerHTML = `
    //      <article class="product-card"> 
    //         <h3 class ="titreH3">${produit1.nom}</h3>
    //         <img src=${produit1.imgURL} alt=${produit1.nom}>
    //         <p>${produit1.description}</p>
    //         <p class="prix">Prix : ${produit1.prix} £</p>
    //         <button type="button">Acheter</button>
    //     </article>
    // `

    let produits = JSON.parse(localStorage.getItem("listeProduits")) || [];
    console.log("liste des produits à partir du LS : ",produits);
    // Injecter le contenu avec innerHTML 
    // container.innerHTML = "";
    // produits.forEach((produit)=>{
    //     // Injecter contenu HTML 
    // container.innerHTML += `
    //      <article class="product-card">
    //         <h3 class ="titreH3">${produit.nom}</h3>
    //         <img src=${produit.imgURL} alt=${produit.nom}>
    //         <p>${produit.description}</p>
    //         <p class="prix">Prix : ${produit.prix} £</p>
    //         <button type="button">Acheter</button>
    //     </article>
    // `
    // });


    if (container) {
        // Création de l'élement article
    produits.forEach((produit)=>{
        const article = document.createElement("article"); //<article></article>
        // Ajouter class ="product-card" dans l'élement article
        article.classList.add("product-card"); //<article class="product-card"></article>

        article.innerHTML = `
        <h3 class ="titreH3">${produit.nom}</h3>
        <img src=${produit.imgURL} alt=${produit.nom}>
        <p>${produit.description}</p>
        <p class="prix">Prix : ${produit.prix} £</p>
        <button type="button">Acheter</button>
        `;

        container.appendChild(article);
    })
    }
    

}

afficherProduits();