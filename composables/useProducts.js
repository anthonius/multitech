import { ref } from 'vue'
import { API_BASE_URL } from '~/utils/api'

export function useProducts() {
  const products = ref([])
  const loading = ref(true)
  const error = ref(null)

  const fetchProducts = async () => {
    loading.value = true
    error.value = null
    try {
      const response = await $fetch(`${API_BASE_URL}/multitech-products/?pagination[page]=1&pagination[pageSize]=100&populate=image`)
      products.value = response.data.map(item => {
        let imageUrl = ''
        const imageData = item.attributes.image?.data?.attributes
        if (imageData) {
          // Prefer small format, then main url
          imageUrl = imageData.formats?.small?.url || imageData.url || ''
          // Prepend API_BASE_URL if the url is relative
          if (imageUrl && imageUrl.startsWith('/')) {
            imageUrl = BASE_URL + imageUrl
          }
        }
        return {
          id: item.id,
          name: item.attributes.name,
          code: item.attributes.code,
          category: item.attributes.category,
          description: item.attributes.description,
          createdAt: item.attributes.createdAt,
          updatedAt: item.attributes.updatedAt,
          publishedAt: item.attributes.publishedAt,
          image: imageUrl
        }
      })
    } catch (err) {
      error.value = err?.message || 'Failed to load products.'
    } finally {
      loading.value = false
    }
  }

  return { products, loading, error, fetchProducts }
} 