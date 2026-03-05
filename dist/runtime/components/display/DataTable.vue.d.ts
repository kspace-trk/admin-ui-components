export interface DataTableColumn {
    /** カラムのキー */
    key: string;
    /** ヘッダーラベル */
    label: string;
    /** 幅 */
    width?: string;
    /** テキストの配置 */
    align?: 'left' | 'center' | 'right';
    /** ソート可能 */
    sortable?: boolean;
}
interface Props {
    /** カラム定義 */
    columns: DataTableColumn[];
    /** 行データ */
    rows: Record<string, unknown>[];
    /** ローディング状態 */
    loading?: boolean;
    /** データなし時のメッセージ */
    emptyMessage?: string;
    /** ソート中のカラムキー */
    sortKey?: string;
    /** ソート方向 */
    sortOrder?: 'asc' | 'desc';
    /** 行クリックを有効にする（cursor: pointer とホバー効果） */
    clickable?: boolean;
    /** ドラッグ並び替えを有効にする */
    draggable?: boolean;
    /** 各行を識別するキー（ドラッグ後の順序追跡用） */
    rowKey?: string;
}
declare var __VLS_7: `cell-${string}`, __VLS_8: {
    row: Record<string, unknown>;
    value: unknown;
    index: number;
};
type __VLS_Slots = {} & {
    [K in NonNullable<typeof __VLS_7>]?: (props: typeof __VLS_8) => any;
};
declare const __VLS_component: import("vue").DefineComponent<Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    sort: (key: string) => any;
    rowClick: (row: Record<string, unknown>, index: number) => any;
    reorder: (payload: {
        oldIndex: number;
        newIndex: number;
    }) => any;
}, string, import("vue").PublicProps, Readonly<Props> & Readonly<{
    onSort?: ((key: string) => any) | undefined;
    onRowClick?: ((row: Record<string, unknown>, index: number) => any) | undefined;
    onReorder?: ((payload: {
        oldIndex: number;
        newIndex: number;
    }) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
