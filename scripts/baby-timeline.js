// Function to load timeline data
async function loadTimelineData() {
    try {
        const response = await fetch('../data/timeline.json');
        return await response.json();
    } catch (error) {
        console.error('Error loading timeline data:', error);
        return [];
    }
}

// Function to calculate age display
function formatAge(days) {
    if (days < 30) {
        return `${days} ${days === 1 ? 'dzień' : days < 5 ? 'dni' : 'dni'}`;
    }
    const months = Math.floor(days / 30);
    const remainingDays = days % 30;
    
    let ageString = `${months} ${months === 1 ? 'miesiąc' : months < 5 ? 'miesiące' : 'miesięcy'}`;
    if (remainingDays > 0) {
        ageString += ` i ${remainingDays} ${remainingDays === 1 ? 'dzień' : remainingDays < 5 ? 'dni' : 'dni'}`;
    }
    return ageString;
}

// Function to format date in Polish
function formatPolishDate(dateString) {
    const date = new Date(dateString);
    const months = [
        'stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca',
        'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia'
    ];
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

// Function to generate timeline HTML
async function generateTimeline() {
    const timelineContainer = document.getElementById('baby-timeline');
    if (!timelineContainer) return;

    const timelineData = await loadTimelineData();
    if (!timelineData.length) return;

    const timelineHTML = timelineData.map(item => `
        <div class="timeline-item${item.hidden ? ' timeline-hidden' : ''}">
            <div class="timeline-date">
                <span class="date">${item.hidden ? '' : formatPolishDate(item.date)}</span>
                <span class="age">${item.hidden ? '' : formatAge(item.ageInDays)}</span>
            </div>
            <div class="timeline-content">
                <div class="timeline-image">
                    ${item.hidden ? '' : `<img src="${item.imagePath}" 
                         alt="${item.title}" 
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="image-placeholder" style="display: none;">
                        📸
                    </div>`}
                </div>
                <div class="timeline-text" data-date="${item.hidden ? '' : formatPolishDate(item.date)}" data-age="${item.hidden ? '' : formatAge(item.ageInDays)}">
                    ${item.hidden ? '' : `<h3>${item.title}</h3>
                    <p class="location">📍 ${item.location}</p>`}
                </div>
            </div>
        </div>
    `).join('');

    timelineContainer.innerHTML = `
        <h2>Pierwsze miesiące życia Józefa Jana</h2>
        <div class="timeline">
            ${timelineHTML}
        </div>
    `;
}

// Initialize timeline when page loads
document.addEventListener('DOMContentLoaded', generateTimeline);
