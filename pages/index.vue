<template>
  <div>
    <div><img src="https://mc.yandex.ru/watch/86787478" style="position:absolute; left:-9999px;" alt="" /></div>
    <Desktop :preload="preloadNets" :delegates="delegates" v-bind:netsToValidators="netsToValidators" v-if="desktop"></Desktop>
    <mobile :preload="preloadNets" v-bind:delegates="delegates" :nets="$store.state.nets.nets" v-bind:netsToValidators="netsToValidators" v-if="mobile"></mobile>
    <script type="text/javascript" >
      (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
      (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

      ym(86787478, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true
      });

    </script>
  </div>
</template>

<script>
import "../static/styles/styles.css";
import "../static/fonts/opensans/opensans.css";
import "../static/fonts/osanscondensed/osanscondensed.css";
import "../static/fonts/comfortaa/comfortaa.css";
import "../static/fonts/acrom/stylesheet.css";

import Starname from '../static/nets/starname.webp'
import Mina from '../static/nets/mina.webp'
import Celo from '../static/nets/celo.webp'
import Casper from '../static/nets/casper.webp'
import Polygon from '../static/nets/polygon.webp'
import Near from '../static/nets/Near.webp'
import Fantom from '../static/nets/Fantom.webp'

import Desktop from "./desktop";
import Mobile from "./mobile";
import { notStrictEqual } from "assert";

export default {
  name: 'IndexPage',
  head() {
    return {
      titleTemplate: 'Stake platform for delegating to a reliable validator | Stakewolle',
      mets: [
        {name: 'description', content: 'The validator you were looking for Powerful encryption protocols Open source No commission until 2023'}
      ]
    }
  },
  components: {Mobile, Desktop},
  data(){
    return{
      mobile: false,
      desktop: false,
      nets: [],
      netsToValidators: [],
      delegates: [],
      netsCount: 0
    }
  },
  created () {
    this.delegates = ['38,458,255', '36,756', '28,123,642'],
        this.netsToValidators = [
          {
            'title': 'Starname',
            'short_title': 'Starname',
            'subtitle': 'Расширяет возможности создателей',
            'subtitle_en': 'EMPOWERS\n' +
                'THE CREATORS',
            'calc_class_slider_desktop': 'slider-item left',
            'calc_info_class_desktop': 'slider-item center',
            'calc_class_slider_mobile': 'validators-slider mobile-stacking__slider-top__item left current',
            'calc_info_class_slider_mobile': 'validators-slider mobile-stacking__slider-info__item current',
            'link': 'https://www.starname.me/',
            img: Starname
          },
          {
            'title': 'Mina',
            'short_title': 'Mina',
            'subtitle': 'Обеспечение доступа и конфиденциальности к Web3.0 с помощью ZK tech. Mina - самый легкий блокчейн в мире',
            'subtitle_en': 'Bringing access and privacy to Web3.0 with ZK tech. \n' +
                'Mina is the world’s lightest blockchain',
            'calc_class_slider_desktop': 'slider-item center',
            'calc_info_class_desktop': 'validators-slider calculator-wrapper__info',
            'calc_class_slider_mobile': 'validators-slider mobile-stacking__slider-top__item center',
            'calc_info_class_slider_mobile': 'validators-slider mobile-stacking__slider-info__item',
            'link': 'https://minaprotocol.com/',
            img: Mina
          },
          {
            'title': 'Celo',
            'short_title': 'Celo',
            'subtitle': 'Это открытая платформа, которая делает финансовые инструменты доступными для любого, у кого есть мобильный телефон',
            'subtitle_en': 'Is an open platform that makes financial tools accessible to anyone with a mobile phone',
            'calc_class_slider_desktop': 'slider-item right',
            'calc_info_class_desktop': 'validators-slider calculator-wrapper__info',
            'calc_class_slider_mobile': 'validators-slider mobile-stacking__slider-top__item right',
            'calc_info_class_slider_mobile': 'validators-slider mobile-stacking__slider-info__item',
            'link': 'https://t.co/dwpKilicsk',
            img: Celo
          },
          {
            'title': 'Casper',
            'short_title': 'Casper',
            'subtitle': 'Первый блокчейн с живым доказательством ставки, построенный на базе Casper CBC',
            'subtitle_en': 'First live proof-of-stake blockchain built off the Casper CBC',
            'calc_class_slider_desktop': 'slider-item next',
            'calc_info_class_desktop': 'validators-slider calculator-wrapper__info current',
            'calc_class_slider_mobile': 'validators-slider mobile-stacking__slider-top__item next',
            'calc_info_class_slider_mobile': 'validators-slider mobile-stacking__slider-info__item',
            'link': 'https://casper.network/en/network',
            img: Casper
          },
          {
            'title': 'Polygon',
            'short_title': 'Polygon',
            'subtitle': 'Предлагает широкий спектр безопасных, быстрых, доступных и энергоэффективных Ethereum',
            'subtitle_en': 'Offers a wide range of secure, fast, affordable and energy-efficient Ethereum',
            'calc_class_slider_desktop': 'slider-item next',
            'calc_info_class_desktop': 'validators-slider calculator-wrapper__info',
            'calc_class_slider_mobile': 'validators-slider mobile-stacking__slider-top__item next',
            'calc_info_class_slider_mobile': 'validators-slider mobile-stacking__slider-info__item',
            'link': 'https://www.polygon.technology/',
            img: Polygon
          },
          {
            'title': 'Near',
            'short_title': 'Near',
            'subtitle': 'Бизнес, творчество и сообщество переосмысливаются для более устойчивого и инклюзивного будущего.',
            'subtitle_en': 'Business, creativity, and community are being reimagined for a more sustainable and inclusive future.',
            'calc_class_slider_desktop': 'slider-item next',
            'calc_info_class_desktop': 'validators-slider calculator-wrapper__info',
            'calc_class_slider_mobile': 'validators-slider mobile-stacking__slider-top__item next',
            'calc_info_class_slider_mobile': 'validators-slider mobile-stacking__slider-info__item',
            'link': 'https://near.org/',
            img: Near
          },
          {
            'title': 'Fantom',
            'short_title': 'Fantom',
            'subtitle': 'Это быстрая, высокопроизводительная платформа смарт-контрактов с открытым исходным кодом для цифровых активов и приложений.',
            'subtitle_en': 'Is a fast, high-throughput open-source smart contract platform for digital assets and dApps.',
            'calc_class_slider_desktop': 'slider-item next',
            'calc_info_class_desktop': 'validators-slider calculator-wrapper__info',
            'calc_class_slider_mobile': 'validators-slider mobile-stacking__slider-top__item next',
            'calc_info_class_slider_mobile': 'validators-slider mobile-stacking__slider-info__item',
            'link': 'https://fantom.foundation/',
            img: Fantom
          },

        ]
    // Текущая дата и вчерашняя - для отдельных запросов из Coingecko
    //const today = Math.floor(new Date().getTime() / 1000);
    //const yesterday = Math.floor(new Date(new Date().getTime() - 24*60*60*1000).getTime() / 1000)

  },

  methods: {
    
    async fetchNets() {
      const nets = (await this.$host.get('/api/net-card', { params: {
        limit: 50
      } })).data
      const page = this.$store.state.nets.page
      this.$store.commit('nets/saveNets', nets.sort((a,b) => a.sort - b.sort))
      if (!page) {
        this.$store.commit('nets/setPage', 1)
      }
    },
    async preloadNets() {
      let page = this.$store.state.nets.page
      page += 1
      try {
        const res = await this.$host.get('/api/net-card', {params: {
          page
        }})
        const data = await res.data
        this.$store.commit('nets/pushNets', data)
        this.$store.commit('nets/setPage', page)
        if (data.length < 4) {
          this.$store.commit('nets/setTotal')
        }
      }catch(e) {
        console.log(e)
      }
    }
  },
  async mounted(){
    if(window.innerWidth<=428){
      this.mobile = true
    } else {
      this.desktop = true
    }
    await this.fetchNets()

    window.addEventListener('orientationchange', () => {
       window.location.reload()
      const orientation = window.matchMedia('(orientation: landscape)')
      if (orientation.matches) {
        window.location.reload()
      } else {
        window.location.reload()
      }
    })
  }
}
</script>
