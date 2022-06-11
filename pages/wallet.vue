<template>
  <div class="tg-container">
    <div v-if="isLoading" class="loading">Loading...</div>
    <div>
      <div class="telegram-nets">
        <div class="tg-nets-item" v-for="net in nets" :key="net.coin" @click="activeNet(net)">
          <div class="img-wrapper">
            <div class="mask" v-show="net.id !== activeNetId"/>
            <img :src="net.img" alt="img"/>
          </div>
          <span class="coin-name">{{net.title}}</span>
        </div>
      </div>
      <div class="control-btns">
        <button class="metrics" @click="getNetData">Metricks</button>
        <button class="gov">Governance</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Wallet',
  data: () => ({
    telegram: null,
    activeNetId: null,
    choosenNet: null,
    isLoading: true,
    nets: [],
  }),
  mounted() {
    // if (process.browser){
    //   this.telegram = window.Telegram?.WebApp
    // }
    this.telegram = window.Telegram.WebApp
    console.log(this.telegram)
    try {
      this.fetchNets().then(nets => this.nets = nets)
      this.isLoading = false
    }catch(e) {
      this.isLoading = false
    }
    this.changeMainButton()
  },
  methods: {
    async fetchNets() {
      const nets = await this.$host.get('/api/net-card')
      return nets.data
    },
    async fetchMoreData() {
      const data = await this.$host.get(`/api/net-card/more/${this.choosenNet.id}`)
      return data.data
    },
    activeNet(net) {
      this.activeNetId = net.id;
      this.choosenNet = net;
    },
    async getNetData() {
      if (this.choosenNet) {
        //TODO
      }
    },
    async getFormatResult() {
      let {
        rank, market_cap, price, circulating, annual_comission, inflation, bonded_ratio, token,
        price_change_percentage_24h, price_change_7d, price_change_14d
      } = this.choosenNet
      market_cap = (market_cap / 1000000).toFixed(3)
      circulating = (circulating / 1000000).toFixed(3)
      bonded_ratio = bonded_ratio.toFixed(2)
      const IBC = await this.fetchMoreData()
      const result =
      `
          Gecko rank:  *${rank}*
Market Capitalization:  *${market_cap ? market_cap : null}M*
Price:  *${price ? `$${price} per ${token}` : null}*
Circulating:  *${circulating ? `${circulating}M $${token}` : null}*
Staking APR:  *${annual_comission ? annual_comission + '%': null}*
inflation:  *${inflation ? inflation + '%': null}*
Bonded ratio: *${bonded_ratio}*
token:  *${token}*
IBS transfers: *${IBC.ibc_transfers}*
IBS volume: *${IBC.ibc_volume}*
transactions: *${IBC.transactions}*
Price dynamics:
*24H -> ${price_change_percentage_24h ? price_change_percentage_24h.toFixed(2) + '%' : null}, 7D -> ${price_change_7d ? price_change_7d.toFixed(2) + '%' : null} 14D -> ${price_change_14d ? price_change_14d.toFixed(2) + '%' : null}*
      `
      return result
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
        //const queryId = this.telegram.initDataUnsafe.query_id
        //await this.telegram.answerWebAppQuery(queryId, {type: 'article', id: 'networks_id', title: '', input_message_content: formatResult})
        const { ibc_transfers, ibc_volume, transactions } = await this.fetchMoreData()
        await this.telegram.sendData(JSON.stringify({...this.choosenNet, ibc_transfers, ibc_volume, transactions}))
      }
    }
  }
}
</script>

<style>

@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400&display=swap");

.loading {
  font-size: 20px;
  color: #fff;
  text-align: center;
  margin-top: 70px;
}
.telegram-nets {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  max-width: 750px;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -ms-flex-pack: distribute;
      justify-content: space-around;
  padding-top: 45px;
  margin: 0 auto;
}

.telegram-nets img {
  width: 70px;
  height: 70px;
}

.coin-name {
  display: block;
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 32px;
  line-height: 39px;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  text-align: center;
  letter-spacing: -0.04em;
  color: #000000;
}

.tg-nets-item {
  text-align: center;
}

.mask {
  position: absolute;
  width: 100%;
  height: 71px;
  background: black;
  opacity: 0.5;
  border-radius: 50%;
}

.img-wrapper {
  position: relative;
  width: 70px;
  margin: 0 auto;
}

.control-btns {
  padding: 14px 0;
  background: #F0F0F0;
  border-bottom: 1px solid #D3D3D3;
  position: fixed;
  bottom: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: distribute;
      justify-content: space-around;
  width: 100%;
}

.control-btns .metrics {
  background: #28C37F;
  color: #fff;
}

.control-btns .gov {
  background: #FC8130;
}

.control-btns button {
  cursor: pointer;
  max-width: 220px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 15px;
}
</style>