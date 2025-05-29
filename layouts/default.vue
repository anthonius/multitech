<template>
  <v-app>
    <TheHeader />
    <v-main>
      <slot />
    </v-main>
    <TheFooter />
  </v-app>
</template>

<script setup>
import TheHeader from '~/components/layout/TheHeader.vue'
import TheFooter from '~/components/layout/TheFooter.vue'
</script> 