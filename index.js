// Function to auto-resize the textarea
function autoResizeTextarea() {
    const textarea = document.getElementById("message");
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
}

const textarea = document.getElementById("message");
textarea.addEventListener("input", autoResizeTextarea);
window.addEventListener('load', autoResizeTextarea);

// Handle form submission
const form = document.querySelector('.contact-form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Ton message a été envoyé !');
    form.reset();
});

// Citation Rotation (every 5 seconds)
const quotes = [
    '"Les muscles ne sont pas faits de viande et de sang, mais de volonté et de passion." - Arnold Schwarzenegger',
    '"Le seul mauvais entraînement, c\'est celui que tu n\'as pas fait." - Anonyme',
    '"La sueur est de la graisse qui pleure." - Anonyme',
    '"Le succès n\'est pas dans ce que tu accomplis, mais dans la façon dont tu surmontes les échecs." - Arnold Schwarzenegger',
    '"L\'entraînement n\'est pas une option, c\'est une nécessité." - Anonyme',
    '"Ne rêve pas de succès, travaille pour l\'atteindre." - Anonyme',
];

let currentQuoteIndex = 0;
const quoteElement = document.getElementById("quote");

function changeQuote() {
    quoteElement.textContent = quotes[currentQuoteIndex];
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
}

setInterval(changeQuote, 7000);
changeQuote();
