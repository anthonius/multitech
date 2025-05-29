<template>
  <v-card class="h-100 rounded-lg" elevation="2">
    <v-img
      :src="project.image"
      height="300"
      cover
      class="rounded-t-lg"
      @click="showDialog = true"
      style="cursor: pointer"
    ></v-img>
    <v-card-title class="text-h6 text-md-h5 pa-4">{{ project.name }}</v-card-title>

    <!-- Project Detail Dialog -->
    <v-dialog
      v-model="showDialog"
      max-width="500"
      class="project-dialog"
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
            :src="project.image"
            :aspect-ratio="1"
            cover
            class="rounded-t-lg"
          ></v-img>
        </div>
        <v-card-title class="text-h5 pa-4">
          {{ project.name }}
        </v-card-title>
        <v-card-text class="pa-4">
          {{ project.description }}
        </v-card-text>
        <v-card-actions class="pa-4">
          <v-btn
            color="primary"
            block
            class="rounded-lg"
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
import { ref } from 'vue'

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})

const showDialog = ref(false)
</script>

<style scoped>
.project-dialog :deep(.v-overlay__content) {
  max-height: 90vh;
  overflow-y: auto;
}

.position-relative {
  position: relative;
}

.position-absolute {
  position: absolute;
}
</style> 