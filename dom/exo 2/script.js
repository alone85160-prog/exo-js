
const conteneur = document.getElementById("conteneur");
const ul = document.createElement("ul");
    
const items = [
    "Apprendre JavaScript",
    "Pratiquer la manipulation du DOM",
    "Créer un projet"
];

items.forEach(texte => {
    const li = document.createElement("li");
    li.textContent = texte;
    ul.append(li);
});

conteneur.append(ul);