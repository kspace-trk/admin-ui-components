import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import SideHeader from '../../components/headers/SideHeader.vue';

const meta: Meta<typeof SideHeader> = {
  title: 'Components/Headers/SideHeader',
  component: SideHeader,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'サイドヘッダーコンポーネント。ナビゲーションメニューを提供し、レスポンシブ対応のハンバーガーメニュー機能を含みます。currentPathをpropsで受け取り、メニュークリック時にイベントをエミットします。',
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
    currentPath: {
      control: { type: 'text' },
      description: '現在のパス',
      defaultValue: '/',
    },
  },
  args: {
    logoText: 'Admin UI',
    menuItems: [
      { path: '/', label: 'タスクリスト', icon: 'material-symbols:list-rounded' },
      { path: '/settings', label: '設定', icon: 'uil:setting' },
    ],
    bottomMenuItem: { path: '/account', label: 'アカウント', icon: 'mdi:user-outline' },
    currentPath: '/',
  },
  decorators: [
    () => ({
      components: { Icon },
      setup() {
        const currentPath = ref('/');
        const handleMenuItemClick = (path: string, event?: Event) => {
          // デフォルトのページ遷移を防ぐ（Storybook環境では）
          if (event) {
            event.preventDefault();
          }
          currentPath.value = path;
          console.log('Menu item clicked:', path);
        };
        return { currentPath, handleMenuItemClick };
      },
      template: `
        <div style="width: 100vw; height: 100vh; background-color: #f5f5f5; position: relative;">
          <story 
            :current-path="currentPath"
            @menu-item-click="handleMenuItemClick"
          />
          <!-- メインコンテンツエリア -->
          <div style="margin-left: 260px; padding: 20px; min-height: 100vh;">
            <h2>メインコンテンツエリア</h2>
            <p>サイドヘッダーのメニューをクリックすると currentPath が変更されます。</p>
            <div style="padding: 20px; background: white; border-radius: 8px; margin: 20px 0;">
              <h3>現在のパス: {{ currentPath }}</h3>
              <p>メニューをクリックしてパスの変更を確認してください。</p>
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
};

export default meta;
type Story = StoryObj<typeof meta>;

// デスクトップ表示（ホームページ）
export const HomePage: Story = {
  args: {
    logoText: 'Admin UI',
    menuItems: [
      { path: '/', label: 'タスクリスト', icon: 'material-symbols:list-rounded' },
      { path: '/settings', label: '設定', icon: 'uil:setting' },
    ],
    bottomMenuItem: { path: '/account', label: 'アカウント', icon: 'mdi:user-outline' },
    currentPath: '/',
  },
  parameters: {
    docs: {
      description: {
        story: 'ホームページ（/）でのサイドヘッダー表示。タスクリストメニューがアクティブになります。',
      },
    },
  },
};

// 設定ページ
export const SettingsPage: Story = {
  args: {
    logoText: 'Admin UI',
    menuItems: [
      { path: '/', label: 'タスクリスト', icon: 'material-symbols:list-rounded' },
      { path: '/settings', label: '設定', icon: 'uil:setting' },
    ],
    bottomMenuItem: { path: '/account', label: 'アカウント', icon: 'mdi:user-outline' },
    currentPath: '/settings',
  },
  parameters: {
    docs: {
      description: {
        story: '設定ページ（/settings）でのサイドヘッダー表示。設定メニューがアクティブになります。',
      },
    },
  },
};

// アカウントページ
export const AccountPage: Story = {
  args: {
    logoText: 'Admin UI',
    menuItems: [
      { path: '/', label: 'タスクリスト', icon: 'material-symbols:list-rounded' },
      { path: '/settings', label: '設定', icon: 'uil:setting' },
    ],
    bottomMenuItem: { path: '/account', label: 'アカウント', icon: 'mdi:user-outline' },
    currentPath: '/account',
  },
  parameters: {
    docs: {
      description: {
        story: 'アカウントページ（/account）でのサイドヘッダー表示。アカウントメニューがアクティブになります。',
      },
    },
  },
};

// モバイル表示
export const MobileView: Story = {
  args: {
    logoText: 'Mobile App',
    menuItems: [
      { path: '/', label: 'タスクリスト', icon: 'material-symbols:list-rounded' },
      { path: '/settings', label: '設定', icon: 'uil:setting' },
    ],
    bottomMenuItem: { path: '/account', label: 'アカウント', icon: 'mdi:user-outline' },
    currentPath: '/',
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
};

// カスタムロゴテキスト
export const CustomLogo: Story = {
  args: {
    logoText: 'My Custom App',
    menuItems: [
      { path: '/', label: 'タスクリスト', icon: 'material-symbols:list-rounded' },
      { path: '/settings', label: '設定', icon: 'uil:setting' },
    ],
    bottomMenuItem: { path: '/account', label: 'アカウント', icon: 'mdi:user-outline' },
    currentPath: '/',
  },
  parameters: {
    docs: {
      description: {
        story: 'カスタムロゴテキストを使用したサイドヘッダー。',
      },
    },
  },
};

// ヘッダーのみ表示（装飾なし）
export const HeaderOnly: Story = {
  args: {
    logoText: 'Simple UI',
    menuItems: [
      { path: '/', label: 'ホーム', icon: 'material-symbols:home-rounded' },
      { path: '/settings', label: '設定', icon: 'uil:setting' },
    ],
    currentPath: '/',
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'サイドヘッダーのみの表示（装飾やダミーコンテンツなし）',
      },
    },
  },
};

// カスタムメニュー項目
export const CustomMenuItems: Story = {
  args: {
    logoText: 'E-Commerce Admin',
    menuItems: [
      { path: '/', label: 'ダッシュボード', icon: 'material-symbols:dashboard-rounded' },
      { path: '/users', label: 'ユーザー管理', icon: 'material-symbols:people-rounded' },
      { path: '/orders', label: '注文管理', icon: 'material-symbols:shopping-cart-rounded' },
      { path: '/reports', label: 'レポート', icon: 'material-symbols:analytics-rounded' },
    ],
    bottomMenuItem: { path: '/profile', label: 'プロフィール', icon: 'material-symbols:person-rounded' },
    currentPath: '/',
  },
  parameters: {
    docs: {
      description: {
        story: 'カスタムメニュー項目を使用したサイドヘッダー。ECサイトの管理画面を想定したメニュー構成です。',
      },
    },
  },
};
