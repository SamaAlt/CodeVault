const toggle = document.getElementById('theme-toggle');
const status = document.getElementById('theme-status');

toggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');
        status.textContent = 'Dark';
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        status.textContent = 'Light';
    }
    localStorage.setItem('theme', document.documentElement.getAttribute('data-theme'));
});

// Check for saved theme preference
if (localStorage.getItem('theme')) {
    document.documentElement.setAttribute('data-theme', localStorage.getItem('theme'));
}
