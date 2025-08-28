import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import stylistic from '@stylistic/eslint-plugin';
import type { Linter } from 'eslint';

const config: Linter.Config[] = [
  { files: ['**/*.{js,mjs,cjs,ts,vue}'] },
  { ignores: ['dist/**'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    plugins: {
      stylistic
    },
    rules: {
      'stylistic/indent': ['error', 2],
      'stylistic/quotes': ['error', 'single'],
      'stylistic/semi': ['error', 'always']
    }
  },
  { files: ['**/*.vue'], languageOptions: { parserOptions: { parser: tseslint.parser } } },
];

export default config;
