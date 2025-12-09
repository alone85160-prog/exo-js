let personnes = ["alice", "bob", "claire"];

function afficherNomsMajuscules() {
    let ul = document.getElementById("liste");

    ul.innerHTML = "";

    for (let nom of personnes) {
        let li = document.createElement("li");
        li.textContent = nom.toUpperCase();
        ul.appendChild(li);
    }
}

afficherNomsMajuscules();