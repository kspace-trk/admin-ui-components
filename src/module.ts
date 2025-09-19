import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'

// Module options TypeScript interface definition
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@kspace-trk/admin-ui-components',
    configKey: 'adminUiComponents',
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(_options) {
    const resolver = createResolver(import.meta.url)

    // プラグインを追加（コンポーネントのグローバル登録）
    addPlugin(resolver.resolve('./runtime/plugin'))
  },
})
