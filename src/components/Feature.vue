<template>
  <div class="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
    <a href="#" class="w-full block h-full">
      <img alt="blog photo" :src="feature.img" class="max-h-40 w-full object-cover" />
      <div class="bg-white dark:bg-gray-800 w-full p-4">
        <!--p class="text-indigo-500 text-md font-medium">
          Oui
        </p -->
        <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
          {{ feature.header }}
        </p>
        <p class="text-gray-400 dark:text-gray-300 font-light text-md">
          The new supercar is here, 543 cv and 140 000$ !!
        </p>
        <div class="flex items-center mt-4">
          <a href="#" class="btn btn-outline-secondary btn-icon block">
            Learn more
            <ArrowSmRightIcon class="w-4 h-4 ml-2" />
 
          </a>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import {
  ArrowSmRightIcon,
  BadgeCheckIcon,
  GlobeIcon,
  TruckIcon
} from '@heroicons/vue/outline'
export default defineComponent({
  components: {
    ArrowSmRightIcon,
    BadgeCheckIcon,
    GlobeIcon,
    TruckIcon
  },
  props: ['feature']
})
</script>
