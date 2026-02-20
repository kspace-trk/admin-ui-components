export interface TopHeaderProps {
    /** ページタイトル */
    title: string;
    /** ハンバーガーメニューを表示するか（モバイル時のみ） */
    showHamburger?: boolean;
}
export interface TopHeaderEmits {
    toggleMenu: [];
}
declare const _default: import("vue").DefineComponent<TopHeaderProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    toggleMenu: () => any;
}, string, import("vue").PublicProps, Readonly<TopHeaderProps> & Readonly<{
    onToggleMenu?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
