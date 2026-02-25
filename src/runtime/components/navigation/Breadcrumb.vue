<script setup lang="ts">
export interface BreadcrumbItem {
  /** 表示テキスト */
  label: string
  /** リンク先（未指定の場合はテキストのみ） */
  to?: string
}

defineProps<{
  /** パンくずアイテム */
  items: BreadcrumbItem[]
}>()

const emit = defineEmits<{
  'navigate': [item: BreadcrumbItem, index: number]
}>()
</script>

<template>
  <nav class="breadcrumb">
    <ol class="breadcrumb__list">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="breadcrumb__item"
      >
        <span
          v-if="index > 0"
          class="breadcrumb__separator"
        >/</span>
        <button
          v-if="item.to && index < items.length - 1"
          class="breadcrumb__link"
          @click="emit('navigate', item, index)"
        >
          {{ item.label }}
        </button>
        <span
          v-else
          class="breadcrumb__current"
        >{{ item.label }}</span>
      </li>
    </ol>
  </nav>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/variables.scss' as *;

.breadcrumb {
  width: 100%;

  &__list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &__item {
    display: flex;
    align-items: center;
  }

  &__separator {
    margin: 0 8px;
    font-size: 13px;
    color: $black-200;
    opacity: 0.4;
  }

  &__link {
    background: none;
    border: none;
    padding: 0;
    font-size: 13px;
    color: $black-200;
    cursor: pointer;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: $black-100;
      text-decoration: underline;
    }
  }

  &__current {
    font-size: 13px;
    color: $black-100;
    font-weight: 400;
  }
}
</style>
