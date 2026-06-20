<script setup>
import { formataPreco } from '@/utils/currencyUtils.js'
import { Trash2, Package, Tag } from '@lucide/vue'

defineProps({
  item: {
    type: Object,
    required: true
  }
})

defineEmits(['remove', 'increase', 'decrease'])
</script>

<template>
  <div class="cart-item">
    <div class="product-image">
      <img :src="item.image || 'https://placehold.co/150x150?text=Fone'" :alt="item.name" />
    </div>

    <div class="product-info">
      <h3>{{ item.name }}</h3>

      <p class="description">
        {{ item.description }}
      </p>

      <div class="product-meta">
        <div class="meta-chip">
          <Package :size="14" />
          {{ item.category }}
        </div>

        <div class="meta-chip">
          <Tag :size="14" />
          {{ item.brand }}
        </div>
      </div>
    </div>

    <div class="product-side">
      <div class="quantity-controls">
        <button type="button" @click="$emit('decrease', item.id)">-</button>
        <span class="quantity">{{ item.quantity }}</span>
        <button type="button" @click="$emit('increase', item.id)">+</button>
      </div>

      <span class="price">
        {{ formataPreco(item.price * item.quantity) }}
      </span>

      <button class="remove-btn" @click="$emit('remove', item.id)">
        <Trash2 :size="18" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.cart-item {
  display: flex;
  align-items: center;
  gap: 1.5rem;

  padding: 1.5rem;
  margin-bottom: 1.2rem;

  background: white;
  border-radius: 24px;

  border: 1px solid #e2e8f0;

  box-shadow:
    0 4px 20px rgba(15, 23, 42, .06);

  transition: all .25s ease;
}

.cart-item:hover {
  transform: translateY(-4px);

  box-shadow:
    0 12px 30px rgba(15, 23, 42, .12);
}

.product-image {
  width: 120px;
  height: 120px;

  border-radius: 20px;

  overflow: hidden;

  background: #f8fafc;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-info {
  flex: 1;
}

.product-info h3 {
  margin: 0;
  font-size: 1.2rem;
  color: #0f172a;
}

.description {
  margin: .7rem 0;
  color: #64748b;
}

.product-meta {
  display: flex;
  gap: .7rem;
}

.meta-chip {
  display: flex;
  align-items: center;
  gap: .4rem;

  padding: .4rem .8rem;

  border-radius: 999px;

  background: #eff6ff;
  color: #2563eb;

  font-size: .8rem;
  font-weight: 600;
}

.product-side {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: .8rem;
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: .4rem;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 999px;
  padding: .2rem .4rem;
}

.quantity-controls button {
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 50%;
  background: #1f2937;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  display: grid;
  place-items: center;
  transition: background .2s ease;
}

.quantity-controls button:hover {
  background: #111827;
}

.quantity {
  color: #64748b;
  font-weight: 600;
}

.price {
  font-size: 1.3rem;
  font-weight: 800;
  color: #0f172a;
}

.remove-btn {
  width: 42px;
  height: 42px;

  border: none;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #fee2e2;
  color: #dc2626;

  cursor: pointer;

  transition: .2s;
}

.remove-btn:hover {
  background: #dc2626;
  color: white;
}
</style>
