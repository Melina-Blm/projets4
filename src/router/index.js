import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import ContactView from '../views/ContactView.vue'
import AskMeView from '../views/AskMeView.vue'  
import MmiInternationalView from '../views/MmiInternationalView.vue'
import UnicycleView from '../views/UnicycleView.vue'
import TikTakView from '../views/TikTakView.vue'
import StrellaView from '../views/StrellaView.vue'
import NaknowledgeView from '../views/NaknowledgeView.vue'
import PageNotFoundView from '../views/PageNotFoundView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/contact', name: 'Contact', component: ContactView },
    { path: '/askme', name: 'AskMe', component: AskMeView },
    { path: '/mmiinternational', name: 'MmiInternational', component: MmiInternationalView },
    { path: '/unicycle', name: 'Unicycle', component: UnicycleView },
    { path: '/strella', name: 'Strella', component: StrellaView },
    { path: '/tiktak', name: 'TikTak', component: TikTakView },
    { path: '/naknowledge', name: 'Naknowledge', component: NaknowledgeView },
    { path: '/pagenotfound', alias: '/:catchAll(.*)', name: 'PageNotFound', component: PageNotFoundView},
 

    // ici les autre routes
  ],
  scrollBehavior (to, from, savedPosition) {

    return { left: 0, top: 0 }

  }
})


export default router

new kursor ({
    type:4,
    removeDefaultCursor:true,
    color :"#FFFFFF"
})


