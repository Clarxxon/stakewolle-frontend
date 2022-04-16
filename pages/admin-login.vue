<template>
  <div class="admin-login">
    <img class="admin-logo" src="logo" alt="">
    <p class="admin-login__title">Авторизация</p>
    <div class="admin-login__form">
      <form action="">
        <input placeholder="Логин" type="text">
        <input placeholder="Пароль" type="password">
        <div class="admin-login__form-btn-container">
          <button>Вход</button>
        </div>
      </form>
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
  data(){
    return{
      logo
    }
  }
}
</script>

<style scoped>

</style>