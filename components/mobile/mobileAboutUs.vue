<template>
  <div id="m-about" class="mobile-about-us">
    <div class="mobile-about-us__bg"></div>
    <div class="mobile-content">
      <div class="mobile-about-us__info">
        <p class="mobile-about-us__info-title">{{ $t('navigation.about_us') }}</p>
        <p class="mobile-about-us__info-subtitle" v-html="$t('about_us_description')"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mobileAboutUs"
}
</script>

<style scoped>

</style>