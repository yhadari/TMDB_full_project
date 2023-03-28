<script setup>
import { useHomePageStore } from "@/stores/HomePageStore";
import { reactive, computed } from "vue";
import ToggleBox from "@/components/ToggleBox.vue";
import ScrolBox from "./ScrolBox.vue";
import { trendingToggle, popularToggle, topRatedToggle } from "@/toggle/toggle";
const homePageStore = useHomePageStore();

//props
const props = defineProps({
  type: {
    type: String,
    required: true,
  },
});

// data
const state = reactive({
  base_url: import.meta.env.VITE_TMDB_BASE_URL,
  size: "original",
  loading: true,
});

//methods
const loading = (value) => {
  state.loading = value;
};

const moviePage = (movie) => {
  let title = movie.title || movie.name;
  title = title.replaceAll(" ", "-").replace(":", "").toLowerCase();
  return `/${movie.media_type}/${movie.id}-${title}`;
};

//computed
const title = computed(() => {
  if (props.type === "trending") return "Trending";
  if (props.type === "popular") return "What's Popular";
  if (props.type === "top_rated") return "Free To Watch";
  return props.type;
});
const toggle = computed(() => {
  if (props.type === "trending") return trendingToggle;
  if (props.type === "popular") return popularToggle;
  if (props.type === "top_rated") return topRatedToggle;
  return trendingToggle;
});
const movies = computed(() => {
  if (props.type === "trending") return homePageStore.trending;
  if (props.type === "popular") return homePageStore.popular;
  if (props.type === "top_rated") return homePageStore.topRated;
  return homePageStore.trending;
});

// fetch movies
if (props.type === "trending") homePageStore.fetchTrending("all", "day");
else if (props.type === "popular") homePageStore.fetchPopular("movie");
else if (props.type === "top_rated") homePageStore.fetchTopRated("movie");
</script>

<template>
  <div class="container">
    <ToggleBox
      :title="title"
      :type="type"
      :toggle="toggle.value"
      @loading="loading"
    />
    <ScrolBox>
      <div
        :class="`movieCard ${!state.loading && 'hide'}`"
        v-for="movie in movies.data"
        :key="movie.id"
      >
        <div class="loading" v-if="movies.loading">
          <img src="../assets/Rolling.svg" alt="loading" />
        </div>
        <router-link :to="moviePage(movie)">
          <img
            class="moviePoster"
            :src="`${state.base_url}${state.size}${movie.poster_path}`"
            alt="movie poster"
            v-if="!movies.loading"
          />
        </router-link>
        <img
          class="tree_points"
          src="../assets/TreePoints.svg"
          alt="TreePoinst"
          v-if="!movies.loading"
        />
        <router-link class="link" :to="moviePage(movie)">
          <h2 v-if="!movies.loading" class="movieTitle">
            {{ movie.title || movie.name }}
          </h2>
        </router-link>
        <p v-if="!movies.loading" class="releaseDate">
          {{ movie.release_date || movie.first_air_date }}
        </p>
      </div>
    </ScrolBox>
  </div>
</template>

<style scoped>
.container::after {
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
.movieCard {
  position: relative;
  height: 22.5rem;
  min-width: 15rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 1rem;
}
.hide {
  visibility: hidden;
  opacity: 0;
  transition: linear 0.6s, opacity 0.6s linear;
}
.moviePoster {
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  cursor: pointer;
}
.tree_points {
  cursor: pointer;
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
  width: 2.6rem;
  height: 2.6rem;
  opacity: 0.6;
}
.movieTitle {
  margin-top: 2rem;
  letter-spacing: 0.6px;
  cursor: pointer;
}
.movieTitle:hover {
  color: rgba(var(--tmdbLightBlue), 1);
}
.releaseDate {
  font-size: 1.6rem;
  color: #555;
  letter-spacing: 0.8px;
}
.loading {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.loading img {
  width: 8rem;
  opacity: 0.5;
}
.link {
  text-decoration: none;
  color: inherit;
}
</style>
