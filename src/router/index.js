import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PersSelecView from '../views/PersSelecView.vue'
import AllRicksView from '../views/AllRicksView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/seleccionados',
    name: 'seleccionados',
    component: PersSelecView,
    },
  {  
    path:'/ricks',
    name:'Ricks',
    component: AllRicksView
  }
]

const router = createRouter({
  history:createWebHistory(process.env.BASE_URL),
  routes
})

export default router
