<template>
  <div class="mobile-stacking">
    <calc-validator v-bind:netsToCalc="netsToCalc"></calc-validator>
    <div class="nets-popup__background">
      <div class="nets-popup">
        <div @click="popupClose" class="nets-popup__lock">
          <div class="nets-popup__lock-item"></div>
          <div class="nets-popup__lock-item"></div>
        </div>
        <h3>{{ $t('popup.title') }}</h3>
        <p class="popup-copy">{{$t('popup.copy')}}</p>
        <div class="calculator-token">
          <p>{{ netsParse[current].adres }}</p>
          <input :value="netsParse[current].adres" tabindex='-1' contenteditable="true" type="text" class="calculator-token-input">
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
            <div v-for="i in netsParse" :class="i.nets_popup_class_mobile">
              <div class="nets-popup__top-slider__wrapper-item__dark"></div>
              <div class="nets-popup__top-slider__wrapper-item__background">
                <img :src="i.img" alt="">
                <div class="nets-popup__top-slider__wrapper-item__background-linear"></div>
                <bar v-if="i.week_data.length>0 && i.ready_to_look" :sliderData="i.week_data" class="nets-popup__top-slider__wrapper-item__background-chart"></bar>
              </div>
              <div class="nets-popup__top-slider__wrapper-item__info">
                <div class="nets-popup__top-slider__wrapper-item__info-name">
                  <p class="nets-popup__top-slider__wrapper-item__info-name__title">{{i.short_title}}</p>
                  <p class="nets-popup__top-slider__wrapper-item__info-name__subtitle">{{i.token}}</p>
                </div>
                <div class="nets-popup__top-slider__wrapper-item__info-fee">
                  <img v-if="!i.price_dynamics" class="course-arrow__top" :src="arrowDown" alt="">
                  <img v-if="i.price_dynamics" style="transform: rotate(180deg)" class="course-arrow__top" :src="arrowDown" alt="">
                  <p>{{ i.fee }} %</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-for="i in netsParse" :class="i.nets_stat_class">
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
                <div class="nets-popup__stat-info__positions-top__blocktime">
                  <img :src="blockTime" alt="">
                  <p>Block Time {{i.block_time}}mc</p>
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
                    <p>{{i.fee}}% (24h)</p>
                  </div>
                </div>
                <div class="nets-popup__stat-info__positions-market">
                  <p>APY</p>
                  <p>{{i.apy}}%</p>
                </div>
                <div class="nets-popup__stat-info__positions-vol">
                  <p>Inflation</p>
                  <p>{{i.inflation}}%</p>
                </div>
              </div>
            </div>
            <div class="nets-popup__stat-info__graph">
              <bar-graph v-if="i.week_data.length>0 && i.ready_to_look" :sliderDataGraph="i.week_data" class="nets-popup__stat-info__graph-chart"></bar-graph>
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
    <div class="mobile-content">
      <h4 id="m-nets-container">{{ $t('delegates.title') }}</h4>
      <div class="mobile-stacking__slider">
        <div class="mobile-stacking__slider-top">
          <button @click="toLeft" class="mobile-stacking__slider-top__btn-left">
            <img :src="arrowLeft" alt="">
          </button>
          <button @click="toRight" class="mobile-stacking__slider-top__btn-right">
            <img :src="arrowRight" alt="">
          </button>
          <div @click="sliderClick" v-for="i in netsParse" :class="i.nets_class_slider_mobile">
            <img :src="i.img" alt="">
          </div>
        </div>
        <div class="mobile-stacking__slider-info">
          <div v-for="i in netsParse" :class="i.nets_info_class_mobile">
            <p class="mobile-stacking__slider-info__item-title">{{ i.title }}</p>
            <p v-if="$i18n.locale !== 'en'" class="mobile-stacking__slider-info__item-subtitle">{{ i.subtitle }}</p>
            <p v-if="$i18n.locale !== 'es'" class="mobile-stacking__slider-info__item-subtitle">{{ i.subtitle_en }}</p>
            <p class="mobile-stacking__slider-info__item-percents">Annual percent: <span>{{ i.annual_comission }}%</span></p>
            <p class="mobile-stacking__slider-info__item-percents">Stakewolle Fee: <span>{{ i.stakewolle_comission }}</span></p>
            <div class="mobile-content">
              <button @click="getPopup" class="mobile-stacking__slider-info__item-btn">
                <div class="mobile-stacking__slider-info__item-btn__bg"></div>
                <p>{{ $t('staking') }}</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import arrowLeft from '@/static/mobile/left.svg'
import arrowRight from '@/static/mobile/right.svg'
import popupLeft from '@/static/popup/left.svg'
import popupRight from '@/static/popup/right.svg'
import arrowDown from '@/static/popup/ArrowCaretDown.svg'
import blockTime from '@/static/popup/BlockTime.svg'
import arrowDownDark from '@/static/popup/Arrow Caret Down Dark.svg'
import copy from '@/static/nets/copy.svg'


export default {
  name: "mobileStacking",
  props: {
    nets: []
  },
  data(){
    return{
      copy,
      arrowLeft, arrowRight, popupLeft, popupRight,
      arrowDown, blockTime, arrowDownDark,
      current: 0,
      sliderData: [],
      sliderDataGraph: [],
      netsToCalc: [],
      netsParse: []
    }
  },
  async mounted() {
    // let arrowsTop = document.querySelectorAll('.course-arrow__top')
    // let arrowsBottom = document.querySelectorAll('.course-arrow__bottom')
    // for(let i=0; i < this.netsParse.length; i++){
    //   if(parseFloat(this.netsParse[i].fee)>=0){
    //     arrowsTop[i].style.transform = 'rotate(180deg)'
    //     arrowsBottom[i].style.transform = 'rotate(180deg)'
    //   } else {
    //     arrowsTop[i].style.transform = 'rotate(0deg)'
    //     arrowsBottom[i].style.transform = 'rotate(0deg)'
    //   }
    // }
    this.netsToCalc = [
      {
        'img': this.netsParse[this.current].img,
        'title': this.netsParse[this.current].title,
        'percent': this.netsParse[this.current].annual_comission,
        'fee': this.netsParse[this.current].fee,
        'course': this.netsParse[this.current].price,
        'adres': this.netsParse[this.current].adres,
        'token': this.netsParse[this.current].token,
        'cosmostation': this.netsParse[this.current].cosmostation,
        'desmos_link': this.nets[this.current].desmos_link,
        'pingpub_link': this.nets[this.current].pingpub_link,
      }
    ]
  },
  created(){
    this.netsParse = this.nets
    this.netsToCalc = [
      {
        'img': this.netsParse[this.current].img,
        'title': this.netsParse[this.current].title,
        'percent': this.netsParse[this.current].annual_comission,
        'fee': this.netsParse[this.current].fee,
        'course': this.netsParse[this.current].price,
        'adres': this.netsParse[this.current].adres,
        'token': this.netsParse[this.current].token,
        'cosmostation': this.netsParse[this.current].cosmostation,
        'desmos_link': this.nets[this.current].desmos_link,
        'pingpub_link': this.nets[this.current].pingpub_link,
        'ready': false
      }
    ]
  },
  methods: {
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

      popupCopy.style.opacity = '1'
      popupCopy.style.zIndex = '10'
      setTimeout(()=>{
        popupCopy.style.opacity = '0'
        popupCopy.style.zIndex = '-1'
      }, 3000)
    },

    toTutorial () {
      const mobileNavigationMenu = document.querySelector('.mobile-navigation__menu');
      const mobileMenuBtn = document.querySelector('.mobile-navigation__menu-btn');
      const body = document.querySelector('body')

      mobileNavigationMenu.style.left = '-100%';
      mobileMenuBtn.classList.remove('button-true');
      body.style.overflowY = 'unset'
      body.style.height = 'unset'

      localStorage.setItem('token-name', this.nets[this.current].token)
      localStorage.setItem('net-name', this.nets[this.current].title)
      localStorage.setItem('token-validator', this.nets[this.current].adres)
      if (this.$i18n.locale === 'es'){
        this.$router.push('/es/tutorial')
      } else {
        this.$router.push('/tutorial')
      }
    },
    sliderClick (e) {
      const item = document.querySelectorAll('.mobile-stacking__slider-top .mobile-stacking__slider-top__item')
      const infos = document.querySelectorAll('.mobile-stacking__slider-info .mobile-stacking__slider-info__item')
      const targetItem = document.querySelector('.mobile-stacking__slider-top .'+e.target.parentNode.classList[1])
      document.querySelector('.mobile-stacking__slider-top .current').classList.remove('current')
      document.querySelector('.mobile-stacking__slider-info__item.current').classList.remove('current')
      for(let i = 0; i < item.length; i++){
        if(item[i] === targetItem){
          this.current = i
          targetItem.classList.add('current')
          infos[i].classList.add('current')
        }
      }
    },
    toRight(){
      const netsItem = document.querySelectorAll('.nets-popup__top-slider__wrapper-item');
      const netsNext = document.querySelectorAll('.nets-popup__top-slider__wrapper-item.next');
      const popupStat = document.querySelectorAll('.nets-popup__stat');
      if(this.current < this.nets.length-1){
        netsItem[this.current].classList.remove('current');
        netsItem[this.current].classList.add('prev');
        popupStat[this.current].classList.remove('current');
        netsItem[this.current+1].classList.add('current');
        popupStat[this.current+1].classList.add('current');
        netsNext[0].classList.remove('next');
        netsNext[0].classList.add('current');
      }

      let netsCount = this.nets.length;
      const current = document.querySelector('.mobile-stacking__slider-top__item.current');
      const left = document.querySelector('.mobile-stacking__slider-top__item.left');
      const center = document.querySelector('.mobile-stacking__slider-top__item.center');
      const right = document.querySelector('.mobile-stacking__slider-top__item.right');
      const next = document.querySelectorAll('.mobile-stacking__slider-top__item.next');
      const items = document.querySelectorAll('.mobile-stacking__slider-top__item')
      const infos = document.querySelectorAll('.mobile-stacking__slider-info__item')
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
      const netsItem = document.querySelectorAll('.nets-popup__top-slider__wrapper-item');
      const netsPrev = document.querySelectorAll('.nets-popup__top-slider__wrapper-item.prev');
      const popupStat = document.querySelectorAll('.nets-popup__stat')

      if(this.current>0){
        netsItem[this.current].classList.remove('current');
        netsItem[this.current].classList.add('next');
        popupStat[this.current].classList.remove('current');
        netsItem[this.current-1].classList.add('current');
        popupStat[this.current-1].classList.add('current');
        netsPrev[netsPrev.length-1].classList.remove('prev')
        netsPrev[netsPrev.length-1].classList.add('current')
      }


      let netsCount = this.nets.length;
      const current = document.querySelector('.mobile-stacking__slider-top__item.current');
      const left = document.querySelector('.mobile-stacking__slider-top__item.left');
      const center = document.querySelector('.mobile-stacking__slider-top__item.center');
      const right = document.querySelector('.mobile-stacking__slider-top__item.right');
      const prev = document.querySelectorAll('.mobile-stacking__slider-top__item.prev');
      const items = document.querySelectorAll('.mobile-stacking__slider-top__item')
      const infos = document.querySelectorAll('.mobile-stacking__slider-info__item')
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
    nextSlide(){
      let netsCount = this.nets.length;
      const current = document.querySelector('.mobile-stacking__slider-top__item.current');
      const left = document.querySelector('.mobile-stacking__slider-top__item.left');
      const center = document.querySelector('.mobile-stacking__slider-top__item.center');
      const right = document.querySelector('.mobile-stacking__slider-top__item.right');
      const next = document.querySelectorAll('.mobile-stacking__slider-top__item.next');
      const items = document.querySelectorAll('.mobile-stacking__slider-top__item')
      const infos = document.querySelectorAll('.mobile-stacking__slider-info__item')
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
      }



      const netsItem = document.querySelectorAll('.nets-popup__top-slider__wrapper-item');
      const netsNext = document.querySelectorAll('.nets-popup__top-slider__wrapper-item.next');
      const popupStat = document.querySelectorAll('.nets-popup__stat');
      if(this.current < this.nets.length-1){
        netsItem[this.current].classList.remove('current');
        netsItem[this.current].classList.add('prev');
        popupStat[this.current].classList.remove('current');
        this.current++;
        netsItem[this.current].classList.add('current');
        popupStat[this.current].classList.add('current');
        netsNext[0].classList.remove('next');
        netsNext[0].classList.add('current');
      }


    },
    prevSlide(){
      const current = document.querySelector('.mobile-stacking__slider-top__item.current');
      const left = document.querySelector('.mobile-stacking__slider-top__item.left');
      const center = document.querySelector('.mobile-stacking__slider-top__item.center');
      const right = document.querySelector('.mobile-stacking__slider-top__item.right');
      const prev = document.querySelectorAll('.mobile-stacking__slider-top__item.prev');
      const items = document.querySelectorAll('.mobile-stacking__slider-top__item')
      const infos = document.querySelectorAll('.mobile-stacking__slider-info__item')
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
      }



      const netsItem = document.querySelectorAll('.nets-popup__top-slider__wrapper-item');
      const netsPrev = document.querySelectorAll('.nets-popup__top-slider__wrapper-item.prev');
      const popupStat = document.querySelectorAll('.nets-popup__stat')

      if(this.current>0){
        netsItem[this.current].classList.remove('current');
        netsItem[this.current].classList.add('next');
        popupStat[this.current].classList.remove('current');
        this.current--;
        netsItem[this.current].classList.add('current');
        popupStat[this.current].classList.add('current');
        netsPrev[netsPrev.length-1].classList.remove('prev')
        netsPrev[netsPrev.length-1].classList.add('current')
      }
    },
    popupClose(){
      const popup = document.querySelector('.nets-popup__background');
      popup.style.display = 'none'
      const body = document.querySelector('body');
      body.style.overflowY = 'scroll'
    },
    getPopup(){
      const popup = document.querySelector('.nets-popup__background');
      popup.style.display = 'flex'
      const body = document.querySelector('body')
      body.style.overflowY = 'hidden'
      body.style.height = '100vh'
      const netsItem = document.querySelectorAll('.nets-popup__top-slider__wrapper-item');
      const popupStat = document.querySelectorAll('.nets-popup__stat')
      for(let i=0;i<this.current; i++){
        if(netsItem[i].classList.contains('current')){
          netsItem[i].classList.remove('current')
          popupStat[i].classList.remove('current')
        }
        if(netsItem[i].classList.contains('next')){
          netsItem[i].classList.remove('next')
        }
        netsItem[i].classList.add('prev')
      }
      netsItem[this.current].classList.add('current')
      popupStat[this.current].classList.add('current')
      if(netsItem[this.current].classList.contains('next')){
        netsItem[this.current].classList.remove('next')
      }
    },
    setCalc(){
      this.netsToCalc = [
        {
          'title': this.netsParse[this.current].title,
          'img': this.netsParse[this.current].img,
          'fee': this.netsParse[this.current].annual_comission,
          'course': this.netsParse[this.current].price,
          'short_title': this.netsParse[this.current].short_title,
          'kepler_link': this.netsParse[this.current].kepler_link,
          'adres': this.netsParse[this.current].adres,
          'token': this.netsParse[this.current].token,
          'cosmostation': this.netsParse[this.current].cosmostation,
          'desmos_link': this.nets[this.current].desmos_link,
          'pingpub_link': this.nets[this.current].pingpub_link,
          'ready': true
        }
      ]
      const calc = document.querySelector('.calc-validator')
      calc.style.display = 'flex'
    },
    round(number){
      return +number.toFixed(4);
    }
  }
}
</script>

<style scoped>

</style>