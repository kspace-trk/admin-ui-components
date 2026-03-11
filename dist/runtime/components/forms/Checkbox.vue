<script setup>
defineProps({
  label: { type: String, required: false },
  modelValue: { type: Boolean, required: false },
  disabled: { type: Boolean, required: false }
});
const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <label
    class="checkbox"
    :class="{ 'checkbox--disabled': disabled }"
  >
    <input
      type="checkbox"
      :checked="modelValue"
      :disabled="disabled"
      class="checkbox__input"
      @change="emit('update:modelValue', $event.target.checked)"
    >
    <span class="checkbox__box">
      <svg
        v-if="modelValue"
        class="checkbox__icon"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M3.5 8L6.5 11L12.5 5"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </span>
    <span
      v-if="label"
      class="checkbox__label"
    >{{ label }}</span>
  </label>
</template>

<style scoped>
.checkbox {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
}
.checkbox--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.checkbox__input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
}
.checkbox__box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border: 1px solid #E0E0E0;
  border-radius: 1px;
  background-color: transparent;
  transition: all 0.2s ease;
  flex-shrink: 0;
}
.checkbox__input:checked + .checkbox__box {
  background-color: #363139;
  border-color: #363139;
}
.checkbox__input:focus-visible + .checkbox__box {
  box-shadow: 0 0 0 2px rgba(54, 49, 57, 0.2);
}
.checkbox__icon {
  width: 14px;
  height: 14px;
  color: #FFFFFF;
}
.checkbox__label {
  font-size: 14px;
  color: #4B464E;
  line-height: normal;
}
</style>
