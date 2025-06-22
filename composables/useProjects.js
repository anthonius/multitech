import { ref } from 'vue'
import { API_BASE_URL, BASE_URL } from '~/utils/api'

export function useProjects() {
  const projects = ref([])
  const loading = ref(true)
  const error = ref(null)

  const fetchProjects = async () => {
    loading.value = true
    error.value = null
    try {
      const response = await $fetch(`${API_BASE_URL}/multitech-projects/?populate=image`)
      projects.value = response.data.map(item => {
        let imageUrl = ''
        let imageLargeUrl = ''
        const imageDataArr = item.attributes.image?.data
        if (Array.isArray(imageDataArr) && imageDataArr.length > 0) {
          const imageData = imageDataArr[0].attributes
          imageUrl = imageData.formats?.small?.url || imageData.url || ''
          imageLargeUrl = imageData.formats?.large?.url || imageData.url || ''
          if (imageUrl && imageUrl.startsWith('/')) {
            imageUrl = BASE_URL + imageUrl
          }
          if (imageLargeUrl && imageLargeUrl.startsWith('/')) {
            imageLargeUrl = BASE_URL + imageLargeUrl
          }
        }
        return {
          id: item.id,
          name: item.attributes.name,
          client: item.attributes.client,
          createdAt: item.attributes.createdAt,
          updatedAt: item.attributes.updatedAt,
          publishedAt: item.attributes.publishedAt,
          image: imageUrl,
          imageLargeUrl: imageLargeUrl
        }
      })
    } catch (err) {
      error.value = err?.message || 'Failed to load projects.'
    } finally {
      loading.value = false
    }
  }

  return { projects, loading, error, fetchProjects }
} 