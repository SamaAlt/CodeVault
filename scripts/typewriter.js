// typewriter.js
document.addEventListener('DOMContentLoaded', () => {
    // Tab functionality (consistent with other features)
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
    
    // Typewriter functionality
    function startTypewriter(element) {
        const text = element.getAttribute('data-text');
        element.textContent = '';
        element.classList.remove('complete');
        
        let i = 0;
        const speed = 100; // typing speed in ms
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                element.classList.add('complete');
            }
        }
        
        type();
    }
    
    // Initialize all typewriter elements
    const typewriterElements = document.querySelectorAll('.typewriter');
    typewriterElements.forEach(el => {
        startTypewriter(el);
    });
    
    // Restart typing animation
    document.getElementById('restart-typing').addEventListener('click', () => {
        typewriterElements.forEach(el => {
            startTypewriter(el);
        });
    });
    
    // Console message specific to this feature
    console.log('%cTypewriter Effect Loaded', 'color: #6e48aa; font-weight: bold;');
});
