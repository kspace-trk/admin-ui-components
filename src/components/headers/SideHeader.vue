<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { Icon } from '@iconify/vue';

export interface SideHeaderMenuItem {
  path: string;
  label: string;
  icon: string;
}

interface Props {
  /** ロゴテキスト */
  logoText: string;
  /** メニュー項目リスト */
  menuItems: SideHeaderMenuItem[];
  /** ボトムメニュー項目 */
  bottomMenuItem?: SideHeaderMenuItem;
}

defineProps<Props>();

const route = useRoute();
const isMenuOpen = ref(false);

const toggleMenu = (): void => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = (): void => {
  isMenuOpen.value = false;
};

// メニュー項目クリック時にメニューを閉じる（モバイル時）
const handleMenuItemClick = (): void => {
  closeMenu();
};
</script>

<template>
  <!-- ハンバーガーボタン（モバイル時のみ表示） -->
  <button
    class="hamburger-button"
    :class="{ open: isMenuOpen }"
    @click="toggleMenu"
  >
    <span />
    <span />
    <span />
  </button>

  <!-- オーバーレイ（モバイル時にメニューが開いている時に表示） -->
  <div
    v-if="isMenuOpen"
    class="menu-overlay"
    @click="closeMenu"
  />

  <div
    id="side-header"
    :class="{ open: isMenuOpen }"
  >
    <div class="side-header-container">
      <div class="logo-wrapper">
        <p>{{ logoText }}</p>
      </div>
      <div class="menu-wrapper">
        <ul>
          <li v-for="item in menuItems" :key="item.path">
            <router-link
              :to="item.path"
              :class="['menu-item', { active: route.path === item.path }]"
              @click="handleMenuItemClick"
            >
              <Icon
                :icon="item.icon"
                class="menu-item-icon"
              />
              <p>{{ item.label }}</p>
            </router-link>
          </li>
        </ul>
      </div>
      <div v-if="bottomMenuItem" class="bottom-wrapper">
        <router-link
          :to="bottomMenuItem.path"
          :class="['menu-item', { active: route.path === bottomMenuItem.path }]"
          @click="handleMenuItemClick"
        >
          <Icon
            :icon="bottomMenuItem.icon"
            class="menu-item-icon"
          />
          <p>{{ bottomMenuItem.label }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// ハンバーガーボタンのスタイル
.hamburger-button {
  position: fixed;
  top: 16px;
  left: 16px;
  width: 44px;
  height: 44px;
  background: $black-100;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  z-index: 1001;
  display: none; // デフォルトは非表示（モバイル時のみ表示）
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  transition: all 0.3s ease;

  span {
    width: 20px;
    height: 2px;
    background-color: $white-200;
    border-radius: 1px;
    transition: all 0.3s ease;
  }

  // ハンバーガーメニューが開いている時のアニメーション
  &.open {
    span:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }

    span:nth-child(2) {
      opacity: 0;
    }

    span:nth-child(3) {
      transform: rotate(-45deg) translate(7px, -6px);
    }
  }
}

// オーバーレイのスタイル
.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: none; // デフォルトは非表示（モバイル時のみ表示）
}

// サイドヘッダーメインのスタイル
#side-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 260px;
  height: 100vh;
  color: $white-200;
  z-index: 1000;
  transition: transform 0.3s ease;
}

.side-header-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 16px 24px 24px;
  background-color: $black-100;
}

.logo-wrapper {
  font-size: 1.2rem;
  font-weight: 700;
  padding: 16px 0;
  border-bottom: 1px solid $black-400;
}

.menu-wrapper {
  padding: 16px 0;
  flex: 1;

  ul {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
}

.menu-item {
  height: 48px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 16px;
  border-radius: 6px;
  text-decoration: none;
  color: inherit;
  transition: background-color 0.2s ease;

  &.active,
  &:hover {
    background-color: $black-200;
  }

  p {
    font-size: 0.9rem;
    font-weight: 700;
    margin: 0;
  }
}

.menu-item-icon {
  font-size: 1.2rem;
}

// レスポンシブ対応
@media (max-width: 768px) {
  .hamburger-button {
    display: flex; // モバイル時にハンバーガーボタンを表示
  }

  .menu-overlay {
    display: block; // モバイル時にオーバーレイを有効化
  }

  #side-header {
    transform: translateX(-100%); // デフォルトは画面外に隠す

    &.open {
      transform: translateX(0); // メニューが開いている時は表示
    }
  }
}

// タブレット以上のサイズでは通常のサイドバーとして表示
@media (min-width: 769px) {
  .hamburger-button {
    display: none !important; // デスクトップ時はハンバーガーボタンを完全に非表示
  }

  .menu-overlay {
    display: none !important; // デスクトップ時はオーバーレイを完全に非表示
  }

  #side-header {
    transform: translateX(0) !important; // デスクトップ時は常に表示
  }
}
</style>
