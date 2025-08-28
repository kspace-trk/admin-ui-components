import type { Meta, StoryObj } from '@storybook/vue3';
import MainButton from '../../components/buttons/MainButton.vue';

const meta: Meta<typeof MainButton> = {
  title: 'Components/Buttons/MainButton',
  component: MainButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'メインボタンコンポーネント。送信ボタンまたはキャンセルボタンとして使用できます。',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['submit', 'cancel'],
      description: 'ボタンのタイプ（送信またはキャンセル）',
      defaultValue: 'submit',
    },
    text: {
      control: { type: 'text' },
      description: 'ボタンのテキスト',
    },
    disabled: {
      control: { type: 'boolean' },
      description: '無効化状態',
      defaultValue: false,
    },
    loading: {
      control: { type: 'boolean' },
      description: 'ローディング状態',
      defaultValue: false,
    },
  },
  args: {
    type: 'submit',
    disabled: false,
    loading: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 送信ボタン
export const Submit: Story = {
  args: {
    type: 'submit',
  },
  parameters: {
    docs: {
      description: {
        story: 'デフォルトの送信ボタン。',
      },
    },
  },
};

// キャンセルボタン
export const Cancel: Story = {
  args: {
    type: 'cancel',
  },
  parameters: {
    docs: {
      description: {
        story: 'デフォルトのキャンセルボタン。',
      },
    },
  },
};

// ローディング状態
export const Loading: Story = {
  args: {
    type: 'submit',
    loading: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'ローディング状態のボタン。',
      },
    },
  },
};

// 無効化状態
export const Disabled: Story = {
  args: {
    type: 'submit',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: '無効化状態のボタン。',
      },
    },
  },
};

// すべてのバリエーション
export const AllVariations: Story = {
  render: () => ({
    components: { MainButton },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; align-items: center;">
        <div style="display: flex; gap: 16px;">
          <MainButton type="submit" />
          <MainButton type="cancel" />
        </div>
        <div style="display: flex; gap: 16px;">
          <MainButton type="submit" text="保存" />
          <MainButton type="cancel" text="戻る" />
        </div>
        <div style="display: flex; gap: 16px;">
          <MainButton type="submit" :disabled="true" />
          <MainButton type="cancel" :disabled="true" />
        </div>
        <div style="display: flex; gap: 16px;">
          <MainButton type="submit" :loading="true" />
          <MainButton type="cancel" :loading="true" />
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'すべてのボタンバリエーションの一覧表示。',
      },
    },
  },
};
