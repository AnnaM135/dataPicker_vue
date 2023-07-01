<template>
  <div>
    <canvas ref="chart"></canvas>
  </div>
</template>

<script>
import { Line } from 'vue-chartjs';

export default {
  extends: Line,
  mounted() {
    this.renderChart({
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Purple line',
          borderColor: 'purple',
          data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
          fill: false
        },
        {
          label: 'Green line',
          borderColor: 'green',
          data: [20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130],
          fill: false
        },
        {
          label: 'Orange line',
          borderColor: 'orange',
          data: [30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140],
          fill: false
        }
      ]
    }, {
      scales: {
        xAxes: [{
          ticks: {
            autoSkip: false,
            maxRotation: 0,
            minRotation: 0
          }
        }],
        yAxes: [{
          display: false
        }]
      }
    });
  }
}
</script>
