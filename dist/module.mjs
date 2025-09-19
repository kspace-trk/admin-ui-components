import { defineNuxtModule, createResolver, addPlugin } from '@nuxt/kit';

const module = defineNuxtModule({
  meta: {
    name: "@kspace-trk/admin-ui-components",
    configKey: "adminUiComponents"
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(_options) {
    const resolver = createResolver(import.meta.url);
    addPlugin(resolver.resolve("./runtime/plugin"));
  }
});

export { module as default };
