document.addEventListener('DOMContentLoaded', function () {
    const languageFiles = {
        en: 'locales/en.json',
        pl: 'locales/pl.json'
    };

    function updateContent(language) {
        fetch(languageFiles[language])
            .then(response => response.json())
            .then(content => {
                document.getElementById('name').textContent = content.name;
                document.getElementById('motto').textContent = content.motto;
                document.querySelector('#bio p').textContent = content.bio;
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
            }).catch(error => console.error('Error loading language file:', error));
    }

    document.getElementById('lang-en').addEventListener('click', function () {
        updateContent('en');
    });

    document.getElementById('lang-pl').addEventListener('click', function () {
        updateContent('pl');
    });

    // Initialize with English content
    updateContent('en');
});
