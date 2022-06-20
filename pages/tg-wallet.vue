<template>
  <div class="wallet-container">
    <div v-if="notWalletAddress" class='empty-wallet-block'>
      <img src="../static/wallet/empty-wallet.svg" />
    </div>
    <div class="wallets" v-if="!notWalletAddress" >
      <div class="wallet-item" v-for="item in wallets" >
        <div class="wallet-top">
          <img class="wallet-top-img" src="../static/nets/Cosmos.webp" alt="photo">
          <div class="coin-name">
            <span>{{item.coin}}</span>
            <div>{{item.address}}</div>
          </div>
        </div>
        <div class="top-right">
          <div class="globe-wrapper">
            <span>Site</span>
            <div class="globe"></div>
            <a href="#">Link</a>
          </div>
        </div>
        <div class="wallet-bottom">
          <div class="balance">
            <span>Balance</span>
            <div>{{item.balance}}</div>
          </div>
          <div class="delegations">
            <span>Delegations</span>
            <div>{{item.delegations}}</div>
          </div>
          <div class="rewards">
            <span>Rewards</span>
            <div>{{item.rewards}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TGWALLET',
  data: () => ({
    telegram: null,
    notWalletAddress: true,
    wallets: []
  }),
  async mounted() {
    this.telegram = window.Telegram.WebApp
    this.changeMainButton()
    await this.getWallet()
  },
  methods: {
    async getWallet() {
      const userId = this.telegram.initDataUnsafe.user?.id;
      try {
        const wallet = await fetch(`https://stakewolle-admin.herokuapp.com/api/tg-users?filters[telegram_id]=${userId}&populate=*`)
        const data = await wallet.json()
        const user = data.data[0]
        const wallets = user?.attributes.wallets.data
        this.handleWallets(wallets)
        if(!user){
          this.notWalletAddress = true
        }else {
          this.notWalletAddress = false
        }
      }catch(e){
        alert(JSON.stringify(e))
      }
    },
    async handleWallets(wallets) {
      let handleWallets = [];
      wallets.forEach( async wallet => {
        const url = wallet.attributes.ping_pub
        const address = wallet.attributes.address
        let balance = await this.getBalance(url, address)
        let delegations = await this.getDelegations(url, address)
        let rewards = await this.getRewards(url, address)

        balance = (balance?.result[0]?.amount / 1000000).toFixed(6);
        delegations = (delegations.delegation_responses[0]?.balance?.amount / 1000000).toFixed(6)
        rewards = (rewards.rewards[0]?.reward[0]?.amount / 1000000).toFixed(3)
        if (`${balance}`.length >= 6){
          balance = `${balance / 1000000}M`
        }
        if (`${delegations}`.length >= 6){
          delegations = `${delegations / 1000000}M`
        }
        if (`${rewards}`.length >= 6){
          rewards = `${rewards / 1000000}M`
        }
        await handleWallets.push({
          id: wallet.id,
          ...wallet.attributes,
          balance, delegations, rewards
        })
      })
      this.wallets = handleWallets
    },
    async getBalance(url, address) {
      const balance = await fetch(`${url}/bank/balances/${address}`).then(res => res.json()).then(data => data)
      return balance
    },
    async getDelegations(url, address) {
      const delegations = await fetch(`${url}/cosmos/staking/v1beta1/delegations/${address}`).then(res => res.json()).then(data => data)
      return delegations
    },
    async getRewards(url, address) {
      const rewards = await fetch(`${url}/cosmos/distribution/v1beta1/delegators/${address}/rewards`).then(res => res.json()).then(data => data)
      return rewards
    },
    changeMainButton() {
      this.telegram.expand();
      this.telegram.MainButton.enable();
      this.telegram.MainButton.show();
      this.telegram.MainButton.text = 'Add wallet address'
      this.telegram.MainButton.onClick(() => this.clickMainButton())
    },
    async clickMainButton() {
      const query_id = this.telegram.initDataUnsafe.query_id
      const result = JSON.stringify({
        type: 'article', id: '1', title: 'Wallet',
        input_message_content: { message_text: '/wallet', parse_mode: "Markdown" },
      })
      fetch(`https://api.telegram.org/bot5305280749:AAFR1BYVHR-wfd54tpwLoa3tNWlKQ_Kahqs/answerWebAppQuery?web_app_query_id=${query_id}&result=${result}`)
    }
  }
}
</script>

<style>
.wallet-item {
  border-top: 1px solid rgba(200, 200, 200, 0.96);
  border-bottom: 1px solid rgba(200, 200, 200, 0.96);
  padding-top: 20px;
  padding-bottom: 20px;
}
.wallet-top-img {
  width: 40px;
  height: 40px;
}
.wallet-top {
  display: flex;
  align-items: center;
}
.coin-name {
  margin-left: 10px;
}
.coin-name span {
  display: block;
  text-align: left;
  font-family: 'Ubuntu';
  font-weight: 500;
  font-size: 28px;
  line-height: 32px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.04em;
}
.coin-name div {
  font-size: 10px;
  border: 0.5px solid rgba(0, 0, 0, 0.4);
  border-radius: 100px;
  height: 21px;
  display: flex;
  padding: 0 10px;
  align-items: center;
}
.wallets {
  padding-left: 20px;
  padding-right: 20px;
}
.globe {
  width: 14px;
  height: 14px;
  background-image: url('../static/wallet/Globe.svg');
}
.globe-wrapper {
  display: flex;
  width: 110px;
  justify-content: space-between;
  align-items: center;
  border: 0.5px solid rgba(0, 0, 0, 0.4);
  border-radius: 100px;
  padding: 2px 10px;
}
.top-right {
  margin-top: 10px;
}
.wallet-bottom {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}
.wallet-bottom span {
  font-family: 'Ubuntu';
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: -0.04em;
  color: #000000;
}
.wallet-bottom div {
  margin-top: 8px;
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  letter-spacing: -0.04em;
  color: #000000;
}
.wallet-bottom div:nth-child(2) {
  font-size: 24px;
}
.wallet-bottom div:nth-child(3) {
  font-size: 24px;
}
</style>