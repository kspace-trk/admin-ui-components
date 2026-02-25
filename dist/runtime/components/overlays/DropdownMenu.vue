<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { Icon } from "@iconify/vue";
const { triggerIcon = "mdi:dots-vertical" } = defineProps({
  items: { type: Array, required: true },
  triggerIcon: { type: String, required: false }
});
const emit = defineEmits(["select"]);
const isOpen = ref(false);
const menuRef = ref(null);
const toggle = () => {
  isOpen.value = !isOpen.value;
};
const select = (item) => {
  if (item.disabled) return;
  emit("select", item);
  isOpen.value = false;
};
const handleClickOutside = (event) => {
  if (menuRef.value && !menuRef.value.contains(event.target)) {
    isOpen.value = false;
  }
};
onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});
onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <div
    ref="menuRef"
    class="dropdown-menu"
  >
    <button
      class="dropdown-menu__trigger"
      type="button"
      @click.stop="toggle"
    >
      <slot name="trigger">
        <Icon
          :icon="triggerIcon"
          width="20"
          height="20"
        />
      </slot>
    </button>
    <Transition name="dropdown">
      <div
        v-if="isOpen"
        class="dropdown-menu__content"
      >
        <button
          v-for="item in items"
          :key="item.key"
          class="dropdown-menu__item"
          :class="{
  'dropdown-menu__item--danger': item.danger,
  'dropdown-menu__item--disabled': item.disabled
}"
          :disabled="item.disabled"
          type="button"
          @click="select(item)"
        >
          <Icon
            v-if="item.icon"
            :icon="item.icon"
            width="16"
            height="16"
            class="dropdown-menu__item-icon"
          />
          <span>{{ item.label }}</span>
        </button>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.dropdown-menu {
  position: relative;
  display: inline-flex;
}
.dropdown-menu__trigger {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  border: none;
  background: none;
  color: #4B464E;
  cursor: pointer;
  border-radius: 1px;
  transition: background-color 0.15s ease;
}
.dropdown-menu__trigger:hover {
  background-color: #F7F7F7;
}
.dropdown-menu__content {
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 100;
  min-width: 160px;
  padding: 4px 0;
  margin-top: 4px;
  background-color: #FFFFFF;
  border: 1px solid #E0E0E0;
  border-radius: 1px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}
.dropdown-menu__item {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 8px 16px;
  border: none;
  background: none;
  font-size: 13px;
  color: #4B464E;
  text-align: left;
  cursor: pointer;
  transition: background-color 0.15s ease;
  white-space: nowrap;
}
.dropdown-menu__item:hover:not(:disabled) {
  background-color: #F7F7F7;
}
.dropdown-menu__item--danger {
  color: #c62828;
}
.dropdown-menu__item--danger:hover:not(:disabled) {
  background-color: #fce4ec;
}
.dropdown-menu__item--disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
.dropdown-menu__item-icon {
  flex-shrink: 0;
  opacity: 0.7;
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.15s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
