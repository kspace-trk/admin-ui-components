<script setup>
defineProps({
  title: { type: String, required: true }
});
</script>

<template>
  <div class="top-header">
    <h1 class="top-header__title">
      {{ title }}
    </h1>
  </div>
</template>

<style scoped>
.top-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 36px;
  position: fixed;
  top: 0;
  width: calc(100% - 240px);
  background-color: #FFFFFF;
  border-bottom: 1px solid #D9D0DF;
  z-index: 99;
}
@media (max-width: 720px) {
  .top-header {
    width: 100%;
  }
}
.top-header__title {
  font-weight: 700;
  font-size: 16px;
  color: #363139;
  letter-spacing: 1.28px;
  line-height: normal;
  margin: 0;
  white-space: nowrap;
}
</style>
