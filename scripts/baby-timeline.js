// Timeline data for baby photos
const timelineData = [
    {
        date: "2024-12-13",
        ageInDays: 0,
        location: "Szpital w Warszawie",
        title: "Pierwsze chwile na świecie",
        imagePath: "images/jozef-newborn.jpg"
    },
    {
        date: "2024-12-25",
        ageInDays: 12,
        location: "Dom rodzinny",
        title: "Pierwsze Święta Bożego Narodzenia",
        imagePath: "images/jozef-christmas.jpg"
    },
    {
        date: "2025-01-01",
        ageInDays: 19,
        location: "Dom rodzinny", 
        title: "Nowy Rok z maluszkiem",
        imagePath: "images/jozef-newyear.jpg"
    },
    {
        date: "2025-02-14",
        ageInDays: 63,
        location: "Park Łazienkowski",
        title: "Pierwszy spacer w parku",
        imagePath: "images/jozef-park-walk.jpg"
    },
    {
        date: "2025-07-15",
        ageInDays: 214,
        location: "Dom rodzinny",
        title: "Przygotowania do chrztu",
        imagePath: "images/jozef-baptism-prep.jpg"
    }
];

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
function generateTimeline() {
    const timelineContainer = document.getElementById('baby-timeline');
    if (!timelineContainer) return;

    const timelineHTML = timelineData.map(item => `
        <div class="timeline-item">
            <div class="timeline-date">
                <span class="date">${formatPolishDate(item.date)}</span>
                <span class="age">${formatAge(item.ageInDays)}</span>
            </div>
            <div class="timeline-content">
                <div class="timeline-image">
                    <img src="${item.imagePath}" 
                         alt="${item.title}" 
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="image-placeholder" style="display: none;">
                        📸
                    </div>
                </div>
                <div class="timeline-text">
                    <h3>${item.title}</h3>
                    <p class="location">📍 ${item.location}</p>
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
