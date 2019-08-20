import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/atbash',
      name: 'atbash',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Atbash.vue')
    },
    {
      path: '/caesar',
      name: 'caesar',
      component: () => import('./views/Caesar.vue')
    },
    {
      path: '/vigenere',
      name: 'vigenere',
      component: () => import('./views/Vigenere.vue')
    }

  ]
})
