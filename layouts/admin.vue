<template>
  <v-app>
    <!-- Mobile App Bar -->
    <v-app-bar v-if="$vuetify.display.mobile" color="white" elevation="1">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Admin Panel</v-toolbar-title>
    </v-app-bar>

    <!-- Navigation Drawer -->
    <v-navigation-drawer
      v-model="drawer"
      :permanent="!$vuetify.display.mobile"
      color="white"
      theme="light"
    >
      <v-list>
        <v-list-item class="mb-4">
          <template v-slot:prepend>
            <v-avatar color="primary" size="40">
              <span class="text-h6 text-white">{{ username.charAt(0).toUpperCase() }}</span>
            </v-avatar>
          </template>
          <v-list-item-title class="text-subtitle-1 font-weight-medium">
            Hi, {{ username }}
          </v-list-item-title>
        </v-list-item>

        <v-divider class="mb-4"></v-divider>

        <v-list-item
          v-for="(item, i) in menuItems"
          :key="i"
          :to="item.to"
          :prepend-icon="item.icon"
          :title="item.title"
        ></v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn
            color="error"
            variant="text"
            prepend-icon="mdi-logout"
            block
            @click="handleLogout"
          >
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-main class="bg-blue-grey-lighten-5">
      <v-container fluid>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const drawer = ref(true)
const username = ref('Admin') // This will be replaced with actual username from auth

const menuItems = [
  { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/admin/dashboard' },
  { title: 'Products', icon: 'mdi-package-variant', to: '/admin/products' },
  { title: 'Projects', icon: 'mdi-image-multiple', to: '/admin/projects' },
  { title: 'Contact', icon: 'mdi-email', to: '/admin/contact' },
  { title: 'Content', icon: 'mdi-file-document', to: '/admin/content' }
]

const handleLogout = () => {
  // Add logout logic here
  router.push('/login')
}
</script>

<style scoped>
.v-navigation-drawer {
  border-right: 1px solid rgba(0, 0, 0, 0.12);
}
</style> 