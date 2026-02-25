<script setup lang="ts">
import { watch, onUnmounted, ref } from 'vue'

interface Props {
  /** 表示状態 */
  visible: boolean
  /** メッセージ */
  message: string
  /** タイプ */
  type?: 'success' | 'error' | 'warning' | 'info'
  /** 自動非表示までの時間（ms）。0で自動非表示しない */
  duration?: number
  /** 表示位置 */
  position?: 'top-right' | 'top-center' | 'bottom-right' | 'bottom-center'
}

const {
  visible,
  type = 'info',
  duration = 3000,
  position = 'top-right',
} = defineProps<Props>()

const emit = defineEmits<{
  close: []
}>()

const timer = ref<ReturnType<typeof setTimeout> | null>(null)

const startTimer = (): void => {
  if (duration > 0) {
    timer.value = setTimeout(() => {
      emit('close')
    }, duration)
  }
}

const clearTimer = (): void => {
  if (timer.value) {
    clearTimeout(timer.value)
    timer.value = null
  }
}

watch(() => visible, (isVisible) => {
  clearTimer()
  if (isVisible) {
    startTimer()
  }
})

onUnmounted(() => {
  clearTimer()
})
</script>

<template>
  <Teleport to="body">
    <Transition name="toast">
      <div
        v-if="visible"
        class="toast"
        :class="[`toast--${type}`, `toast--${position}`]"
        @mouseenter="clearTimer"
        @mouseleave="startTimer"
      >
        <span class="toast__message">{{ message }}</span>
        <button
          class="toast__close"
          type="button"
          @click="emit('close')"
        >
          ✕
        </button>
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/variables.scss' as *;

.toast {
  position: fixed;
  z-index: 2000;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  min-width: 280px;
  max-width: 420px;
  border-radius: 1px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-size: 14px;

  &--top-right {
    top: 20px;
    right: 20px;
  }

  &--top-center {
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
  }

  &--bottom-right {
    bottom: 20px;
    right: 20px;
  }

  &--bottom-center {
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
  }

  &--success {
    background-color: #f0f9f0;
    color: #2d6a2e;
    border: 1px solid #c8e6c9;
  }

  &--error {
    background-color: #fce4ec;
    color: #c62828;
    border: 1px solid #ef9a9a;
  }

  &--warning {
    background-color: #fff8e1;
    color: #8d6e00;
    border: 1px solid #ffe082;
  }

  &--info {
    background-color: #e3f2fd;
    color: #1565c0;
    border: 1px solid #90caf9;
  }

  &__message {
    flex: 1;
    line-height: 1.5;
  }

  &__close {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    padding: 0;
    border: none;
    background: none;
    font-size: 12px;
    color: inherit;
    cursor: pointer;
    opacity: 0.6;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 1;
    }
  }
}

.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.toast--top-center.toast-enter-from,
.toast--top-center.toast-leave-to {
  transform: translateX(-50%) translateY(-8px);
}

.toast--bottom-right.toast-enter-from,
.toast--bottom-right.toast-leave-to {
  transform: translateY(8px);
}

.toast--bottom-center.toast-enter-from,
.toast--bottom-center.toast-leave-to {
  transform: translateX(-50%) translateY(8px);
}
</style>
