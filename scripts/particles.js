document.addEventListener('DOMContentLoaded', () => {
    // Initialize particles
    initParticles();
    
    // Reset particles button functionality
    document.getElementById('reset-particles').addEventListener('click', () => {
        // Destroy existing particles
        if (window.pJSDom && window.pJSDom.length > 0) {
            window.pJSDom[0].pJS.fn.vendors.destroypJS();
            window.pJSDom = [];
        }
        
        // Reinitialize particles
        initParticles();
    });
    
    // Console message specific to this feature
    console.log('%cParticle.js Background Loaded', 'color: #6e48aa; font-weight: bold;');
});

function initParticles() {
    particlesJS('particles-js', {
        particles: {
            number: { 
                value: 80, 
                density: { 
                    enable: true, 
                    value_area: 800 
                } 
            },
            color: { 
                value: "#41d8bf" 
            },
            shape: { 
                type: "circle" 
            },
            opacity: { 
                value: 0.5, 
                random: true 
            },
            size: { 
                value: 3, 
                random: true 
            },
            line_linked: { 
                enable: true, 
                distance: 150, 
                color: "#9d50bb", 
                opacity: 0.4, 
                width: 1 
            },
            move: { 
                enable: true, 
                speed: 2, 
                direction: "none", 
                random: true 
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { 
                    enable: true, 
                    mode: "repulse" 
                },
                onclick: { 
                    enable: true, 
                    mode: "push" 
                }
            }
        }
    });
}
