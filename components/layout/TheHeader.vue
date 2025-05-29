<template>
  <div>
    <v-app-bar color="#051F6A" elevation="0">
      <v-container>
        <v-row align="center">
          <v-col cols="auto">
            <NuxtLink to="/" class="text-decoration-none">
              <h2 class="text-white">Multitech Scaffolding</h2>
            </NuxtLink>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="auto" class="d-none d-md-flex">
            <v-btn variant="text" color="white" class="mx-2" to="/">Home</v-btn>
            <v-btn variant="text" color="white" class="mx-2" to="/about">About</v-btn>
            <v-btn 
              variant="text" 
              color="white" 
              class="mx-2" 
              @click="scrollToProducts"
            >
              Products
            </v-btn>
            <v-btn variant="text" color="white" class="mx-2" to="/projects">Projects</v-btn>
            <v-btn variant="text" color="white" class="mx-2" to="/contact">Contact</v-btn>
          </v-col>
          <v-col cols="auto" class="d-md-none">
            <v-app-bar-nav-icon color="white" @click="drawer = true"></v-app-bar-nav-icon>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <!-- Mobile Navigation Drawer -->
    <v-navigation-drawer
      v-model="drawer"
      temporary
      color="#051F6A"
    >
      <v-list>
        <v-list-item to="/" title="Home" color="white"></v-list-item>
        <v-list-item to="/about" title="About" color="white"></v-list-item>
        <v-list-item 
          @click="handleMobileProducts"
          title="Products" 
          color="white"
        ></v-list-item>
        <v-list-item to="/projects" title="Projects" color="white"></v-list-item>
        <v-list-item to="/contact" title="Contact" color="white"></v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script setup>
const router = useRouter()
const route = useRoute()
const drawer = ref(false)

const scrollToProducts = () => {
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
}

const handleMobileProducts = () => {
  drawer.value = false
  scrollToProducts()
}
</script> 