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
];

let currentQuoteIndex = 0;
const quoteElement = document.getElementById("quote");

function changeQuote() {
    quoteElement.textContent = quotes[currentQuoteIndex];
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length; // Loop back to the first quote
}

// Change the quote every 5 seconds
setInterval(changeQuote, 5000);

// Initialize the first quote
changeQuote();
