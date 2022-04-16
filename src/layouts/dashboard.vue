<template>

<div class="min-h-screen flex bg-gray-200">
  <nav class="w-64 flex-none">
    <sidebar />
  </nav>

  <main class="flex-1 min-w-0 overflow-auto pt-1 px-2">
    <navbar />
    <div class="">
    <router-view />
    </div>
  </main>
</div>
</template>

<script>
import {defineComponent} from 'vue'
import Navbar from '../components/Nav/Dashboard.vue'
import Sidebar from '../components/Nav/Sidebar.vue'
export default defineComponent({
  components: {Navbar, Sidebar}
})

</script>
