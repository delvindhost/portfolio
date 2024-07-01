document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', function () {
        menuToggle.querySelector('.hamburger').classList.toggle('active');
        nav.classList.toggle('active');
    });
});
