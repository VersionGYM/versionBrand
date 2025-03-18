// Citation Rotation avec effet de fondu fluide
const quotes = [
    '"Les muscles ne sont pas faits de viande et de sang, mais de volonté et de passion." - Arnold Schwarzenegger',
    '"Le seul mauvais entraînement, c\'est celui que tu n\'as pas fait." - Bruce Lee',
    '"La sueur est de la graisse qui pleure." - Jillian Michaels',
    '"Le succès n\'est pas dans ce que tu accomplis, mais dans la façon dont tu surmontes les échecs." - Arnold Schwarzenegger',
    '"L\'entraînement n\'est pas une option, c\'est une nécessité." - Usain Bolt',
    '"Ne rêve pas de succès, travaille pour l\'atteindre." - Estée Lauder',
    '"Il n\'y a pas de raccourci vers n\'importe où qui en vaille la peine." - Beverly Sills',
    '"Le travail acharné bat le talent quand le talent ne travaille pas dur." - Tim Notke',
    '"Tout ce que tu veux est de l’autre côté de la peur." - Jack Canfield',
    '"Ce n’est pas ce que tu fais, mais la manière dont tu le fais qui fait la différence." - John Wooden',
    '"L\'échec est simplement l\'opportunité de recommencer, cette fois de manière plus intelligente." - Henry Ford',
    '"L\'entraînement, c’est la transformation de la douleur en pouvoir." - Muhammad Ali',
    '"Quand tu penses que tu ne peux plus, c’est à ce moment que tu peux tout accomplir." - David Goggins',
    '"L\'envie d’être meilleur que la veille doit être plus grande que la douleur." - Kobe Bryant',
    '"Ce que tu fais aujourd’hui peut améliorer tous tes lendemains." - Ralph Marston',
    '"They don\'t know me son" - David Goggins',
    '"Light weight baby" - Ronnie Coleman'
];

let currentQuoteIndex = 0;
const quoteElement = document.getElementById("quote");

if (quoteElement) {
    quoteElement.style.transition = "opacity 1s ease-in-out"; // Ajoute une transition fluide
    
    function changeQuote() {
        quoteElement.style.opacity = "0"; // Début du fondu (disparition)

        setTimeout(() => {
            quoteElement.textContent = quotes[currentQuoteIndex];
            quoteElement.style.opacity = "1"; // Réapparition progressive
            currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
        }, 1500); // Attendre 1.5 seconde avant d'afficher la nouvelle citation
    }

    // Initialiser la première citation et démarrer l'intervalle
    changeQuote();
    setInterval(changeQuote, 7000); // Changement toutes les 7 secondes
}

document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector(".logo h1"); // Sélection du titre "Version"
    const popup = document.getElementById("logo-popup"); // Popup du logo

    if (logo && popup) {
        logo.addEventListener("click", (e) => {
            e.stopPropagation(); // Empêche le clic d'atteindre `document`
            popup.classList.toggle("show"); // Alterne entre affiché et caché
        });

        document.addEventListener("click", (event) => {
            if (!popup.contains(event.target) && event.target !== logo) {
                popup.classList.remove("show"); // Ferme le popup si on clique ailleurs
            }
        });
    }
});

// Rediriger vers la page de contact lors du clic sur le bouton "Contactez-nous"
const contactButton = document.querySelector(".btn");

if (contactButton) {
    contactButton.addEventListener("click", () => {
        window.location.href = "contact.html"; // Rediriger vers la page de contact
    });
}
