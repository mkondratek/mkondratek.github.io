// Guest personalization based on URL parameters
// Usage: chrzest-jozef-jan.html?guest=Babciu Mariu&message=Custom message
// or: chrzest-jozef-jan.html?guest=Wujku Tomku (uses default message)

// Function to get URL parameter
function getURLParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Function to personalize thank you message
function personalizeMessage() {
    const guestName = getURLParameter('guest');
    const customMessage = getURLParameter('message');
    const thankYouSection = document.querySelector('.thank-you');
    
    if (!guestName || !thankYouSection) {
        return; // Use default message
    }
    
    // Use custom message if provided, otherwise use default
    const message = customMessage || 
        `Wasza obecność w&nbsp;tym wyjątkowym dniu sprawia, że&nbsp;staje się&nbsp;on jeszcze bardziej znaczący. Józef Jan zostanie otoczony miłością i&nbsp;błogosławieństwem dzięki wszystkim zebranym.`;
    
    const personalizedContent = `
        <h2>Dziękujemy za&nbsp;przybycie, ${guestName}!</h2>
        <p>${message}</p>
        <div class="guest-info">
            <small>💝 Specjalne podziękowania</small>
        </div>
    `;
    
    thankYouSection.innerHTML = personalizedContent;
}

// Initialize personalization when page loads
document.addEventListener('DOMContentLoaded', personalizeMessage);
