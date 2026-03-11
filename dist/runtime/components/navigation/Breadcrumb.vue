<script setup>
defineProps({
  items: { type: Array, required: true }
});
const emit = defineEmits(["navigate"]);
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

<style scoped>
.breadcrumb {
  width: 100%;
}
.breadcrumb__list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0;
  list-style: none;
  margin: 0;
  padding: 0;
}
.breadcrumb__item {
  display: flex;
  align-items: center;
}
.breadcrumb__separator {
  margin: 0 8px;
  font-size: 13px;
  color: #4B464E;
  opacity: 0.4;
}
.breadcrumb__link {
  background: none;
  border: none;
  padding: 0;
  font-size: 13px;
  color: #4B464E;
  cursor: pointer;
  text-decoration: none;
  transition: color 0.2s ease;
}
.breadcrumb__link:hover {
  color: #363139;
  text-decoration: underline;
}
.breadcrumb__current {
  font-size: 13px;
  color: #363139;
  font-weight: 400;
}
</style>
