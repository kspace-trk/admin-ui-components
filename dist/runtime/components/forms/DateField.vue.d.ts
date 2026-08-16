type __VLS_Props = {
    /** ラベル */
    label: string;
    /** v-model値（date: `YYYY-MM-DD` / datetime-local: `YYYY-MM-DDTHH:mm` / month: `YYYY-MM`） */
    modelValue?: string;
    /** input の type 属性 */
    type?: 'date' | 'datetime-local' | 'month';
    /** 選択可能な最小値 */
    min?: string;
    /** 選択可能な最大値 */
    max?: string;
    /** 無効化 */
    disabled?: boolean;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
