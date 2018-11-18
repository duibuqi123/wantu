import Vue from 'vue'
import Router from 'vue-router'
import Des from '../components/pages/Des/Des'
import Login from '../components/pages/Login/Login'
import Reg from '../components/pages/Reg/Reg'
import My from '../components/pages/My/My'
import Xq from '../components/pages/Xq/Xq'
import Xfooter from '../components/commons/Xfooter'
import Banner from '../components/commons/Banner'
import Header from '../components/commons/Header'
import Home from '../components/pages/Home/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',//匹配的hash地址
        redirect:'/Des'//重定向
      },
    {
      path: '/Des',//匹配的hash地址
      name: 'Des',//路由的名字
      component: Des// 该路由所引用的组件
    },
    {
      path: '/Login',//匹配的hash地址
      name: 'Login',//路由的名字
      component: Login// 该路由所引用的组件
    },
    {
      path: '/Reg',//匹配的hash地址
      name: 'Reg',//路由的名字
      component: Reg// 该路由所引用的组件
    },
    {
      path: '/My',//匹配的hash地址
      name: 'My',//路由的名字
      component: My// 该路由所引用的组件
    },
    {
      path: '/Xq',//匹配的hash地址
      name: 'Xq',//路由的名字
      component: Xq// 该路由所引用的组件
    },
    {
      path: '/Banner',//匹配的hash地址
      name: 'Banner',//路由的名字
      component: Banner// 该路由所引用的组件
    },
    {
      path: '/Header',//匹配的hash地址
      name: 'Header',//路由的名字
      component: Header// 该路由所引用的组件
    },
    {
      path: '/Home',//匹配的hash地址
      name: 'Home',//路由的名字
      component: Home// 该路由所引用的组件
    }
  ]
})
/*
下载路由插件  vue init  webpack  
通过<router-view> 开辟一片空间
检测hash变化 地址栏#后边那一块
匹配相应的组件信息  进行挂载显示

要在vue的实例中挂载router

a 标签可以实现跳转  一般我们用内置的router-link
<router-link  tag='li' class="fa fa-bars"  to="/movie">
to 跳转hash
tag 渲染元素

*/  