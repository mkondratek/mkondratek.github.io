document.addEventListener('DOMContentLoaded', function () {
    const languageFiles = {
        en: 'locales/en.json',
        pl: 'locales/pl.json'
    };

    let currentLanguage = 'en';

    function updateContent(language) {
        fetch(languageFiles[language])
            .then(response => response.json())
            .then(content => {
                document.getElementById('name').textContent = content.name;
                document.querySelector('#motto p').textContent = content.motto;
                document.querySelector('#about-me p').textContent = content.aboutMe;
                document.querySelector('#interests h2').textContent = content.interestsHeader;
                document.querySelector('#services h2').textContent = content.servicesHeader;
                document.querySelector('#contact h2').textContent = content.contactHeader;

                const interestsList = document.querySelector('#interests ul');
                interestsList.innerHTML = '';
                content.interests.forEach(interest => {
                    const li = document.createElement('li');
                    li.textContent = interest;
                    interestsList.appendChild(li);
                });

                const servicesList = document.querySelector('#services ul');
                servicesList.innerHTML = '';
                content.services.forEach(service => {
                    const li = document.createElement('li');
                    li.textContent = service;
                    servicesList.appendChild(li);
                });

                // Update the flag icon and text
                const flagIcon = document.getElementById('flag-icon');
                const langName = document.getElementById('lang-name');
                if (language === 'en') {
                    flagIcon.textContent = '🇵🇱';
                    langName.textContent = ' Polski';
                } else {
                    flagIcon.textContent = '🇬🇧';
                    langName.textContent = ' English';
                }
            })
            .catch(error => console.error('Error loading language file:', error));
    }

    document.getElementById('lang-toggle').addEventListener('click', function (event) {
        event.preventDefault();
        currentLanguage = currentLanguage === 'en' ? 'pl' : 'en';
        updateContent(currentLanguage);
    });

    // Initialize with English content
    updateContent(currentLanguage);
});
