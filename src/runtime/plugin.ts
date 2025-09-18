// グローバルスタイルをインポート
import './assets/css/reset.css'
import './assets/css/fonts/mplus-1p.css'

// コンポーネントをインポート
import MainButton from './components/buttons/MainButton.vue'
import InputField from './components/forms/InputField.vue'
import TextareaField from './components/forms/TextareaField.vue'
import TopHeader from './components/headers/TopHeader.vue'
import SideHeader from './components/headers/SideHeader.vue'
import TextItem from './components/panels/TextItem.vue'
import SectionTextWithLine from './components/sections/SectionTextWithLine.vue'
import DashboardContainer from './components/layouts/DashboardContainer.vue'

import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  // コンポーネントをグローバル登録
  nuxtApp.vueApp.component('MainButton', MainButton)
  nuxtApp.vueApp.component('InputField', InputField)
  nuxtApp.vueApp.component('TextareaField', TextareaField)
  nuxtApp.vueApp.component('TopHeader', TopHeader)
  nuxtApp.vueApp.component('SideHeader', SideHeader)
  nuxtApp.vueApp.component('TextItem', TextItem)
  nuxtApp.vueApp.component('SectionTextWithLine', SectionTextWithLine)
  nuxtApp.vueApp.component('DashboardContainer', DashboardContainer)
})
