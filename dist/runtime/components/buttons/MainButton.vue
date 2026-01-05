<script setup>
import { computed } from "vue";
const { type = "submit", text = "", disabled = false, loading = false } = defineProps({
  type: { type: String, required: false },
  text: { type: String, required: false },
  disabled: { type: Boolean, required: false },
  loading: { type: Boolean, required: false }
});
const emit = defineEmits(["click"]);
const handleClick = () => {
  if (!disabled && !loading) {
    emit("click");
  }
};
const buttonText = computed(() => {
  if (loading) return "\u51E6\u7406\u4E2D...";
  if (text) return text;
  return type === "submit" ? "\u9001\u4FE1" : "\u30AD\u30E3\u30F3\u30BB\u30EB";
});
const buttonClass = computed(() => {
  const baseClass = "main-button";
  const typeClass = type === "submit" ? "main-button--submit" : "main-button--cancel";
  const disabledClass = disabled || loading ? "main-button--disabled" : "";
  return [baseClass, typeClass, disabledClass].filter(Boolean).join(" ");
});
</script>

<template>
  <button
    :class="buttonClass"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span
      v-if="loading"
      class="spinner"
    />
    {{ buttonText }}
  </button>
</template>

<style scoped>
@charset "UTF-8";
.main-button {
  width: 151px;
  height: 41px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.main-button:focus {
  box-shadow: 0 0 0 2px rgb(39.375, 69.75, 203.625);
}

/* 送信ボタンのスタイル */
.main-button--submit {
  background-color: #4A65DC;
  color: white;
}

.main-button--submit:hover:not(:disabled) {
  background-color: rgb(39.375, 69.75, 203.625);
}

.main-button--submit:active:not(:disabled) {
  background-color: rgb(39.375, 69.75, 203.625);
}

/* キャンセルボタンのスタイル */
.main-button--cancel {
  background-color: #D9D0DF;
  color: #363139;
  border: 1px solid #D9D0DF;
}

.main-button--cancel:hover:not(:disabled) {
  background-color: rgb(241.5316455696, 238.3417721519, 243.6582278481);
}

.main-button--cancel:active:not(:disabled) {
  background-color: #D9D0DF;
}

/* 無効化状態 */
.main-button--disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* スピナーアイコン */
.spinner {
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
