<script setup lang="ts">
export interface TabItem {
  /** タブのキー */
  key: string
  /** 表示ラベル */
  label: string
  /** 無効化 */
  disabled?: boolean
}

defineProps<{
  /** タブ項目 */
  tabs: TabItem[]
  /** 現在のアクティブタブキー */
  modelValue: string
}>()

const emit = defineEmits<{
  'update:modelValue': [key: string]
}>()

const selectTab = (tab: TabItem): void => {
  if (!tab.disabled) {
    emit('update:modelValue', tab.key)
  }
}
</script>

<template>
  <div class="tabs">
    <div class="tabs__list">
      <button
        v-for="tab in tabs"
        :key="tab.key"
        class="tabs__tab"
        :class="{
          'tabs__tab--active': modelValue === tab.key,
          'tabs__tab--disabled': tab.disabled,
        }"
        :disabled="tab.disabled"
        @click="selectTab(tab)"
      >
        {{ tab.label }}
      </button>
    </div>
    <div class="tabs__content">
      <slot :name="modelValue" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/variables.scss' as *;

.tabs {
  width: 100%;

  &__list {
    display: flex;
    border-bottom: 1px solid $black-400;
    gap: 0;
  }

  &__tab {
    padding: 10px 20px;
    border: none;
    border-bottom: 2px solid transparent;
    background: none;
    font-size: 14px;
    font-weight: 400;
    color: $black-200;
    cursor: pointer;
    transition: all 0.2s ease;
    margin-bottom: -1px;
    white-space: nowrap;

    &:hover:not(:disabled) {
      color: $black-100;
    }

    &--active {
      color: $black-100;
      border-bottom-color: $black-100;
      font-weight: 500;
    }

    &--disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
  }

  &__content {
    padding-top: 20px;
  }
}
</style>
