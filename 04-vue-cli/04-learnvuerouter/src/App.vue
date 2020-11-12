<template>
  <div id="app">
    <!--  to表示跳转的路径,tag指定最后渲染成什么组件(默认a标签),replace表示直接替换路径(不可跳页)   -->
<!--    <router-link tag="button" to="/home" replace>首页</router-link>-->
    <!-- 替换默认的router-link-active样式   -->
<!--    <router-link active-class="active" to="/about">详情页</router-link>-->
    <button @click="homeClick">首页</button>
    <button @click="aboutClick">详情页</button>
    <router-link :to="'/user/' + userId">用户页</router-link>
    <!-- 用于展示router-link 路由所指向的组件 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: "123"
    }
  },
  methods: {
    homeClick(){
      // this.$router.push("/home");
      this.$router.replace("/home");
    },
    aboutClick(){
      this.$router.replace("/about");
    }
  }
}
</script>

<style>
  .router-link-active {
    color: red;
  }
</style>
