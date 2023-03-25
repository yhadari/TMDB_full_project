<script setup>
import { useHomePageStore } from "@/stores/HomePageStore";
const homePageStore = useHomePageStore();
</script>
<template>
  <div>
    <div class="overlay">
      <img src="../assets/wrap2022_bg.jpg" alt="movies background" />
      <div class="title">
        <div class="wrap_text">
          <h1>THAT'S A</h1>
          <h1>WRAP 2022</h1>
          <hr class="wrap_border" />
        </div>
        <p>The best (and worst) from 2022.</p>
        <div class="check_it_box">
          <router-link class="link" to="/2022">
            <div class="check_it_btn">check it out &rarr;</div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import "@/styles/HomePage.css";
.overlay::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  opacity: 0.4;
  background: rgb(49, 1, 78);
  background: linear-gradient(
    90deg,
    rgba(49, 1, 78, 1) 52%,
    rgba(56, 0, 89, 1) 100%
  );
}
</style>
