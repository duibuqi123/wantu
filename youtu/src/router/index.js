import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/pages/Home/Home';//引用组件
import List from '../components/pages/List/LBanner';

Vue.use(Router)    //使用路由

export default new Router({
  routes: [
    {
      path: '/',//匹配hash地址
      name: 'Home',//路由的名字
      component:Home    //该组件应用的组件名字
 
    },
    {
      path: '/List',
      name: 'List',//路由的名字
      component:List   //该组件应用的组件名字
 
    }
  ]
})
