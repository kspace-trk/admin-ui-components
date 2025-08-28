import type { Meta, StoryObj } from '@storybook/vue3'
import { vueRouter } from 'storybook-vue3-router'
import { Icon } from '@iconify/vue'
import SideHeader from '../../components/headers/SideHeader.vue'

// ルート定義
const routes = [
  { 
    path: '/', 
    name: 'home', 
    component: { template: '<div>ホームページコンテンツ</div>' } 
  },
  { 
    path: '/settings', 
    name: 'settings', 
    component: { template: '<div>設定ページコンテンツ</div>' } 
  },
  { 
    path: '/account', 
    name: 'account', 
    component: { template: '<div>アカウントページコンテンツ</div>' } 
  },
]

const meta: Meta<typeof SideHeader> = {
  title: 'Components/Headers/SideHeader',
  component: SideHeader,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'サイドヘッダーコンポーネント。ナビゲーションメニューを提供し、レスポンシブ対応のハンバーガーメニュー機能を含みます。vue-routerとrouter-linkを使用し、@iconify/vueでアイコンを表示します。storybook-vue3-routerで実際のルーティング機能を提供。',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    logoText: {
      control: { type: 'text' },
      description: 'ロゴテキスト',
      defaultValue: 'Admin UI',
    },
    menuItems: {
      control: { type: 'object' },
      description: 'メニュー項目リスト',
      defaultValue: [
        { path: '/', label: 'タスクリスト', icon: 'material-symbols:list-rounded' },
        { path: '/settings', label: '設定', icon: 'uil:setting' },
      ],
    },
    bottomMenuItem: {
      control: { type: 'object' },
      description: 'ボトムメニュー項目',
      defaultValue: { path: '/account', label: 'アカウント', icon: 'mdi:user-outline' },
    },
  },
  args: {
    logoText: 'Admin UI',
    menuItems: [
      { path: '/', label: 'タスクリスト', icon: 'material-symbols:list-rounded' },
      { path: '/settings', label: '設定', icon: 'uil:setting' },
    ],
    bottomMenuItem: { path: '/account', label: 'アカウント', icon: 'mdi:user-outline' },
  },
  decorators: [
    vueRouter(routes),
    () => ({
      components: { Icon },
      template: `
        <div style="width: 100vw; height: 100vh; background-color: #f5f5f5; position: relative;">
          <story />
          <!-- メインコンテンツエリア（実際のルーターでページが変わる） -->
          <div style="margin-left: 260px; padding: 20px; min-height: 100vh;">
            <h2>メインコンテンツエリア</h2>
            <p>サイドヘッダーのメニューをクリックすると実際にルーティングが発生します。</p>
            <div style="padding: 20px; background: white; border-radius: 8px; margin: 20px 0;">
              <h3>現在のページ:</h3>
              <router-view />
            </div>
            <div style="height: 200vh; background: linear-gradient(to bottom, #f0f0f0, #e0e0e0); padding: 20px;">
              <h3>スクロールテスト用コンテンツ</h3>
              <p>サイドヘッダーが固定されていることを確認できます。</p>
            </div>
          </div>
        </div>
      `,
    }),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

// デスクトップ表示（ホームページ）
export const HomePage: Story = {
  decorators: [vueRouter(routes, { initialRoute: '/' })],
  args: {
    logoText: 'Admin UI',
    menuItems: [
      { path: '/', label: 'タスクリスト', icon: 'material-symbols:list-rounded' },
      { path: '/settings', label: '設定', icon: 'uil:setting' },
    ],
    bottomMenuItem: { path: '/account', label: 'アカウント', icon: 'mdi:user-outline' },
  },
  parameters: {
    docs: {
      description: {
        story: 'ホームページ（/）でのサイドヘッダー表示。実際のルーティングが動作します。',
      },
    },
  },
}

// 設定ページ
export const SettingsPage: Story = {
  decorators: [vueRouter(routes, { initialRoute: '/settings' })],
  args: {
    logoText: 'Admin UI',
  },
  parameters: {
    docs: {
      description: {
        story: '設定ページ（/settings）でのサイドヘッダー表示。設定メニューがアクティブになります。',
      },
    },
  },
}

// アカウントページ
export const AccountPage: Story = {
  decorators: [vueRouter(routes, { initialRoute: '/account' })],
  args: {
    logoText: 'Admin UI',
  },
  parameters: {
    docs: {
      description: {
        story: 'アカウントページ（/account）でのサイドヘッダー表示。アカウントメニューがアクティブになります。',
      },
    },
  },
}

// モバイル表示
export const MobileView: Story = {
  decorators: [vueRouter(routes, { initialRoute: '/' })],
  args: {
    logoText: 'Mobile App',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'モバイル表示でのサイドヘッダー。ハンバーガーボタンが表示され、クリックでメニューが開閉します。',
      },
    },
  },
}

// カスタムロゴテキスト
export const CustomLogo: Story = {
  decorators: [vueRouter(routes, { initialRoute: '/' })],
  args: {
    logoText: 'My Custom App',
  },
  parameters: {
    docs: {
      description: {
        story: 'カスタムロゴテキストを使用したサイドヘッダー。',
      },
    },
  },
}

// ヘッダーのみ表示（装飾なし）
export const HeaderOnly: Story = {
  decorators: [vueRouter(routes, { initialRoute: '/' })],
  args: {
    logoText: 'Simple UI',
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'サイドヘッダーのみの表示（装飾やダミーコンテンツなし）',
      },
    },
  },
}

// カスタムメニュー項目
export const CustomMenuItems: Story = {
  decorators: [vueRouter([
    { 
      path: '/', 
      name: 'dashboard', 
      component: { template: '<div>ダッシュボードページ</div>' } 
    },
    { 
      path: '/users', 
      name: 'users', 
      component: { template: '<div>ユーザー管理ページ</div>' } 
    },
    { 
      path: '/orders', 
      name: 'orders', 
      component: { template: '<div>注文管理ページ</div>' } 
    },
    { 
      path: '/reports', 
      name: 'reports', 
      component: { template: '<div>レポートページ</div>' } 
    },
    { 
      path: '/profile', 
      name: 'profile', 
      component: { template: '<div>プロフィールページ</div>' } 
    },
  ], { initialRoute: '/' })],
  args: {
    logoText: 'E-Commerce Admin',
    menuItems: [
      { path: '/', label: 'ダッシュボード', icon: 'material-symbols:dashboard-rounded' },
      { path: '/users', label: 'ユーザー管理', icon: 'material-symbols:people-rounded' },
      { path: '/orders', label: '注文管理', icon: 'material-symbols:shopping-cart-rounded' },
      { path: '/reports', label: 'レポート', icon: 'material-symbols:analytics-rounded' },
    ],
    bottomMenuItem: { path: '/profile', label: 'プロフィール', icon: 'material-symbols:person-rounded' },
  },
  parameters: {
    docs: {
      description: {
        story: 'カスタムメニュー項目を使用したサイドヘッダー。ECサイトの管理画面を想定したメニュー構成です。',
      },
    },
  },
}
