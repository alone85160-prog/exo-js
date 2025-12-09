{

    let produits = [
        { nom: "Stylo", prix: 1.5 },
        { nom: "Cahier", prix: 3 },
        { nom: "Gomme", prix: 0.8 },
    ];


    const table = document.createElement('table');
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdPrice = document.createElement('td')

    tdName.textContent = "Nom";
    tdPrice.textContent = "Prix";

    tr.appendChild(tdName)
    tr.appendChild(tdPrice)
    table.appendChild(tr)


    for (let produit of produits) {
        // créer un tr 
        // créer un td qui contient le nom du produit
        // créer un td qui contient le prix du produit
        // ajouter les deux td dans le tr
        // ajouter le tr dans table 

        const tr = document.createElement('tr');
        const tdName = document.createElement('td');
        const tdPrice = document.createElement('td');

        tdName.textContent = produit.nom;
        tdPrice.textContent = produit.prix;

        tr.appendChild(tdName)
        tr.appendChild(tdPrice)

        table.appendChild(tr)

        document.body.appendChild(table)
    }

}