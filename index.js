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

// Citation Rotation (every 5 seconds)
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

// Function to change the quote with a fade effect
function changeQuote() {
    quoteElement.style.opacity = 0;  // Start by fading out the current quote

    setTimeout(() => {
        quoteElement.textContent = quotes[currentQuoteIndex];  // Change the quote after fade-out

        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;  // Loop back to the start when we reach the end

        quoteElement.style.opacity = 1;  // Fade in the new quote
    }, 1000);  // Wait for 1 second (to match the fade-out time) before changing the text
}

// Initialize the first quote
changeQuote();

// Change the quote every 5 seconds
setInterval(changeQuote, 5);
