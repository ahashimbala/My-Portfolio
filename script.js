const sideMenu = document.querySelector('#sideMenu');
const menuOverlay = document.querySelector('#menuOverlay');
const themeToggle = document.querySelector('#theme-toggle');

function openMenu() {
    sideMenu.classList.remove('translate-x-full');
    sideMenu.classList.add('translate-x-0');
    if (menuOverlay) {
        menuOverlay.classList.remove('hidden');
    }
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    sideMenu.classList.remove('translate-x-0');
    sideMenu.classList.add('translate-x-full');
    if (menuOverlay) {
        menuOverlay.classList.add('hidden');
    }
    document.body.style.overflow = 'auto';
}

// Theme Switcher
themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');

    if (document.documentElement.classList.contains('dark')) {
        localStorage.theme = 'dark';
    } else {
        localStorage.theme = 'light';
    }
});