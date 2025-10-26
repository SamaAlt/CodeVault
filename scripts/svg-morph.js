// scripts/svg-morph.js
document.addEventListener('DOMContentLoaded', () => {
    const paths = [
        'M20,20 L180,20 L180,180 L20,180 Z', // Square
        'M100,20 L180,100 L100,180 L20,100 Z', // Diamond
        'M100,20 C180,20 180,180 100,180 C20,180 20,20 100,20 Z' // Circle-like
    ];

    let currentPath = 0;
    const morphBtn = document.getElementById('morph-btn');
    const pathElement = document.getElementById('morph-path');

    morphBtn.addEventListener('click', () => {
        currentPath = (currentPath + 1) % paths.length;
        anime({
            targets: '#morph-path',
            d: paths[currentPath],
            duration: 1000,
            easing: 'easeInOutQuad'
        });
    });
    
    // Console message specific to this feature
    console.log('%cSVG Morph Effect Loaded', 'color: #9d50bb; font-weight: bold;');
});
