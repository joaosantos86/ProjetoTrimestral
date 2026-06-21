import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/presentation/views/HomeView.vue'
import CatalogView from '@/presentation/views/CatalogView.vue'
import CartView from '@/presentation/views/CartView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: CatalogView,
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView,
    },
  ],
})

export default router
