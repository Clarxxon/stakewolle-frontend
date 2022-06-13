<template>
  <div>
    <div class="loader">
      <div class="loader-logo">
        <img src="../static/loader-logo.svg" alt="">
        <div>
          <p class="loader-logo-title">takewolle</p>
          <p class="loader-logo-subtitle">Professional blockchain validator</p>
        </div>
      </div>
      <div class="loader-circle"></div>
    </div>
    <div class="cookies">
      <p class="cookies-text">{{ $t('cookie') }}</p>
      <button @click="hideCookie" class="cookies-btn">
        <span class="cookies-btn__bg"></span>
        <p>Ок</p>
      </button>
    </div>
    <mobile-navigation v-bind:navigation="navigation"></mobile-navigation>
    <mobile-start-block></mobile-start-block>
    <mobile-about-us id="m-about"></mobile-about-us>
    <mobile-delegates v-bind:delegates="delegates"></mobile-delegates>
    <mobile-stacking :preload="preload" v-bind:nets="nets"></mobile-stacking>
    <mobile-validators v-bind:netsToValidators="netsToValidators"></mobile-validators>
    <mobile-stonks></mobile-stonks>
    <mobile-calculator v-bind:nets="nets" id="m-calc"></mobile-calculator>
    <mobile-benefits></mobile-benefits>
    <mobile-years></mobile-years>
    <mobile-call id="m-contacts"></mobile-call>
    <mobile-footer v-bind:navigation="navigation"></mobile-footer>
    <a href="https://akash.network" target="_blank" class="powered-by-akash-wrapper">
      <img class="powered-by-akash" :src="powered" alt="">
    </a>
  </div>
</template>

<script>
import powered from '../static/powered-by-akash.webp'
export default {
  name: "mobile",
  components: {},
  props: {
    nets: [],
    netsToValidators: [],
    delegates: [],
    preload: { type: Function, required: true }
  },
  data () {
    return{
      powered,
      navigation: {
        about: true,
        profit: true,
        guide: true,
        contacts: true,
        blog: true,
        stake: true
      },
    }
  },
  methods: {
    hideCookie () {
      const cookie = document.querySelector('.cookies')
      localStorage.setItem('cookieFlag', 'true')
      cookie.className = 'cookies-hide'
    },
  },
  mounted () {
    const cookie = document.querySelector('.cookies')
    if (localStorage.getItem('cookieFlag') === 'true'){
      cookie.className = 'cookies-hide'
    } else {
      cookie.className = 'cookies'
    }
  }
}
</script>