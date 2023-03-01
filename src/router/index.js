import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
        { path: '/contact', name: 'Contact', component: ContactView },
    // ici les autre routes
  ]
})

export default router

new kursor ({
    type:5,
    removeDefaultCursor:true,
    color :"#FFFFFF"
})
