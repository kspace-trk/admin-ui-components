<script setup lang="ts">
// 表示用の静的データ
const formData = ref({
  name: 'サンプル名前',
  description: 'サンプル説明文',
})

// サイドメニューの設定（SideHeaderコンポーネント用）
const _sideMenuItems = [
  { path: '/dashboard', label: 'ダッシュボード', icon: 'mdi:view-dashboard' },
  { path: '/users', label: 'ユーザー管理', icon: 'mdi:account-group' },
  { path: '/settings', label: '設定', icon: 'mdi:cog' },
]
</script>

<template>
  <NuxtLayout name="default">
    <div class="playground">
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
