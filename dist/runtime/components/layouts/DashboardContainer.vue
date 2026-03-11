<script setup>
import { ref } from "vue";
const { sideHeaderProps, topHeaderProps } = defineProps({
  sideHeaderProps: { type: Object, required: true },
  topHeaderProps: { type: Object, required: true }
});
const emit = defineEmits(["menuItemClick", "closeMenu", "sectionActionSelect"]);
const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
const closeMenu = () => {
  isMenuOpen.value = false;
};
const handleMenuItemClick = (path, event) => {
  emit("menuItemClick", path, event);
};
const handleSectionActionSelect = (sectionLabel, item) => {
  emit("sectionActionSelect", sectionLabel, item);
};
</script>

<template>
  <div id="default-layout">
    <KSSideHeader
      :logo-text="sideHeaderProps.logoText"
      :menu-items="sideHeaderProps.menuItems"
      :menu-sections="sideHeaderProps.menuSections"
      :current-path="sideHeaderProps.currentPath"
      :bottom-menu-item="sideHeaderProps.bottomMenuItem"
      :is-open="isMenuOpen"
      @menu-item-click="handleMenuItemClick"
      @close-menu="closeMenu"
      @section-action-select="handleSectionActionSelect"
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
