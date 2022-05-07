<template>
  <div class="admin-login">
    <img class="admin-logo" src="logo" alt="">
    <p class="admin-login__title">Авторизация</p>
    <div class="admin-login__form">
      <div class="admin-form">
        <input placeholder="Логин" type="text" v-model="login">
        <input placeholder="Пароль" type="password" v-model="password">
        <div class="admin-login__form-btn-container" @click="handleLogin">
          <button>Вход</button>
        </div>
      </div>
    </div>
    <p class="admin-login__subtitle">Если вы не знаете логин и пароль, обратитесь к администратору</p>
  </div>
</template>

<script>
import '../static/fonts/font (1)/stylesheet.css'
import '../static/styles/admin.scss'
import logo from '../static/admin/logo.svg'
export default {
  name: "admin-login",
  data: () => ({
    login: '',
    password: ''
  }),

  methods: {

  }
}
</script>

<style scoped>

</style>