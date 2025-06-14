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
    
    // Console message specific to this feature
    console.log('%cShimmer Effect Loaded', 'color: #9d50bb; font-weight: bold;');
});