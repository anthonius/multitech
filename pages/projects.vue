<template>
  <div>
    <v-container class="py-8 py-md-16">
      <h1 class="text-h4 text-md-h3 mb-8 text-white red-mark">Proyek Kami</h1>
      
      <v-row>
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
const projects = [
  {
    id: 1,
    name: 'Project 1',
    description: 'Description for project 1',
    image: 'https://via.placeholder.com/400x300'
  },
  {
    id: 2,
    name: 'Project 2',
    description: 'Description for project 2',
    image: 'https://via.placeholder.com/400x300'
  },
  {
    id: 3,
    name: 'Project 3',
    description: 'Description for project 3',
    image: 'https://via.placeholder.com/400x300'
  },
  {
    id: 4,
    name: 'Project 4',
    description: 'Description for project 4',
    image: 'https://via.placeholder.com/400x300'
  },
  {
    id: 5,
    name: 'Project 5',
    description: 'Description for project 5',
    image: 'https://via.placeholder.com/400x300'
  },
  {
    id: 6,
    name: 'Project 6',
    description: 'Description for project 6',
    image: 'https://via.placeholder.com/400x300'
  }
]
</script> 