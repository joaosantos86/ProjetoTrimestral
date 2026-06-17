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
      <router-link to="/Carrinho">
        <ShoppingCart />
      </router-link>
      <Search />
    </div>
  </header>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  font-family: 'Poppins';
  background: white;
  box-shadow: 0 2px 20px rgba(0,0,0,0.05);
  animation: slideDown .6s ease;
}

img {
  width: 7rem;
  object-fit: contain;
  transition: transform .3s ease;
  cursor: pointer;
}

img:hover {
  transform: scale(1.05);
}

.links {
  display: flex;
  gap: 2rem;
}

.links a {
  text-decoration: none;
  color: black;
  font-size: 1.1rem;
  position: relative;
  transition: color .3s ease;
}

.links a::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 50%;
  width: 0;
  height: 2px;
  background: #ff7b00;
  transition: all .3s ease;
  transform: translateX(-50%);
}

.links a:hover::after,
.router-link-active::after {
  width: 100%;
}

.links a:hover {
  color: #ff7b00;
}

.router-link-active {
  color: #ff7b00;
}

.icones {
  display: flex;
  gap: 1.5rem;
}

.icones svg {
  cursor: pointer;
  transition: all .25s ease;
}

.icones svg:hover {
  transform: translateY(-3px) scale(1.15);
  color: #ff7b00;
}
</style>
