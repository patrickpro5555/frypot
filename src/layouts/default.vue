<template>
  <div class="min-h-screen flex flex-col bg-primary-100">
    <header class="">
      <app-navbar />
    </header>
    <main class="flex-1">
      <router-view />
    </main>
    <app-footer />
  </div>
</template>

<script>
import AppNavbar from '../components/AppNavbar.vue'
import AppFooter from '../components/Footer.vue'

export default {
  components: { AppNavbar, AppFooter },
  setup() {
    return {}
  }
}
</script>

