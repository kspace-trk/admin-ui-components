<script setup>
defineProps({
  label: { type: String, required: true },
  options: { type: Array, required: true },
  modelValue: { type: [String, Number], required: false },
  placeholder: { type: String, required: false },
  disabled: { type: Boolean, required: false }
});
const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="select-field">
    <label class="select-field__label">{{ label }}</label>
    <div class="select-field__wrapper">
      <select
        :value="modelValue"
        :disabled="disabled"
        class="select-field__select"
        :class="{ 'select-field__select--placeholder': !modelValue && modelValue !== 0 }"
        @change="emit('update:modelValue', $event.target.value)"
      >
        <option
          v-if="placeholder"
          value=""
          disabled
          selected
        >
          {{ placeholder }}
        </option>
        <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
          :disabled="option.disabled"
        >
          {{ option.label }}
        </option>
      </select>
      <span class="select-field__arrow" />
    </div>
  </div>
</template>

<style scoped>
.select-field {
  position: relative;
  width: 100%;
}
.select-field__label {
  display: block;
  font-weight: 400;
  font-size: 12.8px;
  color: #363139;
  letter-spacing: 1.024px;
  margin-bottom: 8px;
  line-height: normal;
}
.select-field__wrapper {
  position: relative;
}
.select-field__select {
  width: 100%;
  height: 40px;
  padding: 0 36px 0 16px;
  background-color: transparent;
  border: 1px solid #E0E0E0;
  border-radius: 1px;
  font-size: 14px;
  color: #4B464E;
  outline: none;
  cursor: pointer;
  appearance: none;
  transition: all 0.2s ease;
}
.select-field__select--placeholder {
  color: #4B464E;
  opacity: 0.6;
}
.select-field__select:focus {
  border-color: #363139;
  box-shadow: 0 0 0 1px rgba(54, 49, 57, 0.1);
}
.select-field__select:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background-color: #F7F7F7;
}
.select-field__arrow {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #4B464E;
  pointer-events: none;
}
</style>
