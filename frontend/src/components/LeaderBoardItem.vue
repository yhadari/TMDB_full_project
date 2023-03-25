<script setup>
import { reactive, computed } from "vue";
const props = defineProps({
  leaderBoard: {
    type: Object,
    requried: true,
  },
});

const allWidth = computed(() => {
  if (props.leaderBoard.all > 500000) return props.leaderBoard.all / 16000;
  if (props.leaderBoard.all > 250000) return props.leaderBoard.all / 14000;
  if (props.leaderBoard.all > 100000) return props.leaderBoard.all / 12000;
  else return props.leaderBoard.all / 5000;
});
const weekWidth = computed(() => {
  if (props.leaderBoard.week > 20000) return props.leaderBoard.week / 640;
  if (props.leaderBoard.week > 10000) return props.leaderBoard.week / 560;
  if (props.leaderBoard.week > 4000) return props.leaderBoard.week / 480;
  else return props.leaderBoard.week / 120;
});

const state = reactive({
  allWidth,
  weekWidth,
});
</script>

<template>
  <div class="box">
    <img :src="props.leaderBoard.avatar" alt="userAvatar" />
    <div class="gauge_box">
      <h2>{{ props.leaderBoard.name }}</h2>
      <div class="gauge">
        <span
          class="all_gauge"
          :style="`max-width: ${state.allWidth}rem`"
        ></span>
        <p>{{ props.leaderBoard.all }}</p>
      </div>
      <div class="gauge">
        <span
          class="week_gauge"
          :style="`max-width: ${state.weekWidth}rem`"
        ></span>
        <p>{{ props.leaderBoard.week }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.box {
  height: 6rem;
  width: inherit;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.2rem;
  padding: 0 1rem;
}
.box img {
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
}
.gauge_box {
  width: 100%;
}
.gauge {
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 2rem;
}
.gauge span {
  height: 0.8rem;
  border-radius: 1rem;
  width: 100%;
}
.all_gauge {
  background: linear-gradient(
    90deg,
    rgba(var(--tmdbLighterGreen, 1)),
    rgba(var(--tmdbLightGreen, 1))
  );
}
.week_gauge {
  background: linear-gradient(
    90deg,
    rgba(var(--tmdbLogoOrange, 1)),
    rgba(var(--tmdbLogoRed, 1))
  );
}
</style>
