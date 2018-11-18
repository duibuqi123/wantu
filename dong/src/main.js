// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
//请求拦截
Axios.interceptors.response.use(function (response){
	return response.data;
},function (error){
	return Promise.reject(error);
});
//Axios.interceptors.request.use(function (request){
//	return request.data;
//},function (error){
//	return Promise.reject(error);
//});

Vue.prototype.$axios=Axios;//挂载axios便于组件使用

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
	router,
  components: { App },
  template: '<App/>'
})
