const produits = [
    { id: 1, nom: "Thé Vert Bio", prix: 12.99, image: "https://placehold.co/150" },
    { id: 2, nom: "Café Arabica", prix: 8.50, image: "https://placehold.co/150" },
    { id: 3, nom: "Infusion Menthe", prix: 5.00, image: "https://placehold.co/150" },
    { id: 4, nom: "Chocolat Chaud", prix: 15.00, image: "https://placehold.co/150", }
];


let panier = [];
const listPanier = document.getElementById('panier-liste')


function ajouterDansLePanier(produit) {
    const produitExistant = panier.find(function (item) {
        if (produit.id === item.id) {
            return true;
        }
    })

    if (!produitExistant) {
        const productToAdd = {
            ...produit,
            quantite: 1
        }
        panier.push(productToAdd)

    }
    else {
        produitExistant.quantite++
    }
    afficherDansLePanier();
}
function afficherDansLePanier() {
    listPanier.textContent = "";

    for (let produit of panier) {

        const card = document.createElement("div");

        const nom = document.createElement("h3");
        nom.textContent = produit.nom;

        const prix = document.createElement("p");
        prix.textContent = produit.prix + "€";

        const quantite = document.createElement("p");
        quantite.textContent = produit.quantite;

        card.appendChild(nom);
        card.appendChild(prix);
        card.appendChild(quantite);

        listPanier.appendChild(card);
    }
}

afficherDansLePanier();



function afficherProduits() {
    for (let produit of produits) {
        const card = document.createElement("div");
        card.className = "produit-card";
        const prix = document.createElement("p");
        prix.textContent = produit.prix;
        const produitsContainer = document.getElementById('produits-container');
        // Je declare ma variable img et crée un elements html pour l'image de la carte
        const img = document.createElement('img');
        img.src = produit.image;
        img.alt = produit.nom;
        // Je declare ma variable nom et crée un elements html pour le texte 
        const nom = document.createElement('h3');
        nom.textContent = produit.nom;
        // Je declare ma variable btn et crée un elements html pour le boutton 
        const btn = document.createElement("button");
        btn.textContent = "Ajouter au panier";
        btn.addEventListener("click", () => ajouterDansLePanier(produit))
        // J'ajoute mes elements a ma carte 
        card.appendChild(img);
        card.appendChild(nom);
        card.appendChild(prix);
        card.appendChild(btn);

        // J'ajoute ma carte a mon conteneur parent 
        produitsContainer.appendChild(card);
    }
}
afficherProduits()

