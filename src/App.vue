<script setup>
import { RouterView } from 'vue-router'
import AppHeader from './components/layout/AppHeader.vue'
</script>

<template>
  <AppHeader />
  <main>
    <RouterView />
  </main>
</template>
<style>
*{
  padding: 0;
  margin: 0;
}
</style>
