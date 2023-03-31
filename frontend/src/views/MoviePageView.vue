<script setup>
import router from "@/router/index";
import LinkItem from "@/components/LinkItem.vue";
import { useMoviePageStore } from "@/stores/MoviePageStore";
import { reactive } from "vue";
import ScrolBox from "../components/ScrolBox.vue";

const moviePageStore = useMoviePageStore();

// data
const state = reactive({
  base_url: import.meta.env.VITE_TMDB_BASE_URL,
  size: "original",
  backdrop_size: "original",
  poster_size: "original",
  director: "",
  character: "",
  writer: "",
  creator: "",
  runtime: {},
});

// Methods
const getId = () => {
  const param = router.currentRoute.value.params.param;
  const id = param.substring(0, param.indexOf("-"));
  return id;
};

const getType = () => {
  const type = router.currentRoute.value.params.type;
  return type;
};

const getCast = (crew) => {
  state.director = crew.find((ele) => ele.job === "Director")?.original_name;
  state.character = crew.find((ele) => ele.job === "Characters")?.original_name;
  state.writer = crew.find((ele) => ele.job === "Writer")?.name;
  state.creator = crew.find((ele) => ele.job === "Executive Producer")?.name;
};

const toHoursAndMinutes = (totalMinutes) => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  state.runtime = { hours, minutes };
};

// Fetch movie details
await moviePageStore.fetchMovieDetails(getId(), getType());

toHoursAndMinutes(moviePageStore.movieDetails.runtime);

await moviePageStore.fetchMovieCredits(getId(), getType());

getCast(moviePageStore.movieCredits.crew);
</script>
<template>
  <div class="container">
    <div class="loading" v-if="moviePageStore.loading === true">
      <img src="../assets/Rolling.svg" alt="loading" />
    </div>
    <div v-else>
      <div class="shortcut_bar">
        <LinkItem
          name="Overview &darr;"
          :links="[
            { name: 'Main', to: '/' },
            { name: 'Alternative Titels', to: '/' },
            { name: 'Cast & Crew', to: '/' },
            { name: 'Release Dates', to: '/' },
            { name: 'Translations', to: '/' },
            { name: 'Watch Now', to: '/' },
          ]"
          type="left"
          textColor="#000"
        />
        <LinkItem
          name="Media &darr;"
          :links="[
            { name: 'Backdrops', to: '/' },
            { name: 'Logos', to: '/' },
            { name: 'Posters', to: '/' },
            { name: 'Vedios', to: '/' },
          ]"
          type="left"
          textColor="#000"
        />
        <LinkItem
          name="Fandom &darr;"
          :links="[
            { name: 'Discussions', to: '/' },
            { name: 'Reviews', to: '/' },
          ]"
          type="left"
          textColor="#000"
        />
        <LinkItem
          name="Share &darr;"
          :links="[
            { name: 'Share Link', to: '/' },
            { name: 'Facebook', to: '/' },
            { name: 'Tweet', to: '/' },
          ]"
          type="left"
          textColor="#000"
        />
      </div>
      <div class="movie_box">
        <div class="movie_background">
          <img
            :src="`${state.base_url}${state.backdrop_size}${moviePageStore.movieDetails.backdrop_path}`"
            alt="movie_background"
          />
          <div class="gradient-overlay"></div>
        </div>
        <div class="movie_info">
          <img
            class="poster_img"
            :src="`${state.base_url}${state.poster_size}${moviePageStore.movieDetails.poster_path}`"
            alt="movie_backdrop"
          />
          <div class="movie_details">
            <div>
              <h1 class="m_title">
                {{
                  moviePageStore.movieDetails.title ||
                  moviePageStore.movieDetails.name
                }}
                <span class="m_date"
                  >({{
                    moviePageStore.movieDetails.release_date ||
                    moviePageStore.movieDetails.first_air_date
                  }})</span
                >
              </h1>
              <div class="m_genres">
                *
                <div
                  v-for="item in moviePageStore.movieDetails.genres"
                  :key="item"
                >
                  {{ item.name }},
                </div>
                *
                <p class="m_runtime" v-if="state.runtime.hours">
                  {{ state.runtime?.hours }}h {{ state.runtime.minutes }}m
                </p>
              </div>
            </div>
            <i class="m_tagline">{{ moviePageStore.movieDetails.tagline }}</i>
            <div class="m_overview">
              <h3>Overview</h3>
              <p>
                {{ moviePageStore.movieDetails.overview }}
              </p>
            </div>
            <div class="m_cast">
              <div v-if="state.character">
                <h3 class="m_character">{{ state.character }}</h3>
                <p>Characters</p>
              </div>
              <div v-if="state.director">
                <h3 class="m_director">{{ state.director }}</h3>
                <p>Director</p>
              </div>
              <div v-if="state.writer">
                <h3 class="m_writer">{{ state.writer }}</h3>
                <p>Writer</p>
              </div>
              <div v-if="state.creator">
                <h3 class="m_writer">{{ state.creator }}</h3>
                <p>Creator</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="movie_cast">
        <h2>Top Billed Cast</h2>
        <div class="movie_cast_scroll">
          <ScrolBox>
            <div
              :class="`movieCard`"
              v-for="cast in moviePageStore.movieCredits.cast"
              :key="cast.id"
            >
              <img
                class="moviePoster"
                :src="`${state.base_url}${state.size}${cast.profile_path}`"
                alt="movie poster"
              />
            </div>
          </ScrolBox>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - var(--footerHeight) - var(--navHeight));
}
.loading img {
  width: 6rem;
  opacity: 0.5;
}
.container {
  width: 100%;
  min-height: calc(100vh - var(--footerHeight) - var(--navHeight));
  letter-spacing: 0.6px;
  font-size: 1.5rem;
  font-weight: 500;
  padding-top: 0.6rem;
}
.shortcut_bar {
  width: inherit;
  display: flex;
  justify-content: center;
  gap: 3rem;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.6px;
}
.movie_box {
  width: 100%;
  height: 51rem;
  overflow: hidden;
  position: relative;
}
.movie_background {
  position: absolute;
  width: inherit;
  height: inherit;
  z-index: -1;
}
.movie_background img {
  width: inherit;
  height: inherit;
  object-fit: cover;
  object-position: 80% 20%;
}
.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(hsla(0, 0%, 10%, 1), hsla(0, 0%, 10%, 1));
  opacity: 0.8;
}
.movie_info {
  max-width: 130rem;
  display: flex;
  margin: 0 auto;
  padding: 2.8rem;
  gap: 3.6rem;
}
.poster_img {
  width: 30rem;
  border-radius: 1rem;
}
.movie_details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100rem;
  color: #fff;
  font-size: 1.6rem;
  gap: 2.6rem;
}
.m_title {
  font-size: 3.6rem;
}
.m_date {
  opacity: 0.8;
}
.m_genres {
  display: flex;
  gap: 0.6rem;
  margin-bottom: 4.8rem;
}
.m_tagline {
  opacity: 0.8;
}
.m_overview {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}
.m_overview p {
  color: #eee;
}
.m_cast {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
}
.m_cast p {
  color: #eee;
  font-size: 1.4rem;
}
.movie_cast {
  position: relative;
  max-width: 130rem;
  height: 44.2rem;
  padding-top: 1.4rem;
  color: #000;
  margin: 0 auto;
}
.movie_cast_scroll {
  display: flex;
}
.movieCard {
  position: relative;
  height: 22.5rem;
  min-width: 15rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 1rem;
}
.moviePoster {
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  cursor: pointer;
}
</style>
