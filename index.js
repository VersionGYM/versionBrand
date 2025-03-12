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
textarea.addEventListener("input", autoResizeTextarea);

// Call the function initially to set the height correctly when page loads
window.addEventListener('load', autoResizeTextarea);
