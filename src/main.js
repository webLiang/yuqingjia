// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import layout from './layout'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
//import LyTab from 'ly-tab';
Vue.use(MintUI)
//Vue.use(LyTab);  
Vue.prototype.$http=axios;
Vue.prototype.HOST ='/api'
//Vue.use(ElementUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: x => x(layout)
  
  // components: { App },
  // template: '<App/>'
})
