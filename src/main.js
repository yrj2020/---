import Vue from 'vue'
import App from './App.vue'
import animate from 'animate.css'
import router from '../src/router/router.js'
import './assets/css/reset.css'
import less from 'less'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';





Vue.config.productionTip = false
Vue.use(router)
Vue.use(less)
Vue.use(ElementUI);


new Vue({
  render: h => h(App),
  router

}).$mount('#app')
Vue.use(animate)