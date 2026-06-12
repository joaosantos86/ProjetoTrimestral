<script setup>
import { RouterLink } from "vue-router";
import { ShoppingCart, Search } from '@lucide/vue';
</script>
<template>
  <header>
    <img src="/logo.png" alt="logo">
    <div class="links">
    <router-link to="/">Inicio</router-link>
    <router-link to="/Produtos">Produtos</router-link>
    </div>
    <div class="icones">
    <router-link to="/Carrinho"><ShoppingCart /></router-link>
    <Search />
    </div>
  </header>
</template>
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

header {
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  font-family: 'Poppins';
  font-weight: light;
  align-items: center;
}
img {
  width: 7rem;
  object-fit: contain;
}

a {
  text-decoration: none;
  color: black;
  font-size: 1.2rem;
}

.router-link-active {
  font-weight: bold;
}
.links {
  display: flex;
  gap: 2rem;
}

.icones {
  display: flex;
  gap: 2rem;
}

</style>
