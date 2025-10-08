<script setup lang="ts">
import { Icon } from '@iconify/vue'

export interface TopHeaderProps {
  /** ページタイトル */
  title: string
  /** ハンバーガーメニューを表示するか（モバイル時のみ） */
  showHamburger?: boolean
}

export interface TopHeaderEmits {
  toggleMenu: []
}

defineProps<TopHeaderProps>()

const emit = defineEmits<TopHeaderEmits>()

const handleToggleMenu = (): void => {
  emit('toggleMenu')
}
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

<style lang="scss" scoped>
@use '../../assets/scss/variables.scss' as *;

.top-header {
  display: flex;
  align-items: center;
  justify-content: space-between; // left側にタイトル、right側にボタンを配置
  padding: 24px 36px;
  position: fixed;
  top: 0;
  width: calc(100% - 240px); // SideHeaderの幅を除いた幅
  background-color: $white-100; // 背景色を設定してコンテンツが透けないようにする
  border-bottom: 1px solid $black-400;
  z-index: 99;

  @media (max-width: 720px) {
    width: 100%;
    padding-left: 80px; // ハンバーガーボタンのスペースを確保
  }

  &__title {
    font-weight: 700;
    font-size: 16px;
    color: $black-100;
    letter-spacing: 1.28px;
    line-height: normal;
    margin: 0;
    white-space: nowrap;
  }
}

// ハンバーガーボタンのスタイル
.hamburger-button {
  position: fixed;
  top: 13px;
  left: 16px;
  width: 44px;
  height: 44px;
  background: $black-100;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  z-index: 1001;
  display: none; // デフォルトは非表示（モバイル時のみ表示）
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  color: $white-200;
  font-size: 24px;

  &:hover {
    background: $black-200;
  }

  @media (max-width: 768px) {
    display: flex; // モバイル時に表示
  }
}
</style>
