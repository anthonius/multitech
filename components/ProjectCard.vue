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
      max-width="900"
      class="project-dialog"
    >
      <v-card class="rounded-lg pa-0" style="background: transparent; box-shadow: none;">
        <div class="position-relative">
          <v-btn
            icon="mdi-close"
            color="white"
            class="position-absolute close-btn"
            style="top: 16px; right: 16px; z-index: 2; background: rgba(0,0,0,0.5);"
            @click="showDialog = false"
          ></v-btn>
          <v-img
            :src="project.imageLargeUrl || project.image"
            cover
            class="rounded-lg dialog-image"
            style="max-height: 95vh; width: 100%; object-fit: contain; background: #222;"
          ></v-img>
        </div>
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
  max-width: 900px !important;
  max-height: 95vh !important;
  overflow-y: auto;
  background: transparent;
}
.position-relative {
  position: relative;
}
.position-absolute {
  position: absolute;
}
.close-btn {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 2;
}
.dialog-image {
  display: block;
  margin: 0 auto;
  max-width: 100%;
  max-height: 95vh;
  background: #222;
}
</style> 