<template>
  <div class="playground">
    <h1>Admin UI Components Playground</h1>
    
    <!-- Top Header テスト -->
    <section>
      <h2>Top Header</h2>
      <TopHeader 
        title="管理画面"
        :user="{ name: 'テストユーザー', email: 'test@example.com' }"
        @logout="handleLogout"
      />
    </section>

    <!-- Side Header テスト -->
    <section>
      <h2>Side Header</h2>
      <div style="display: flex; height: 400px;">
        <SideHeader 
          :menu-items="sideMenuItems"
          @menu-click="handleMenuClick"
        />
        <div style="flex: 1; padding: 20px; background: #f5f5f5;">
          メインコンテンツエリア
        </div>
      </div>
    </section>

    <!-- Buttons テスト -->
    <section>
      <h2>Buttons</h2>
      <div style="display: flex; gap: 10px; margin-bottom: 20px;">
        <MainButton 
          type="submit" 
          text="送信ボタン"
          @click="handleButtonClick('submit')"
        />
        <MainButton 
          type="cancel" 
          text="キャンセルボタン"
          @click="handleButtonClick('cancel')"
        />
        <MainButton 
          type="submit" 
          text="ローディング"
          :loading="true"
        />
        <MainButton 
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
        <InputField
          v-model="formData.name"
          label="名前"
          placeholder="名前を入力してください"
          :required="true"
        />
        <TextareaField
          v-model="formData.description"
          label="説明"
          placeholder="説明を入力してください"
          :rows="4"
        />
      </div>
    </section>

    <!-- Panels テスト -->
    <section>
      <h2>Panels</h2>
      <TextItem
        label="ユーザー名"
        :value="formData.name || '未入力'"
      />
      <TextItem
        label="説明"
        :value="formData.description || '未入力'"
      />
    </section>

    <!-- Sections テスト -->
    <section>
      <h2>Sections</h2>
      <SectionTextWithLine text="セクション見出し" />
    </section>

    <!-- Composables テスト -->
    <section>
      <h2>Composables Test</h2>
      <div>
        <p>Form State:</p>
        <pre>{{ JSON.stringify(formState, null, 2) }}</pre>
      </div>
    </section>
  </div>
</template>

<script setup>
const { createSideHeaderMenuItem, createFormState } = useAdminComponents()

// フォームデータ
const formData = ref({
  name: '',
  description: ''
})

// フォーム状態管理のテスト
const formState = createFormState({
  testField: '',
  anotherField: ''
})

// サイドメニューの設定
const sideMenuItems = ref([
  createSideHeaderMenuItem('ダッシュボード', '/dashboard', 'mdi:view-dashboard'),
  createSideHeaderMenuItem('ユーザー管理', '/users', 'mdi:account-group', [
    createSideHeaderMenuItem('ユーザー一覧', '/users/list'),
    createSideHeaderMenuItem('ユーザー追加', '/users/add')
  ]),
  createSideHeaderMenuItem('設定', '/settings', 'mdi:cog')
])

// イベントハンドラー
const handleLogout = () => {
  console.log('ログアウトが実行されました')
}

const handleMenuClick = (menuItem) => {
  console.log('メニューがクリックされました:', menuItem)
}

const handleButtonClick = (type) => {
  console.log(`${type} ボタンがクリックされました`)
}
</script>

<style scoped>
.playground {
  padding: 20px;
}

section {
  margin-bottom: 40px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
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
  border-radius: 4px;
  font-size: 12px;
  overflow-x: auto;
}
</style>
