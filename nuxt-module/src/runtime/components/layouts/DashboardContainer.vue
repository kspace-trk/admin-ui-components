<script setup lang="ts">
import type { SideHeaderProps, SideHeaderEmits } from '../headers/SideHeader.vue'
import type { TopHeaderProps } from '../headers/TopHeader.vue'

const { sideHeaderProps, topHeaderProps } = defineProps<{
  sideHeaderProps: SideHeaderProps
  topHeaderProps: TopHeaderProps
}>()

const emit = defineEmits<SideHeaderEmits>()

const handleMenuItemClick = (path: string) => {
  emit('menuItemClick', path)
}
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

<style lang="scss" scoped>
.main-content {
  margin-left: 260px; // SideHeaderの幅分だけ右にずらす
  padding-top: 73px; // TopHeaderの高さ分だけ下にずらす
  width: calc(100% - 260px); // SideHeaderの幅を除いた幅
  display: flex;
  flex-direction: column;
  min-height: 100vh; // 最小の高さを画面の高さに設定
  transition: margin-left 0.3s ease, width 0.3s ease; // スムーズなアニメーション
}

@media (max-width: 768px) {
  .main-content {
    margin-left: 0;
    width: 100%;
  }
}
</style>
