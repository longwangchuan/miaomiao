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
        path: '/home/city',
        name: 'city',
        component:() =>import('../views/Home/City.vue')
      },
      {
        path: 'hot',
        name: 'hot',
        component:() =>import('../views/Home/Hot.vue')
      },
      {
        path: '/home/cinema',
        name: 'cinema',
        component:() =>import('../views/Home/Cinema.vue')
      },
      {
        path: '/home/search',
        name: 'search',
        component:() =>import('../views/Home/Search.vue')
      },
      {
        path: '/home',
        redirect:'/home/hot'
      }
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
    redirect:'/home'
  }
]

const router = new VueRouter({
  routes
})

export default router
