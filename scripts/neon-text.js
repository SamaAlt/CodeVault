document.addEventListener('DOMContentLoaded', () => {
    // You can add dynamic color changing if needed
    const neonTexts = document.querySelectorAll('.neon-text');
    const colors = ['#41d8bf', '#9d50bb', '#ff8b94', '#6e48aa'];
    
    // Optional: Cycle through colors on click
    neonTexts.forEach(text => {
        text.addEventListener('click', () => {
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            text.style.setProperty('--accent', randomColor);
        });
    });
    
    console.log('%cNeon Text Loaded', 'color: #ff8b94; font-weight: bold; text-shadow: 0 0 5px #ff8b94;');
});
