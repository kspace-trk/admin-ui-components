<script setup>
defineProps({
  tabs: { type: Array, required: true },
  modelValue: { type: String, required: true }
});
const emit = defineEmits(["update:modelValue"]);
const selectTab = (tab) => {
  if (!tab.disabled) {
    emit("update:modelValue", tab.key);
  }
};
</script>

<template>
  <div class="tabs">
    <div class="tabs__list">
      <button
        v-for="tab in tabs"
        :key="tab.key"
        class="tabs__tab"
        :class="{
  'tabs__tab--active': modelValue === tab.key,
  'tabs__tab--disabled': tab.disabled
}"
        :disabled="tab.disabled"
        @click="selectTab(tab)"
      >
        {{ tab.label }}
      </button>
    </div>
    <div class="tabs__content">
      <slot :name="modelValue" />
    </div>
  </div>
</template>

<style scoped>
.tabs {
  width: 100%;
}
.tabs__list {
  display: flex;
  border-bottom: 1px solid #E0E0E0;
  gap: 0;
}
.tabs__tab {
  padding: 10px 20px;
  border: none;
  border-bottom: 2px solid transparent;
  background: none;
  font-size: 14px;
  font-weight: 400;
  color: #4B464E;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-bottom: -1px;
  white-space: nowrap;
}
.tabs__tab:hover:not(:disabled) {
  color: #363139;
}
.tabs__tab--active {
  color: #363139;
  border-bottom-color: #363139;
  font-weight: 500;
}
.tabs__tab--disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
.tabs__content {
  padding-top: 20px;
}
</style>
