<template>
  <div class="calc-validator">
    <p class="popup-copy">{{$t('popup.copy')}}</p>
    <div class="calc-validator__wrapper">
      <div class="calc-validator__title">
        <img :src="netsToCalc[0].img" alt="">
        <p>{{netsToCalc[0].title}}</p>
      </div>
      <div @click="hide" class="calc-validator__wrapper__lock">
        <div class="calc-validator__wrapper__lock-item"></div>
        <div class="calc-validator__wrapper__lock-item"></div>
      </div>
      <p class="stakewolle-validator">Stakewolle.com Validator</p>
      <div class="calculator-token">
        <p>{{ netsToCalc[0].adres }}</p>
        <input :value="netsToCalc[0].adres" tabindex='-1' contenteditable="true" type="text" class="calculator-token-input">
        <button @click="copyAdres">
          <img :src="copy" alt="">
        </button>
      </div>
      <div class="calculator-wrapper">
        <div class="calculator-wrapper__range">
          <div v-if="netsToCalc[0].ready" class="calculator-wrapper__range-fake"></div>
          <input v-if="netsToCalc[0].ready" class="calc-validator-range" min="0" max="100000" value="10000" @input="calculate" type="range">
        </div>
        <div class="calculator-wrapper__description">
          <div v-for="i in netsToCalc" class="calculator-wrapper__info current">
            <div class="calculator-wrapper__info-header">
              <p>{{ $t('calculator.how_many') }} <span>{{i.token}}</span>{{ $t('calculator.do_you') }}?</p>
              <p>{{ $t('popup.calculator.year_profit') }}</p>
            </div>
            <div class="calculator-wrapper__info-values">
              <p class="calculator-wrapper__info-values__price">10,000</p>
              <p>{{i.fee}}%</p>
            </div>
            <div class="calculator-wrapper__info-stonks">
              <div class="calculator-wrapper__info-stonks__line"></div>
              <div class="calculator-wrapper__info-stonks__item">
                <p>{{ $t('popup.calculator.ed') }}</p>
                <p><span class="ed-tokens">0</span> {{i.token}}</p>
                <p>$ <span class="ed-price">0</span></p>
              </div>
              <div class="calculator-wrapper__info-stonks__line"></div>
              <div class="calculator-wrapper__info-stonks__item">
                <p>{{ $t('popup.calculator.em') }}</p>
                <p><span class="em-tokens">0</span> {{i.token}}</p>
                <p>$ <span class="em-price">0</span></p>
              </div>
              <div class="calculator-wrapper__info-stonks__line"></div>
              <div class="calculator-wrapper__info-stonks__item">
                <p>{{ $t('popup.calculator.ey') }}</p>
                <p><span class="eg-tokens">0</span> {{i.token}}</p>
                <p>$ <span class="eg-price">0</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="calc-validator__buttons">
        <button class="cosmostation-link" v-if="netsToCalc[0].cosmostation !== '-'">
          <a target="_blank" :href="netsToCalc[0].cosmostation"></a>
          <div class="calc-validator__buttons-bg"></div>
          <div>
            <p>{{ $t('popup.calculator.cosmos') }}</p>
            <img :src="csmst" alt="">
          </div>
        </button>
        <button v-if="netsToCalc[0].kepler_link !== '-'">
          <a target="_blank" :href="netsToCalc[0].kepler_link"></a>
          <div class="calc-validator__buttons-bg"></div>
          <div>
            <p>{{ $t('popup.calculator.kepler') }}</p>
            <img :src="kplr" alt="">
          </div>
        </button>
        <button v-if="netsToCalc[0].desmos_link && netsToCalc[0].desmos_link !== '-'">
          <a target="_blank" :href="netsToCalc[0].desmos_link"></a>
          <div class="calc-validator__buttons-bg"></div>
          <div>
            <p>{{ $t('popup.calculator.desmos') }}</p>
            <img src="../static/redesign/desmos.svg" alt="">
          </div>
        </button>
        <button v-if="netsToCalc[0].pingpub_link && netsToCalc[0].pingpub_link !== '-'">
          <a target="_blank" :href="netsToCalc[0].pingpub_link"></a>
          <div class="calc-validator__buttons-bg"></div>
          <div>
            <p>{{ $t('popup.calculator.pingpub') }}</p>
            <img src="../static/redesign/Group.svg" alt="">
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>

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
import kplr from '@/static/nets/kepler.svg'
import csmst from '@/static/nets/cosmostation.svg'
import copy from '@/static/nets/copy.svg'

export default {
  name: "CalcValidator",
  props: {
    netsToCalc: {
      type: Array
    }
  },
  data(){
    return{
      nets: [],
      Cosmos, Akash, BandProtocol, CertiK, Comdex,
      Desmos, eMoney, Iris, Juno, Kava, Ki, Mediblock,
      Osmosis, Persistence, SecretNetwork, SifChain, kplr,
      current: 0, copy, csmst
    }
  },
  methods:{
    copyAdres(){
      let el = document.querySelector('.calculator-token-input')
      const popupCopy = document.querySelector('.popup-copy')
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
        let testingCodeToCopy = document.querySelector('.calculator-token-input')
        testingCodeToCopy.setAttribute('type', 'text')    // 不是 hidden 才能複製
        testingCodeToCopy.select()

        try {
          let successful = document.execCommand('copy');
        } catch (err) {
          alert('Oops, unable to copy');
        }

        /* unselect the range */
        testingCodeToCopy.setAttribute('type', 'hidden')
        window.getSelection().removeAllRanges()
      }

      popupCopy.style.opacity = '1'
      setTimeout(()=>{
        popupCopy.style.opacity = '0'
      }, 3000)
    },
    hide () {
      const calc = document.querySelectorAll('.calc-validator')
      for(let i=0; i<calc.length; i++){
        calc[i].style.display = 'none'
      }

      const mainPrice = document.querySelectorAll('.calc-validator .calculator-wrapper__info-values__price')
      const fakeLine = document.querySelector('.calc-validator .calculator-wrapper__range-fake')
      const validatorRange = document.querySelector('.calc-validator-range')
      fakeLine.style.width = '10%'
      validatorRange.value = 10000
      mainPrice[this.current].innerText = '10,000'
    },
    toTutorial () {
      window.open('https://stakewolle.com/page23916167.html');
    },
    toKepler () {
      window.open(this.netsToCalc.kepler_link);
    },
    calculate(e){
      const mainPrice = document.querySelectorAll('.calculator-wrapper__info-values__price')
      const edTokens = document.querySelectorAll('.ed-tokens')
      const emTokens = document.querySelectorAll('.em-tokens')
      const egTokens = document.querySelectorAll('.eg-tokens')
      const edPrice = document.querySelectorAll('.ed-price')
      const emPrice = document.querySelectorAll('.em-price')
      const egPrice = document.querySelectorAll('.eg-price')
      const fakeLine = document.querySelector('.calc-validator .calculator-wrapper__range-fake')


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

      edTokens[this.current].innerText = Math.floor(((e.target.value/100)*this.netsToCalc[this.current].fee)/365)
      emTokens[this.current].innerText = Math.floor(((e.target.value/100)*this.netsToCalc[this.current].fee)/12)
      egTokens[this.current].innerText = Math.floor(((e.target.value/100)*this.netsToCalc[this.current].fee)/1)

      edPrice[this.current].innerText = Math.floor((Math.floor(((e.target.value/100)*this.netsToCalc[this.current].fee)/365))*this.netsToCalc[this.current].course)
      emPrice[this.current].innerText = Math.floor((Math.floor(((e.target.value/100)*this.netsToCalc[this.current].fee)/12))*this.netsToCalc[this.current].course)
      egPrice[this.current].innerText = Math.floor((Math.floor(((e.target.value/100)*this.netsToCalc[this.current].fee)/1))*this.netsToCalc[this.current].course)

      fakeLine.style.width = (e.target.value/1000) + '%'
    }
  },
  mounted(){
    const mainPrice = document.querySelectorAll('.calc-validator .calculator-wrapper__info-values__price')
    const edTokens = document.querySelectorAll('.ed-tokens')
    const emTokens = document.querySelectorAll('.em-tokens')
    const egTokens = document.querySelectorAll('.eg-tokens')
    const edPrice = document.querySelectorAll('.ed-price')
    const emPrice = document.querySelectorAll('.em-price')
    const egPrice = document.querySelectorAll('.eg-price')
    const fakeLine = document.querySelector('.calc-validator .calculator-wrapper__range-fake')


    mainPrice[this.current].innerText = '10,000'
    edTokens[this.current].innerText = Math.floor(((10000/100)*this.netsToCalc[this.current].fee)/365)
    emTokens[this.current].innerText = Math.floor(((10000/100)*this.netsToCalc[this.current].fee)/12)
    egTokens[this.current].innerText = Math.floor(((10000/100)*this.netsToCalc[this.current].fee)/1)

    edPrice[this.current].innerText = Math.floor((Math.floor(((10000/100)*this.netsToCalc[this.current].fee)/365))*this.netsToCalc[this.current].course)
    emPrice[this.current].innerText = Math.floor((Math.floor(((10000/100)*this.netsToCalc[this.current].fee)/12))*this.netsToCalc[this.current].course)
    egPrice[this.current].innerText = Math.floor((Math.floor(((10000/100)*this.netsToCalc[this.current].fee)/1))*this.netsToCalc[this.current].course)
  },
  async created() {

  }
}
</script>

<style scoped>

</style>