<script setup lang="ts">
import { KSDashboardContainer } from '../../dist/runtime'

const sideMenuItems = [
  { path: '/dashboard', label: 'ダッシュボード', icon: 'mdi:view-dashboard' },
]

const sideMenuSections = [
  {
    label: 'ユーザー管理',
    items: [
      { path: '/users', label: 'ユーザー一覧', icon: 'mdi:account-group' },
      { path: '/users/roles', label: 'ロール管理', icon: 'mdi:shield-account' },
    ],
  },
  {
    label: '設定',
    items: [
      { path: '/settings', label: '一般設定', icon: 'mdi:cog' },
      { path: '/settings/security', label: 'セキュリティ', icon: 'mdi:lock' },
    ],
  },
]
</script>

<template>
  <div>
    <KSDashboardContainer
      :side-header-props="{
        logoText: '管理画面',
        menuItems: sideMenuItems,
        menuSections: sideMenuSections,
      }"
      :top-header-props="{ title: '管理画面' }"
    >
      <slot />
    </KSDashboardContainer>
  </div>
</template>
