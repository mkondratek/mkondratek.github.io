// Random blessings for baptism page
const blessings = [
    {
        text: "Dopuśćcie dzieci i nie przeszkadzajcie im przyjść do Mnie; do takich bowiem należy królestwo niebieskie.",
        reference: "Mt 19,14"
    },
    {
        text: "Idźcie więc i nauczajcie wszystkie narody, udzielając im chrztu w imię Ojca i Syna, i Ducha Świętego. Uczcie je zachowywać wszystko, co wam przykazałem. A oto Ja jestem z wami przez wszystkie dni, aż do skończenia świata.",
        reference: "Mt 28,19-20"
    },
    {
        text: "Dlatego rodzina jest pierwszą szkołą cnót społecznych, potrzebnych wszelkim społecznościom.",
        reference: "Jan Paweł II, Familiaris consortio"
    },
    {
        text: "Boże, Ty w&nbsp;niewysłowionej Opatrzności wybrałeś świętego Józefa na&nbsp;Oblubieńca Najświętszej Rodzicielki Twojego Syna, spraw, abyśmy oddając mu na&nbsp;ziemi cześć jako opiekunowi, zasłużyli na&nbsp;jego orędownictwo w&nbsp;niebie.",
        reference: "Litania do św. Józefa"
    },
    {
        text: "Zbudziwszy się&nbsp;ze&nbsp;snu, Józef uczynił tak, jak mu polecił anioł Pański",
        reference: "Mt 1,24"
    }, 
    {
        text: "Ite ad Joseph.",
    }
];

// Function to display a random blessing
function displayRandomBlessing() {
    const randomIndex = Math.floor(Math.random() * blessings.length);
    const blessing = blessings[randomIndex];
    
    const blessingContent = document.getElementById('blessing-content');
    if (blessingContent) {
        blessingContent.innerHTML = `
            <p><em>${blessing.text}</em></p>
            ${blessing.reference ? `<p class="bible-ref">${blessing.reference}</p>` : ''}
        `;
    }
}

// Display blessing when page loads
document.addEventListener('DOMContentLoaded', displayRandomBlessing);

// Optional: Allow clicking to get a new random blessing
document.addEventListener('DOMContentLoaded', function() {
    const blessingSection = document.querySelector('.blessing');
    if (blessingSection) {
        blessingSection.style.cursor = 'pointer';
        blessingSection.title = 'Kliknij, aby zobaczyć inne błogosławieństwo';
        blessingSection.addEventListener('click', displayRandomBlessing);
    }
});
