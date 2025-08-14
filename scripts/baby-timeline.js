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

// Function to calculate age display using proper date calculation
function formatAge(currentDate) {
    const birthDate = new Date('2024-12-13');
    const targetDate = new Date(currentDate);
    
    // Calculate total days difference
    const diffTime = targetDate - birthDate;
    const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (totalDays === 0) {
        return '0 dni';
    }
    
    if (totalDays < 30) {
        return `${totalDays} ${totalDays === 1 ? 'dzień' : totalDays < 5 ? 'dni' : 'dni'}`;
    }
    
    // Calculate months and remaining days
    let months = 0;
    let checkDate = new Date(birthDate);
    
    // Count full months
    while (true) {
        const nextMonth = new Date(checkDate);
        nextMonth.setMonth(nextMonth.getMonth() + 1);
        
        if (nextMonth <= targetDate) {
            months++;
            checkDate = nextMonth;
        } else {
            break;
        }
    }
    
    // Calculate remaining days
    const remainingDays = Math.floor((targetDate - checkDate) / (1000 * 60 * 60 * 24));
    
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
                <span class="age">${item.hidden ? '' : formatAge(item.date)}</span>
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
                <div class="timeline-text" data-date="${item.hidden ? '' : formatPolishDate(item.date)}" data-age="${item.hidden ? '' : formatAge(item.date)}">
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
