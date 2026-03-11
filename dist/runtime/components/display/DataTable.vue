<script setup>
import { computed, ref, toRef, watch } from "vue";
import { Icon } from "@iconify/vue";
import { useSortable } from "@vueuse/integrations/useSortable";
const props = defineProps({
  columns: { type: Array, required: true },
  rows: { type: Array, required: true },
  loading: { type: Boolean, required: false, default: false },
  emptyMessage: { type: String, required: false, default: "\u30C7\u30FC\u30BF\u304C\u3042\u308A\u307E\u305B\u3093" },
  sortKey: { type: String, required: false },
  sortOrder: { type: String, required: false, default: "asc" },
  clickable: { type: Boolean, required: false, default: true },
  draggable: { type: Boolean, required: false, default: false },
  rowKey: { type: String, required: false, default: "id" }
});
const emit = defineEmits(["sort", "rowClick", "reorder"]);
const tbodyRef = ref(null);
const rowsRef = toRef(props, "rows");
const { start, stop } = useSortable(tbodyRef, rowsRef, {
  handle: ".data-table__drag-handle",
  animation: 150,
  ghostClass: "data-table__row--ghost",
  chosenClass: "data-table__row--chosen",
  onEnd: (evt) => {
    if (evt.oldIndex !== void 0 && evt.newIndex !== void 0) {
      emit("reorder", {
        oldIndex: evt.oldIndex,
        newIndex: evt.newIndex
      });
    }
  }
});
if (!props.draggable) {
  stop();
}
watch(() => props.draggable, (val) => {
  if (val) {
    start();
  } else {
    stop();
  }
});
const cellStyle = (column) => {
  const style = {};
  if (column.width) style.width = column.width;
  if (column.align) style.textAlign = column.align;
  return style;
};
const totalColumns = computed(() => {
  return props.columns.length + (props.draggable ? 1 : 0);
});
const sortIcon = computed(() => {
  return props.sortOrder === "asc" ? "\u25B2" : "\u25BC";
});
</script>

<template>
  <div class="data-table">
    <div class="data-table__wrapper">
      <table class="data-table__table">
        <thead>
          <tr>
            <th
              v-if="props.draggable"
              class="data-table__th data-table__th--drag"
              style="width: 40px;"
            />
            <th
              v-for="column in props.columns"
              :key="column.key"
              :style="cellStyle(column)"
              class="data-table__th"
              :class="{ 'data-table__th--sortable': column.sortable }"
              @click="column.sortable ? emit('sort', column.key) : void 0"
            >
              <span class="data-table__th-content">
                {{ column.label }}
                <span
                  v-if="column.sortable && props.sortKey === column.key"
                  class="data-table__sort-icon"
                >{{ sortIcon }}</span>
              </span>
            </th>
          </tr>
        </thead>
        <tbody ref="tbodyRef">
          <tr
            v-if="props.loading"
            class="data-table__loading-row"
          >
            <td :colspan="totalColumns">
              <div class="data-table__loading">
                <span class="data-table__spinner" />
                読み込み中...
              </div>
            </td>
          </tr>
          <tr
            v-else-if="props.rows.length === 0"
            class="data-table__empty-row"
          >
            <td :colspan="totalColumns">
              <div class="data-table__empty">
                {{ props.emptyMessage }}
              </div>
            </td>
          </tr>
          <template v-else>
            <tr
              v-for="(row, index) in props.rows"
              :key="props.rowKey ? row[props.rowKey] : index"
              class="data-table__row"
              :class="{ 'data-table__row--clickable': props.clickable }"
              @click="props.clickable ? emit('rowClick', row, index) : void 0"
            >
              <td
                v-if="props.draggable"
                class="data-table__td data-table__td--drag"
              >
                <span class="data-table__drag-handle">
                  <Icon
                    icon="mdi:drag"
                    width="18"
                    height="18"
                  />
                </span>
              </td>
              <td
                v-for="column in props.columns"
                :key="column.key"
                :style="cellStyle(column)"
                class="data-table__td"
              >
                <slot
                  :name="`cell-${column.key}`"
                  :row="row"
                  :value="row[column.key]"
                  :index="index"
                >
                  {{ row[column.key] ?? "" }}
                </slot>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.data-table {
  width: 100%;
}
.data-table__wrapper {
  width: 100%;
  overflow-x: auto;
}
.data-table__table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
}
.data-table__th {
  padding: 12px 16px;
  font-size: 12.8px;
  font-weight: 500;
  color: #363139;
  text-align: left;
  background-color: #F7F7F7;
  border-bottom: 1px solid #E0E0E0;
  white-space: nowrap;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}
.data-table__th--sortable {
  cursor: pointer;
  user-select: none;
}
.data-table__th--sortable:hover {
  background-color: rgb(239.35, 239.35, 239.35);
}
.data-table__th-content {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}
.data-table__sort-icon {
  font-size: 10px;
  color: #4B464E;
}
.data-table__row {
  transition: background-color 0.15s ease;
}
.data-table__row--clickable {
  cursor: pointer;
}
.data-table__row--clickable:hover {
  background-color: rgba(54, 49, 57, 0.02);
}
.data-table__row--ghost {
  opacity: 0.4;
  background: #f0f0ff;
}
.data-table__row--chosen {
  background: #fafafa;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
.data-table__row:not(:last-child) {
  border-bottom: 1px solid #E0E0E0;
}
.data-table__th--drag, .data-table__td--drag {
  width: 40px;
  text-align: center;
  padding: 0 4px;
}
.data-table__drag-handle {
  cursor: grab;
  color: #999;
  display: inline-flex;
  align-items: center;
}
.data-table__drag-handle:active {
  cursor: grabbing;
}
.data-table__td {
  padding: 12px 16px;
  font-size: 14px;
  color: #4B464E;
  vertical-align: middle;
}
.data-table__loading-row td, .data-table__empty-row td {
  border-bottom: none;
}
.data-table__loading, .data-table__empty {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 40px 16px;
  font-size: 14px;
  color: #4B464E;
  opacity: 0.6;
}
.data-table__spinner {
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid #4B464E;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
