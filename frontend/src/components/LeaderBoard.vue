<script setup>
import { LeaderBoard } from "../api/leaderBoard";
import LeaderBoaordItem from "../components/LeaderBoardItem.vue";
</script>

<template>
  <section>
    <header>
      <h1>Leaderboard</h1>
      <div class="edits">
        <div class="all">
          <span></span>
          <p>All Time Edits</p>
        </div>
        <div class="week">
          <span></span>
          <p>Edits This Week</p>
        </div>
      </div>
    </header>
    <main>
      <LeaderBoaordItem v-for="item in LeaderBoard" :leaderBoard="item" />
    </main>
  </section>
</template>
<style scoped>
section {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 130rem;
  height: 50rem;
  padding: 3rem;
  letter-spacing: 0.6px;
  font-weight: bold;
}
header {
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 2.8rem;
  height: 10%;
}
header h1 {
  font-weight: 600;
}
main {
  height: 90%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
}
.edits span {
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
}
.all,
.week {
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #222;
  font-weight: 500;
}

.all span {
  background: linear-gradient(
    90deg,
    rgba(var(--tmdbLighterGreen, 1)),
    rgba(var(--tmdbLightGreen, 1))
  );
}
.week span {
  background: linear-gradient(
    90deg,
    rgba(var(--tmdbLogoOrange, 1)),
    rgba(var(--tmdbLogoRed, 1))
  );
}
</style>
