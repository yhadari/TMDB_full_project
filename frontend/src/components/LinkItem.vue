<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  links: {
    type: Array,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  textColor: {
    type: String,
    default: '#fff'
  }
})
</script>
<template>
  <div class="link" :style="{ color: textColor }">
    <div v-if="props.type === 'left'">
      <div>{{ props.name }}</div>
      <div class="dropdown-content">
        <RouterLink
          v-for="link in props.links"
          :key="link.name"
          :to="link.to"
          class="nested_link"
          >{{ link.name }}</RouterLink
        >
      </div>
    </div>
    <div v-else>
      <RouterLink class="link" :to="props.links[0].to">{{ props.name }}</RouterLink>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 16rem;
  height: 6rem;
}

.link {
  cursor: pointer;
  text-decoration: none;
  padding: 1rem;
  color: #fff;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 22rem;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 10;
  font-size: 1.4rem;
  margin-top: 1rem;
  border-radius: 0.6rem;
  padding: 0.6rem 0;
  font-weight: 500;
}

.nested_link {
  color: #222;
  padding: 0.6rem 2rem;
  text-decoration: none;
  display: block;
}

.nested_link:hover {
  background-color: #ededed;
}

.link:hover .dropdown-content {
  display: block;
}
</style>
