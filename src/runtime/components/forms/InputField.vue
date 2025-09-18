<script setup lang="ts">
defineProps<{
  label: string
  placeholder?: string
  modelValue?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <div class="input-field">
    <label class="input-field__label">{{ label }}</label>
    <input
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
    font-weight: 700;
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
    background-color: $white-200;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    color: $black-200;
    outline: none;
    transition: all 0.2s ease;

    &::placeholder {
      color: $black-200;
      opacity: 0.6;
    }

    &:focus {
      background-color: color.adjust($white-200, $lightness: -2%);
      box-shadow: 0 0 0 2px rgba($primary-100, 0.2);
    }
  }
}
</style>
