<template>
  <div class="footer">
    <img class="footer-img-outside" :src="roundVioletBlur1" alt="image"/>
    <div class="form-alert">
      <div class="form-alert__form">
        <img class="form-alert__form-round" :src="roundAlert1" alt="image"/>
        <img class="form-alert__form-round" :src="roundAlert2" alt="image"/>
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
    <div class="footer-wrapper">
      <nuxt-link v-if="this.$i18n.locale === 'en'" to="/" class="footer-wrapper__logo">
        <img :src="logo" alt="image"/>
        <p>takewolle</p>
      </nuxt-link>
      <nuxt-link v-if="this.$i18n.locale === 'es'" to="/es" class="footer-wrapper__logo">
        <img :src="logo" alt="image"/>
        <p>takewolle</p>
      </nuxt-link>
      <div class="footer-social__links">
        <a href="https://twitter.com/stakewolle" target="_blank" class="footer-social__links-item">
          <img :src="twitter" alt="image"/>
        </a>
        <a href="https://t.me/stakewolle" target="_blank" class="footer-social__links-item">
          <img :src="telegram" alt="image"/>
        </a>
        <a href="mailto:partners@stakewolle.com" class="footer-social__links-item">
          <img :src="email" alt="image"/>
        </a>
        <!--            <a href="/" target="_blank" class="footer-social__links-item">-->
        <!--              <img :src="github" alt="">-->
        <!--            </a>-->
      </div>
    </div>
    <div class="footer-sections">
      <a v-if="navigation.about" @click.prevent="openSlide('d-about')" id="about-us" href="#d-about" class="footer-sections__item">
        <p>{{ $t('navigation.about_us') }}</p>
      </a>
      <a v-if="navigation.profit" @click.prevent="openSlide('d-calc')" id="pribil" href="#d-calc" class="footer-sections__item">
        <p>{{ $t('navigation.profit') }}</p>
      </a>
      <nuxt-link v-if="navigation.guide && this.$i18n.locale === 'en'" id="guides" to="/tutorial" class="footer-sections__item">
        <p>{{ $t('navigation.guide') }}</p>
      </nuxt-link>
      <nuxt-link v-if="navigation.guide && this.$i18n.locale === 'es'" id="guides" to="/es/tutorial" class="footer-sections__item">
        <p>{{ $t('navigation.guide') }}</p>
      </nuxt-link>
      <a v-if="navigation.contacts" @click.prevent="openSlide('d-contacts')" id="contacts" href="#d-contacts" class="footer-sections__item">
        <p>{{ $t('navigation.contacts') }}</p>
      </a>
      <a v-if="navigation.blog" id="blog" target="_blank" href="https://medium.com/@stakewolle" class="footer-sections__item">
        <p>{{ $t('navigation.blog') }}</p>
      </a>
      <a :href="Terms" target="blank" class="footer-sections__item" id="terms">
        <p>{{ $t('navigation.terms') }}</p>
      </a>
    </div>
    <!-- Begin Mailchimp Signup Form -->
    <form action="https://stakewolle.us14.list-manage.com/subscribe/post?u=b36985125a188dbcb49cb8dc0&amp;id=b446ab1001" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate footer-contacts__form" novalidate>
      <img class="footer-contacts__form-bg" id="form-bg-orange" :src="formOrangeBg" alt="image"/>
      <img class="footer-contacts__form-bg" id="form-bg-white" :src="formWhiteBg" alt="image"/>
      <img class="footer-contacts__form-bg" id="form-bg-desmos" :src="roundDesmos" alt="image"/>
      <div id="mc_embed_signup_scroll">
        <div class="mc-field-group">
          <img :src="mail" alt="image"/>
          <input type="email" :placeholder="$t('footer.contacts.title')" value="" name="EMAIL" class="required email footer-input" id="mce-EMAIL">
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
    <script src="https://code.jquery.com/jquery-2.2.4.js" integrity="sha256-iT6Q9iMJYuQiMWNd9lDyBUStIq/8PuOW33aOqmvFpqI=" crossorigin="anonymous"></script>
    <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script>
  </div>
</template>

<script>
import logo from '../static/fav.webp'
import github from '../static/footer/github.svg'
import instagram from '../static/footer/instagram.svg'
import telegram from '../static/footer/telegram.svg'
import twitter from '../static/footer/twitter.svg'
import mail from '../static/mail.svg'
import roundAlert1 from '../static/footer/alert-top-round.png'
import roundAlert2 from '../static/footer/alert-bottom-round.png'
import email from '../static/email.svg'

import formOrangeBg from '../static/footer/form-orange-bg.png'
import formWhiteBg from '../static/footer/form-white-bg.png'
import roundDesmos from '../static/redesign/Round orange (13).svg'
import roundVioletBlur1 from '../static/footer/round-violet-blur.svg'
import Terms from '../static/footer/Terms_and_Conditions.pdf'

export default {
  name: "Footer",
  props: {
    navigation: []
  },
  data(){
    return{
      formOrangeBg, formWhiteBg, roundDesmos, roundVioletBlur1,
      logo, github, instagram, telegram,
      twitter, mail, roundAlert1, roundAlert2, email, Terms
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
      const footerInput = document.querySelector('.footer-input')
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
  },
}
</script>

<style scoped>

</style>
