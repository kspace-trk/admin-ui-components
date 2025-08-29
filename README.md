# admin-ui-components

※現在開発中です。

Vue + TypeScript で構築されたコンポーネントライブラリです。Storybookを使用してコンポーネントの開発とプレビューを行っています。

このライブラリは、管理画面UIの構築に使用する、シンプルなUIを提供します。

製品品質にするほどでもなく、自分用にちょっとしたツールを開発する際に便利です。

## インストール

```bash
npm install kspace-trk/admin-ui-components
```

## 使用方法

```javascript
// 単一コンポーネントのインポート
import { MainButton } from 'admin-ui-components';
// app.vue等のエントリポイントでスタイルをimport
import 'admin-ui-components/styles';

// コンポーネントの使用
<MainButton />
```

## 開発

### 環境構築

```bash
# リポジトリのクローン
git clone https://github.com/kspace-trk/admin-ui-components.git
cd admin-ui-components

# 依存関係のインストール
npm install
```

### storybookプレビューサーバーの起動

```bash
npm run dev
```

### ビルド

```bash
npm run build
```
