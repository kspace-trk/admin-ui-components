<script setup>
import { computed } from "vue";
const { variant = "default" } = defineProps({
  text: { type: String, required: true },
  variant: { type: String, required: false }
});
const badgeClass = computed(() => {
  return ["badge", `badge--${variant}`].join(" ");
});
</script>

<template>
  <span :class="badgeClass">{{ text }}</span>
</template>

<style scoped>
.badge {
  display: inline-flex;
  align-items: center;
  padding: 2px 10px;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  border-radius: 1px;
  white-space: nowrap;
  letter-spacing: 0.5px;
}
.badge--default {
  background-color: #F7F7F7;
  color: #4B464E;
  border: 1px solid #E0E0E0;
}
.badge--success {
  background-color: #f0f9f0;
  color: #2d6a2e;
  border: 1px solid #c8e6c9;
}
.badge--warning {
  background-color: #fff8e1;
  color: #8d6e00;
  border: 1px solid #ffe082;
}
.badge--danger {
  background-color: #fce4ec;
  color: #c62828;
  border: 1px solid #ef9a9a;
}
.badge--info {
  background-color: #e3f2fd;
  color: #1565c0;
  border: 1px solid #90caf9;
}
</style>
