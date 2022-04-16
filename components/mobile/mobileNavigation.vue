<template>
  <div class="mobile-navigation">
    <div class="mobile-content">
      <div class="mobile-content__top">
        <nuxt-link v-if="this.$i18n.locale === 'es'" :to="'/'+this.$i18n.locale" class="mobile-navigation__logo">
          <div class="mobile-navigation__logo-bg"></div>
          <img src="logo" alt="">
          <p>takewolle</p>
        </nuxt-link>
        <nuxt-link v-if="this.$i18n.locale === 'en'" to="/" class="mobile-navigation__logo">
          <div class="mobile-navigation__logo-bg"></div>
          <img :src="logo" alt="">
          <p>takewolle</p>
        </nuxt-link>
        <button @click="menu" class="mobile-navigation__menu-btn">
          <div class="mobile-navigation__menu-btn__item"></div>
          <div class="mobile-navigation__menu-btn__item"></div>
          <div class="mobile-navigation__menu-btn__item"></div>
        </button>
      </div>
      <div class="mobile-navigation__menu">
        <div class="mobile-navigation__menu-links">
          <a v-if="navigation.about" class="mobile-navigation__menu-links__item" @click.prevent="anchor('m-about')" href="#m-about">{{ $t('navigation.about_us') }}</a>
          <a v-if="navigation.profit" class="mobile-navigation__menu-links__item" @click.prevent="anchor('m-calc')" href="#m-calc">{{ $t('navigation.profit') }}</a>
          <a @click.prevent="toGuide" v-if="navigation.guide" class="mobile-navigation__menu-links__item" href="/tutorial">{{ $t('navigation.guide') }}</a>
          <a v-if="navigation.contacts" class="mobile-navigation__menu-links__item" @click.prevent="anchor('m-contacts')" href="#m-contacts">{{ $t('navigation.contacts') }}</a>
          <a v-if="navigation.blog" class="mobile-navigation__menu-links__item" @click="anchor" target="_blank" href="https://medium.com/@stakewolle">{{ $t('navigation.blog') }}</a>
        </div>
        <div class="mobile-content">
          <button v-if="navigation.stake" @click="getPopup" class="mobile-navigation__menu-links__btn">
            <div class="mobile-navigation__menu-links__btn-bg"></div>
            <p>{{ $t('staking') }}</p>
          </button>
          <div class="mobile-navigation__menu-social">
            <div class="mobile-navigation__menu-social__links">
              <a href="https://twitter.com/stakewolle" target="_blank" class="mobile-navigation__menu-social__links-item">
                <img :src="twitter" alt="">
              </a>
              <a href="https://t.me/stakewolle" target="_blank" class="mobile-navigation__menu-social__links-item">
                <img :src="telegram" alt="">
              </a>
              <a href="mailto:partners@stakewolle.com" target="_blank" class="mobile-navigation__menu-social__links-item">
                <img :src="email" alt="">
              </a>
<!--              <a href="/" class="mobile-navigation__menu-social__links-item">-->
<!--                <img :src="github" alt="">-->
<!--              </a>-->
            </div>
            <div class="mobile-navigation__menu-social__language">
              <div class="mobile-navigation__menu-social__language-visible">
                <p v-if="$i18n.locale !== 'es'">En</p>
                <p v-if="$i18n.locale !== 'en'">Ru</p>
                <img :src="arrow" alt="">
              </div>
              <div class="mobile-navigation__menu-social__language-hide">
                <nuxt-link
                    :to="switchLocalePath('es')"
                    @click.native="menu"
                >
                  Ru
                </nuxt-link>
                <div class="mobile-navigation__menu-social__language-hide__line"></div>
                <nuxt-link
                    :to="switchLocalePath('en')"
                    @click.native="menu"
                >
                  En
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logo from '../../static/fav.png'
import twitter from '~/static/header-twitter.svg'
import telegram from '~/static/header-telegram.svg'
import instagram from '~/static/header-instagram.svg'
import github from '~/static/header-github.svg'
import arrow from '../../static/lang-arrow.svg'
import email from '../../static/email.svg'
export default {
  name: "mobile-navigation",
  props: {
    navigation: []
  },
  data(){
    return{
      logo, twitter, telegram, instagram, github, arrow,
      menuToggle: false,
      email
    }
  },
  methods: {
    toGuide(){
      const mobileNavigationMenu = document.querySelector('.mobile-navigation__menu');
      const mobileMenuBtn = document.querySelector('.mobile-navigation__menu-btn');
      const body = document.querySelector('body')

      if(!this.menuToggle){
        mobileNavigationMenu.style.left = '0%';
        mobileMenuBtn.classList.add('button-true');
        body.style.overflowY = 'hidden'
        body.style.height = '100vh'
      } else {
        mobileNavigationMenu.style.left = '-100%';
        mobileMenuBtn.classList.remove('button-true');
        body.style.overflowY = 'unset'
        body.style.height = 'unset'
      }
      setTimeout(()=>{
        if(this.$i18n.locale === 'es'){
          this.$router.push('/es/tutorial')
        } else {
          this.$router.push('/tutorial')
        }
      }, 1000)
    },
    anchor(link){
      const mobileNavigationMenu = document.querySelector('.mobile-navigation__menu');
      const mobileMenuBtn = document.querySelector('.mobile-navigation__menu-btn');
      const body = document.querySelector('body')

      if(!this.menuToggle){
        mobileNavigationMenu.style.left = '0%';
        mobileMenuBtn.classList.add('button-true');
        body.style.overflowY = 'hidden'
        body.style.height = '100vh'
      } else {
        mobileNavigationMenu.style.left = '-100%';
        mobileMenuBtn.classList.remove('button-true');
        body.style.overflowY = 'unset'
        body.style.height = 'unset'
      }
      setTimeout(() => {
        document.querySelector('#' + link).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
        }, 1000)
      this.menuToggle = !this.menuToggle;
    },
    menu(){
      const mobileNavigationMenu = document.querySelector('.mobile-navigation__menu');
      const mobileMenuBtn = document.querySelector('.mobile-navigation__menu-btn');
      const body = document.querySelector('body')

      if(!this.menuToggle){
        mobileNavigationMenu.style.left = '0%';
        mobileMenuBtn.classList.add('button-true');
        body.style.overflowY = 'hidden'
        body.style.height = '100vh'
      } else {
        mobileNavigationMenu.style.left = '-100%';
        mobileMenuBtn.classList.remove('button-true');
        body.style.overflowY = 'unset'
        body.style.height = 'unset'
      }

      this.menuToggle = !this.menuToggle;
    },
    getPopup(){
      const popup = document.querySelector('.nets-popup__background');
      popup.style.display = 'flex'
      const body = document.querySelector('body')
      body.style.overflowY = 'hidden'
      body.style.height = '100vh'

    },
  },
  mounted(){
  }
}
</script>