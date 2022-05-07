<template>
  <div id="d-about" class="about-us">
    <div class="about-us__info">
      <img class="about-us__info-decor-bg" :src="bgBack" alt="image"/>
      <img class="about-us__info-decor-item" :src="juno" alt="image"/>
      <div class="about-us__info-decor">
        <img class="about-us__info-decor-bright-bg" :src="bgBright" alt="image"/>
        <img class="about-us__info-decor-violet-bg" :src="bgViolet" alt="image"/>
        <img class="about-us__info-decor-item-orange" :src="orange" alt="image"/>
        <img class="about-us__info-decor-item-white" :src="white" alt="image"/>
        <img class="about-us__info-decor-item-violet" :src="violet" alt="image"/>
      </div>
      <div class="about-us__info-text">
        <img class="about-us__info-text-img" :src="orangeNet" alt="image"/>
        <p class="about-us__info-text__title">{{ $t('navigation.about_us') }}</p>
        <p class="about-us__info-text__description" v-html="$t('about_us_description')"></p>
      </div>
    </div>
  </div>
</template>

<script>
import about from "@/static/about-us.svg"
import bgBack from '../static/redesign/Ellipse 55 (3).webp'
import bgBright from '../static/about/bg-bright.webp'
import bgViolet from '../static/about/bg-violet.webp'
import juno from '../static/about/juno.svg'
import orange from '../static/about/orange.svg'
import white from '../static/about/white.svg'
import violet from '../static/about/violet.svg'
import orangeNet from '../static/about/orange-net.svg'





export default {
  name: "AboutUs",
  data(){
    return{
      about, bgBack, bgBright, bgViolet, juno,
      orange, white, violet, orangeNet
    }
  }
}
</script>

<style scoped>

</style>
