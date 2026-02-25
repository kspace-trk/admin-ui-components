<script setup>
import { Icon } from "@iconify/vue";
defineProps({
  placeholder: { type: String, required: false },
  modelValue: { type: String, required: false }
});
const emit = defineEmits(["update:modelValue", "search"]);
const handleKeydown = (event) => {
  if (event.key === "Enter") {
    emit("search", event.target.value);
  }
};
</script>

<template>
  <div class="search-field">
    <Icon
      icon="mdi:magnify"
      class="search-field__icon"
    />
    <input
      type="text"
      :value="modelValue"
      :placeholder="placeholder ?? '\u691C\u7D22...'"
      class="search-field__input"
      @input="emit('update:modelValue', $event.target.value)"
      @keydown="handleKeydown"
    >
    <button
      v-if="modelValue"
      class="search-field__clear"
      type="button"
      @click="emit('update:modelValue', '');
  emit('search', '')"
    >
      <Icon
        icon="mdi:close"
        width="16"
        height="16"
      />
    </button>
  </div>
</template>

<style scoped>
.search-field {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
}
.search-field__icon {
  position: absolute;
  left: 12px;
  width: 18px;
  height: 18px;
  color: #4B464E;
  opacity: 0.6;
  pointer-events: none;
}
.search-field__input {
  width: 100%;
  height: 40px;
  padding: 0 36px 0 38px;
  background-color: transparent;
  border: 1px solid #E0E0E0;
  border-radius: 1px;
  font-size: 14px;
  color: #4B464E;
  outline: none;
  transition: all 0.2s ease;
}
.search-field__input::placeholder {
  color: #4B464E;
  opacity: 0.6;
}
.search-field__input:focus {
  border-color: #363139;
  box-shadow: 0 0 0 1px rgba(54, 49, 57, 0.1);
}
.search-field__clear {
  position: absolute;
  right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;
  border: none;
  background: none;
  color: #4B464E;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.2s ease;
}
.search-field__clear:hover {
  opacity: 1;
}
</style>
