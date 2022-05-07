<template>
  <div class="mobile-footer">
    <div class="form-alert">
      <div class="form-alert__form">
        <p class="form-alert__form-pretitle">{{ $t('footer.popup.title') }}</p>
        <p class="form-alert__form-title">{{ $t('footer.popup.subtitle') }}</p>
        <div class="form-alert__form-btn">
          <button @click="closeFormAlert">
            <p>{{ $t('footer.popup.lock') }}</p>
            <div></div>
          </button>
        </div>
        <div @click="closeFormAlert" class="form-alert__form-close">
          <div class="form-alert__form-close__item"></div>
          <div class="form-alert__form-close__item"></div>
        </div>
      </div>
    </div>
    <div class="mobile-content">
      <nuxt-link v-if="this.$i18n.locale === 'en'" to="/" class="mobile-footer__logo">
        <div class="mobile-footer__logo-bg"></div>
        <img :src="logo" alt="">
        <p>takewolle</p>
      </nuxt-link>
      <nuxt-link v-if="this.$i18n.locale === 'es'" to="/es" class="mobile-footer__logo">
        <div class="mobile-footer__logo-bg"></div>
        <img :src="logo" alt="">
        <p>takewolle</p>
      </nuxt-link>
      <div class="mobile-footer__socials">
        <a href="https://twitter.com/stakewolle" target="_blank" class="mobile-footer__socials-item">
          <img :src="twitter" alt="">
        </a>
        <a href="https://t.me/stakewolle" target="_blank" class="mobile-footer__socials-item">
          <img :src="telegram" alt="">
        </a>
        <a href="mailto:partners@stakewolle.com" target="_blank" class="mobile-footer__socials-item">
          <img :src="email" alt="">
        </a>
<!--        <a href="/" class="mobile-footer__socials-item">-->
<!--          <img :src="github" alt="">-->
<!--        </a>-->
      </div>
    </div>
    <div class="mobile-footer__anchors">
      <a v-if="navigation.about" @click.prevent="openSlide('m-about')" href="#m-about">{{ $t('navigation.about_us') }}</a>
      <a v-if="navigation.profit" @click.prevent="openSlide('m-calc')" href="#m-profit">{{ $t('navigation.profit') }}</a>
      <nuxt-link v-if="navigation.tutorial && this.$i18n.locale === 'en'" to="/tutorial">{{ $t('navigation.guide') }}</nuxt-link>
      <nuxt-link v-if="navigation.tutorial && this.$i18n.locale === 'es'" to="/es/tutorial">{{ $t('navigation.guide') }}</nuxt-link>
      <a v-if="navigation.contacts" @click.prevent="openSlide('m-contacts')" href="#m-contacts">{{ $t('navigation.contacts') }}</a>
      <a v-if="navigation.blog" target="_blank" href="https://medium.com/@stakewolle">{{ $t('navigation.blog') }}</a>
    </div>
    <div class="mobile-footer__form">
      <img class="footer-contacts__form-bg" id="footer-round-orange" :src="roundOrange" alt="">
      <img class="footer-contacts__form-bg" id="footer-round-violet" :src="roundVioletBlur" alt="">
      <form action="https://stakewolle.us14.list-manage.com/subscribe/post?u=b36985125a188dbcb49cb8dc0&amp;id=b446ab1001" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate footer-contacts__form mobile-footer__contacts" novalidate>
        <img class="footer-contacts__form-bg" id="form-bg-orange" :src="formOrangeBg" alt="">
      <img class="footer-contacts__form-bg" id="form-bg-white" :src="formWhiteBg" alt="">
      <img class="footer-contacts__form-bg" id="form-bg-desmos" :src="roundDesmos" alt="">
        <div id="mc_embed_signup_scroll">
          <div class="mc-field-group">
            <img :src="mail" alt="">
	          <input type="email" :placeholder="$t('footer.contacts.title')" value="" name="EMAIL" class="required email mobile-footer-input" id="mce-EMAIL">
          </div>
        <div style="position: absolute; left: -5000px;" aria-hidden="true">
          <input type="text" name="b_b36985125a188dbcb49cb8dc0_b446ab1001" tabindex="-1" value=""></div>
          <div class="optionalParent">
            <div class="clear foot">
              <div class="btn-bg"></div>
              <p>{{ $t('footer.contacts.subscribe') }}</p>
              <div class="btn"></div>
              <input @click="checkSuccess" type="submit" value="" name="subscribe" id="mc-embedded-subscribe" class="button">
              </div>
            </div>
        </div>
      </form>
    </div>
    
    <script src="https://code.jquery.com/jquery-2.2.4.js" integrity="sha256-iT6Q9iMJYuQiMWNd9lDyBUStIq/8PuOW33aOqmvFpqI=" crossorigin="anonymous"></script>
    <script src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script>
  </div>
</template>

<script>
import logo from '../../static/fav.webp'
import twitter from '../../static/header-twitter.svg'
import telegram from '../../static/header-telegram.svg'
import instagram from '../../static/header-instagram.svg'
import github from '../../static/header-github.svg'
import mail from '../../static/mail.svg'
import formWhiteBg from '../../static/footer/form-white-bg.png'
import roundDesmos from '../../static/footer/round-orange-desmos.svg'
import formOrangeBg from '../../static/footer/form-orange-bg.png'
import roundVioletBlur from '../../static/footer/round-violet-blur.svg'
import roundOrange from '../../static/footer/round-orange.svg'
import email from '../../static/email.svg'

export default {
  name: "mobileFooter",
  props: {
    navigation: []
  },
  data(){
    return{
      logo, twitter, telegram, instagram, github,
      mail, formWhiteBg, roundDesmos, formOrangeBg,
      roundVioletBlur, roundOrange, email
    }
  },
  methods: {
    openSlide (link) {
      document.querySelector('#' + link).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    },
    checkSuccess(){
      const footerInput = document.querySelector('.mobile-footer-input')

      if(!footerInput.value){
        
      } else {
        const formAlert = document.querySelector('.form-alert')
        const body = document.querySelector('body')
        body.style.overflowY = 'hidden'
        formAlert.style.zIndex = '700'
        formAlert.style.opacity = '1'
      }
    },
    closeFormAlert(){
      const formAlert = document.querySelector('.form-alert')
      const body = document.querySelector('body')
      body.style.overflowY = 'scroll'
      formAlert.style.opacity = '0'
      formAlert.style.zIndex = '-100'
    }
  }
}
</script>

<style scoped>

</style>