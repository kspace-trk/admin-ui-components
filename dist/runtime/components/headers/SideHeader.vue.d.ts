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
    /** 現在のパス */
    currentPath: string;
}
export interface SideHeaderEmits {
    menuItemClick: [path: string, event?: Event];
}
declare const _default: import("vue").DefineComponent<SideHeaderProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    menuItemClick: (path: string, event?: Event | undefined) => any;
}, string, import("vue").PublicProps, Readonly<SideHeaderProps> & Readonly<{
    onMenuItemClick?: ((path: string, event?: Event | undefined) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
