import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import InputField from '../../components/forms/InputField.vue';

const meta: Meta<typeof InputField> = {
  title: 'Components/Forms/InputField',
  component: InputField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '入力フィールドコンポーネント。ラベル付きのテキスト入力欄を提供します。',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'フィールドのラベル',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'プレースホルダーテキスト',
    },
    modelValue: {
      control: { type: 'text' },
      description: '入力値',
    },
  },
  args: {
    label: 'ラベル',
    placeholder: 'プレースホルダーを入力',
    modelValue: '',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// デフォルト表示
export const Default: Story = {
  args: {
    label: 'お名前',
    placeholder: 'お名前を入力してください',
  },
  parameters: {
    docs: {
      description: {
        story: 'デフォルトの入力フィールド。基本的な使用例です。',
      },
    },
  },
};

// 入力済み
export const WithValue: Story = {
  args: {
    label: 'お名前',
    placeholder: 'お名前を入力してください',
    modelValue: '山田太郎',
  },
  parameters: {
    docs: {
      description: {
        story: '値が入力済みの状態。',
      },
    },
  },
};

// インタラクティブ
export const Interactive: Story = {
  render: (args) => ({
    components: { InputField },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: `
      <div style="width: 300px;">
        <InputField 
          v-bind="args" 
          v-model="value"
        />
        <p style="margin-top: 16px; font-size: 14px; color: #666;">
          入力値: {{ value }}
        </p>
      </div>
    `,
  }),
  args: {
    label: 'リアルタイム入力',
    placeholder: '入力するとリアルタイムで表示されます',
  },
  parameters: {
    docs: {
      description: {
        story: 'v-modelによる双方向バインディングの動作確認。',
      },
    },
  },
};

// フォーム例
export const FormExample: Story = {
  render: () => ({
    components: { InputField },
    setup() {
      const formData = ref({
        name: '',
        email: '',
        phone: '',
      });
      return { formData };
    },
    template: `
      <div style="width: 400px; display: flex; flex-direction: column; gap: 16px;">
        <InputField 
          label="お名前" 
          placeholder="お名前を入力してください"
          v-model="formData.name"
        />
        <InputField 
          label="メールアドレス" 
          placeholder="example@domain.com"
          v-model="formData.email"
        />
        <InputField 
          label="電話番号" 
          placeholder="090-1234-5678"
          v-model="formData.phone"
        />
        <div style="margin-top: 20px; padding: 16px; background-color: #f5f5f5; border-radius: 8px;">
          <h4 style="margin: 0 0 12px 0; color: #333;">入力データ:</h4>
          <pre style="margin: 0; font-size: 12px; white-space: pre-wrap;">{{ JSON.stringify(formData, null, 2) }}</pre>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: '複数の入力フィールドを使ったフォームの例。',
      },
    },
  },
};
