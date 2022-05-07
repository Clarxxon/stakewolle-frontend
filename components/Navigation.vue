<template>
  <div class="nav">
    <nuxt-link v-if="this.$i18n.locale === 'es'" :to="'/'+this.$i18n.locale" class="nav-logo">
      <div class="nav-logo__background"></div>
      <img :src="fav" alt="image"/>
      <p>takewolle</p>
    </nuxt-link>
    <nuxt-link v-if="this.$i18n.locale === 'en'" :to="'/'" class="nav-logo">
      <div class="nav-logo__background"></div>
      <img :src="fav" alt="image"/>
      <p>takewolle</p>
    </nuxt-link>
    <div class="nav-links">
      <a href="https://twitter.com/stakewolle" target="_blank" class="nav-links__item">
        <img :src="twitter" alt="image"/>
      </a>
      <a href="https://t.me/stakewolle" target="_blank" class="nav-links__item">
        <img :src="telegram" alt="image"/>
      </a>
      <a href="mailto:partners@stakewolle.com" class="nav-links__item">
        <img :src="email" alt="image"/>
      </a>
    </div>
    <div class="nav-anchors">
      <a v-if="navigation.about" @click.prevent="openSlide('d-about')" class="nav-anchors__item" href="#d-about">{{ $t('navigation.about_us') }}</a>
      <a v-if="navigation.profit" @click.prevent="openSlide('d-calc')" class="nav-anchors__item" href="#d-calc">{{ $t('navigation.profit') }}</a>
      <nuxt-link v-if="navigation.guide && this.$i18n.locale === 'es'" class="nav-anchors__item" :to="'/'+this.$i18n.locale+'/tutorial'">{{ $t('navigation.guide') }}</nuxt-link>
      <nuxt-link v-if="navigation.guide && this.$i18n.locale === 'en'" class="nav-anchors__item" :to="'/tutorial'">{{ $t('navigation.guide') }}</nuxt-link>
      <a v-if="navigation.contacts" @click.prevent="openSlide('d-contacts')" class="nav-anchors__item" href="/#d-contacts">{{ $t('navigation.contacts') }}</a>
      <a v-if="navigation.blog" class="nav-anchors__item" target="_blank" href="https://medium.com/@stakewolle">{{ $t('navigation.blog') }}</a>
      <div v-if="navigation.stake" @click="getPopup" class="nav-anchors__item send-feedback">
        <div class="send-feedback__background"></div>
        <p>{{ $t('staking') }}</p>
      </div>
      <div class="language-toggle">
        <div class="language-background"></div>
        <p v-if="$i18n.locale !== 'es'">En</p>
        <p v-if="$i18n.locale !== 'en'">Ru</p>
        <img :src="langArrow" alt="image"/>
        <div class="language-toggle__sub">
          <nuxt-link
              :to="switchLocalePath('es')"
          >
            Ru
          </nuxt-link>
          <div class="sub-line"></div>
          <nuxt-link
              :to="switchLocalePath('en')"
          >
            En
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="cookies">
      <p class="cookies-text">{{ $t('cookie') }}</p>
      <button @click="hideCookie" class="cookies-btn">
        <span class="cookies-btn__bg"></span>
        <p>Ок</p>
      </button>
    </div>
  </div>
</template>

<script>
import fav from "~/static/fav.webp"
import twitter from '~/static/header-twitter.svg'
import telegram from '~/static/header-telegram.svg'
import instagram from '~/static/header-instagram.svg'
import github from '~/static/header-github.svg'
import langArrow from '~/static/lang-arrow.svg'
import email from '../static/email.svg'

export default {
  name: "Navigation",
  props: {
    navigation: []
  },
  data(){
    return{
      fav, twitter, telegram, instagram, github, langArrow,
      email
    }
  },
  methods: {
    openSlide (link) {
      if(document.querySelector('#' + link)){
        document.querySelector('#' + link).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    },
    hideCookie(){
      const cookie = document.querySelector('.cookies')
      localStorage.setItem('cookieFlag', 'true')
      cookie.className = 'cookies-hide'
    },
    getPopup(){
      const popup = document.querySelector('.nets-popup__background');
      popup.style.display = 'flex'
      const body = document.querySelector('body')
      body.style.overflowY = 'hidden'
    },
  },
  created() {

  },
  mounted(){
    const cookie = document.querySelector('.cookies')
    if (localStorage.getItem('cookieFlag') === 'true'){
      cookie.className = 'cookies-hide'
    } else {
      cookie.className = 'cookies'
    }
  }
}
</script>
