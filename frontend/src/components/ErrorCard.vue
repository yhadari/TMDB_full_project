<script setup>
const props = defineProps({
  errorTitle: {
    type: String,
    required: true
  },
  errorList: {
    type: Array,
    required: true
  }
})
</script>
<template>
  <div class="errorCard">
    <div class="errorTitle">
      <p>&#33; {{ props.errorTitle }}</p>
    </div>
    <div class="errorDetails">
      <ul>
        <li v-for="error in props.errorList.filter((list) => list.error)" :key="error.message">
          {{ error.message }}
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.errorCard {
  width: 100%;
  border-radius: var(--imageBorderRadius);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  overflow: hidden;
}

.errorTitle {
  display: flex;
  align-items: center;
  padding-left: 2rem;
  color: #fff;
  background-color: rgba(var(--accountRed), 1);
  height: 5.6rem;
  font-size: 1.8rem;
  font-weight: 600;
}

.errorDetails {
  padding: 1.6rem;
  padding-left: 4rem;
}

.errorDetails li:not(:last-child) {
  margin-bottom: 0.8rem;
}
</style>