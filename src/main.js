import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import bus from 'common/js/bus'

import 'common/less/custom.less'
import 'common/stylus/index.styl'

Vue.use(bus)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
