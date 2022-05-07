<template>
  <div class="target-block">
    <div class="target-block__text-block">
      <h3>{{ $t('welcome.staking_provider') }}</h3>
      <h1>Stakewolle<br>validator</h1>
      <h4>{{ $t('welcome.subtitle') }}</h4>
      <a @click.prevent="openSlide('nets-container')" href="#nets-container" class="target-block__link">
        <div class="target-block__link-background"></div>
        <p>{{ $t('welcome.more') }}</p>
      </a>
    </div>
    <div class="target-block__image">
      <div class="target-block__image-big">
        <img class="outside-big-white" :src="outsideBigWhite" alt="">
        <img class="outside-orange" :src="outsideOrange" alt="">
        <img class="outside-sif" :src="outsideSif" alt="">
        <img class="outside-violet" :src="outsideViolet" alt="">
        <div class="target-block__image-big__main-ring">
          <img class="orange-bg" :src="orangeBg" alt="">
          <img class="dark-bg" :src="darkBg" alt="">
          <img class="img-inside-orange" :src="orangeInside" alt="">
          <img class="img-inside-dark" :src="darkInside" alt="">
          <img class="img-inside-white" :src="whiteInside" alt="">
          <img class="main-react" :src="mainreact" alt="">

        </div>
      </div>
      <div class="target-block__image-info">
        <img id="round" :src="round" alt="">
        <img id="star" :src="star" alt="">
        <img id="round-white" :src="roundWhite" alt="">
        <img id="outside-white" :src="outsideWhite" alt="">
        <p>{{ $t('welcome.commission') }}</p>
      </div>
    </div>
    <img id="blur-white" :src="blurWhite" alt="">
  </div>
</template>

<script>
import round from "../static/top-img/info-violet.svg"
import star from "@/static/orange-star.svg"
import roundWhite from "../static/jar.svg"
import blurWhite from "@/static/blur-white.svg"
import orangeBg from '../static/top-img/bg-orange.webp'
import mainreact from '../static/Main round (5).svg'
import darkBg from '../static/top-img/bg-dark.webp'
import darkInside from '../static/redesign/Round violet (3).svg'
import orangeInside from '../static/Round orange (9).svg'
import whiteInside from '../static/top-img/white-inside.svg'
import outsideWhite from '../static/top-img/outside-white.svg'
import outsideOrange from '../static/top-img/outside-orange.svg'
import outsideSif from '../static/redesign/Round violet (16).svg'
import outsideBigWhite from '../static/redesign/Component 19.svg'
import outsideViolet from '../static/top-img/outside-violet.svg'


export default {
  name: "TargetBlock",
  data(){
    return{
      round, star, roundWhite, blurWhite, orangeBg,
      mainreact, darkBg, darkInside, orangeInside,
      whiteInside, outsideWhite,
      outsideOrange, outsideSif, outsideBigWhite, outsideViolet
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
