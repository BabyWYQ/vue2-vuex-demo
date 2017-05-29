<template>
  <div id="app">
    <header>
      <ul>
        <!-- <li><a href="/" @click.prevent="">首页</a></li> -->
        <!-- <li><a href="/user" @click.stop="">用户管理</a></li> -->
        <router-link tag="li" active-class="active" to="/">首页</router-link>
        <router-link tag="li" active-class="active" to="/user">用户管理</router-link>
      </ul>
    </header>
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
// import '@/assets/scss/app.scss'
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
header{
  width: 100%;
}
ul,li{
  list-style-type: none;
}

li {
  width: 100px;
  margin-right: 20px;
  float: left;
}
li.active{
  color: red;
  background: yellow;
}
</style>
