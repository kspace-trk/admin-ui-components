import type { DropdownMenuItem } from '../overlays/DropdownMenu.vue.js';
export interface SideHeaderMenuItem {
    path: string;
    label: string;
    icon: string;
}
export interface SideHeaderMenuSection {
    /** セクションラベル */
    label: string;
    /** セクション内のメニュー項目リスト */
    items: SideHeaderMenuItem[];
    /** セクションのドロップダウンメニュー項目 */
    menuActions?: DropdownMenuItem[];
}
export interface SideHeaderProps {
    /** ロゴテキスト */
    logoText: string;
    /** メニュー項目リスト */
    menuItems: SideHeaderMenuItem[];
    /** セクション付きメニュー項目リスト */
    menuSections?: SideHeaderMenuSection[];
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
    sectionActionSelect: [sectionLabel: string, item: DropdownMenuItem];
}
declare const _default: import("vue").DefineComponent<SideHeaderProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    menuItemClick: (path: string, event?: Event | undefined) => any;
    closeMenu: () => any;
    sectionActionSelect: (sectionLabel: string, item: DropdownMenuItem) => any;
}, string, import("vue").PublicProps, Readonly<SideHeaderProps> & Readonly<{
    onMenuItemClick?: ((path: string, event?: Event | undefined) => any) | undefined;
    onCloseMenu?: (() => any) | undefined;
    onSectionActionSelect?: ((sectionLabel: string, item: DropdownMenuItem) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
