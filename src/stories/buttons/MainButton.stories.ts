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

// デフォルトの送信ボタン
export const SubmitDefault: Story = {
  args: {
    type: 'submit',
  },
};

// デフォルトのキャンセルボタン
export const CancelDefault: Story = {
  args: {
    type: 'cancel',
  },
};

// カスタムテキストの送信ボタン
export const SubmitWithCustomText: Story = {
  args: {
    type: 'submit',
    text: '保存',
  },
};

// カスタムテキストのキャンセルボタン
export const CancelWithCustomText: Story = {
  args: {
    type: 'cancel',
    text: '戻る',
  },
};

// 無効化された送信ボタン
export const SubmitDisabled: Story = {
  args: {
    type: 'submit',
    disabled: true,
  },
};

// 無効化されたキャンセルボタン
export const CancelDisabled: Story = {
  args: {
    type: 'cancel',
    disabled: true,
  },
};

// ローディング中の送信ボタン
export const SubmitLoading: Story = {
  args: {
    type: 'submit',
    loading: true,
  },
};

// ローディング中のキャンセルボタン
export const CancelLoading: Story = {
  args: {
    type: 'cancel',
    loading: true,
  },
};

// 長いテキストのボタン
export const LongText: Story = {
  args: {
    type: 'submit',
    text: '非常に長いテキストのボタン',
  },
};

// ボタンのバリエーション表示
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
        story: 'すべてのボタンバリエーションの表示例',
      },
    },
  },
};
