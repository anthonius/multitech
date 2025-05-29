<template>
  <v-container class="py-8 py-md-16 bg-white rounded-lg">
    <h2 class="text-h4 text-md-h3 text-center mb-8">Jasa Kami</h2>
    <v-row>
      <v-col v-for="(service, index) in services" :key="index" cols="12" sm="6" md="4" class="mb-4">
        <v-card class="h-100">
          <v-card-title class="text-h6 text-md-h5">
            <v-icon size="large" color="primary" class="mr-2">
              {{ service.icon }}
            </v-icon>
            {{ service.name }}
          </v-card-title>
          <v-card-text>
            {{ service.description }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
const services = [
  {
    name: 'Pabrikasi',
    icon: 'mdi-factory',
    description: 'Deskripsi untuk jasa pabrikasi'
  },
  {
    name: 'Sewa Scaffolding',
    icon: 'mdi-office-building',
    description: 'Kami menyediakan jasa sewa scaffolding dengan jaminan 2-hour delivery. Hemat, cepat, mantap!'
  },
  {
    name: 'Perancah Besi Konstruksi',
    icon: 'mdi-hammer-wrench',
    description: 'Dibuat dengan sepenuh hati, jiwa dan raga, besi kami memiliki kekerasan 9 Mohs setara dengan batu safir dan ruby.'
  }
]
</script>