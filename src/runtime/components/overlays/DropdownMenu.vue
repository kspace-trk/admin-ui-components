<script setup lang="ts">
import { ref, nextTick, onMounted, onUnmounted } from 'vue'
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
  select: [item: DropdownMenuItem]
}>()

const uid = Symbol()
const isOpen = ref(false)
const menuRef = ref<HTMLElement | null>(null)
const triggerRef = ref<HTMLElement | null>(null)
const contentRef = ref<HTMLElement | null>(null)
const contentStyle = ref<Record<string, string>>({})

const updatePosition = (): void => {
  if (!triggerRef.value) return
  const rect = triggerRef.value.getBoundingClientRect()
  const viewportHeight = window.innerHeight
  const contentEl = contentRef.value
  const menuHeight = contentEl ? contentEl.offsetHeight : 0
  const spaceBelow = viewportHeight - rect.bottom
  const spaceAbove = rect.top

  const style: Record<string, string> = {
    right: `${document.documentElement.clientWidth - rect.right}px`,
  }

  if (spaceBelow < menuHeight + 4 && spaceAbove > spaceBelow) {
    style.bottom = `${viewportHeight - rect.top + 4}px`
  }
  else {
    style.top = `${rect.bottom + 4}px`
  }

  contentStyle.value = style
}

const close = (): void => {
  isOpen.value = false
  window.removeEventListener('scroll', updatePosition, true)
}

const handleOtherOpen = (event: Event): void => {
  if ((event as CustomEvent).detail !== uid) {
    close()
  }
}

const toggle = async (): Promise<void> => {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    window.dispatchEvent(new CustomEvent('dropdown-menu:open', { detail: uid }))
    await nextTick()
    updatePosition()
    window.addEventListener('scroll', updatePosition, true)
  }
  else {
    window.removeEventListener('scroll', updatePosition, true)
  }
}

const select = (item: DropdownMenuItem): void => {
  if (item.disabled) return
  emit('select', item)
  close()
}

const handleClickOutside = (event: MouseEvent): void => {
  const target = event.target as Node
  const inTrigger = menuRef.value?.contains(target)
  const inContent = contentRef.value?.contains(target)
  if (!inTrigger && !inContent) {
    close()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  window.addEventListener('dropdown-menu:open', handleOtherOpen)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  window.removeEventListener('dropdown-menu:open', handleOtherOpen)
  window.removeEventListener('scroll', updatePosition, true)
})
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
    </Teleport>
  </div>
</template>

<style lang="scss" scoped>
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
}
</style>

<!-- Teleport先のコンテンツ用（scopedだと適用されない） -->
<style lang="scss">
@use '../../assets/scss/variables.scss' as *;

.dropdown-menu__content {
  position: fixed;
  z-index: 10000;
  min-width: 160px;
  padding: 4px 0;
  background-color: $white-100;
  border: 1px solid $black-400;
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
