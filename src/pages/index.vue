<template>
  <!-- Hero -->
  <Hero />
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-16 mx-auto">
      <div class="text-center mb-20">
        <h1 class="sm:text-3xl text-2xl font-medium title-font text-secondary-600 mb-4">
          Welcome to Frypot Resturant
        </h1>
        <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Blue bottle crucifix vinyl
          post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.
        </p>
        <div class="flex mt-6 justify-center">
          <div class="w-16 h-1 rounded-full bg-secondary-600 inline-flex"></div>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
        <Feature v-for="feature in features" :feature="feature" />
      </div>
    </div>
  </section>
  <Gallery />

</template>

<script>
import { ref } from 'vue'

import { featuresData } from '../data.js'

import Hero from '../components/Hero.vue'
import Feature from '../components/Feature.vue'
import Gallery from '../components/Gallery.vue'

export default {
  components: {
    Feature,
    Gallery,
    Hero
  },
  setup() {
    //import icons in the feature component ;-)
    const features = (featuresData)
    return { features }
  }
}
</script>
