// Liste des citations
const quotes = [
    '"Les muscles ne sont pas faits de viande et de sang, mais de volonté et de passion." - Arnold Schwarzenegger',
    '"La douleur que vous ressentez aujourd\'hui est la force que vous ressentirez demain." - Unknown',
    '"Le succès n\'est pas final, l\'échec n\'est pas fatal : c\'est le courage de continuer qui compte." - Winston Churchill',
    '"L\'entraînement est un marathon, pas un sprint." - Unknown',
    '"Ne laissez pas la peur de l\'échec vous empêcher de réaliser vos rêves." - Unknown'
];

// Fonction pour changer la citation
let currentQuoteIndex = 0;
function changeQuote() {
    const quoteElement = document.getElementById('quote');
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    quoteElement.textContent = quotes[currentQuoteIndex];
}

// Changer la citation toutes les 5 secondes
setInterval(changeQuote, 5000);

// Initialiser avec la première citation
window.onload = changeQuote;

// Function to auto-resize the textarea
function autoResizeTextarea() {
    const textarea = document.getElementById("message");

    // Reset the textarea height to 'auto' to shrink if text is deleted
    textarea.style.height = "auto";
    
    // Set the height to the scrollHeight, which is the full height of the content
    textarea.style.height = `${textarea.scrollHeight}px`; // Correction de syntaxe
}

// Attach the function to the textarea input event to trigger resizing
const textarea = document.getElementById("message");
textarea.addEventListener("input", autoResizeTextarea);

// Call the function initially to set the height correctly when page loads
window.addEventListener('load', autoResizeTextarea);

// Handle form submission
const form = document.querySelector('.contact-form');
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission for demo purposes
    alert('Ton message a été envoyé !'); // Message modifié pour correspondre au ton québécois
    form.reset();  // Reset the form after successful submission
});
