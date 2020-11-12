<template>
  <div id="Home">
    <h1>这是首页,111111</h1>
    <router-link to="/home/HomeNews">新闻</router-link>
    <router-link to="/home/HomeMessages">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>

</style>
