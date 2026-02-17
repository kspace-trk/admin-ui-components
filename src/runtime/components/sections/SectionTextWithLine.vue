<script setup lang="ts">
interface Props {
  text: string
}

defineProps<Props>()
</script>

<template>
  <div class="section-text-with-line">
    <span class="line-left" />
    <p>{{ text }}</p>
  </div>
</template>

<style scoped lang="scss">
@use '../../assets/scss/variables.scss' as *;

.section-text-with-line {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;

  p {
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0.1em;
    color: $black-100;
  }
}

.line-left {
  width: 16px;
  height: 1px;
  background-color: $black-400;
}
</style>
