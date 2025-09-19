import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  failOnWarn: false,
  entries: [
    // メインモジュール
    'src/module',
    // ランタイムファイルを.mjsとして出力
    {
      input: 'src/runtime/',
      outDir: 'dist/runtime',
      format: 'esm',
      ext: 'mjs',
    },
  ],
})
