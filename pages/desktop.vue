<template>
  <div>
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
    <div id="header" class="header">
      <Navigation v-bind:navigation="navigation"></Navigation>
      <TargetBlock></TargetBlock>
    </div>
    <AboutUs></AboutUs>
    <Delegates v-bind:delegates="delegates"></Delegates>
    <Nets :preload="preload" />
    <SoonValidators v-bind:netsToValidators="netsToValidators"></SoonValidators>
    <div class="dark-bg">
      <Calculator id="d-calc"></Calculator>
      <Benefits></Benefits>
      <Stages></Stages>
      <LinkUs></LinkUs>
      <Footer v-bind:navigation="navigation"></Footer>
      <a href="https://akash.network" target="_blank" class="powered-by-akash-wrapper">
        <img class="powered-by-akash" :src="powered" alt="">
      </a>
    </div>
  </div>
</template>

<script>
import powered from '../static/powered-by-akash.webp'

export default {
  name: "desktop",
  props: {
    netsToValidators: [],
    delegates: [],
    preload: { type: Function, required: true }
  },
  data: () => ({
    powered,
    navigation: {
      about: true,
      profit: true,
      guide: true,
      contacts: true,
      blog: true,
      stake: true
    }
  }),
}
</script>