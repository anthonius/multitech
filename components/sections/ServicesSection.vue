<template>
  <v-container class="py-8 py-md-16 bg-white">
    <h2 class="text-h4 text-md-h3 text-center mb-8">Our Services</h2>
    <v-row>
      <v-col v-for="i in 3" :key="i" cols="12" sm="6" md="4" class="mb-4">
        <v-card class="h-100">
          <v-card-title class="text-h6 text-md-h5">
            <v-icon size="large" color="primary" class="mr-2">
              mdi-star
            </v-icon>
            Service {{ i }}
          </v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template> 