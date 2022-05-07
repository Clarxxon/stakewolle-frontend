<template>
  <div class="mobile-benefits">
    <div class="mobile-content">
      <p class="mobile-benefits__title">{{ $t('benefits.title') }}</p>
      <p class="mobile-benefits__subtitle" v-html="$t('benefits.subtitle')"></p>
      <div class="mobile-benefits__cards">
        <div class="mobile-benefits__cards-item">
          <div class="mobile-benefits__cards-item__logo">
            <img :src="time" alt="image"/>
          </div>
          <p>{{ $t('benefits._01') }}</p>
        </div>
        <div class="mobile-benefits__cards-item">
          <div class="mobile-benefits__cards-item__logo">
            <img :src="guard" alt="image"/>
          </div>
          <p>{{ $t('benefits._02') }}</p>
        </div>
        <div class="mobile-benefits__cards-item">
          <div class="mobile-benefits__cards-item__logo">
            <img :src="net" alt="image"/>
          </div>
          <p>{{ $t('benefits._03') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import time from '../../static/24-hours 1.svg'
import guard from '../../static/shield 1.svg'
import net from '../../static/globe-grid 1.svg'
export default {
  name: "mobileBenefits",
  data(){
    return{
      time, guard, net
    }
  }
}
</script>

<style scoped>

</style>