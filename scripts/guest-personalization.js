// Guest personalization based on URL parameters
// Usage: pages/chrzest-jozef-jan.html?guest=13 (uses guest ID from guests.json)

// Function to get URL parameter
function getURLParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Function to load guest data
async function loadGuestData() {
    try {
        const response = await fetch('../data/guests.json');
        return await response.json();
    } catch (error) {
        console.error('Error loading guest data:', error);
        return [];
    }
}

// Function to personalize thank you message
async function personalizeMessage() {
    const guestId = getURLParameter('guest');
    const thankYouSection = document.querySelector('.thank-you');
    
    if (!guestId || !thankYouSection) {
        return; // Use default message
    }
    
    const guests = await loadGuestData();
    const guest = guests.find(g => g.id === parseInt(guestId));
    
    if (!guest) {
        return; // Use default message if guest not found
    }
    
    const personalizedContent = `
        <h2>Dziękujemy za&nbsp;przybycie, ${guest.message_name}!</h2>
        <p>${guest.message}</p>
        <div class="guest-info">
            <small>💝 Specjalne podziękowania</small>
        </div>
    `;
    
    thankYouSection.innerHTML = personalizedContent;
}

// Initialize personalization when page loads
document.addEventListener('DOMContentLoaded', personalizeMessage);
