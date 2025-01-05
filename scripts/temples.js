// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Update footer content
    const currentYear = document.getElementById('current-year');
    const lastModified = document.getElementById('last-modified');

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    } else {
        console.error('Element with id "current-year" not found.');
    }

    if (lastModified) {
        lastModified.textContent = document.lastModified;
    } else {
        console.error('Element with id "last-modified" not found.');
    }

    // Hamburger menu toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
        });
    } else {
        console.error('Hamburger or nav-menu elements not found.');
    }
});