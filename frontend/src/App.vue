<script setup>
import TheNavebar from "./components/TheNavebar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <TheNavebar />
  <Suspense>
    <template #default>
      <RouterView />
    </template>
    <template #fallback></template>
  </Suspense>
  <Footer />
</template>

<style scoped></style>
