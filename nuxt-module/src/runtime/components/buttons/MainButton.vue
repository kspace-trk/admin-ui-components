<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  /** ボタンのタイプ（送信またはキャンセル） */
  type?: 'submit' | 'cancel';
  /** ボタンのテキスト */
  text?: string;
  /** 無効化状態 */
  disabled?: boolean;
  /** ローディング状態 */
  loading?: boolean;
}

const { type = 'submit', text = '', disabled = false, loading = false } = defineProps<Props>();

const emit = defineEmits<{
  click: [];
}>();

const handleClick = (): void => {
  if (!disabled && !loading) {
    emit('click');
  }
};

// ボタンのテキストを決定
const buttonText = computed(() => {
  if (loading) return '処理中...';
  if (text) return text;
  return type === 'submit' ? '送信' : 'キャンセル';
});

// ボタンのスタイルクラスを決定
const buttonClass = computed(() => {
  const baseClass = 'main-button';
  const typeClass = type === 'submit' ? 'main-button--submit' : 'main-button--cancel';
  const disabledClass = (disabled || loading) ? 'main-button--disabled' : '';

  return [baseClass, typeClass, disabledClass].filter(Boolean).join(' ');
});
</script>

<template>
  <button
    :class="buttonClass"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span
      v-if="loading"
      class="spinner"
    />
    {{ buttonText }}
  </button>
</template>

<style lang="scss" scoped>
@use 'sass:color';

.main-button {
  width: 151px;
  height: 41px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.main-button:focus {
  box-shadow: 0 0 0 2px color.adjust($primary-100, $lightness: -10%);
}

/* 送信ボタンのスタイル */
.main-button--submit {
  background-color: $primary-100;
  color: white;
}

.main-button--submit:hover:not(:disabled) {
  background-color: color.adjust($primary-100, $lightness: -10%);
}

.main-button--submit:active:not(:disabled) {
  background-color: color.adjust($primary-100, $lightness: -10%);
}

/* キャンセルボタンのスタイル */
.main-button--cancel {
  background-color: $black-400;
  color: $black-100;
  border: 1px solid $black-400;
}

.main-button--cancel:hover:not(:disabled) {
  background-color: color.adjust($black-400, $lightness: 10%);
}

.main-button--cancel:active:not(:disabled) {
  background-color: $black-400;
}

/* 無効化状態 */
.main-button--disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* スピナーアイコン */
.spinner {
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
