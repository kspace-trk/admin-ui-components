interface MenuItem {
    path: string;
    label: string;
    icon: string;
}
interface Props {
    /** ロゴテキスト */
    logoText: string;
    /** メニュー項目リスト */
    menuItems: MenuItem[];
    /** ボトムメニュー項目 */
    bottomMenuItem?: MenuItem;
}
declare const _default: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
