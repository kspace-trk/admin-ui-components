<script setup>
defineProps({
  label: { type: String, required: true },
  placeholder: { type: String, required: false },
  modelValue: { type: String, required: false },
  rows: { type: Number, required: false },
  readonly: { type: Boolean, required: false }
});
const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="textarea-field">
    <label class="textarea-field__label">{{ label }}</label>
    <textarea
      :value="modelValue"
      :placeholder="placeholder"
      :rows="rows || 4"
      :readonly="readonly"
      :class="['textarea-field__input', { 'textarea-field__input--readonly': readonly }]"
      @input="emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<style scoped>
.textarea-field {
  position: relative;
  width: 100%;
}
.textarea-field__label {
  display: block;
  font-weight: 400;
  font-size: 12.8px;
  color: #363139;
  letter-spacing: 1.024px;
  margin-bottom: 8px;
  line-height: normal;
}
.textarea-field__input {
  width: 100%;
  min-height: 80px;
  padding: 12px 16px;
  background-color: transparent;
  border: 1px solid #E0E0E0;
  border-radius: 1px;
  font-size: 14px;
  color: #4B464E;
  outline: none;
  transition: all 0.2s ease;
  resize: vertical;
  font-family: inherit;
  line-height: 1.4;
}
.textarea-field__input::placeholder {
  color: #4B464E;
  opacity: 0.6;
}
.textarea-field__input:focus {
  border-color: #363139;
  box-shadow: 0 0 0 1px rgba(54, 49, 57, 0.1);
}
.textarea-field__input--readonly {
  background-color: #F7F7F7;
  color: rgb(87.9222972973, 82.0608108108, 91.4391891892);
  cursor: default;
  resize: none;
}
.textarea-field__input--readonly:focus {
  background-color: #F7F7F7;
  box-shadow: none;
}
.textarea-field__input--readonly::placeholder {
  color: rgb(151.9121621622, 144.8513513514, 156.1486486486);
  opacity: 0.8;
}
</style>
