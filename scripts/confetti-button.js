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
    
    // Confetti functionality
    const confettiBtn = document.querySelector('.confetti-btn');

    confettiBtn.addEventListener('click', () => {
        // Create canvas for confetti
        const canvas = document.createElement('canvas');
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100vw';
        canvas.style.height = '100vh';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = '1000';
        document.body.appendChild(canvas);
        
        // Fire confetti
        confetti.create(canvas, {
            resize: true,
            useWorker: true
        })({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 }
        });
        
        // Clean up after animation
        setTimeout(() => {
            document.body.removeChild(canvas);
        }, 3000);
    });
    
    // Console message specific to this feature
    console.log('%cConfetti Button Loaded', 'color: #ff6b6b; font-weight: bold;');
});
