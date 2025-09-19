import { defineNuxtModule, createResolver, addPlugin } from '@nuxt/kit';

const module = defineNuxtModule({
  meta: {
    name: "@kspace-trk/admin-ui-components",
    configKey: "adminUiComponents"
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(_options, nuxt) {
    const resolver = createResolver(import.meta.url);
    addPlugin(resolver.resolve("./runtime/plugin"));
    nuxt.options.css = nuxt.options.css || [];
    nuxt.options.css.push(resolver.resolve("./runtime/assets/css/reset.css"));
    nuxt.options.css.push(resolver.resolve("./runtime/assets/css/fonts/mplus-1p.css"));
  }
});

export { module as default };
