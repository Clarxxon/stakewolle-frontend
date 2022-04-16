<template>
  <div class="mobile-delegates">
    <div class="mobile-delegates__item">
      <p class="mobile-delegates__item-title">$ {{ this.delegates[0] }}</p>
      <p class="mobile-delegates__item-subtitle">{{ $t('delegates._1') }}</p>
    </div>
    <div class="mobile-delegates__item">
      <p class="mobile-delegates__item-title">$ {{ this.delegates[2] }}</p>
      <p class="mobile-delegates__item-subtitle">{{ $t('delegates._2') }}</p>
    </div>
    <div class="mobile-delegates__item">
      <p class="mobile-delegates__item-title">{{ this.delegates[1] }}</p>
      <p class="mobile-delegates__item-subtitle">{{ $t('delegates._3') }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "mobileDelegates",
  props:{
    delegates: []
  }
}
</script>

<style scoped>

</style>