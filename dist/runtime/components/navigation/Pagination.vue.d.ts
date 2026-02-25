interface Props {
    /** 現在のページ（1始まり） */
    currentPage: number;
    /** 総ページ数 */
    totalPages: number;
    /** 前後に表示するページ数 */
    siblingCount?: number;
}
declare const _default: import("vue").DefineComponent<Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:currentPage": (page: number) => any;
}, string, import("vue").PublicProps, Readonly<Props> & Readonly<{
    "onUpdate:currentPage"?: ((page: number) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
