/* Virtual Scroll Feature Styles */
.feature-demo {
    margin-bottom: 40px;
    padding: 20px;
    background: rgba(30, 30, 50, 0.5);
    border-radius: 10px;
}

.demo-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    margin-top: 20px;
}

/* Virtual Scroll Container */
.virtual-scroll-container {
    height: 400px;
    width: 100%;
    max-width: 600px;
    border: 2px solid var(--accent);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    background: rgba(20, 20, 35, 0.8);
}

/* Scroll Viewport */
.scroll-viewport {
    height: 100%;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: var(--accent) rgba(30, 30, 50, 0.5);
}

.scroll-viewport::-webkit-scrollbar {
    width: 8px;
}

.scroll-viewport::-webkit-scrollbar-track {
    background: rgba(30, 30, 50, 0.5);
}

.scroll-viewport::-webkit-scrollbar-thumb {
    background-color: var(--accent);
    border-radius: 4px;
}

.scroll-viewport::-webkit-scrollbar-thumb:hover {
    background-color: var(--secondary);
}

/* Scroll Content */
.scroll-content {
    position: relative;
}

/* List Items */
.list-item {
    position: absolute;
    width: 100%;
    padding: 15px 20px;
    border-bottom: 1px solid rgba(65, 216, 191, 0.2);
    background: rgba(30, 30, 50, 0.6);
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 15px;
}

.list-item:hover {
    background: rgba(65, 216, 191, 0.1);
    transform: translateX(5px);
    border-left: 3px solid var(--accent);
}

.list-item:nth-child(even) {
    background: rgba(40, 40, 60, 0.6);
}

/* Item Number Indicator */
.item-number {
    width: 30px;
    height: 30px;
    background: var(--accent);
    color: var(--dark);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 0.9rem;
    flex-shrink: 0;
}

/* Item Content */
.item-content {
    flex: 1;
    color: rgba(255, 255, 255, 0.9);
}

.item-content h4 {
    color: var(--accent);
    margin-bottom: 5px;
    font-size: 1rem;
}

.item-content p {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.85rem;
    margin: 0;
}

/* Stats Display */
.scroll-stats {
    margin-top: 15px;
    padding: 15px 25px;
    background: rgba(30, 30, 50, 0.7);
    border-radius: 8px;
    text-align: center;
    border: 1px solid rgba(65, 216, 191, 0.3);
    color: rgba(255, 255, 255, 0.9);
}

.scroll-stats span {
    color: var(--accent);
    font-weight: bold;
    font-size: 1.1rem;
}

/* Scroll Controls */
.scroll-controls {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    justify-content: center;
}

.scroll-controls button {
    padding: 10px 20px;
    background: linear-gradient(45deg, var(--accent), var(--secondary));
    color: var(--dark);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-family: 'Roboto Mono', monospace;
    font-weight: bold;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(65, 216, 191, 0.2);
}

.scroll-controls button:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(65, 216, 191, 0.4);
}

.scroll-controls button:active {
    transform: translateY(-1px);
}

/* Feature Usage Section */
.feature-usage {
    background: rgba(30, 30, 50, 0.5);
    padding: 20px;
    border-radius: 10px;
    margin-top: 20px;
}

.feature-usage h2 {
    color: var(--accent);
    margin-bottom: 15px;
}

.feature-usage ul {
    list-style-position: inside;
    margin-top: 15px;
}

.feature-usage li {
    margin-bottom: 10px;
    padding-left: 10px;
}

.feature-usage li::marker {
    color: var(--accent);
}

/* Back Link Styling */
.back-link {
    display: inline-block;
    margin-top: 20px;
    color: var(--accent);
    text-decoration: none;
    transition: color 0.3s;
    font-family: 'Roboto Mono', monospace;
}

.back-link:hover {
    color: var(--secondary);
    text-decoration: underline;
}

/* Responsive Design */
@media (max-width: 768px) {
    .virtual-scroll-container {
        height: 300px;
    }
    
    .scroll-controls {
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
    
    .scroll-controls button {
        width: 200px;
    }
}

@media (max-width: 480px) {
    .virtual-scroll-container {
        height: 250px;
    }
    
    .list-item {
        padding: 12px 15px;
    }
    
    .item-number {
        width: 25px;
        height: 25px;
        font-size: 0.8rem;
    }
}

/* Loading Animation */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.list-item {
    animation: fadeIn 0.3s ease-out;
}

/* Selected Item State */
.list-item.selected {
    background: rgba(65, 216, 191, 0.2);
    border-left: 3px solid var(--secondary);
    box-shadow: inset 0 0 10px rgba(65, 216, 191, 0.1);
}

/* Performance Indicator */
.performance-indicator {
    position: absolute;
    top: 10px;
    right: 10px;
    background: rgba(30, 30, 50, 0.8);
    color: var(--accent);
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 0.8rem;
    border: 1px solid rgba(65, 216, 191, 0.3);
}
