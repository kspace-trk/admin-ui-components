interface Props {
    /** 表示状態 */
    open: boolean;
    /** タイトル */
    title?: string;
    /** 幅 */
    width?: string;
    /** 背景クリックで閉じる */
    closeOnOverlay?: boolean;
}
declare var __VLS_11: {}, __VLS_13: {}, __VLS_15: {};
type __VLS_Slots = {} & {
    header?: (props: typeof __VLS_11) => any;
} & {
    default?: (props: typeof __VLS_13) => any;
} & {
    footer?: (props: typeof __VLS_15) => any;
};
declare const __VLS_component: import("vue").DefineComponent<Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: () => any;
}, string, import("vue").PublicProps, Readonly<Props> & Readonly<{
    onClose?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
