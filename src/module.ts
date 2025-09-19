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
  setup(_options, nuxt) {
    const resolver = createResolver(import.meta.url)

    // プラグインを追加（コンポーネントのグローバル登録）
    addPlugin(resolver.resolve('./runtime/plugin'))

    // CSSファイルをNuxtのCSSに追加（Vercel対応）
    nuxt.options.css = nuxt.options.css || []
    nuxt.options.css.push(resolver.resolve('./runtime/assets/css/reset.css'))
    nuxt.options.css.push(resolver.resolve('./runtime/assets/css/fonts/mplus-1p.css'))
  },
})
