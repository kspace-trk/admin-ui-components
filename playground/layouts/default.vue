<script setup lang="ts">
import { KSDashboardContainer } from '../../dist/runtime'

const sideMenuItems = [
  { path: '/dashboard', label: 'ダッシュボード', icon: 'mdi:view-dashboard' },
  { path: '/users', label: 'ユーザー管理', icon: 'mdi:account-group' },
  { path: '/settings', label: '設定', icon: 'mdi:cog' },
]
</script>

<template>
  <div>
    <KSDashboardContainer
      :side-header-props="{
        logoText: '管理画面',
        menuItems: sideMenuItems,
      }"
      :top-header-props="{ title: '管理画面' }"
    >
      <slot />
    </KSDashboardContainer>
  </div>
</template>
