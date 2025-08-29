import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import TextAreaField from '../../components/forms/TextareaField.vue';

const meta: Meta<typeof TextAreaField> = {
  title: 'Components/Forms/TextAreaField',
  component: TextAreaField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'テキストエリアフィールドコンポーネント。ラベル付きの複数行テキスト入力欄を提供します。',
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
    rows: {
      control: { type: 'number' },
      description: 'テキストエリアの行数（デフォルト: 4）',
    },
  },
  args: {
    label: 'ラベル',
    placeholder: 'プレースホルダーを入力',
    modelValue: '',
    rows: 4,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// デフォルト表示
export const Default: Story = {
  args: {
    label: 'お問い合わせ内容',
    placeholder: 'お問い合わせ内容を入力してください',
  },
  parameters: {
    docs: {
      description: {
        story: 'デフォルトのテキストエリアフィールド。基本的な使用例です。',
      },
    },
  },
};

// 入力済み
export const WithValue: Story = {
  args: {
    label: 'お問い合わせ内容',
    placeholder: 'お問い合わせ内容を入力してください',
    modelValue: 'いつもお世話になっております。\n\n商品についてお伺いしたいことがございます。\nよろしくお願いいたします。',
  },
  parameters: {
    docs: {
      description: {
        story: '値が入力済みの状態。改行も含まれています。',
      },
    },
  },
};

// 行数指定
export const CustomRows: Story = {
  args: {
    label: '詳細説明',
    placeholder: '詳細な説明を入力してください',
    rows: 8,
  },
  parameters: {
    docs: {
      description: {
        story: 'rows属性で行数を指定した例（8行）。',
      },
    },
  },
};

// 短いテキストエリア
export const ShortTextArea: Story = {
  args: {
    label: 'メモ',
    placeholder: 'メモを入力',
    rows: 2,
  },
  parameters: {
    docs: {
      description: {
        story: '2行の短いテキストエリア。メモなどの短い入力に適しています。',
      },
    },
  },
};

// インタラクティブ
export const Interactive: Story = {
  render: (args) => ({
    components: { TextAreaField },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: `
      <div style="width: 400px;">
        <TextAreaField 
          v-bind="args" 
          v-model="value"
        />
        <div style="margin-top: 16px; padding: 12px; background-color: #f5f5f5; border-radius: 8px;">
          <p style="margin: 0 0 8px 0; font-weight: bold; font-size: 14px; color: #333;">入力値:</p>
          <pre style="margin: 0; font-size: 12px; white-space: pre-wrap; color: #666;">{{ value || '（入力なし）' }}</pre>
          <p style="margin: 8px 0 0 0; font-size: 12px; color: #999;">文字数: {{ value.length }}</p>
        </div>
      </div>
    `,
  }),
  args: {
    label: 'リアルタイム入力',
    placeholder: '入力するとリアルタイムで表示されます',
    rows: 4,
  },
  parameters: {
    docs: {
      description: {
        story: 'v-modelによる双方向バインディングの動作確認。文字数も表示されます。',
      },
    },
  },
};

// フォーム例
export const FormExample: Story = {
  render: () => ({
    components: { TextAreaField },
    setup() {
      const formData = ref({
        subject: '',
        content: '',
        memo: '',
      });
      return { formData };
    },
    template: `
      <div style="width: 500px; display: flex; flex-direction: column; gap: 20px;">
        <TextAreaField 
          label="件名" 
          placeholder="件名を入力してください"
          rows="2"
          v-model="formData.subject"
        />
        <TextAreaField 
          label="お問い合わせ内容" 
          placeholder="お問い合わせ内容を詳しく入力してください"
          rows="6"
          v-model="formData.content"
        />
        <TextAreaField 
          label="備考・メモ" 
          placeholder="その他ご要望やメモがあれば入力してください"
          rows="3"
          v-model="formData.memo"
        />
        <div style="margin-top: 20px; padding: 16px; background-color: #f5f5f5; border-radius: 8px;">
          <h4 style="margin: 0 0 12px 0; color: #333;">入力データ:</h4>
          <pre style="margin: 0; font-size: 12px; white-space: pre-wrap; color: #666;">{{ JSON.stringify(formData, null, 2) }}</pre>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: '複数のテキストエリアフィールドを使ったフォームの例。それぞれ異なる行数を設定しています。',
      },
    },
  },
};
