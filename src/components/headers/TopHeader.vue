<script setup lang="ts">
interface Props {
  /** ページタイトル */
  title: string;
}

defineProps<Props>();
</script>

<template>
  <div class="top-header">
    <h1 class="top-header__title">
      {{ title }}
    </h1>
  </div>
</template>

<style lang="scss" scoped>
.top-header {
  display: flex;
  align-items: center;
  justify-content: space-between; // left側にタイトル、right側にボタンを配置
  padding: 24px 36px;
  position: fixed;
  top: 0;
  width: calc(100% - 240px); // SideHeaderの幅を除いた幅
  background-color: $white-100; // 背景色を設定してコンテンツが透けないようにする
  border-bottom: 1px solid $black-400;
  z-index: 99;

  @media (max-width: 720px) {
    width: 100%;
  }

  &__title {
    font-weight: 700;
    font-size: 16px;
    color: $black-100;
    letter-spacing: 1.28px;
    line-height: normal;
    margin: 0;
    white-space: nowrap;
  }
}
</style>
