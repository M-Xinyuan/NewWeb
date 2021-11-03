import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './lang/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import ElementLocale from 'element-ui/lib/locale';
Vue.use(ElementUI);
ElementLocale.i18n((key, value) => i18n.t(key, value))

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App),

}).$mount('#app')
