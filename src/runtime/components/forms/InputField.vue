<script setup lang="ts">
defineProps<{
  label: string
  placeholder?: string
  modelValue?: string
  /** input の type 属性 */
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url'
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <div class="input-field">
    <label class="input-field__label">{{ label }}</label>
    <input
      :type="type ?? 'text'"
      :value="modelValue"
      :placeholder="placeholder"
      class="input-field__input"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    >
  </div>
</template>

<style lang="scss" scoped>
@use 'sass:color';
@use '../../assets/scss/variables.scss' as *;

.input-field {
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

  &__input {
    width: 100%;
    height: 40px;
    padding: 0 16px;
    background-color: transparent;
    border: 1px solid $black-400;
    border-radius: 1px;
    font-size: 14px;
    color: $black-200;
    outline: none;
    transition: all 0.2s ease;

    &::placeholder {
      color: $black-200;
      opacity: 0.6;
    }

    &:focus {
      border-color: $black-100;
      box-shadow: 0 0 0 1px rgba($black-100, 0.1);
    }
  }
}
</style>
