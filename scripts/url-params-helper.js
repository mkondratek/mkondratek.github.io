// Helper functions to preserve URL parameters across navigation

// Get current URL parameters as a string
function getCurrentParamsString() {
    const params = new URLSearchParams(window.location.search);
    return params.toString() ? '?' + params.toString() : '';
}

// Update navigation links to preserve URL parameters
function updateNavigationLinks() {
    const currentParams = getCurrentParamsString();
    
    // Update main page links
    const mainLinks = document.querySelectorAll('#back-to-main, .to-main');
    mainLinks.forEach(link => {
        link.href = 'chrzest-jozef-jan.html' + currentParams;
    });
    
    // Update family tree links
    const familyLinks = document.querySelectorAll('#to-family, .to-family');
    familyLinks.forEach(link => {
        link.href = 'rodzina-jozef-jan.html' + currentParams;
    });
    
    // Update timeline links
    const timelineLinks = document.querySelectorAll('#to-timeline, .to-timeline');
    timelineLinks.forEach(link => {
        link.href = 'czasopis-jozef-jan.html' + currentParams;
    });
}

// Initialize navigation links when page loads
document.addEventListener('DOMContentLoaded', updateNavigationLinks);

// Export functions for other scripts
window.urlParamsHelper = {
    getCurrentParamsString,
    updateNavigationLinks
};
