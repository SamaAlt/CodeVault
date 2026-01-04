document.addEventListener('DOMContentLoaded', () => {
    // Tab functionality (consistent with other features)
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
    
    // Gallery data - using colored placeholders for demo
    const galleryData = [
        { id: 1, title: 'Mountain View', category: 'nature', color: '#2a4a3a' },
        { id: 2, title: 'Code Terminal', category: 'tech', color: '#3a3a5a' },
        { id: 3, title: 'Ocean Waves', category: 'nature', color: '#1a5a7a' },
        { id: 4, title: 'Digital Matrix', category: 'tech', color: '#4a2a6a' },
        { id: 5, title: 'Color Splash', category: 'abstract', color: '#9d50bb' },
        { id: 6, title: 'Forest Path', category: 'nature', color: '#3a5a2a' },
        { id: 7, title: 'Data Flow', category: 'tech', color: '#2a4a6a' },
        { id: 8, title: 'Geometric Pattern', category: 'abstract', color: '#6e48aa' },
        { id: 9, title: 'Desert Sunset', category: 'nature', color: '#cc7722' },
        { id: 10, title: 'Server Rack', category: 'tech', color: '#333355' },
        { id: 11, title: 'Fluid Art', category: 'abstract', color: '#41d8bf' },
        { id: 12, title: 'City Lights', category: 'tech', color: '#556699' }
    ];
    
    const galleryGrid = document.querySelector('.gallery-grid');
    const searchInput = document.getElementById('searchFilter');
    const categoryFilter = document.getElementById('categoryFilter');
    const shuffleButton = document.getElementById('shuffleGallery');
    const resetButton = document.getElementById('resetGallery');
    
    let currentImages = [...galleryData];
    
    // Initialize gallery
    function initializeGallery() {
        renderGallery(currentImages);
        
        // Search filter
        searchInput.addEventListener('input', (e) => {
            filterGallery(e.target.value, categoryFilter.value);
        });
        
        // Category filter
        categoryFilter.addEventListener('change', (e) => {
            filterGallery(searchInput.value, e.target.value);
        });
        
        // Shuffle functionality
        shuffleButton.addEventListener('click', () => {
            shuffleImages();
        });
        
        // Reset functionality
        resetButton.addEventListener('click', () => {
            resetGallery();
        });
    }
    
    // Render gallery items
    function renderGallery(images) {
        galleryGrid.innerHTML = '';
        
        if (images.length === 0) {
            galleryGrid.innerHTML = `
                <div class="no-results">
                    <h3>No images found</h3>
                    <p>Try a different search term or category</p>
                </div>
            `;
            return;
        }
        
        images.forEach(image => {
            const item = document.createElement('div');
            item.className = 'gallery-item';
            item.innerHTML = `
                <div class="gallery-image" style="background: linear-gradient(135deg, ${image.color}, ${darkenColor(image.color, 30)})"></div>
                <div class="gallery-overlay">
                    <div class="image-title">${image.title}</div>
                    <div class="image-category">${image.category}</div>
                </div>
            `;
            galleryGrid.appendChild(item);
        });
    }
    
    // Filter gallery
    function filterGallery(searchTerm, category) {
        let filtered = galleryData;
        
        // Search filter
        if (searchTerm) {
            filtered = filtered.filter(image => 
                image.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        
        // Category filter
        if (category !== 'all') {
            filtered = filtered.filter(image => image.category === category);
        }
        
        currentImages = filtered;
        renderGallery(currentImages);
    }
    
    // Shuffle images
    function shuffleImages() {
        const shuffled = [...currentImages];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        currentImages = shuffled;
        renderGallery(currentImages);
    }
    
    // Reset gallery
    function resetGallery() {
        searchInput.value = '';
        categoryFilter.value = 'all';
        currentImages = [...galleryData];
        renderGallery(currentImages);
    }
    
    // Helper function to darken colors
    function darkenColor(color, percent) {
        const num = parseInt(color.replace("#", ""), 16);
        const amt = Math.round(2.55 * percent);
        const R = (num >> 16) - amt;
        const G = (num >> 8 & 0x00FF) - amt;
        const B = (num & 0x0000FF) - amt;
        
        return `#${(0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
            (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
            (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1)}`;
    }
    
    // Initialize
    initializeGallery();
    
    // Console message specific to this feature
    console.log('%cImage Gallery Loaded', 'color: #6e48aa; font-weight: bold;');
    console.log('%cTry searching for "mountain" or filtering by "tech"', 'color: #41d8bf;');
});
