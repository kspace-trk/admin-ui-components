<script setup>
defineProps({
  label: { type: String, required: true },
  placeholder: { type: String, required: false },
  modelValue: { type: String, required: false },
  type: { type: String, required: false }
});
const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="input-field">
    <label class="input-field__label">{{ label }}</label>
    <input
      :type="type ?? 'text'"
      :value="modelValue"
      :placeholder="placeholder"
      class="input-field__input"
      @input="emit('update:modelValue', $event.target.value)"
    >
  </div>
</template>

<style scoped>
.input-field {
  position: relative;
  width: 100%;
}
.input-field__label {
  display: block;
  font-weight: 400;
  font-size: 12.8px;
  color: #363139;
  letter-spacing: 1.024px;
  margin-bottom: 8px;
  line-height: normal;
}
.input-field__input {
  width: 100%;
  height: 40px;
  padding: 0 16px;
  background-color: transparent;
  border: 1px solid #E0E0E0;
  border-radius: 1px;
  font-size: 14px;
  color: #4B464E;
  outline: none;
  transition: all 0.2s ease;
}
.input-field__input::placeholder {
  color: #4B464E;
  opacity: 0.6;
}
.input-field__input:focus {
  border-color: #363139;
  box-shadow: 0 0 0 1px rgba(54, 49, 57, 0.1);
}
</style>
