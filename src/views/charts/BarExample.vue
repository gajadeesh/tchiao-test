<script>
import { Bar } from 'vue-chartjs'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips'

export default {
  extends: Bar,
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart(
      {
        labels: ['IOS', 'ANDROID'],
        datasets: [
          {
            label: 'App store Downloads',
            backgroundColor: ['#9ee2d6','#6cc0e2'],
            data: [75000, 45000, 12]
          }
        ]
      },
      {
        responsive: true,
        maintainAspectRatio: true,
        tooltips: {
          enabled: false,
          custom: CustomTooltips,
          intersect: true,
          mode: 'index',
          position: 'nearest',
          callbacks: {
            labelColor: function (tooltipItem, chart) {
              return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].backgroundColor }
            }
          }
        }
      }
    )
  }
}
</script>
