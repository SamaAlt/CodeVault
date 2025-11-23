class VirtualScroll {
    constructor(container, itemCount, itemHeight, renderItem) {
        this.container = container;
        this.itemCount = itemCount;
        this.itemHeight = itemHeight;
        this.renderItem = renderItem;
        this.visibleItems = 20;
        
        this.init();
    }
    
    init() {
        this.viewport = this.container.querySelector('.scroll-viewport');
        this.content = this.container.querySelector('.scroll-content');
        
        this.content.style.height = `${this.itemCount * this.itemHeight}px`;
        
        this.viewport.addEventListener('scroll', () => this.render());
        this.render();
    }
    
    render() {
        const scrollTop = this.viewport.scrollTop;
        const startIndex = Math.floor(scrollTop / this.itemHeight);
        const endIndex = Math.min(startIndex + this.visibleItems, this.itemCount - 1);
        
        this.content.innerHTML = '';
        
        for (let i = startIndex; i <= endIndex; i++) {
            const item = document.createElement('div');
            item.className = 'list-item';
            item.style.top = `${i * this.itemHeight}px`;
            item.style.height = `${this.itemHeight}px`;
            item.innerHTML = this.renderItem(i);
            this.content.appendChild(item);
        }
        
        document.getElementById('visible-count').textContent = (endIndex - startIndex + 1);
    }
}
