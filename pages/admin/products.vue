<template>
  <div>
    <div class="d-flex flex-column flex-md-row justify-space-between align-start align-md-center mb-6">
      <h1 class="text-h4 mb-4 mb-md-0">Products Management</h1>
      <div class="d-flex flex-column flex-md-row align-start align-md-center">
        <v-text-field
          v-model="search"
          prepend-inner-icon="mdi-magnify"
          label="Search by name"
          single-line
          hide-details
          class="search-field mb-4 mb-md-0 mr-md-4"
        ></v-text-field>
        <v-btn
          color="primary"
          prepend-icon="mdi-plus"
          @click="openDialog()"
        >
          Add Product
        </v-btn>
      </div>
    </div>

    <!-- Desktop Table -->
    <v-card class="d-none d-md-block">
      <v-table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Product Name</th>
            <th>Description</th>
            <th>PDF File</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in filteredProducts" :key="product.id" class="product-row">
            <td class="pa-4">
              <v-img
                :src="product.image"
                width="100"
                height="100"
                cover
                class="rounded"
              ></v-img>
            </td>
            <td class="pa-4">{{ product.name }}</td>
            <td class="pa-4">{{ truncateText(product.description, 150) }}</td>
            <td class="pa-4">
              <a 
                :href="product.pdf" 
                target="_blank"
                class="text-decoration-none"
              >
                View PDF
              </a>
            </td>
            <td class="pa-4">
              <v-btn
                icon="mdi-pencil"
                variant="text"
                color="primary"
                size="small"
                class="mr-2"
                @click="openDialog(product)"
              ></v-btn>
              <v-btn
                icon="mdi-delete"
                variant="text"
                color="error"
                size="small"
                @click="confirmDelete(product)"
              ></v-btn>
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-card>

    <!-- Mobile Cards -->
    <div class="d-md-none">
      <v-card
        v-for="product in filteredProducts"
        :key="product.id"
        class="mb-4"
      >
        <v-card-item>
          <div class="d-flex align-center mb-4">
            <v-img
              :src="product.image"
              width="80"
              height="80"
              cover
              class="rounded mr-4"
            ></v-img>
            <div>
              <div class="text-h6">{{ product.name }}</div>
              <a 
                :href="product.pdf" 
                target="_blank"
                class="text-decoration-none text-caption"
              >
                View PDF
              </a>
            </div>
          </div>
          
          <div class="text-body-2 mb-4">
            {{ truncateText(product.description, 100) }}
          </div>

          <div class="d-flex justify-end">
            <v-btn
              icon="mdi-pencil"
              variant="text"
              color="primary"
              size="small"
              class="mr-2"
              @click="openDialog(product)"
            ></v-btn>
            <v-btn
              icon="mdi-delete"
              variant="text"
              color="error"
              size="small"
              @click="confirmDelete(product)"
            ></v-btn>
          </div>
        </v-card-item>
      </v-card>
    </div>

    <!-- Edit/Add Dialog -->
    <v-dialog v-model="dialog" max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5">{{ editedItem.id ? 'Edit Product' : 'Add Product' }}</span>
        </v-card-title>

        <v-card-text>
          <v-form ref="form" v-model="valid">
            <v-text-field
              v-model="editedItem.name"
              label="Product Name"
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

            <!-- PDF Upload -->
            <div>
              <div class="d-flex align-center mb-2">
                <v-btn
                  color="primary"
                  prepend-icon="mdi-file-pdf-box"
                  @click="$refs.pdfInput.click()"
                >
                  Upload PDF
                </v-btn>
                <input
                  ref="pdfInput"
                  type="file"
                  accept=".pdf"
                  class="d-none"
                  @change="handlePdfUpload"
                >
              </div>
              <div v-if="editedItem.pdf" class="text-caption">
                Current PDF URL: {{ editedItem.pdf }}
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
            @click="saveProduct"
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
        <v-card-title class="text-h5">Delete Product</v-card-title>
        <v-card-text>
          Are you sure you want to delete this product?
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
            @click="deleteProduct"
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
const pdfInput = ref(null)
const search = ref('')

// Mock data - replace with actual data from your backend
const products = ref([
  {
    id: 1,
    name: 'Product 1',
    description: 'This is a long description for product 1. It contains many details about the product features and specifications.',
    image: 'https://picsum.photos/200',
    pdf: 'https://example.com/pdf1.pdf'
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'This is a long description for product 2. It contains many details about the product features and specifications.',
    image: 'https://picsum.photos/201',
    pdf: 'https://example.com/pdf2.pdf'
  }
])

const defaultItem = {
  name: '',
  description: '',
  image: '',
  pdf: ''
}

const editedItem = ref({ ...defaultItem })
const editedIndex = ref(-1)
const itemToDelete = ref(null)

const truncateText = (text, length) => {
  if (text.length <= length) return text
  return text.substring(0, length) + '...'
}

const openDialog = (item) => {
  editedIndex.value = products.value.indexOf(item)
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

const handlePdfUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    // Here you would typically upload the file to your server
    // For now, we'll just create a local URL
    editedItem.value.pdf = URL.createObjectURL(file)
  }
}

const saveProduct = () => {
  if (editedIndex.value > -1) {
    // Edit existing product
    Object.assign(products.value[editedIndex.value], editedItem.value)
  } else {
    // Add new product
    products.value.push({
      ...editedItem.value,
      id: products.value.length + 1
    })
  }
  dialog.value = false
}

const deleteProduct = () => {
  const index = products.value.indexOf(itemToDelete.value)
  products.value.splice(index, 1)
  deleteDialog.value = false
}

// Add computed property for filtered products
const filteredProducts = computed(() => {
  if (!search.value) return products.value
  return products.value.filter(product => 
    product.name.toLowerCase().includes(search.value.toLowerCase())
  )
})
</script>

<style scoped>
.v-table {
  width: 100%;
}

.product-row {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

.product-row:last-child {
  border-bottom: none;
}

.search-field {
  width: 500px;
}

@media (max-width: 960px) {
  .v-card {
    margin-bottom: 16px;
  }
  
  .search-field {
    width: 100%;
  }
}
</style>