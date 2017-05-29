<template lang="html">
<div class="">
    <header>
      <ul>
        <router-link tag="li" active-class="active" to="/user/bad">bad</router-link>
        <router-link tag="li" active-class="active" to="/user/good">good</router-link>
      </ul>
    </header>
    <section>
      <router-view></router-view>
    </section>
</div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
