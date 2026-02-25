<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  /** 表示テキスト */
  text: string
  /** バリアント */
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info'
}

const { variant = 'default' } = defineProps<Props>()

const badgeClass = computed(() => {
  return ['badge', `badge--${variant}`].join(' ')
})
</script>

<template>
  <span :class="badgeClass">{{ text }}</span>
</template>

<style lang="scss" scoped>
@use 'sass:color';
@use '../../assets/scss/variables.scss' as *;

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

  &--default {
    background-color: $white-200;
    color: $black-200;
    border: 1px solid $black-400;
  }

  &--success {
    background-color: #f0f9f0;
    color: #2d6a2e;
    border: 1px solid #c8e6c9;
  }

  &--warning {
    background-color: #fff8e1;
    color: #8d6e00;
    border: 1px solid #ffe082;
  }

  &--danger {
    background-color: #fce4ec;
    color: #c62828;
    border: 1px solid #ef9a9a;
  }

  &--info {
    background-color: #e3f2fd;
    color: #1565c0;
    border: 1px solid #90caf9;
  }
}
</style>
