<template>
  <div id="stages" class="stages">
    <div class="stages-line">
      <div class="stages-line-item stages-big-item">
        <div class="stages-line-item-bg-face">
          <img class="stages-line-item-bg-face-year" :src="year_big" alt="">
          <img class="stages-line-item-bg-face-img" id="face-star" :src="starYear" alt="">
          <img class="stages-line-item-bg-face-img" id="face-violet" :src="roundViolet" alt="">
          <img class="stages-line-item-bg-face-img" id="face-white" :src="roundWhiteYear" alt="">
          <div class="stages-line-item-bg-face-quatro-bg">
            <p>IV</p>
            <p>{{ $t('stages.quatro') }}</p>
          </div>
          <p class="stages-line-item-bg-face-text">{{ $t('stages._01') }}</p>
        </div>
        <div class="stages-line-item-bg-background"></div>
      </div>
      <div class="stages-line-item">
        <div class="stages-line-item-bg-face">
          <img class="stages-line-item-bg-face-year" :src="year_2021" alt="">
          <div class="stages-line-item-bg-face-quatro-bg">
            <p>I</p>
            <p>{{ $t('stages.quatro') }}</p>
          </div>
          <p class="stages-line-item-bg-face-text">{{ $t('stages._02') }}</p>
        </div>
        <div class="stages-line-item-bg-background"></div>
      </div>
      <div class="stages-line-item">
        <div class="stages-line-item-bg-face">
          <img class="stages-line-item-bg-face-year" :src="year_2021" alt="">
          <div class="stages-line-item-bg-face-quatro-bg">
            <p>II</p>
            <p>{{ $t('stages.quatro') }}</p>
          </div>
          <p class="stages-line-item-bg-face-text">{{ $t('stages._03') }}</p>
        </div>
        <div class="stages-line-item-bg-background"></div>
      </div>
      <div class="stages-line-item">
        <div class="stages-line-item-bg-face">
          <img class="stages-line-item-bg-face-year" :src="year_2021" alt="">
          <div class="stages-line-item-bg-face-quatro-bg">
            <p>III</p>
            <p>{{ $t('stages.quatro') }}</p>
          </div>
          <p class="stages-line-item-bg-face-text">{{ $t('stages._04') }}</p>
        </div>
        <div class="stages-line-item-bg-background"></div>
      </div>
      <div class="stages-line-item">
        <div class="stages-line-item-bg-face">
          <img class="stages-line-item-bg-face-year" :src="year_2021" alt="">
          <div class="stages-line-item-bg-face-quatro-bg">
            <p>IV</p>
            <p>{{ $t('stages.quatro') }}</p>
          </div>
          <p class="stages-line-item-bg-face-text">{{ $t('stages._05') }}</p>
        </div>
        <div class="stages-line-item-bg-background"></div>
      </div>

    </div>
    <div class="stages-line">
      <div class="stages-line-item">
        <div class="stages-line-item-bg-face">
          <img class="stages-line-item-bg-face-year" :src="year_2022" alt="">
          <div class="stages-line-item-bg-face-quatro-bg">
            <p>I</p>
            <p>{{ $t('stages.quatro') }}</p>
          </div>
          <p class="stages-line-item-bg-face-text">{{ $t('stages._06') }}</p>
        </div>
        <div class="stages-line-item-bg-background"></div>
      </div>
      <div class="stages-line-item">
        <div class="stages-line-item-bg-face">
          <img class="stages-line-item-bg-face-year" :src="year_2022" alt="">
          <div class="stages-line-item-bg-face-quatro-bg">
            <p>II</p>
            <p>{{ $t('stages.quatro') }}</p>
          </div>
          <p class="stages-line-item-bg-face-text">{{ $t('stages._07') }}</p>
        </div>
        <div class="stages-line-item-bg-background"></div>
      </div>
      <div class="stages-line-item">
        <div class="stages-line-item-bg-face">
          <img class="stages-line-item-bg-face-year" :src="year_2022" alt="">
          <div class="stages-line-item-bg-face-quatro-bg">
            <p>III</p>
            <p>{{ $t('stages.quatro') }}</p>
          </div>
          <p class="stages-line-item-bg-face-text">{{ $t('stages._08') }}</p>
        </div>
        <div class="stages-line-item-bg-background"></div>
      </div>
      <div class="stages-line-item">
        <div class="stages-line-item-bg-face">
          <img class="stages-line-item-bg-face-year" :src="year_2022" alt="">
          <div class="stages-line-item-bg-face-quatro-bg">
            <p>IV</p>
            <p>{{ $t('stages.quatro') }}</p>
          </div>
          <p class="stages-line-item-bg-face-text">{{ $t('stages._09') }}</p>
        </div>
        <div class="stages-line-item-bg-background"></div>
      </div>
    </div>
  </div>
</template>

<script>
import year_2021 from '../static/redesign/Mask Group (1).svg'
import year_2022 from '../static/redesign/Round violet (5).svg'
import year_big from '../static/redesign/Mask Group.svg'
import starYear from '../static/stages/star.svg'
import roundViolet from '../static/stages/round-violet.svg'
import roundWhiteYear from '../static/stages/round-white.svg'



export default {
  name: "Stages",
  data(){
    return{
      year_2021, year_2022, year_big, starYear,
      roundViolet, roundWhiteYear,
      stages_first: [],
      stages_second: [],
    }
  },
}
</script>

<style scoped>

</style>
