<script setup>
import ToggleBox from "@/components/ToggleBox.vue";
import ScrolBox from "./ScrolBox.vue";
import { useHomePageStore } from "@/stores/HomePageStore";
import { reactive, computed } from "vue";
import { vedioToggle } from "@/toggle/toggle";

const homePageStore = useHomePageStore();

//methods
const loading = (value) => {
  state.loading = value;
};

// data
const state = reactive({
  base_url: import.meta.env.VITE_TMDB_BASE_URL,
  size: "original",
  loading: true,
  index: 0
    ,
  });
  
  const vedioPosterHover = (index) => {
    state.index = index;
    console.log(homePageStore.vedio.data[index]);
  };

// fetch movies
homePageStore.fetchPopular("tv");
</script>

<template>
  <div class="container">
    <ToggleBox
      title="Latest Trailers"
      type="vedio"
      :toggle="vedioToggle"
      @loading="loading"
    />
    <ScrolBox>
      <div
        :class="`vedioCard ${!state.loading && 'hide'}`"
        v-for="(vedio, index) in homePageStore.vedio.data"
        :key="vedio.name"
      >
        <div class="imageCard">
          <img
            class="vedioPoster"
            :src="`${state.base_url}${state.size}${vedio.backdrop_path}`"
            alt="movie poster"
            @mouseover="vedioPosterHover(index)"
          />
          <img
            class="tree_points"
            src="../assets/TreePoints.svg"
            alt="TreePoinst"
          />
          <ion-icon name="play" class="play_btn"></ion-icon>
        </div>
        <h2 class="movieTitle">{{ vedio.name }}</h2>
        <p>{{ vedio.first_air_date }}</p>
      </div>
    </ScrolBox>
    <div
      class="backGround"
      :style="`background-image: linear-gradient(to right, rgba(var(--tmdbDarkBlue), 0.75) 0%, rgba(var(--tmdbDarkBlue), 0.75) 100%), url(${state.base_url}${state.size}${homePageStore.vedio.data[state.index]?.backdrop_path})`"
    ></div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
}
.container:after {
  position: absolute;
  top: 0;
  right: 0;
  content: "";
  width: 6rem;
  height: 100%;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    #fff 100%
  );
  z-index: 10;
}
.vedioCard {
  height: 17.8rem;
  min-width: 31.8rem;
  border-radius: 1rem;
  padding: 0.4rem;
  text-align: center;
  color: #fff;
  font-size: 1.25rem;
  letter-spacing: 0.8px;
}
.hide {
  visibility: hidden;
  opacity: 0;
  transition: linear 0.6s, opacity 0.6s linear;
}
.imageCard {
  position: relative;
  transition: all 0.3s;
  margin-bottom: 1rem;
}
.imageCard:hover {
  transform: scale(1.05);
}
.imageCard:hover .play_btn {
  width: 7rem;
  height: 7rem;
}
.vedioPoster {
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.tree_points,
.play_btn {
  cursor: pointer;
  position: absolute;
}
.tree_points {
  top: 0.8rem;
  right: 0.8rem;
  width: 2.6rem;
  height: 2.6rem;
  opacity: 0.6;
}
.play_btn {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 5.8rem;
  height: 5.8rem;
  color: #fff;
  transition: all 0.3s;
}
.backGround {
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
