<script setup>
import { computed } from "vue";
const { type = "submit", text = "", disabled = false, loading = false, loadingText = "\u51E6\u7406\u4E2D..." } = defineProps({
  type: { type: String, required: false },
  text: { type: String, required: false },
  disabled: { type: Boolean, required: false },
  loading: { type: Boolean, required: false },
  loadingText: { type: String, required: false }
});
const emit = defineEmits(["click"]);
const handleClick = () => {
  if (!disabled && !loading) {
    emit("click");
  }
};
const buttonText = computed(() => {
  if (loading) return loadingText;
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
  border-radius: 1px;
  font-size: 14px;
  font-weight: 300;
  cursor: pointer;
  transition: background-color 0.5s cubic-bezier(0.25, 0.1, 0.25, 1), color 0.5s cubic-bezier(0.25, 0.1, 0.25, 1), border-color 0.5s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.main-button:focus {
  box-shadow: 0 0 0 1px #4B464E;
}

/* 送信ボタンのスタイル */
.main-button--submit {
  background-color: #363139;
  color: white;
}

.main-button--submit:hover:not(:disabled) {
  opacity: 0.75;
}

.main-button--submit:active:not(:disabled) {
  opacity: 0.6;
}

/* キャンセルボタンのスタイル */
.main-button--cancel {
  background-color: transparent;
  color: #363139;
  border: 1px solid #E0E0E0;
}

.main-button--cancel:hover:not(:disabled) {
  border-color: #363139;
}

.main-button--cancel:active:not(:disabled) {
  border-color: #363139;
  opacity: 0.6;
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
