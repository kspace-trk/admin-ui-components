import type { Meta, StoryObj } from '@storybook/vue3'
import { vueRouter } from 'storybook-vue3-router'
import TopHeader from '../../components/headers/TopHeader.vue'

// ルート定義（TopHeaderのタイトル変更に対応）
const routes = [
  { 
    path: '/', 
    name: 'home', 
    component: { template: '<div>タスクリストページのコンテンツ</div>' } 
  },
  { 
    path: '/settings', 
    name: 'settings', 
    component: { template: '<div>設定ページのコンテンツ</div>' } 
  },
  { 
    path: '/other', 
    name: 'other', 
    component: { template: '<div>その他のページのコンテンツ</div>' } 
  },
]

const meta: Meta<typeof TopHeader> = {
  title: 'Components/Headers/TopHeader',
  component: TopHeader,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'トップヘッダーコンポーネント。ページタイトルを表示し、固定ヘッダーとして機能します。titleをpropsで受け取り、カスタマイズ可能です。',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'ページタイトル',
      defaultValue: 'タスクリスト',
    },
  },
  args: {
    title: 'タスクリスト',
  },
  decorators: [
    vueRouter(routes),
    () => ({
      template: `
        <div style="width: 100vw; height: 100vh; background-color: #f5f5f5;">
          <story />
          <!-- ヘッダーの下にコンテンツがあることを示すダミーコンテンツ -->
          <div style="margin-top: 80px; padding: 20px;">
            <h2>ページコンテンツ</h2>
            <p>TopHeaderのタイトルがルートに応じて動的に変更されることを確認できます。</p>
            <div style="padding: 20px; background: white; border-radius: 8px; margin: 20px 0;">
              <h3>現在のページ:</h3>
              <router-view />
            </div>
            <div style="height: 200vh; background: linear-gradient(to bottom, #f0f0f0, #e0e0e0);">
              <p style="padding: 20px;">スクロールしてヘッダーの固定動作を確認できます。</p>
            </div>
          </div>
        </div>
      `,
    }),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

// ルートページ（タスクリスト）
export const TaskListPage: Story = {
  decorators: [vueRouter(routes, { initialRoute: '/' })],
  args: {
    title: 'タスクリスト',
  },
  parameters: {
    docs: {
      description: {
        story: 'ルートページ（/）でのTopHeaderの表示例。タイトルが「タスクリスト」になります。',
      },
    },
  },
}

// 設定ページ  
export const SettingsPage: Story = {
  decorators: [vueRouter(routes, { initialRoute: '/settings' })],
  args: {
    title: '設定',
  },
  parameters: {
    docs: {
      description: {
        story: '設定ページ（/settings）でのTopHeaderの表示例。タイトルが「設定」になります。',
      },
    },
  },
}

// その他のページ（デフォルトタイトル）
export const DefaultPage: Story = {
  decorators: [vueRouter(routes, { initialRoute: '/other' })],
  args: {
    title: 'その他のページ',
  },
  parameters: {
    docs: {
      description: {
        story: 'その他のページでのTopHeaderの表示例。カスタムタイトル「その他のページ」が表示されます。',
      },
    },
  },
}

// モバイル表示のプレビュー
export const MobileView: Story = {
  decorators: [vueRouter(routes, { initialRoute: '/' })],
  args: {
    title: 'モバイルアプリ',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'モバイル表示でのTopHeaderの表示例（全幅で表示）。',
      },
    },
  },
}

// レスポンシブデザインの確認用
export const ResponsiveDemo: Story = {
  decorators: [vueRouter(routes, { initialRoute: '/' })],
  args: {
    title: 'レスポンシブデモ',
  },
  parameters: {
    docs: {
      description: {
        story: 'レスポンシブデザインの動作確認用。画面サイズを変更してレスポンシブ動作を確認できます。デスクトップではサイドバー分の余白を考慮した幅、モバイルでは全幅表示になります。',
      },
    },
  },
}

// ヘッダーのみ表示（装飾なし）
export const HeaderOnly: Story = {
  decorators: [vueRouter(routes, { initialRoute: '/' })],
  args: {
    title: 'シンプルヘッダー',
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'ヘッダーのみの表示（装飾やダミーコンテンツなし）',
      },
    },
  },
}

// カスタムタイトルの例
export const CustomTitle: Story = {
  decorators: [vueRouter(routes, { initialRoute: '/' })],
  args: {
    title: 'カスタム管理画面',
  },
  parameters: {
    docs: {
      description: {
        story: 'カスタムタイトルを使用したTopHeaderの表示例。propsでタイトルを自由に設定できます。',
      },
    },
  },
}

// 長いタイトルのテスト
export const LongTitle: Story = {
  decorators: [vueRouter(routes, { initialRoute: '/' })],
  args: {
    title: 'とても長いページタイトルのテストケース',
  },
  parameters: {
    docs: {
      description: {
        story: '長いタイトルが適切に表示されるかのテストケース。レスポンシブ対応も確認できます。',
      },
    },
  },
}
