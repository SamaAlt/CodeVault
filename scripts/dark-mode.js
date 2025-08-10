// scripts/dark-mode.js
document.addEventListener('DOMContentLoaded', () => {
    // Tab functionality
    const tabs = document.querySelectorAll('.tab');
    const codeContents = document.querySelectorAll('.code-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and content
            tabs.forEach(t => t.classList.remove('active'));
            codeContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            tab.classList.add('active');
            const tabName = tab.getAttribute('data-tab');
            document.querySelector(`.${tabName}-code`).classList.add('active');
        });
    });
    
    // Theme toggle functionality
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
        status.textContent = localStorage.getItem('theme') === 'light' ? 'Light' : 'Dark';
    }
    
    // Console message specific to this feature
    console.log('%cDark/Light Mode Toggle Loaded', 'color: #9d50bb; font-weight: bold;');
});
