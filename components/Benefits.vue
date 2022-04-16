<template>
  <div class="benefits">
    <h3>{{ $t('benefits.title') }}</h3>
    <h4 v-html="$t('benefits.subtitle')"></h4>
    <div class="benefits-wrapper">
      <div v-for="i in benefits" class="benefits-wrapper__item">
        <div class="benefits-wrapper__item-icon">
          <img :src="i.img" alt="">
        </div>
        <div class="benefits-wrapper__item-description">
          <p>{{ i.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import shield from '../static/shield 1.svg'
import gg from '../static/globe-grid 1.svg'
import timer from '../static/24-hours 1.svg'

export default {
  name: "Benefits",
  data(){
    return{
      shield, gg, timer,
      benefits: []
    }
  },
  created() {
    this.benefits = [
      {img: gg, description: this.$t('benefits._01')},
      {img: shield, description: this.$t('benefits._02')},
      {img: timer, description: this.$t('benefits._03')},
    ]
  }
}
</script>

<style scoped>

</style>
