<script setup>
import { watch } from "vue";
const { open, closeOnOverlay = true, width = "480px" } = defineProps({
  open: { type: Boolean, required: true },
  title: { type: String, required: false },
  width: { type: String, required: false },
  closeOnOverlay: { type: Boolean, required: false }
});
const emit = defineEmits(["close"]);
const handleOverlayClick = () => {
  if (closeOnOverlay) {
    emit("close");
  }
};
const handleKeydown = (event) => {
  if (event.key === "Escape") {
    emit("close");
  }
};
watch(() => open, (isOpen) => {
  if (isOpen) {
    document.addEventListener("keydown", handleKeydown);
    document.body.style.overflow = "hidden";
  } else {
    document.removeEventListener("keydown", handleKeydown);
    document.body.style.overflow = "";
  }
});
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="open"
        class="modal"
      >
        <div
          class="modal__overlay"
          @click="handleOverlayClick"
        />
        <div
          class="modal__container"
          :style="{ maxWidth: width }"
        >
          <div
            v-if="title || $slots.header"
            class="modal__header"
          >
            <slot name="header">
              <h3 class="modal__title">
                {{ title }}
              </h3>
            </slot>
            <button
              class="modal__close"
              type="button"
              @click="emit('close')"
            >
              ✕
            </button>
          </div>
          <div class="modal__body">
            <slot />
          </div>
          <div
            v-if="$slots.footer"
            class="modal__footer"
          >
            <slot name="footer" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 16px;
}
.modal__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}
.modal__container {
  position: relative;
  width: 100%;
  background-color: #FFFFFF;
  border-radius: 1px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
  max-height: calc(100vh - 32px);
  display: flex;
  flex-direction: column;
}
.modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid #E0E0E0;
}
.modal__title {
  font-size: 16px;
  font-weight: 500;
  color: #363139;
  margin: 0;
}
.modal__close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  padding: 0;
  border: none;
  background: none;
  font-size: 14px;
  color: #4B464E;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.2s ease;
}
.modal__close:hover {
  opacity: 1;
}
.modal__body {
  padding: 24px;
  overflow-y: auto;
}
.modal__footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  padding: 16px 24px;
  border-top: 1px solid #E0E0E0;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}

.modal-enter-active .modal__container,
.modal-leave-active .modal__container {
  transition: transform 0.2s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal__container {
  transform: translateY(8px);
}

.modal-leave-to .modal__container {
  transform: translateY(8px);
}
</style>
