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
    
    // Clock functionality
    function updateClock() {
        const now = new Date();
        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        const hours = now.getHours() % 12;
        
        const secondDeg = (seconds / 60) * 360 + 90;
        const minuteDeg = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
        const hourDeg = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
        
        document.querySelector('.second-hand').style.transform = `rotate(${secondDeg}deg)`;
        document.querySelector('.min-hand').style.transform = `rotate(${minuteDeg}deg)`;
        document.querySelector('.hour-hand').style.transform = `rotate(${hourDeg}deg)`;
        
        // Add smooth transition only when moving between minutes
        if (seconds === 0) {
            document.querySelectorAll('.hand').forEach(hand => {
                hand.style.transition = 'all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
            });
        }
    }

    setInterval(updateClock, 1000);
    updateClock();
    
    // Console message specific to this feature
    console.log('%cAnimated Clock Loaded', 'color: #9d50bb; font-weight: bold;');
});
