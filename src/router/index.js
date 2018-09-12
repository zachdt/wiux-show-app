import Vue from 'vue'
import Router from 'vue-router'
import Landing from '../components/landing.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/shows',
      name: 'Landing',
      component: Landing
    }
  ]
})
