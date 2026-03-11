<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
const { label, accept, multiple = false, disabled = false, maxSize } = defineProps({
  label: { type: String, required: false },
  accept: { type: String, required: false },
  multiple: { type: Boolean, required: false },
  disabled: { type: Boolean, required: false },
  maxSize: { type: Number, required: false }
});
const emit = defineEmits(["change", "error"]);
const inputRef = ref(null);
const isDragging = ref(false);
const handleFiles = (fileList) => {
  if (!fileList || fileList.length === 0) return;
  const files = Array.from(fileList);
  if (maxSize) {
    const oversized = files.find((f) => f.size > maxSize);
    if (oversized) {
      const maxMB = (maxSize / 1024 / 1024).toFixed(1);
      emit("error", `\u30D5\u30A1\u30A4\u30EB\u30B5\u30A4\u30BA\u304C\u4E0A\u9650\uFF08${maxMB}MB\uFF09\u3092\u8D85\u3048\u3066\u3044\u307E\u3059`);
      return;
    }
  }
  emit("change", files);
};
const handleDrop = (event) => {
  isDragging.value = false;
  if (disabled) return;
  handleFiles(event.dataTransfer?.files ?? null);
};
const handleClick = () => {
  if (disabled) return;
  inputRef.value?.click();
};
</script>

<template>
  <div class="file-upload">
    <label
      v-if="label"
      class="file-upload__label"
    >{{ label }}</label>
    <div
      class="file-upload__dropzone"
      :class="{
  'file-upload__dropzone--dragging': isDragging,
  'file-upload__dropzone--disabled': disabled
}"
      @click="handleClick"
      @dragover.prevent="isDragging = true"
      @dragleave="isDragging = false"
      @drop.prevent="handleDrop"
    >
      <Icon
        icon="mdi:cloud-upload-outline"
        class="file-upload__icon"
      />
      <p class="file-upload__text">
        ファイルをドラッグ&ドロップ<br>または<span class="file-upload__link">クリックして選択</span>
      </p>
    </div>
    <input
      ref="inputRef"
      type="file"
      :accept="accept"
      :multiple="multiple"
      :disabled="disabled"
      class="file-upload__input"
      @change="handleFiles($event.target.files)"
    >
  </div>
</template>

<style scoped>
.file-upload {
  width: 100%;
}
.file-upload__label {
  display: block;
  font-weight: 400;
  font-size: 12.8px;
  color: #363139;
  letter-spacing: 1.024px;
  margin-bottom: 8px;
  line-height: normal;
}
.file-upload__dropzone {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 32px 16px;
  border: 1px dashed #E0E0E0;
  border-radius: 1px;
  cursor: pointer;
  transition: all 0.2s ease;
}
.file-upload__dropzone:hover {
  border-color: #4B464E;
}
.file-upload__dropzone--dragging {
  border-color: #363139;
  background-color: rgba(54, 49, 57, 0.03);
}
.file-upload__dropzone--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.file-upload__dropzone--disabled:hover {
  border-color: #E0E0E0;
}
.file-upload__icon {
  width: 32px;
  height: 32px;
  color: #4B464E;
  opacity: 0.6;
}
.file-upload__text {
  font-size: 13px;
  color: #4B464E;
  text-align: center;
  line-height: 1.6;
  margin: 0;
}
.file-upload__link {
  color: #363139;
  text-decoration: underline;
}
.file-upload__input {
  display: none;
}
</style>
