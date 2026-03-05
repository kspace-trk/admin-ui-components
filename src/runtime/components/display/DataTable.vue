<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { Icon } from '@iconify/vue'
import { useSortable } from '@vueuse/integrations/useSortable'

export interface DataTableColumn {
  /** カラムのキー */
  key: string
  /** ヘッダーラベル */
  label: string
  /** 幅 */
  width?: string
  /** テキストの配置 */
  align?: 'left' | 'center' | 'right'
  /** ソート可能 */
  sortable?: boolean
}

interface Props {
  /** カラム定義 */
  columns: DataTableColumn[]
  /** 行データ */
  rows: Record<string, unknown>[]
  /** ローディング状態 */
  loading?: boolean
  /** データなし時のメッセージ */
  emptyMessage?: string
  /** ソート中のカラムキー */
  sortKey?: string
  /** ソート方向 */
  sortOrder?: 'asc' | 'desc'
  /** 行クリックを有効にする（cursor: pointer とホバー効果） */
  clickable?: boolean
  /** ドラッグ並び替えを有効にする */
  draggable?: boolean
  /** 各行を識別するキー（ドラッグ後の順序追跡用） */
  rowKey?: string
}

const props = defineProps<Props>()

const {
  columns,
  rows,
  loading = false,
  emptyMessage = 'データがありません',
  sortKey,
  sortOrder = 'asc',
  clickable = true,
  draggable = false,
  rowKey = 'id',
} = props

const emit = defineEmits<{
  sort: [key: string]
  rowClick: [row: Record<string, unknown>, index: number]
  reorder: [payload: { oldIndex: number; newIndex: number }]
}>()

const tbodyRef = ref<HTMLElement | null>(null)

const { start, stop } = useSortable(tbodyRef, rows, {
  handle: '.data-table__drag-handle',
  animation: 150,
  ghostClass: 'data-table__row--ghost',
  chosenClass: 'data-table__row--chosen',
  onEnd: (evt) => {
    if (evt.oldIndex !== undefined && evt.newIndex !== undefined) {
      emit('reorder', {
        oldIndex: evt.oldIndex,
        newIndex: evt.newIndex,
      })
    }
  },
})

if (!props.draggable) {
  stop()
}

watch(() => props.draggable, (val) => {
  if (val) {
    start()
  } else {
    stop()
  }
})

const cellStyle = (column: DataTableColumn) => {
  const style: Record<string, string> = {}
  if (column.width) style.width = column.width
  if (column.align) style.textAlign = column.align
  return style
}

const totalColumns = computed(() => {
  return columns.length + (props.draggable ? 1 : 0)
})

const sortIcon = computed(() => {
  return sortOrder === 'asc' ? '▲' : '▼'
})
</script>

<template>
  <div class="data-table">
    <div class="data-table__wrapper">
      <table class="data-table__table">
        <thead>
          <tr>
            <th v-if="draggable" class="data-table__th data-table__th--drag" style="width: 40px;" />
            <th
              v-for="column in columns"
              :key="column.key"
              :style="cellStyle(column)"
              class="data-table__th"
              :class="{ 'data-table__th--sortable': column.sortable }"
              @click="column.sortable ? emit('sort', column.key) : undefined"
            >
              <span class="data-table__th-content">
                {{ column.label }}
                <span
                  v-if="column.sortable && sortKey === column.key"
                  class="data-table__sort-icon"
                >{{ sortIcon }}</span>
              </span>
            </th>
          </tr>
        </thead>
        <tbody ref="tbodyRef">
          <tr
            v-if="loading"
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
            v-else-if="rows.length === 0"
            class="data-table__empty-row"
          >
            <td :colspan="totalColumns">
              <div class="data-table__empty">
                {{ emptyMessage }}
              </div>
            </td>
          </tr>
          <template v-else>
            <tr
              v-for="(row, index) in rows"
              :key="rowKey ? (row[rowKey] as string | number) : index"
              class="data-table__row"
              :class="{ 'data-table__row--clickable': clickable }"
              @click="clickable ? emit('rowClick', row, index) : undefined"
            >
              <td v-if="draggable" class="data-table__td data-table__td--drag">
                <span class="data-table__drag-handle">
                  <Icon icon="mdi:drag" width="18" height="18" />
                </span>
              </td>
              <td
                v-for="column in columns"
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
                  {{ row[column.key] ?? '' }}
                </slot>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use 'sass:color';
@use '../../assets/scss/variables.scss' as *;

.data-table {
  width: 100%;

  &__wrapper {
    width: 100%;
    overflow-x: auto;
  }

  &__table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
  }

  &__th {
    padding: 12px 16px;
    font-size: 12.8px;
    font-weight: 500;
    color: $black-100;
    text-align: left;
    background-color: $white-200;
    border-bottom: 1px solid $black-400;
    white-space: nowrap;
    letter-spacing: 0.5px;
    text-transform: uppercase;

    &--sortable {
      cursor: pointer;
      user-select: none;

      &:hover {
        background-color: color.adjust($white-200, $lightness: -3%);
      }
    }
  }

  &__th-content {
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }

  &__sort-icon {
    font-size: 10px;
    color: $black-200;
  }

  &__row {
    transition: background-color 0.15s ease;

    &--clickable {
      cursor: pointer;

      &:hover {
        background-color: rgba($black-100, 0.02);
      }
    }

    &--ghost {
      opacity: 0.4;
      background: #f0f0ff;
    }

    &--chosen {
      background: #fafafa;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    &:not(:last-child) {
      border-bottom: 1px solid $black-400;
    }
  }

  &__th--drag,
  &__td--drag {
    width: 40px;
    text-align: center;
    padding: 0 4px;
  }

  &__drag-handle {
    cursor: grab;
    color: #999;
    display: inline-flex;
    align-items: center;

    &:active {
      cursor: grabbing;
    }
  }

  &__td {
    padding: 12px 16px;
    font-size: 14px;
    color: $black-200;
    vertical-align: middle;
  }

  &__loading-row td,
  &__empty-row td {
    border-bottom: none;
  }

  &__loading,
  &__empty {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 40px 16px;
    font-size: 14px;
    color: $black-200;
    opacity: 0.6;
  }

  &__spinner {
    width: 16px;
    height: 16px;
    border: 2px solid transparent;
    border-top: 2px solid $black-200;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
