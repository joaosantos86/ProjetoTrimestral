<script setup>
import CartItem from './components/cart/CartItem.vue';
const obj =   {
    id: 1,
    name: "Fone Bluetooth IPX8",
    description: "Resistente à água com 8h de bateria",
    price: 89.00,
    image: "",
    rating: 4.5,
    reviews: 121,
    category: "Sem Fio",
    brand: "JBL"
  }
</script>

<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <CartItem :item="obj" />
</template>

<style scoped></style>
