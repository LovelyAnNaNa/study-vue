import Vue from 'vue'
import App from './App.vue'

//构建项目时是否提示构建信息
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
