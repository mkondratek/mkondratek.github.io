// Random blessings for baptism page
const blessings = [
    {
        text: "„Pozostawcie dzieci i&nbsp;nie przeszkadzajcie im przyjść do&nbsp;Mnie,<br>albowiem do&nbsp;takich należy królestwo niebieskie."",
        reference: "Mt 19,14"
    },
    {
        text: "„A wy będziecie mi świadkami w&nbsp;Jerozolimie i&nbsp;w&nbsp;całej Judei, i&nbsp;w&nbsp;Samarii, i&nbsp;aż po&nbsp;krańce ziemi."",
        reference: "Dz 1,8"
    },
    {
        text: "„Chrzcząc ich w&nbsp;imię Ojca i&nbsp;Syna, i&nbsp;Ducha Świętego, ucząc ich zachowywać wszystko, co&nbsp;wam przykazałem."",
        reference: "Mt 28,19-20"
    },
    {
        text: "„Rodzina jest pierwszą szkołą cnót społecznych, których potrzebuje każde społeczeństwo."",
        reference: "Jan Paweł II"
    },
    {
        text: "„Miłość rodzinna jest źródłem i&nbsp;zarazem duszą społeczności, narodu i&nbsp;państwa."",
        reference: "Jan Paweł II"
    },
    {
        text: "„Wiara nie&nbsp;jest prywatną sprawą. Ona ma&nbsp;wymiar społeczny i&nbsp;wyraża się&nbsp;we&nbsp;wspólnocie."",
        reference: "Benedykt XVI"
    },
    {
        text: "„W sakramencie chrztu otrzymujemy nowe narodzenie, które pozwala nam uczestniczyć w&nbsp;życiu samego Boga."",
        reference: "Benedykt XVI"
    },
    {
        text: "„Boże, Ty w&nbsp;niewysłowionej Opatrzności wybrałeś świętego Józefa na&nbsp;Oblubieńca Najświętszej Rodzicielki Twojego Syna, spraw, abyśmy oddając mu na&nbsp;ziemi cześć jako opiekunowi, zasłużyli na&nbsp;jego orędownictwo w&nbsp;niebie. Przez Chrystusa, Pana naszego. Amen."",
        reference: "Litania do św. Józefa"
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
            <p class="bible-ref">${blessing.reference}</p>
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
