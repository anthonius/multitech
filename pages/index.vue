<template>
  <div>
    <HeroSection />
    <ProductsSection />
  </div>
</template>

<script setup>
import HeroSection from '~/components/sections/HeroSection.vue'
import ProductsSection from '~/components/sections/ProductsSection.vue'

const route = useRoute()
const router = useRouter()

// Watch for route changes and handle scrolling
watch(
  () => route.query.scroll,
  (newValue) => {
    if (newValue === 'products') {
      // Add a small delay to ensure the page is fully rendered
      setTimeout(() => {
        const productsSection = document.getElementById('products')
        if (productsSection) {
          productsSection.scrollIntoView({ behavior: 'smooth' })
        }
        // Remove the query parameter after scrolling
        router.replace({ query: {} })
      }, 100) // 100ms delay
    }
  },
  { immediate: true }
)
</script> 