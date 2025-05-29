<script setup>
definePageMeta({
  layout: 'admin',
  middleware: 'auth'
})
</script>

<template>
  <div>
    <h1 class="text-h3 mb-6">Admin Dashboard</h1>
    <v-row>
      <v-col cols="12" md="4">
        <v-card>
          <v-card-title>Total Users</v-card-title>
          <v-card-text>
            <div class="text-h4">1,234</div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card>
          <v-card-title>Active Sessions</v-card-title>
          <v-card-text>
            <div class="text-h4">56</div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card>
          <v-card-title>Total Revenue</v-card-title>
          <v-card-text>
            <div class="text-h4">$12,345</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template> 