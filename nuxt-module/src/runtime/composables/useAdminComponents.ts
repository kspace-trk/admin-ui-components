import { ref, computed } from 'vue'
import type { SideHeaderMenuItem } from '../components/headers/SideHeader.vue'

/**
 * Admin UI Components用のcomposable
 * コンポーネントで使用される型やユーティリティ関数を提供
 */
export const useAdminComponents = () => {
  /**
   * サイドヘッダーのメニュー項目を作成するヘルパー関数
   */
  const createSideHeaderMenuItem = (
    label: string,
    href: string,
    icon?: string,
    children?: SideHeaderMenuItem[]
  ): SideHeaderMenuItem => {
    return {
      label,
      href,
      icon,
      children
    }
  }

  /**
   * フォームの状態管理用ヘルパー
   */
  const createFormState = <T extends Record<string, any>>(initialState: T) => {
    const formData = ref<T>({ ...initialState })
    const errors = ref<Partial<Record<keyof T, string>>>({})
    const isSubmitting = ref(false)

    const resetForm = () => {
      formData.value = { ...initialState }
      errors.value = {}
      isSubmitting.value = false
    }

    const setError = (field: keyof T, message: string) => {
      errors.value[field] = message
    }

    const clearError = (field: keyof T) => {
      delete errors.value[field]
    }

    const hasErrors = computed(() => Object.keys(errors.value).length > 0)

    return {
      formData,
      errors,
      isSubmitting,
      resetForm,
      setError,
      clearError,
      hasErrors
    }
  }

  return {
    createSideHeaderMenuItem,
    createFormState
  }
}

// 型をエクスポート
export type { SideHeaderMenuItem }
