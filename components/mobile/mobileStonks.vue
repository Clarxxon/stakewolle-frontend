<template>
  <div class="mobile-stonks">
    <img class="mobile-stonks__bg" :src="stonksBg" alt="">
    <div class="mobile-stonks__top-line"></div>
    <div class="mobile-stonks__info">
      <div class="mobile-content">
        <p class="mobile-stonks__info-title">{{ $t('profit.title') }}</p>
        <p class="mobile-stonks__info-subtitle" v-html="$t('profit.subtitle')"></p>
      </div>
    </div>
  </div>
</template>

<script>
import stonksBg from '../../static/mobile/dohod-bg-small.png'
export default {
  name: "mobileStonks",
  data(){
    return{
      stonksBg
    }
  }
}
</script>

<style scoped>

</style>