<script setup>
import BienvenueBox from "../components/BienvenueBox.vue";
import Wrap2022 from "../components/Wrap2022.vue";
import MoviesCard from "../components/MoviesCard.vue";
import VediosBox from "../components/VediosBox.vue";
import JoinBox from "../components/JoinBox.vue";
import LeaderBoard from "../components/LeaderBoard.vue";

</script>

<template>
  <div class="container">
    <BienvenueBox class="bienvenueBox" />
    <Wrap2022 class="wrap22" />
    <MoviesCard class="moviesCard trending" type="trending"/>
    <VediosBox class="vedioBox" />
    <MoviesCard class="moviesCard" type="popular" />
    <MoviesCard class="moviesCard" type="top_rated" />
    <JoinBox />
    <LeaderBoard />
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  max-width: 260rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  overflow: hidden;
}
.bienvenueBox,
.wrap22 {
  width: 100%;
  max-width: 130rem;
  height: 35.6rem;
  color: #fff;
  font-size: 3.2rem;
  letter-spacing: 0.8px;
  background-color: black;
}
.moviesCard,
.vedioBox {
  width: 100%;
  max-width: 130rem;
  position: relative;
  display: flex;
  flex-direction: column;
}
.moviesCard {
  height: 44.2rem;
  padding-top: 1.4rem;
  color: #000;
}
.vedioBox {
  height: 36.4rem;
  color: #fff;
  padding-top: 2rem;
}
.trending {
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.8)
    ),
    url("../assets/scrollBackground.png");
  background-size: cover;
  background-position: 0 50%;
}
@media screen and (max-width: 2600px) {
  .container {
    max-width: 130rem;
    grid-template-columns: 1fr;
  }
}
</style>
