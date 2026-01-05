export interface SideHeaderMenuItem {
    path: string;
    label: string;
    icon: string;
}
export interface SideHeaderProps {
    /** ロゴテキスト */
    logoText: string;
    /** メニュー項目リスト */
    menuItems: SideHeaderMenuItem[];
    /** ボトムメニュー項目 */
    bottomMenuItem?: SideHeaderMenuItem;
    /** 現在のパス（未指定時は自動検知） */
    currentPath?: string;
    /** メニューの開閉状態（モバイル時） */
    isOpen?: boolean;
}
export interface SideHeaderEmits {
    menuItemClick: [path: string, event?: Event];
    closeMenu: [];
}
declare const _default: import("vue").DefineComponent<SideHeaderProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    menuItemClick: (path: string, event?: Event | undefined) => any;
    closeMenu: () => any;
}, string, import("vue").PublicProps, Readonly<SideHeaderProps> & Readonly<{
    onMenuItemClick?: ((path: string, event?: Event | undefined) => any) | undefined;
    onCloseMenu?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
