# admin-ui-components

Vue 3 + TypeScript で構築された再利用可能なコンポーネントライブラリです。Storybookを使用してコンポーネントの開発とプレビューを行っています。

## 概要

このライブラリは、Webサイト構築に必要な様々なUIコンポーネントを提供します。ボタン、ヘッダー、フッター、ニュースセクション、メインビジュアルなど、多様なコンポーネントが含まれています。

## インストール

```bash
npm install kspace-trk/admin-ui-components
```

## 使用方法

```javascript
// 単一コンポーネントのインポート
import { RoundedHeaderBar } from 'admin-ui-components';
import 'admin-ui-components/styles';

// コンポーネントの使用
<RoundedHeaderBar />
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

### 開発サーバーの起動

```bash
npm run storybook
```

### ビルド

```bash
npm run build
```
