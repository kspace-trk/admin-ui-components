import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

export default defineConfig({
  resolve: {
    alias: {
      '~': resolve(__dirname, './'),
      '@': resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // グローバルにSCSS変数とmixinを読み込み
        additionalData: `
          @use "${resolve(__dirname, './assets/scss/variables.scss')}" as *;
        `,
        // SCSSファイルの依存関係を追跡
        includePaths: [resolve(__dirname, './assets/scss')],
      }
    },
    // グローバルCSSファイルの読み込み
    postcss: {
      plugins: [],
    },
  },
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
      tsconfigPath: './tsconfig.app.json',
      exclude: ['**/*.stories.*', '**/*.test.*', './src/stories/*']
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'AdminUIComponents',
      fileName: 'admin-ui-components',
      formats: ['es', 'cjs', 'umd']
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
