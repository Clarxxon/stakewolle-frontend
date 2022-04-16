<template>
  <div>
    <p class="popup-copy">{{$t('popup.copy')}}</p>
    <div class="loader">
      <div class="loader-logo">
        <img src="../static/loader-logo.svg" alt="">
        <div>
          <p class="loader-logo-title">takewolle</p>
          <p class="loader-logo-subtitle">Professional blockchain validator</p>
        </div>
      </div>
      <div class="loader-circle"></div>
      <a href="https://akash.network" target="_blank" class="powered-by-akash-wrapper">
        <img class="powered-by-akash" :src="powered" alt="">
      </a>
    </div>
    <Navigation v-bind:navigation="navigation" v-if="desktop"></Navigation>
    <mobile-navigation v-bind:navigation="navigation" v-if="mobile"></mobile-navigation>
    <section id="tutorial-top-section">
      <div v-if="desktop" class="target-block__image">
        <div class="target-block__image-big">
          <img class="outside-big-white" :src="outsideBigWhite" alt="">
          <img class="outside-orange" :src="outsideOrange" alt="">
          <img class="outside-sif" :src="outsideSif" alt="">
          <img class="outside-violet" :src="outsideViolet" alt="">
          <div class="target-block__image-big__main-ring">
            <img class="orange-bg" :src="orangeBg" alt="">
            <img class="dark-bg" :src="darkBg" alt="">
            <img class="img-inside-orange" :src="orangeInside" alt="">
            <img class="img-inside-dark" :src="darkInside" alt="">
            <img class="img-inside-white" :src="whiteInside" alt="">
            <img class="main-react" :src="mainreact" alt="">
          </div>
        </div>
        <img id="round" :src="round" alt="">
      </div>
      <div v-if="mobile" class="mobile-start__bg-bottom">
        <div class="mobile-start__bg-bottom-image">
          <img class="mobile-start__bg-bottom-image-item img-center" :src="center" alt="">
          <img class="mobile-start__bg-bottom-image-item img-orange" :src="roundOrange" alt="">
          <img class="mobile-start__bg-bottom-image-item img-violet-1" :src="roundViolet1" alt="">
          <img class="mobile-start__bg-bottom-image-item img-violet-2" :src="roundViolet2" alt="">
          <img class="mobile-start__bg-bottom-image-item img-violet-3" :src="roundViolet3" alt="">
          <img class="mobile-start__bg-bottom-image-item img-white" :src="roundWhiteTop" alt="">
        </div>
      </div>
      <div class="tutorial-top">
        <h2>Delegate to Stakewolle</h2>
        <div class="tutorial-benefits">
          <div v-for="i in benefits" class="benefits-wrapper__item">
            <div class="benefits-wrapper__item-icon">
              <img :src="i.img" alt="">
            </div>
            <div class="benefits-wrapper__item-description">
              <p>{{ i.description }}</p>
            </div>
          </div>
        </div>
        <h3><span class="validator-name"></span> validator</h3>
        <div class="calculator-token">
          <p class="calculator-token-address"></p>
          <input value="" tabindex='-1' contenteditable="true" type="text" class="calculator-token-input">
          <button @click="copyAdres">
            <img :src="copy" alt="">
          </button>
        </div>
      </div>
      <img class="tutorial-top-purple" :src="bigBgPink" alt="">
      <div class="scroll-bottom">
        <button @click.prevent="anchor('token-tutorial-info')">
          <img src="../static/arrow-scroll.svg" alt="">
        </button>
      </div>
    </section>
    <section id="delegate-guide">
      <div id="delegate-guide-bg"></div>
      <h3 id="token-tutorial-info">{{ $t('tutorial.delegate') }} <span class="token-name"></span> {{ $t('tutorial.bracket_open') }} <span class="net-name"></span>{{ $t('tutorial.net') }}{{ $t('tutorial.bracket_lock') }}</h3>
      <div class="validator-switch">
        <div class="validator-switch-background"></div>
        <button @click="switchValidator" class="validator-switch-button validator-switch-button-active">
          <span class="validator-switch-button-mobile-flag">
            <span class="validator-switch-button-mobile-flag-ring"></span>
          </span>
          <p>Keplr</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
            <rect x="0.8" y="0.8" width="54.4" height="54.4" rx="7.2" fill="#E1E9F6" stroke="#2D3C6C" stroke-width="1.6"/>
            <path d="M21.8889 42.3694C21.3803 42.3694 20.9323 42.1877 20.5449 41.8245C20.1816 41.4613 20 41.0133 20 40.4805V15.8889C20 15.3561 20.1816 14.9081 20.5449 14.5449C20.9323 14.1816 21.3803 14 21.8889 14C22.4216 14 22.8696 14.1816 23.2329 14.5449C23.5961 14.9081 23.7777 15.3561 23.7777 15.8889V26.7862L35.8011 14.7628C36.0917 14.4722 36.3581 14.2785 36.6003 14.1816C36.8424 14.0605 37.0967 14 37.3631 14C37.9685 14 38.4044 14.1816 38.6707 14.5449C38.9371 14.9081 39.034 15.344 38.9613 15.8525C38.8887 16.3369 38.6586 16.7849 38.2712 17.1965L29.0085 26.4956L38.4528 39.3544C38.7434 39.7661 38.8645 40.2141 38.816 40.6984C38.7676 41.1586 38.5981 41.5581 38.3075 41.8971C38.0169 42.212 37.6294 42.3694 37.1451 42.3694C36.4671 42.3694 35.9464 42.103 35.5832 41.5702L26.3931 29.111L23.7777 31.7263V40.4805C23.7777 41.0133 23.5961 41.4613 23.2329 41.8245C22.8696 42.1877 22.4216 42.3694 21.8889 42.3694Z" fill="#2D3C6C"/>
          </svg>
        </button>
        <button @click="switchValidator" class="validator-switch-button">
          <span class="validator-switch-button-mobile-flag">
            <span class="validator-switch-button-mobile-flag-ring"></span>
          </span>
          <p>Cosmostation</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
            <path d="M32.0168 15.6273C33.7759 14.6011 35.3885 13.6922 37.1476 12.666C38.2325 14.5131 39.288 16.243 40.2848 18.0021C42.6304 22.0482 44.9173 26.1529 47.3215 30.1697C48.3183 31.8116 48.3476 33.2775 47.3508 34.9487C44.0084 40.6074 40.7246 46.3247 37.4408 52.0713C36.6199 53.5079 35.5058 54.1236 33.8639 54.0943C27.1791 54.065 20.4942 54.065 13.7801 54.0943C12.4021 54.0943 11.2586 53.7425 10.555 52.511C7.12461 46.4419 3.60628 40.4021 0 34.1571C1.72984 33.1603 3.37173 32.1927 5.18953 31.1372C6.53822 33.4828 7.85759 35.711 9.11833 37.9393C10.8188 40.9006 12.5487 43.8618 14.2199 46.8231C14.689 47.6733 15.2461 48.0838 16.3016 48.0838C21.2859 48.0252 26.2702 48.0252 31.2545 48.0838C32.4272 48.0838 33.1016 47.6733 33.6586 46.6472C36.0921 42.3079 38.5843 37.998 41.1058 33.7173C41.6042 32.8671 41.5456 32.2807 41.0764 31.4597C38.4084 26.8273 35.7696 22.2241 33.1016 17.621C32.7791 17.0346 32.4565 16.4189 32.0168 15.6273Z" fill="#2D3C6C"/>
            <path d="M55.9995 22.5758C54.3283 23.5434 52.7451 24.4523 51.0152 25.4491C49.0801 22.0774 47.1744 18.7936 45.2686 15.5099C44.1252 13.5162 43.011 11.4931 41.7796 9.55804C41.4864 9.08893 40.7534 8.61982 40.1964 8.61982C34.8603 8.56119 29.5534 8.56119 24.2173 8.61982C23.7482 8.61982 23.0739 9.00098 22.8393 9.41145C20.1126 14.0439 17.4152 18.6764 14.8058 23.3675C14.5419 23.8073 14.7178 24.6868 14.9817 25.2146C17.7084 30.0523 20.5231 34.8607 23.3084 39.6984C23.5137 40.0795 23.7189 40.4607 24.0414 41.0471C22.3702 42.0146 20.7576 42.9528 19.0278 43.9497C17.5032 41.3109 16.0372 38.7601 14.5712 36.2387C12.6362 32.8963 10.7597 29.5245 8.76601 26.2408C7.88643 24.7748 7.88643 23.5141 8.76601 22.0188C12.1671 16.1842 15.4801 10.379 18.7932 4.57375C19.5555 3.25438 20.611 2.63867 22.1356 2.63867C28.7911 2.66799 35.4173 2.66799 42.0728 2.63867C43.8027 2.63867 45.0048 3.25438 45.8843 4.80831C48.9922 10.291 52.1587 15.7151 55.3252 21.1685C55.5597 21.6083 55.7356 22.0481 55.9995 22.5758Z" fill="#2D3C6C"/>
          </svg>
        </button>
      </div>
      <div class="delegate-switch">
        <div class="delegate-switch-background"></div>
        <button @click="switchDelegate" id="delegate" class="delegate-switch-button delegate-switch-button-active">{{$t('tutorial.delegate_button.delegate')}}</button>
        <button @click="switchDelegate" id="redelegate" class="delegate-switch-button">{{$t('tutorial.delegate_button.redelegate')}}</button>
        <button @click="switchDelegate" id="undelegate" class="delegate-switch-button">{{$t('tutorial.delegate_button.undelegate')}}</button>
      </div>
      <div class="delegate-tutorial">
        <img class="delegate-tutorial-bg-img delegate-tutorial-bg-img-main-round-2" src="../static/tutorial/Component 13.png" alt="">
        <img class="delegate-tutorial-bg-img delegate-tutorial-bg-img-orange" src="../static/tutorial/Round orange (2).svg" alt="">
        <img class="delegate-tutorial-bg-img delegate-tutorial-bg-img-mini-violet" src="../static/tutorial/mini-violet.svg" alt="">
        <img class="delegate-tutorial-bg-img delegate-tutorial-bg-img-main-round" src="../static/tutorial/Main round.png" alt="">
        <p v-if="kepler && delegate" class="delegate-tutorial-title">{{$t('tutorial.stages.keplr.delegate.title')}}</p>
        <p v-if="cosmostation && delegate" class="delegate-tutorial-title">{{$t('tutorial.stages.cosmostation.delegate.title')}}</p>
        <p v-if="kepler && redelegate" class="delegate-tutorial-title">{{$t('tutorial.stages.keplr.redelegate.title')}}</p>
        <p v-if="kepler && undelegate" class="delegate-tutorial-title">{{$t('tutorial.stages.keplr.undelegate.title')}}</p>
        <p v-if="cosmostation && redelegate" class="delegate-tutorial-title">{{$t('tutorial.stages.cosmostation.redelegate.title')}}</p>
        <p v-if="cosmostation && undelegate" class="delegate-tutorial-title">{{$t('tutorial.stages.cosmostation.undelegate.title')}}</p>
        <ul v-if="kepler && delegate" class="delegate-tutorial-container">
          <li class="delegate-tutorial-stage">
            <div><span>1. </span><p> {{$t('tutorial.stages.keplr.delegate.step_1')}}</p></div>
            <img src="../static/tutorial/1_1.png" alt="">
          </li>
          <li class="delegate-tutorial-stage">
            <div><span>2. </span><p> {{$t('tutorial.stages.keplr.delegate.step_2')}}</p></div>
            <img src="../static/tutorial/delegate_2.jpg" alt="">
          </li>
          <li class="delegate-tutorial-stage">
            <div><span>3. </span><p> {{$t('tutorial.stages.keplr.delegate.step_3')}}</p></div>
            <img src="../static/tutorial/delegate_3.jpg" alt="">
          </li>
          <li class="delegate-tutorial-stage">
            <div><span>4. </span><p> {{$t('tutorial.stages.keplr.delegate.step_4')}}</p></div>
            <img src="../static/tutorial/delegate_4.jpg" alt="">
          </li>
          <p class="delegate-tutorial-footer">{{$t('tutorial.stages.keplr.delegate.subtitle')}}</p>
        </ul>
        <ul v-if="kepler && redelegate" class="delegate-tutorial-container">
          <li class="delegate-tutorial-stage">
            <div><span>1. </span><p> {{$t('tutorial.stages.keplr.redelegate.step_3')}}</p></div>
            <img src="../static/tutorial/redelegate_3.jpg" alt="">
          </li>
          <li class="delegate-tutorial-stage">
            <div><span>2. </span><p> {{$t('tutorial.stages.keplr.redelegate.step_4')}}</p></div>
            <img src="../static/tutorial/redelegate_4.jpg" alt="">
          </li>
        </ul>
        <ul v-if="kepler && undelegate" class="delegate-tutorial-container">
          <li class="delegate-tutorial-stage">
            <div><span>1. </span><p> {{$t('tutorial.stages.keplr.undelegate.step_3')}}</p></div>
            <img src="../static/tutorial/undelegate_3.jpg" alt="">
          </li>
          <li class="delegate-tutorial-stage">
              <div><span>2. </span><p> {{$t('tutorial.stages.keplr.undelegate.step_4')}}</p></div>
            <img src="../static/tutorial/undelegate_4.jpg" alt="">
          </li>
        </ul>
        <ul v-if="cosmostation && delegate" class="delegate-tutorial-container">
          <li class="delegate-tutorial-stage">
            <div><span>1. </span><p> {{$t('tutorial.stages.cosmostation.delegate.step_1')}}</p></div>
            <img src="../static/tutorial/2_1.webp" alt="">
          </li>
          <li class="delegate-tutorial-stage">
            <div><span>2. </span><p> {{$t('tutorial.stages.cosmostation.delegate.step_2')}}</p></div>
            <img src="../static/tutorial/2_2.webp" alt="">
          </li>
          <li class="delegate-tutorial-stage">
            <div class="delegate-tutorial-stage-big-info">
              <div><span>3. </span><p> {{$t('tutorial.stages.cosmostation.delegate.step_3')}}</p></div>
            </div>
            <img src="../static/tutorial/2_3.webp" alt="">
          </li>
          <li class="delegate-tutorial-stage">
            <div class="delegate-tutorial-stage-big-info">
              <div><span>4. </span><p> {{$t('tutorial.stages.cosmostation.delegate.step_4')}}</p></div>
            </div>
            <img src="../static/tutorial/2_4.webp" alt="">
          </li>
        </ul>
        <ul v-if="cosmostation && redelegate" class="delegate-tutorial-container">
          <li class="delegate-tutorial-stage">
            <div class="delegate-tutorial-stage-big-info">
              <div><span>1. </span><p> {{$t('tutorial.stages.cosmostation.redelegate.step_3')}}</p></div>
            </div>
            <img src="../static/tutorial/re_3.jpg" alt="">
          </li>
          <li class="delegate-tutorial-stage">
            <div class="delegate-tutorial-stage-big-info">
              <div><span>2. </span><p> {{$t('tutorial.stages.cosmostation.redelegate.step_4')}}</p></div>
            </div>
            <img src="../static/tutorial/re_4.jpg" alt="">
          </li>
        </ul>
        <ul v-if="cosmostation && undelegate" class="delegate-tutorial-container">
          <li class="delegate-tutorial-stage">
            <div class="delegate-tutorial-stage-big-info">
              <div><span>1. </span><p> {{$t('tutorial.stages.cosmostation.undelegate.step_3')}}</p></div>
            </div>
            <img src="../static/tutorial/un_3.jpg" alt="">
          </li>
          <li class="delegate-tutorial-stage">
            <div class="delegate-tutorial-stage-big-info">
              <div><span>2. </span><p> {{$t('tutorial.stages.cosmostation.undelegate.step_4')}}</p></div>
            </div>
            <img src="../static/tutorial/un_4.jpg" alt="">
          </li>
        </ul>
      </div>
      <img class="delegate-tutorial-footer-bg" src="../static/very-big-pink.png" alt="">
    </section>
    <section id="tutorial-slider">
      <div class="tutorial-slider">
        <img class="tutorial-slider-k" :src="roundK" alt="">
        <img class="tutorial-slider-blur" src="../static/tutorial-slider-blur.png" alt="">
        <img class="tutorial-slider-bottom" src="../static/tutorial-slider-bottom.png" alt="">
        <img class="tutorial-slider-top-line" src="../static/soon-validators/bottom-line.png" alt="">
        <img class="tutorial-slider-bottom-line" src="../static/soon-validators/bottom-line.png" alt="">
        <div v-if="kepler || cosmostation" class="tutorial-slider-wrapper">
          <div class="tutorial-slider-wrapper-item tutorial-slider-wrapper-item-current">
            <h4>{{ $t('tutorial.step') }} 1 {{ $t('tutorial.of') }} 4. {{ $t('tutorial.video._01') }}</h4>
<!--            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>-->
<!--            <img class="tutorial-slider-wrapper-image" src="../static/tutorial/1_3.png" alt="">-->
            <video autoplay controls="controls" src="../static/video/step_1_kepler.mp4"></video>
          </div>
          <div class="tutorial-slider-wrapper-item">
            <h4>{{ $t('tutorial.step') }} 2 {{ $t('tutorial.of') }} 4. {{ $t('tutorial.video._02') }}</h4>
<!--            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>-->
<!--            <img class="tutorial-slider-wrapper-image" src="../static/tutorial/1_3.png" alt="">-->
            <video autoplay controls="controls" src="../static/video/step_2_kepler.mp4"></video>
          </div>
          <div class="tutorial-slider-wrapper-item">
            <h4>{{ $t('tutorial.step') }} 3 {{ $t('tutorial.of') }} 4. {{ $t('tutorial.video._03') }}</h4>
<!--            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>-->
<!--            <img class="tutorial-slider-wrapper-image" src="../static/tutorial/1_3.png" alt="">-->
            <video autoplay controls="controls" src="../static/video/step_3_kepler.mp4"></video>
          </div>
          <div class="tutorial-slider-wrapper-item">
            <h4>{{ $t('tutorial.step') }} 4 {{ $t('tutorial.of') }} 4. {{ $t('tutorial.video._04') }}</h4>
<!--            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>-->
<!--            <img class="tutorial-slider-wrapper-image" src="../static/tutorial/1_3.png" alt="">-->
            <video autoplay controls="controls" src="../static/video/step_4_kepler.mp4"></video>
          </div>
          <div class="tutorial-slider-wrapper-controls">
            <button @click="tutorialSliderPrev">
              <div class="button-ring button-ring-left">
                <img :src="sliderArrow" alt="">
              </div>
              <div class="button-text button-text-left">
                <p>{{ $t('tutorial.slider.left') }}</p>
              </div>
            </button>
            <button @click="tutorialSliderNext">
              <div class="button-ring button-ring-right">
                <img style="transform: rotate(180deg)" :src="sliderArrow" alt="">
              </div>
              <div class="button-text button-text-right">
                <p>{{ $t('tutorial.slider.right') }}</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="tutorial-video">
      <div class="tutorial-video-bg"></div>
      <p class="tutorial-video-title">{{ $t('tutorial.video_title') }}</p>
      <img class="tutorial-video-bg-img tutorial-video-bg-img-akash" src="../static/tutorial/akash.svg" alt="">
      <img class="tutorial-video-bg-img tutorial-video-bg-img-round-white" src="../static/tutorial/Round white.svg" alt="">
      <img class="tutorial-video-bg-img tutorial-video-bg-img-round-orange" src="../static/tutorial/Round orange (1).svg" alt="">
      <img class="tutorial-video-bg-img tutorial-video-bg-img-round-s" src="../static/tutorial/Round-s.svg" alt="">
      <img class="tutorial-video-bg-img tutorial-video-bg-img-round-blur" src="../static/tutorial/Round-blur.png" alt="">
      <div class="tutorial-video-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/zd-m1lgcy5E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </section>
    <Footer v-bind:navigation="navigation" v-if="desktop"></Footer>
    <mobile-footer v-bind:navigation="navigation" v-if="mobile"></mobile-footer>
    <a href="https://akash.network" target="_blank" class="powered-by-akash-wrapper">
      <img class="powered-by-akash" :src="powered" alt="">
    </a>
  </div>
</template>

<script>
import '../static/styles/styles.css';
import '../static/fonts/opensans/opensans.css';
import '../static/fonts/osanscondensed/osanscondensed.css';
import '../static/fonts/comfortaa/comfortaa.css';
import '../static/fonts/acrom/stylesheet.css';
import "../static/styles/tutorial.scss";
import powered from '../static/powered-by-akash.png';
import round from "../static/top-img/info-violet.svg";
import star from "@/static/orange-star.svg";
import roundWhite from "../static/jar.svg";
import blurWhite from "@/static/blur-white.svg";
import orangeBg from '../static/top-img/bg-orange.png';
import mainreact from '../static/Main round (5).svg';
import darkBg from '../static/top-img/bg-dark.png';
import darkInside from '../static/redesign/Round violet (3).svg';
import orangeInside from '../static/Round orange (9).svg';
import whiteInside from '../static/top-img/white-inside.svg';
import outsideWhite from '../static/top-img/outside-white.svg';
import outsideOrange from '../static/top-img/outside-orange.svg';
import outsideSif from '../static/redesign/Round violet (16).svg';
import outsideBigWhite from '../static/redesign/Component 19.svg';
import outsideViolet from '../static/top-img/outside-violet.svg';
import bigBgPink from '../static/tutorial-big-pink.png'
import gg from "static/globe-grid 1.svg";
import shield from "static/shield 1.svg";
import timer from "static/24-hours 1.svg";
import copy from '@/static/nets/copy.svg';
import center from '../static/redesign/Component 14 (3).png';
import roundOrange from '../static/mobile/top-bg/Round orange (2).svg';
import roundViolet1 from '../static/mobile/top-bg/Round violet (3).svg';
import roundViolet2 from '../static/mobile/top-bg/sif.png';
import roundViolet3 from '../static/mobile/top-bg/Round violet (2).svg';
import roundWhiteTop from '../static/mobile/top-bg/RoundWh.png';
import sliderArrow from '../static/slider-arrow.svg';
import roundK from '../static/round-k.svg';
import fav from '../static/fav.svg';

export default {
  name: "tutorial",
  head() {
    return {
      titleTemplate: 'Delegate you tokens with us | Stakewolle',
      mets: [
        {name: 'description', content: 'Secure the Cosmos, Secret, Osmosis, Juno, Band networks and earn rewards. We are a reliable staking validator. We know staking.'}
      ]
    }
  },
  data(){
    return{
      mobile: false,
      desktop: false,
      bigBgPink,
      powered, gg, shield, timer, copy, roundK, fav,
      round, star, blurWhite, orangeBg, sliderArrow,
      mainreact, darkBg, darkInside, orangeInside,
      whiteInside, outsideWhite, center, roundOrange, roundViolet1, roundViolet2,
      roundWhite, roundViolet3, roundWhiteTop,
      outsideOrange, outsideSif, outsideBigWhite, outsideViolet,
      navigation: {
        about: false,
        profit: false,
        guide: false,
        contacts: false,
        blog: true,
        stake: false
      },
      benefits: [],
      kepler: true,
      cosmostation: false,
      buttonBgOrient: false,
      delegate: true,
      redelegate: false,
      undelegate: false,
      current: 0,
    }
  },
  created(){
    this.benefits = [
      {img: gg, description: this.$t('benefits._01')},
      {img: shield, description: this.$t('benefits._02')},
      {img: timer, description: this.$t('benefits._03')},
    ]
  },
  mounted(){
    if(window.innerWidth<=428){
      this.mobile = true
    } else {
      this.desktop = true
    }

    let tokenName = document.querySelector('.token-name')
    let netName = document.querySelector('.net-name')
    let calcTokenAddress = document.querySelector('.calculator-token-address')
    let calcTokenInput = document.querySelector('.calculator-token-input')
    let validatorName = document.querySelector('.validator-name')

    if(!localStorage.getItem('token-name')){
      tokenName.innerHTML = 'Atom'
      validatorName.innerHTML = 'Cosmos'
      netName.innerHTML = 'Cosmos'
      calcTokenAddress.innerHTML = 'cosmos1gf4wlkutql95j7wwsxz490s6fahlvk2sqj4m34'
      calcTokenInput.value = 'cosmos1gf4wlkutql95j7wwsxz490s6fahlvk2sqj4m34'
    } else {
      tokenName.innerHTML = localStorage.getItem('token-name')
      validatorName.innerHTML = localStorage.getItem('net-name')
      netName.innerHTML = localStorage.getItem('net-name')
      calcTokenAddress.innerHTML = localStorage.getItem('token-validator')
      calcTokenInput.value = localStorage.getItem('token-validator')
    }
    window.addEventListener('orientationchange', () => {
      const orientationLandscape = window.matchMedia('(orientation: landscape)')
      const orientationProtrait = window.matchMedia('(orientation: portrait)')
      if (orientationLandscape.matches) {
        window.location.reload()
      } else {
        window.location.reload()
      }
      if (orientationProtrait.matches) {
        window.location.reload()
      } else {
        window.location.reload()
      }
    })
  },
  methods: {
    tutorialSliderNext(){
      let sliderItem = document.querySelectorAll('.tutorial-slider-wrapper-item')
      if(this.current < sliderItem.length-1){
        sliderItem[this.current].classList.remove('tutorial-slider-wrapper-item-current')
        this.current++
        sliderItem[this.current].classList.add('tutorial-slider-wrapper-item-current')
        // if(window.innerWidth <= 430){
        //   this.anchor('tutorial-slider')
        // }
      }
    },
    tutorialSliderPrev(){
      let sliderItem = document.querySelectorAll('.tutorial-slider-wrapper-item')
      if(this.current > 0){
        sliderItem[this.current].classList.remove('tutorial-slider-wrapper-item-current')
        this.current--
        sliderItem[this.current].classList.add('tutorial-slider-wrapper-item-current')
        if(window.innerWidth <= 430){
          this.anchor('tutorial-slider')
        }
      }
    },
    switchDelegate(e){
      this.current = 0
      let buttons = document.querySelectorAll('.delegate-switch-button')
      for(let i=0; i<buttons.length; i++){
        buttons[i].classList.remove('delegate-switch-button-active')
      }
      e.target.classList.add('delegate-switch-button-active')
      for(let i=0; i<buttons.length; i++){
        if(e.target === buttons[i]){
          if(i===0){
            this.delegate = true
            this.redelegate = false
            this.undelegate = false
          } else if (i===1) {
            this.delegate = false
            this.redelegate = true
            this.undelegate = false
          } else {
            this.delegate = false
            this.redelegate = false
            this.undelegate = true
          }
        }
      }
    },
    switchValidator(e){
      this.current = 0
      if (e.target.tagName === 'BUTTON') {
        this.switchActiveValidator(e.target)
      } else if (e.target.tagName === 'P') {
        this.switchActiveValidator(e.target.parentNode)
      } else if (e.target.tagName === 'svg') {
        this.switchActiveValidator(e.target.parentNode)
      } else {
        this.switchActiveValidator(e.target.parentNode.parentNode)
      }
    },
    switchActiveValidator(target){
      let calcSwitchBackground = document.querySelector('.validator-switch-background')
      let buttons = document.querySelectorAll('.validator-switch-button')
      setTimeout(()=>{
        if(!target.classList.contains('validator-switch-button-active')){
          target.classList.add('validator-switch-button-active')
          if(this.buttonBgOrient === false){
            if(window.innerWidth > 428){
              calcSwitchBackground.style.left = '50%'
              calcSwitchBackground.style.right = '0%'
            } else {
              calcSwitchBackground.style.top = '50%'
              calcSwitchBackground.style.bottom = '0%'
              calcSwitchBackground.style.borderRadius = '0 0 1.75rem 1.75rem'
            }
            this.kepler = false
            this.cosmostation = true
          } else {
            if(window.innerWidth > 428) {
              calcSwitchBackground.style.left = '0%'
              calcSwitchBackground.style.right = '50%'
            } else {
              calcSwitchBackground.style.top = '0%'
              calcSwitchBackground.style.bottom = '50%'
              calcSwitchBackground.style.borderRadius = '1.75rem 1.75rem 0 0'
            }
            this.kepler = true
            this.cosmostation = false
          }
          for(let i=0; i<buttons.length; i++){
            if(buttons[i] !== target){
              if(buttons[i].classList.contains('validator-switch-button-active')){
                buttons[i].classList.remove('validator-switch-button-active')
                this.buttonBgOrient = !this.buttonBgOrient
              }
            }
          }
        } else {
          this.buttonBgOrient = this.buttonBgOrient
        }
      }, 100)
    },
    anchor(link){
      if(document.querySelector('#' + link)){
        document.querySelector('#' + link).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    },
    copyAdres(){
      let el = document.querySelectorAll('.calculator-token-input')[0]
      const popupCopy = document.querySelectorAll('.popup-copy')[0]
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
        let testingCodeToCopy = document.querySelectorAll('.calculator-token-input')[0]
        testingCodeToCopy.setAttribute('type', 'text')    // 不是 hidden 才能複製
        testingCodeToCopy.select()

        try {
          let successful = document.execCommand('copy');
          console.log(successful)
        } catch (err) {
          alert('Oops, unable to copy');
        }

        /* unselect the range */
        testingCodeToCopy.setAttribute('type', 'hidden')
        window.getSelection().removeAllRanges()
      }

      popupCopy.style.opacity = '1'
      popupCopy.style.zIndex = '999'
      setTimeout(()=>{
        popupCopy.style.opacity = '0'
        popupCopy.style.zIndex = '-1'
      }, 3000)
    },
  }
}
</script>

<style lang="sass" scoped>
@import "../static/styles/_vars"
.mobile-start__bg-bottom-image
  position: absolute
  right: -20%
  top: 5rem
  z-index: 0
  .mobile-start__bg-bottom-image-item.img-violet-2
    bottom: 10%
    left: -1rem
    width: 4rem
    height: 4rem
  img
    @include mobile
      position: absolute
.popup-copy
  position: fixed
  top: 2rem
  right: 2rem
  width: auto
  z-index: -1
  @include mobile
    position: fixed !important
    top: 0
    left: 0
    z-index: -1
.nav
  padding-top: 4rem
.calculator-token
  width: 58rem
  margin: 0
  @include mobile
    margin-left: 1rem

h3
  margin: 2rem 0 .5rem 0
  font-family: 'Comfortaa'
  font-style: normal
  font-weight: 700
  font-size: 1.25rem
  line-height: 120%
  text-transform: uppercase
  color: #E1E9F6
  @include mobile
    font-family: 'Open Sans'
    margin-left: 1rem
    font-weight: 700
    font-size: 2rem
    text-transform: unset
    letter-spacing: -0.01em

.mobile-footer
  margin-top: 6.5rem
.footer
  width: 100%
</style>