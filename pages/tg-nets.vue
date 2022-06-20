<template>
  <div class="tg-container">
    <div v-if="isLoading" class="loading">Loading...</div>
    <div>
      <div class="control-btns">
        <span
          :class="{'choosen-category': networkChoosen}"
          class="network"
          @click="switchCategory('networkChoosen')"
        >Networks</span>
        <span
          :class="{'choosen-category': govChoosen}"
          class="gov"
          @click="switchCategory"
        >Governance</span>
      </div>
      <div class="telegram-nets">
        <div class="tg-nets-item" v-for="net in nets" :key="net.attributes.coin" @click="activeNet(net)">
          <div class="img-wrapper">
            <div class="mask" v-show="net.id !== activeNetId"/>
            <img src="../static/nets/Cosmos.webp" alt="img"/>
          </div>
          <span class="coin-name">{{net.attributes.title}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TGNETS',
  data: () => ({
    telegram: null,
    activeNetId: null,
    choosenNet: null,
    isLoading: true,
    nets: [],
    networkChoosen: true,
    govChoosen: false,

  }),
  mounted() {
    // if (process.browser){
    //   this.telegram = window.Telegram?.WebApp
    // }
    this.telegram = window.Telegram.WebApp
    try {
      this.fetchNets().then(nets => this.nets = nets)
      this.isLoading = false
    }catch(e) {
      this.isLoading = false
    }
    this.changeMainButton()
  },
  methods: {
    switchCategory(category) {
      if (category === 'networkChoosen') {
        this.networkChoosen = true;
        this.govChoosen = false
      }else {
        this.networkChoosen = false;
        this.govChoosen = true
      }
    },
    async fetchNets() {
      const res = await fetch('https://stakewolle-admin.herokuapp.com/api/nets-plural?populate=*')
      const nets = await res.json()
      return nets.data
    },
    async fetchMoreData() {
      const data = await this.$host.get(`/api/net-card/more/${this.choosenNet.id}`)
      return data.data
    },
    activeNet(net) {
      this.activeNetId = net.id;
      this.choosenNet = net.attributes.coin;
    },
    async getNetData() {
      if (this.choosenNet) {
        //TODO
      }
    },
    changeMainButton() {
      this.telegram.expand();
      this.telegram.MainButton.enable();
      this.telegram.MainButton.show();
      this.telegram.MainButton.text = 'GET DATA'
      this.telegram.MainButton.onClick(() => this.clickMainButton())
    },
    async clickMainButton() {
      if (this.choosenNet) {
        const query_id = this.telegram.initDataUnsafe.query_id
        const result = JSON.stringify({
          type: 'article', id: '2', title: 'Nets',
          input_message_content: { message_text: `${this.choosenNet}`, parse_mode: "Markdown" },
        })
        fetch(`https://api.telegram.org/bot5305280749:AAFR1BYVHR-wfd54tpwLoa3tNWlKQ_Kahqs/answerWebAppQuery?web_app_query_id=${query_id}&result=${result}`)
      }
    }
  }
}
</script>