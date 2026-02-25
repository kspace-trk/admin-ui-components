<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

interface Props {
  /** ラベル */
  label?: string
  /** 受け入れるファイルタイプ */
  accept?: string
  /** 複数ファイル選択 */
  multiple?: boolean
  /** 無効化 */
  disabled?: boolean
  /** 最大ファイルサイズ（バイト） */
  maxSize?: number
}

const { label, accept, multiple = false, disabled = false, maxSize } = defineProps<Props>()

const emit = defineEmits<{
  change: [files: File[]]
  error: [message: string]
}>()

const inputRef = ref<HTMLInputElement | null>(null)
const isDragging = ref(false)

const handleFiles = (fileList: FileList | null): void => {
  if (!fileList || fileList.length === 0) return

  const files = Array.from(fileList)

  if (maxSize) {
    const oversized = files.find(f => f.size > maxSize)
    if (oversized) {
      const maxMB = (maxSize / 1024 / 1024).toFixed(1)
      emit('error', `ファイルサイズが上限（${maxMB}MB）を超えています`)
      return
    }
  }

  emit('change', files)
}

const handleDrop = (event: DragEvent): void => {
  isDragging.value = false
  if (disabled) return
  handleFiles(event.dataTransfer?.files ?? null)
}

const handleClick = (): void => {
  if (disabled) return
  inputRef.value?.click()
}
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
        'file-upload__dropzone--disabled': disabled,
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
      @change="handleFiles(($event.target as HTMLInputElement).files)"
    >
  </div>
</template>

<style lang="scss" scoped>
@use 'sass:color';
@use '../../assets/scss/variables.scss' as *;

.file-upload {
  width: 100%;

  &__label {
    display: block;
    font-weight: 400;
    font-size: 12.8px;
    color: $black-100;
    letter-spacing: 1.024px;
    margin-bottom: 8px;
    line-height: normal;
  }

  &__dropzone {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 32px 16px;
    border: 1px dashed $black-400;
    border-radius: 1px;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      border-color: $black-200;
    }

    &--dragging {
      border-color: $black-100;
      background-color: rgba($black-100, 0.03);
    }

    &--disabled {
      opacity: 0.5;
      cursor: not-allowed;

      &:hover {
        border-color: $black-400;
      }
    }
  }

  &__icon {
    width: 32px;
    height: 32px;
    color: $black-200;
    opacity: 0.6;
  }

  &__text {
    font-size: 13px;
    color: $black-200;
    text-align: center;
    line-height: 1.6;
    margin: 0;
  }

  &__link {
    color: $black-100;
    text-decoration: underline;
  }

  &__input {
    display: none;
  }
}
</style>
