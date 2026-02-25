export interface TabItem {
    /** タブのキー */
    key: string;
    /** 表示ラベル */
    label: string;
    /** 無効化 */
    disabled?: boolean;
}
type __VLS_Props = {
    /** タブ項目 */
    tabs: TabItem[];
    /** 現在のアクティブタブキー */
    modelValue: string;
};
declare var __VLS_2: string, __VLS_3: {};
type __VLS_Slots = {} & {
    [K in NonNullable<typeof __VLS_2>]?: (props: typeof __VLS_3) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (key: string) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((key: string) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
