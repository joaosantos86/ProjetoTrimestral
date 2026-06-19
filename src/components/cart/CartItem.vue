<script setup>


const props = defineProps({
  item:Object,
})
</script>

<template>

  <div>
  <img :src="props.item.image" :alt="props.item.name">
  <div>
  <div>
  <p>{{ props.item.name }}</p>
  <span>{{ props.item.description }}</span>
  </div>
  <div>
  <span>{{ props.item.price }}</span>
  <span>quantidade: {{props.item.quantity}}</span>
  </div>
  </div>
  </div>


</template>

<style scoped>

</style>
