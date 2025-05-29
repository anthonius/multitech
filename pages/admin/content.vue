<script setup>
definePageMeta({
  layout: 'admin'
})

const dialog = ref(false)
const valid = ref(false)
const form = ref(null)

// Mock data - replace with actual data from your backend
const contents = ref([
  {
    id: 'hero_title',
    value: 'Welcome to MultiTech - Your Trusted Partner in Construction Solutions'
  },
  {
    id: 'hero_subtitle',
    value: 'Providing high-quality construction equipment and solutions for your projects'
  },
  {
    id: 'about_title',
    value: 'About MultiTech'
  },
  {
    id: 'about_content',
    value: 'MultiTech is a leading provider of construction equipment and solutions. With years of experience in the industry, we are committed to delivering high-quality products and services to our clients.'
  },
  {
    id: 'contact_title',
    value: 'Contact Us'
  },
  {
    id: 'contact_subtitle',
    value: 'Get in touch with us for any inquiries about our products and services'
  }
])

const editedItem = ref({
  id: '',
  value: ''
})

const truncateText = (text, length) => {
  if (text.length <= length) return text
  return text.substring(0, length) + '...'
}

const openDialog = (item) => {
  editedItem.value = { ...item }
  dialog.value = true
}

const saveContent = () => {
  const index = contents.value.findIndex(item => item.id === editedItem.value.id)
  if (index !== -1) {
    contents.value[index] = { ...editedItem.value }
  }
  dialog.value = false
}
</script>

<template>
  <div>
    <div class="d-flex justify-space-between align-center mb-6">
      <h1 class="text-h4">Content Management</h1>
    </div>

    <!-- Desktop Table -->
    <v-card class="d-none d-md-block">
      <v-table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Value</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="content in contents" :key="content.id" class="content-row">
            <td class="pa-4">{{ content.id }}</td>
            <td class="pa-4">{{ truncateText(content.value, 150) }}</td>
            <td class="pa-4">
              <v-btn
                icon="mdi-pencil"
                variant="text"
                color="primary"
                size="small"
                @click="openDialog(content)"
              ></v-btn>
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-card>

    <!-- Mobile Cards -->
    <div class="d-md-none">
      <v-card
        v-for="content in contents"
        :key="content.id"
        class="mb-4"
      >
        <v-card-item>
          <div class="text-h6 mb-2">{{ content.id }}</div>
          <div class="text-body-2 mb-4">
            {{ truncateText(content.value, 100) }}
          </div>
          <div class="d-flex justify-end">
            <v-btn
              icon="mdi-pencil"
              variant="text"
              color="primary"
              size="small"
              @click="openDialog(content)"
            ></v-btn>
          </div>
        </v-card-item>
      </v-card>
    </div>

    <!-- Edit Dialog -->
    <v-dialog v-model="dialog" max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Edit Content</span>
        </v-card-title>

        <v-card-text>
          <v-form ref="form" v-model="valid">
            <v-text-field
              v-model="editedItem.id"
              label="ID"
              :rules="[v => !!v || 'ID is required']"
              required
              disabled
            ></v-text-field>

            <v-textarea
              v-model="editedItem.value"
              label="Value"
              :rules="[v => !!v || 'Value is required']"
              required
              rows="5"
            ></v-textarea>
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="grey-darken-1"
            variant="text"
            @click="dialog = false"
          >
            Cancel
          </v-btn>
          <v-btn
            color="primary"
            variant="text"
            @click="saveContent"
            :disabled="!valid"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<style scoped>
.v-table {
  width: 100%;
}

.content-row {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

.content-row:last-child {
  border-bottom: none;
}

@media (max-width: 960px) {
  .v-card {
    margin-bottom: 16px;
  }
}
</style> 