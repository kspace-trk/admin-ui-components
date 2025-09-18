<script setup>
const { sideHeaderProps, topHeaderProps } = defineProps({
  sideHeaderProps: { type: Object, required: true },
  topHeaderProps: { type: Object, required: true }
});
const emit = defineEmits(["menuItemClick"]);
const handleMenuItemClick = (path) => {
  emit("menuItemClick", path);
};
</script>

<template>
  <div id="default-layout">
    <SideHeader
      :logo-text="sideHeaderProps.logoText"
      :menu-items="sideHeaderProps.menuItems"
      :current-path="sideHeaderProps.currentPath"
      :bottom-menu-item="sideHeaderProps.bottomMenuItem"
      @menu-item-click="handleMenuItemClick"
    />
    <div class="main-content">
      <TopHeader :title="topHeaderProps.title" />
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
