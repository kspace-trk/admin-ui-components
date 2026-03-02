<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import { useRoute } from '#app'
import DropdownMenu from '../overlays/DropdownMenu.vue'
import type { DropdownMenuItem } from '../overlays/DropdownMenu.vue'

export interface SideHeaderMenuItem {
  path: string
  label: string
  icon: string
}

export interface SideHeaderMenuSection {
  /** セクションラベル */
  label: string
  /** セクション内のメニュー項目リスト */
  items: SideHeaderMenuItem[]
  /** セクションのドロップダウンメニュー項目 */
  menuActions?: DropdownMenuItem[]
}

export interface SideHeaderProps {
  /** ロゴテキスト */
  logoText: string
  /** メニュー項目リスト */
  menuItems: SideHeaderMenuItem[]
  /** セクション付きメニュー項目リスト */
  menuSections?: SideHeaderMenuSection[]
  /** ボトムメニュー項目 */
  bottomMenuItem?: SideHeaderMenuItem
  /** 現在のパス（未指定時は自動検知） */
  currentPath?: string
  /** メニューの開閉状態（モバイル時） */
  isOpen?: boolean
}

export interface SideHeaderEmits {
  menuItemClick: [path: string, event?: Event]
  closeMenu: []
  sectionActionSelect: [sectionLabel: string, item: DropdownMenuItem]
}

const props = defineProps<SideHeaderProps>()

const emit = defineEmits<SideHeaderEmits>()

// currentPath が未指定の場合は useRoute() で自動検知
const route = useRoute()
const activePath = computed(() => props.currentPath ?? route.path)

const closeMenu = (): void => {
  emit('closeMenu')
}

// メニュー項目クリック時にメニューを閉じる（モバイル時）とイベントをエミット
const handleMenuItemClick = (path: string, event?: Event): void => {
  emit('menuItemClick', path, event)
  closeMenu()
}

// セクションのドロップダウンメニュー選択時
const handleSectionActionSelect = (sectionLabel: string, item: DropdownMenuItem): void => {
  emit('sectionActionSelect', sectionLabel, item)
}
</script>

<template>
  <!-- オーバーレイ（モバイル時にメニューが開いている時に表示） -->
  <div
    v-if="isOpen"
    class="menu-overlay"
    @click="closeMenu"
  />

  <div
    id="side-header"
    :class="{ open: isOpen }"
  >
    <div class="side-header-container">
      <div class="logo-wrapper">
        <p>{{ logoText }}</p>
      </div>
      <div class="menu-wrapper">
        <ul>
          <li
            v-for="item in menuItems"
            :key="item.path"
          >
            <NuxtLink
              :href="item.path"
              :class="['menu-item', { active: activePath === item.path }]"
              @click="handleMenuItemClick(item.path, $event)"
            >
              <Icon
                :icon="item.icon"
                class="menu-item-icon"
              />
              <p>{{ item.label }}</p>
            </NuxtLink>
          </li>
        </ul>
        <div
          v-for="section in menuSections"
          :key="section.label"
          class="menu-section"
        >
          <div class="menu-section-header">
            <p class="menu-section-label">
              {{ section.label }}
            </p>
            <DropdownMenu
              v-if="section.menuActions?.length"
              :items="section.menuActions"
              class="menu-section-dropdown"
              @select="handleSectionActionSelect(section.label, $event)"
            />
          </div>
          <ul>
            <li
              v-for="item in section.items"
              :key="item.path"
            >
              <NuxtLink
                :href="item.path"
                :class="['menu-item', { active: activePath === item.path }]"
                @click="handleMenuItemClick(item.path, $event)"
              >
                <Icon
                  :icon="item.icon"
                  class="menu-item-icon"
                />
                <p>{{ item.label }}</p>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <div
        v-if="bottomMenuItem"
        class="bottom-wrapper"
      >
        <NuxtLink
          :to="bottomMenuItem.path"
          :class="['menu-item', { active: activePath === bottomMenuItem.path }]"
          @click="handleMenuItemClick(bottomMenuItem.path, $event)"
        >
          <Icon
            :icon="bottomMenuItem.icon"
            class="menu-item-icon"
          />
          <p>{{ bottomMenuItem.label }}</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/variables.scss' as *;

// オーバーレイのスタイル
.menu-overlay {
  position: fixed;
  inset: 0;
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
  font-weight: 300;
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
  border-radius: 1px;
  text-decoration: none;
  color: inherit;
  transition: background-color 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
  width: 100%;
  cursor: pointer;

  &.active,
  &:hover {
    background-color: $black-200;
  }

  p {
    font-size: 0.9rem;
    font-weight: 300;
    margin: 0;
    line-height: 1.2rem;
  }
}

.menu-item-icon {
  font-size: 1.2rem;
}

.menu-section {
  margin-top: 16px;

  ul {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
}

.menu-section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
}

.menu-section-label {
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: $black-400;
  margin: 0;
  padding: 0;
}

.menu-section-dropdown {
  :deep(.dropdown-menu__trigger) {
    width: 24px;
    height: 24px;
    color: $black-400;
    border-radius: 4px;

    &:hover {
      background-color: $black-200;
    }
  }
}

// レスポンシブ対応
@media (max-width: 768px) {
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
  .menu-overlay {
    display: none !important; // デスクトップ時はオーバーレイを完全に非表示
  }

  #side-header {
    transform: translateX(0) !important; // デスクトップ時は常に表示
  }
}
</style>
