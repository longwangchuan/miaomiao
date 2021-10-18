import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [
      {
        path: 'city',
        name: 'city',
        component:() =>import('../views/Home/City.vue')
      },
      {
        path: 'hot',
        name: 'hot',
        component:() =>import('../views/Home/Hot.vue')
      },
      {
        path: 'cinema',
        name: 'cinema',
        component:() =>import('../views/Home/Cinema.vue')
      },
      {
        path: 'search',
        name: 'search',
        component:() =>import('../views/Home/Search.vue')
      },
    ]
  },
  {
    path: '/cinema',
    name:'cinema',
    component: () => import('../views/Cinema.vue')
  },
  {
    path: '/host',
    name: 'host',
    component: () => import('../views/Host.vue')
  },
  {
    path: '*',
    redirect:'/home/hot'
  }
]

const router = new VueRouter({
  routes
})

export default router
