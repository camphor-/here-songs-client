<template>
  <v-container>
    <toppage-logo class="logo" />
    <h1 class="error-page-title">Relaym</h1>
    <p>{{ error.message }}</p>
    <div class="home-button-wrapper">
      <v-btn round color="secondary" class="home" href="/"
        >Return to Top Page</v-btn
      >
    </div>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import ToppageLogo from '@/components/molecules/ToppageLogo.vue'

@Component({
  components: {
    ToppageLogo
  }
})
export default class Error extends Vue {
  @Prop({ default: {} }) readonly error!: any

  head() {
    return {
      title: 'Error'
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  margin: 32px auto;
}

.error-page-title {
  color: $primary-color;
}

.home-button-wrapper {
  margin-top: 30px;
  text-align: center;
}
</style>
