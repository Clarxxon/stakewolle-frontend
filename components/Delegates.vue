<template>
  <div class="delegates">
    <img class="delegates-img-white" :src="white" alt="">
    <img class="delegates-img-net" :src="net" alt="">
    <img class="delegates-img-b" :src="b" alt="">
    <div class="delegates-block">
      <div class="delegates-block__item">
        <p class="delegates-block__item-title">$ {{ this.delegates[0] }}</p>
        <p class="delegates-block__item-subtitle">{{ $t('delegates._1') }}</p>
      </div>
      <div class="delegates-block__item">
        <p class="delegates-block__item-title">$ {{ this.delegates[2] }}</p>
        <p class="delegates-block__item-subtitle">{{ $t('delegates._2') }}</p>
      </div>
      <div class="delegates-block__item">
        <p class="delegates-block__item-title">{{ this.delegates[1] }}</p>
        <p class="delegates-block__item-subtitle">{{ $t('delegates._3') }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import white from '../static/validators/white.svg'
import net from '../static/redesign/Group 891 (8).svg'
//import net from '../static/del.svg'
import b from '../static/redesign/Round violet (1).svg'

export default {
  name: "Delegates",
  data(){
    return{
      white, net, b
    }
  },
  props: {
    delegates: []
  }
}
</script>

<style scoped>

</style>
