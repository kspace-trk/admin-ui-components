<script setup>
import { Icon } from "@iconify/vue";
defineProps({
  label: { type: String, required: true },
  modelValue: { type: String, required: false },
  type: { type: String, required: false },
  min: { type: String, required: false },
  max: { type: String, required: false },
  disabled: { type: Boolean, required: false }
});
const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="date-field">
    <label class="date-field__label">{{ label }}</label>
    <div class="date-field__wrapper">
      <input
        :type="type ?? 'date'"
        :value="modelValue"
        :min="min"
        :max="max"
        :disabled="disabled"
        class="date-field__input"
        @input="emit('update:modelValue', $event.target.value)"
      >
      <Icon
        icon="mdi:calendar-blank-outline"
        class="date-field__icon"
      />
    </div>
  </div>
</template>

<style scoped>
.date-field {
  position: relative;
  width: 100%;
}
.date-field__label {
  display: block;
  font-weight: 400;
  font-size: 12.8px;
  color: #363139;
  letter-spacing: 1.024px;
  margin-bottom: 8px;
  line-height: normal;
}
.date-field__wrapper {
  position: relative;
}
.date-field__input {
  position: relative;
  width: 100%;
  height: 40px;
  padding: 0 40px 0 16px;
  background-color: transparent;
  border: 1px solid #E0E0E0;
  border-radius: 1px;
  font-family: inherit;
  font-size: 14px;
  line-height: normal;
  color: #4B464E;
  outline: none;
  appearance: none;
  transition: all 0.2s ease;
}
.date-field__input:focus {
  border-color: #363139;
  box-shadow: 0 0 0 1px rgba(54, 49, 57, 0.1);
}
.date-field__input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.date-field__input::-webkit-calendar-picker-indicator {
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 100%;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: pointer;
}
.date-field__input:disabled::-webkit-calendar-picker-indicator {
  cursor: not-allowed;
}
.date-field__icon {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  color: #4B464E;
  opacity: 0.6;
  pointer-events: none;
}
@supports (-moz-appearance: none) {
  .date-field__icon {
    display: none;
  }
}
</style>
