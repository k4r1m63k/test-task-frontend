<script setup>
import Header from '@/components/Header.vue'

</script>
<template>
  <Header />
  <main class="main">
    <RouterView />
  </main>
</template>

<style lang="scss">
.main {
  width: 100%;
  min-height: 100vh;
}
</style>