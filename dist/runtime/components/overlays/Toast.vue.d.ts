interface Props {
    /** 表示状態 */
    visible: boolean;
    /** メッセージ */
    message: string;
    /** タイプ */
    type?: 'success' | 'error' | 'warning' | 'info';
    /** 自動非表示までの時間（ms）。0で自動非表示しない */
    duration?: number;
    /** 表示位置 */
    position?: 'top-right' | 'top-center' | 'bottom-right' | 'bottom-center';
}
declare const _default: import("vue").DefineComponent<Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: () => any;
}, string, import("vue").PublicProps, Readonly<Props> & Readonly<{
    onClose?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
