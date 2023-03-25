<script setup>
import { computed } from 'vue'
import { useHomePageStore } from '@/stores/HomePageStore'
const homePageStore = useHomePageStore()

// props
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  toggle: {
    type: Array,
    required: true
  },
  type: {
    type: String,
    required: true
  }
})

//emits
const emits = defineEmits(['loading'])

// methods
const clickedBtn = computed(() => {
  return props.type === 'vedio' ? 'vedio_btn' : 'movie_btn'
})

const ScrollToLeft = () => {
  let content = document.querySelectorAll('.scrollBox')
  content.forEach((userItem) => {
    userItem.scrollLeft = 0
  })
}
const handleClick = (toggle) => {
  if (toggle.clicked !== true) {
    setTimeout(() => {
      emits('loading', true)
      ScrollToLeft()
      if (props.type === 'trending') {
        homePageStore.fetchTrending(toggle.type.media_type, toggle.type.time_window)
      } else if (props.type === 'popular') {
        homePageStore.fetchPopular(toggle.type)
      } else if (props.type === 'top_rated') {
        homePageStore.fetchTopRated(toggle.type)
      }
    }, 800)
    props.toggle.forEach((ele) => {
      ele.clicked = false
    })
    toggle.clicked = true
    emits('loading', false)
  }
}
</script>

<template>
  <div class="title">
    <h1>{{ props.title }}</h1>
    <div
      :class="`btn_box ${props.type !== 'vedio' && 'border_movies'} ${
        props.type === 'vedio' && 'border_vedio'
      }`"
    >
      <div v-for="toggle in props.toggle" :key="toggle.name">
        <button @click="handleClick(toggle)" :class="`${toggle.clicked ? clickedBtn : ''}`">
          {{ toggle.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  height: 15%;
  color: inherit;
  display: flex;
  align-items: center;
  gap: 2.6rem;
  padding: 0 2.6rem;
  z-index: 10;
  min-width: 130rem;
}
.title h1 {
  font-weight: 600;
  font-size: 2.4rem;
}
.btn_box {
  display: flex;
  border-radius: 2rem;
}
.btn_box button {
  font-size: 1.5rem;
  padding: 0.6rem 2rem;
  border: none;
  background-color: transparent;
  color: inherit;
  box-shadow: none;
  font-weight: 500;
  letter-spacing: 0.4px;
  cursor: pointer;
  border-radius: 2rem;
}
.btn_box .movie_btn {
  background-color: rgba(var(--tmdbDarkBlue), 1);
  color: rgba(var(--tmdbLightGreen), 1);
  transition: all 1s;
}
.btn_box .vedio_btn {
  color: rgba(var(--tmdbDarkBlue), 1);
  background-color: rgba(var(--tmdbLightGreen), 1);
  background: linear-gradient(
    90deg,
    rgba(var(--tmdbLighterGreen), 1),
    rgba(var(--tmdbLightGreen), 1)
  );
  transition: all 1s;
}
.border_movies {
  border: 1px solid rgba(var(--tmdbDarkBlue), 1);
}
.border_vedio {
  border: 1px solid rgba(var(--tmdbLightGreen), 1);
}
</style>
