import { createRouter, createWebHistory } from 'vue-router'
import HomeDisplay from '../views/HomeDisplay.vue'

const routes = [
  {
    path: '/',
    name: 'HomeDisplay',
    component: HomeDisplay
  },
  {
    path: '/AboutDisplay',
    name: 'AboutDisplay',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutDisplay.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
