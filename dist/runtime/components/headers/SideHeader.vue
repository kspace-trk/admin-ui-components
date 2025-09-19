<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
const props = defineProps({
  logoText: { type: String, required: true },
  menuItems: { type: Array, required: true },
  bottomMenuItem: { type: Object, required: false },
  currentPath: { type: String, required: true }
});
const emit = defineEmits(["menuItemClick"]);
const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
const closeMenu = () => {
  isMenuOpen.value = false;
};
const handleMenuItemClick = (path, event) => {
  emit("menuItemClick", path, event);
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
          <li
            v-for="item in menuItems"
            :key="item.path"
          >
            <NuxtLink
              :href="item.path"
              :class="['menu-item', { active: props.currentPath === item.path }]"
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
      <div
        v-if="bottomMenuItem"
        class="bottom-wrapper"
      >
        <NuxtLink
          :to="bottomMenuItem.path"
          :class="['menu-item', { active: props.currentPath === bottomMenuItem.path }]"
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

<style scoped>
.hamburger-button {
  position: fixed;
  top: 16px;
  left: 16px;
  width: 44px;
  height: 44px;
  background: #363139;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  z-index: 1001;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  transition: all 0.3s ease;
}
.hamburger-button span {
  width: 20px;
  height: 2px;
  background-color: #EBF1F4;
  border-radius: 1px;
  transition: all 0.3s ease;
}
.hamburger-button.open span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.hamburger-button.open span:nth-child(2) {
  opacity: 0;
}
.hamburger-button.open span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px);
}

.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: none;
}

#side-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 260px;
  height: 100vh;
  color: #EBF1F4;
  z-index: 1000;
  transition: transform 0.3s ease;
}

.side-header-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 16px 24px 24px;
  background-color: #363139;
}

.logo-wrapper {
  font-size: 1.2rem;
  font-weight: 700;
  padding: 16px 0;
  border-bottom: 1px solid #D9D0DF;
}

.menu-wrapper {
  padding: 16px 0;
  flex: 1;
}
.menu-wrapper ul {
  display: flex;
  flex-direction: column;
  gap: 12px;
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
  width: 100%;
  cursor: pointer;
}
.menu-item.active, .menu-item:hover {
  background-color: #4B464E;
}
.menu-item p {
  font-size: 0.9rem;
  font-weight: 700;
  margin: 0;
  line-height: 1.2rem;
}

.menu-item-icon {
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .hamburger-button {
    display: flex;
  }
  .menu-overlay {
    display: block;
  }
  #side-header {
    transform: translateX(-100%);
  }
  #side-header.open {
    transform: translateX(0);
  }
}
@media (min-width: 769px) {
  .hamburger-button {
    display: none !important;
  }
  .menu-overlay {
    display: none !important;
  }
  #side-header {
    transform: translateX(0) !important;
  }
}
</style>
