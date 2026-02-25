# Admin UI Components for Nuxt

管理画面・CMS向けのNuxt UIコンポーネントライブラリです。

## Quick Setup

1. 必要な依存関係をインストール:

```bash
npm install kspace-trk/admin-ui-components
```

2. `nuxt.config.ts`にモジュールを追加:

```typescript
export default defineNuxtConfig({
  modules: [
    '@kspace-trk/admin-ui-components'
  ]
})
```

全コンポーネントは`KS`プレフィックス付きでグローバル登録されます。

## コンポーネント一覧

| カテゴリ | コンポーネント | 概要 |
|---|---|---|
| Buttons | [MainButton](#mainbutton) | 送信・キャンセルボタン |
| Forms | [InputField](#inputfield) | テキスト入力 |
| | [TextareaField](#textareafield) | テキストエリア |
| | [SelectField](#selectfield) | セレクトボックス |
| | [Checkbox](#checkbox) | チェックボックス |
| | [ToggleSwitch](#toggleswitch) | トグルスイッチ |
| | [SearchField](#searchfield) | 検索フィールド |
| | [FileUpload](#fileupload) | ファイルアップロード |
| Headers | [TopHeader](#topheader) | トップナビゲーション |
| | [SideHeader](#sideheader) | サイドナビゲーション |
| Layouts | [DashboardContainer](#dashboardcontainer) | ダッシュボードレイアウト |
| Display | [Badge](#badge) | ステータスバッジ |
| | [DataTable](#datatable) | データテーブル |
| Panels | [TextItem](#textitem) | テキスト表示パネル |
| Sections | [SectionTextWithLine](#sectiontextwithline) | セクション見出し |
| Navigation | [Pagination](#pagination) | ページネーション |
| | [Breadcrumb](#breadcrumb) | パンくずリスト |
| | [Tabs](#tabs) | タブ切り替え |
| Overlays | [Modal](#modal) | モーダルダイアログ |
| | [Toast](#toast) | トースト通知 |
| | [DropdownMenu](#dropdownmenu) | ドロップダウンメニュー |

---

## コンポーネント仕様書

### 1. ボタンコンポーネント

#### MainButton

**コンポーネント名**: `KSMainButton`
**ファイルパス**: `src/runtime/components/buttons/MainButton.vue`
**機能概要**: 送信・キャンセル用のメインボタン。ローディング状態とスピナー表示に対応。

**Props**:

| Prop | 型 | デフォルト | 説明 |
|---|---|---|---|
| `type` | `'submit' \| 'cancel'` | `'submit'` | ボタンタイプ |
| `text` | `string` | typeに基づく自動設定 | ボタンテキスト |
| `disabled` | `boolean` | `false` | 無効化状態 |
| `loading` | `boolean` | `false` | ローディング状態 |
| `loadingText` | `string` | `'処理中...'` | ローディング時のテキスト |

**Events**:

| Event | Payload | 説明 |
|---|---|---|
| `click` | - | ボタンクリック時（disabled/loading時は発火しない） |

**使用例**:

```vue
<KSMainButton type="submit" text="保存" :loading="isLoading" @click="handleSave" />
<KSMainButton type="cancel" @click="handleCancel" />
```

---

### 2. フォームコンポーネント

#### InputField

**コンポーネント名**: `KSInputField`
**ファイルパス**: `src/runtime/components/forms/InputField.vue`
**機能概要**: ラベル付きテキスト入力フィールド。v-model対応。

**Props**:

| Prop | 型 | デフォルト | 説明 |
|---|---|---|---|
| `label` | `string` | **必須** | フィールドラベル |
| `placeholder` | `string` | - | プレースホルダー |
| `modelValue` | `string` | - | v-model値 |
| `type` | `'text' \| 'password' \| 'email' \| 'number' \| 'tel' \| 'url'` | `'text'` | input要素のtype属性 |

**Events**:

| Event | Payload | 説明 |
|---|---|---|
| `update:modelValue` | `string` | 入力値変更時 |

**使用例**:

```vue
<KSInputField v-model="form.name" label="名前" placeholder="名前を入力してください" />
<KSInputField v-model="form.email" label="メール" type="email" />
```

#### TextareaField

**コンポーネント名**: `KSTextareaField`
**ファイルパス**: `src/runtime/components/forms/TextareaField.vue`
**機能概要**: ラベル付きテキストエリア。v-model対応、行数指定・読み取り専用モード対応。

**Props**:

| Prop | 型 | デフォルト | 説明 |
|---|---|---|---|
| `label` | `string` | **必須** | フィールドラベル |
| `placeholder` | `string` | - | プレースホルダー |
| `modelValue` | `string` | - | v-model値 |
| `rows` | `number` | `4` | 行数 |
| `readonly` | `boolean` | `false` | 読み取り専用モード |

**Events**:

| Event | Payload | 説明 |
|---|---|---|
| `update:modelValue` | `string` | 入力値変更時 |

**使用例**:

```vue
<KSTextareaField v-model="form.description" label="説明" :rows="6" />
<KSTextareaField v-model="form.note" label="備考" :readonly="true" />
```

#### SelectField

**コンポーネント名**: `KSSelectField`
**ファイルパス**: `src/runtime/components/forms/SelectField.vue`
**機能概要**: ラベル付きセレクトボックス。v-model対応。

**Props**:

| Prop | 型 | デフォルト | 説明 |
|---|---|---|---|
| `label` | `string` | **必須** | フィールドラベル |
| `options` | `SelectOption[]` | **必須** | 選択肢 |
| `modelValue` | `string \| number` | - | v-model値 |
| `placeholder` | `string` | - | プレースホルダー |
| `disabled` | `boolean` | - | 無効化 |

**型定義**:

```typescript
interface SelectOption {
  label: string
  value: string | number
  disabled?: boolean
}
```

**Events**:

| Event | Payload | 説明 |
|---|---|---|
| `update:modelValue` | `string \| number` | 選択値変更時 |

**使用例**:

```vue
<KSSelectField
  v-model="form.category"
  label="カテゴリ"
  placeholder="カテゴリを選択"
  :options="[
    { label: 'お知らせ', value: 'news' },
    { label: 'ブログ', value: 'blog' },
    { label: 'イベント', value: 'event', disabled: true },
  ]"
/>
```

#### Checkbox

**コンポーネント名**: `KSCheckbox`
**ファイルパス**: `src/runtime/components/forms/Checkbox.vue`
**機能概要**: チェックボックス。v-model対応。

**Props**:

| Prop | 型 | デフォルト | 説明 |
|---|---|---|---|
| `label` | `string` | - | ラベル |
| `modelValue` | `boolean` | - | v-model値 |
| `disabled` | `boolean` | - | 無効化 |

**Events**:

| Event | Payload | 説明 |
|---|---|---|
| `update:modelValue` | `boolean` | チェック状態変更時 |

**使用例**:

```vue
<KSCheckbox v-model="form.publish" label="公開する" />
<KSCheckbox v-model="form.featured" label="注目記事に設定" />
```

#### ToggleSwitch

**コンポーネント名**: `KSToggleSwitch`
**ファイルパス**: `src/runtime/components/forms/ToggleSwitch.vue`
**機能概要**: トグルスイッチ。ON/OFF切り替え用。v-model対応。

**Props**:

| Prop | 型 | デフォルト | 説明 |
|---|---|---|---|
| `label` | `string` | - | ラベル |
| `modelValue` | `boolean` | - | v-model値 |
| `disabled` | `boolean` | - | 無効化 |

**Events**:

| Event | Payload | 説明 |
|---|---|---|
| `update:modelValue` | `boolean` | ON/OFF切り替え時 |

**使用例**:

```vue
<KSToggleSwitch v-model="settings.isPublic" label="公開状態" />
<KSToggleSwitch v-model="settings.notification" label="通知を送信" />
```

#### SearchField

**コンポーネント名**: `KSSearchField`
**ファイルパス**: `src/runtime/components/forms/SearchField.vue`
**機能概要**: 検索アイコン・クリアボタン付き検索フィールド。v-model対応。

**Props**:

| Prop | 型 | デフォルト | 説明 |
|---|---|---|---|
| `placeholder` | `string` | `'検索...'` | プレースホルダー |
| `modelValue` | `string` | - | v-model値 |

**Events**:

| Event | Payload | 説明 |
|---|---|---|
| `update:modelValue` | `string` | 入力値変更時 |
| `search` | `string` | Enterキー押下時またはクリアボタンクリック時 |

**使用例**:

```vue
<KSSearchField v-model="query" placeholder="記事を検索..." @search="handleSearch" />
```

#### FileUpload

**コンポーネント名**: `KSFileUpload`
**ファイルパス**: `src/runtime/components/forms/FileUpload.vue`
**機能概要**: ドラッグ&ドロップ対応のファイルアップロードエリア。

**Props**:

| Prop | 型 | デフォルト | 説明 |
|---|---|---|---|
| `label` | `string` | - | ラベル |
| `accept` | `string` | - | 受け入れるファイルタイプ（例: `image/*`） |
| `multiple` | `boolean` | `false` | 複数ファイル選択 |
| `disabled` | `boolean` | `false` | 無効化 |
| `maxSize` | `number` | - | 最大ファイルサイズ（バイト） |

**Events**:

| Event | Payload | 説明 |
|---|---|---|
| `change` | `File[]` | ファイル選択時 |
| `error` | `string` | エラー発生時（サイズ超過等） |

**使用例**:

```vue
<KSFileUpload
  label="サムネイル画像"
  accept="image/*"
  :max-size="5242880"
  @change="handleFiles"
  @error="handleError"
/>
```

---

### 3. ヘッダーコンポーネント

#### TopHeader

**コンポーネント名**: `KSTopHeader`
**ファイルパス**: `src/runtime/components/headers/TopHeader.vue`
**機能概要**: ページタイトル表示用の固定トップヘッダー。

**Props**:

| Prop | 型 | デフォルト | 説明 |
|---|---|---|---|
| `title` | `string` | **必須** | ページタイトル |
| `showHamburger` | `boolean` | - | ハンバーガーメニュー表示 |

**Events**:

| Event | Payload | 説明 |
|---|---|---|
| `toggleMenu` | - | ハンバーガーメニュークリック時 |

**使用例**:

```vue
<KSTopHeader title="ユーザー管理" />
```

#### SideHeader

**コンポーネント名**: `KSSideHeader`
**ファイルパス**: `src/runtime/components/headers/SideHeader.vue`
**機能概要**: サイドナビゲーション。レスポンシブ対応（モバイル時はハンバーガーメニュー）。

**Props**:

| Prop | 型 | デフォルト | 説明 |
|---|---|---|---|
| `logoText` | `string` | - | ロゴテキスト |
| `menuItems` | `SideHeaderMenuItem[]` | - | メニュー項目 |
| `menuSections` | `SideHeaderMenuSection[]` | - | セクション付きメニュー |
| `bottomMenuItem` | `SideHeaderMenuItem` | - | ボトムメニュー項目 |
| `currentPath` | `string` | - | 現在のパス |
| `isOpen` | `boolean` | - | メニュー開閉状態 |

**型定義**:

```typescript
interface SideHeaderMenuItem {
  path: string
  label: string
  icon: string
}

interface SideHeaderMenuSection {
  label: string
  items: SideHeaderMenuItem[]
}
```

**Events**:

| Event | Payload | 説明 |
|---|---|---|
| `menuItemClick` | `string, Event?` | メニュー項目クリック時 |
| `closeMenu` | - | メニュー閉じる時 |

**使用例**:

```vue
<KSSideHeader
  logo-text="管理画面"
  :menu-items="menuItems"
  :menu-sections="menuSections"
  :current-path="$route.path"
  @menu-item-click="handleMenuClick"
/>
```

---

### 4. レイアウトコンポーネント

#### DashboardContainer

**コンポーネント名**: `KSDashboardContainer`
**ファイルパス**: `src/runtime/components/layouts/DashboardContainer.vue`
**機能概要**: SideHeaderとTopHeaderを統合したダッシュボードレイアウト。

**Props**:

| Prop | 型 | デフォルト | 説明 |
|---|---|---|---|
| `sideHeaderProps` | `object` | **必須** | SideHeaderのprops |
| `topHeaderProps` | `object` | **必須** | TopHeaderのprops |

**Events**:

| Event | Payload | 説明 |
|---|---|---|
| `menuItemClick` | `string` | SideHeaderのメニュークリックを中継 |

**使用例**:

```vue
<KSDashboardContainer
  :side-header-props="{ logoText: '管理画面', menuItems, menuSections }"
  :top-header-props="{ title: 'ダッシュボード' }"
>
  <div>ページ内容</div>
</KSDashboardContainer>
```

---

### 5. データ表示コンポーネント

#### Badge

**コンポーネント名**: `KSBadge`
**ファイルパス**: `src/runtime/components/display/Badge.vue`
**機能概要**: ステータスや分類を表すバッジ。5種のバリアント対応。

**Props**:

| Prop | 型 | デフォルト | 説明 |
|---|---|---|---|
| `text` | `string` | **必須** | 表示テキスト |
| `variant` | `'default' \| 'success' \| 'warning' \| 'danger' \| 'info'` | `'default'` | バリアント |

**使用例**:

```vue
<KSBadge text="公開済み" variant="success" />
<KSBadge text="下書き" variant="warning" />
<KSBadge text="エラー" variant="danger" />
```

#### DataTable

**コンポーネント名**: `KSDataTable`
**ファイルパス**: `src/runtime/components/display/DataTable.vue`
**機能概要**: データ一覧表示テーブル。ソート、ローディング状態、セルのslotカスタマイズに対応。

**Props**:

| Prop | 型 | デフォルト | 説明 |
|---|---|---|---|
| `columns` | `DataTableColumn[]` | **必須** | カラム定義 |
| `rows` | `Record<string, unknown>[]` | **必須** | 行データ |
| `loading` | `boolean` | `false` | ローディング状態 |
| `emptyMessage` | `string` | `'データがありません'` | データなし時のメッセージ |
| `sortKey` | `string` | - | ソート中のカラムキー |
| `sortOrder` | `'asc' \| 'desc'` | `'asc'` | ソート方向 |

**型定義**:

```typescript
interface DataTableColumn {
  key: string
  label: string
  width?: string
  align?: 'left' | 'center' | 'right'
  sortable?: boolean
}
```

**Events**:

| Event | Payload | 説明 |
|---|---|---|
| `sort` | `string` | ソート可能カラムのヘッダークリック時 |
| `rowClick` | `Record<string, unknown>, number` | 行クリック時（行データとインデックス） |

**Slots**:

| Slot | Props | 説明 |
|---|---|---|
| `cell-{key}` | `{ row, value, index }` | 各カラムのセルをカスタマイズ |

**使用例**:

```vue
<KSDataTable
  :columns="[
    { key: 'title', label: 'タイトル', sortable: true },
    { key: 'status', label: 'ステータス', width: '120px', align: 'center' },
    { key: 'date', label: '更新日', width: '120px', sortable: true },
  ]"
  :rows="articles"
  :sort-key="sortKey"
  :sort-order="sortOrder"
  @sort="handleSort"
  @row-click="handleRowClick"
>
  <!-- ステータスカラムをBadgeでカスタマイズ -->
  <template #cell-status="{ value }">
    <KSBadge :text="statusLabel(value)" :variant="statusVariant(value)" />
  </template>
</KSDataTable>
```

---

### 6. パネルコンポーネント

#### TextItem

**コンポーネント名**: `KSTextItem`
**ファイルパス**: `src/runtime/components/panels/TextItem.vue`
**機能概要**: テキスト表示パネル。行数制限、クローズボタン対応。

**Props**:

| Prop | 型 | デフォルト | 説明 |
|---|---|---|---|
| `text` | `string` | **必須** | 表示テキスト |
| `showCloseIcon` | `boolean` | `false` | クローズアイコン表示 |
| `maxLines` | `number` | `1` | 最大行数 |

**Events**:

| Event | Payload | 説明 |
|---|---|---|
| `close` | - | クローズボタンクリック時 |

**使用例**:

```vue
<KSTextItem text="表示テキスト" :show-close-icon="true" :max-lines="3" @close="handleClose" />
```

---

### 7. セクションコンポーネント

#### SectionTextWithLine

**コンポーネント名**: `KSSectionTextWithLine`
**ファイルパス**: `src/runtime/components/sections/SectionTextWithLine.vue`
**機能概要**: 左側にラインが付いたセクション見出し。

**Props**:

| Prop | 型 | デフォルト | 説明 |
|---|---|---|---|
| `text` | `string` | **必須** | 見出しテキスト |

**使用例**:

```vue
<KSSectionTextWithLine text="基本情報" />
```

---

### 8. ナビゲーションコンポーネント

#### Pagination

**コンポーネント名**: `KSPagination`
**ファイルパス**: `src/runtime/components/navigation/Pagination.vue`
**機能概要**: ページネーション。v-model対応。

**Props**:

| Prop | 型 | デフォルト | 説明 |
|---|---|---|---|
| `currentPage` | `number` | **必須** | 現在のページ（1始まり） |
| `totalPages` | `number` | **必須** | 総ページ数 |
| `siblingCount` | `number` | `1` | 現在ページの前後に表示するページ数 |

**Events**:

| Event | Payload | 説明 |
|---|---|---|
| `update:currentPage` | `number` | ページ変更時 |

**使用例**:

```vue
<KSPagination v-model:current-page="page" :total-pages="20" />
```

#### Breadcrumb

**コンポーネント名**: `KSBreadcrumb`
**ファイルパス**: `src/runtime/components/navigation/Breadcrumb.vue`
**機能概要**: パンくずリスト。

**Props**:

| Prop | 型 | デフォルト | 説明 |
|---|---|---|---|
| `items` | `BreadcrumbItem[]` | **必須** | パンくずアイテム |

**型定義**:

```typescript
interface BreadcrumbItem {
  label: string
  to?: string  // リンク先（未指定の場合はテキストのみ）
}
```

**Events**:

| Event | Payload | 説明 |
|---|---|---|
| `navigate` | `BreadcrumbItem, number` | リンククリック時 |

**使用例**:

```vue
<KSBreadcrumb
  :items="[
    { label: 'ダッシュボード', to: '/dashboard' },
    { label: 'コンテンツ管理', to: '/contents' },
    { label: '記事編集' },
  ]"
  @navigate="handleNavigate"
/>
```

#### Tabs

**コンポーネント名**: `KSTabs`
**ファイルパス**: `src/runtime/components/navigation/Tabs.vue`
**機能概要**: タブ切り替え。名前付きslotでコンテンツを表示。v-model対応。

**Props**:

| Prop | 型 | デフォルト | 説明 |
|---|---|---|---|
| `tabs` | `TabItem[]` | **必須** | タブ項目 |
| `modelValue` | `string` | **必須** | アクティブなタブのキー |

**型定義**:

```typescript
interface TabItem {
  key: string
  label: string
  disabled?: boolean
}
```

**Events**:

| Event | Payload | 説明 |
|---|---|---|
| `update:modelValue` | `string` | タブ切り替え時 |

**Slots**:

| Slot | 説明 |
|---|---|
| `{key}` | 各タブのコンテンツ（TabItemのkeyが名前） |

**使用例**:

```vue
<KSTabs
  v-model="activeTab"
  :tabs="[
    { key: 'basic', label: '基本情報' },
    { key: 'seo', label: 'SEO設定' },
    { key: 'history', label: '変更履歴', disabled: true },
  ]"
>
  <template #basic>
    <p>基本情報の内容</p>
  </template>
  <template #seo>
    <p>SEO設定の内容</p>
  </template>
</KSTabs>
```

---

### 9. オーバーレイコンポーネント

#### Modal

**コンポーネント名**: `KSModal`
**ファイルパス**: `src/runtime/components/overlays/Modal.vue`
**機能概要**: モーダルダイアログ。Teleportで`body`直下にレンダリング。Escキー・オーバーレイクリックで閉じる。

**Props**:

| Prop | 型 | デフォルト | 説明 |
|---|---|---|---|
| `open` | `boolean` | **必須** | 表示状態 |
| `title` | `string` | - | タイトル |
| `width` | `string` | `'480px'` | モーダル幅 |
| `closeOnOverlay` | `boolean` | `true` | 背景クリックで閉じるか |

**Events**:

| Event | Payload | 説明 |
|---|---|---|
| `close` | - | モーダルを閉じる時 |

**Slots**:

| Slot | 説明 |
|---|---|
| `default` | 本文コンテンツ |
| `header` | ヘッダーカスタマイズ |
| `footer` | フッター（ボタン配置用） |

**使用例**:

```vue
<KSMainButton text="削除" @click="showConfirm = true" />

<KSModal :open="showConfirm" title="削除の確認" width="400px" @close="showConfirm = false">
  <p>この記事を削除してよろしいですか？</p>
  <template #footer>
    <KSMainButton type="cancel" text="キャンセル" @click="showConfirm = false" />
    <KSMainButton type="submit" text="削除する" @click="handleDelete" />
  </template>
</KSModal>
```

#### Toast

**コンポーネント名**: `KSToast`
**ファイルパス**: `src/runtime/components/overlays/Toast.vue`
**機能概要**: トースト通知。自動非表示、ホバーでタイマー停止に対応。

**Props**:

| Prop | 型 | デフォルト | 説明 |
|---|---|---|---|
| `visible` | `boolean` | **必須** | 表示状態 |
| `message` | `string` | **必須** | メッセージ |
| `type` | `'success' \| 'error' \| 'warning' \| 'info'` | `'info'` | タイプ |
| `duration` | `number` | `3000` | 自動非表示までの時間（ms）。0で自動非表示しない |
| `position` | `'top-right' \| 'top-center' \| 'bottom-right' \| 'bottom-center'` | `'top-right'` | 表示位置 |

**Events**:

| Event | Payload | 説明 |
|---|---|---|
| `close` | - | トーストを閉じる時 |

**使用例**:

```vue
<KSToast
  :visible="showToast"
  message="記事を保存しました"
  type="success"
  :duration="3000"
  @close="showToast = false"
/>
```

#### DropdownMenu

**コンポーネント名**: `KSDropdownMenu`
**ファイルパス**: `src/runtime/components/overlays/DropdownMenu.vue`
**機能概要**: ドロップダウンメニュー。テーブル行のアクション等に使用。クリック外で閉じる。

**Props**:

| Prop | 型 | デフォルト | 説明 |
|---|---|---|---|
| `items` | `DropdownMenuItem[]` | **必須** | メニューアイテム |
| `triggerIcon` | `string` | `'mdi:dots-vertical'` | トリガーのIconifyアイコン名 |

**型定義**:

```typescript
interface DropdownMenuItem {
  key: string
  label: string
  icon?: string      // Iconifyアイコン名
  danger?: boolean   // 危険なアクション（赤色表示）
  disabled?: boolean
}
```

**Events**:

| Event | Payload | 説明 |
|---|---|---|
| `select` | `DropdownMenuItem` | アイテム選択時 |

**Slots**:

| Slot | 説明 |
|---|---|
| `trigger` | トリガーボタンのカスタマイズ |

**使用例**:

```vue
<KSDropdownMenu
  :items="[
    { key: 'edit', label: '編集', icon: 'mdi:pencil' },
    { key: 'duplicate', label: '複製', icon: 'mdi:content-copy' },
    { key: 'delete', label: '削除', icon: 'mdi:delete', danger: true },
  ]"
  @select="handleAction"
/>
```

---

## 型定義のインポート

コンポーネントが使用する型はライブラリからインポートできます。

```typescript
import type {
  SideHeaderMenuItem,
  SideHeaderMenuSection,
  SelectOption,
  DataTableColumn,
  BreadcrumbItem,
  TabItem,
  DropdownMenuItem,
} from '@kspace-trk/admin-ui-components/runtime'
```

## アイコンの使用

このライブラリは`@iconify/vue`を含んでおり、`KSIcon`コンポーネントとしてグローバルに利用できます。

```vue
<KSIcon icon="mdi:home" />
<KSIcon icon="heroicons:user-solid" />
<KSIcon icon="mdi:home" style="font-size: 24px; color: #333;" />
```

利用可能なアイコンは[Iconify](https://iconify.design/)で検索できます。

## 技術仕様

### 依存関係

- Vue 3
- Nuxt 3
- @iconify/vue（アイコン表示）
- Sass/SCSS（スタイリング）

### デザイントークン

| トークン | 値 | 用途 |
|---|---|---|
| `$black-100` | `#363139` | メインテキスト |
| `$black-200` | `#4B464E` | サブテキスト |
| `$black-400` | `#E0E0E0` | ボーダー |
| `$white-100` | `#FFFFFF` | 背景色 |
| `$white-200` | `#F7F7F7` | サブ背景色 |
| `$primary-100` | `#1a1a1a` | プライマリ（ダーク） |
| `$primary-200` | `#555555` | プライマリ（ミディアム） |
| `$primary-300` | `#888888` | プライマリ（ライト） |

### ブレークポイント

| キー | 条件 |
|---|---|
| `sm` | `max-width: 400px` |
| `md` | `max-width: 768px` |
| `lg` | `max-width: 1000px` |
| `xl` | `max-width: 1200px` |

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
