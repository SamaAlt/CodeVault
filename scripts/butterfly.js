document.addEventListener('DOMContentLoaded', () => {
    // Tab functionality (same as shimmer.js)
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
    
    // Restart flight animation
    document.getElementById('restart-flight').addEventListener('click', () => {
        const butterfly = document.querySelector('.butterfly');
        butterfly.style.animation = 'none';
        void butterfly.offsetWidth; // Trigger reflow
        butterfly.style.animation = 'flight 15s infinite ease-in-out';
    });
    
    // Console message specific to this feature
    console.log('%cButterfly Animation Loaded', 'color: #6e48aa; font-weight: bold;');
});