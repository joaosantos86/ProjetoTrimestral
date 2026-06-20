<template>
  <div class="cart-page">


    <div class="header">
      <ShoppingCart :size="28" />
      <h1>Seu Carrinho</h1>
    </div>


    <div v-if="cart.length === 0" class="empty">
      <ShoppingBag :size="60" />
      <h2>Seu carrinho está vazio</h2>
      <p>Explore produtos incríveis e adicione ao carrinho</p>
    </div>

    <div v-else class="layout">

      <div class="items">

        <CartItem
          v-for="item in cart"
          :key="item.id"
          :item="item"
          @remove="removeItem"
          @increase="increase"
          @decrease="decrease"
        />

      </div>


      <div class="summary">

        <h2>Resumo do pedido</h2>

        <div class="row">
          <span>Subtotal</span>
          <span>{{ formataPreco(total) }}</span>
        </div>

        <div class="row">
          <span>Frete</span>
          <span>Grátis</span>
        </div>

        <div class="row">
          <span>Desconto</span>
          <span>- R$ 0,00</span>
        </div>

        <div class="divider"></div>

        <div class="total">
          <span>Total</span>
          <strong>{{ formataPreco(total) }}</strong>
        </div>


        <input class="coupon" placeholder="Cupom de desconto" />


        <button class="checkout">
          Finalizar compra
        </button>

        <button class="continue">
          Continuar comprando
        </button>

      </div>

    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import {
  ShoppingCart,
  ShoppingBag
} from '@lucide/vue'

import CartItem from '@/components/cart/CartItem.vue'

import {
  cart,
  removeItemFromCart,
  getCartTotalPrice,
} from "@/utils/cartUtils"

import { formataPreco } from '@/utils/currencyUtils.js'

const total = computed(() => getCartTotalPrice())

const removeItem = (id) => removeItemFromCart(id)

const increase = (item) => {
  item.quantity++
}

const decrease = (item) => {
  if (item.quantity > 1) item.quantity--
}

</script>

<style scoped>
.cart-page {
  max-width: 1200px;
  margin: auto;
  padding: 2rem;
  font-family: Inter, sans-serif;
}


.header {
  display: flex;
  align-items: center;
  gap: .6rem;
  margin-bottom: 2rem;
}


.empty {
  text-align: center;
  padding: 5rem 2rem;
  opacity: .7;
}


.layout {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
}


.summary {
  background: rgba(255,255,255,0.7);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,.08);
}

.row {
  display: flex;
  justify-content: space-between;
  margin: .5rem 0;
}

.divider {
  height: 1px;
  background: #eee;
  margin: 1rem 0;
}

.total {
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.coupon {
  width: 100%;
  padding: .8rem;
  margin: 1rem 0;
  border-radius: 12px;
  border: 1px solid #ddd;
}


.checkout {
  width: 100%;
  padding: 1rem;
  background: black;
  color: white;
  border-radius: 12px;
  margin-bottom: .5rem;
  transition: .2s;
}

.checkout:hover {
  transform: scale(1.02);
}

.continue {
  width: 100%;
  padding: 1rem;
  background: transparent;
  border: 1px solid #ddd;
  border-radius: 12px;
}
</style>
