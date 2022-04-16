<template>
  <nav class="text-gray-600 body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-primary-500 shadow">
      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <FireIcon class="w-10 h-10 p-2 bg-primary-700 text-primary-100 rounded-full" />
        <span class="ml-3 text-xl">Frypot</span>
      </a>
      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center font-semibold">
        <a href="/" class="mr-5 text-primary-700 hover:text-primary-900">Home</a>
        <a href="/frypot/about" class="mr-5 text-primary-700 hover:text-primary-900">About</a>
        <a href="/frypot/menu" class="mr-5 text-primary-700 hover:text-primary-900">Menu</a>
        <a href="frypot/contact" class="mr-5 text-primary-700 hover:text-primary-900">Contact</a>
      </nav>
      <button class="btn btn-dark btn-icon ">
        <LockOpenIcon class="w-4 h-4 mr-2"/>
        Login
      </button>
    </div>
  </nav>
</template>

<script>
import { FireIcon, LockOpenIcon } from '@heroicons/vue/outline'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    FireIcon,
    LockOpenIcon
  },
  setup() {
    return {}
  }
})
</script>
