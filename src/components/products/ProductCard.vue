<script setup>
import { addItemToCart } from "@/utils/cartUtils"
import { formataPreco } from "@/utils/currencyUtils"
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

</script>

<template>
  <article class="card">
    <div class="image-container">
      <img :src="product.image" :alt="product.name">
    </div>
    <div class="content">
      <h3>{{ product.name }}</h3>
      <p class="description">
        {{ product.description }}
      </p>
      <div class="rating">
        {{ product.rating }}
        <span>({{ product.reviews }} avaliações)</span>
      </div>
      <div class="footer">
        <span class="price">
         {{ formataPreco(product.price)}}
        </span>
        <button @click="addItemToCart">
          Adicionar
        </button>
      </div>
    </div>
  </article>
</template>

<style scoped>
.card {
  width: 280px;
  border: 1px solid #e5e5e5;
  border-radius: 12px;
  overflow: hidden;
  background: white;
  transition: .2s;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, .08);
}

.image-container {
  height: 250px;
  padding: 1rem;
  background: #f7f7f7;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content {
  padding: 1rem;
}

h3 {
  margin: 0;
  font-size: 1rem;
  line-height: 1.4;
}

.description {
  margin: .5rem 0;
  color: #666;
  font-size: .9rem;
}

.rating {
  font-size: .85rem;
  color: #666;
}

.rating span {
  color: #999;
}

.footer {
  margin-top: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.price {
  font-size: 1.2rem;
  font-weight: 700;
}

button {
  border: none;
  cursor: pointer;

  padding: .7rem 1rem;
  border-radius: 8px;

  background: #111;
  color: white;
  font-weight: 600;
}

button:hover {
  opacity: .9;
}
</style>
