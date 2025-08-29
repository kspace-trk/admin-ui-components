import type { Meta, StoryObj } from '@storybook/vue3';
import SectionTextWithLine from '../../components/sections/SectionTextWithLine.vue';

const meta: Meta<typeof SectionTextWithLine> = {
  title: 'Components/Sections/SectionTextWithLine',
  component: SectionTextWithLine,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'セクション区切りコンポーネント。テキストの左右に線を配置してセクションの境界を視覚的に表現します。',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: { type: 'text' },
      description: '表示するセクションタイトル',
    },
  },
  args: {
    text: 'セクションタイトル',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// デフォルト表示
export const Default: Story = {
  args: {
    text: 'セクション 1',
  },
  parameters: {
    docs: {
      description: {
        story: 'デフォルトのセクション区切り表示。',
      },
    },
  },
};

// 基本情報セクション
export const BasicInfo: Story = {
  args: {
    text: '基本情報',
  },
  parameters: {
    docs: {
      description: {
        story: '基本情報セクションの例。',
      },
    },
  },
};

// 詳細設定セクション
export const DetailSettings: Story = {
  args: {
    text: '詳細設定',
  },
  parameters: {
    docs: {
      description: {
        story: '詳細設定セクションの例。',
      },
    },
  },
};

// 長いタイトル
export const LongTitle: Story = {
  args: {
    text: 'アカウント設定とプライバシー管理',
  },
  parameters: {
    docs: {
      description: {
        story: '長いセクションタイトルの例。',
      },
    },
  },
};

// 複数セクションの組み合わせ
export const MultipleSections: Story = {
  render: () => ({
    components: { SectionTextWithLine },
    template: `
      <div style="width: 600px; display: flex; flex-direction: column; gap: 32px;">
        <SectionTextWithLine text="ユーザー情報" />
        <div style="padding: 0 20px;">
          <p style="margin: 0; color: #666; font-size: 14px;">
            ここにユーザー情報の内容が入ります。名前、メールアドレス、電話番号などの基本的な情報を編集できます。
          </p>
        </div>
        
        <SectionTextWithLine text="セキュリティ設定" />
        <div style="padding: 0 20px;">
          <p style="margin: 0; color: #666; font-size: 14px;">
            パスワードの変更、二段階認証の設定、ログイン履歴の確認などができます。
          </p>
        </div>
        
        <SectionTextWithLine text="通知設定" />
        <div style="padding: 0 20px;">
          <p style="margin: 0; color: #666; font-size: 14px;">
            メール通知、プッシュ通知、SMS通知の設定を管理できます。
          </p>
        </div>
        
        <SectionTextWithLine text="アカウント管理" />
        <div style="padding: 0 20px;">
          <p style="margin: 0; color: #666; font-size: 14px;">
            アカウントの削除、データのエクスポート、プライバシー設定などができます。
          </p>
        </div>
      </div>
    `,
  }),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: '複数のセクションを組み合わせた設定画面の例。各セクション間にコンテンツを配置しています。',
      },
    },
  },
};

// フォーム内での使用例
export const FormSections: Story = {
  render: () => ({
    components: { SectionTextWithLine },
    template: `
      <div style="width: 500px; background: white; padding: 24px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
        <h2 style="margin: 0 0 24px 0; font-size: 20px; color: #333;">プロフィール編集</h2>
        
        <SectionTextWithLine text="基本情報" />
        <div style="padding: 16px 0 24px 0; display: flex; flex-direction: column; gap: 12px;">
          <div style="display: flex; flex-direction: column; gap: 4px;">
            <label style="font-size: 12px; font-weight: bold; color: #333;">お名前</label>
            <input type="text" placeholder="山田太郎" style="padding: 8px 12px; border: 1px solid #ddd; border-radius: 4px;" />
          </div>
          <div style="display: flex; flex-direction: column; gap: 4px;">
            <label style="font-size: 12px; font-weight: bold; color: #333;">メールアドレス</label>
            <input type="email" placeholder="example@domain.com" style="padding: 8px 12px; border: 1px solid #ddd; border-radius: 4px;" />
          </div>
        </div>
        
        <SectionTextWithLine text="追加情報" />
        <div style="padding: 16px 0 24px 0; display: flex; flex-direction: column; gap: 12px;">
          <div style="display: flex; flex-direction: column; gap: 4px;">
            <label style="font-size: 12px; font-weight: bold; color: #333;">会社名</label>
            <input type="text" placeholder="株式会社サンプル" style="padding: 8px 12px; border: 1px solid #ddd; border-radius: 4px;" />
          </div>
          <div style="display: flex; flex-direction: column; gap: 4px;">
            <label style="font-size: 12px; font-weight: bold; color: #333;">部署</label>
            <input type="text" placeholder="開発部" style="padding: 8px 12px; border: 1px solid #ddd; border-radius: 4px;" />
          </div>
        </div>
        
        <SectionTextWithLine text="設定" />
        <div style="padding: 16px 0; display: flex; flex-direction: column; gap: 12px;">
          <label style="display: flex; align-items: center; gap: 8px; font-size: 14px; color: #333;">
            <input type="checkbox" />
            メール通知を受け取る
          </label>
          <label style="display: flex; align-items: center; gap: 8px; font-size: 14px; color: #333;">
            <input type="checkbox" />
            プロフィールを公開する
          </label>
        </div>
      </div>
    `,
  }),
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'フォーム内でセクション区切りとして使用した例。情報を論理的にグループ化しています。',
      },
    },
  },
};

// ダッシュボードでの使用例
export const DashboardSections: Story = {
  render: () => ({
    components: { SectionTextWithLine },
    template: `
      <div style="width: 700px; background: #f8f9fa; padding: 24px; border-radius: 8px;">
        <h1 style="margin: 0 0 32px 0; font-size: 24px; color: #333;">管理ダッシュボード</h1>
        
        <SectionTextWithLine text="今日の概要" />
        <div style="padding: 16px 0 32px 0; display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;">
          <div style="background: white; padding: 16px; border-radius: 6px; text-align: center;">
            <div style="font-size: 24px; font-weight: bold; color: #007bff;">1,234</div>
            <div style="font-size: 12px; color: #666;">新規ユーザー</div>
          </div>
          <div style="background: white; padding: 16px; border-radius: 6px; text-align: center;">
            <div style="font-size: 24px; font-weight: bold; color: #28a745;">89.5%</div>
            <div style="font-size: 12px; color: #666;">稼働率</div>
          </div>
          <div style="background: white; padding: 16px; border-radius: 6px; text-align: center;">
            <div style="font-size: 24px; font-weight: bold; color: #ffc107;">42</div>
            <div style="font-size: 12px; color: #666;">未対応チケット</div>
          </div>
        </div>
        
        <SectionTextWithLine text="最近のアクティビティ" />
        <div style="padding: 16px 0 32px 0; background: white; border-radius: 6px; padding: 16px;">
          <div style="font-size: 14px; color: #666; line-height: 1.6;">
            • 新しいユーザーが登録されました<br/>
            • システムメンテナンスが完了しました<br/>
            • レポートが生成されました<br/>
            • セキュリティアップデートが適用されました
          </div>
        </div>
        
        <SectionTextWithLine text="システム状態" />
        <div style="padding: 16px 0; display: flex; gap: 16px;">
          <div style="flex: 1; background: white; padding: 16px; border-radius: 6px;">
            <div style="font-weight: bold; margin-bottom: 8px;">サーバー状態</div>
            <div style="color: #28a745; font-size: 14px;">● 正常稼働中</div>
          </div>
          <div style="flex: 1; background: white; padding: 16px; border-radius: 6px;">
            <div style="font-weight: bold; margin-bottom: 8px;">データベース</div>
            <div style="color: #28a745; font-size: 14px;">● 接続良好</div>
          </div>
        </div>
      </div>
    `,
  }),
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'ダッシュボードでの使用例。異なる情報のカテゴリを明確に区切っています。',
      },
    },
  },
};

// 幅の異なるコンテナでの表示
export const DifferentWidths: Story = {
  render: () => ({
    components: { SectionTextWithLine },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px; align-items: center;">
        <div style="width: 300px; border: 1px dashed #ccc; padding: 16px;">
          <SectionTextWithLine text="幅300px" />
        </div>
        <div style="width: 500px; border: 1px dashed #ccc; padding: 16px;">
          <SectionTextWithLine text="幅500px" />
        </div>
        <div style="width: 800px; border: 1px dashed #ccc; padding: 16px;">
          <SectionTextWithLine text="幅800px" />
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: '異なる幅のコンテナでの表示例。右側の線が自動的に伸縮します。',
      },
    },
  },
};
