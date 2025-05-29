<template>
  <div>
    <div class="d-flex justify-space-between align-center mb-6">
      <h1 class="text-h4">Contact Management</h1>
      <v-text-field
        v-model="search"
        prepend-inner-icon="mdi-magnify"
        label="Search by name"
        single-line
        hide-details
        class="max-width-300"
      ></v-text-field>
    </div>

    <!-- Desktop Table -->
    <v-card class="d-none d-md-block">
      <v-table>
        <thead>
          <tr>
            <th>Date & Time</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="contact in paginatedContacts" :key="contact.id" class="contact-row">
            <td class="pa-4">{{ contact.date }}</td>
            <td class="pa-4">{{ contact.name }}</td>
            <td class="pa-4">{{ contact.email }}</td>
            <td class="pa-4">{{ contact.phone }}</td>
            <td class="pa-4">{{ truncateText(contact.message, 100) }}</td>
          </tr>
        </tbody>
      </v-table>

      <div class="text-center pa-4">
        <v-pagination
          v-model="page"
          :length="totalPages"
          :total-visible="7"
        ></v-pagination>
      </div>
    </v-card>

    <!-- Mobile Cards -->
    <div class="d-md-none">
      <v-card
        v-for="contact in paginatedContacts"
        :key="contact.id"
        class="mb-4"
      >
        <v-card-item>
          <div class="text-caption text-grey mb-2">{{ contact.date }}</div>
          <div class="text-h6 mb-2">{{ contact.name }}</div>
          <div class="text-body-2 mb-1">
            <v-icon size="small" class="mr-1">mdi-email</v-icon>
            {{ contact.email }}
          </div>
          <div class="text-body-2 mb-2">
            <v-icon size="small" class="mr-1">mdi-phone</v-icon>
            {{ contact.phone }}
          </div>
          <div class="text-body-2">
            {{ truncateText(contact.message, 100) }}
          </div>
        </v-card-item>
      </v-card>

      <div class="text-center pa-4">
        <v-pagination
          v-model="page"
          :length="totalPages"
          :total-visible="5"
        ></v-pagination>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'admin'
})

const search = ref('')
const page = ref(1)
const itemsPerPage = 50

// Mock data - replace with actual data from your backend
const contacts = ref([
  {
    id: 1,
    date: '2024-03-20 14:30',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1234567890',
    message: 'Interested in your products and would like to know more about pricing and availability.'
  },
  {
    id: 2,
    date: '2024-03-20 13:15',
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '+1987654321',
    message: 'Looking for construction equipment for our new project. Please provide more information.'
  },
  {
    id: 3,
    date: '2024-03-20 11:45',
    name: 'Mike Johnson',
    email: 'mike@example.com',
    phone: '+1122334455',
    message: 'Need information about your construction equipment rental services.'
  }
])

const truncateText = (text, length) => {
  if (text.length <= length) return text
  return text.substring(0, length) + '...'
}

// Computed properties for filtering and pagination
const filteredContacts = computed(() => {
  if (!search.value) return contacts.value
  return contacts.value.filter(contact => 
    contact.name.toLowerCase().includes(search.value.toLowerCase())
  )
})

const totalPages = computed(() => 
  Math.ceil(filteredContacts.value.length / itemsPerPage)
)

const paginatedContacts = computed(() => {
  const start = (page.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredContacts.value.slice(start, end)
})

// Reset to first page when search changes
watch(search, () => {
  page.value = 1
})
</script>

<style scoped>
.v-table {
  width: 100%;
}

.contact-row {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

.contact-row:last-child {
  border-bottom: none;
}

.max-width-300 {
  max-width: 300px;
}

@media (max-width: 960px) {
  .v-card {
    margin-bottom: 16px;
  }
}
</style> 