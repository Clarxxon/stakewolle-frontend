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
            'img': Starname,
            'title': 'Starname',
            'short_title': 'Starname',
            'subtitle': 'Расширяет возможности создателей',
            'subtitle_en': 'EMPOWERS\n' +
                'THE CREATORS',
            'calc_class_slider_desktop': 'slider-item left',
            'calc_info_class_desktop': 'slider-item center',
            'calc_class_slider_mobile': 'validators-slider mobile-stacking__slider-top__item left current',
            'calc_info_class_slider_mobile': 'validators-slider mobile-stacking__slider-info__item current',
            'link': 'https://www.starname.me/'
          },
          {
            'img': Mina,
            'title': 'Mina',
            'short_title': 'Mina',
            'subtitle': 'Обеспечение доступа и конфиденциальности к Web3.0 с помощью ZK tech. Mina - самый легкий блокчейн в мире',
            'subtitle_en': 'Bringing access and privacy to Web3.0 with ZK tech. \n' +
                'Mina is the world’s lightest blockchain',
            'calc_class_slider_desktop': 'slider-item center',
            'calc_info_class_desktop': 'validators-slider calculator-wrapper__info',
            'calc_class_slider_mobile': 'validators-slider mobile-stacking__slider-top__item center',
            'calc_info_class_slider_mobile': 'validators-slider mobile-stacking__slider-info__item',
            'link': 'https://minaprotocol.com/'
          },
          {
            'img': Celo,
            'title': 'Celo',
            'short_title': 'Celo',
            'subtitle': 'Это открытая платформа, которая делает финансовые инструменты доступными для любого, у кого есть мобильный телефон',
            'subtitle_en': 'Is an open platform that makes financial tools accessible to anyone with a mobile phone',
            'calc_class_slider_desktop': 'slider-item right',
            'calc_info_class_desktop': 'validators-slider calculator-wrapper__info',
            'calc_class_slider_mobile': 'validators-slider mobile-stacking__slider-top__item right',
            'calc_info_class_slider_mobile': 'validators-slider mobile-stacking__slider-info__item',
            'link': 'https://t.co/dwpKilicsk'
          },
          {
            'img': Casper,
            'title': 'Casper',
            'short_title': 'Casper',
            'subtitle': 'Первый блокчейн с живым доказательством ставки, построенный на базе Casper CBC',
            'subtitle_en': 'First live proof-of-stake blockchain built off the Casper CBC',
            'calc_class_slider_desktop': 'slider-item next',
            'calc_info_class_desktop': 'validators-slider calculator-wrapper__info current',
            'calc_class_slider_mobile': 'validators-slider mobile-stacking__slider-top__item next',
            'calc_info_class_slider_mobile': 'validators-slider mobile-stacking__slider-info__item',
            'link': 'https://casper.network/en/network'
          },
          {
            'img': Polygon,
            'title': 'Polygon',
            'short_title': 'Polygon',
            'subtitle': 'Предлагает широкий спектр безопасных, быстрых, доступных и энергоэффективных Ethereum',
            'subtitle_en': 'Offers a wide range of secure, fast, affordable and energy-efficient Ethereum',
            'calc_class_slider_desktop': 'slider-item next',
            'calc_info_class_desktop': 'validators-slider calculator-wrapper__info',
            'calc_class_slider_mobile': 'validators-slider mobile-stacking__slider-top__item next',
            'calc_info_class_slider_mobile': 'validators-slider mobile-stacking__slider-info__item',
            'link': 'https://www.polygon.technology/'
          },
          {
            'img': Near,
            'title': 'Near',
            'short_title': 'Near',
            'subtitle': 'Бизнес, творчество и сообщество переосмысливаются для более устойчивого и инклюзивного будущего.',
            'subtitle_en': 'Business, creativity, and community are being reimagined for a more sustainable and inclusive future.',
            'calc_class_slider_desktop': 'slider-item next',
            'calc_info_class_desktop': 'validators-slider calculator-wrapper__info',
            'calc_class_slider_mobile': 'validators-slider mobile-stacking__slider-top__item next',
            'calc_info_class_slider_mobile': 'validators-slider mobile-stacking__slider-info__item',
            'link': 'https://near.org/'
          },
          {
            'img': Fantom,
            'title': 'Fantom',
            'short_title': 'Fantom',
            'subtitle': 'Это быстрая, высокопроизводительная платформа смарт-контрактов с открытым исходным кодом для цифровых активов и приложений.',
            'subtitle_en': 'Is a fast, high-throughput open-source smart contract platform for digital assets and dApps.',
            'calc_class_slider_desktop': 'slider-item next',
            'calc_info_class_desktop': 'validators-slider calculator-wrapper__info',
            'calc_class_slider_mobile': 'validators-slider mobile-stacking__slider-top__item next',
            'calc_info_class_slider_mobile': 'validators-slider mobile-stacking__slider-info__item',
            'link': 'https://fantom.foundation/'
          },

        ]
    this.nets = [
      {
        'coin': 'cosmos',
        'title': 'Cosmos',
        'short_title': 'Cosmos',
        'subtitle': 'Открытая, масштабируемая и взаимосвязанная экономика будущего',
        'subtitle_en': 'Open scalable and interconnected economy of the future',
        'token': 'ATOM',
        'price': '40.7283',
        'market_cap': '7 505 053 289',
        'h24_vol': '613687518.5917',
        'stakewolle_comission': '0%',
        'annual_comission': '16.52',
        'kepler_link': 'https://wallet.keplr.app/#/cosmoshub/stake?modal=stake&validator=cosmosvaloper1gf4wlkutql95j7wwsxz490s6fahlvk2s9xpwax',
        'coingecko_status': true,
        'ready_to_look': false,
        'adres': 'cosmos1gf4wlkutql95j7wwsxz490s6fahlvk2sqj4m34',
        'cosmostation': 'https://wallet.cosmostation.io/cosmos/',
        'inflation': '9.62',
        'bonded_ratio': '60.29',
        'apy': '',
        'price_dynamics': false,
        'mintskan_url': 'https://api-kichain.cosmostation.io/v1/status'
      },
      {
        'coin': 'ki',
        'title': 'Ki',
        'short_title': 'Ki',
        'subtitle': 'Ki объединяет CeFi и DeFi с использованием Tendermint Core',
        'subtitle_en': 'Ki combines CeFi and DeFi using Tendermint Core',
        'fee': '0.0159',
        'token': 'XKI',
        'stakewolle_comission': '0%',
        'kepler_link': 'https://www.mintscan.io/ki-chain/validators/kivaloper19seaxuh9wp3zum42w6flrjsr5raptxhy3l8qvw',
        'coingecko_status': true,
        'adres': 'ki19seaxuh9wp3zum42w6flrjsr5raptxhy9cfa0s',
        'cosmostation': 'https://wallet.cosmostation.io/kichain/',
        'price_dynamics': false,
        'mintskan_url': 'https://api-kichain.cosmostation.io/v1/status'
      },
      {
        'coin': 'juno-network',
        'title': 'Juno',
        'short_title': 'Juno',
        'subtitle': 'Децентрализованная общедоступная сеть без разрешений для смарт-контрактов между цепочками',
        'subtitle_en': 'Decentralized public network without allowance for smart-contracts between chains',
        'fee': '0.5623',
        'token': 'JUNO',
        'stakewolle_comission': '5%',
        'kepler_link': 'https://wallet.keplr.app/#/juno/stake?modal=stake&validator=junovaloper1qr78535yz60zemv82sww948c6azx40gnawnh6r',
        'coingecko_status': true,
        'adres': 'juno1qr78535yz60zemv82sww948c6azx40gnzn9cp6',
        'cosmostation': 'https://wallet.cosmostation.io/juno/',
        'price_dynamics': false,
        'pingpub_link': 'https://ping.pub/juno',
        'bonded_ratio_link': 'https://lcd-juno.itastakers.com',
        'mintskan_url': 'https://api-juno.cosmostation.io/v1/status'

      },
      {
        'coin': 'band-protocol',
        'title': 'Band Protocol',
        'short_title': 'Band Pr.',
        'subtitle': 'Безопасный, масштабируемый кроссчейн децентрализованный - подключение смарт-контрактов к внешним данным и API',
        'subtitle_en': 'Secure, scalable cross-chain decentralized oracle-connecting smart contracts to external data and API',
        'token': 'BAND',
        'stakewolle_comission': '0%',
        'kepler_link': 'https://cosmoscan.io/validator/bandvaloper1hcu2spr3r80v36us40mg938f5qhaqq2qeajtfv#delegators',
        'coingecko_status': true,
        'adres': 'band1hcu2spr3r80v36us40mg938f5qhaqq2q4tkgv8',
        'cosmostation': 'https://wallet.cosmostation.io/band/',
       
        'price_dynamics': false,
        'pingpub_link': 'https://ping.pub/band-protocol',
        'bonded_ratio_link': 'https://laozi1.bandchain.org/api',
        'mintskan_url': "https://api-band.cosmostation.io/v1/status"
      },
      {
        'coin': 'e-money',
        'title': 'e-Money',
        'short_title': 'e-Money',
        'subtitle': 'Ведущий эмитент по прозрачных, процентных, обеспеченных валютой стейблкоинов для Интернета денег',
        'subtitle_en': 'Leading issuer of transparent, interest-beating, currency-backed stablecoins for the internet of money',
        'token': 'NGM',
        'stakewolle_comission': '0%',
        'kepler_link': 'https://wallet.keplr.app/#/emoney/stake?modal=stake&validator=emoneyvaloper1039h52c70xlqwfqh29gmqq70zwwf8xrs3t9mps',
        'coingecko_status': true,
        'adres': 'emoney1039h52c70xlqwfqh29gmqq70zwwf8xrsktr0la',
        'cosmostation': 'https://wallet.cosmostation.io/emoney/',
        'price_dynamics': false,
        'pingpub_link': 'https://ping.pub/e-money',
        'bonded_ratio_link': 'https://emoney.validator.network/api',
        'mintskan_url': "https://api-emoney.cosmostation.io/v1/status"
      },
      {
        'coin': 'osmosis',
        'title': 'Osmosis',
        'short_title': 'Osmosis',
        'subtitle': 'Межцепочный AMM Cosmos, созданный на базе IBC',
        'subtitle_en': 'Cross-chain AMM Cosmos based on IBC',
        'token': 'OSMO',
        'stakewolle_comission': '5%',
        'kepler_link': 'https://wallet.keplr.app/#/osmosis/stake?modal=stake&validator=osmovaloper122yaxffys6rmv03nwwkmn3rvr5skzxl9lry2a5',
        'coingecko_status': true,
        'adres': 'osmo122yaxffys6rmv03nwwkmn3rvr5skzxl995vf2n',
        'cosmostation': 'https://wallet.cosmostation.io/osmosis/',
        'price_dynamics': false,
        'pingpub_link': 'https://ping.pub/osmosis',
        'bonded_ratio_link': 'https://osmosis-api.polkachu.com',
        'mintskan_url': "https://api-osmosis.cosmostation.io/v1/status"
      },
      {
        'coin': 'sifchain',
        'title': 'SifChain',
        'short_title': 'SifChain',
        'subtitle': 'Многоцепочечная децентрализованная биржа (DEX), которая разблокирует ликивдность в различных цепочках ',
        'subtitle_en': 'Decentralized exchange (DEX) which unlocks liquidity in various chains',
        'token': 'ROWAN',
        'stakewolle_comission': '0%',
        'kepler_link': 'https://wallet.keplr.app/#/sifchain/stake?modal=stake&validator=sifvaloper1ecv3sdx8h54ckv8q8u67cyk0nj37rffwpj7cdx',
        'coingecko_status': true,
        'adres': 'sif1ecv3sdx8h54ckv8q8u67cyk0nj37rffwgskjdk',
        'cosmostation': 'https://wallet.cosmostation.io/sifchain/',
        'price_dynamics': false,
        'pingpub_link': 'https://ping.pub/sifchain',
        'bonded_ratio_link': 'https://api.sifchain.finance',
        'mintskan_url': "https://api-sifchain.cosmostation.io/v1/status"

      },
      {
        'coin': 'secret',
        'title': 'Secret Network',
        'short_title': 'Secret Net.',
        'subtitle': 'Первый блокчейн со смарт-контрактами с конфиденциальностью данных по умолчанию, работает в сети!',
        'subtitle_en': 'The first blockchain with smart contracts with data privacy by default, works online',
        'token': 'SCRT',
        'stakewolle_comission': '0%',
        'kepler_link': 'https://wallet.keplr.app/#/secret/stake?modal=stake&validator=secretvaloper12ancx2qcgk04rrkexuhjq93etgktq4nn58z9yu',
        'coingecko_status': true,
        'adres': 'secret12ancx2qcgk04rrkexuhjq93etgktq4nn9qvcf4',
        'cosmostation': '-',
        'price_dynamics': false,
        'pingpub_link': 'https://ping.pub/secret',
        'bonded_ratio_link': 'https://api.roninventures.io',
        'mintskan_url': "https://api-secret.cosmostation.io/v1/status"
      },
      {
        'coin': 'kava',
        'title': 'Kava',
        'short_title': 'Kava',
        'subtitle': 'Kava Labs - разработчик платформы Kava, самого безопасного места DeFi для роста вашей криптовалюты',
        'subtitle_en': 'Kava Labs - developer of the Kava platform, the safest DeFi place to grow your cryptocurrency',
        'token': 'KAVA',
        'stakewolle_comission': '0%',
        'kepler_link': 'https://wallet.keplr.app/#/kava/stake?modal=stake&validator=kavavaloper1j4tymd9r3au3vm508l4jugdg7l892l2lmh4jry',
        'coingecko_status': true,
        'adres': 'kava1j4tymd9r3au3vm508l4jugdg7l892l2lkp06mn',
        'cosmostation': 'https://wallet.cosmostation.io/kava/',
        'price_dynamics': false,
        'pingpub_link': 'https://ping.pub/kava',
        'bonded_ratio_link': 'https://api.data.kava.io',
        'mintskan_url': "https://api-kava.cosmostation.io/v1/status"
      },
      {
        'coin': 'iris-network',
        'title': 'Iris',
        'short_title': 'Iris',
        'subtitle': 'Обеспечивает межсетевое взаимодействие, предоставляя модули для поддержки распределенных бизнес-систем',
        'subtitle_en': 'Provides interconnection by providing modules to support distributed business systems',
        'token': 'IRIS',
        'stakewolle_comission': '0%',
        'kepler_link': 'https://wallet.keplr.app/#/irishub/stake?modal=stake&validator=iva1ycumtcdd6u2f2m2ar5u3szty524xmz6eac6lrh',
        'coingecko_status': true,
        'adres': 'iaa1ycumtcdd6u2f2m2ar5u3szty524xmz6egfss7s',
        'cosmostation': 'https://wallet.cosmostation.io/iris/',
        'price_dynamics': false,
        'pingpub_link': 'https://ping.pub/iris-network',
        'bonded_ratio_link': 'https://iris.api.ping.pub',
        'mintskan_url': "https://api-iris.cosmostation.io/v1/status"
      },
      {
        'coin': 'certik',
        'title': 'CertiK',
        'short_title': 'CertiK',
        'subtitle': 'Решения для централизованной безопасности - обеспечения правильности и безопасности ваших блокчейн-проектов',
        'subtitle_en': 'Decentralized security solutions to ensure the correctness and security of your blockchain projects',
        'token': 'CTK',
        'stakewolle_comission': '0%',
        'kepler_link': 'https://wallet.keplr.app/#/shentu/stake?modal=stake&validator=certikvaloper1qy7jncf45lluxaya5jaxf9r284jnmzz5fw2egh',
        'coingecko_status': true,
        'adres': 'certik1qy7jncf45lluxaya5jaxf9r284jnmzz576wepd',
        'cosmostation': 'https://wallet.cosmostation.io/certik/',
        'price_dynamics': false,
        'pingpub_link': 'https://ping.pub/iris-network',
        'bonded_ratio_link': 'https://iris.api.ping.pub',
        'mintskan_url': "https://api-certik.cosmostation.io/v1/status"
      },
      {
        'coin': 'desmos',
        'title': 'Desmos',
        'short_title': 'Desmos',
        'subtitle': 'Протокол для создания открытых и децентрализованных социальных сетей',
        'subtitle_en': 'Protocol for creating open and decentralized social networks',
        'token': 'DSM',
        'stakewolle_comission': '0%',
        'kepler_link': '-',
        'desmos_link': 'https://explorer.desmos.network/validators/desmosvaloper1zngdx77g9ywnwmwpwvj9w2eqcs6fhw78gn02d8',
        'coingecko_status': true,
        'adres': 'desmos1zngdx77g9ywnwmwpwvj9w2eqcs6fhw78k78784',
        'cosmostation': '-',
        'price_dynamics': false,
        'pingpub_link': 'https://ping.pub/desmos',
        'bonded_ratio_link': 'https://api.mainnet.desmos.network',
        'mintskan_url': "https://api-desmos.cosmostation.io/v1/status"
      },
      {
        'coin': 'comdex',
        'title': 'Comdex',
        'short_title': 'Comdex',
        'subtitle': 'Протокол синтетических активов на Cosmos',
        'subtitle_en': 'Synthetic asset protocol on Cosmos',
        'token': 'CMDX',
        'stakewolle_comission': '0%',
        'kepler_link': 'https://wallet.cosmostation.io/comdex',
        'coingecko_status': true,
        'adres': 'comdex15xevj3n6eq36t62sjjrsvf6hkuryg8w3jvmj6x',
        'cosmostation': 'https://wallet.cosmostation.io/comdex/',
        'price_dynamics': false,
        'pingpub_link': 'https://ping.pub/comdex',
        'bonded_ratio_link': 'https://rest.comdex.one',
        'mintskan_url': "https://api-comdex.cosmostation.io/v1/status"
      },
      {
        'coin': 'akash-network',
        'title': 'Akash',
        'short_title': 'Akash',
        'subtitle': 'Первое в мире децентрализованное и открытое облако',
        'subtitle_en': 'The first decentralized and open cloud in the world',
        'token': 'AKT',
        'stakewolle_comission': '0%',
        'kepler_link': 'https://wallet.keplr.app/#/akashnet/stake?modal=stake&validator=akashvaloper1ksu368eh54vcqzruqk42dsnx88hvk8px09ws7q',
        'coingecko_status': true,
        'adres': 'akash1ksu368eh54vcqzruqk42dsnx88hvk8px98qkw2',
        'cosmostation': 'https://wallet.cosmostation.io/akash/',
        'price_dynamics': false,
        'pingpub_link': 'https://ping.pub/akash-network',
        'bonded_ratio_link': 'https://akash.c29r3.xyz:443/api',
        'mintskan_url': "https://api-akash.cosmostation.io/v1/status"
      },
      {
        'coin': 'persistence',
        'title': 'Persistence',
        'short_title': 'Persistence',
        'subtitle': 'Протокол, обеспечивающий доступ к нескольким классам активов',
        'subtitle_en': 'Protocol that provides access to multiple asset classes',
        'token': 'XPRT',
        'stakewolle_comission': '0%',
        'kepler_link': 'https://wallet.keplr.app/#/core/stake?modal=stake&validator=persistencevaloper1rxjmg3l0myaz6fzzvkum82lzyqz5acyxqqc08l',
        'coingecko_status': true,
        'adres': 'persistence1rxjmg3l0myaz6fzzvkum82lzyqz5acyxfycjwx',
        'cosmostation': 'https://wallet.cosmostation.io/persistence',
        'price_dynamics': false,
        'pingpub_link': 'https://ping.pub/persistence',
        'bonded_ratio_link': 'https://rest.core.persistence.one',
        'mintskan_url': "https://api-persistence.cosmostation.io/v1/status"
      },
      {
        'coin': 'medibloc',
        'title': 'Mediblock',
        'short_title': 'Mediblock',
        'subtitle': 'Информационная экосистема персонального здравоохранения, построенная на блокчейне',
        'subtitle_en': 'Personal healthcare information ecosystem built on blockchain',
        'token': 'MED',
        'stakewolle_comission': '2%',
        'kepler_link': '-',
        'coingecko_status': true,
        'adres': 'panacea1dw3ev60v44q68qrrsz8lmwrx68f70hyrykw5ry',
        'cosmostation': 'https://wallet.cosmostation.io/medibloc/',
        'price_dynamics': false,
        'pingpub_link': 'https://ping.pub/persistence',
        'bonded_ratio_link': 'https://rest.core.persistence.one',
        'mintskan_url': " https://api-medibloc.cosmostation.io/v1/status"
      },
      {
        'coin': 'rizon',
        'title': 'Rizon',
        'short_title': 'Rizon',
        'subtitle': 'Основанная на Tendermint цифровая валюта и блокчейн-концентратор активов',
        'subtitle_en': 'A Tendermint-based digital currency and blockchain asset hub',
        'token': 'ATOLO',
        'stakewolle_comission': '5%',
        'kepler_link': '-',
        'coingecko_status': true,
        'adres': 'rizon170k335eghnmmjduy9qecwhaslkh63yrr2ugs62',
        'cosmostation': 'https://wallet.cosmostation.io/rizon/',
        'price_dynamics': false,
        'pingpub_link': 'https://ping.pub/rizon',
        'bonded_ratio_link': 'https://rizon.api.ping.pub',
        'mintskan_url': "https://api-rizon.cosmostation.io/v1/status"
      },
      {
        'coin': 'bitsong',
        'title': 'BitSong',
        'short_title': 'BitSong',
        'subtitle': 'Артисты, фанаты, менеджеры и лейблы в единой целостной экосистеме',
        'subtitle_en': 'Artists, fans, managers and labels in a single integrated ecosystem',
        'token': 'BTSG',
        'stakewolle_comission': '5%',
        'kepler_link': 'https://wallet.bitsong.io/validators/bitsongvaloper1pn6mhrwq8vdhns366jwxkggmhmxypuhrrc4huu',
        'coingecko_status': true,
        'adres': 'bitsong1pn6mhrwq8vdhns366jwxkggmhmxypuhrzuf7vp',
        'cosmostation': 'https://wallet.cosmostation.io/bitsong/',
        'price_dynamics': false,
        'pingpub_link': 'https://ping.pub/bitsong',
        'bonded_ratio_link': 'https://lcd.explorebitsong.com',
        'mintskan_url': "https://api-bitsong.cosmostation.io/v1/status"
      },
      {
        'coin': 'likecoin',
        'title': 'LikeCoin',
        'short_title': 'LikeCoin',
        'subtitle': 'Децентрализует публикацию. Владейте своим контентом навсегда.',
        'subtitle_en': 'Decentralizes the publication. Own your content forever.',
        'token': 'LIKE',
        'stakewolle_comission': '0%',
        'kepler_link': '-',
        'coingecko_status': true,
        'adres': 'cosmosvaloper13ytytwjuerm3zc8svdvgh3vq7fgve75vnfxafm',
        'cosmostation': '-',
        'price_dynamics': false,
        'pingpub_link': 'https://ping.pub/likecoin',
        'bonded_ratio_link': 'https://mainnet-node.like.co',
        'mintskan_url': ""
      },
      {
        'coin': 'chihuahua',
        'title': 'Chihuahua',
        'short_title': 'Chihuahua',
        'subtitle': 'Мем коин сети Cosmos',
        'subtitle_en': 'Meme coin of the Cosmos network',
        'token': 'HUA',
        'stakewolle_comission': '5%',
        'kepler_link': '-',
        'coingecko_status': true,
        'adres': 'chihuahua1ju6mkyxpjsdcmrw0pnx6sd4zu4wywkmhclnusg',
        'cosmostation': 'https://wallet.cosmostation.io/chihuahua/',
        'price_dynamics': false,
        'pingpub_link': 'https://ping.pub/chihuahua',
        'bonded_ratio_link': 'https://api.chihuahua.wtf',
        'mintskan_url': "https://api-chihuahua.cosmostation.io/v1/status"
      },
      {
        'coin': 'lum-network',
        'title': 'Lum Network',
        'short_title': 'Lum',
        'subtitle': 'Децентрализованный протокол для компаний, чтобы построить подлинное доверие со своими клиентами',
        'subtitle_en': 'A decentralized protocol for companies to build genuine trust with their customers',
        'token': 'LUM',
        'stakewolle_comission': '0%',
        'kepler_link': 'https://ping.pub/LUM%20Network/staking/lumvaloper1mpywgfyk6ku9uwfw4t6xhn050cjluhmjck27nx',
        'coingecko_status': true,
        'adres': 'lum1mpywgfyk6ku9uwfw4t6xhn050cjluhmj8prdgz',
        'cosmostation': 'https://wallet.cosmostation.io/lum/',
        'price_dynamics': false,
        'pingpub_link': 'https://ping.pub/lum-network',
        'bonded_ratio_link': 'https://node0.mainnet.lum.network/rest',
        'mintskan_url': "https://api-lum.cosmostation.io/v1/status"
      },
      {
        'coin': 'sentinel',
        'title': 'Sentinel',
        'short_title': 'Sentinel',
        'subtitle': 'Создание безопасных приложений $dVPN на Sentinel',
        'subtitle_en': 'Creating secure $dVPN applications on Sentinel',
        'token': 'DVPN',
        'stakewolle_comission': '0.25%',
        'kepler_link': '-',
        'coingecko_status': true,
        'adres': 'sent1hms0qpe27uulkllw96tmeqnl4hvxsf4v3yp829',
        'cosmostation': 'https://wallet.cosmostation.io/sentinel/',
        'price_dynamics': false,
        'pingpub_link': 'https://ping.pub/sentinel',
        'bonded_ratio_link': 'https://lcd.sentinel.co',
        'mintskan_url': "https://api-sentinel.cosmostation.io/v1/status"
      },
      {
        'coin': 'cheqd-network',
        'title': 'CHEQD Network',
        'short_title': 'CHEQD',
        'subtitle': 'Создание частной и безопасной сети цифровых учетных данных SSI для надежной экономики данных',
        'subtitle_en': 'Creating a private and secure SSI Digital Credential network for a robust data economy',
        'token': 'CHEQ',
        'stakewolle_comission': '0%',
        'kepler_link': '-',
        'coingecko_status': true,
        'adres': 'cheqdvaloper1ny8gd9tsyqhm56agp4vkpa6fldr2n4guthcvfj',
        'cosmostation': '-',
        'price_dynamics': false,
        'pingpub_link': 'https://ping.pub/cheqd',
        'bonded_ratio_link': 'https://api.cheqd.net',
        'mintskan_url': ""
      },
      {
        'coin': 'dig-chain',
        'title': 'DIG Chain',
        'short_title': 'DIG',
        'subtitle': 'Токенизация, фракционирование и управление недвижимостью через Dig Chain',
        'subtitle_en': 'Tokenization, Fractionation and Real Estate Management via Dig Chain',
        'token': 'DIG',
        'stakewolle_comission': '0%',
        'kepler_link': '-',
        'coingecko_status': true,
        'adres': 'digvaloper1vm6m78glgfjaepaxwcdg6py380q7yasds2k2t8',
        'cosmostation': '-',
        'price_dynamics': false,
        'pingpub_link': 'https://ping.pub/dig',
        'bonded_ratio_link': 'https://api-1-dig.notional.ventures',
        'mintskan_url': ""
      }
      ,
      {
        'coin': 'nomic',
        'title': 'Nomic',
        'short_title': 'Nomic',
        'subtitle': 'Мы делаем биткоиновские сайдчены и всякое такое',
        'subtitle_en': 'We make Bitcoin sidechains and stuff',
        'token': 'NOM',
        'stakewolle_comission': '5%',
        'kepler_link': '/',
        'coingecko_status': false,
        'adres': '-',
        'cosmostation': '-',
        'price_dynamics': false,
        'pingpub_link': 'https://ping.pub/dig',
        'bonded_ratio_link': 'https://api-1-dig.notional.ventures',
        'mintskan_url': ""
      }
      ,
      {
        'coin': 'gravity',
        'title': 'Gravity-Bridge',
        'short_title': 'Gravity',
        'subtitle': 'Обеспечиваем безопасность бриджей между блокчейнами',
        'subtitle_en': 'Secure the operation of bridges between blockchains',
        'token': 'GRAV',
        'stakewolle_comission': '5%',
        'kepler_link': '-',
        'coingecko_status': false,
        'adres': 'gravity1vdvdl3krc9s4plnnvfk58k83lx5v38s64mq2es',
        'cosmostation': 'https://wallet.cosmostation.io/gravity-bridge',
        'price_dynamics': false,
        'pingpub_link': 'https://ping.pub/gravity-bridge',
        'bonded_ratio_link': 'https://gravitychain.io:1317',
        'mintskan_url': "https://api-gravity-bridge.cosmostation.io/v1/status"
      }
      ,
      {
        'coin': 'darcmatter-coin',
        'title': 'Konstellation',
        'short_title': 'Konstellation',
        'subtitle': 'Инфраструктура для будущих децентрализованных фондовых рынков',
        'subtitle_en': 'Infrastructure for the future of the decentralized capital markets',
        'token': 'DARC',
        'stakewolle_comission': '0%',
        'kepler_link': '-',
        'coingecko_status': true,
        'adres': 'darc1txzc42vl5qel54tyuck8z8pfg979hwk8t6jkr2',
        'cosmostation': 'https://wallet.cosmostation.io/konstellation',
        'price_dynamics': false,
        'pingpub_link': 'https://ping.pub/gravity-bridge',
        'bonded_ratio_link': 'https://gravitychain.io:1317',
        'mintskan_url': "https://api-konstellation.cosmostation.io/v1/status"
      }
      ,
      {
        'coin': 'cerberus-2',
        'title': 'Cerberus',
        'short_title': 'Cerberus',
        'subtitle': 'Мем-монета с трехглавым псом экосистемы Космос',
        'subtitle_en': 'Three-headed canine meme-coin and NFT Project launched on Cosmos',
        'token': 'CRBRUS',
        'stakewolle_comission': '5%',
        'kepler_link': '-',
        'coingecko_status': true,
        'adres': 'cerberusvaloper1xjgspyv73d3k3ewygu0v2gcwwplwxkxg03reqy',
        'cosmostation': 'https://wallet.cosmostation.io/cerberus',
        'price_dynamics': false,
        'pingpub_link': 'https://ping.pub/cerberus',
        'bonded_ratio_link': 'https://api.cerberus.zone:1317',
        'mintskan_url': "https://api-cerberus.cosmostation.io/v1/status"
      },
      {
        'coin': 'ixo',
        'title': 'IXO',
        'short_title': 'IXO',
        'subtitle': 'Создание торговой площадки Impact DAO в сети Impact. Углеродно-отрицательная цепь уровня 1, предназначенная для ReFi и контроля изменения EarthState',
        'subtitle_en': 'Building your Impact DAO marketplace on the Internet of Impact. A layer-1 carbon-negative chain purposed for ReFi and verifying EarthState change\n',
        'token': 'IXO',
        'stakewolle_comission': '5%',
        'kepler_link': '-',
        'coingecko_status': true,
        'adres': 'ixovaloper12g6xke0lu758u8dtan8efsdhe2xxwxwh4lrjax',
        'cosmostation': 'https://wallet.cosmostation.io/cerberus',
        'price_dynamics': false,
        'pingpub_link': 'https://ping.pub/ixo',
        'bonded_ratio_link': 'https://impacthub.ixo.world/rest',
        'mintskan_url': ""
      }
      ,
      {
        'coin': 'crescent-network',
        'title': 'Crescent',
        'short_title': 'Crescent',
        'subtitle': 'Инновационные инвестиции в DeFi',
        'subtitle_en': 'Expanding DeFi capabilities through InterBlockchain Technology',
        'token': 'CRE',
        'stakewolle_comission': '0%',
        'kepler_link': '-',
        'coingecko_status': true,
        'adres': 'crevaloper1sx88pppqz998p6sq84hjvrx5qrgq7ezqdtmfxt',
        'cosmostation': 'https://wallet.cosmostation.io/crescent',
        'price_dynamics': false,
        'pingpub_link': 'https://ping.pub/crescent',
        'bonded_ratio_link': 'https://crescent-api.polkachu.com',
        'mintskan_url': "https://api-crescent.cosmostation.io/v1/status"
      }
      ,
      {
        'coin': 'fetch-ai',
        'title': 'Fetch',
        'short_title': 'Fetch',
        'subtitle': 'Создание платформ и сервисов ИИ, которые позволяют любому создавать и развертывать сервисы',
        'subtitle_en': 'Creating AI platforms and services that let anyone build and deploy',
        'token': 'FET',
        'stakewolle_comission': '0%',
        'kepler_link': '-',
        'coingecko_status': true,
        'adres': 'fetchvaloper1xmznygxujt2vpzmufvghfunw5rq02qn5plut4t',
        'cosmostation': 'https://wallet.cosmostation.io/fetch-ai',
        'price_dynamics': false,
        'pingpub_link': 'https://ping.pub/fetchhub',
        'bonded_ratio_link': 'https://rest-fetchhub.fetch.ai',
        'mintskan_url': "https://api-fetchai.cosmostation.io/v1/status"
      },
      {
        'coin': 'vidulum',
        'title': 'Vidulum',
        'short_title': 'Vidulum',
        'subtitle': 'Держите, зарабатывайте и владейте своим криптоактивы некастодиальным способом.',
        'subtitle_en': 'Hold, earn, and own your crypto assets in non-custodial fashion.',
        'token': 'VDL',
        'stakewolle_comission': '0%',
        'kepler_link': '-',
        'coingecko_status': true,
        'adres': 'vdlvaloper12mzd08n2ut7qwfmchezk2hqkh644lvd2tngequ',
        'cosmostation': '-',
        'price_dynamics': false,
        'pingpub_link': 'https://ping.pub/vidulum',
        'bonded_ratio_link': 'https://mainnet-lcd.vidulum.app',
        'mintskan_url': ""
      },
      {
        'coin': 'injective-protocol',
        'title': 'Injective',
        'short_title': 'Injective',
        'subtitle': 'Создайте любой финансовый рынок, быстрый, кроссчейн, с низкой комиссией, безопасный и полностью децентрализованный протокол обмена.',
        'subtitle_en': 'Create any financial market fast, cross-chain, low fee, secure, and fully decentralized exchange protocol.',
        'token': 'INJ',
        'stakewolle_comission': '0%',
        'kepler_link': '-',
        'coingecko_status': true,
        'adres': 'injvaloper1kpfxtqt5cmlew46dem32fqlk5g6k4wyueh4szu',
        'cosmostation': '-',
        'price_dynamics': false,
        'pingpub_link': 'https://ping.pub/injective',
        'bonded_ratio_link': 'https://lcd.injective.network',
        'mintskan_url': "https://api-inj.cosmostation.io/v1/status"
      },
      {
        'coin': 'degenerator',
        'title': 'Meme',
        'short_title': 'Meme',
        'subtitle': 'Держите, зарабатывайте и владейте своим криптоактивы некастодиальным способом.',
        'subtitle_en': 'Create any financial market fast, cross-chain, low fee, secure, and fully decentralized exchange protocol.',
        'token': 'MEME',
        'stakewolle_comission': '',
        'kepler_link': '-',
        'coingecko_status': true,
        'adres': 'memevaloper1dshysamgzd0d7meftn6npf9pxyskxh49mdc68a',
        'cosmostation': '-',
        'price_dynamics': false,
        'pingpub_link': 'https://ping.pub/meme',
        'bonded_ratio_link': 'https://api-meme-1.meme.sx',
        'mintskan_url': "https://api-umee.cosmostation.io/v1/status"
      },
    ]
    // Текущая дата и вчерашняя - для отдельных запросов из Coingecko
    //const today = Math.floor(new Date().getTime() / 1000);
    //const yesterday = Math.floor(new Date(new Date().getTime() - 24*60*60*1000).getTime() / 1000)

  },

  methods: {
    async addNets() {
      this.nets.forEach(async (net, idx) => {
        try {
          const response = await fetch(`https://api-stakewolle.com/api/nets-plural`, {
            method: "POST",
            body: JSON.stringify({data: net}),
            headers: {
              'Content-type': 'application/json',
            }
          })
          console.log(await response.json());
        }catch(e) {
          console.log(e);
        }
      })
    },
    async fetchNets() {
      const nets = (await this.$host.get('/api/net-card')).data
      const page = this.$store.state.nets.page
      this.$store.commit('nets/saveNets', nets)
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
