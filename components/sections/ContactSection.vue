<template>
  <v-container class="py-8 py-md-16">
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8">
        <v-card class="pa-4 pa-md-6">
          <h3 class="text-h4 text-md-h3 text-center mb-6">Hubungi Kami</h3>
          <v-form @submit.prevent="submitForm" ref="formRef">
            <v-text-field
              v-model="form.name"
              label="Nama"
              variant="outlined"
              class="mb-4"
              :disabled="loading"
              required
            ></v-text-field>
            <v-text-field
              v-model="form.email"
              label="Email"
              variant="outlined"
              class="mb-4"
              :disabled="loading"
              required
            ></v-text-field>
            <v-text-field
              v-model="form.phone"
              label="No. HP"
              variant="outlined"
              class="mb-4"
              :disabled="loading"
              required
            ></v-text-field>
            <v-textarea
              v-model="form.message"
              label="Pesan"
              variant="outlined"
              class="mb-4"
              :disabled="loading"
              required
            ></v-textarea>
            <v-btn
              color="primary"
              size="large"
              block
              type="submit"
              class="rounded-lg"
              :loading="loading"
              :disabled="loading"
            >
              Kirim pesan
            </v-btn>
            <v-alert
              v-if="success"
              type="success"
              class="mt-4"
              border="start"
              variant="tonal"
            >
              Pesan Anda berhasil dikirim! Kami akan segera menghubungi Anda.
            </v-alert>
            <v-alert
              v-if="error"
              type="error"
              class="mt-4"
              border="start"
              variant="tonal"
            >
              {{ error }}
            </v-alert>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useContact } from '~/composables/useContact'

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})
const formRef = ref(null)

const { loading, error, success, submitContact } = useContact()

const submitForm = async () => {
  try {
    await submitContact(form.value)
    form.value = { name: '', email: '', phone: '', message: '' }
    if (formRef.value) formRef.value.resetValidation()
  } catch (e) {
    // error is handled by composable
  }
}
</script> 