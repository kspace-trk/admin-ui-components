// コンポーネントをエクスポート
export { default as KSMainButton } from './components/buttons/MainButton.vue'
export { default as KSInputField } from './components/forms/InputField.vue'
export { default as KSTextareaField } from './components/forms/TextareaField.vue'
export { default as KSTopHeader } from './components/headers/TopHeader.vue'
export { default as KSSideHeader } from './components/headers/SideHeader.vue'
export { default as KSTextItem } from './components/panels/TextItem.vue'
export { default as KSSectionTextWithLine } from './components/sections/SectionTextWithLine.vue'
export { default as KSDashboardContainer } from './components/layouts/DashboardContainer.vue'

// 型定義をエクスポート
export * from './types'

// CSSファイルのパスを定数として提供
export const CSS_RESET = './assets/css/reset.css'
export const CSS_FONTS = './assets/css/fonts/mplus-1p.css'
