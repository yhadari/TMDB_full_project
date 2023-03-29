<script setup>
import NavItemLeft from "./NavItemLeft.vue";
import NavItemRight from "./NavItemRight.vue";

let previousScrollPosition = 0;
window.addEventListener("scroll", () => {
  const content = document.querySelector(".content");
  if (window.scrollY > previousScrollPosition) {
    previousScrollPosition = window.scrollY;
    content.classList.add("hide");
    content.classList.remove("show");
  } else {
    previousScrollPosition = window.scrollY;
    content.classList.add("show");
    content.classList.remove("hide");
  }
});
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
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
}
.hide {
  animation-name: hideNav;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}
.show {
  animation-name: showNav;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}
@keyframes hideNav {
  0% {
    left: 0;
    top: 0;
  }
  100% {
    left: 0;
    top: -6.4rem;
  }
}
@keyframes showNav {
  0% {
    left: 0;
    top: -6.4rem;
  }
  100% {
    left: 0;
    top: 0;
  }
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
