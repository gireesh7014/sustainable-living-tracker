document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('carbonChart').getContext('2d');
    const carbonChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['USA', 'China', 'India', 'Germany', 'Brazil'],
        datasets: [{
          label: 'CO2 Emissions (MtCO2e)',
          data: [5416, 10065, 2654, 731, 467],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  });
  
