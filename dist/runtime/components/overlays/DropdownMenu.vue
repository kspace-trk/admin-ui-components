<script setup>
import { ref, nextTick, onMounted, onUnmounted } from "vue";
import { Icon } from "@iconify/vue";
const { triggerIcon = "mdi:dots-vertical" } = defineProps({
  items: { type: Array, required: true },
  triggerIcon: { type: String, required: false }
});
const emit = defineEmits(["select"]);
const uid = Symbol();
const isOpen = ref(false);
const menuRef = ref(null);
const triggerRef = ref(null);
const contentRef = ref(null);
const contentStyle = ref({});
const updatePosition = () => {
  if (!triggerRef.value) return;
  const rect = triggerRef.value.getBoundingClientRect();
  const viewportHeight = window.innerHeight;
  const contentEl = contentRef.value;
  const menuHeight = contentEl ? contentEl.offsetHeight : 0;
  const spaceBelow = viewportHeight - rect.bottom;
  const spaceAbove = rect.top;
  const style = {
    right: `${document.documentElement.clientWidth - rect.right}px`
  };
  if (spaceBelow < menuHeight + 4 && spaceAbove > spaceBelow) {
    style.bottom = `${viewportHeight - rect.top + 4}px`;
  } else {
    style.top = `${rect.bottom + 4}px`;
  }
  contentStyle.value = style;
};
const close = () => {
  isOpen.value = false;
  window.removeEventListener("scroll", updatePosition, true);
};
const handleOtherOpen = (event) => {
  if (event.detail !== uid) {
    close();
  }
};
const toggle = async () => {
  isOpen.value = !isOpen.value;
  if (isOpen.value) {
    window.dispatchEvent(new CustomEvent("dropdown-menu:open", { detail: uid }));
    await nextTick();
    updatePosition();
    window.addEventListener("scroll", updatePosition, true);
  } else {
    window.removeEventListener("scroll", updatePosition, true);
  }
};
const select = (item) => {
  if (item.disabled) return;
  emit("select", item);
  close();
};
const handleClickOutside = (event) => {
  const target = event.target;
  const inTrigger = menuRef.value?.contains(target);
  const inContent = contentRef.value?.contains(target);
  if (!inTrigger && !inContent) {
    close();
  }
};
onMounted(() => {
  document.addEventListener("click", handleClickOutside);
  window.addEventListener("dropdown-menu:open", handleOtherOpen);
});
onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
  window.removeEventListener("dropdown-menu:open", handleOtherOpen);
  window.removeEventListener("scroll", updatePosition, true);
});
</script>

<template>
  <div
    ref="menuRef"
    class="dropdown-menu"
  >
    <button
      ref="triggerRef"
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
    <Teleport to="body">
      <Transition name="dropdown-fade">
        <div
          v-if="isOpen"
          ref="contentRef"
          class="dropdown-menu__content"
          :style="contentStyle"
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
    </Teleport>
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
</style>

<style>
.dropdown-menu__content {
  position: fixed;
  z-index: 10000;
  min-width: 160px;
  padding: 4px 0;
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

.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: all 0.15s ease;
}

.dropdown-fade-enter-from,
.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
