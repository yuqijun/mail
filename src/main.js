// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/route.js'
import Element from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import  axios from 'axios'
import store from '../src/store/index.js'
axios.defaults.baseURL = 'http://localhost:8080/';
Vue.config.productionTip = false;
Vue.prototype.axios = axios;
Vue.use(Element);

/* eslint-disable no-new */




new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
