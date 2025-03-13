// Function to auto-resize the textarea
function autoResizeTextarea() {
    const textarea = document.getElementById("message");

    // Reset the textarea height to 'auto' to shrink if text is deleted
    textarea.style.height = "auto";
    
    // Set the height to the scrollHeight, which is the full height of the content
    textarea.style.height = `${textarea.scrollHeight}px`;
}

// Attach the function to the textarea input event to trigger resizing
const textarea = document.getElementById("message");
if (textarea) {
    textarea.addEventListener("input", autoResizeTextarea);
    window.addEventListener('load', autoResizeTextarea);
}

// Handle form submission
const form = document.querySelector('.contact-form');
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form submission for demo purposes
        alert('Ton message a été envoyé !');
        form.reset();
    });
}

// Citation Rotation avec effet de fondu fluide
const quotes = [
    '"Les muscles ne sont pas faits de viande et de sang, mais de volonté et de passion." - Arnold Schwarzenegger',
    '"Le seul mauvais entraînement, c\'est celui que tu n\'as pas fait." - Anonyme',
    '"La sueur est de la graisse qui pleure." - Anonyme',
    '"Le succès n\'est pas dans ce que tu accomplis, mais dans la façon dont tu surmontes les échecs." - Arnold Schwarzenegger',
    '"L\'entraînement n\'est pas une option, c\'est une nécessité." - Anonyme',
    '"Ne rêve pas de succès, travaille pour l\'atteindre." - Anonyme',
    '"Il n\'y a pas de raccourci vers n\'importe où qui en vaille la peine." - Beverly Sills',
    '"Le travail acharné bat le talent quand le talent ne travaille pas dur." - Tim Notke',
    '"Tout ce que tu veux est de l’autre côté de la peur." - Jack Canfield',
    '"Ce n’est pas ce que tu fais, mais la manière dont tu le fais qui fait la différence." - Anonyme',
    '"L\'échec est simplement l\'opportunité de recommencer, cette fois de manière plus intelligente." - Henry Ford',
    '"L\'entraînement, c’est la transformation de la douleur en pouvoir." - Anonyme',
    '"Quand tu penses que tu ne peux plus, c’est à ce moment que tu peux tout accomplir." - Anonyme',
    '"L\'envie d’être meilleur que la veille doit être plus grande que la douleur." - Anonyme',
    '"Ce que tu fais aujourd’hui peut améliorer tous tes lendemains." - Ralph Marston'
];

let currentQuoteIndex = 0;
const quoteElement = document.getElementById("quote");

if (quoteElement) {
    function changeQuote() {
        quoteElement.style.opacity = "0"; // Début du fondu (disparition)

        setTimeout(() => {
            quoteElement.textContent = quotes[currentQuoteIndex];
            quoteElement.style.opacity = "1"; // Réapparition progressive
            currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
        }, 1000); // Attendre 1 seconde avant d'afficher la nouvelle citation
    }

    // Initialiser la première citation et démarrer l'intervalle
    changeQuote();
    setInterval(changeQuote, 7000); // Changement toutes les 5 secondes
}
