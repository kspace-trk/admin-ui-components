interface Props {
    /** ボタンのタイプ（送信またはキャンセル） */
    type?: 'submit' | 'cancel';
    /** ボタンのテキスト */
    text?: string;
    /** 無効化状態 */
    disabled?: boolean;
    /** ローディング状態 */
    loading?: boolean;
}
declare const _default: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: () => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onClick?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLButtonElement>;
export default _default;
