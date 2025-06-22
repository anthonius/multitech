<template>
  <v-container id="products" class="py-8 py-md-16 bg-white rounded-lg">
    <h2 class="text-h4 text-md-h3 text-center mb-8">Produk Kami</h2>

    <div v-if="loading" class="d-flex justify-center align-center" style="min-height: 300px;">
      <v-progress-circular indeterminate color="primary" size="64" />
    </div>
    <v-alert v-else-if="error" type="error" class="mb-8">
      {{ error }}
    </v-alert>
    <div v-else>
      <v-carousel
        hide-delimiter-background
        hide-delimiters
        show-arrows="hover"
        height="500"
        class="rounded-lg mb-8"
        :interval="5000"
        cycle
      >
        <v-carousel-item
          v-for="(group, i) in productGroups"
          :key="i"
        >
          <v-row class="fill-height pa-4">
            <v-col
              v-for="product in group"
              :key="product.id"
              cols="12"
              md="4"
            >
              <ProductCard :product="product" />
            </v-col>
          </v-row>
        </v-carousel-item>
      </v-carousel>

      <div class="text-center">
        <v-btn
          color="primary"
          to="/products"
          size="large"
          class="text-none rounded-lg"
        >
          Lihat semua produk
        </v-btn>
      </div>
    </div>
  </v-container>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useDisplay } from 'vuetify'
import ProductCard from '~/components/ProductCard.vue'
import { useProducts } from '~/composables/useProducts'

const display = useDisplay()
const { products, loading, error, fetchProducts } = useProducts()

onMounted(fetchProducts)

// Group products based on screen size using Vuetify's display
const productGroups = computed(() => {
  const itemsPerGroup = display.mdAndUp.value ? 3 : 1
  const groups = []
  for (let i = 0; i < products.value.length; i += itemsPerGroup) {
    groups.push(products.value.slice(i, i + itemsPerGroup))
  }
  return groups
})
</script>

<style scoped>
.v-carousel {
  background-color: transparent !important;
}
</style> 