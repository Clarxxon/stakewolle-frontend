<template>
  <div class="mobile-validators">
    <img id="orange-k" :src="orangeK" alt="">
    <img id="rounded-dark" :src="roundedDark" alt="">
    <img id="validators-bg" :src="validatorsBg" alt="">
    <div class="mobile-content">
      <p class="mobile-validators__title">{{ $t('todo.title') }}</p>
      <p class="mobile-validators__subtitle">{{ $t('todo.subtitle') }}</p>
    </div>

    <div class="mobile-stacking__slider">
      <div class="mobile-stacking__slider-top">
        <button @click="toLeft" class="mobile-stacking__slider-top__btn-left">
          <img :src="arrowLeft" alt="">
        </button>
        <button @click="toRight" class="mobile-stacking__slider-top__btn-right">
          <img :src="arrowRight" alt="">
        </button>
        <div @click="sliderClick" v-for="i in netsToValidators" :class="i.calc_class_slider_mobile">
          <img :src="i.img" alt="">
        </div>
      </div>
      <div class="mobile-stacking__slider-info">
        <div v-for="i in netsToValidators" :class="i.calc_info_class_slider_mobile">
          <p class="mobile-stacking__slider-info__item-title">{{ i.title }}</p>
          <p v-if="$i18n.locale !== 'en'" class="mobile-stacking__slider-info__item-subtitle">{{ i.subtitle }}</p>
          <p v-if="$i18n.locale !== 'es'" class="mobile-stacking__slider-info__item-subtitle">{{ i.subtitle_en }}</p>
            <button class="mobile-stacking__slider-info__item-btn">
              <a target="_blank" :href="i.link"></a>
              <div class="mobile-stacking__slider-info__item-btn__bg"></div>
              <p>{{ $t('welcome.more') }}</p>
            </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import orangeK from '../../static/mobile/orangeK.png'
import eMoney from '../../static/nets/eMoney.png'
import CertiK from '../../static/nets/CertiK.png'
import Comdex from '../../static/nets/Comdex.png'
import roundedDark from '../../static/mobile/rounded-dark.png'
import validatorsBg from '../../static/mobile/big-bg.png'
import arrowLeft from '../../static/mobile/left.svg'
import arrowRight from '../../static/mobile/right.svg'
export default {
  name: "mobileValidators",
  props: {
    netsToValidators: []
  },
  data(){
    return{
      orangeK,
      eMoney,
      CertiK,
      Comdex,
      roundedDark,
      validatorsBg, arrowLeft, arrowRight,
      current: 0
    }
  },
  methods: {
    sliderClick (e) {

      console.log(e.target.parentNode.classList)
      const item = document.querySelectorAll('.validators-slider.mobile-stacking__slider-top__item')
      const infos = document.querySelectorAll('.validators-slider.mobile-stacking__slider-info__item')
      const targetItem = document.querySelector('.mobile-validators .'+e.target.parentNode.classList[2])
      document.querySelector('.validators-slider.mobile-stacking__slider-top__item.current').classList.remove('current')
      document.querySelector('.validators-slider.mobile-stacking__slider-info__item.current').classList.remove('current')

      for(let i = 0; i < item.length; i++){
        if(item[i] === targetItem){
          this.current = i
          targetItem.classList.add('current')
          infos[i].classList.add('current')
        }
      }
      console.log(this.netsToValidators[this.current].link)
    },
    toRight(){
      let netsCount = this.netsToValidators.length;
      const current = document.querySelector('.validators-slider.mobile-stacking__slider-top__item.current');
      const left = document.querySelector('.validators-slider.mobile-stacking__slider-top__item.left');
      const center = document.querySelector('.validators-slider.mobile-stacking__slider-top__item.center');
      const right = document.querySelector('.validators-slider.mobile-stacking__slider-top__item.right');
      const next = document.querySelectorAll('.validators-slider.mobile-stacking__slider-top__item.next');
      const items = document.querySelectorAll('.validators-slider.mobile-stacking__slider-top__item')
      const infos = document.querySelectorAll('.validators-slider.mobile-stacking__slider-info__item')
      if(this.current < netsCount-1){
        items[this.current].classList.remove('current')
        items[this.current+1].classList.add('current')
        infos[this.current].classList.remove('current')
        infos[this.current+1].classList.add('current')

        if(current.classList.contains('right')){
          left.classList.remove('left')
          left.classList.add('prev')
          center.classList.remove('center')
          center.classList.add('left')
          right.classList.remove('right')
          right.classList.add('center')
          next[0].classList.remove('next')
          next[0].classList.add('right')
        }
        this.current++;
      }
    },
    toLeft(){
      const current = document.querySelector('.validators-slider.mobile-stacking__slider-top__item.current');
      const left = document.querySelector('.validators-slider.mobile-stacking__slider-top__item.left');
      const center = document.querySelector('.validators-slider.mobile-stacking__slider-top__item.center');
      const right = document.querySelector('.validators-slider.mobile-stacking__slider-top__item.right');
      const prev = document.querySelectorAll('.validators-slider.mobile-stacking__slider-top__item.prev');
      const items = document.querySelectorAll('.validators-slider.mobile-stacking__slider-top__item')
      const infos = document.querySelectorAll('.validators-slider.mobile-stacking__slider-info__item')
      if(this.current > 0){
        items[this.current].classList.remove('current')
        items[this.current-1].classList.add('current')
        infos[this.current].classList.remove('current')
        infos[this.current-1].classList.add('current')

        if(current.classList.contains('left')){
          left.classList.remove('left')
          left.classList.add('center')
          center.classList.remove('center')
          center.classList.add('right')
          right.classList.remove('right')
          right.classList.add('next')
          prev[prev.length-1].classList.remove('prev')
          prev[prev.length-1].classList.add('left')
        }
        this.current--;
      }
    },
  }
}
</script>

<style scoped>

</style>