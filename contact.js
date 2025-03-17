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

document.addEventListener("DOMContentLoaded", () => {
  // Animation de la soumission du formulaire
  const form = document.querySelector(".contact-form");
  form.addEventListener("submit", function(e) {
    e.preventDefault();  // Empêcher le comportement par défaut du formulaire

    // Afficher un message de succès
    alert("Votre message a été envoyé avec succès !");
    form.reset(); // Réinitialiser le formulaire
  });
});

// Fonction de gestion de la soumission du formulaire
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('.contact-form'); // Formulaire de contact

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault(); // Empêche l'envoi du formulaire pour montrer l'alerte
        });
    }
});

// Fonction pour faire apparaître le logo lorsqu'on clique sur le texte "Version"
document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".logo h1");
  const popup = document.getElementById("logo-popup");

  logo.addEventListener("click", () => {
    popup.classList.add("show");  // Affiche le logo à chaque clic sur "Version"
  });

  popup.addEventListener("click", () => {
    popup.classList.remove("show");  // Cache le logo lorsqu'on clique sur le popup
  });
});
