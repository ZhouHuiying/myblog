import Vue from 'vue'
import App from './App.vue';
import router from '../router/index'
// import './scss/common.scss';
import VueCompositionApi from '@vue/composition-api';
import VueLazyload from 'vue-lazyload'
import store from './store'

Vue.use(VueCompositionApi);
Vue.use(VueLazyload)

import './scss/common.scss';
import './scss/theme.scss';
import './scss/reset.css';
import elementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(elementUI)


Vue.config.productionTip = false

new Vue({
  router,
  store, //将store对象挂载到vue实例中
  render: h => h(App), 
}).$mount('#app')
