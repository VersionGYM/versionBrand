// Function to auto-resize the textarea
function autoResizeTextarea() {
    const textarea = document.getElementById("message");

    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
}

const textarea = document.getElementById("message");
if (textarea) {
    textarea.addEventListener("input", autoResizeTextarea);
    window.addEventListener('load', autoResizeTextarea);
}

// Handle form submission
const form = document.querySelector('.contact-form');
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Ton message a été envoyé !');
        form.reset();
    });
}
// Fonction de gestion de la soumission du formulaire
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('.contact-form'); // Formulaire de contact

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault(); // Empêche l'envoi du formulaire pour montrer l'alerte

            // Affiche un message de confirmation
            alert("Votre message a été envoyé avec succès !");
            
            // Réinitialise le formulaire après l'envoi
            form.reset();
        });
    }
});

// Fonction pour faire apparaître le logo lorsqu'on clique sur le texte "Version"
document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector(".logo h1"); // Récupère le titre "Version"
    const popup = document.getElementById("logo-popup"); // Récupère la pop-up du logo

    // Affiche ou cache le logo lorsque le titre "Version" est cliqué
    logo.addEventListener("click", () => {
        popup.classList.toggle("show");  // Bascule la visibilité du logo
    });

    // Ferme le logo lorsqu'on clique dessus
    popup.addEventListener("click", () => {
        popup.classList.remove("show");
    });
});
