import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ViewView from '../views/ViewView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cats/my',
    name: 'view',
    component: ViewView
  },
  {
    path: '/cats/new',
    name: 'upload',
    component: () => import('../views/UploadView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
