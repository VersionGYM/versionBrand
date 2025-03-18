// Fonction pour ajuster automatiquement la hauteur du textarea
function autoResizeTextarea() {
    const textarea = document.getElementById("message");

    if (textarea) {
        textarea.style.height = "auto";
        textarea.style.height = `${textarea.scrollHeight}px`;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const textarea = document.getElementById("message");
    if (textarea) {
        textarea.addEventListener("input", autoResizeTextarea);
        window.addEventListener("load", autoResizeTextarea);
    }

    // Animation de la soumission du formulaire
    const form = document.querySelector(".contact-form");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault(); // Empêcher l'envoi réel du formulaire
            alert("Votre message a été envoyé avec succès !");
            form.reset(); // Réinitialiser le formulaire
        });
    }

    // Création du popup du logo
    const logoPopup = document.createElement("div");
    logoPopup.classList.add("logo-popup");
    logoPopup.innerHTML = `<img src="logo.png" alt="Logo">`;
    document.body.appendChild(logoPopup);

    const logoButton = document.querySelector(".logo h1"); // Sélectionner le texte "Version" au lieu de chercher un lien

    if (logoButton) {
        logoButton.addEventListener("click", function (e) {
            e.preventDefault(); // 🔥 Empêcher la redirection vers index.html
            logoPopup.classList.toggle("show"); // Afficher/Masquer le popup
        });
    }

    // Fermer le logo en cliquant en dehors de l'image
    document.addEventListener("click", function (event) {
        if (!logoPopup.contains(event.target) && event.target !== logoButton) {
            logoPopup.classList.remove("show");
        }
    });
});
