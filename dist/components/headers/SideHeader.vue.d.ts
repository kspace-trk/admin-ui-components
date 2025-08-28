export interface SideHeaderMenuItem {
    path: string;
    label: string;
    icon: string;
}
interface Props {
    /** ロゴテキスト */
    logoText: string;
    /** メニュー項目リスト */
    menuItems: SideHeaderMenuItem[];
    /** ボトムメニュー項目 */
    bottomMenuItem?: SideHeaderMenuItem;
    /** 現在のパス */
    currentPath: string;
}
declare const _default: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    menuItemClick: (path: string) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onMenuItemClick?: ((path: string) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
