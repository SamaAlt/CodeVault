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
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        animation: {
            duration: 1000
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                }
            },
            x: {
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                }
            }
        }
    }
});

document.getElementById('addData').addEventListener('click', () => {
    const newValue = Math.random() * 100;
    const timestamp = new Date().toLocaleTimeString();
    
    chart.data.labels.push(timestamp);
    chart.data.datasets[0].data.push(newValue);
    
    if (chart.data.labels.length > 15) {
        chart.data.labels.shift();
        chart.data.datasets[0].data.shift();
    }
    
    chart.update();
    document.getElementById('pointCount').textContent = chart.data.labels.length;
});

// Auto-add data every 2 seconds
setInterval(() => {
    document.getElementById('addData').click();
}, 2000);
