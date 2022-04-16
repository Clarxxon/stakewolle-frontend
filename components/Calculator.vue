<template>
  <div class="calculator">
    <img class="calculator-staff-image" id="round-white-top" :src="roundWhiteTop" alt="">
    <img class="calculator-staff-image" id="round-orange-net" :src="roundOrangeNet" alt="">
    <img class="calculator-staff-image" id="round-white-blur" :src="roundWhiteBlur" alt="">
    <img class="calculator-staff-image" id="round-white-calc" :src="roundWhiteCalc" alt="">
    <img class="calculator-staff-image" id="violet-blur" :src="violetBlur" alt="">
    <img class="calculator-staff-image" id="round-top-overflow" :src="roundTopOveflow" alt="">
    <div class="calculator-info">
      <div class="calculator-wrapper">
        <div class="calculator-wrapper__range">
          <div class="calculator-wrapper__range-fake"></div>
          <input min="0" max="100000" value="10000" @input="calculate" type="range">
        </div>
        <div class="calculator-wrapper__top">
          <button @click="toLeft" class="calculator-wrapper__top-btn__left">
            <img :src="arrowLeft" alt="">
          </button>
          <button @click="toRight" class="calculator-wrapper__top-btn__right">
            <img :src="arrowRight" alt="">
          </button>
          <div @click="sliderClick" v-for="i in netsParse" :class="i.calc_class_slider_desktop">
            <img :src="i.img" alt="">
          </div>
        </div>
        <div class="calculator-wrapper__description">
          <div v-for="i in netsParse" :class="i.calc_info_class_desktop">
            <div class="calculator-wrapper__info-header">
              <p>{{ $t('calculator.how_many') }}<span>{{i.token}}</span>{{ $t('calculator.do_you') }}?</p>
              <p>{{ $t('calculator.year_profit') }}</p>
            </div>
            <div class="calculator-wrapper__info-values">
              <p class="calculator-wrapper__info-values__price">10,000</p>
              <p>+{{i.annual_comission}}%</p>
            </div>
            <div class="calculator-wrapper__info-stonks">
              <div class="calculator-wrapper__info-stonks__line"></div>
              <div class="calculator-wrapper__info-stonks__item">
                <p>{{ $t('calculator.ed') }}</p>
                <p><span class="ed-tokens price-info">0</span> {{i.token}}</p>
                <p>$ <span class="ed-price price-info">0</span></p>
              </div>
              <div class="calculator-wrapper__info-stonks__line"></div>
              <div class="calculator-wrapper__info-stonks__item">
                <p>{{ $t('calculator.em') }}</p>
                <p><span class="em-tokens price-info">0</span> {{i.token}}</p>
                <p>$ <span class="em-price price-info">0</span></p>
              </div>
              <div class="calculator-wrapper__info-stonks__line"></div>
              <div class="calculator-wrapper__info-stonks__item">
                <p>{{ $t('calculator.ey') }}</p>
                <p><span class="eg-tokens price-info">0</span> {{i.token}}</p>
                <p>$ <span class="eg-price price-info">0</span></p>
              </div>
            </div>
            <button @click.prevent="openSlide('net-'+netsParse[current].coin)" class="calculator-wrapper__info-btn">
<!--              <a target="_blank" :href="i.kepler_link"></a>-->
              <div class="calculator-wrapper__info-btn__bg"></div>
              <p>{{ $t('calculator.stake') }}</p>
            </button>
          </div>
        </div>
      </div>
      <div class="calculator-info__text">
        <img class="calculator-info__text-field" :src="infoBg" alt="">
        <div class="calculator-info__text-bg">
          <img class="calculator-staff-image" id="violet-net" :src="violetNet" alt="">
          <img class="calculator-staff-image" id="round-inside-orange" :src="roundInsideOrange" alt="">
          <img class="calculator-staff-image" id="round-inside-white" :src="roundInsideWhite" alt="">
          <p class="calculator-info__text-title">{{ $t('profit.title') }}</p>
          <p class="calculator-info__text-subtitle" v-html="$t('profit.subtitle')"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import roundWhite from '../static/Round white.png'
import Akash from "@/static/nets/Akash.png"
import BandProtocol from "@/static/nets/BandProtocol.png"
import CertiK from "@/static/nets/CertiK.png"
import Comdex from "@/static/nets/Comdex.png"
import Cosmos from "@/static/nets/Cosmos.png"
import Desmos from "@/static/nets/Desmos.png"
import eMoney from "@/static/nets/eMoney.png"
import Iris from "@/static/nets/Iris.png"
import Juno from "@/static/nets/Juno.png"
import Kava from "@/static/nets/Kava.png"
import Ki from "@/static/nets/Ki.png"
import Mediblock from "@/static/nets/Mediblock.png"
import Osmosis from "@/static/nets/Osmosis.png"
import Persistence from "@/static/nets/Persistence.png"
import SecretNetwork from "@/static/nets/SecretNetwork.png"
import SifChain from "@/static/nets/SifChain.png"
import Rizon from '../static/nets/Rizon.png'
import BitSong from '../static/nets/BitSong.png'
import LikeCoin from '../static/nets/LikeKoin.png'
import Chihua from '../static/nets/Chihua.png'
import Lum from '../static/nets/Lum.png'
import Sentinel from '../static/nets/Sentinel.png'
import Cheqd from '../static/nets/Cheqd.png'
import Dig from '../static/nets/Dig.png'
import infoBg from '../static/redesign/Ellipse 55 (3).png'
import roundWhiteTop from '../static/calculator/round-white-top.svg'
import roundInsideOrange from '../static/calculator/round-inside-orange.svg'
import roundInsideWhite from '../static/calculator/round-inside-white.svg'
import roundOrangeNet from '../static/redesign/Round orange (2).svg'
import roundWhiteBlur from '../static/calculator/round-white-blur.svg'
import violetBlur from '../static/calculator/violet-blur.svg'
import violetNet from '../static/redesign/Round violet (4).svg'
import roundWhiteCalc from '../static/calculator/round-white-calc-bottom.svg'
import arrowLeft from '@/static/mobile/left.svg'
import arrowRight from '@/static/mobile/right.svg'
import roundTopOveflow from '../static/calculator/round-top-overflow.svg'
export default {
  name: "Calculator",
  data(){
    return{
      roundWhite,
      roundWhiteTop, roundInsideOrange, roundInsideWhite,
      roundOrangeNet, roundWhiteBlur, violetBlur,
      violetNet, roundWhiteCalc, roundTopOveflow,
      Cosmos, Akash, BandProtocol, CertiK, Comdex,
      Desmos, eMoney, Iris, Juno, Kava, Ki, Mediblock,
      Osmosis, Persistence, SecretNetwork, SifChain,
      Rizon, BitSong, LikeCoin, Chihua, Lum, Sentinel,
      Cheqd, Dig,
      arrowLeft, arrowRight, infoBg,
      current: 0,
      netsToCalc: [],
      netsParse: []
    }
  },
  props: {
    nets: []
  },
  async created(){
    this.netsParse = this.nets
  },
  methods: {
    round(number){
      return +number.toFixed(4);
    },
    openSlide (link) {
      const netsItems = document.querySelectorAll('.nets-item')
      for(let i=0; i<netsItems.length; i++){
        if(netsItems[i].classList.contains('nets-item-active')){
          netsItems[i].classList.remove('nets-item-active')
        }
      }
      for(let i=0; i<netsItems.length; i++){
        if(netsItems[i].id === 'net-'+this.nets[this.current].coin){
          netsItems[i].classList.add('nets-item-active')
        }
      }
      document.querySelector('#' + link).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    },
    setCalc(){
      const body = document.querySelector('body')
      const calc = document.querySelectorAll('.calc-validator')[1]
      calc.style.display = 'flex'
      body.style.overflowY = 'hidden'
    },
    getPopup(coin){
      const popup = document.querySelector('.nets-popup__background');
      popup.style.display = 'flex'
      const body = document.querySelector('body')
      body.style.overflowY = 'hidden'
      body.style.height = '100vh'

      let netsItem = document.querySelectorAll('.nets-popup__top-slider__wrapper-item')
      let netsPopupStat = document.querySelectorAll('.nets-popup__stat')

      for(let i=0; i < netsItem.length; i++) {
        if(this.nets[i].title === coin){
          this.current = i
        }
      }
      for(let i=0; i < netsItem.length; i++) {
        netsItem[i].classList.remove('prev') || netsItem[i].classList.remove('next') || netsItem[i].classList.remove('left') || netsItem[i].classList.remove('center') || netsItem[i].classList.remove('right') || netsItem[i].classList.remove('current');
        netsPopupStat[i].classList.remove('current')
      }
      for(let i=0; i <= this.current; i++){
        if(this.nets[i].title !== coin){
          netsItem[i].classList.add('prev')
        } else {
          if(i <= this.nets.length-3){
            netsItem[i].classList.add('current')
            netsItem[i].classList.add('left')
            netsItem[i+1].classList.add('center')
            netsItem[i+2].classList.add('right')
            netsPopupStat[i].classList.add('current')
          } else if(i <= this.nets.length-2){
            netsItem[i].classList.add('current')
            netsItem[i].classList.add('center')
            netsItem[i-1].classList.add('left')
            netsItem[i+1].classList.add('right')
            netsItem[i-1].classList.remove('prev')
            netsPopupStat[i].classList.add('current')
          } else if(i <= this.nets.length-1){
            netsItem[i].classList.add('current')
            netsItem[i].classList.add('right')
            netsItem[i-1].classList.add('center')
            netsItem[i-2].classList.add('left')
            netsItem[i-1].classList.remove('prev')
            netsItem[i-2].classList.remove('prev')
            netsPopupStat[i].classList.add('current')
          }

        }
      }
      for(let k = this.current+3; k<=netsItem.length-1; k++){
        netsItem[k].classList.add('next')
      }
    },
    sliderClick (e) {
      const item = document.querySelectorAll('.calculator .calculator-wrapper__item')
      const infos = document.querySelectorAll('.calculator .calculator-wrapper__info')
      const targetItem = document.querySelector('.calculator .'+e.target.parentNode.classList[1])
      document.querySelector('.calculator .current').classList.remove('current')
      document.querySelector('.calculator .calculator-wrapper__info.current').classList.remove('current')
      for(let i = 0; i < item.length; i++){
        if(item[i] === targetItem){
          this.current = i
          targetItem.classList.add('current')
          infos[i].classList.add('current')
        }
      }
      const range = document.querySelector('.calculator .calculator-wrapper__range input')
      const mainPrice = document.querySelectorAll('.calculator .calculator-wrapper__info-values__price')
      range.value = parseInt(mainPrice[this.current].innerText.replace(',', ''))
      const fakeLine = document.querySelector('.calculator .calculator-wrapper__range-fake')
      fakeLine.style.width = parseInt(mainPrice[this.current].innerText.replace(',', ''))/1000 + '%'
    },
    toRight () {
      const netsCount = this.nets;
      if(netsCount.length-1 > this.current){
        const range = document.querySelector('.calculator .calculator-wrapper__range input')
        const mainPrice = document.querySelectorAll('.calculator .calculator-wrapper__info-values__price')
        range.value = parseInt(mainPrice[this.current+1].innerText.replace(',', ''))
        const fakeLine = document.querySelector('.calculator .calculator-wrapper__range-fake')
        fakeLine.style.width = parseInt(mainPrice[this.current+1].innerText.replace(',', ''))/1000 + '%'

        const sliderNext = document.querySelectorAll('.calculator .calculator-wrapper__item.next');
        const sliderItems = document.querySelectorAll('.calculator .calculator-wrapper__item')
        const _01 = document.querySelector('._01');
        const _02 = document.querySelector('._02');
        const _03 = document.querySelector('._03');
        const _04 = document.querySelector('._04');
        const _05 = document.querySelector('._05');
        const _06 = document.querySelector('._06');
        const current = document.querySelector('.calculator-wrapper__item.current')
        const sliderInfo = document.querySelectorAll('.calculator .calculator-wrapper__info')

        sliderInfo[this.current].classList.remove('current')
        sliderInfo[this.current+1].classList.add('current')

        sliderItems[this.current].classList.remove('current')
        sliderItems[this.current+1].classList.add('current')
        

        if(current.classList.contains('_06')){
          _01.classList.remove('_01')
          _01.classList.add('prev')
          _02.classList.remove('_02')
          _02.classList.add('_01')
          _03.classList.remove('_03')
          _03.classList.add('_02')
          _04.classList.remove('_04')
          _04.classList.add('_03')
          _05.classList.remove('_05')
          _05.classList.add('_04')
          _06.classList.remove('_06')
          _06.classList.add('_05')
          sliderNext[0].classList.remove('next')
          sliderNext[0].classList.add('_06')
        }
        this.current++;
      }
    },
    toLeft () {
      if(this.current > 0){
        const range = document.querySelector('.calculator .calculator-wrapper__range input')
        const mainPrice = document.querySelectorAll('.calculator .calculator-wrapper__info-values__price')
        range.value = parseInt(mainPrice[this.current-1].innerText.replace(',', ''))
        const fakeLine = document.querySelector('.calculator .calculator-wrapper__range-fake')
        fakeLine.style.width = parseInt(mainPrice[this.current-1].innerText.replace(',', ''))/1000 + '%'

        const sliderPrev = document.querySelectorAll('.calculator .calculator-wrapper__item.prev');
        const sliderItems = document.querySelectorAll('.calculator .calculator-wrapper__item')
        const _01 = document.querySelector('._01');
        const _02 = document.querySelector('._02');
        const _03 = document.querySelector('._03');
        const _04 = document.querySelector('._04');
        const _05 = document.querySelector('._05');
        const _06 = document.querySelector('._06');
        const current = document.querySelector('.calculator .calculator-wrapper__item.current')
        const sliderInfo = document.querySelectorAll('.calculator .calculator-wrapper__info')

        sliderInfo[this.current].classList.remove('current')
        sliderInfo[this.current-1].classList.add('current')

        sliderItems[this.current].classList.remove('current')
        sliderItems[this.current-1].classList.add('current')

        if(current.classList.contains('_01')){
          _01.classList.remove('_01')
          _01.classList.add('_02')
          _02.classList.remove('_02')
          _02.classList.add('_03')
          _03.classList.remove('_03')
          _03.classList.add('_04')
          _04.classList.remove('_04')
          _04.classList.add('_05')
          _05.classList.remove('_05')
          _05.classList.add('_06')
          _06.classList.remove('_06')
          _06.classList.add('next')
          sliderPrev[sliderPrev.length-1].classList.remove('prev')
          sliderPrev[sliderPrev.length-1].classList.add('_01')
        }
        this.current--;
      }
    },
    calculate(e){
      const mainPrice = document.querySelectorAll('.calculator .calculator-wrapper__info-values__price')
      const edTokens = document.querySelectorAll('.calculator .ed-tokens')
      const emTokens = document.querySelectorAll('.calculator .em-tokens')
      const egTokens = document.querySelectorAll('.calculator .eg-tokens')
      const edPrice = document.querySelectorAll('.calculator .ed-price')
      const emPrice = document.querySelectorAll('.calculator .em-price')
      const egPrice = document.querySelectorAll('.calculator .eg-price')
      const fakeLine = document.querySelector('.calculator .calculator-wrapper__range-fake')

      mainPrice[this.current].innerText = e.target.value
      if(e.target.value.length === 4){
        mainPrice[this.current].innerText = e.target.value.substr(0, 1)+','+e.target.value.substr(1)
      }
      if(e.target.value.length === 5){
        mainPrice[this.current].innerText = e.target.value.substr(0, 2)+','+e.target.value.substr(2)
      }
      if(e.target.value.length === 6){
        mainPrice[this.current].innerText = e.target.value.substr(0, 3)+','+e.target.value.substr(3)
      }

      edTokens[this.current].innerText = Math.floor(((e.target.value/100)*this.netsParse[this.current].annual_comission)/365)
      emTokens[this.current].innerText = Math.floor(((e.target.value/100)*this.netsParse[this.current].annual_comission)/12)
      egTokens[this.current].innerText = Math.floor(((e.target.value/100)*this.netsParse[this.current].annual_comission)/1)

      edPrice[this.current].innerText = Math.floor((Math.floor(((e.target.value/100)*this.netsParse[this.current].annual_comission)/365))*this.netsParse[this.current].price)
      emPrice[this.current].innerText = Math.floor((Math.floor(((e.target.value/100)*this.netsParse[this.current].annual_comission)/12))*this.netsParse[this.current].price)
      egPrice[this.current].innerText = Math.floor((Math.floor(((e.target.value/100)*this.netsParse[this.current].annual_comission)/1))*this.netsParse[this.current].price)

      fakeLine.style.width = (e.target.value/1000) + '%'
    }
  },
  async mounted(){
    const range = document.querySelector('.calculator-wrapper__range input')
    range.value = 0

    const edTokens = document.querySelectorAll('.calculator .ed-tokens')
    const emTokens = document.querySelectorAll('.calculator .em-tokens')
    const egTokens = document.querySelectorAll('.calculator .eg-tokens')
    const edPrice = document.querySelectorAll('.calculator .ed-price')
    const emPrice = document.querySelectorAll('.calculator .em-price')
    const egPrice = document.querySelectorAll('.calculator .eg-price')

    for(let i=0; i<this.nets.length-1; i++){
      edTokens[i].innerText = Math.floor(((10000/100)*this.netsParse[i].annual_comission)/365)
      emTokens[i].innerText = Math.floor(((10000/100)*this.netsParse[i].annual_comission)/12)
      egTokens[i].innerText = Math.floor(((10000/100)*this.netsParse[i].annual_comission)/1)

      edPrice[i].innerText = Math.floor((Math.floor(((10000/100)*this.netsParse[i].annual_comission)/365))*this.netsParse[this.current].price)
      emPrice[i].innerText = Math.floor((Math.floor(((10000/100)*this.netsParse[i].annual_comission)/12))*this.netsParse[this.current].price)
      egPrice[i].innerText = Math.floor((Math.floor(((10000/100)*this.netsParse[i].annual_comission)/1))*this.netsParse[this.current].price)
    }

    const validatorRange = document.querySelector('.calculator-wrapper__range input')
    setTimeout(()=>{
      validatorRange.value = 10000
    }, 1000)

  }
}
</script>

<style scoped>

</style>
