<template>
  <div id="nets-container" class="nets">
    <calc-validator :netsToCalc="netsToCalc"></calc-validator>
    <div class="nets-popup__background">
      <div @click="popupClose" class="nets-popup__background-clickable"></div>
      <div class="nets-popup">
        <div @click="popupClose" class="nets-popup__lock">
          <div class="nets-popup__lock-item"></div>
          <div class="nets-popup__lock-item"></div>
        </div>
        <h3>{{ $t('popup.title') }}</h3>
        <p class="popup-copy">{{$t('popup.copy')}}</p>
        <div class="calculator-token">
          <p v-if="netsParse[current]">{{ netsParse[current].adres }}</p>
          <input v-if="netsParse[current]" :value="netsParse[current].adres" tabindex='-1' contenteditable="true" type="text" class="calculator-token-input">
          <button @click="copyAdres">
            <img :src="copy" alt="">
          </button>
        </div>
        <div class="nets-popup__top-slider">
          <button @click="prevSlide" class="nets-popup__top-slider__btn nets-popup__top-slider__left">
            <img :src="popupLeft" alt="">
          </button>
          <button @click="nextSlide" class="nets-popup__top-slider__btn nets-popup__top-slider__right">
            <img :src="popupRight" alt="">
          </button>
          <div class="nets-popup__top-slider__wrapper">
            <div
                @click="setCurrent"
                class="nets-popup__top-slider__wrapper-item"
                :id="'_'+i.coin"
                v-for="(i, idx) in netsParse"
                :class="{'left current': idx === 0, 'center': idx === 1, 'right': idx === 2, 'next': idx > 2}"
            >
              <div v-if="!i.id" class="nets-popup__top-slider__wrapper-item__preloader">
                <div><span>{</span><span>}</span></div>
                <p>Актуализация данных</p>
              </div>
              <div class="nets-popup__top-slider__wrapper-item__dark"></div>
              <div class="nets-popup__top-slider__wrapper-item__background">
                <img :src="i.img" alt="">
                <div class="nets-popup__top-slider__wrapper-item__background-linear"></div>
                <bar v-if="i.week_data.length" :sliderData="i.week_data" class="nets-popup__top-slider__wrapper-item__background-chart"></bar>
              </div>
              <div class="nets-popup__top-slider__wrapper-item__info">
                <div class="nets-popup__top-slider__wrapper-item__info-name">
                  <p class="nets-popup__top-slider__wrapper-item__info-name__title">{{i.short_title}}</p>
                  <p class="nets-popup__top-slider__wrapper-item__info-name__subtitle">{{i.token}}</p>
                </div>
                <div class="nets-popup__top-slider__wrapper-item__info-fee">
                  <img v-if="!i.price_dynamics" class="course-arrow__top" :src="arrowDown" alt="">
                  <img v-if="i.price_dynamics" style="transform: rotate(180deg)" class="course-arrow__top" :src="arrowDown" alt="">
                  <p>{{ i.price_change_percentage }} %</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
            v-for="(i, idx) in netsParse"
            class="nets-popup__stat"
            :class="{'current': idx === 0}"
        >
          <div class="nets-popup__stat-title">
            <div class="nets-popup__stat-title__blockchain">
              <p class="nets-popup__stat-title__blockchain-title">{{ $t('popup.blockchain') }}</p>
              <p class="nets-popup__stat-title__blockchain-subtitle">{{i.title}}</p>
            </div>
            <div class="nets-popup__stat-title__token">
              <p class="nets-popup__stat-title__token-title">{{ $t('popup.token') }}</p>
              <p class="nets-popup__stat-title__token-subtitle">{{i.token}}</p>
            </div>
          </div>
          <div class="nets-popup__stat-info">
            <div class="nets-popup__stat-info__positions">
              <div class="nets-popup__stat-info__positions-top">
                <div class="nets-popup__stat-info__positions-top__coin">
                  <img :src="i.img" alt="">
                  <div class="nets-popup__stat-info__positions-top__coin-name">
                    <p class="nets-popup__stat-info__positions-top__coin-name__title">{{i.short_title}}</p>
                    <p class="nets-popup__stat-info__positions-top__coin-name__subtitle">{{i.token}}</p>
                  </div>
                </div>
              </div>
              <div class="nets-popup__stat-info__positions-values">
                <div class="nets-popup__stat-info__positions-price">
                  <p>${{i.price}}</p>
                </div>
                <div class="nets-popup__stat-info__positions-coingecko">
                  <p>Coingecko</p>
                  <div class="nets-popup__stat-info__positions-coingecko__value">
                    <img v-if="!i.price_dynamics" class="course-arrow__bottom" :src="arrowDownDark" alt="">
                    <img v-if="i.price_dynamics" style="transform: rotate(180deg)" class="course-arrow__bottom" :src="arrowDownDark" alt="">
                    <p>{{i.price_change_percentage}}% (24h)</p>
                  </div>
                </div>
                <div class="nets-popup__stat-info__positions-market">
                  <p>Market Cap</p>
                  <p>{{i.market_cap}}$</p>
                </div>
                <div class="nets-popup__stat-info__positions-vol">
                  <p>Inflation</p>
                  <p>{{i.inflation}}%</p>
                </div>
              </div>
            </div>
            <div class="nets-popup__stat-info__graph">
              <bar-graph v-if="i.week_data.length" :sliderDataGraph="i.week_data" class="nets-popup__stat-info__graph-chart"/>
              <div class="nets-popup__stat-info__graph-line"></div>
              <div class="nets-popup__stat-info__graph-line"></div>
              <div class="nets-popup__stat-info__graph-line"></div>
              <div class="nets-popup__stat-info__graph-line"></div>
              <div class="nets-popup__stat-info__graph-line"></div>
              <div class="nets-popup__stat-info__graph-labels">
                <p class="nets-popup__stat-info__graph-labels__item">14:00</p>
                <p class="nets-popup__stat-info__graph-labels__item">17:00</p>
                <p class="nets-popup__stat-info__graph-labels__item">21:00</p>
                <p class="nets-popup__stat-info__graph-labels__item">01:00</p>
                <p class="nets-popup__stat-info__graph-labels__item">05:00</p>
              </div>
            </div>
          </div>
        </div>
        <div class="nets-popup__buttons-container">
          <button @click="toTutorial">
            <div></div>
            <p>{{ $t('popup.calculator.tutorial') }}</p>
          </button>
          <button @click="setCalc">
            <div></div>
            <p>{{ $t('popup.button') }}</p>
          </button>
        </div>
      </div>
    </div>
    <h5>{{ $t('delegates.title') }}</h5>
    <div class="nets-container">
      <div :id="'net-'+i.coin" class="nets-item" v-for="i in netsParse">
        <img
            class="nets-item__logo"
            :src="i.img"
            alt=""
        >
        <p class="nets-item__title">{{ i.title }}</p>
        <p v-if="$i18n.locale !== 'en'" class="nets-item__subtitle">{{ i.subtitle }}</p>
        <p v-if="$i18n.locale !== 'es'" class="nets-item__subtitle">{{ i.subtitle_en }}</p>
        <p class="nets-item__percent">Annual percent <span>{{ i.annual_comission }}%</span></p>
        <p class="nets-item__fee">Stakewolle Fee <span>{{ i.stakewolle_comission }}</span></p>
        <div @click="getPopup(i.title)" :id="i.title" class="nets-item__button">
          <div class="nets-item__button-background"></div>
          <p>{{ $t('staking') }}</p>
        </div>
      </div>
    </div>
    <img class="nets-bg-image-violet" :src="violet" alt="">
    <img class="nets-bg-image-violet-p" :src="violet_p" alt="">
    <img class="nets-bg-image-white-blur" :src="whiteBlur" alt="">
    <img class="nets-bg-image-white-dark-blur" :src="whiteDarkBlur" alt="">
    <img class="nets-bg-image-net-k" :src="net_k" alt="">
    <img id="nets-bottom" :src="bottom" alt="">
  </div>
</template>

<script>

import rings from "../static/nets/rings.webp"
import bottom from "../static/nets/bottom.svg"
import popupLeft from '../static/popup/left.svg'
import popupRight from '../static/popup/right.svg'
import arrowDown from '../static/popup/ArrowCaretDown.svg'
import blockTime from '../static/popup/BlockTime.svg'
import arrowDownDark from '../static/popup/Arrow Caret Down Dark.svg'
import whiteDarkBlur from '../static/nets/white-dark-blur.svg'
import whiteBlur from '../static/nets/white-blur.svg'
import violet from '../static/nets/round-violet.svg'
import violet_p from '../static/redesign/Round violet (2).svg'
import net_k from '../static/redesign/Round orange (1).svg'
import copy from '@/static/nets/copy.svg'



export default {
  name: "Nets",
  data: () => ({
    bottom,
    rings, popupLeft, popupRight, arrowDown, blockTime, arrowDownDark,
    whiteDarkBlur, whiteBlur, violet, violet_p, net_k, copy,
    sliderData: [],
    sliderDataGraph: [],
    current: 0,
    netsToCalc: [],
    netsParse: [],
    nets: [],
  }),

  methods: {

    setCurrent(e){
      const netsItem = document.querySelectorAll('.nets-popup__top-slider__wrapper-item');
      const popupStat = document.querySelectorAll('.nets-popup__stat');
      for(let i=0; i<this.nets.length; i++){
        if(netsItem[i].classList.contains('current') && popupStat[i].classList.contains('current')){
          netsItem[i].classList.remove('current')
          popupStat[i].classList.remove('current')
        }
      }
      this.current = 0
      for(let i=0; i<this.nets.length; i++){
        if('_'+this.nets[i].coin !== e.target.parentNode.id){
          this.current++
        } else {
          netsItem[this.current].classList.add('current');
          popupStat[this.current].classList.add('current');
          break
        }
      }

    },
    copyAdres(){
      let el = document.querySelectorAll('.calculator-token-input')[1]
      const popupCopy = document.querySelectorAll('.popup-copy')[1]
      const body = document.querySelector('body')
      if(body.scrollWidth <=427){
        let oldContentEditable = el.contentEditable,
            oldReadOnly = el.readOnly,
            range = document.createRange();

        el.contentEditable = true;
        el.readOnly = false;
        range.selectNodeContents(el);

        let s = window.getSelection();
        s.removeAllRanges();
        s.addRange(range);

        el.setSelectionRange(0, 999999); // A big number, to cover anything that could be inside the element.

        el.contentEditable = oldContentEditable;
        el.readOnly = oldReadOnly;

        document.execCommand('copy');
      } else {
        let testingCodeToCopy = document.querySelectorAll('.calculator-token-input')[1]
        testingCodeToCopy.setAttribute('type', 'text')    // 不是 hidden 才能複製
        testingCodeToCopy.select()

        try {
          let successful = document.execCommand('copy');
          console.log(successful)
        } catch (err) {
          alert('Oops, unable to copy');
        }

        /* unselect the range */
        testingCodeToCopy.setAttribute('type', 'hidden')
        window.getSelection().removeAllRanges()
      }
      popupCopy.style.zIndex = '9999'
      popupCopy.style.opacity = '1'
      setTimeout(()=>{
        popupCopy.style.opacity = '0'
        popupCopy.style.zIndex = '-1'
      }, 3000)
    },
    nextSlide(){
      const netsItem = document.querySelectorAll('.nets-popup__top-slider__wrapper-item');
      const netsNext = document.querySelectorAll('.nets-popup__top-slider__wrapper-item.next');
      const current = document.querySelector('.nets-popup__top-slider__wrapper-item.current');
      const left = document.querySelector('.nets-popup__top-slider__wrapper-item.left');
      const center = document.querySelector('.nets-popup__top-slider__wrapper-item.center');
      const right = document.querySelector('.nets-popup__top-slider__wrapper-item.right');
      const popupStat = document.querySelectorAll('.nets-popup__stat');


      if(this.current < this.netsParse.length-1){

        netsItem[this.current].classList.remove('current');
        popupStat[this.current].classList.remove('current');
        this.current++;
        netsItem[this.current].classList.add('current');
        popupStat[this.current].classList.add('current');
        if(current.classList.contains('right')){
          netsNext[0].classList.remove('next')
          netsNext[0].classList.add('right')
          right.classList.remove('right')
          right.classList.add('center')
          center.classList.remove('center')
          center.classList.add('left')
          left.classList.remove('left')
          left.classList.add('prev')
        }
      }
    },
    prevSlide(){
      const netsItem = document.querySelectorAll('.nets-popup__top-slider__wrapper-item');
      const netsPrev = document.querySelectorAll('.nets-popup__top-slider__wrapper-item.prev');
      const left = document.querySelector('.nets-popup__top-slider__wrapper-item.left');
      const center = document.querySelector('.nets-popup__top-slider__wrapper-item.center');
      const right = document.querySelector('.nets-popup__top-slider__wrapper-item.right');
      const current = document.querySelector('.nets-popup__top-slider__wrapper-item.current');
      const popupStat = document.querySelectorAll('.nets-popup__stat')

      if(this.current>0){
        netsItem[this.current].classList.remove('current');
        popupStat[this.current].classList.remove('current');
        this.current--;
        netsItem[this.current].classList.add('current');
        popupStat[this.current].classList.add('current');
        if(current.classList.contains('left')){
          netsPrev[netsPrev.length-1].classList.remove('prev')
          netsPrev[netsPrev.length-1].classList.add('left')
          right.classList.remove('right')
          right.classList.add('next')
          center.classList.remove('center')
          center.classList.add('right')
          left.classList.remove('left')
          left.classList.add('center')
        }
      }
    },
    popupClose(){
      const popup = document.querySelector('.nets-popup__background');
      popup.style.display = 'none'
      const body = document.querySelector('body')
      body.style.overflowY = 'scroll'
      body.style.height = 'unset'
    },
    toTutorial () {
      localStorage.setItem('token-name', this.nets[this.current].token)
      localStorage.setItem('net-name', this.nets[this.current].title)
      localStorage.setItem('token-validator', this.nets[this.current].adres)
      const body = document.querySelector('body')
      body.style.overflowY = 'scroll'
      body.style.height = 'unset'
      if (this.$i18n.locale === 'es'){
        this.$router.push('/es/tutorial')
      } else {
        this.$router.push('/tutorial')
      }

    },
    getPopup(coin){
      const netsItems = document.querySelectorAll('.nets-item')
      for(let i=0; i<netsItems.length; i++){
        if(netsItems[i].classList.contains('nets-item-active')){
          netsItems[i].classList.remove('nets-item-active')
        }
      }
      const popup = document.querySelector('.nets-popup__background');
      popup.style.display = 'flex'
      const body = document.querySelector('body')
      body.style.overflowY = 'hidden'
      body.style.height = '100vh'

      let netsItem = document.querySelectorAll('.nets-popup__top-slider__wrapper-item')
      let netsPopupStat = document.querySelectorAll('.nets-popup__stat')
      for(let n=0; n < netsItem.length; n++) {
        if(this.netsParse[n].title === coin){
          this.current = n
        }
      }
      for(let z=0; z < netsItem.length; z++) {
        netsItem[z].classList.remove('prev') || netsItem[z].classList.remove('next') || netsItem[z].classList.remove('left') || netsItem[z].classList.remove('center') || netsItem[z].classList.remove('right') || netsItem[z].classList.remove('current');
        netsPopupStat[z].classList.remove('current')
      }
      for(let j=0; j <= this.current; j++){
        if(this.netsParse[j].title !== coin){
          netsItem[j].classList.add('prev')
        } else {
          if(j <= this.netsParse.length-3){
            netsItem[j].classList.add('current')
            netsItem[j].classList.add('left')
            netsItem[j+1].classList.add('center')
            netsItem[j+2].classList.add('right')
            netsPopupStat[j].classList.add('current')
          }else if (j <= this.netsParse.length-2){
            netsItem[j].classList.add('current')
            netsItem[j].classList.add('center')
            if (netsItem[j-1]) {
              netsItem[j-1].classList.add('left')
              netsItem[j+1].classList.add('right')
              netsItem[j-1].classList.remove('prev')
              netsPopupStat[j].classList.add('current')
            }
          }else if(j <= this.netsParse.length-1){
            netsItem[j].classList.add('current')
            netsItem[j].classList.add('right')
            if (netsItem[j-1]) {
              netsItem[j-1].classList.add('center')
              netsItem[j-2]?.classList.add('left')
              netsItem[j-1].classList.remove('prev')
              netsItem[j-2]?.classList.remove('prev')
            }
          }
          netsPopupStat[j].classList.add('current')
        }
      }
      for(let k = this.current+3; k<=netsItem.length-1; k++){
        netsItem[k].classList.add('next')
      }
    },
    setCalc(){
      this.netsToCalc = [
        {
          'title': this.nets[this.current].title,
          'img': this.nets[this.current].img,
          'fee': this.nets[this.current].annual_comission,
          'course': this.nets[this.current].price,
          'short_title': this.nets[this.current].short_title,
          'kepler_link': this.nets[this.current].kepler_link,
          'adres': this.nets[this.current].adres,
          'token': this.nets[this.current].token,
          'cosmostation': this.nets[this.current].cosmostation,
          'desmos_link': this.nets[this.current].desmos_link,
          'pingpub_link': this.nets[this.current].pingpub_link,
          'ready': true
        }
      ]
      const calc = document.querySelectorAll('.calc-validator')[0]
      calc.style.display = 'flex'
    },
    setStartCalc() {
      this.netsToCalc = [
        {
          'img': this.netsParse[this.current].img,
          'title': this.netsParse[this.current].title,
          'fee': this.netsParse[this.current].annual_comission,
          'course': this.netsParse[this.current].price,
          'kepler_link': this.netsParse[this.current].kepler_link,
          'adres': this.netsParse[this.current].adres,
          'token': this.netsParse[this.current].token,
          'cosmostation': this.netsParse[this.current].cosmostation,
          'desmos_link': this.nets[this.current].desmos_link,
          'pingpub_link': this.nets[this.current].pingpub_link,
          'ready': false
        }
      ]
    },
    round(number){
      return +number.toFixed(4);
    }
  },
  async created() {

  },
  watch: {
    __netsCount() {
      this.nets = this.$store.state.nets.nets
      this.netsParse = this.$store.state.nets.nets
      this.setStartCalc()
    },
  },
  computed: {
    __netsCount() {
      return this.$store.state.nets.nets.length
    },
  }
}
</script>
