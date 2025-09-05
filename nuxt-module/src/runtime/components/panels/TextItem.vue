<script setup lang="ts">
import { Icon } from '@iconify/vue';

interface Props {
  text: string;
  showCloseIcon?: boolean;
  maxLines?: number;
}

interface Emits {
  close: [];
}

const props = defineProps<Props>();

const emit = defineEmits<Emits>();

const handleClose = (): void => {
  emit('close');
};
</script>

<template>
  <div class="text-item">
    <p 
      class="text-item__text" 
      :style="{ '--max-lines': props.maxLines || 1 }"
    >
      {{ text }}
    </p>
    <div
      v-if="showCloseIcon"
      class="text-item__close"
      @click="handleClose"
    >
      <Icon
        icon="mingcute:close-fill"
        size="14"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '~/assets/scss/variables.scss' as *;
.text-item {
  background-color: $white-200;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-radius: 6px;
  width: 100%;

  &__text {
    font-weight: 500;
    font-size: 12.8px;
    letter-spacing: 1.024px;
    color: $black-200;
    margin: 0;
    flex: 1;
    margin-right: 8px;
    line-height: 1.4;
    word-wrap: break-word;
    overflow-wrap: break-word;
    white-space: pre-line;
    
    // CSS Line Clampを使用して最大行数を制限
    display: -webkit-box;
    -webkit-line-clamp: var(--max-lines);
    line-clamp: var(--max-lines);
    -webkit-box-orient: vertical;
    overflow: hidden;
    
    // 1行の場合は従来通りの省略表示
    &[style*="--max-lines: 1"] {
      display: block;
      white-space: nowrap;
      text-overflow: ellipsis;
      -webkit-line-clamp: unset;
      line-clamp: unset;
      -webkit-box-orient: unset;
    }
  }

    &__close {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 14px;
    height: 14px;
    cursor: pointer;
    color: $black-200;
    flex-shrink: 0;

    &:hover {
      opacity: 0.7;
    }
  }
}
</style>
