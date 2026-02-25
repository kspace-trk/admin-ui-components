export interface BreadcrumbItem {
    /** 表示テキスト */
    label: string;
    /** リンク先（未指定の場合はテキストのみ） */
    to?: string;
}
type __VLS_Props = {
    /** パンくずアイテム */
    items: BreadcrumbItem[];
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    navigate: (item: BreadcrumbItem, index: number) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onNavigate?: ((item: BreadcrumbItem, index: number) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
