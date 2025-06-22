import { ref } from 'vue'
import { API_BASE_URL } from '~/utils/api'

export function useContact() {
  const loading = ref(false)
  const error = ref(null)
  const success = ref(false)

  const submitContact = async ({ name, email, phone, message }) => {
    loading.value = true
    error.value = null
    success.value = false
    try {
      const response = await $fetch(`${API_BASE_URL}/multitech-contacts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          data: { name, email, phone, message }
        })
      })
      success.value = true
      return response
    } catch (err) {
      error.value = err?.data?.error?.message || err?.message || 'Gagal mengirim pesan.'
      throw error.value
    } finally {
      loading.value = false
    }
  }

  return { loading, error, success, submitContact }
} 