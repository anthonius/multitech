<template>
  <div>
    <v-container class="py-8 py-md-16">
      <h1 class="text-h4 text-md-h3 mb-8 text-white red-mark">Proyek Kami</h1>
      
      <div v-if="loading" class="d-flex justify-center align-center py-16">
        <v-progress-circular indeterminate color="primary" size="64" />
      </div>
      <v-alert v-else-if="error" type="error" class="mb-8">
        {{ error }}
      </v-alert>
      <v-row v-else>
        <v-col
          v-for="project in projects"
          :key="project.id"
          cols="12"
          sm="6"
          md="4"
          class="mb-4"
        >
          <ProjectCard :project="project" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import ProjectCard from '~/components/ProjectCard.vue'
import { useProjects } from '~/composables/useProjects'

const { projects, loading, error, fetchProjects } = useProjects()

onMounted(fetchProjects)
</script> 