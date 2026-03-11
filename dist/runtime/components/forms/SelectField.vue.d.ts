export interface SelectOption {
    label: string;
    value: string | number;
    disabled?: boolean;
}
type __VLS_Props = {
    /** ラベル */
    label: string;
    /** 選択肢 */
    options: SelectOption[];
    /** 選択中の値 */
    modelValue?: string | number;
    /** プレースホルダー */
    placeholder?: string;
    /** 無効化 */
    disabled?: boolean;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string | number) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
