<script setup>
import { Icon } from "@iconify/vue";
const props = defineProps({
  logoText: { type: String, required: true },
  menuItems: { type: Array, required: true },
  bottomMenuItem: { type: Object, required: false },
  currentPath: { type: String, required: true },
  isOpen: { type: Boolean, required: false }
});
const emit = defineEmits(["menuItemClick", "closeMenu"]);
const closeMenu = () => {
  emit("closeMenu");
};
const handleMenuItemClick = (path, event) => {
  emit("menuItemClick", path, event);
  closeMenu();
};
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
  font-weight: 300;
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
  font-weight: 300;
  margin: 0;
  line-height: 1.2rem;
}

.menu-item-icon {
  font-size: 1.2rem;
}

@media (max-width: 768px) {
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
  .menu-overlay {
    display: none !important;
  }
  #side-header {
    transform: translateX(0) !important;
  }
}
</style>
