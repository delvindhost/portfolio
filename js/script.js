function toggleMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const hamburgers = document.querySelectorAll('.hamburger');

    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');

    hamburgers.forEach(hamburger => {
        hamburger.classList.toggle('active');
    });
}