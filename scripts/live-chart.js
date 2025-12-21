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
    
    // Chart initialization
    const ctx = document.getElementById('liveChart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Real-time Data',
                data: [],
                borderColor: '#41d8bf',
                backgroundColor: 'rgba(65, 216, 191, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#41d8bf',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 5,
                pointHoverRadius: 7
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 1000,
                easing: 'easeInOutQuart'
            },
            interaction: {
                intersect: false,
                mode: 'index'
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#fff',
                        font: {
                            family: "'Roboto Mono', monospace"
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(26, 26, 46, 0.95)',
                    titleColor: '#41d8bf',
                    bodyColor: '#fff',
                    borderColor: '#41d8bf',
                    borderWidth: 1,
                    cornerRadius: 5,
                    displayColors: false,
                    titleFont: {
                        family: "'Roboto Mono', monospace"
                    },
                    bodyFont: {
                        family: "'Roboto Mono', monospace"
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)',
                        drawBorder: false
                    },
                    ticks: {
                        color: 'rgba(255, 255, 255, 0.7)',
                        font: {
                            family: "'Roboto Mono', monospace"
                        }
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)',
                        drawBorder: false
                    },
                    ticks: {
                        color: 'rgba(255, 255, 255, 0.7)',
                        font: {
                            family: "'Roboto Mono', monospace",
                            size: 11
                        },
                        maxRotation: 45,
                        minRotation: 45
                    }
                }
            }
        }
    });

    // Add data point function
    const addDataPoint = () => {
        const newValue = Math.random() * 100;
        const timestamp = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second:'2-digit'});
        
        chart.data.labels.push(timestamp);
        chart.data.datasets[0].data.push(newValue);
        
        // Keep only last 15 points
        if (chart.data.labels.length > 15) {
            chart.data.labels.shift();
            chart.data.datasets[0].data.shift();
        }
        
        chart.update('none'); // Use 'none' for immediate updates
        document.getElementById('pointCount').textContent = chart.data.labels.length;
        
        // Visual feedback
        const pointCount = document.getElementById('pointCount');
        pointCount.classList.remove('pulse');
        void pointCount.offsetWidth; // Trigger reflow
        pointCount.classList.add('pulse');
    };

    // Clear chart function
    const clearChart = () => {
        chart.data.labels = [];
        chart.data.datasets[0].data = [];
        chart.update();
        document.getElementById('pointCount').textContent = '0';
    };

    // Event listeners
    document.getElementById('addData').addEventListener('click', addDataPoint);
    document.getElementById('clearData').addEventListener('click', clearChart);

    // Auto-add data every 2 seconds
    let autoUpdate = setInterval(addDataPoint, 2000);

    // Pause auto-update on hover for better interaction
    const chartContainer = document.querySelector('.chart-container');
    chartContainer.addEventListener('mouseenter', () => {
        clearInterval(autoUpdate);
    });
    
    chartContainer.addEventListener('mouseleave', () => {
        autoUpdate = setInterval(addDataPoint, 2000);
    });

    // Add initial data points
    for (let i = 0; i < 3; i++) {
        setTimeout(addDataPoint, i * 500);
    }

    // Console message specific to this feature
    console.log('%cLive Chart Feature Loaded', 'color: #41d8bf; font-weight: bold;');
    console.log('%c• Auto-update every 2 seconds', 'color: #6e48aa;');
    console.log('%c• Hover over chart to pause updates', 'color: #6e48aa;');
});
