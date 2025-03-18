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

document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector(".logo h1");
    const popup = document.getElementById("logo-popup");

    logo.addEventListener("click", () => {
        popup.classList.add("show");
    });

    popup.addEventListener("click", (event) => {
        if (event.target === popup) {
            popup.classList.remove("show");
        }
    });
});
