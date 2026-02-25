<script setup lang="ts">
import type { SelectOption, DataTableColumn, BreadcrumbItem, TabItem, DropdownMenuItem } from '../src/runtime'

// 表示用の静的データ
const formData = ref({
  name: 'サンプル名前',
  description: 'サンプル説明文',
  readonlyText: 'これは読み取り専用のテキストエリアです。編集することはできません。',
})

// サイドメニューの設定（SideHeaderコンポーネント用）
const _sideMenuItems = [
  { path: '/dashboard', label: 'ダッシュボード', icon: 'mdi:view-dashboard' },
  { path: '/users', label: 'ユーザー管理', icon: 'mdi:account-group' },
  { path: '/settings', label: '設定', icon: 'mdi:cog' },
]

// --- SelectField ---
const selectedCategory = ref('')
const categoryOptions: SelectOption[] = [
  { label: 'お知らせ', value: 'news' },
  { label: 'ブログ', value: 'blog' },
  { label: 'プレスリリース', value: 'press' },
  { label: 'イベント（無効）', value: 'event', disabled: true },
]

// --- Checkbox ---
const checkPublish = ref(true)
const checkFeatured = ref(false)
const checkDisabled = ref(false)

// --- ToggleSwitch ---
const togglePublic = ref(true)
const toggleNotification = ref(false)

// --- SearchField ---
const searchQuery = ref('')

// --- DataTable ---
const tableColumns: DataTableColumn[] = [
  { key: 'id', label: 'ID', width: '60px', align: 'center' },
  { key: 'title', label: 'タイトル', sortable: true },
  { key: 'category', label: 'カテゴリ' },
  { key: 'status', label: 'ステータス', width: '120px', align: 'center' },
  { key: 'date', label: '更新日', width: '120px', sortable: true },
  { key: 'actions', label: '', width: '48px', align: 'center' },
]

const tableRows = ref([
  { id: 1, title: 'はじめてのお知らせ', category: 'お知らせ', status: 'published', date: '2026-02-20' },
  { id: 2, title: '新機能リリースのご案内', category: 'ブログ', status: 'draft', date: '2026-02-22' },
  { id: 3, title: '年末年始の営業について', category: 'お知らせ', status: 'published', date: '2026-02-24' },
  { id: 4, title: '採用イベント開催決定', category: 'イベント', status: 'archived', date: '2026-01-15' },
  { id: 5, title: 'セキュリティアップデート', category: 'プレスリリース', status: 'published', date: '2026-02-25' },
])

const tableSortKey = ref('date')
const tableSortOrder = ref<'asc' | 'desc'>('desc')

const handleSort = (key: string) => {
  if (tableSortKey.value === key) {
    tableSortOrder.value = tableSortOrder.value === 'asc' ? 'desc' : 'asc'
  }
  else {
    tableSortKey.value = key
    tableSortOrder.value = 'asc'
  }
}

const statusVariant = (status: string) => {
  switch (status) {
    case 'published': return 'success'
    case 'draft': return 'warning'
    case 'archived': return 'default'
    default: return 'default'
  }
}

const statusLabel = (status: string) => {
  switch (status) {
    case 'published': return '公開済み'
    case 'draft': return '下書き'
    case 'archived': return 'アーカイブ'
    default: return status
  }
}

// --- Pagination ---
const currentPage = ref(1)
const totalPages = 8

// --- Breadcrumb ---
const breadcrumbItems: BreadcrumbItem[] = [
  { label: 'ダッシュボード', to: '/dashboard' },
  { label: 'コンテンツ管理', to: '/contents' },
  { label: '記事編集' },
]

// --- Tabs ---
const activeTab = ref('basic')
const tabItems: TabItem[] = [
  { key: 'basic', label: '基本情報' },
  { key: 'seo', label: 'SEO設定' },
  { key: 'advanced', label: '詳細設定' },
  { key: 'history', label: '変更履歴', disabled: true },
]

// --- Modal ---
const isModalOpen = ref(false)
const isDeleteModalOpen = ref(false)

// --- Toast ---
const toastSuccess = ref(false)
const toastError = ref(false)

// --- DropdownMenu ---
const dropdownItems: DropdownMenuItem[] = [
  { key: 'edit', label: '編集', icon: 'mdi:pencil' },
  { key: 'duplicate', label: '複製', icon: 'mdi:content-copy' },
  { key: 'preview', label: 'プレビュー', icon: 'mdi:eye' },
  { key: 'delete', label: '削除', icon: 'mdi:delete', danger: true },
]

const handleDropdownSelect = (item: DropdownMenuItem) => {
  console.log('選択:', item.key)
}

// --- FileUpload ---
const handleFileChange = (files: File[]) => {
  console.log('選択されたファイル:', files.map(f => f.name))
}

const handleFileError = (message: string) => {
  console.error('ファイルエラー:', message)
}
</script>

<template>
  <NuxtLayout name="default">
    <div class="playground">
      <!-- Buttons テスト -->
      <section>
        <h2>Buttons</h2>
        <div style="display: flex; gap: 10px; margin-bottom: 20px;">
          <KSMainButton
            type="submit"
            text="送信ボタン"
          />
          <KSMainButton
            type="cancel"
            text="キャンセルボタン"
          />
          <KSMainButton
            type="submit"
            text="ローディング"
            :loading="true"
          />
          <KSMainButton
            type="submit"
            text="無効化"
            :disabled="true"
          />
        </div>
      </section>

      <!-- Forms テスト -->
      <section>
        <h2>Forms</h2>
        <div style="max-width: 400px;">
          <KSInputField
            v-model="formData.name"
            label="名前"
            placeholder="名前を入力してください"
            :required="true"
          />
          <KSTextareaField
            v-model="formData.description"
            label="説明"
            placeholder="説明を入力してください"
            :rows="4"
          />
          <div style="margin-top: 20px;">
            <KSTextareaField
              v-model="formData.readonlyText"
              label="読み取り専用テキストエリア"
              placeholder="このプレースホルダーは表示されません"
              :rows="3"
              :readonly="true"
            />
          </div>
        </div>
      </section>

      <!-- SelectField テスト -->
      <section>
        <h2>SelectField</h2>
        <div style="max-width: 400px;">
          <KSSelectField
            v-model="selectedCategory"
            label="カテゴリ"
            placeholder="カテゴリを選択してください"
            :options="categoryOptions"
          />
          <pre style="margin-top: 12px;">選択中: {{ selectedCategory || '未選択' }}</pre>
        </div>
      </section>

      <!-- Checkbox テスト -->
      <section>
        <h2>Checkbox</h2>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <KSCheckbox
            v-model="checkPublish"
            label="公開する"
          />
          <KSCheckbox
            v-model="checkFeatured"
            label="注目記事に設定"
          />
          <KSCheckbox
            v-model="checkDisabled"
            label="無効化されたチェックボックス"
            :disabled="true"
          />
        </div>
        <pre style="margin-top: 12px;">公開: {{ checkPublish }}, 注目: {{ checkFeatured }}</pre>
      </section>

      <!-- ToggleSwitch テスト -->
      <section>
        <h2>ToggleSwitch</h2>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <KSToggleSwitch
            v-model="togglePublic"
            label="公開状態"
          />
          <KSToggleSwitch
            v-model="toggleNotification"
            label="通知を送信"
          />
          <KSToggleSwitch
            :model-value="false"
            label="無効化されたトグル"
            :disabled="true"
          />
        </div>
        <pre style="margin-top: 12px;">公開: {{ togglePublic }}, 通知: {{ toggleNotification }}</pre>
      </section>

      <!-- SearchField テスト -->
      <section>
        <h2>SearchField</h2>
        <div style="max-width: 400px;">
          <KSSearchField
            v-model="searchQuery"
            placeholder="記事を検索..."
          />
          <pre style="margin-top: 12px;">検索文字列: "{{ searchQuery }}"</pre>
        </div>
      </section>

      <!-- FileUpload テスト -->
      <section>
        <h2>FileUpload</h2>
        <div style="max-width: 480px;">
          <KSFileUpload
            label="サムネイル画像"
            accept="image/*"
            :max-size="5242880"
            @change="handleFileChange"
            @error="handleFileError"
          />
        </div>
      </section>

      <!-- Badge テスト -->
      <section>
        <h2>Badge</h2>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <KSBadge
            text="デフォルト"
            variant="default"
          />
          <KSBadge
            text="公開済み"
            variant="success"
          />
          <KSBadge
            text="下書き"
            variant="warning"
          />
          <KSBadge
            text="エラー"
            variant="danger"
          />
          <KSBadge
            text="情報"
            variant="info"
          />
        </div>
      </section>

      <!-- DataTable テスト -->
      <section>
        <h2>DataTable</h2>
        <KSDataTable
          :columns="tableColumns"
          :rows="tableRows"
          :sort-key="tableSortKey"
          :sort-order="tableSortOrder"
          @sort="handleSort"
        >
          <template #cell-status="{ value }">
            <KSBadge
              :text="statusLabel(value as string)"
              :variant="statusVariant(value as string)"
            />
          </template>
          <template #cell-actions>
            <KSDropdownMenu
              :items="dropdownItems"
              @select="handleDropdownSelect"
            />
          </template>
        </KSDataTable>

        <div style="margin-top: 16px;">
          <h3 style="font-size: 13px; color: #666; margin-bottom: 8px;">
            ローディング状態
          </h3>
          <KSDataTable
            :columns="tableColumns.slice(0, 4)"
            :rows="[]"
            :loading="true"
          />
        </div>

        <div style="margin-top: 16px;">
          <h3 style="font-size: 13px; color: #666; margin-bottom: 8px;">
            空の状態
          </h3>
          <KSDataTable
            :columns="tableColumns.slice(0, 4)"
            :rows="[]"
            empty-message="該当するコンテンツがありません"
          />
        </div>
      </section>

      <!-- Pagination テスト -->
      <section>
        <h2>Pagination</h2>
        <KSPagination
          v-model:current-page="currentPage"
          :total-pages="totalPages"
        />
        <pre style="margin-top: 12px;">現在のページ: {{ currentPage }} / {{ totalPages }}</pre>
      </section>

      <!-- Breadcrumb テスト -->
      <section>
        <h2>Breadcrumb</h2>
        <KSBreadcrumb :items="breadcrumbItems" />
      </section>

      <!-- Tabs テスト -->
      <section>
        <h2>Tabs</h2>
        <KSTabs
          v-model="activeTab"
          :tabs="tabItems"
        >
          <template #basic>
            <div style="padding: 8px 0;">
              <KSInputField
                v-model="formData.name"
                label="タイトル"
                placeholder="記事タイトルを入力"
              />
            </div>
          </template>
          <template #seo>
            <div style="padding: 8px 0;">
              <KSInputField
                model-value=""
                label="メタタイトル"
                placeholder="SEO用のタイトルを入力"
              />
              <div style="margin-top: 16px;">
                <KSTextareaField
                  model-value=""
                  label="メタディスクリプション"
                  placeholder="検索結果に表示される説明文"
                  :rows="3"
                />
              </div>
            </div>
          </template>
          <template #advanced>
            <div style="padding: 8px 0;">
              <KSToggleSwitch
                :model-value="true"
                label="コメントを許可"
              />
            </div>
          </template>
        </KSTabs>
        <pre style="margin-top: 12px;">アクティブタブ: {{ activeTab }}</pre>
      </section>

      <!-- Modal テスト -->
      <section>
        <h2>Modal</h2>
        <div style="display: flex; gap: 10px;">
          <KSMainButton
            type="submit"
            text="モーダルを開く"
            @click="isModalOpen = true"
          />
          <KSMainButton
            type="cancel"
            text="削除確認ダイアログ"
            @click="isDeleteModalOpen = true"
          />
        </div>

        <KSModal
          :open="isModalOpen"
          title="記事のプレビュー"
          width="560px"
          @close="isModalOpen = false"
        >
          <p style="font-size: 14px; color: #4B464E; line-height: 1.8;">
            これはモーダルの本文です。記事のプレビューや詳細情報を表示するのに使用します。
          </p>
          <template #footer>
            <KSMainButton
              type="cancel"
              text="閉じる"
              @click="isModalOpen = false"
            />
            <KSMainButton
              type="submit"
              text="保存"
              @click="isModalOpen = false"
            />
          </template>
        </KSModal>

        <KSModal
          :open="isDeleteModalOpen"
          title="削除の確認"
          width="400px"
          @close="isDeleteModalOpen = false"
        >
          <p style="font-size: 14px; color: #4B464E; line-height: 1.8;">
            この記事を削除してよろしいですか？<br>この操作は取り消せません。
          </p>
          <template #footer>
            <KSMainButton
              type="cancel"
              text="キャンセル"
              @click="isDeleteModalOpen = false"
            />
            <KSMainButton
              type="submit"
              text="削除する"
              @click="isDeleteModalOpen = false"
            />
          </template>
        </KSModal>
      </section>

      <!-- Toast テスト -->
      <section>
        <h2>Toast</h2>
        <div style="display: flex; gap: 10px;">
          <KSMainButton
            type="submit"
            text="成功通知"
            @click="toastSuccess = true"
          />
          <KSMainButton
            type="cancel"
            text="エラー通知"
            @click="toastError = true"
          />
        </div>

        <KSToast
          :visible="toastSuccess"
          message="記事を保存しました"
          type="success"
          :duration="3000"
          @close="toastSuccess = false"
        />

        <KSToast
          :visible="toastError"
          message="記事の保存に失敗しました。再度お試しください。"
          type="error"
          :duration="5000"
          @close="toastError = false"
        />
      </section>

      <!-- DropdownMenu テスト -->
      <section>
        <h2>DropdownMenu</h2>
        <div style="display: flex; gap: 24px; align-items: center;">
          <div>
            <p style="font-size: 13px; color: #666; margin-bottom: 8px;">
              デフォルト（縦三点）
            </p>
            <KSDropdownMenu
              :items="dropdownItems"
              @select="handleDropdownSelect"
            />
          </div>
          <div>
            <p style="font-size: 13px; color: #666; margin-bottom: 8px;">
              横三点アイコン
            </p>
            <KSDropdownMenu
              :items="dropdownItems"
              trigger-icon="mdi:dots-horizontal"
              @select="handleDropdownSelect"
            />
          </div>
        </div>
      </section>

      <!-- Panels テスト -->
      <section>
        <h2>Panels</h2>
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <KSTextItem
            :text="`ユーザー名: ${formData.name || '未入力'}`"
          />
          <KSTextItem
            :text="`説明: ${formData.description || '未入力'}`"
          />
        </div>
      </section>

      <!-- Sections テスト -->
      <section>
        <h2>Sections</h2>
        <KSSectionTextWithLine text="セクション見出し" />
      </section>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.playground {
  padding: 16px;
}

section {
  margin-bottom: 40px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 1px;
}

h1 {
  color: #333;
  margin-bottom: 30px;
}

h2 {
  color: #666;
  margin-bottom: 20px;
  border-bottom: 2px solid #eee;
  padding-bottom: 10px;
}

pre {
  background: #f5f5f5;
  padding: 10px;
  border-radius: 1px;
  font-size: 12px;
  overflow-x: auto;
}
</style>
