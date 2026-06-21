<template>
  <div class="summary">
    <div class="summary__content">
      <div>
        <p class="label">Total da Compra</p>

        <h2>
          {{ formatPrice(total) }}
        </h2>
      </div>

      <button class="checkout-btn">
        <CreditCard :size="18" />
        Finalizar Compra
      </button>
    </div>
  </div>
</template>

<script setup>
import { CreditCard } from 'lucide-vue-next'

defineProps({
  total: {
    type: Number,
    required: true
  }
})

const formatPrice = (value) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)
}
</script>

<style scoped>
.summary {
  margin-top: 2rem;

  background: linear-gradient(
    135deg,
    #1e293b,
    #0f172a
  );

  padding: 2rem;

  border-radius: 24px;

  color: white;

  box-shadow:
    0 10px 30px rgba(15,23,42,.2);
}

.summary__content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.label {
  color: #cbd5e1;
  margin: 0;
}

h2 {
  margin-top: .5rem;
  font-size: 2.2rem;
}

.checkout-btn {
  display: flex;
  align-items: center;
  gap: .8rem;

  border: none;

  background: white;
  color: #0f172a;

  padding: 1rem 2rem;

  border-radius: 14px;

  font-weight: 700;

  cursor: pointer;

  transition: .25s;
}

.checkout-btn:hover {
  transform: scale(1.05);
}
</style>
