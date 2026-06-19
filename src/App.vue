<script setup>
import AppHeader from './components/layout/AppHeader.vue';
</script>

<template>
  <header>
    <AppHeader />
  </header>
  <RouterView />
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
</template>

<style scoped></style>
