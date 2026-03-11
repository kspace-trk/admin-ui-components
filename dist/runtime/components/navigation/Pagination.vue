<script setup>
import { computed } from "vue";
const { currentPage, totalPages, siblingCount = 1 } = defineProps({
  currentPage: { type: Number, required: true },
  totalPages: { type: Number, required: true },
  siblingCount: { type: Number, required: false }
});
const emit = defineEmits(["update:currentPage"]);
const pages = computed(() => {
  const items = [];
  const left = Math.max(2, currentPage - siblingCount);
  const right = Math.min(totalPages - 1, currentPage + siblingCount);
  items.push(1);
  if (left > 2) {
    items.push("...");
  }
  for (let i = left; i <= right; i++) {
    items.push(i);
  }
  if (right < totalPages - 1) {
    items.push("...");
  }
  if (totalPages > 1) {
    items.push(totalPages);
  }
  return items;
});
const goTo = (page) => {
  if (page >= 1 && page <= totalPages && page !== currentPage) {
    emit("update:currentPage", page);
  }
};
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

<style scoped>
.pagination {
  display: flex;
  align-items: center;
  gap: 4px;
}
.pagination__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  padding: 0 6px;
  border: 1px solid #E0E0E0;
  border-radius: 1px;
  background-color: transparent;
  font-size: 13px;
  color: #4B464E;
  cursor: pointer;
  transition: all 0.2s ease;
}
.pagination__btn:hover:not(:disabled):not(.pagination__btn--active) {
  border-color: #363139;
  color: #363139;
}
.pagination__btn--active {
  background-color: #363139;
  border-color: #363139;
  color: #FFFFFF;
}
.pagination__btn--prev, .pagination__btn--next {
  font-size: 18px;
  font-weight: 300;
}
.pagination__btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
.pagination__ellipsis {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  font-size: 13px;
  color: #4B464E;
  opacity: 0.6;
}
</style>
