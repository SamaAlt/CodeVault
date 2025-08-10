document.addEventListener('DOMContentLoaded', () => {
    // Tab functionality
    const tabs = document.querySelectorAll('.tab');
    const codeContents = document.querySelectorAll('.code-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            codeContents.forEach(c => c.classList.remove('active'));
            tab.classList.add('active');
            const tabName = tab.getAttribute('data-tab');
            document.querySelector(`.${tabName}-code`).classList.add('active');
        });
    });
    
    // Theme functionality
    const toggle = document.getElementById('theme-toggle');
    const status = document.getElementById('theme-status');

    function initTheme() {
        const savedTheme = localStorage.getItem('theme');
        const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
        
        if (savedTheme) {
            document.documentElement.setAttribute('data-theme', savedTheme);
            status.textContent = savedTheme.charAt(0).toUpperCase() + savedTheme.slice(1);
        } else if (prefersLight) {
            document.documentElement.setAttribute('data-theme', 'light');
            status.textContent = 'Light';
        }
    }

    toggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        status.textContent = newTheme.charAt(0).toUpperCase() + newTheme.slice(1);
        localStorage.setItem('theme', newTheme);
    });

    initTheme();

    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', e => {
        if (!localStorage.getItem('theme')) {
            const newTheme = e.matches ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            status.textContent = newTheme.charAt(0).toUpperCase() + newTheme.slice(1);
        }
    });
    
    console.log('%cDark/Light Mode Toggle Loaded', 'color: #9d50bb; font-weight: bold;');
});
