import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import TextItem from '../../components/panels/TextItem.vue';

const meta: Meta<typeof TextItem> = {
  title: 'Components/Panels/TextItem',
  component: TextItem,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'テキストアイテムコンポーネント。1行または複数行のテキスト表示に対応し、閉じるアイコンを表示できます。',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: { type: 'text' },
      description: '表示するテキスト',
    },
    showCloseIcon: {
      control: { type: 'boolean' },
      description: '閉じるアイコンを表示するかどうか',
      defaultValue: false,
    },
    maxLines: {
      control: { type: 'number' },
      description: '最大表示行数（デフォルト: 1）',
      defaultValue: 1,
    },
  },
  args: {
    text: 'サンプルテキスト',
    showCloseIcon: false,
    maxLines: 1,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// デフォルト表示（1行）
export const Default: Story = {
  args: {
    text: 'これは1行のテキストアイテムです',
  },
  parameters: {
    docs: {
      description: {
        story: 'デフォルトの1行テキスト表示。',
      },
    },
  },
};

// 長いテキスト（1行で省略）
export const LongTextSingleLine: Story = {
  args: {
    text: 'これは非常に長いテキストで、1行では表示しきれないため省略記号で表示されます。ユーザーは全体の内容を確認するためにホバーまたは他の方法で詳細を確認する必要があります。',
    maxLines: 1,
  },
  parameters: {
    docs: {
      description: {
        story: '長いテキストを1行で表示し、省略記号で切り詰めた例。',
      },
    },
  },
};

// 複数行表示（3行）
export const MultipleLines: Story = {
  args: {
    text: 'これは複数行に対応したテキストアイテムです。長いテキストでも指定した行数まで表示することができます。ユーザーはより多くの情報を一度に確認できるため、利便性が向上します。',
    maxLines: 3,
  },
  parameters: {
    docs: {
      description: {
        story: '3行まで表示する複数行対応の例。',
      },
    },
  },
};

// 閉じるアイコン付き
export const WithCloseIcon: Story = {
  args: {
    text: 'この項目は削除できます',
    showCloseIcon: true,
  },
  parameters: {
    docs: {
      description: {
        story: '閉じるアイコン付きのテキストアイテム。',
      },
    },
  },
};

// 複数行 + 閉じるアイコン
export const MultiLinesWithClose: Story = {
  args: {
    text: 'これは複数行表示で閉じるアイコン付きのテキストアイテムです。長いコンテンツでも複数行で表示され、必要に応じて削除することができます。',
    maxLines: 2,
    showCloseIcon: true,
  },
  parameters: {
    docs: {
      description: {
        story: '複数行表示と閉じるアイコンを組み合わせた例。',
      },
    },
  },
};

// インタラクティブ（閉じる動作確認）
export const Interactive: Story = {
  render: (args) => ({
    components: { TextItem },
    setup() {
      const items = ref([
        { id: 1, text: '削除可能なアイテム 1' },
        { id: 2, text: '削除可能なアイテム 2' },
        { id: 3, text: 'これは長いテキストを含む削除可能なアイテムです。複数行で表示され、削除ボタンをクリックすることで項目を削除できます。' },
      ]);

      const removeItem = (id: number) => {
        items.value = items.value.filter(item => item.id !== id);
      };

      return { args, items, removeItem };
    },
    template: `
      <div style="width: 400px; display: flex; flex-direction: column; gap: 12px;">
        <p style="margin: 0 0 16px 0; font-size: 14px; color: #666;">
          項目をクリックして削除してみてください：
        </p>
        <TextItem
          v-for="item in items"
          :key="item.id"
          :text="item.text"
          :maxLines="item.id === 3 ? 2 : 1"
          :showCloseIcon="true"
          @close="removeItem(item.id)"
        />
        <p v-if="items.length === 0" style="margin: 20px 0; font-size: 14px; color: #999; text-align: center;">
          すべてのアイテムが削除されました
        </p>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: '削除機能の動作確認。アイテムをクリックして削除できます。',
      },
    },
  },
};

// 様々な行数のバリエーション
export const LineVariations: Story = {
  render: () => ({
    components: { TextItem },
    setup() {
      const sampleText = 'これは様々な行数設定を確認するためのサンプルテキストです。同じテキストでも行数の設定によって表示が変わります。長いテキストがどのように表示されるかを確認してください。';
      
      return { sampleText };
    },
    template: `
      <div style="width: 400px; display: flex; flex-direction: column; gap: 16px;">
        <div>
          <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #333;">1行表示</h4>
          <TextItem :text="sampleText" :maxLines="1" />
        </div>
        <div>
          <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #333;">2行表示</h4>
          <TextItem :text="sampleText" :maxLines="2" />
        </div>
        <div>
          <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #333;">3行表示</h4>
          <TextItem :text="sampleText" :maxLines="3" />
        </div>
        <div>
          <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #333;">5行表示</h4>
          <TextItem :text="sampleText" :maxLines="5" />
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: '同じテキストを異なる行数で表示した比較例。',
      },
    },
  },
};

// リスト表示例
export const ListExample: Story = {
  render: () => ({
    components: { TextItem },
    setup() {
      const listItems = ref([
        { id: 1, text: 'タスク 1: 短いタスク', lines: 1 },
        { id: 2, text: 'タスク 2: これは少し長めのタスクの説明です', lines: 1 },
        { id: 3, text: 'タスク 3: 非常に詳細な説明を含むタスクです。このタスクは複数の手順を含んでおり、詳細な説明が必要になります。', lines: 2 },
        { id: 4, text: 'タスク 4: 完了済み', lines: 1 },
        { id: 5, text: 'タスク 5: 重要度の高いタスクです。期限が迫っているため、優先的に対応する必要があります。関係者との調整も必要になる可能性があります。', lines: 3 },
      ]);

      const removeTask = (id: number) => {
        listItems.value = listItems.value.filter(item => item.id !== id);
      };

      return { listItems, removeTask };
    },
    template: `
      <div style="width: 500px;">
        <h3 style="margin: 0 0 20px 0; font-size: 18px; color: #333;">タスクリスト</h3>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <TextItem
            v-for="item in listItems"
            :key="item.id"
            :text="item.text"
            :maxLines="item.lines"
            :showCloseIcon="true"
            @close="removeTask(item.id)"
          />
        </div>
        <p v-if="listItems.length === 0" style="margin: 20px 0; font-size: 14px; color: #999; text-align: center;">
          すべてのタスクが完了しました！
        </p>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'タスクリストでの使用例。各項目で異なる行数を設定しています。',
      },
    },
  },
};
