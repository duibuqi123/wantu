<template>
  <div id="app">
    <!-- <Home></Home>
    <List></List> -->
    <router-view/>
  </div>
</template>

<script>
import Home from './components/pages/Home/Home'   //引用组件
// import LL from './components/pages/List/LBanner' //引用组件
import LBanner from './components/pages/List/LBanner' //引用组件


export default {
  name: 'App',
  components:{Home,LBanner},//挂载组件
  data(){
    return{
      name:'woshoi'
    }
  }
}
</script>

<style >
@import url('/styles/base.css');
#app {

}
</style>
