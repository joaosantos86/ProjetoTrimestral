<script setup>
import { Search, ShoppingCart } from '@lucide/vue';

</script>
<template>
  <nav>
    <ul>
      <li>
        <h1>Vexo</h1>
      </li>
    </ul>
    <ul class="links">
      <li>
        <router-link to="/">
          Home
        </router-link>
      </li>
      <li>
        <router-link to="/catalog">
          Catalogo
        </router-link>
      </li>
    </ul>
    <div class="acoes">
      <div class="search">
        <input type="search">
        <Search />
      </div>
      <router-link to="/cart">
        <ShoppingCart />
      </router-link>
    </div>

  </nav>
</template>
<style scoped>
nav {
  position: relative;
  height: 70px;
  padding: 0 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  border-bottom: 1px solid #e5e5e5;
}

ul {
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.links {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 2rem;
}

a {
  text-decoration: none;
  color: #222;
  font-size: 0.95rem;
  font-weight: 500;
  transition: 0.2s;
}

a:hover {
  color: #2563eb;
}

.logo {
  font-size: 24px;
}

.search {
  width: 350px;
  height: 42px;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #f5f5f5;
  border-radius: 12px;
}

.search input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 0.9rem;
}

.search svg {
  width: 18px;
  height: 18px;
  color: #666;
}

.acoes {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.acoes a {
  display: flex;
  align-items: center;
  justify-content: center;
}

.acoes svg {
  width: 22px;
  height: 22px;
}

.router-link-active {
  color: #2563eb;
  font-weight: 600;
}
</style>
