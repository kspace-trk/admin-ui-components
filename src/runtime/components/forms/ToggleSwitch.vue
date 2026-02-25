<script setup lang="ts">
defineProps<{
  /** ラベル */
  label?: string
  /** ON/OFF状態 */
  modelValue?: boolean
  /** 無効化 */
  disabled?: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const toggle = (event: Event): void => {
  emit('update:modelValue', (event.target as HTMLInputElement).checked)
}
</script>

<template>
  <label
    class="toggle-switch"
    :class="{ 'toggle-switch--disabled': disabled }"
  >
    <input
      type="checkbox"
      :checked="modelValue"
      :disabled="disabled"
      class="toggle-switch__input"
      @change="toggle"
    >
    <span class="toggle-switch__track">
      <span class="toggle-switch__thumb" />
    </span>
    <span
      v-if="label"
      class="toggle-switch__label"
    >{{ label }}</span>
  </label>
</template>

<style lang="scss" scoped>
@use 'sass:color';
@use '../../assets/scss/variables.scss' as *;

.toggle-switch {
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

  &__track {
    position: relative;
    width: 40px;
    height: 22px;
    background-color: $black-400;
    border-radius: 11px;
    transition: background-color 0.2s ease;
    flex-shrink: 0;

    .toggle-switch__input:checked + & {
      background-color: $black-100;
    }

    .toggle-switch__input:focus-visible + & {
      box-shadow: 0 0 0 2px rgba($black-100, 0.2);
    }
  }

  &__thumb {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 18px;
    height: 18px;
    background-color: $white-100;
    border-radius: 50%;
    transition: transform 0.2s ease;

    .toggle-switch__input:checked + .toggle-switch__track & {
      transform: translateX(18px);
    }
  }

  &__label {
    font-size: 14px;
    color: $black-200;
    line-height: normal;
  }
}
</style>
