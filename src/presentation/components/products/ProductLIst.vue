<script setup>
import ProductCard from '@/components/products/ProductCard.vue'
import { products } from '@/domains/catalog/data/products.js'
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
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
}
</style>
