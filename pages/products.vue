<template>
  <div>
    <v-container class="py-8 py-md-16">
      <h1 class="text-h4 text-md-h3 mb-8 text-white">Produk Kami</h1>
      
      <v-card class="mb-8 rounded-lg">
        <v-tabs
          v-model="activeTab"
          color="primary"
          align-tabs="center"
        >
          <v-tab value="all">Semua</v-tab>
          <v-tab value="aksesoris">Aksesoris</v-tab>
          <v-tab value="bekisting">Bekisting Kolom, Balok dan Lantai</v-tab>
          <v-tab value="mainframe">Main Frame</v-tab>
          <v-tab value="pipa">Pipa Galvanis</v-tab>
          <v-tab value="postshore">Post Shore</v-tab>
          <v-tab value="excavator">Excavator</v-tab>
        </v-tabs>

        <v-window v-model="activeTab">
          <!-- All Products -->
          <v-window-item value="all">
            <v-container>
              <v-row>
                <v-col
                  v-for="product in products"
                  :key="product.id"
                  cols="12"
                  sm="6"
                  md="4"
                  class="mb-4"
                >
                  <ProductCard :product="product" />
                </v-col>
              </v-row>
            </v-container>
          </v-window-item>

          <!-- Aksesoris -->
          <v-window-item value="aksesoris">
            <v-container>
              <v-row>
                <v-col
                  v-for="product in aksesorisProducts"
                  :key="product.id"
                  cols="12"
                  sm="6"
                  md="4"
                  class="mb-4"
                >
                  <ProductCard :product="product" />
                </v-col>
              </v-row>
            </v-container>
          </v-window-item>

          <!-- Bekisting -->
          <v-window-item value="bekisting">
            <v-container>
              <v-row>
                <v-col
                  v-for="product in bekistingProducts"
                  :key="product.id"
                  cols="12"
                  sm="6"
                  md="4"
                  class="mb-4"
                >
                  <ProductCard :product="product" />
                </v-col>
              </v-row>
            </v-container>
          </v-window-item>

          <!-- Main Frame -->
          <v-window-item value="mainframe">
            <v-container>
              <v-row>
                <v-col
                  v-for="product in mainframeProducts"
                  :key="product.id"
                  cols="12"
                  sm="6"
                  md="4"
                  class="mb-4"
                >
                  <ProductCard :product="product" />
                </v-col>
              </v-row>
            </v-container>
          </v-window-item>

          <!-- Pipa Galvanis -->
          <v-window-item value="pipa">
            <v-container>
              <v-row>
                <v-col
                  v-for="product in pipaProducts"
                  :key="product.id"
                  cols="12"
                  sm="6"
                  md="4"
                  class="mb-4"
                >
                  <ProductCard :product="product" />
                </v-col>
              </v-row>
            </v-container>
          </v-window-item>

          <!-- Post Shore -->
          <v-window-item value="postshore">
            <v-container>
              <v-row>
                <v-col
                  v-for="product in postshoreProducts"
                  :key="product.id"
                  cols="12"
                  sm="6"
                  md="4"
                  class="mb-4"
                >
                  <ProductCard :product="product" />
                </v-col>
              </v-row>
            </v-container>
          </v-window-item>

          <!-- Excavator -->
          <v-window-item value="excavator">
            <v-container>
              <v-row>
                <v-col
                  v-for="product in excavatorProducts"
                  :key="product.id"
                  cols="12"
                  sm="6"
                  md="4"
                  class="mb-4"
                >
                  <ProductCard :product="product" />
                </v-col>
              </v-row>
            </v-container>
          </v-window-item>
        </v-window>
      </v-card>
    </v-container>
  </div>
</template>

<script setup>
const activeTab = ref('all')

// All products
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

// Categorized products
const aksesorisProducts = computed(() => products.slice(0, 2))
const bekistingProducts = computed(() => products.slice(2, 4))
const mainframeProducts = computed(() => products.slice(4, 6))
const pipaProducts = computed(() => products.slice(6, 7))
const postshoreProducts = computed(() => products.slice(7, 8))
const excavatorProducts = computed(() => products.slice(8, 10))
</script> 