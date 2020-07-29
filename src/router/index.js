import Vue from 'vue'
import VueRouter from 'vue-router'
import Search from '../views/Search.vue'
import Result from '../views/Result.vue'


Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Search',
      component: Search
    },
    {
      path: '/result/:username',
      name: 'Result',
      component: Result,
      props: true
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
