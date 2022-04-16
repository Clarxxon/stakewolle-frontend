<template>
  <div class="validators-wrapper">
    <img class="validators-wrapper-bg-image" id="round-orange-blur" :src="roundOrangeBlur" alt="">
    <img class="validators-wrapper-bg-image" id="round-white-blur" :src="roundWhiteBlur" alt="">
    <img class="validators-wrapper-bg-image" id="round-superdark-white-blur" :src="roundSuperdarkWhiteBlur" alt="">
    <img class="validators-wrapper-bg-image" id="round-violet" :src="violet" alt="">
    <img class="validators-wrapper-bg-image" id="round-bottom-white" :src="bottomWhite" alt="">
    <img class="validators-wrapper-bg-image" id="round-violet-k" :src="violet_k" alt="">
    <img class="validators-wrapper-bg-image" id="bottom-line" :src="bottomLine" alt="">
    <div class="soon-validators">
      <h3>{{ $t('todo.title') }}</h3>
      <h4>{{ $t('todo.subtitle') }}</h4>
      <div class="slider-wrapper">
        <div v-for="i in netsToValidators" :class="i.calc_class_slider_desktop">
          <img class="slide-icon" :src="i.img" alt="">
          <p class="slide-title">{{ i.title }}</p>
          <p v-if="$i18n.locale !== 'en'" class="slide-subtitle">{{ i.subtitle }}</p>
          <p v-if="$i18n.locale !== 'ru'" class="slide-subtitle">{{ i.subtitle_en }}</p>
          <a class="slide-link" :href="i.link">
            <div class="slide-link__bg"></div>
            <p>{{ $t('welcome.more') }}</p>
          </a>
        </div>
        <button class="slider-btn prev-btn" @click="prev">
          <img :src="sliderArrow" alt="">
        </button>
        <button class="slider-btn next-btn" @click="next">
          <img :src="sliderArrow" alt="">
        </button>
      </div>
    </div>
  </div>

</template>

<script>
import CertiK from '../static/nets/CertiK.png'
import sliderArrow from '../static/slider-arrow.svg'
import validatorsBg2 from '../static/validators-bg2.png'
import validatorsBg from '../static/validators-bg.png'
import bottomLine from '../static/soon-validators/bottom-line.png'
import bottomWhite from '../static/soon-validators/bottom-white.svg'
import roundOrangeBlur from '../static/soon-validators/round-orange-blur.svg'
import roundWhiteBlur from '../static/soon-validators/round-white-blur.svg'
import roundSuperdarkWhiteBlur from '../static/soon-validators/round-superdark-white-blur.svg'
import violet from '../static/soon-validators/violet.svg'
import violet_k from '../static/redesign/Round violet (3).svg'

export default {
  name: "SoonValidators",
  props: {
    netsToValidators: []
  },
  data() {
    return {
      slides: [],
      CertiK, sliderArrow, validatorsBg2, validatorsBg,
      bottomLine, bottomWhite, roundOrangeBlur,
      roundWhiteBlur, roundSuperdarkWhiteBlur, violet,
      violet_k
    };
  },
  methods: {
    next(){
      const left = document.querySelector('.validators-wrapper .left')
      const center = document.querySelector('.validators-wrapper .center')
      const right = document.querySelector('.validators-wrapper .right')
      const next = document.querySelectorAll('.validators-wrapper .next')
      const prev = document.querySelectorAll('.validators-wrapper .prev')

      if(next.length > 1){
        left.classList.remove('left')
        left.classList.add('prev')
        center.classList.remove('center')
        center.classList.add('left')
        right.classList.remove('right')
        right.classList.add('center')
        next[0].classList.remove('next')
        next[0].classList.add('right')
      } else if (next.length === 1) {
        left.classList.remove('left')
        left.classList.add('prev')
        center.classList.remove('center')
        center.classList.add('left')
        right.classList.remove('right')
        right.classList.add('center')
        next[0].classList.remove('next')
        next[0].classList.add('right')
        for(let i=0; i<prev.length; i++){
          prev[i].classList.remove('prev')
          prev[i].classList.add('next')
        }

      }
    },
    prev(){
      const left = document.querySelector('.validators-wrapper .left')
      const center = document.querySelector('.validators-wrapper .center')
      const right = document.querySelector('.validators-wrapper .right')
      let prev = document.querySelectorAll('.validators-wrapper .prev')
      const next = document.querySelectorAll('.validators-wrapper .next')

      if(prev.length === 0){
        for(let i=0; i<next.length; i++){
          next[i].classList.remove('next')
          next[i].classList.add('prev')
        }
        prev = document.querySelectorAll('.validators-wrapper .prev')
        prev[prev.length - 1].classList.remove('prev')
        prev[prev.length - 1].classList.add('left')
        left.classList.remove('left')
        left.classList.add('center')
        center.classList.remove('center')
        center.classList.add('right')
        right.classList.remove('right')
        right.classList.add('next')
      }
      if(prev.length > 1){
        prev[prev.length - 1].classList.remove('prev')
        prev[prev.length - 1].classList.add('left')
        left.classList.remove('left')
        left.classList.add('center')
        center.classList.remove('center')
        center.classList.add('right')
        right.classList.remove('right')
        right.classList.add('next')
      } else if (prev.length === 1) {
        prev[prev.length - 1].classList.remove('prev')
        prev[prev.length - 1].classList.add('left')
        left.classList.remove('left')
        left.classList.add('center')
        center.classList.remove('center')
        center.classList.add('right')
        right.classList.remove('right')
        right.classList.add('next')
        for(let i=0; i<next.length; i++){
          next[i].classList.remove('next')
          next[i].classList.add('prev')
        }
      }
    },
  },
  created(){

  },
  mounted(){}


}
</script>

<style scoped>

</style>
