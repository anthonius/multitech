<template>
  <v-card class="h-100 rounded-lg d-flex flex-column" elevation="2">
    <v-img
      :src="product.image"
      cover
      height="200"
      class="rounded-t-lg"
    ></v-img>
    <v-card-title class="text-h6 text-md-h5 pa-4">{{ product.name }}</v-card-title>
    <v-card-text class="pa-4 flex-grow-1 card-description">
      {{ plainDescription }}
    </v-card-text>
    <v-card-actions class="pa-4">
      <v-btn block class="rounded-lg see-btn" @click="showDialog = true">
        Lihat
      </v-btn>
    </v-card-actions>

    <!-- Product Detail Dialog -->
    <v-dialog
      v-model="showDialog"
      max-width="500"
      class="product-dialog"
    >
      <v-card class="rounded-lg">
        <div class="position-relative">
          <v-btn
            icon="mdi-close"
            color="white"
            class="position-absolute"
            style="top: 8px; right: 8px; z-index: 1;"
            @click="showDialog = false"
          ></v-btn>
          <v-img
            :src="product.image"
            cover
            height="350"
            class="rounded-t-lg"
          ></v-img>
        </div>
        <v-card-title class="text-h5 pa-4 red-mark">
          {{ product.name }}
        </v-card-title>
        <v-card-text class="pa-4">
          <span v-html="formattedDescription"></span>
        </v-card-text>
        <v-card-actions class="pa-4">
          <v-btn
            to="/products"
            size="large"
            class="text-none rounded-lg underline-btn"
          >
            Lihat semua produk
          </v-btn>
          <v-btn
            color="primary"
            class="rounded-lg see-btn"
            to="/contact"
            @click="showDialog = false"
          >
            Hubungi Kami
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const showDialog = ref(false)

const plainDescription = computed(() => {
  // Remove line breaks for clamping in card
  return (props.product.description || '').replace(/\n/g, ' ')
})

const formattedDescription = computed(() => {
  // For dialog, keep line breaks
  return (props.product.description || '').replace(/\n/g, '<br>')
})
</script>

<style scoped>
.product-dialog :deep(.v-overlay__content) {
  max-height: 90vh;
  overflow-y: auto;
}

.position-relative {
  position: relative;
}

.position-absolute {
  position: absolute;
}

.card-description {
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  min-height: 6em;
  max-height: 8.5em;
  white-space: normal;
}

.see-btn {
  border-style: solid;
  border-color: #C0281C;
  border-width: 1px;
}

.underline-btn {
  text-decoration: underline;
  text-underline-offset: 4px;
}
</style>