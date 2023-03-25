<script setup>
import LinkItem from './LinkItem.vue'
</script>

<template>
  <div class="left">
    <RouterLink to="/">
      <img
        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
        alt="tmdb-logo"
      />
    </RouterLink>
    <LinkItem
      name="Movies"
      :links="[
        { name: 'Populaires', to: '/movie' },
        { name: 'Du moment', to: '/movie/now-playing' },
        { name: 'À venir', to: '/movie/upcoming' },
        { name: 'Les mieux notés', to: '/movie/top-rated' }
      ]"
      type="left"
    />
    <LinkItem
      name="TV Shows"
      :links="[
        { name: 'Populaires', to: '/tv' },
        { name: 'Diffusées aujourd’hui', to: '/tv/airing-today' },
        { name: 'En cours de diffusion', to: '/tv/on-the-air' },
        { name: 'Les mieux notées', to: '/tv/top-rated' }
      ]"
      type="left"
    />
    <LinkItem name="People" :links="[{ name: 'Populaires', to: '/person' }]" type="left" />
    <LinkItem
      name="More"
      :links="[
        { name: 'Conversations', to: '/discuss' },
        { name: 'Top contributions', to: '/leaderboard' },
        { name: 'Assistance', to: '/talk' },
        { name: 'API', to: '/api' }
      ]"
      type="left"
    />
  </div>
</template>

<style scoped>
img {
  width: 16rem;
  height: 6rem;
}
.left {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.8rem;
}
</style>
