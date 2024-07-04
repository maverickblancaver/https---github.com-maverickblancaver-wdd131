document.addEventListener('DOMContentLoaded', function () {
    const yearElement = document.getElementById('year');
    const lastModifiedElement = document.getElementById('last-modified');

    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;

    const lastModified = document.lastModified;
    lastModifiedElement.textContent = lastModified;

    const menuButton = document.getElementById('menu-button');
    const menu = document.getElementById('menu');

    menuButton.addEventListener('click', function () {
        menu.classList.toggle('visible');
        menuButton.textContent = menu.classList.contains('visible') ? 'X' : '☰';
    });
});
