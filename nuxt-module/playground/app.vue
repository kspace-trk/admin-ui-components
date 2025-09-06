<script setup lang="ts">
const { createSideHeaderMenuItem } = useAdminComponents()

// 表示用の静的データ
const formData = ref({
  name: 'サンプル名前',
  description: 'サンプル説明文'
})

// サイドメニューの設定（SideHeaderコンポーネント用）
const sideMenuItems = [
  { path: '/dashboard', label: 'ダッシュボード', icon: 'mdi:view-dashboard' },
  { path: '/users', label: 'ユーザー管理', icon: 'mdi:account-group' },
  { path: '/settings', label: '設定', icon: 'mdi:cog' }
]
</script>

<template>
  <div class="playground">
    <h1>Admin UI Components Playground</h1>
    
    <!-- Top Header テスト -->
    <section>
      <h2>Top Header</h2>
      <TopHeader 
        title="管理画面"
        :user="{ name: 'テストユーザー', email: 'test@example.com' }"
      />
    </section>

    <!-- Side Header テスト -->
    <section>
      <h2>Side Header</h2>
      <div style="display: flex; height: 400px;">
        <SideHeader 
          logo-text="管理画面"
          :menu-items="sideMenuItems"
          current-path="/dashboard"
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
        />
        <MainButton 
          type="cancel" 
          text="キャンセルボタン"
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
        :text="`ユーザー名: ${formData.name || '未入力'}`"
      />
      <TextItem
        :text="`説明: ${formData.description || '未入力'}`"
      />
    </section>

    <!-- Sections テスト -->
    <section>
      <h2>Sections</h2>
      <SectionTextWithLine text="セクション見出し" />
    </section>

  </div>
</template>

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
