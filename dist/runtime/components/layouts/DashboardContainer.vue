<script setup>
import { ref } from "vue";
const { sideHeaderProps, topHeaderProps } = defineProps({
  sideHeaderProps: { type: Object, required: true },
  topHeaderProps: { type: Object, required: true }
});
const emit = defineEmits(["menuItemClick", "closeMenu"]);
const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
const closeMenu = () => {
  isMenuOpen.value = false;
};
const handleMenuItemClick = (path) => {
  emit("menuItemClick", path);
};
</script>

<template>
  <div id="default-layout">
    <KSSideHeader
      :logo-text="sideHeaderProps.logoText"
      :menu-items="sideHeaderProps.menuItems"
      :current-path="sideHeaderProps.currentPath"
      :bottom-menu-item="sideHeaderProps.bottomMenuItem"
      :is-open="isMenuOpen"
      @menu-item-click="handleMenuItemClick"
      @close-menu="closeMenu"
    />
    <div class="main-content">
      <KSTopHeader
        :title="topHeaderProps.title"
        :show-hamburger="true"
        @toggle-menu="toggleMenu"
      />
      <slot />
    </div>
  </div>
</template>

<style scoped>
.main-content {
  margin-left: 260px;
  padding-top: 73px;
  width: calc(100% - 260px);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  transition: margin-left 0.3s ease, width 0.3s ease;
}

@media (max-width: 768px) {
  .main-content {
    margin-left: 0;
    width: 100%;
  }
}
</style>
