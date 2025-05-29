<template>
  <v-container id="products" class="py-8 py-md-16 bg-white">
    <h2 class="text-h4 text-md-h3 text-center mb-8">Our Products</h2>
    <v-row>
      <v-col v-for="i in 3" :key="i" cols="12" sm="6" md="4" class="mb-4">
        <v-card class="h-100 rounded-lg" elevation="2">
          <v-img
            src="https://via.placeholder.com/400x300"
            height="200"
            cover
            class="rounded-t-lg"
          ></v-img>
          <v-card-title class="text-h6 text-md-h5">Product {{ i }}</v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" block class="rounded-lg">Learn More</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template> 