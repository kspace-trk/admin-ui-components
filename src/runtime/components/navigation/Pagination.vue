<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  /** 現在のページ（1始まり） */
  currentPage: number
  /** 総ページ数 */
  totalPages: number
  /** 前後に表示するページ数 */
  siblingCount?: number
}

const { currentPage, totalPages, siblingCount = 1 } = defineProps<Props>()

const emit = defineEmits<{
  'update:currentPage': [page: number]
}>()

const pages = computed(() => {
  const items: (number | '...')[] = []

  const left = Math.max(2, currentPage - siblingCount)
  const right = Math.min(totalPages - 1, currentPage + siblingCount)

  // 常に1ページ目を表示
  items.push(1)

  if (left > 2) {
    items.push('...')
  }

  for (let i = left; i <= right; i++) {
    items.push(i)
  }

  if (right < totalPages - 1) {
    items.push('...')
  }

  // 常に最終ページを表示（1ページだけの場合は除く）
  if (totalPages > 1) {
    items.push(totalPages)
  }

  return items
})

const goTo = (page: number): void => {
  if (page >= 1 && page <= totalPages && page !== currentPage) {
    emit('update:currentPage', page)
  }
}
</script>

<template>
  <nav
    v-if="totalPages > 1"
    class="pagination"
  >
    <button
      class="pagination__btn pagination__btn--prev"
      :disabled="currentPage <= 1"
      @click="goTo(currentPage - 1)"
    >
      ‹
    </button>

    <template
      v-for="(page, index) in pages"
      :key="index"
    >
      <span
        v-if="page === '...'"
        class="pagination__ellipsis"
      >…</span>
      <button
        v-else
        class="pagination__btn"
        :class="{ 'pagination__btn--active': page === currentPage }"
        @click="goTo(page)"
      >
        {{ page }}
      </button>
    </template>

    <button
      class="pagination__btn pagination__btn--next"
      :disabled="currentPage >= totalPages"
      @click="goTo(currentPage + 1)"
    >
      ›
    </button>
  </nav>
</template>

<style lang="scss" scoped>
@use 'sass:color';
@use '../../assets/scss/variables.scss' as *;

.pagination {
  display: flex;
  align-items: center;
  gap: 4px;

  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 32px;
    height: 32px;
    padding: 0 6px;
    border: 1px solid $black-400;
    border-radius: 1px;
    background-color: transparent;
    font-size: 13px;
    color: $black-200;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover:not(:disabled):not(.pagination__btn--active) {
      border-color: $black-100;
      color: $black-100;
    }

    &--active {
      background-color: $black-100;
      border-color: $black-100;
      color: $white-100;
    }

    &--prev,
    &--next {
      font-size: 18px;
      font-weight: 300;
    }

    &:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
  }

  &__ellipsis {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 32px;
    height: 32px;
    font-size: 13px;
    color: $black-200;
    opacity: 0.6;
  }
}
</style>
