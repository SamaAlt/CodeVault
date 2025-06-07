// Simple console greeting
console.log('%cWelcome to CodeVault!', 'color: #41d8bf; font-size: 18px; font-weight: bold;');
console.log('%cYour repository for web features and effects.', 'color: #9d50bb;');

// Add any global functionality here
document.addEventListener('DOMContentLoaded', () => {
    // This could be used for any site-wide animations or effects
    const cards = document.querySelectorAll('.feature-card:not(.coming-soon)');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'all 0.3s ease';
        });
    });
});