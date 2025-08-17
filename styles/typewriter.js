const typewriterElements = document.querySelectorAll('.typewriter');

typewriterElements.forEach(el => {
    const text = el.getAttribute('data-text');
    let i = 0;
    const speed = 100; // typing speed in ms
    
    function type() {
        if (i < text.length) {
            el.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            el.classList.add('complete');
        }
    }
    
    type();
});
