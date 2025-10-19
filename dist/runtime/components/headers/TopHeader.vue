<script setup>
import { Icon } from "@iconify/vue";
defineProps({
  title: { type: String, required: true },
  showHamburger: { type: Boolean, required: false }
});
const emit = defineEmits(["toggleMenu"]);
const handleToggleMenu = () => {
  emit("toggleMenu");
};
</script>

<template>
  <div class="top-header">
    <!-- ハンバーガーボタン（モバイル時のみ表示） -->
    <button
      v-if="showHamburger"
      class="hamburger-button"
      @click="handleToggleMenu"
    >
      <Icon icon="mdi:menu" />
    </button>
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
    padding-left: 80px;
  }
}
.top-header__title {
  font-weight: 400;
  font-size: 16px;
  color: #363139;
  letter-spacing: 1.28px;
  line-height: normal;
  margin: 0;
  white-space: nowrap;
}

.hamburger-button {
  position: fixed;
  top: 13px;
  left: 16px;
  width: 44px;
  height: 44px;
  background: #363139;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  z-index: 1001;
  display: none;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  color: #EBF1F4;
  font-size: 24px;
}
.hamburger-button:hover {
  background: #4B464E;
}
@media (max-width: 768px) {
  .hamburger-button {
    display: flex;
  }
}
</style>
