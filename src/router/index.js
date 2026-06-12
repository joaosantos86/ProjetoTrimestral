 import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartView from '../views/CartView.vue'
import ProdutosView from '../views/ProductsView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: HomeView,
    },
    {
      path: '/Produtos',
      name: 'Produtos',
      component: ProdutosView,
    },
    {
      path: '/Carrinho',
      name: 'Carrinho',
      component: CartView,
    },
  ],
})

export default router
