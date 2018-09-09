// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import VueImageLoader from '@kevindesousa/vue-image-loader'

import App from './App'
import router from './router'
import moment from 'moment'

Vue.use(VueImageLoader)
Vue.use(BootstrapVue)

Vue.config.productionTip = false

Vue.filter('timeNumber', function (value) {
  if (value) {
    return moment(String.value).format('hhmm')
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
