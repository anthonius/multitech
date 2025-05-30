<template>
  <v-footer color="#051F6A" class="py-8">
    <v-container>
      <v-row>
        <v-col cols="12" md="4" class="mb-6 mb-md-0">
          <h3 class="text-h6 text-md-h5 text-white mb-4">PT. Multitech Konstruksi Utama</h3>
          <div class="text-white">
            Pabrikasi, Sewa Scaffolding & Perancah Besi Konstruksi
          </div>
          <br />
          <div class="text-white">
            Copyright © 2025 All rights reserved
          </div>
        </v-col>
        <v-col cols="12" md="4" class="mb-6 mb-md-0">
          <h3 class="text-h6 text-md-h5 text-white mb-4">Jelajahi</h3>
          <v-list bg-color="transparent">
            <v-list-item
              v-for="(item, i) in menuItems"
              :key="i"
              :title="item.title"
              class="text-white"
              @click="handleNavigation(item)"
            ></v-list-item>
          </v-list>
        </v-col>
        <v-col cols="12" md="4">
          <h3 class="text-h6 text-md-h5 text-white mb-4">Kontak kami</h3>
          <p class="text-white">
            Email: Marketing_BDJ@multitechscaffolding.com<br />
            Telepon: (0511) 5511372 / 6748802<br />
            Alamat: Jl. Banjar Gawi Barat 1 No. 28 LIK Liang Anggang, Landasan Ulin Selatan, Kota Banjar Baru 70722, Kalimantan Selatan
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const handleNavigation = (item) => {
  if (item.title === 'Products') {
    if (route.path !== '/') {
      router.push({ path: '/', query: { scroll: 'products' } })
    } else {
      setTimeout(() => {
        const productsSection = document.getElementById('products')
        if (productsSection) {
          productsSection.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  } else {
    router.push(item.to)
  }
}

const menuItems = [
  { title: 'Home', to: '/' },
  { title: 'About', to: '/about' },
  { title: 'Products', to: '/' },
  { title: 'Projects', to: '/projects' },
  { title: 'Contact', to: '/contact' }
]
</script> 