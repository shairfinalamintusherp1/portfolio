// Example for smooth scroll behavior and animations

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.animate-on-scroll');

    function onScroll() {
        elements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                element.classList.add('is-visible');
            }
        });
    }

    window.addEventListener('scroll', onScroll);
    onScroll(); // Initial check
});
