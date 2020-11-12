<template>
  <h1>这是用户页,{{getUserId}},111111</h1>
</template>

<script>
export default {
  name: "User",
  computed: {
    getUserId(){
      //$route表示最后一个活跃的路由配置,UserId表示路由配置中 :变量名
      return this.$route.params.UserId
    }
  }
}
</script>

<style scoped>

</style>
