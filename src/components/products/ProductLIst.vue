<script setup>
import ProductCard from '@/components/products/ProductCard.vue'
import { products } from '@/data/products.js'
</script>
<template>
  <section class="products">
    <ProductCard v-for="product in products" :key="product.id" :product="product" />
  </section>
</template>
<style scoped>
.products {
  padding: 2vw 2vw 2vw 4vw;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}
</style>
