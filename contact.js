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

    const logoButton = document.querySelector(".logo h1");

    if (logoButton) {
        logoButton.addEventListener("click", function (e) {
            e.preventDefault(); // Empêcher la redirection éventuelle
            logoPopup.classList.add("show");
        });
    }

    // Fermer le logo en cliquant en dehors de l'image
    logoPopup.addEventListener("click", function (event) {
        if (event.target === logoPopup) {
            logoPopup.classList.remove("show");
        }
    });

    // Vérifier que les interactions restent fonctionnelles après fermeture du logo
    document.addEventListener("click", function (event) {
        if (!logoPopup.contains(event.target) && event.target !== logoButton) {
            logoPopup.classList.remove("show");
        }
    });
});
