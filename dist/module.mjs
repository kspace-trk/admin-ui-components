import { defineNuxtModule, createResolver, addPlugin, addImportsDir } from '@nuxt/kit';

const module = defineNuxtModule({
  meta: {
    name: "@kspace-trk/admin-ui-components",
    configKey: "adminUiComponents"
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url);
    addPlugin(resolver.resolve("./runtime/plugin"));
    addImportsDir(resolver.resolve("./runtime/composables"));
  }
});

export { module as default };
