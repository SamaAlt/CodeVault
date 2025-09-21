const confettiBtn = document.querySelector('.confetti-btn');

confettiBtn.addEventListener('click', () => {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '1000';
    document.body.appendChild(canvas);
    
    const confetti = new Confetti(canvas);
    confetti.fire({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
    
    setTimeout(() => {
        document.body.removeChild(canvas);
    }, 3000);
});