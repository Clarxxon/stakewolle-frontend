<template>
  <div>
    <LineChart class="line-chart" :chartData="chartData" :options="chartOptions"></LineChart>
  </div>
</template>

<script>
export default {
  name: "Bar",
  props: {
    sliderDataGraph: {
      type: Array
    }
  }
  ,
  created() {

  },
  data(){
    return{
      chartData:{
        labels: ['', '', '', '', '', '','', '', '', '', '', '','', '', '', '', '', '','', '', '', '', '', ''],
        datasets: [{
          data: this.sliderDataGraph,
          borderWidth: 7,
          borderColor: '#FE8833',
          fill: false,

          pointRadius: 0,


        }]
      },
      chartOptions:{
        legend: {
          display: false,
          labels: {
            // This more specific font property overrides the global property
            font: {
              size: 14,
              family: 'Comfortaa'
            }
          }
        },
        maintainAspectRatio: false,
        responsive: false,
        scaleShowLabels : false,
        scales: {
          xAxes: [{
            display: false,
          }],
          yAxes: [{
            display: false,
          }]
        },
        tooltips: {
          position: 'nearest',
          mode: 'nearest',
          intersect: 0
        }

      }
    }
  }
}
</script>

<style scoped>

</style>