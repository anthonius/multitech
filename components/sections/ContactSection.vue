<template>
  <v-container class="py-8 py-md-16">
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8">
        <v-card class="pa-4 pa-md-6">
          <h2 class="text-h4 text-md-h3 text-center mb-6">Contact Us</h2>
          <v-form @submit.prevent>
            <v-text-field
              label="Name"
              variant="outlined"
              class="mb-4"
            ></v-text-field>
            <v-text-field
              label="Email"
              variant="outlined"
              class="mb-4"
            ></v-text-field>
            <v-textarea
              label="Message"
              variant="outlined"
              class="mb-4"
            ></v-textarea>
            <v-btn
              color="primary"
              size="large"
              block
              type="submit"
            >
              Send Message
            </v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template> 