<script setup>
//props
const props = defineProps({
  type: {
    type: String,
    required: true,
  },
});

//emits
const emits = defineEmits(["scroll"]);

//methods
const handleScroll = (event) => {
  if (event.target.scrollLeft <= 100) emits("scroll", true);
  else emits("scroll", false);
};
</script>

<template>
  <div class="Cards">
    <div :class="`scrollBox ${props.type}`" @scroll="handleScroll">
      <slot />
    </div>
  </div>
</template>
<style scoped>
.Cards {
  height: 85%;
  width: 100%;
  display: flex;
  position: relative;
  z-index: 10;
}
.scrollBox {
  display: flex;
  gap: 1.8rem;
  overflow-x: scroll;
  overflow-y: hidden;
  color: #000;
  padding: 0 4rem;
}
.scrollBox::-webkit-scrollbar {
  height: 0.8rem;
}
.scrollBox::-webkit-scrollbar-thumb {
  background-color: #ccc;
  border-radius: 0.5rem;
}
</style>
