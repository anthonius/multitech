<template>
  <div>
    <h1 class="text-h4 mb-6">Dashboard</h1>

    <!-- Stats Cards -->
    <v-row>
      <v-col cols="12" sm="6" md="4">
        <v-card 
          class="rounded-lg elevate" 
          elevation="2"
          @click="router.push('/admin/products')"
          style="cursor: pointer"
        >
          <v-card-item>
            <template v-slot:prepend>
              <v-avatar color="primary" size="48" class="mr-4">
                <v-icon color="white" size="24">mdi-package-variant</v-icon>
              </v-avatar>
            </template>
            <v-card-title class="text-h5">{{ stats.products }}</v-card-title>
            <v-card-subtitle>Total Products</v-card-subtitle>
          </v-card-item>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="4">
        <v-card 
          class="rounded-lg elevate" 
          elevation="2"
          @click="router.push('/admin/projects')"
          style="cursor: pointer"
        >
          <v-card-item>
            <template v-slot:prepend>
              <v-avatar color="success" size="48" class="mr-4">
                <v-icon color="white" size="24">mdi-image-multiple</v-icon>
              </v-avatar>
            </template>
            <v-card-title class="text-h5">{{ stats.projects }}</v-card-title>
            <v-card-subtitle>Total Projects</v-card-subtitle>
          </v-card-item>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="4">
        <v-card 
          class="rounded-lg elevate" 
          elevation="2"
          @click="router.push('/admin/contact')"
          style="cursor: pointer"
        >
          <v-card-item>
            <template v-slot:prepend>
              <v-avatar color="info" size="48" class="mr-4">
                <v-icon color="white" size="24">mdi-email</v-icon>
              </v-avatar>
            </template>
            <v-card-title class="text-h5">{{ stats.contacts }}</v-card-title>
            <v-card-subtitle>Total Contacts</v-card-subtitle>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>

    <!-- Recent Contacts -->
    <v-card class="mt-6 rounded-lg" elevation="2">
      <v-card-title class="d-flex align-center">
        <v-icon icon="mdi-email" class="mr-2"></v-icon>
        Recent Contacts
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          variant="text"
          to="/admin/contact"
          prepend-icon="mdi-arrow-right"
        >
          View All
        </v-btn>
      </v-card-title>

      <v-card-text>
        <v-table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="contact in recentContacts" :key="contact.id">
              <td>{{ contact.name }}</td>
              <td>{{ contact.email }}</td>
              <td>{{ contact.message }}</td>
              <td>{{ contact.date }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'admin'
})

const router = useRouter()

// Mock data - replace with actual data from your backend
const stats = ref({
  products: 12,
  projects: 8,
  contacts: 25
})

const recentContacts = ref([
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    message: 'Interested in your products',
    date: '2024-03-20 14:30'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    message: 'Project inquiry',
    date: '2024-03-20 13:15'
  },
  {
    id: 3,
    name: 'Mike Johnson',
    email: 'mike@example.com',
    message: 'Product pricing request',
    date: '2024-03-20 11:45'
  },
  {
    id: 4,
    name: 'Sarah Wilson',
    email: 'sarah@example.com',
    message: 'Partnership opportunity',
    date: '2024-03-20 10:20'
  },
  {
    id: 5,
    name: 'David Brown',
    email: 'david@example.com',
    message: 'General inquiry',
    date: '2024-03-20 09:30'
  }
])
</script>

<style scoped>
.v-card {
  transition: transform 0.2s;
}

.elevate:hover {
  transform: translateY(-5px);
}
</style>