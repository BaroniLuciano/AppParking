import Vue from 'vue'
import VueRouter from 'vue-router'

import inicio from '@/views/inicio.vue'
Vue.use(VueRouter)

const routes = [
  {
    path : '/',
    component : inicio
  }
]

export default new VueRouter({
  routes
})
