<template>
  <v-container id="products" class="py-8 py-md-16 bg-white">
    <h2 class="text-h4 text-md-h3 text-center mb-8">Our Products</h2>
    
    <v-carousel
      hide-delimiter-background
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
        class="text-none"
      >
        See All Products
      </v-btn>
    </div>
  </v-container>
</template>

<script setup>
import { useDisplay } from 'vuetify'
import ProductCard from '~/components/ProductCard.vue'

const display = useDisplay()

const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Description for product 1',
    image: 'https://via.placeholder.com/400x300'
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Description for product 2',
    image: 'https://via.placeholder.com/400x300'
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'Description for product 3',
    image: 'https://via.placeholder.com/400x300'
  },
  {
    id: 4,
    name: 'Product 4',
    description: 'Description for product 4',
    image: 'https://via.placeholder.com/400x300'
  },
  {
    id: 5,
    name: 'Product 5',
    description: 'Description for product 5',
    image: 'https://via.placeholder.com/400x300'
  },
  {
    id: 6,
    name: 'Product 6',
    description: 'Description for product 6',
    image: 'https://via.placeholder.com/400x300'
  },
  {
    id: 7,
    name: 'Product 7',
    description: 'Description for product 7',
    image: 'https://via.placeholder.com/400x300'
  },
  {
    id: 8,
    name: 'Product 8',
    description: 'Description for product 8',
    image: 'https://via.placeholder.com/400x300'
  },
  {
    id: 9,
    name: 'Product 9',
    description: 'Description for product 9',
    image: 'https://via.placeholder.com/400x300'
  },
  {
    id: 10,
    name: 'Product 10',
    description: 'Description for product 10',
    image: 'https://via.placeholder.com/400x300'
  }
]

// Group products based on screen size using Vuetify's display
const productGroups = computed(() => {
  const itemsPerGroup = display.mdAndUp.value ? 3 : 1
  const groups = []
  
  for (let i = 0; i < products.length; i += itemsPerGroup) {
    groups.push(products.slice(i, i + itemsPerGroup))
  }
  return groups
})
</script>

<style scoped>
.v-carousel {
  background-color: transparent !important;
}
</style> 