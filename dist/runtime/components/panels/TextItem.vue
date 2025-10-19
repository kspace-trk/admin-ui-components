<script setup>
import { Icon } from "@iconify/vue";
const props = defineProps({
  text: { type: String, required: true },
  showCloseIcon: { type: Boolean, required: false },
  maxLines: { type: Number, required: false }
});
const emit = defineEmits(["close"]);
const handleClose = () => {
  emit("close");
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

<style scoped>
.text-item {
  background-color: #EBF1F4;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-radius: 6px;
  width: 100%;
}
.text-item__text {
  font-weight: 300;
  font-size: 12.8px;
  letter-spacing: 1.024px;
  color: #4B464E;
  margin: 0;
  flex: 1;
  margin-right: 8px;
  line-height: 1.4;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: pre-line;
  display: -webkit-box;
  -webkit-line-clamp: var(--max-lines);
  line-clamp: var(--max-lines);
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.text-item__text[style*="--max-lines: 1"] {
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  -webkit-line-clamp: unset;
  line-clamp: unset;
  -webkit-box-orient: unset;
}
.text-item__close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  cursor: pointer;
  color: #4B464E;
  flex-shrink: 0;
}
.text-item__close:hover {
  opacity: 0.7;
}
</style>
