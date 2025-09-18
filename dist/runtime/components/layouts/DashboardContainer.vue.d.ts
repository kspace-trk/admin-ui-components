import type { SideHeaderProps } from '../headers/SideHeader.vue.js';
import type { TopHeaderProps } from '../headers/TopHeader.vue.js';
type __VLS_Props = {
    sideHeaderProps: SideHeaderProps;
    topHeaderProps: TopHeaderProps;
};
declare var __VLS_14: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_14) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    menuItemClick: (path: string, event?: Event | undefined) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onMenuItemClick?: ((path: string, event?: Event | undefined) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
