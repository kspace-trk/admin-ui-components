# Admin UI Components for Nuxt

管理画面向けのNuxt UIコンポーネントライブラリです。

## コンポーネント仕様書

### 1. ボタンコンポーネント

#### MainButton

**コンポーネント名**: `KSMainButton` / `MainButton`
**ファイルパス**: `src/runtime/components/buttons/MainButton.vue`
**機能概要**: 送信・キャンセル用のメインボタン。ローディング状態とスピナー表示に対応。

**Props定義**:

```typescript
interface Props {
  type?: 'submit' | 'cancel'  // ボタンタイプ（デフォルト: 'submit'）
  text?: string               // ボタンテキスト（デフォルト: typeに基づく自動設定）
  disabled?: boolean          // 無効化状態（デフォルト: false）
  loading?: boolean           // ローディング状態（デフォルト: false）
}
```

**Events**:

- `click: []` - ボタンクリック時に発火（disabled/loading時は発火しない）

**スタイル仕様**:

- 固定サイズ: 151px × 41px
- border-radius: 6px
- submit: プライマリカラー背景、白文字
- cancel: グレー背景、黒文字、ボーダー付き
- loading時: スピナーアニメーション表示

**使用例**:

```vue
<MainButton type="submit" text="保存" :loading="isLoading" @click="handleSave" />
<MainButton type="cancel" @click="handleCancel" />
```

### 2. フォームコンポーネント

#### InputField

**コンポーネント名**: `KSInputField` / `InputField`
**ファイルパス**: `src/runtime/components/forms/InputField.vue`
**機能概要**: ラベル付きテキスト入力フィールド。v-model対応。

**Props定義**:

```typescript
interface Props {
  label: string           // 必須：フィールドラベル
  placeholder?: string    // プレースホルダーテキスト
  modelValue?: string     // v-model値
}
```

**Events**:

- `update:modelValue: [value: string]` - 入力値変更時

**スタイル仕様**:

- 高さ: 40px
- padding: 0 16px
- border-radius: 8px
- 背景色: $white-200
- フォーカス時: 背景色変更 + プライマリカラーのボックスシャドウ

**使用例**:

```vue
<InputField v-model="form.name" label="名前" placeholder="名前を入力してください" />
```

#### TextareaField

**コンポーネント名**: `KSTextareaField` / `TextareaField`
**ファイルパス**: `src/runtime/components/forms/TextareaField.vue`
**機能概要**: ラベル付きテキストエリア。v-model対応、行数指定可能。

**Props定義**:

```typescript
interface Props {
  label: string           // 必須：フィールドラベル
  placeholder?: string    // プレースホルダーテキスト
  modelValue?: string     // v-model値
  rows?: number          // 行数（デフォルト: 4）
}
```

**Events**:

- `update:modelValue: [value: string]` - 入力値変更時

**スタイル仕様**:

- 最小高さ: 80px
- padding: 12px 16px
- resize: vertical（縦方向のみリサイズ可能）
- その他はInputFieldと同様

**使用例**:

```vue
<TextareaField v-model="form.description" label="説明" :rows="6" />
```

### 3. ヘッダーコンポーネント

#### SideHeader

**コンポーネント名**: `KSSideHeader` / `SideHeader`
**ファイルパス**: `src/runtime/components/headers/SideHeader.vue`
**機能概要**: サイドナビゲーション。レスポンシブ対応（モバイル時はハンバーガーメニュー）。

**Props定義**:

```typescript
interface SideHeaderMenuItem {
  path: string    // リンクパス
  label: string   // 表示ラベル
  icon: string    // Iconifyアイコン名
}

interface SideHeaderProps {
  logoText: string                      // 必須：ロゴテキスト
  menuItems: SideHeaderMenuItem[]       // 必須：メニュー項目配列
  bottomMenuItem?: SideHeaderMenuItem   // ボトムメニュー項目（オプション）
  currentPath: string                   // 必須：現在のパス（アクティブ状態判定用）
}
```

**Events**:

- `menuItemClick: [path: string, event?: Event]` - メニュー項目クリック時

**機能詳細**:

- 固定幅: 260px（デスクトップ）
- レスポンシブ: 768px以下でハンバーガーメニューに変換
- アクティブ状態: currentPathと一致するメニューをハイライト
- NuxtLink使用でルーティング対応

**使用例**:

```vue
<SideHeader
  logo-text="管理画面"
  :menu-items="menuItems"
  :current-path="$route.path"
  :bottom-menu-item="{ path: '/logout', label: 'ログアウト', icon: 'mdi:logout' }"
  @menu-item-click="handleMenuClick"
/>
```

#### TopHeader

**コンポーネント名**: `KSTopHeader` / `TopHeader`
**ファイルパス**: `src/runtime/components/headers/TopHeader.vue`
**機能概要**: ページタイトル表示用のトップヘッダー。

**Props定義**:

```typescript
interface TopHeaderProps {
  title: string  // 必須：ページタイトル
}
```

**スタイル仕様**:

- 固定配置: top: 0, z-index: 99
- 幅: calc(100% - 240px)（SideHeader分を除く）
- 高さ: 73px（padding含む）
- 背景: $white-100、下ボーダー付き

**使用例**:

```vue
<TopHeader title="ユーザー管理" />
```

### 4. レイアウトコンポーネント

#### DashboardContainer

**コンポーネント名**: `KSDashboardContainer` / `DashboardContainer`
**ファイルパス**: `src/runtime/components/layouts/DashboardContainer.vue`
**機能概要**: SideHeaderとTopHeaderを統合したダッシュボードレイアウト。

**Props定義**:

```typescript
interface Props {
  sideHeaderProps: SideHeaderProps  // SideHeaderのprops
  topHeaderProps: TopHeaderProps    // TopHeaderのprops
}
```

**Events**:

- `menuItemClick: [path: string]` - SideHeaderのメニュークリックを中継

**レイアウト構造**:

- SideHeader（固定サイドバー）
- TopHeader（固定トップバー）
- メインコンテンツエリア（スロット）
- レスポンシブ対応

**使用例**:

```vue
<DashboardContainer
  :side-header-props="sideHeaderProps"
  :top-header-props="{ title: 'ダッシュボード' }"
  @menu-item-click="handleMenuClick"
>
  <!-- メインコンテンツ -->
  <div>ページ内容</div>
</DashboardContainer>
```

### 5. パネルコンポーネント

#### TextItem

**コンポーネント名**: `KSTextItem` / `TextItem`
**ファイルパス**: `src/runtime/components/panels/TextItem.vue`
**機能概要**: テキスト表示パネル。行数制限、クローズボタン対応。

**Props定義**:

```typescript
interface Props {
  text: string              // 必須：表示テキスト
  showCloseIcon?: boolean   // クローズアイコン表示（デフォルト: false）
  maxLines?: number         // 最大行数（デフォルト: 1）
}
```

**Events**:

- `close: []` - クローズボタンクリック時

**機能詳細**:

- 1行時: text-overflow: ellipsis
- 複数行時: CSS line-clamp使用
- 改行対応: white-space: pre-line
- 単語分割: word-wrap: break-word

**使用例**:

```vue
<TextItem text="表示テキスト" :show-close-icon="true" :max-lines="3" @close="handleClose" />
```

### 6. セクションコンポーネント

#### SectionTextWithLine

**コンポーネント名**: `KSSectionTextWithLine` / `SectionTextWithLine`
**ファイルパス**: `src/runtime/components/sections/SectionTextWithLine.vue`
**機能概要**: 左側にラインが付いたセクション見出し。

**Props定義**:

```typescript
interface Props {
  text: string  // 必須：見出しテキスト
}
```

**スタイル仕様**:

- 左ライン: 16px × 1px、$black-400色
- テキスト: 1rem、font-weight: 700
- gap: 16px

**使用例**:

```vue
<SectionTextWithLine text="基本情報" />
```

## 技術仕様

### 依存関係

- Vue 3
- Nuxt 3
- @iconify/vue（アイコン表示）
- Sass/SCSS（スタイリング）

### カラーパレット（variables.scss）

- $primary-100: プライマリカラー
- $black-100, $black-200, $black-400: グレースケール
- $white-100, $white-200: 背景色

### 自動インポート

全コンポーネントは`KS`プレフィックス付きでグローバル登録されます。
例: `KSMainButton`, `KSInputField`, `KSSideHeader`

## Quick Setup

1. 必要な依存関係をインストール:

```bash
npm install @kspace-trk/admin-ui-components @iconify/vue
```

**注意**: `@iconify/vue`はpeerDependencyとして設定されているため、手動でインストールする必要があります。

2. `nuxt.config.ts`にモジュールを追加:

```typescript
export default defineNuxtConfig({
  modules: [
    '@kspace-trk/admin-ui-components'
  ]
})
```

## アイコンの使用

このライブラリは`@iconify/vue`を含んでおり、`KSIcon`コンポーネントとしてグローバルに利用できます。

```vue
<template>
  <!-- Material Design Icons -->
  <KSIcon icon="mdi:home" />
  <KSIcon icon="mdi:user" />
  
  <!-- Heroicons -->
  <KSIcon icon="heroicons:user-solid" />
  
  <!-- Font Awesome -->
  <KSIcon icon="fa:user" />
  
  <!-- サイズとスタイルの指定 -->
  <KSIcon icon="mdi:home" style="font-size: 24px; color: #333;" />
</template>
```

利用可能なアイコンは[Iconify](https://iconify.design/)で検索できます。

## 実装例

### 基本的な管理画面レイアウト

```vue
<template>
  <DashboardContainer
    :side-header-props="sideHeaderProps"
    :top-header-props="{ title: currentPageTitle }"
    @menu-item-click="handleMenuClick"
  >
    <!-- メインコンテンツ -->
    <div class="page-content">
      <SectionTextWithLine text="ユーザー情報" />
      
      <form @submit.prevent="handleSubmit">
        <InputField
          v-model="form.name"
          label="名前"
          placeholder="名前を入力してください"
        />
        
        <TextareaField
          v-model="form.description"
          label="説明"
          :rows="4"
          placeholder="説明を入力してください"
        />
        
        <div class="button-group">
          <MainButton 
            type="submit"
            text="保存"
            :loading="isLoading"
            @click="handleSubmit"
          />
          <MainButton 
            type="cancel"
            @click="handleCancel"
          />
        </div>
      </form>
      
      <!-- テキストアイテムリスト -->
      <div class="text-items">
        <TextItem
          v-for="(item, index) in textItems"
          :key="index"
          :text="item.text"
          :show-close-icon="true"
          :max-lines="2"
          @close="removeItem(index)"
        />
      </div>
    </div>
  </DashboardContainer>
</template>

<script setup lang="ts">
import type { SideHeaderProps } from '@kspace-trk/admin-ui-components'

const form = ref({
  name: '',
  description: ''
})

const isLoading = ref(false)
const currentPageTitle = ref('ユーザー管理')

const sideHeaderProps: SideHeaderProps = {
  logoText: '管理画面',
  currentPath: '/users',
  menuItems: [
    { path: '/dashboard', label: 'ダッシュボード', icon: 'mdi:view-dashboard' },
    { path: '/users', label: 'ユーザー管理', icon: 'mdi:account-group' },
    { path: '/settings', label: '設定', icon: 'mdi:cog' }
  ],
  bottomMenuItem: { path: '/logout', label: 'ログアウト', icon: 'mdi:logout' }
}

const textItems = ref([
  { text: 'サンプルテキスト1\n複数行対応' },
  { text: 'サンプルテキスト2' }
])

const handleMenuClick = (path: string) => {
  // ルーティング処理
  navigateTo(path)
}

const handleSubmit = async () => {
  isLoading.value = true
  try {
    // API呼び出し等の処理
    await submitForm(form.value)
  } finally {
    isLoading.value = false
  }
}

const handleCancel = () => {
  // キャンセル処理
  form.value = { name: '', description: '' }
}

const removeItem = (index: number) => {
  textItems.value.splice(index, 1)
}
</script>
```

### 個別コンポーネントの使用

```vue
<template>
  <!-- 単体でのヘッダー使用 -->
  <SideHeader
    logo-text="管理画面"
    :menu-items="menuItems"
    :current-path="$route.path"
    @menu-item-click="handleMenuClick"
  />
  
  <TopHeader title="ページタイトル" />
  
  <!-- フォームコンポーネント -->
  <InputField v-model="inputValue" label="入力フィールド" />
  <TextareaField v-model="textareaValue" label="テキストエリア" :rows="6" />
  
  <!-- ボタン -->
  <MainButton type="submit" :loading="loading" @click="submit" />
  
  <!-- パネル -->
  <TextItem text="表示テキスト" :show-close-icon="true" @close="handleClose" />
  
  <!-- セクション見出し -->
  <SectionTextWithLine text="セクション名" />
</template>
```

## Contribution

### Local development
  
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

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@kspace-trk/admin-ui-components/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/@kspace-trk/admin-ui-components

[npm-downloads-src]: https://img.shields.io/npm/dm/@kspace-trk/admin-ui-components.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npm.chart.dev/@kspace-trk/admin-ui-components

[license-src]: https://img.shields.io/npm/l/@kspace-trk/admin-ui-components.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/@kspace-trk/admin-ui-components

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
