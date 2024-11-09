// Get elements for modal
const modal = document.getElementById("redirectModal");
const btn = document.getElementById("cta-button");
const closeBtn = document.getElementsByClassName("close-btn")[0];
const continueBtn = document.getElementById("continueBtn");

// Show the modal when the "Learn More" button is clicked
btn.onclick = function() {
    modal.style.display = "block";
};

// Close the modal when the "X" is clicked
closeBtn.onclick = function() {
    modal.style.display = "none";
};

// Redirect user when the "Continue" button is clicked in the modal
continueBtn.onclick = function() {
    window.location.href = "https://www.example.com";  // Replace with your target URL
};

// Close modal if user clicks anywhere outside of modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
