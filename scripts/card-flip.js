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
    
    // Card flip functionality
    const flipCard = document.querySelector('.flip-card');
    flipCard.addEventListener('click', () => {
        flipCard.classList.toggle('flipped');
    });
    
    // Reset card button
    document.getElementById('reset-card').addEventListener('click', () => {
        flipCard.classList.remove('flipped');
    });
    
    // Console message specific to this feature
    console.log('%cCard Flip Animation Loaded', 'color: #6e48aa; font-weight: bold;');
});
