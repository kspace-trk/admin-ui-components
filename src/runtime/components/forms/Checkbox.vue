<script setup lang="ts">
defineProps<{
  /** ラベル */
  label?: string
  /** チェック状態 */
  modelValue?: boolean
  /** 無効化 */
  disabled?: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()
</script>

<template>
  <label
    class="checkbox"
    :class="{ 'checkbox--disabled': disabled }"
  >
    <input
      type="checkbox"
      :checked="modelValue"
      :disabled="disabled"
      class="checkbox__input"
      @change="emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
    >
    <span class="checkbox__box">
      <svg
        v-if="modelValue"
        class="checkbox__icon"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M3.5 8L6.5 11L12.5 5"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </span>
    <span
      v-if="label"
      class="checkbox__label"
    >{{ label }}</span>
  </label>
</template>

<style lang="scss" scoped>
@use 'sass:color';
@use '../../assets/scss/variables.scss' as *;

.checkbox {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;

  &--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &__input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
    pointer-events: none;
  }

  &__box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    border: 1px solid $black-400;
    border-radius: 1px;
    background-color: transparent;
    transition: all 0.2s ease;
    flex-shrink: 0;

    .checkbox__input:checked + & {
      background-color: $black-100;
      border-color: $black-100;
    }

    .checkbox__input:focus-visible + & {
      box-shadow: 0 0 0 2px rgba($black-100, 0.2);
    }
  }

  &__icon {
    width: 14px;
    height: 14px;
    color: $white-100;
  }

  &__label {
    font-size: 14px;
    color: $black-200;
    line-height: normal;
  }
}
</style>
