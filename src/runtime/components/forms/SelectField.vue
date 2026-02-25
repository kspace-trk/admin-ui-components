<script setup lang="ts">
export interface SelectOption {
  label: string
  value: string | number
  disabled?: boolean
}

defineProps<{
  /** ラベル */
  label: string
  /** 選択肢 */
  options: SelectOption[]
  /** 選択中の値 */
  modelValue?: string | number
  /** プレースホルダー */
  placeholder?: string
  /** 無効化 */
  disabled?: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
}>()
</script>

<template>
  <div class="select-field">
    <label class="select-field__label">{{ label }}</label>
    <div class="select-field__wrapper">
      <select
        :value="modelValue"
        :disabled="disabled"
        class="select-field__select"
        :class="{ 'select-field__select--placeholder': !modelValue && modelValue !== 0 }"
        @change="emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
      >
        <option
          v-if="placeholder"
          value=""
          disabled
          selected
        >
          {{ placeholder }}
        </option>
        <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
          :disabled="option.disabled"
        >
          {{ option.label }}
        </option>
      </select>
      <span class="select-field__arrow" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use 'sass:color';
@use '../../assets/scss/variables.scss' as *;

.select-field {
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

  &__select {
    width: 100%;
    height: 40px;
    padding: 0 36px 0 16px;
    background-color: transparent;
    border: 1px solid $black-400;
    border-radius: 1px;
    font-size: 14px;
    color: $black-200;
    outline: none;
    cursor: pointer;
    appearance: none;
    transition: all 0.2s ease;

    &--placeholder {
      color: $black-200;
      opacity: 0.6;
    }

    &:focus {
      border-color: $black-100;
      box-shadow: 0 0 0 1px rgba($black-100, 0.1);
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      background-color: $white-200;
    }
  }

  &__arrow {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid $black-200;
    pointer-events: none;
  }
}
</style>
