<template>
  <div class="mobile-start">
    <div class="mobile-content">
      <p class="mobile-start__pretitle">{{ $t('welcome.staking_provider') }}</p>
      <p class="mobile-start__title">Stakewolle validator</p>
      <p class="mobile-start__subtitle">{{ $t('welcome.subtitle') }}</p>
      <a @click.prevent="openSlide('m-nets-container')" class="mobile-start__btn" href="#m-nets-container">{{ $t('welcome.more') }}</a>

      <div class="mobile-start__bg-bottom">
        <div class="mobile-start__bg-bottom-image">
          <img class="mobile-start__bg-bottom-image-item img-center" :src="center" alt="">
          <img class="mobile-start__bg-bottom-image-item img-orange" :src="roundOrange" alt="">
          <img class="mobile-start__bg-bottom-image-item img-violet-1" :src="roundViolet1" alt="">
          <img class="mobile-start__bg-bottom-image-item img-violet-2" :src="roundViolet2" alt="">
          <img class="mobile-start__bg-bottom-image-item img-violet-3" :src="roundViolet3" alt="">
          <img class="mobile-start__bg-bottom-image-item img-white" :src="roundWhite" alt="">
        </div>
        <div class="mobile-start__bg-bottom-textblock">
          <p>{{ $t('welcome.commission') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import center from '../../static/redesign/Component 14 (3).png'
import roundOrange from '../../static/mobile/top-bg/Round orange (2).svg'
import roundViolet1 from '../../static/mobile/top-bg/Round violet (3).svg'
import roundViolet2 from '../../static/mobile/top-bg/sif.png'
import roundViolet3 from '../../static/mobile/top-bg/Round violet (2).svg'
import roundWhite from '../../static/mobile/top-bg/RoundWh.png'


export default {
  name: "mobileStartBlock",
  data(){
    return{
      center, roundOrange, roundViolet1, roundViolet2,
      roundWhite, roundViolet3
    }
  },
  methods: {
    openSlide (link) {
      document.querySelector('#' + link).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    },
  }
}
</script>

<style scoped>

</style>