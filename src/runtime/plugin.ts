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

export default defineNuxtPlugin({
  name: 'admin-ui-components',
  setup(nuxtApp) {
    const prefix = 'KS'

    // コンポーネントをグローバル登録
    nuxtApp.vueApp.component(`${prefix}MainButton`, MainButton)
    nuxtApp.vueApp.component(`${prefix}InputField`, InputField)
    nuxtApp.vueApp.component(`${prefix}TextareaField`, TextareaField)
    nuxtApp.vueApp.component(`${prefix}TopHeader`, TopHeader)
    nuxtApp.vueApp.component(`${prefix}SideHeader`, SideHeader)
    nuxtApp.vueApp.component(`${prefix}TextItem`, TextItem)
    nuxtApp.vueApp.component(`${prefix}SectionTextWithLine`, SectionTextWithLine)
    nuxtApp.vueApp.component(`${prefix}DashboardContainer`, DashboardContainer)
  },
})
