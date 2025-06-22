<template>
  <v-container class="hero-section py-8 py-md-16">
    <v-row align="center" class="fill-height">
      <v-col cols="12" md="6" class="text-center text-md-left">
        <h2 class="text-h4 text-md-h3 font-weight-bold text-white mb-4 red-mark">
          Pabrikasi,
          <br />Sewa Scaffolding &
          <br />Perancah Besi Konstruksi
        </h2>
        <p class="text-h6 text-white mb-8 text-left">
          Temukan solusi inovatif untuk keperluan bisnis Anda
        </p>
        <br /> <br />
        <v-btn 
          color="white" 
          size="large" 
          class="text-primary"
          to="/contact"
        >
          Hubungi Kami
        </v-btn>
      </v-col>
      <v-col cols="12" md="6" class="text-center mt-8 mt-md-0">
        <v-carousel
          hide-delimiter-background
          show-arrows="hover"
          height="auto"
          class="rounded-lg"
          :interval="3000"
          cycle
        >
          <v-carousel-item
            v-for="(image, i) in heroImages"
            :key="i"
          >
            <v-img
              :src="image.src"
              :aspect-ratio="16/9"
              contain
              class="rounded-lg"
            ></v-img>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const heroImages = [
  {
    src: 'https://multitechscaffolding.com/imagesfile/20140807221113_745.jpeg',
    alt: 'Hero Image 1'
  },
  {
    src: 'https://multitechscaffolding.com/imagesfile/20140826225845_410.gif',
    alt: 'Hero Image 2'
  },
  {
    src: 'https://multitechscaffolding.com/imagesfile/20161107014122_740.jpeg',
    alt: 'Hero Image 3'
  },
  {
    src: 'https://multitechscaffolding.com/imagesfile/20170321033212_779.jpeg',
    alt: 'Hero Image 4'
  }
]
</script>

<style scoped>
.hero-section {
  min-height: 80vh;
  display: flex;
  align-items: center;
}
</style> 