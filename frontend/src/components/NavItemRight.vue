<script setup>
import LinkItem from "./LinkItem.vue";
import { reactive } from "vue";
window.addEventListener("click", (e) => {
  if (e.target.className !== "plus_btn") state.plus_btn = false;
});
const state = reactive({
  plus_btn: false,
});

const showPlusBtn = () => {
  state.plus_btn = !state.plus_btn;
};
</script>

<template>
  <div class="right">
    <div>
      <div @click="showPlusBtn" class="plus_btn">+</div>
      <div :class="`plus_btn_content ${state.plus_btn && 'plusDropdown'}`">
        <p>Can't find a movie or TV show? Login to create it.</p>
      </div>
    </div>
    <div class="border">EN</div>
    <LinkItem
      name="Login"
      :links="[{ name: 'Connexion', to: '/login' }]"
      type="right"
    />
    <LinkItem
      name="Join TMDB"
      :links="[{ name: 'Rejoindre TMDB', to: '/signup' }]"
      type="right"
    />
  </div>
</template>

<style scoped>
.right {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.8rem;
}
.plus_btn {
  cursor: pointer;
  text-decoration: none;
  color: #fff;
  padding: 1rem;
}
.plus_btn_content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 20rem;
  z-index: 10;
  border-radius: 0.6rem;
  transform: translateX(-50%);
  color: #111;
  width: 26rem;
  font-size: 1.6rem;
  padding: 1.4rem;
  font-weight: 500;
  line-height: 2.4rem;
  margin-top: -1rem;
}
.plusDropdown {
  display: block;
}
.plus_btn {
  font-size: 3rem;
  font-weight: 700;
  position: relative;
}
.border {
  border: 1px solid #fff;
  border-radius: 0.2rem;
  padding: 0.4rem;
  color: #fff;
}
</style>
