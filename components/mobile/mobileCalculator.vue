<template>
  <div id="m-profit" class="mobile-calculator">
    <div class="mobile-calculator__range">
      <div class="calculator-wrapper__range-fake"></div>
      <input min="0" max="100000" value="10000" @input="calculate" type="range">
    </div>
    <div class="mobile-calculator__top">
      <button @click="toLeft" class="mobile-calculator__top-btn mobile-calculator__top-btn__left">
        <img :src="arrowLeft" alt="image"/>
      </button>
      <button @click="toRight" class="mobile-calculator__top-btn mobile-calculator__top-btn__right">
        <img :src="arrowRight" alt="image"/>
      </button>
      <div
          @click="sliderClick"
          v-for="(i, idx) in netsParse"
          class="mobile-calculator__top-item"
          :class="{
            'left current': idx === 0,
            'center': idx === 1,
            'right': idx === 2,
            'next': idx === 3
          }"
      >
        <img :src="i.img" alt="image"/>
      </div>
    </div>
    <div class="mobile-calculator__info">
      <div
          v-for="(i, idx) in netsParse"
          class="mobile-calculator__info-item"
          :class="{'current': idx === 0}"
      >
        <div class="mobile-calculator__info-item__top">
          <p>{{ $t('calculator.how_many') }}<span>{{i.token}}</span>?</p>
          <p>{{ $t('calculator.year_profit') }}</p>
        </div>
        <div class="mobile-calculator__info-item__values">
          <p class="mobile-calculator__info-item__values-tokens">10,000</p>
          <p class="mobile-calculator__info-item__values-price">+{{i.annual_comission}}%</p>
        </div>
        <div class="mobile-calculator__info-item__stonks">
          <div class="mobile-calculator__info-item__stonks-line"></div>
          <div class="mobile-calculator__info-item__stonks-item">
            <p>{{ $t('calculator.ed') }}</p>
            <p><span class="ed-tokens price-info">0</span> {{i.token}}</p>
            <p>$<span class="ed-price price-info">0</span></p>
          </div>
          <div class="mobile-calculator__info-item__stonks-line"></div>
          <div class="mobile-calculator__info-item__stonks-item">
            <p>{{ $t('calculator.em') }}</p>
            <p><span class="em-tokens price-info">0</span> {{i.token}}</p>
            <p>$<span class="em-price price-info">0</span></p>
          </div>
          <div class="mobile-calculator__info-item__stonks-line"></div>
          <div class="mobile-calculator__info-item__stonks-item">
            <p>{{ $t('calculator.ey') }}</p>
            <p><span class="eg-tokens price-info">0</span> {{i.token}}</p>
            <p>$<span class="eg-price price-info">0</span></p>
          </div>
          <button @click="openSlide('m-nets-container')">
<!--            <a target="_blank" :href="i.kepler_link"></a>-->
            <div></div>
            <p>{{ $t('calculator.stake') }}</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Akash from "@/static/nets/Akash.webp"
import BandProtocol from "@/static/nets/BandProtocol.webp"
import CertiK from "@/static/nets/CertiK.webp"
import Comdex from "@/static/nets/Comdex.webp"
import Cosmos from "@/static/nets/Cosmos.webp"
import Desmos from "@/static/nets/Desmos.webp"
import eMoney from "@/static/nets/eMoney.webp"
import Iris from "@/static/nets/Iris.webp"
import Juno from "@/static/nets/Juno.webp"
import Kava from "@/static/nets/Kava.webp"
import Ki from "@/static/nets/Ki.webp"
import Mediblock from "@/static/nets/Mediblock.webp"
import Osmosis from "@/static/nets/Osmosis.webp"
import Persistence from "@/static/nets/Persistence.webp"
import SecretNetwork from "@/static/nets/SecretNetwork.webp"
import SifChain from "@/static/nets/SifChain.webp"
import arrowLeft from '../../static/mobile/left.svg'
import arrowRight from '../../static/mobile/right.svg'
export default {
  name: "mobileCalculator",
  data(){
    return{
      Cosmos, Akash, BandProtocol, CertiK, Comdex,
      Desmos, eMoney, Iris, Juno, Kava, Ki, Mediblock,
      Osmosis, Persistence, SecretNetwork, SifChain,
      arrowLeft, arrowRight,
      current: 0,
      netsParse: [],
      nets: [],
    }
  },
  methods: {
    openSlide (link) {
      document.querySelector('#' + link).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    },
    sliderClick (e) {
      const item = document.querySelectorAll('.mobile-calculator__top .mobile-calculator__top-item')
      const infos = document.querySelectorAll('.mobile-calculator__info .mobile-calculator__info-item')
      const targetItem = document.querySelector('.mobile-calculator__top .'+e.target.parentNode.classList[1])
      document.querySelector('.mobile-calculator__top .current').classList.remove('current')
      document.querySelector('.mobile-calculator__info-item.current').classList.remove('current')

      for(let i = 0; i < item.length; i++){
        if(item[i] === targetItem){
          this.current = i
          targetItem.classList.add('current')
          infos[i].classList.add('current')
        }
      }
      const range = document.querySelector('.mobile-calculator__range input')
      const mainPrice = document.querySelectorAll('.mobile-calculator__info-item__values-tokens')
      range.value = parseInt(mainPrice[this.current].innerText.replace(',', ''))
      const fakeLine = document.querySelector('.mobile-calculator .calculator-wrapper__range-fake')
      fakeLine.style.width = parseInt(mainPrice[this.current].innerText.replace(',', ''))/1000 + '%'
    },
    toRight(){




      let netsCount = this.nets.length;
      const current = document.querySelector('.mobile-calculator__top-item.current');
      const left = document.querySelector('.mobile-calculator__top-item.left');
      const center = document.querySelector('.mobile-calculator__top-item.center');
      const right = document.querySelector('.mobile-calculator__top-item.right');
      const next = document.querySelectorAll('.mobile-calculator__top-item.next');
      const items = document.querySelectorAll('.mobile-calculator__top-item')
      const infos = document.querySelectorAll('.mobile-calculator__info-item')
      if(this.current < netsCount-1){
        const range = document.querySelector('.mobile-calculator__range input')
        const mainPrice = document.querySelectorAll('.mobile-calculator__info-item__values-tokens')
        range.value = parseInt(mainPrice[this.current+1].innerText.replace(',', ''))
        const fakeLine = document.querySelector('.mobile-calculator .calculator-wrapper__range-fake')
        fakeLine.style.width = parseInt(mainPrice[this.current+1].innerText.replace(',', ''))/1000 + '%'
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
      const current = document.querySelector('.mobile-calculator__top-item.current');
      const left = document.querySelector('.mobile-calculator__top-item.left');
      const center = document.querySelector('.mobile-calculator__top-item.center');
      const right = document.querySelector('.mobile-calculator__top-item.right');
      const prev = document.querySelectorAll('.mobile-calculator__top-item.prev');
      const items = document.querySelectorAll('.mobile-calculator__top-item')
      const infos = document.querySelectorAll('.mobile-calculator__info-item')
      if(this.current > 0){
        const range = document.querySelector('.mobile-calculator__range input')
        const mainPrice = document.querySelectorAll('.mobile-calculator__info-item__values-tokens')
        range.value = parseInt(mainPrice[this.current-1].innerText.replace(',', ''))
        const fakeLine = document.querySelector('.mobile-calculator .calculator-wrapper__range-fake')
        fakeLine.style.width = parseInt(mainPrice[this.current-1].innerText.replace(',', ''))/1000 + '%'
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
    calculate(e){
      const mainPrice = document.querySelectorAll('.mobile-calculator__info-item__values-tokens')
      const edTokens = document.querySelectorAll('.mobile-calculator__info-item__stonks-item .ed-tokens')
      const emTokens = document.querySelectorAll('.mobile-calculator__info-item__stonks-item .em-tokens')
      const egTokens = document.querySelectorAll('.mobile-calculator__info-item__stonks-item .eg-tokens')
      const edPrice = document.querySelectorAll('.mobile-calculator__info-item__stonks-item .ed-price')
      const emPrice = document.querySelectorAll('.mobile-calculator__info-item__stonks-item .em-price')
      const egPrice = document.querySelectorAll('.mobile-calculator__info-item__stonks-item .eg-price')
      const fakeLine = document.querySelector('.mobile-calculator .calculator-wrapper__range-fake')

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

    },
    round(number){
      return +number.toFixed(4);
    },
    async setStartValues(){
      const edTokens = document.querySelectorAll('.mobile-calculator .ed-tokens')
      const emTokens = document.querySelectorAll('.mobile-calculator .em-tokens')
      const egTokens = document.querySelectorAll('.mobile-calculator .eg-tokens')
      const edPrice = document.querySelectorAll('.mobile-calculator .ed-price')
      const emPrice = document.querySelectorAll('.mobile-calculator .em-price')
      const egPrice = document.querySelectorAll('.mobile-calculator .eg-price')

      for(let i=0; i<this.netsParse.length-1; i++){
        edTokens[i] ? edTokens[i].innerText = Math.floor(((10000/100)*this.netsParse[i].annual_comission)/365) : ''
        emTokens[i].innerText = Math.floor(((10000/100)*this.netsParse[i].annual_comission)/12)
        egTokens[i].innerText = Math.floor(((10000/100)*this.netsParse[i].annual_comission)/1)

        edPrice[i].innerText = Math.floor((Math.floor(((10000/100)*this.netsParse[i].annual_comission)/365))*this.netsParse[this.current].price)
        emPrice[i].innerText = Math.floor((Math.floor(((10000/100)*this.netsParse[i].annual_comission)/12))*this.netsParse[this.current].price)
        egPrice[i].innerText = Math.floor((Math.floor(((10000/100)*this.netsParse[i].annual_comission)/1))*this.netsParse[this.current].price)
      }
    },
  },
  watch: {
    __netsCount() {
      this.nets = this.$store.state.nets.nets
      this.netsParse = this.$store.state.nets.nets
    }
  },
  computed: {
    __netsCount() {
      return this.$store.state.nets.nets.length
    }
  }
}
</script>

<style scoped>

</style>