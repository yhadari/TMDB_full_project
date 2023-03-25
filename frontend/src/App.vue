<script setup>
import TheNavebar from './components/TheNavebar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <TheNavebar />
  <Suspense>
    <!-- component with nested async dependencies -->
    <template #default>
      <RouterView />
    </template>

    <!-- loading state via #fallback slot -->
    <template #fallback>Loading ...</template>
  </Suspense>
  <Footer />
</template>

<style scoped>
</style>
