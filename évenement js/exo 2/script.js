const bouton = document.getElementById('modifierTexte');
const texte = document.getElementById('texte');
    bouton.addEventListener("click", function() {
    texte.textContent = "Le texte a été modifié avec succès.";
});