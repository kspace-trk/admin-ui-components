<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Icon } from '@iconify/vue'

export interface DropdownMenuItem {
  /** アイテムのキー */
  key: string
  /** 表示ラベル */
  label: string
  /** Iconifyアイコン名 */
  icon?: string
  /** 危険なアクション（赤色表示） */
  danger?: boolean
  /** 無効化 */
  disabled?: boolean
}

interface Props {
  /** メニューアイテム */
  items: DropdownMenuItem[]
  /** トリガーのアイコン */
  triggerIcon?: string
}

const { triggerIcon = 'mdi:dots-vertical' } = defineProps<Props>()

const emit = defineEmits<{
  'select': [item: DropdownMenuItem]
}>()

const isOpen = ref(false)
const menuRef = ref<HTMLElement | null>(null)

const toggle = (): void => {
  isOpen.value = !isOpen.value
}

const select = (item: DropdownMenuItem): void => {
  if (item.disabled) return
  emit('select', item)
  isOpen.value = false
}

const handleClickOutside = (event: MouseEvent): void => {
  if (menuRef.value && !menuRef.value.contains(event.target as Node)) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
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
            'dropdown-menu__item--disabled': item.disabled,
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

<style lang="scss" scoped>
@use 'sass:color';
@use '../../assets/scss/variables.scss' as *;

.dropdown-menu {
  position: relative;
  display: inline-flex;

  &__trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    padding: 0;
    border: none;
    background: none;
    color: $black-200;
    cursor: pointer;
    border-radius: 1px;
    transition: background-color 0.15s ease;

    &:hover {
      background-color: $white-200;
    }
  }

  &__content {
    position: absolute;
    top: 100%;
    right: 0;
    z-index: 100;
    min-width: 160px;
    padding: 4px 0;
    margin-top: 4px;
    background-color: $white-100;
    border: 1px solid $black-400;
    border-radius: 1px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    padding: 8px 16px;
    border: none;
    background: none;
    font-size: 13px;
    color: $black-200;
    text-align: left;
    cursor: pointer;
    transition: background-color 0.15s ease;
    white-space: nowrap;

    &:hover:not(:disabled) {
      background-color: $white-200;
    }

    &--danger {
      color: #c62828;

      &:hover:not(:disabled) {
        background-color: #fce4ec;
      }
    }

    &--disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
  }

  &__item-icon {
    flex-shrink: 0;
    opacity: 0.7;
  }
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
