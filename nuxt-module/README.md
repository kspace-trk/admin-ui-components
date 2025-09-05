# Admin UI Components for Nuxt 3

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

管理画面向けのVue 3 / Nuxt 3対応UIコンポーネントライブラリです。

- [✨ &nbsp;Release Notes](/CHANGELOG.md)

## Features

- 🎨 &nbsp;管理画面向けに最適化されたUIコンポーネント
- 🔧 &nbsp;Nuxt 3対応の自動インポート機能
- 📱 &nbsp;レスポンシブデザイン対応
- 🎯 &nbsp;TypeScript完全対応
- 🌙 &nbsp;composablesによる状態管理サポート

## 含まれるコンポーネント

### ヘッダー系
- `TopHeader` - トップヘッダー（ユーザー情報、ログアウト機能付き）
- `SideHeader` - サイドナビゲーション（階層メニュー対応）

### ボタン系
- `MainButton` - メインボタン（送信/キャンセル、ローディング状態対応）

### フォーム系
- `InputField` - 入力フィールド（バリデーション対応）
- `TextareaField` - テキストエリア

### パネル系
- `TextItem` - テキスト表示パネル

### セクション系
- `SectionTextWithLine` - ライン付きセクション見出し

## Quick Setup

1. モジュールをインストール:

```bash
npm install @kspace-trk/admin-ui-components @iconify/vue
```

2. `nuxt.config.ts`にモジュールを追加:

```typescript
export default defineNuxtConfig({
  modules: [
    '@kspace-trk/admin-ui-components'
  ]
})
```

## Usage

### 基本的な使用方法

コンポーネントは自動的にグローバル登録されるため、importなしで使用できます：

```vue
<template>
  <div>
    <!-- トップヘッダー -->
    <TopHeader 
      title="管理画面"
      :user="{ name: 'ユーザー名', email: 'user@example.com' }"
      @logout="handleLogout"
    />
    
    <!-- サイドナビゲーション -->
    <SideHeader 
      :menu-items="menuItems"
      @menu-click="handleMenuClick"
    />
    
    <!-- フォーム -->
    <div>
      <InputField
        v-model="form.name"
        label="名前"
        placeholder="名前を入力"
        :required="true"
      />
      
      <MainButton 
        type="submit"
        text="送信"
        @click="handleSubmit"
      />
    </div>
  </div>
</template>

<script setup>
// composableを使用
const { createSideHeaderMenuItem } = useAdminComponents()

const form = ref({
  name: ''
})

const menuItems = [
  createSideHeaderMenuItem('ダッシュボード', '/dashboard', 'mdi:view-dashboard'),
  createSideHeaderMenuItem('ユーザー管理', '/users', 'mdi:account-group')
]

const handleLogout = () => {
  // ログアウト処理
}

const handleMenuClick = (menuItem) => {
  // メニュークリック処理
}

const handleSubmit = () => {
  // 送信処理
}
</script>
```

### Composables

`useAdminComponents` composableが提供するユーティリティ：

```typescript
const { createSideHeaderMenuItem, createFormState } = useAdminComponents()

// メニュー項目の作成
const menuItem = createSideHeaderMenuItem('ラベル', '/path', 'icon-name')

// フォーム状態管理
const formState = createFormState({
  field1: '',
  field2: ''
})
```


## Contribution

<details>
  <summary>Local development</summary>
  
  ```bash
  # Install dependencies
  npm install
  
  # Generate type stubs
  npm run dev:prepare
  
  # Develop with the playground
  npm run dev
  
  # Build the playground
  npm run dev:build
  
  # Run ESLint
  npm run lint
  
  # Run Vitest
  npm run test
  npm run test:watch
  
  # Release new version
  npm run release
  ```

</details>


<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@kspace-trk/admin-ui-components/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/@kspace-trk/admin-ui-components

[npm-downloads-src]: https://img.shields.io/npm/dm/@kspace-trk/admin-ui-components.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npm.chart.dev/@kspace-trk/admin-ui-components

[license-src]: https://img.shields.io/npm/l/@kspace-trk/admin-ui-components.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/@kspace-trk/admin-ui-components

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
