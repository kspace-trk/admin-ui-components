<script setup>
defineProps({
  text: { type: String, required: true }
});
</script>

<template>
  <div class="section-text-with-line">
    <span class="line-left" />
    <p>{{ text }}</p>
  </div>
</template>

<style scoped>
.section-text-with-line {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
}
.section-text-with-line p {
  font-size: 1rem;
  font-weight: 700;
  color: #363139;
}

.line-left {
  width: 16px;
  height: 1px;
  background-color: #D9D0DF;
}
</style>
