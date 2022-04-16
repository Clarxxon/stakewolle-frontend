<template>
  <div id="m-contacts" class="mobile-call">
    <div class="form-alert mobile-link-us-form">
      <div class="form-alert__form">
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
    <div class="mobile-content">
      <p class="mobile-call__title">{{ $t('contacts.title') }}</p>
      <div class="mobile-call__wrapper">
        <div class="mobile-call__wrapper-item">
          <div>
            <img :src="delegate" alt="">
          </div>
          <p>{{ $t('contacts.sub_01') }}</p>
        </div>
        <div class="mobile-call__wrapper-item">
          <div>
            <img :src="excel" alt="">
          </div>
          <p>{{ $t('contacts.sub_02') }}</p>
        </div>
        <div class="mobile-call__wrapper-item">
          <div>
            <img :src="partners" alt="">
          </div>
          <p>{{ $t('contacts.sub_03') }}</p>
        </div>
      </div>
      <div id="mc_embed_signup" class="send-msg">
      <form action="https://stakewolle.us14.list-manage.com/subscribe/post?u=b36985125a188dbcb49cb8dc0&amp;id=b446ab1001" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate mobile-call__form" novalidate>
        <p class="mobile-call__form-title">{{ $t('contacts.contact_us') }}</p>
        <div id="mc_embed_signup_scroll">
          <div id="mc-field-group-user" class="mc-field-group">
            <img :src="profile" alt="">
          	<input type="text" :placeholder="$t('contacts.name')" value="" name="MMERGE2" class="" id="mce-MMERGE2">
          </div>
          <div class="mc-field-group">
            <img :src="mail" alt="">
          	<input type="email" value="" :placeholder="$t('contacts.mail')" name="EMAIL" class="required email mobile-linked-email" id="mce-EMAIL">
          </div>
          <div class="mc-field-group">
            <img :src="mail" alt="">
          	<textarea type="text" :placeholder="$t('contacts.msg')" value="" name="MMERGE1" class="" id="mce-MMERGE1"></textarea>
          </div>
          <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_b36985125a188dbcb49cb8dc0_b446ab1001" tabindex="-1" value=""></div>
            <div class="optionalParent">
              <div class="clear foot">
                <div class="btn-bg"></div>
                  <p>{{ $t('contacts.send') }}</p>
                  <div class="btn"></div>
                  <input @click="checkSuccess" type="submit" value="" name="subscribe" id="mc-embedded-subscribe" class="button">
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import excel from '../../static/redesign/sustainable 1.svg'
import partners from '../../static/redesign/business-report 1.svg'
import delegate from '../../static/redesign/handshake 1.svg'
import profile from '../../static/username.svg'
import mail from '../../static/mail.svg'

export default {
  name: "mobileCall",
  data(){
    return{
      excel, partners, delegate, profile, mail
    }
  },
  methods: {
    checkSuccess(){
      const footerInput = document.querySelector('.mobile-linked-email')
      if(!footerInput.value){
        
      } else {
        const formAlert = document.querySelector('.mobile-link-us-form')
        const body = document.querySelector('body')
        body.style.overflowY = 'hidden'
        formAlert.style.zIndex = '700'
        formAlert.style.opacity = '1'
      }
    },
    closeFormAlert(){
      const formAlert = document.querySelector('.mobile-link-us-form')
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