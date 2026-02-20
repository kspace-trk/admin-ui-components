import { createJiti } from "file:///Users/keigo/ghq/github.com/kspace-trk/admin-ui-components/node_modules/jiti/lib/jiti.mjs";

const jiti = createJiti(import.meta.url, {
  "interopDefault": true,
  "alias": {
    "@kspace-trk/admin-ui-components": "/Users/keigo/ghq/github.com/kspace-trk/admin-ui-components"
  },
  "transformOptions": {
    "babel": {
      "plugins": []
    }
  }
})

/** @type {import("/Users/keigo/ghq/github.com/kspace-trk/admin-ui-components/src/module.js")} */
const _module = await jiti.import("/Users/keigo/ghq/github.com/kspace-trk/admin-ui-components/src/module.ts");

export default _module?.default ?? _module;