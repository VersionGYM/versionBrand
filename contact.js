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

// Fonction pour faire apparaître le logo lorsqu'on clique sur le texte "Version"
document.addEventListener("DOMContentLoaded", function () {
    const logoPopup = document.createElement("div");
    logoPopup.classList.add("logo-popup");
    logoPopup.innerHTML = `<img src="logo.png" alt="Logo">`;
    document.body.appendChild(logoPopup);

    const logoButton = document.querySelector(".logo h1");

    logoButton.addEventListener("click", function () {
        logoPopup.classList.add("show");
    });

    // Fermer le logo en cliquant en dehors de l'image
    logoPopup.addEventListener("click", function (event) {
        if (event.target === logoPopup) {
            logoPopup.classList.remove("show");
        }
    });
});
