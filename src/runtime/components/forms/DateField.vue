<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineProps<{
  /** ラベル */
  label: string
  /** v-model値（date: `YYYY-MM-DD` / datetime-local: `YYYY-MM-DDTHH:mm` / month: `YYYY-MM`） */
  modelValue?: string
  /** input の type 属性 */
  type?: 'date' | 'datetime-local' | 'month'
  /** 選択可能な最小値 */
  min?: string
  /** 選択可能な最大値 */
  max?: string
  /** 無効化 */
  disabled?: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <div class="date-field">
    <label class="date-field__label">{{ label }}</label>
    <div class="date-field__wrapper">
      <input
        :type="type ?? 'date'"
        :value="modelValue"
        :min="min"
        :max="max"
        :disabled="disabled"
        class="date-field__input"
        @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      >
      <Icon
        icon="mdi:calendar-blank-outline"
        class="date-field__icon"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use 'sass:color';
@use '../../assets/scss/variables.scss' as *;

.date-field {
  position: relative;
  width: 100%;

  &__label {
    display: block;
    font-weight: 400;
    font-size: 12.8px;
    color: $black-100;
    letter-spacing: 1.024px;
    margin-bottom: 8px;
    line-height: normal;
  }

  &__wrapper {
    position: relative;
  }

  &__input {
    position: relative;
    width: 100%;
    height: 40px;
    padding: 0 40px 0 16px;
    background-color: transparent;
    border: 1px solid $black-400;
    border-radius: 1px;
    font-family: inherit;
    font-size: 14px;
    line-height: normal;
    color: $black-200;
    outline: none;
    appearance: none;
    transition: all 0.2s ease;

    &:focus {
      border-color: $black-100;
      box-shadow: 0 0 0 1px rgba($black-100, 0.1);
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    // ネイティブのカレンダーアイコンを透明化し、右端40pxを
    // ピッカー起動の当たり判定として残す（日付部分は直接編集可能）
    &::-webkit-calendar-picker-indicator {
      position: absolute;
      top: 0;
      right: 0;
      width: 40px;
      height: 100%;
      margin: 0;
      padding: 0;
      opacity: 0;
      cursor: pointer;
    }

    &:disabled::-webkit-calendar-picker-indicator {
      cursor: not-allowed;
    }
  }

  &__icon {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    width: 18px;
    height: 18px;
    color: $black-200;
    opacity: 0.6;
    pointer-events: none;
  }

  // Firefoxはネイティブのカレンダーアイコンを非表示にできないため、
  // アイコンが二重にならないよう独自アイコン側を隠す
  @supports (-moz-appearance: none) {
    &__icon {
      display: none;
    }
  }
}
</style>
