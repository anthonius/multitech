<template>
  <v-app>
    <!-- Admin Header -->
    <v-app-bar color="#051F6A" elevation="0">
      <v-container>
        <v-row align="center">
          <v-col cols="auto">
            <h2 class="text-white">Admin Dashboard</h2>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="auto">
            <v-btn variant="text" color="white" class="mx-2" to="/admin/dashboard">
              Dashboard
            </v-btn>
            <v-btn variant="text" color="white" class="mx-2" to="/admin/users">
              Users
            </v-btn>
            <v-btn variant="text" color="white" class="mx-2" to="/admin/settings">
              Settings
            </v-btn>
            <v-btn variant="text" color="white" class="mx-2" @click="logout">
              Logout
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <!-- Admin Sidebar -->
    <v-navigation-drawer
      v-model="drawer"
      color="#051F6A"
      theme="dark"
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in menuItems"
          :key="i"
          :to="item.to"
          :prepend-icon="item.icon"
          :title="item.title"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main>
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

const menuItems = [
  { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/admin/dashboard' },
  { title: 'Users', icon: 'mdi-account-group', to: '/admin/users' },
  { title: 'Settings', icon: 'mdi-cog', to: '/admin/settings' },
]

const logout = () => {
  // Add your logout logic here
  router.push('/login')
}
</script> 