import Vue from 'vue'
import App from './App.vue';
import router from '../router/index'
import './scss/common.scss';
import VueCompositionApi from '@vue/composition-api';
import VueLazyload from 'vue-lazyload'

Vue.use(VueCompositionApi);
Vue.use(VueLazyload)

import './scss/common.scss';
import './scss/theme.scss';
import './scss/reset.css';

// import  {genRouter}  from 'web-toolkit/src/case-main/router';

// export const router = genRouter(routes);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App), 
}).$mount('#app')
