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

        <div v-if="loading" class="d-flex justify-center align-center py-16">
          <v-progress-circular indeterminate color="primary" size="64" />
        </div>
        <v-alert v-else-if="error" type="error" class="mb-8">
          {{ error }}
        </v-alert>
        <v-window v-else v-model="activeTab">
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
import { ref, computed, onMounted } from 'vue'
import ProductCard from '~/components/ProductCard.vue'
import { useProducts } from '~/composables/useProducts'

const activeTab = ref('all')
const { products, loading, error, fetchProducts } = useProducts()

onMounted(fetchProducts)

const aksesorisProducts = computed(() => products.value.filter(p => p.category === 'Aksesoris'))
const bekistingProducts = computed(() => products.value.filter(p => p.category === 'Bekisting Kolom, Balok dan Lantai'))
const mainframeProducts = computed(() => products.value.filter(p => p.category === 'Main Frame'))
const pipaProducts = computed(() => products.value.filter(p => p.category === 'Pipa Galvanis'))
const postshoreProducts = computed(() => products.value.filter(p => p.category === 'Post Shore'))
const excavatorProducts = computed(() => products.value.filter(p => p.category === 'Excavator'))
</script> 