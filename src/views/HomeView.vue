<script setup>
import ProductList from '@/components/products/ProductList.vue';
import { ArrowRight } from '@lucide/vue';
</script>
<template>
  <section class="banner">
    <div class="content">
      <h1>Compre no melhor <span>petshop</span> de SFS.</h1>
      <p>Entre em contato pelo whatsapp ou no site e compre a melhor comida pro seu pet.</p>
      <button class="opcoes">Ver opções <ArrowRight class="arrow-icon"></ArrowRight></button>
    </div>
  </section>
  <section class="principais-produtos">
    <h1>Mais vendidos</h1>
    <div class="produtos">
      <ProductList />
    </div>

  </section>
</template>
<style scoped>
.banner {
  min-height: 70vh;
  display: flex;
  align-items: center;
  padding: 80px 10%;
  color: white;
  font-family: 'Poppins';
  background-image: url("/bannerimg.png");
  background-size: cover;
  background-position: center;
  margin-bottom: 5vw;
}

.content {
  max-width: 600px;
}

section.banner div.content h1 {
  font-size: 5rem;
  line-height: 1.1;
  margin-bottom: 20px;
  width: 50vw;
}
div.content h1 span {
  color: #00002a;
}

.content p {
  font-size: 1.5rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 32px;
}

.content button {
  border: none;
  background: #00002a;
  color: white;
  padding: 16px 32px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s ease-out;
}

.content button:hover {
  transform: translateX(4px);
}

.arrow-icon {
  transition: 0.3s ease-out;
}

.content button:hover .arrow-icon {
  transform: translateX(6px);
}

.opcoes {
  display: flex;
  align-items: center;
  gap: 10px;
}

.principais-produtos {
  font-family: 'Poppins';
  display: flex;
  justify-content: center;
}
</style>
