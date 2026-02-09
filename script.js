const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');
const cards = document.querySelectorAll('.card');

searchBtn.addEventListener('click', () => {
    const query = searchInput.value.toLowerCase().trim();

    cards.forEach(card => {
        // Har bir kartochka ichidagi h4 (ism)ni olamiz
        const movieName = card.querySelector('h4').innerText.toLowerCase();

        // Agar qidiruv so'zi ismga mos kelsa ko'rsatamiz, bo'lmasa yashiramiz
        if (movieName.includes(query)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

// Qidiruv maydonida Enter bosilganda ham ishlasin
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchBtn.click();
    }
});
