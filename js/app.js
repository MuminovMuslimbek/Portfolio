document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.services-card');

    const observerOptions = {
        root: null,
        threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        observer.observe(card);
    });
});
document.getElementById('find-food-button').addEventListener('click', () => {
    document.getElementById('loader').style.display = 'flex';

    let loadingTime = 0;
    const interval = setInterval(() => {
        loadingTime += 1;
        if (loadingTime >= 5) {
            clearInterval(interval);
            document.getElementById('loader').style.display = 'none';

            document.getElementById('modal').style.display = 'flex';
        }
    }, 1000);
});

// Modalni yopish
document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});