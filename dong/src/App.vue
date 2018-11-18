<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Des from './components/pages/Des/Des'
import Login from './components/pages/Login/Login'
import Reg from './components/pages/Reg/Reg'
import My from './components/pages/My/My'
import Xq from './components/pages/Xq/Xq'
import Xfooter from './components/commons/Xfooter'
import Banner from './components/commons/Banner'
import Header from './components/commons/Header'
import Home from './components/pages/Home/Home'

export default {
  name: 'App',
  conponents:{
  	Des,Login,My,Reg,Xq,Xfooter,Banner,Header,Home
  },
  data(){
  	return{
  		test: "header"
  	}
  }
}
</script>

<style lang="less" scoped="scoped">
@import url("./styles/main.less");
#app {

}
</style>
