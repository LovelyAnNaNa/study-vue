<template>
  <div>
    <h2 class="title">{{ message }}</h2>
    <button @click="btnClick()">点击在控制台打印</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      message: "这是一段文字"
    }
  },
  methods: {
    btnClick() {
      console.log("ddd");
    }
  }
}
</script>

<style scoped>
.title {
  color: green;
}
</style>