import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PersSelecView from '../views/PersSelecView.vue'
import AllRicksView from '../views/AllRicksView.vue'
import ReviveCharactersView from'../views/ReviveCharactersView.vue'
import EditCharacterView from '../views/EditCharacterView.vue'

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
  },
  {  
    path:'/revive',
    name:'revive',
    component: ReviveCharactersView
  },
  {  
    path:'/editCharacter',
    name:'editCharacter',
    component: EditCharacterView
  },
  {
    path:'/character/:id',
    name: 'character',
    component:()=>
      import("../views/PersonajeView.vue"),
      children:[
        {
          path: "datos",
          name: "datos",
          component: ()=> 
          import("../components/PersonajeMasDatos.vue")
        }
      ]
  }
]

const router = createRouter({
  history:createWebHistory(process.env.BASE_URL),
  routes
})

export default router
