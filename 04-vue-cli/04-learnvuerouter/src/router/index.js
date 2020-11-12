import Vue from 'vue'
//导入路由
import Router from 'vue-router'

// import Home from "../components/Home"
// import About from "../components/About"
// import User from "../components/User"

const Home = () => import("../components/Home")
const HomeNews = () => import("../components/HomeNews")
const HomeMessages = () => import("../components/HomeMessages")
const About = () => import("../components/About")
const User = () => import("../components/User")
//通过Vue.user(插件),安装插件
Vue.use(Router)

//
export default new Router({
  //配置路由和组件之间的应用关系
  routes: [
    {
      path: '/',
      // component: Home
      //路径重定向到/home路径上
      redirect: "/home"
    },
    {
      path: '/home',
      component: Home,
      //子路由path前面不需要加上 '/'
      children:[
        {
          path: "homeNews",
          component: HomeNews
        },
        {
          path: "homeMessages",
          component: HomeMessages
        }
      ]
    },
    {
      path: "/user/:UserId",
      component: User
    },
    {
      path: '/about',
      component: About
    }
  ],
  //去除路径中的 #(hash模式跳页),使用history跳页
  mode: "history",
  // linkActiveClass: "active"替换默认的活跃演示
})
