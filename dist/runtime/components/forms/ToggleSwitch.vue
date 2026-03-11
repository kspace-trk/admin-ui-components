<script setup>
defineProps({
  label: { type: String, required: false },
  modelValue: { type: Boolean, required: false },
  disabled: { type: Boolean, required: false }
});
const emit = defineEmits(["update:modelValue"]);
const toggle = (event) => {
  emit("update:modelValue", event.target.checked);
};
</script>

<template>
  <label
    class="toggle-switch"
    :class="{ 'toggle-switch--disabled': disabled }"
  >
    <input
      type="checkbox"
      :checked="modelValue"
      :disabled="disabled"
      class="toggle-switch__input"
      @change="toggle"
    >
    <span class="toggle-switch__track">
      <span class="toggle-switch__thumb" />
    </span>
    <span
      v-if="label"
      class="toggle-switch__label"
    >{{ label }}</span>
  </label>
</template>

<style scoped>
.toggle-switch {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
}
.toggle-switch--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.toggle-switch__input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
}
.toggle-switch__track {
  position: relative;
  width: 40px;
  height: 22px;
  background-color: #E0E0E0;
  border-radius: 11px;
  transition: background-color 0.2s ease;
  flex-shrink: 0;
}
.toggle-switch__input:checked + .toggle-switch__track {
  background-color: #363139;
}
.toggle-switch__input:focus-visible + .toggle-switch__track {
  box-shadow: 0 0 0 2px rgba(54, 49, 57, 0.2);
}
.toggle-switch__thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 18px;
  height: 18px;
  background-color: #FFFFFF;
  border-radius: 50%;
  transition: transform 0.2s ease;
}
.toggle-switch__input:checked + .toggle-switch__track .toggle-switch__thumb {
  transform: translateX(18px);
}
.toggle-switch__label {
  font-size: 14px;
  color: #4B464E;
  line-height: normal;
}
</style>
