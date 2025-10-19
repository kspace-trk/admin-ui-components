<script setup lang="ts">
defineProps<{
  label: string
  placeholder?: string
  modelValue?: string
  rows?: number
  readonly?: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <div class="textarea-field">
    <label class="textarea-field__label">{{ label }}</label>
    <textarea
      :value="modelValue"
      :placeholder="placeholder"
      :rows="rows || 4"
      :readonly="readonly"
      :class="['textarea-field__input', { 'textarea-field__input--readonly': readonly }]"
      @input="emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
    />
  </div>
</template>

<style lang="scss" scoped>
@use 'sass:color';
@use '../../assets/scss/variables.scss' as *;

.textarea-field {
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
    min-height: 80px;
    padding: 12px 16px;
    background-color: $white-200;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    color: $black-200;
    outline: none;
    transition: all 0.2s ease;
    resize: vertical;
    font-family: inherit;
    line-height: 1.4;

    &::placeholder {
      color: $black-200;
      opacity: 0.6;
    }

    &:focus {
      background-color: color.adjust($white-200, $lightness: -2%);
      box-shadow: 0 0 0 2px rgba($primary-100, 0.2);
    }

    &--readonly {
      background-color: color.adjust($white-200, $lightness: -5%);
      color: color.adjust($black-200, $lightness: 5%);
      cursor: default;
      resize: none;

      &:focus {
        background-color: color.adjust($white-200, $lightness: -5%);
        box-shadow: none;
      }

      &::placeholder {
        color: color.adjust($black-200, $lightness: 30%);
        opacity: 0.8;
      }
    }
  }
}
</style>
