import type { Meta, StoryObj } from '@storybook/vue3';
import TopHeader from '../../components/headers/TopHeader.vue';

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
    () => ({
      template: `
        <div style="width: 100vw; height: 100vh; background-color: #f5f5f5;">
          <story />
          <!-- ヘッダーの下にコンテンツがあることを示すダミーコンテンツ -->
          <div style="margin-top: 80px; padding: 20px;">
            <h2>ページコンテンツ</h2>
            <p>TopHeaderが固定ヘッダーとして正しく動作することを確認できます。</p>
            <div style="padding: 20px; background: white; border-radius: 8px; margin: 20px 0;">
              <h3>コンテンツエリア</h3>
              <p>ヘッダーの下に配置されるコンテンツです。</p>
            </div>
            <div style="height: 200vh; background: linear-gradient(to bottom, #f0f0f0, #e0e0e0);">
              <p style="padding: 20px;">スクロールしてヘッダーの固定動作を確認できます。</p>
            </div>
          </div>
        </div>
      `,
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// デフォルト表示
export const Default: Story = {
  args: {
    title: 'タスクリスト',
  },
  parameters: {
    docs: {
      description: {
        story: 'デフォルトのTopHeader表示。基本的な使用例です。',
      },
    },
  },
};

// モバイル表示
export const Mobile: Story = {
  args: {
    title: 'モバイルアプリ',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'モバイル表示でのTopHeader（全幅で表示）。',
      },
    },
  },
};

// 長いタイトル
export const LongTitle: Story = {
  args: {
    title: 'とても長いページタイトルのテストケース',
  },
  parameters: {
    docs: {
      description: {
        story: '長いタイトルでの表示テスト。レスポンシブ対応を確認できます。',
      },
    },
  },
};
