const button = document.querySelector("button");

button.addEventListener("click", (event) => {
    event.preventDefault();

    // VALIDATION DU NOM
    const lastName = document.getElementById("nom");
    const errorLastName = lastName.nextElementSibling;

    if (lastName.value.length < 3) {
        errorLastName.textContent = "Le nom doit contenir au moins 3 caractères.";
        errorLastName.style.display = "inline";
        lastName.classList.add("error-input");
    } else {
        errorLastName.textContent = "";
        lastName.classList.remove("error-input");
        lastName.classList.remove("error-input");
    }

    // VALIDATION DU PRÉNOM
    const firstName = document.getElementById("firstname");
    const errorFirstName = firstName.nextElementSibling;

    if (firstName.value.length < 2) {
        errorFirstName.textContent = "Le prénom doit contenir au moins 2 caractères.";
        errorFirstName.style.display = "inline";
        firstName.classList.add("error-input");
    } else {
        errorFirstName.textContent = "";
        firstName.classList.remove("error-input");
        firstName.classList.remove("error-input");
    }

    // VALIDATION DU MAIL
    const email = document.getElementById("Mail");
    const errorEmail = email.nextElementSibling;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email.value)) {
        errorEmail.textContent = "";
        email.classList.remove("error-input");
        email.classList.remove("error-input");
    } else {
        errorEmail.textContent = "Veuillez entrer une adresse e-mail valide.";
        errorEmail.style.display = "inline";
        email.classList.add("error-input");
    }

    // VALIDATION DU MOT DE PASSE
    const motDePasse = document.getElementById("password");
    const errorMotDePasse = motDePasse.nextElementSibling;

    const motDePasseRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (motDePasseRegex.test(motDePasse.value)) {
        errorMotDePasse.textContent = "";
        motDePasse.classList.remove("error-input");
        motDePasse.classList.remove("error-input");
    } else {
        errorMotDePasse.textContent =
            "Le mot de passe doit contenir 8 caractères, une majuscule, une minuscule et un chiffre.";
        errorMotDePasse.style.display = "inline";
        motDePasse.classList.add("error-input");
    }

    // VALIDATION DE L'AGE
    const age = document.getElementById("age");
    const errorAge = age.nextElementSibling;

    if (age.value < 18 || age.value > 99) {
        errorAge.textContent = "L'âge doit être entre 18 et 99.";
        errorAge.style.display = "inline";
        age.classList.add("error-input");
    } else {
        errorAge.textContent = "";
        age.classList.remove("error-input");
        age.classList.remove("error-input");
    }
});
