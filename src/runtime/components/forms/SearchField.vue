<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineProps<{
  /** プレースホルダー */
  placeholder?: string
  /** 検索文字列 */
  modelValue?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
  'search': [value: string]
}>()

const handleKeydown = (event: KeyboardEvent): void => {
  if (event.key === 'Enter') {
    emit('search', (event.target as HTMLInputElement).value)
  }
}
</script>

<template>
  <div class="search-field">
    <Icon
      icon="mdi:magnify"
      class="search-field__icon"
    />
    <input
      type="text"
      :value="modelValue"
      :placeholder="placeholder ?? '検索...'"
      class="search-field__input"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      @keydown="handleKeydown"
    >
    <button
      v-if="modelValue"
      class="search-field__clear"
      type="button"
      @click="emit('update:modelValue', ''); emit('search', '')"
    >
      <Icon
        icon="mdi:close"
        width="16"
        height="16"
      />
    </button>
  </div>
</template>

<style lang="scss" scoped>
@use 'sass:color';
@use '../../assets/scss/variables.scss' as *;

.search-field {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;

  &__icon {
    position: absolute;
    left: 12px;
    width: 18px;
    height: 18px;
    color: $black-200;
    opacity: 0.6;
    pointer-events: none;
  }

  &__input {
    width: 100%;
    height: 40px;
    padding: 0 36px 0 38px;
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

  &__clear {
    position: absolute;
    right: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    padding: 0;
    border: none;
    background: none;
    color: $black-200;
    cursor: pointer;
    opacity: 0.6;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 1;
    }
  }
}
</style>
