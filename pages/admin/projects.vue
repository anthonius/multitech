<template>
  <div>
    <div class="d-flex justify-space-between align-center mb-6">
      <h1 class="text-h4">Projects Management</h1>
      <v-btn
        color="primary"
        prepend-icon="mdi-plus"
        @click="openDialog()"
      >
        Add Project
      </v-btn>
    </div>

    <!-- Desktop Table -->
    <v-card class="d-none d-md-block">
      <v-table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Project Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="project in projects" :key="project.id" class="project-row">
            <td class="pa-4">
              <v-img
                :src="project.image"
                width="100"
                height="100"
                cover
                class="rounded"
              ></v-img>
            </td>
            <td class="pa-4">{{ project.name }}</td>
            <td class="pa-4">{{ truncateText(project.description, 150) }}</td>
            <td class="pa-4">
              <v-btn
                icon="mdi-pencil"
                variant="text"
                color="primary"
                size="small"
                class="mr-2"
                @click="openDialog(project)"
              ></v-btn>
              <v-btn
                icon="mdi-delete"
                variant="text"
                color="error"
                size="small"
                @click="confirmDelete(project)"
              ></v-btn>
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-card>

    <!-- Mobile Cards -->
    <div class="d-md-none">
      <v-card
        v-for="project in projects"
        :key="project.id"
        class="mb-4"
      >
        <v-card-item>
          <div class="d-flex align-center mb-4">
            <v-img
              :src="project.image"
              width="80"
              height="80"
              cover
              class="rounded mr-4"
            ></v-img>
            <div class="text-h6">{{ project.name }}</div>
          </div>
          
          <div class="text-body-2 mb-4">
            {{ truncateText(project.description, 100) }}
          </div>

          <div class="d-flex justify-end">
            <v-btn
              icon="mdi-pencil"
              variant="text"
              color="primary"
              size="small"
              class="mr-2"
              @click="openDialog(project)"
            ></v-btn>
            <v-btn
              icon="mdi-delete"
              variant="text"
              color="error"
              size="small"
              @click="confirmDelete(project)"
            ></v-btn>
          </div>
        </v-card-item>
      </v-card>
    </div>

    <!-- Edit/Add Dialog -->
    <v-dialog v-model="dialog" max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5">{{ editedItem.id ? 'Edit Project' : 'Add Project' }}</span>
        </v-card-title>

        <v-card-text>
          <v-form ref="form" v-model="valid">
            <v-text-field
              v-model="editedItem.name"
              label="Project Name"
              :rules="[v => !!v || 'Name is required']"
              required
            ></v-text-field>

            <v-textarea
              v-model="editedItem.description"
              label="Description"
              :rules="[v => !!v || 'Description is required']"
              required
            ></v-textarea>

            <!-- Image Upload -->
            <div class="mb-4">
              <div class="d-flex align-center mb-2">
                <v-img
                  v-if="editedItem.image"
                  :src="editedItem.image"
                  width="100"
                  height="100"
                  cover
                  class="rounded mr-4"
                ></v-img>
                <v-btn
                  color="primary"
                  prepend-icon="mdi-upload"
                  @click="$refs.imageInput.click()"
                >
                  Upload Image
                </v-btn>
                <input
                  ref="imageInput"
                  type="file"
                  accept="image/*"
                  class="d-none"
                  @change="handleImageUpload"
                >
              </div>
              <div v-if="editedItem.image" class="text-caption">
                Current image URL: {{ editedItem.image }}
              </div>
            </div>
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
            @click="saveProject"
            :disabled="!valid"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Delete Confirmation Dialog -->
    <v-dialog v-model="deleteDialog" max-width="400px">
      <v-card>
        <v-card-title class="text-h5">Delete Project</v-card-title>
        <v-card-text>
          Are you sure you want to delete this project?
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="grey-darken-1"
            variant="text"
            @click="deleteDialog = false"
          >
            Cancel
          </v-btn>
          <v-btn
            color="error"
            variant="text"
            @click="deleteProject"
          >
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'admin'
})

const dialog = ref(false)
const deleteDialog = ref(false)
const valid = ref(false)
const form = ref(null)
const imageInput = ref(null)

// Mock data - replace with actual data from your backend
const projects = ref([
  {
    id: 1,
    name: 'Project 1',
    description: 'This is a long description for project 1. It contains many details about the project features and specifications.',
    image: 'https://picsum.photos/200'
  },
  {
    id: 2,
    name: 'Project 2',
    description: 'This is a long description for project 2. It contains many details about the project features and specifications.',
    image: 'https://picsum.photos/201'
  }
])

const defaultItem = {
  name: '',
  description: '',
  image: ''
}

const editedItem = ref({ ...defaultItem })
const editedIndex = ref(-1)
const itemToDelete = ref(null)

const truncateText = (text, length) => {
  if (text.length <= length) return text
  return text.substring(0, length) + '...'
}

const openDialog = (item) => {
  editedIndex.value = projects.value.indexOf(item)
  editedItem.value = item ? { ...item } : { ...defaultItem }
  dialog.value = true
}

const confirmDelete = (item) => {
  itemToDelete.value = item
  deleteDialog.value = true
}

const handleImageUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    // Here you would typically upload the file to your server
    // For now, we'll just create a local URL
    editedItem.value.image = URL.createObjectURL(file)
  }
}

const saveProject = () => {
  if (editedIndex.value > -1) {
    // Edit existing project
    Object.assign(projects.value[editedIndex.value], editedItem.value)
  } else {
    // Add new project
    projects.value.push({
      ...editedItem.value,
      id: projects.value.length + 1
    })
  }
  dialog.value = false
}

const deleteProject = () => {
  const index = projects.value.indexOf(itemToDelete.value)
  projects.value.splice(index, 1)
  deleteDialog.value = false
}
</script>

<style scoped>
.v-table {
  width: 100%;
}

.project-row {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

.project-row:last-child {
  border-bottom: none;
}

@media (max-width: 960px) {
  .v-card {
    margin-bottom: 16px;
  }
}
</style>