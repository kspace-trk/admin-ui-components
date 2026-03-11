interface Props {
    /** ラベル */
    label?: string;
    /** 受け入れるファイルタイプ */
    accept?: string;
    /** 複数ファイル選択 */
    multiple?: boolean;
    /** 無効化 */
    disabled?: boolean;
    /** 最大ファイルサイズ（バイト） */
    maxSize?: number;
}
declare const _default: import("vue").DefineComponent<Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (files: File[]) => any;
    error: (message: string) => any;
}, string, import("vue").PublicProps, Readonly<Props> & Readonly<{
    onChange?: ((files: File[]) => any) | undefined;
    onError?: ((message: string) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
