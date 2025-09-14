document.getElementById('restart-glitch').addEventListener('click', () => {
    const glitchElements = document.querySelectorAll('.glitch, .glitch-img');
    
    glitchElements.forEach(element => {
        const animation = element.style.animation;
        element.style.animation = 'none';
        void element.offsetWidth; // Trigger reflow
        element.style.animation = animation;
    });
});
