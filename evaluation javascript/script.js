const produits = [
    { id: 1, nom: "Thé Vert Bio", prix: 12.99, image: "https://placehold.co/150" },
    { id: 2, nom: "Café Arabica", prix: 8.50, image: "https://placehold.co/150" },
    { id: 3, nom: "Infusion Menthe", prix: 5.00, image: "https://placehold.co/150" },
    { id: 4, nom: "Chocolat Chaud", prix: 15.00, image: "https://placehold.co/150" }
];

let panier = [];

// AFFICHAGE PRODUITS

function afficherProduits() {
    const container = document.getElementById("produits-container");
    container.innerHTML = "";

    produits.forEach(produit => {
        const carte = document.createElement("div");
        carte.className = "carte-produit";

        const img = document.createElement("img");
        img.src = produit.image;
        img.alt = produit.nom;

        const nom = document.createElement("h3");
        nom.textContent = produit.nom;

        const prix = document.createElement("p");
        prix.textContent = `${produit.prix.toFixed(2)} €`;

        const btn = document.createElement("button");
        btn.textContent = "Ajouter au panier";
        btn.addEventListener("click", () => ajouterAuPanier(produit.id));

        carte.append(img, nom, prix, btn);
        container.appendChild(carte);
    });
}

// PANIER

function ajouterAuPanier(id) {
    const produit = produits.find(p => p.id === id);
    const produitPanier = panier.find(p => p.id === id);

    if (produitPanier) {
        produitPanier.quantite++;
    } else {
        panier.push({ ...produit, quantite: 1 });
    }

    afficherPanier();
}

function supprimerProduit(id) {
    panier = panier.filter(p => p.id !== id);
    afficherPanier();
}

// AFFICHAGE PANIER

function afficherPanier() {
    const liste = document.getElementById("panier-liste");
    liste.innerHTML = "";

    if (panier.length === 0) {
        liste.innerHTML = "<p>Votre panier est vide.</p>";
        mettreAJourTotal();
        return;
    }

    panier.forEach(produit => {
        const ligne = document.createElement("div");
        ligne.className = "ligne-panier";

        ligne.innerHTML = `
            <span>${produit.nom}</span>
            <span>${produit.prix.toFixed(2)} €</span>
            <span>x${produit.quantite}</span>
            <span>${(produit.prix * produit.quantite).toFixed(2)} €</span>
            <button data-id="${produit.id}">❌</button>
        `;

        ligne.querySelector("button").addEventListener("click", () => {
            supprimerProduit(produit.id);
        });

        liste.appendChild(ligne);
    });

    mettreAJourTotal();
}

// TOTAL

function mettreAJourTotal() {
    const total = panier.reduce((sum, p) => sum + p.prix * p.quantite, 0);
    document.getElementById("montant-total").textContent = total.toFixed(2);
}

// COMMANDE

document.getElementById("btn-commander").addEventListener("click", () => {
    const email = document.getElementById("email-client").value.trim();
    const message = document.getElementById("message-feedback");

    message.textContent = "";
    message.className = "";

    if (panier.length === 0) {
        message.textContent = "❌ Votre panier est vide.";
        message.className = "error";
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        message.textContent = "❌ Email invalide.";
        message.className = "error";
        return;
    }

    message.textContent = "✅ Commande validée ! Merci pour votre achat.";
    message.className = "success";

    panier = [];
    afficherPanier();
    document.getElementById("email-client").value = "";
});

afficherProduits();
