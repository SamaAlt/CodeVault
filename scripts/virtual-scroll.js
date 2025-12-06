document.addEventListener('DOMContentLoaded', () => {
    // Tab functionality (if you add tabs in the future)
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
    
    // Virtual Scroll Implementation
    class VirtualScroll {
        constructor(container, itemCount, itemHeight, renderItem) {
            this.container = container;
            this.itemCount = itemCount;
            this.itemHeight = itemHeight;
            this.renderItem = renderItem;
            this.visibleItems = 20;
            this.selectedIndex = -1;
            
            this.init();
        }
        
        init() {
            this.viewport = this.container.querySelector('.scroll-viewport');
            this.content = this.container.querySelector('.scroll-content');
            
            // Set total height for virtual scrolling
            this.content.style.height = `${this.itemCount * this.itemHeight}px`;
            
            // Add scroll event listener
            this.viewport.addEventListener('scroll', () => this.render());
            
            // Initialize rendering
            this.render();
            
            // Update statistics
            this.updateStats();
        }
        
        render() {
            const scrollTop = this.viewport.scrollTop;
            const startIndex = Math.floor(scrollTop / this.itemHeight);
            const endIndex = Math.min(startIndex + this.visibleItems, this.itemCount - 1);
            
            // Clear existing items
            this.content.innerHTML = '';
            
            // Create and append visible items
            for (let i = startIndex; i <= endIndex; i++) {
                const item = document.createElement('div');
                item.className = 'list-item';
                if (i === this.selectedIndex) {
                    item.classList.add('selected');
                }
                item.style.top = `${i * this.itemHeight}px`;
                item.style.height = `${this.itemHeight}px`;
                item.innerHTML = this.renderItem(i);
                
                // Add click handler for selection
                item.addEventListener('click', () => {
                    this.selectItem(i);
                });
                
                this.content.appendChild(item);
            }
            
            // Update visible count
            document.getElementById('visible-count').textContent = (endIndex - startIndex + 1);
            
            // Update performance indicator
            this.updatePerformance(startIndex, endIndex);
        }
        
        selectItem(index) {
            // Remove previous selection
            const prevSelected = document.querySelector('.list-item.selected');
            if (prevSelected) {
                prevSelected.classList.remove('selected');
            }
            
            // Set new selection
            this.selectedIndex = index;
            const newSelected = document.querySelectorAll('.list-item')[index - this.getStartIndex()];
            if (newSelected) {
                newSelected.classList.add('selected');
            }
            
            console.log(`Selected item ${index}`);
        }
        
        getStartIndex() {
            const scrollTop = this.viewport.scrollTop;
            return Math.floor(scrollTop / this.itemHeight);
        }
        
        updateStats() {
            document.getElementById('total-count').textContent = this.itemCount.toLocaleString();
        }
        
        updatePerformance(startIndex, endIndex) {
            // Performance monitoring (optional)
            const renderedCount = endIndex - startIndex + 1;
            const memoryUsed = Math.round((renderedCount * 0.5) / 1024); // Rough estimate in KB
        }
        
        scrollToIndex(index) {
            const scrollPosition = index * this.itemHeight;
            this.viewport.scrollTo({
                top: scrollPosition,
                behavior: 'smooth'
            });
        }
    }
    
    // Create sample data render function
    function renderListItem(index) {
        const colors = ['#41d8bf', '#9d50bb', '#ff8b94', '#6e48aa'];
        const color = colors[index % colors.length];
        const categories = ['Technology', 'Design', 'Development', 'Business', 'Creative'];
        const category = categories[index % categories.length];
        
        return `
            <div class="item-number" style="background: ${color}">${index + 1}</div>
            <div class="item-content">
                <h4>Virtual Item #${index + 1}</h4>
                <p>Category: ${category} • Created: ${new Date().toLocaleDateString()}</p>
            </div>
        `;
    }
    
    // Initialize virtual scroll
    const virtualScrollContainer = document.querySelector('.virtual-scroll-container');
    const ITEM_COUNT = 10000;
    const ITEM_HEIGHT = 60;
    
    const virtualScroll = new VirtualScroll(
        virtualScrollContainer,
        ITEM_COUNT,
        ITEM_HEIGHT,
        renderListItem
    );
    
    // Scroll control buttons
    document.getElementById('scrollToTop').addEventListener('click', () => {
        virtualScroll.scrollToIndex(0);
    });
    
    document.getElementById('scrollToMiddle').addEventListener('click', () => {
        virtualScroll.scrollToIndex(Math.floor(ITEM_COUNT / 2));
    });
    
    document.getElementById('scrollToBottom').addEventListener('click', () => {
        virtualScroll.scrollToIndex(ITEM_COUNT - 20); // Leave some items visible
    });
    
    // Console message
    console.log('%cVirtual Scroll Loaded', 'color: #41d8bf; font-weight: bold;');
    console.log(`%cRendering ${ITEM_COUNT.toLocaleString()} items virtually`, 'color: #9d50bb;');
});
