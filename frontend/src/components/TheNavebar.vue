<script setup>
import NavItemLeft from "./NavItemLeft.vue";
import NavItemRight from "./NavItemRight.vue";
</script>

<template>
  <nav>
    <div class="content">
      <div class="box">
        <NavItemLeft />
        <NavItemRight />
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  margin-bottom: var(--navHeight);
}
.content {
  width: 100%;
  position: fixed;
  z-index: 1000;
  background-color: rgba(var(--tmdbDarkBlue), 1);
  display: flex;
  justify-content: center;
}
.box {
  width: 100%;
  max-width: 130rem;
  display: flex;
  justify-content: space-between;
  padding: 0 4rem;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.6px;
}
</style>
