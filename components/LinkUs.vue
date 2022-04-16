<template>
  <div id="d-contacts" class="linked-us">
    <div class="linked-us-container">
      <img class="linked-us-container-img" id="linked-img-certik" :src="roundNetCertik" alt="">
      <img class="linked-us-container-img" id="linked-img-emoney" :src="roundNetEmoney" alt="">
      <img class="linked-us-container-img" id="linked-img-s" :src="roundNetS" alt="">
      <img class="linked-us-container-img" id="linked-img-sif" :src="roundNetSif" alt="">
      <img class="linked-us-container-img" id="linked-img-violet-blur" :src="roundVioletBlur" alt="">
      <img class="linked-us-container-img" id="linked-img-violet-dark" :src="roundVioletDark" alt="">
      <img class="linked-us-container-img" id="linked-img-white-blur" :src="roundWhiteBlurLink" alt="">
      <div class="form-alert link-us-form">
        <div class="form-alert__form">
          <img class="form-alert__form-round" :src="roundAlert1" alt="">
          <img class="form-alert__form-round" :src="roundAlert2" alt="">
          <p class="form-alert__form-pretitle">{{ $t('contacts.thanks') }}</p>
          <p class="form-alert__form-title">{{ $t('contacts.status') }}</p>
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

      <div class="linked-us__info-content">
        <img class="linked-us__info-bg" :src="infoBg" alt="">
        <div class="linked-us__info">
          <p class="linked-us__info-title">{{ $t('contacts.title') }}</p>
          <div class="linked-us__info-item">
            <div>
              <img :src="wantDelegate" alt="">
            </div>
            <p>{{ $t('contacts.sub_01') }}</p>
          </div>
          <div class="linked-us__info-item">
            <div>
              <img :src="excel" alt="">
            </div>
            <p>{{ $t('contacts.sub_02') }}</p>
          </div>
          <div class="linked-us__info-item">
            <div>
              <img :src="partners" alt="">
            </div>
            <p>{{ $t('contacts.sub_03') }}</p>
          </div>
        </div>
      </div>
      <!-- Begin Mailchimp Signup Form -->
      <div id="mc_embed_signup">
        <form action="https://yandexcloud.us20.list-manage.com/subscribe/post?u=a7fd2fb68b7f36d3ac9b012cb&amp;id=390bce8319" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate linked-us__form" novalidate>
          <div class="linked-us__form-container">
            <h5>{{ $t('contacts.contact_us') }}</h5>
            <div id="mc_embed_signup_scroll">
              <div id="mc-field-group-user" class="mc-field-group">
                <img :src="username" alt="">
                <input type="text" :placeholder="$t('contacts.name')" value="" name="MMERGE2" class="" id="mce-MMERGE2">
              </div>
              <div class="mc-field-group mc-email">
                <img :src="mail" alt="">
                <input type="email" value="" :placeholder="$t('contacts.mail')" name="EMAIL" class="required email linked-email" id="mce-EMAIL">
              </div>
              <div class="mc-field-group mc-msg">
                <img :src="mail" alt="">
                <textarea type="text" :placeholder="$t('contacts.msg')" value="" name="MMERGE1" class="" id="mce-MMERGE1"></textarea>
              </div>
              <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_a7fd2fb68b7f36d3ac9b012cb_390bce8319" tabindex="-1" value=""></div>
              <div class="optionalParent">
                <div class="clear foot">
                  <div class="btn-bg"></div>
                  <p>{{ $t('contacts.send') }}</p>
                  <div class="btn"></div>
                  <input @click="checkSuccess" type="submit" value="" name="subscribe" id="mc-embedded-subscribe" class="button">
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import wantDelegate from '../static/redesign/sustainable 1.svg'
import excel from '../static/redesign/business-report 1.svg'
import partners from '../static/redesign/handshake 1.svg'
import username from '../static/username.svg'
import mail from '../static/mail.svg'
import roundAlert1 from '../static/footer/alert-top-round.png'
import roundAlert2 from '../static/footer/alert-bottom-round.png'
import infoBg from '../static/redesign/Ellipse 55 (3).png'
import roundNetCertik from '../static/contacts/round-net-certik.svg'
import roundNetEmoney from '../static/redesign/Round orange (3).svg'
import roundNetS from '../static/redesign/Round white (2) 1.png'
//import roundNetSif from '../static/contacts/round-net-sif.svg'
import roundNetSif from '../static/redesign/Round white (1) 1.png'
import roundVioletBlur from '../static/contacts/round-violet-blur.svg'
import roundVioletDark from '../static/contacts/round-violet-dark.svg'
import roundWhiteBlurLink from '../static/contacts/round-white-blur.svg'


export default {
  name: "LinkUs",
  data(){
    return{
      wantDelegate, excel, partners, infoBg,
      username, mail,
      roundAlert1,
      roundAlert2,
      roundNetCertik, roundNetEmoney, roundNetS,
      roundNetSif, roundVioletBlur, roundVioletDark,
      roundWhiteBlurLink
    }
  },
  methods: {
    checkSuccess(){
      const footerInput = document.querySelector('.linked-email')
      if(!footerInput.value){
        
      } else {
        const formAlert = document.querySelector('.link-us-form')
        const body = document.querySelector('body')
        body.style.overflowY = 'hidden'
        formAlert.style.zIndex = '700'
        formAlert.style.opacity = '1'
      }
    },
    closeFormAlert(){
      const formAlert = document.querySelector('.link-us-form')
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
