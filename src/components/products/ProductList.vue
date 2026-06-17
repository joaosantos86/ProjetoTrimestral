<script setup>
import ProductCard from './ProductCard.vue';
import { allProducts } from '@/data/products'
</script>
<template>
  <ProductCard
  v-for="product in allProducts.slice(0, 1)"
  :key="product.id"
  :name="product.titulo"
  />
</template>
