// コンポーネントの型定義をエクスポート
export type { SideHeaderMenuItem } from '../components/headers/SideHeader.vue'

// グローバルコンポーネントの型定義
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    MainButton: typeof import('../components/buttons/MainButton.vue')['default']
    InputField: typeof import('../components/forms/InputField.vue')['default']
    TextareaField: typeof import('../components/forms/TextareaField.vue')['default']
    TopHeader: typeof import('../components/headers/TopHeader.vue')['default']
    SideHeader: typeof import('../components/headers/SideHeader.vue')['default']
    TextItem: typeof import('../components/panels/TextItem.vue')['default']
    SectionTextWithLine: typeof import('../components/sections/SectionTextWithLine.vue')['default']
    DashboardContainer: typeof import('../components/layouts/DashboardContainer.vue')['default']
  }
}
