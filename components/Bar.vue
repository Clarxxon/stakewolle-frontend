<template>
  <div>
    <LineChart class="line-chart" :chartData="chartData" :options="chartOptions"></LineChart>
  </div>
</template>

<script>
export default {
  name: "Bar",
  props: {
    sliderData: {
      type: Array
    }
  },
  async created() {

  },
  data(){
    return{
      chartData:{
        labels: ['13:00', '14:00', '15:00', '16:00', '17:00', '18:00','19:00', '20:00', '21:00', '22:00', '23:00', '00:00','01:00', '02:00', '03:00', '04:00', '05:00', '06:00','07:00', '08:00', '09:00', '10:00', '11:00', '12:00'],
        datasets: [{
          data: this.sliderData,
          borderWidth: 7,
          borderColor: '#FE8833',
          fill: false,
          pointRadius: 0,
        }]
      },
      chartOptions:{
        legend: {
          display: false
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

      }
    }
  }
}
</script>

<style scoped>

</style>