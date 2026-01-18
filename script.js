// Fungsi Scroll Halus ke Section Projek
function scrollToProject() {
    const projectSection = document.getElementById('projects');
    projectSection.scrollIntoView({ behavior: 'smooth' });
}

// Animasi Fade In saat scroll
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.project-card');
    const triggerBottom = window.innerHeight / 5 * 4;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if(cardTop < triggerBottom) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});
